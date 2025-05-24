@echo off
echo Starting MCP MongoDB Server (Alternative Method)...
echo.

:: Set the MongoDB URI directly
set "MONGODB_URI=mongodb+srv://oratorpath:eHOwaW3T5lHHNdbG@cluster0.1ri6u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

:: Start the MCP MongoDB server using command-line argument
echo Using MongoDB URI: %MONGODB_URI%
npx -y mcp-mongo-server %MONGODB_URI%

echo.
echo MCP MongoDB Server stopped.
pause
