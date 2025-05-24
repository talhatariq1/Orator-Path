from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import tempfile
import cv2
import numpy as np
import time
import traceback
from werkzeug.utils import secure_filename
from collections import Counter

# Fix moviepy import issue for Python 3.12
try:
    from fer import FER
except ImportError as e:
    print(f"Error importing FER: {e}")
    print("Attempting to fix dependencies...")
    try:
        import sys
        import subprocess

        # Install required packages with specific versions
        subprocess.check_call([sys.executable, "-m", "pip", "install",
                              "fer", "moviepy==1.0.3", "decorator==4.4.2"])

        # Try importing again
        from fer import FER
    except Exception as e:
        print(f"Failed to import FER: {e}")
        print("Please install required packages manually:")
        print("pip install flask flask-cors opencv-python numpy fer moviepy==1.0.3 decorator==4.4.2")
        raise

app = Flask(__name__)
CORS(app)

# Initialize the FER detector
detector = FER(mtcnn=True)  # Using MTCNN for better face detection

@app.route('/analyze_video', methods=['POST'])
def analyze_video():
    temp_dir = None
    video_path = None

    try:
        start_time = time.time()

        # Validate request
        if 'video' not in request.files:
            return jsonify({'error': 'No video file in request'}), 400

        video_file = request.files['video']
        if video_file.filename == '':
            return jsonify({'error': 'No selected video file'}), 400

        # Create temporary file
        temp_dir = tempfile.mkdtemp()
        filename = secure_filename(video_file.filename)
        video_path = os.path.join(temp_dir, filename)
        video_file.save(video_path)

        # Validate saved file
        if not os.path.exists(video_path):
            return jsonify({'error': 'Failed to save video file'}), 500

        file_size = os.path.getsize(video_path)
        if file_size == 0:
            return jsonify({'error': 'Video file is empty'}), 400

        # Process the video
        result = process_video(video_path)

        processing_time = time.time() - start_time
        print(f"Video processed in {processing_time:.2f}s")

        return jsonify(result)

    except Exception as e:
        print(f"Error processing video: {str(e)}")
        traceback.print_exc()
        return jsonify({
            'error': str(e),
            'message': 'Video processing failed. Please try a different video file.'
        }), 500

    finally:
        # Clean up temporary files
        try:
            if video_path and os.path.exists(video_path):
                os.remove(video_path)
            if temp_dir and os.path.exists(temp_dir):
                os.rmdir(temp_dir)
        except Exception as e:
            print(f"Warning: Cleanup failed: {e}")

def process_video(video_path):
    """Process video and detect emotions in each frame"""
    cap = None
    try:
        # Verify and open video file
        if not os.path.exists(video_path):
            raise Exception(f"Video file not found at path: {video_path}")

        cap = cv2.VideoCapture(video_path)
        if not cap.isOpened():
            raise Exception(f"Could not open video file: {video_path}")

        # Get video properties with fallbacks
        fps = cap.get(cv2.CAP_PROP_FPS)
        fps = 30 if fps <= 0 else fps  # Default to 30 FPS if invalid

        frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
        is_unknown_length = frame_count <= 0
        frame_count = float('inf') if is_unknown_length else frame_count

        duration = frame_count / fps if fps > 0 and frame_count != float('inf') else 0
        print(f"Video info: {frame_count if frame_count != float('inf') else 'unknown'} frames, {fps} FPS")

        # Adaptive sampling based on video length
        sample_interval = 15 if duration > 120 else (10 if duration > 60 else 5)
        max_frames_to_process = 5000  # Limit processing for very long videos

        emotions_by_frame = []
        frame_index = 0
        actual_frame_count = 0

        # Process video frames
        while frame_index < max_frames_to_process and (is_unknown_length or frame_index < frame_count):
            ret, frame = cap.read()
            if not ret:
                if frame_index == 0:
                    raise Exception("Could not read any frames from video file")
                break  # End of video

            actual_frame_count += 1

            # Process only sampled frames
            if frame_index % sample_interval == 0:
                try:
                    # Convert to RGB and detect emotions
                    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
                    emotions = detector.detect_emotions(rgb_frame)
                    timestamp = frame_index / fps

                    # Store results
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

            # Print progress every 100 frames
            if frame_index % 100 == 0:
                if not is_unknown_length:
                    progress = (frame_index / frame_count) * 100
                    print(f"Processed {frame_index}/{frame_count} frames ({progress:.1f}%)")
                else:
                    print(f"Processed {frame_index} frames")

        # Update frame count if we processed all frames of unknown length
        if is_unknown_length:
            frame_count = actual_frame_count
            duration = frame_count / fps

        # Calculate emotion summaries
        emotion_summary = calculate_emotion_summary(emotions_by_frame)

        # Prepare result
        result = {
            "video_info": {
                "frame_count": frame_count if frame_count != float('inf') else actual_frame_count,
                "fps": fps,
                "duration": duration,
                "analyzed_frames": len(range(0, min(int(actual_frame_count), max_frames_to_process), sample_interval)),
                "faces_detected": len(emotions_by_frame) > 0
            },
            "emotion_timeline": emotions_by_frame,
            "emotion_summary": emotion_summary
        }

        return result

    except Exception as e:
        print(f"Error in process_video: {str(e)}")
        traceback.print_exc()
        raise
    finally:
        if cap is not None:
            cap.release()

def calculate_emotion_summary(emotions_by_frame):
    """Calculate summary statistics for emotions across all frames"""
    if not emotions_by_frame:
        return {
            "dominant_emotion": "unknown",
            "emotion_percentages": {},
            "face_count_avg": 0
        }

    # Count frames with faces and track emotions
    frames_with_faces = {}
    all_emotions = {
        "angry": 0, "disgust": 0, "fear": 0,
        "happy": 0, "sad": 0, "surprise": 0, "neutral": 0
    }
    dominant_emotions = []

    # Process all frames in a single loop
    for entry in emotions_by_frame:
        # Track faces per frame
        frame_num = entry["frame"]
        face_id = entry["face_id"]

        if frame_num not in frames_with_faces:
            frames_with_faces[frame_num] = set()
        frames_with_faces[frame_num].add(face_id)

        # Process emotions
        emotions = entry["emotions"]

        # Add to emotion totals
        for emotion, score in emotions.items():
            if emotion in all_emotions:
                all_emotions[emotion] += score

        # Find dominant emotion for this face+frame
        max_emotion = max(emotions.items(), key=lambda x: x[1])[0]
        dominant_emotions.append(max_emotion)

    # Calculate average faces per frame
    face_counts = [len(faces) for faces in frames_with_faces.values()]
    avg_faces = sum(face_counts) / len(face_counts) if face_counts else 0

    # Calculate percentages
    total = sum(all_emotions.values())
    emotion_percentages = {
        emotion: (value / total * 100) if total > 0 else 0
        for emotion, value in all_emotions.items()
    }

    # Get overall dominant emotion using Counter
    overall_dominant = Counter(dominant_emotions).most_common(1)[0][0] if dominant_emotions else "unknown"

    return {
        "dominant_emotion": overall_dominant,
        "emotion_percentages": emotion_percentages,
        "face_count_avg": avg_faces,
        "emotion_changes": len(set(dominant_emotions)) if dominant_emotions else 0
    }

if __name__ == '__main__':
    print("\n" + "="*50)
    print("Video Emotion Analysis Server")
    print("="*50)
    print("Endpoint: http://127.0.0.1:5001/analyze_video")

    try:
        # Test the detector with a small image
        test_img = np.zeros((100, 100, 3), dtype=np.uint8)
        try:
            detector.detect_emotions(test_img)
            print("✅ FER detector initialized successfully")
        except Exception as e:
            print(f"⚠️ Warning: FER detector test failed: {e}")
            print("The server will start, but video processing may fail.")

        print("Starting server on port 5001...")
        app.run(host='127.0.0.1', port=5001, debug=True)
    except Exception as e:
        print(f"\n❌ Failed to start server: {e}")
        traceback.print_exc()
