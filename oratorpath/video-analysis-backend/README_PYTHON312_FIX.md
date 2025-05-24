# Python 3.12 Compatibility Fix for Video Analysis

This directory contains several files to help fix compatibility issues with Python 3.12 and the FER (Facial Emotion Recognition) library.

## The Issue

The FER library depends on `moviepy.editor`, but in Python 3.12, this import is not working correctly even when moviepy is installed. This is because of changes in how Python 3.12 handles imports.

## Solution Options

### Option 1: Run the Fix Script First

1. Run the fix script to patch the moviepy installation:
   ```
   python fix_moviepy.py
   ```

2. Then run the fixed server:
   ```
   python video_server_fixed.py
   ```

   Or use the batch file:
   ```
   run_fixed_server.bat
   ```

### Option 2: Use the Mock Server for Testing

If you're just testing the frontend and don't need actual video analysis:

1. Run the mock server:
   ```
   python mock_video_server.py
   ```

   Or use the batch file:
   ```
   run_mock_server.bat
   ```

The mock server returns random data but has the same API structure, allowing you to test the frontend.

### Option 3: Install a Different Python Version

If the fixes don't work, consider installing Python 3.10 or 3.11, which are known to work better with the FER library:

1. Download and install Python 3.10 or 3.11 from [python.org](https://www.python.org/downloads/)
2. Create a new virtual environment with the older Python version
3. Install the dependencies in that environment:
   ```
   pip install flask flask-cors opencv-python numpy fer moviepy tensorflow mtcnn
   ```

## Files in this Directory

- `video_server.py` - Original video analysis server
- `video_server_fixed.py` - Fixed version with better error handling and Python 3.12 compatibility
- `fix_moviepy.py` - Script to fix the moviepy import issue
- `mock_video_server.py` - Mock implementation for testing the frontend
- `run_fixed_server.bat` - Batch file to run the fixed server
- `run_mock_server.bat` - Batch file to run the mock server
- `requirements.txt` - Required Python packages

## Troubleshooting

If you still encounter issues:

1. Check that all dependencies are installed:
   ```
   pip install -r requirements.txt
   ```

2. Try installing specific versions of problematic packages:
   ```
   pip install moviepy==1.0.3 decorator==4.4.2
   ```

3. Check the console output for specific error messages

4. Try the mock server to at least test the frontend functionality
