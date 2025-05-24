"""
This script fixes the moviepy.editor import issue with Python 3.12.
Run this script before running video_server.py.
"""

import os
import sys
import importlib.util
import site

def fix_moviepy_import():
    print("Checking moviepy installation...")
    
    # Check if moviepy is installed
    try:
        import moviepy
        print(f"Found moviepy version {moviepy.__version__} at {moviepy.__file__}")
    except ImportError:
        print("Moviepy not found. Installing...")
        import subprocess
        subprocess.check_call([sys.executable, "-m", "pip", "install", "moviepy"])
        import moviepy
        print(f"Installed moviepy version {moviepy.__version__}")
    
    # Check if moviepy.editor exists
    moviepy_path = os.path.dirname(moviepy.__file__)
    editor_path = os.path.join(moviepy_path, "editor.py")
    
    if not os.path.exists(editor_path):
        print(f"Creating moviepy.editor module at {editor_path}")
        
        # Create a simple editor.py file that imports the necessary components
        with open(editor_path, "w") as f:
            f.write("""
# This file was auto-generated to fix import issues
from moviepy.video.io.VideoFileClip import VideoFileClip
from moviepy.video.VideoClip import VideoClip, ImageClip
from moviepy.video.compositing.CompositeVideoClip import CompositeVideoClip
from moviepy.video.fx.resize import resize
from moviepy.audio.AudioClip import AudioClip
from moviepy.audio.io.AudioFileClip import AudioFileClip
""")
        
        print("Created moviepy.editor module")
    else:
        print("moviepy.editor module already exists")
    
    # Try importing to verify
    try:
        from moviepy.editor import VideoFileClip
        print("Successfully imported VideoFileClip from moviepy.editor")
        return True
    except ImportError as e:
        print(f"Error importing from moviepy.editor: {e}")
        return False

if __name__ == "__main__":
    success = fix_moviepy_import()
    if success:
        print("\nFix applied successfully. You can now run video_server.py")
    else:
        print("\nFailed to apply fix. Please try installing dependencies manually:")
        print("pip install moviepy==1.0.3 decorator==4.4.2")
