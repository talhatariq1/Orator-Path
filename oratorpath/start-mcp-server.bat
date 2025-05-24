@echo off
echo Starting MCP MongoDB Server...
echo.

:: Set the MongoDB URI directly
set "MONGODB_URI=mongodb+srv://oratorpath:eHOwaW3T5lHHNdbG@cluster0.1ri6u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

:: Set the MCP environment variable
set "MCP_MONGODB_URI=%MONGODB_URI%"
set "MCP_MONGODB_READONLY=false"

:: Start the MCP MongoDB server
echo Using MongoDB URI: %MCP_MONGODB_URI%
npx -y mcp-mongo-server

echo.
echo MCP MongoDB Server stopped.
pause
