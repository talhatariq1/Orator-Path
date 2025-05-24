@echo off
echo Starting MCP MongoDB Server in Read-Only Mode (Alternative Method)...
echo.

:: Set the MongoDB URI directly
set "MONGODB_URI=mongodb+srv://oratorpath:eHOwaW3T5lHHNdbG@cluster0.1ri6u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

:: Start the MCP MongoDB server in read-only mode using command-line arguments
echo Using MongoDB URI: %MONGODB_URI%
npx -y mcp-mongo-server %MONGODB_URI% --read-only

echo.
echo MCP MongoDB Server stopped.
pause
