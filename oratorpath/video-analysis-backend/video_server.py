from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import tempfile
import cv2
import numpy as np
from fer import FER
import time
import json
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app)

# Initialize the FER detector
detector = FER(mtcnn=True)  # Using MTCNN for better face detection

@app.route('/analyze_video', methods=['POST'])
def analyze_video():
    try:
        start_time = time.time()
        print("Received video for analysis")
        
        if 'video' not in request.files:
            return jsonify({'error': 'No video file in request'}), 400
        
        video_file = request.files['video']
        
        if video_file.filename == '':
            return jsonify({'error': 'No selected video file'}), 400
        
        # Save the uploaded file to a temporary location
        filename = secure_filename(video_file.filename)
        temp_dir = tempfile.mkdtemp()
        video_path = os.path.join(temp_dir, filename)
        video_file.save(video_path)
        
        print(f"Video saved to temporary location: {video_path}")
        
        # Process the video
        result = process_video(video_path)
        
        # Delete temporary file
        try:
            os.remove(video_path)
            os.rmdir(temp_dir)
        except Exception as e:
            print(f"Warning: Could not delete temporary file: {e}")
        
        processing_time = time.time() - start_time
        print(f"Video processing completed in {processing_time:.2f} seconds")
        
        return jsonify(result)
    
    except Exception as e:
        print(f"Error processing video: {str(e)}")
        return jsonify({'error': str(e)}), 500

def process_video(video_path):
    """Process video and detect emotions in each frame"""
    cap = cv2.VideoCapture(video_path)
    
    if not cap.isOpened():
        raise Exception("Could not open video file")
    
    fps = cap.get(cv2.CAP_PROP_FPS)
    frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    duration = frame_count / fps if fps > 0 else 0
    
    print(f"Video info: {frame_count} frames, {fps} FPS, {duration:.2f} seconds")
    
    # Sample frames - analyze every 5 frames to reduce processing time
    sample_interval = 5
    emotions_by_frame = []
    frame_index = 0
    
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        
        # Only process every nth frame
        if frame_index % sample_interval == 0:
            # Convert to RGB (fer expects RGB)
            rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            
            # Detect emotions
            try:
                emotions = detector.detect_emotions(rgb_frame)
                timestamp = frame_index / fps
                
                # Add results for this frame
                if emotions:
                    for face_idx, face in enumerate(emotions):
                        emotions_by_frame.append({
                            "frame": frame_index,
                            "timestamp": timestamp,
                            "face_id": face_idx,
                            "box": face["box"],
                            "emotions": face["emotions"]
                        })
            except Exception as e:
                print(f"Error processing frame {frame_index}: {str(e)}")
        
        frame_index += 1
        
        # Print progress periodically
        if frame_index % 50 == 0:
            print(f"Processed {frame_index}/{frame_count} frames ({(frame_index/frame_count)*100:.1f}%)")
    
    cap.release()
    
    # Calculate emotion summaries
    emotion_summary = calculate_emotion_summary(emotions_by_frame)
    
    result = {
        "video_info": {
            "frame_count": frame_count,
            "fps": fps,
            "duration": duration,
            "analyzed_frames": len(range(0, frame_count, sample_interval))
        },
        "emotion_timeline": emotions_by_frame,
        "emotion_summary": emotion_summary
    }
    
    return result

def calculate_emotion_summary(emotions_by_frame):
    """Calculate summary statistics for emotions across all frames"""
    if not emotions_by_frame:
        return {
            "dominant_emotion": "unknown",
            "emotion_percentages": {},
            "face_count_avg": 0
        }
    
    # Count frames with faces
    frames_with_faces = {}
    for entry in emotions_by_frame:
        frame_num = entry["frame"]
        face_id = entry["face_id"]
        
        if frame_num not in frames_with_faces:
            frames_with_faces[frame_num] = set()
        
        frames_with_faces[frame_num].add(face_id)
    
    # Calculate average faces per frame
    face_counts = [len(faces) for faces in frames_with_faces.values()]
    avg_faces = sum(face_counts) / len(face_counts) if face_counts else 0
    
    # Aggregate emotions across all frames and faces
    all_emotions = {
        "angry": 0, "disgust": 0, "fear": 0, 
        "happy": 0, "sad": 0, "surprise": 0, "neutral": 0
    }
    
    # Track dominant emotion for each face in each frame
    dominant_emotions = []
    
    for entry in emotions_by_frame:
        emotions = entry["emotions"]
        
        # Add to emotion totals
        for emotion, score in emotions.items():
            if emotion in all_emotions:
                all_emotions[emotion] += score
        
        # Find dominant emotion for this face+frame
        max_emotion = max(emotions.items(), key=lambda x: x[1])
        dominant_emotions.append(max_emotion[0])
    
    # Calculate percentages
    total = sum(all_emotions.values())
    emotion_percentages = {emotion: (value / total * 100) if total > 0 else 0 
                         for emotion, value in all_emotions.items()}
    
    # Get overall dominant emotion
    if dominant_emotions:
        # Count occurrences of each emotion
        from collections import Counter
        emotion_counts = Counter(dominant_emotions)
        overall_dominant = emotion_counts.most_common(1)[0][0]
    else:
        overall_dominant = "unknown"
    
    return {
        "dominant_emotion": overall_dominant,
        "emotion_percentages": emotion_percentages,
        "face_count_avg": avg_faces,
        "emotion_changes": len(set(dominant_emotions)) if dominant_emotions else 0
    }

if __name__ == '__main__':
    print("Starting facial emotion analysis server on port 5001...")
    app.run(host='127.0.0.1', port=5001, debug=True)