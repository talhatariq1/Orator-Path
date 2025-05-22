from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import tempfile
import time
import json
import random
import traceback
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app)

@app.route('/analyze_video', methods=['POST'])
def analyze_video():
    temp_dir = None
    video_path = None
    
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
        
        # Check if file exists and is readable
        if not os.path.exists(video_path):
            return jsonify({'error': 'Failed to save video file'}), 500
            
        # Check file size
        file_size = os.path.getsize(video_path)
        print(f"Video file size: {file_size / (1024 * 1024):.2f} MB")
        
        if file_size == 0:
            return jsonify({'error': 'Video file is empty'}), 400
        
        # Simulate processing time
        print("Processing video (mock implementation)...")
        time.sleep(2)  # Simulate 2 seconds of processing
        
        # Generate mock results
        result = generate_mock_results()
        
        processing_time = time.time() - start_time
        print(f"Video processing completed in {processing_time:.2f} seconds")
        
        return jsonify(result)
    
    except Exception as e:
        error_traceback = traceback.format_exc()
        print(f"Error processing video: {str(e)}")
        print(f"Traceback: {error_traceback}")
        return jsonify({
            'error': str(e),
            'message': 'An error occurred during video processing. Please try again with a different video file.'
        }), 500
    
    finally:
        # Clean up temporary files
        if video_path and os.path.exists(video_path):
            try:
                os.remove(video_path)
                print(f"Removed temporary video file: {video_path}")
            except Exception as e:
                print(f"Warning: Could not delete temporary video file: {e}")
        
        if temp_dir and os.path.exists(temp_dir):
            try:
                os.rmdir(temp_dir)
                print(f"Removed temporary directory: {temp_dir}")
            except Exception as e:
                print(f"Warning: Could not delete temporary directory: {e}")

def generate_mock_results():
    """Generate mock emotion analysis results for testing"""
    # Define possible emotions
    emotions = ["happy", "sad", "angry", "neutral", "surprise", "fear", "disgust"]
    
    # Choose a dominant emotion
    dominant_emotion = random.choice(emotions)
    
    # Generate emotion percentages
    emotion_percentages = {}
    remaining = 100.0
    
    # Give the dominant emotion a high percentage
    dominant_percentage = random.uniform(60.0, 85.0)
    emotion_percentages[dominant_emotion] = dominant_percentage
    remaining -= dominant_percentage
    
    # Distribute the rest among other emotions
    for emotion in emotions:
        if emotion != dominant_emotion:
            if remaining > 0:
                if emotion == emotions[-1]:
                    # Last emotion gets whatever is left
                    emotion_percentages[emotion] = remaining
                else:
                    percentage = random.uniform(0.0, remaining / 2)
                    emotion_percentages[emotion] = percentage
                    remaining -= percentage
            else:
                emotion_percentages[emotion] = 0.0
    
    # Generate timeline data
    timeline_length = random.randint(10, 20)
    emotion_timeline = []
    
    for i in range(timeline_length):
        timestamp = i * 0.5  # Every half second
        face_emotions = {}
        
        # Generate random emotions for this frame
        for emotion in emotions:
            if emotion == dominant_emotion:
                face_emotions[emotion] = random.uniform(0.5, 0.9)
            else:
                face_emotions[emotion] = random.uniform(0.0, 0.3)
        
        # Normalize to sum to 1.0
        total = sum(face_emotions.values())
        for emotion in face_emotions:
            face_emotions[emotion] = face_emotions[emotion] / total
        
        emotion_timeline.append({
            "frame": i * 15,  # Assuming 30 fps
            "timestamp": timestamp,
            "face_id": 0,
            "box": [100, 100, 200, 200],  # Mock face bounding box
            "emotions": face_emotions
        })
    
    # Create the result structure
    result = {
        "video_info": {
            "frame_count": timeline_length * 15,
            "fps": 30,
            "duration": timeline_length * 0.5,
            "analyzed_frames": timeline_length,
            "faces_detected": True
        },
        "emotion_timeline": emotion_timeline,
        "emotion_summary": {
            "dominant_emotion": dominant_emotion,
            "emotion_percentages": emotion_percentages,
            "face_count_avg": 1.0,
            "emotion_changes": random.randint(1, 5)
        }
    }
    
    return result

if __name__ == '__main__':
    print("\n" + "="*80)
    print("Starting MOCK Video Emotion Analysis Server")
    print("="*80)
    print("\nThis is a MOCK implementation that returns random data for testing.")
    print("It does not perform actual video analysis.")
    print("\nServer Information:")
    print("- Host: 127.0.0.1")
    print("- Port: 5001")
    print("- Endpoint: /analyze_video")
    print("\nRequired Dependencies:")
    print("- Flask, Flask-CORS: Web server")
    print("\nStarting server...")
    
    try:
        print("\n" + "="*80)
        print("Server is running! Press Ctrl+C to stop.")
        print("="*80 + "\n")
        app.run(host='127.0.0.1', port=5001, debug=True)
    except Exception as e:
        print(f"\n❌ Failed to start server: {e}")
        print("\nPlease check your installation and try again.")
        traceback.print_exc()
        print("\n")
