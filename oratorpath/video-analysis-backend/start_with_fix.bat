@echo off
echo Applying moviepy fix...
python fix_moviepy.py
if %ERRORLEVEL% NEQ 0 (
    echo Failed to apply fix. Please check the error message above.
    pause
    exit /b 1
)

echo.
echo Starting Video Analysis Server...
python video_server.py
pause
