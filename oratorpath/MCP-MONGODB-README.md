# MCP MongoDB Server Integration

This document provides instructions on how to use the MCP MongoDB server with your OratorPath application.

## What is MCP MongoDB Server?

MCP (Model Context Protocol) MongoDB Server is a tool that enables LLMs (Large Language Models) to interact with MongoDB databases. It provides capabilities for inspecting collection schemas and executing MongoDB operations through a standardized interface.

## Key Features

- **Smart ObjectId Handling**: Intelligent conversion between string IDs and MongoDB ObjectId
- **Read-Only Mode**: Protection against write operations for safely connecting to production databases
- **MongoDB Operations**: Execute queries, aggregations, and more
- **LLM Integration**: Collection completions for enhanced LLM interaction

## Setup

The MCP MongoDB server has been installed and configured for your OratorPath application. The configuration files are:

- `mcp-config.json`: Contains the configuration for the MCP MongoDB server
- `.env.local`: Contains the environment variables for the MCP MongoDB server
- `start-mcp-server.bat`: Script to start the MCP MongoDB server using environment variables
- `start-mcp-server-readonly.bat`: Script to start the MCP MongoDB server in read-only mode using environment variables
- `start-mcp-server-alt.bat`: Alternative script to start the MCP MongoDB server using command-line arguments
- `start-mcp-server-readonly-alt.bat`: Alternative script to start the MCP MongoDB server in read-only mode using command-line arguments

## Usage

### Starting the MCP MongoDB Server

You have two options to start the MCP MongoDB server:

#### Option 1: Using Environment Variables

```bash
start-mcp-server.bat
```

#### Option 2: Using Command-Line Arguments

```bash
start-mcp-server-alt.bat
```

Both options will start the MCP MongoDB server with write access to your database.

### Starting the MCP MongoDB Server in Read-Only Mode

Similarly, you have two options to start the MCP MongoDB server in read-only mode:

#### Option 1: Using Environment Variables

```bash
start-mcp-server-readonly.bat
```

#### Option 2: Using Command-Line Arguments

```bash
start-mcp-server-readonly-alt.bat
```

Both options will start the MCP MongoDB server with read-only access to your database, which is safer for production environments.

## Integration with LLMs

The MCP MongoDB server can be integrated with various LLMs such as Claude Desktop, Windsurf, and Cursor. For more information, refer to the [official documentation](https://github.com/kiliczsh/mcp-mongo-server).

### Claude Desktop Integration

To integrate with Claude Desktop, add the following configuration to Claude Desktop's config file:

**Windows**: `%APPDATA%/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "mongodb": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-mongo-server",
        "mongodb+srv://oratorpath:eHOwaW3T5lHHNdbG@cluster0.1ri6u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      ]
    },
    "mongodb-readonly": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-mongo-server",
        "mongodb+srv://oratorpath:eHOwaW3T5lHHNdbG@cluster0.1ri6u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        "--read-only"
      ]
    }
  }
}
```

## Available Tools

### Query Operations

- **query**: Execute MongoDB queries
- **aggregate**: Run aggregation pipelines
- **count**: Count matching documents

### Write Operations

- **update**: Modify documents
- **insert**: Add new documents
- **createIndex**: Create collection indexes

### System Operations

- **serverInfo**: Get MongoDB server details

## Troubleshooting

If you encounter any issues with the MCP MongoDB server, try the following:

1. Check that the MongoDB URI in `.env.local` is correct
2. Ensure that the MCP MongoDB server is running
3. Check the console output for any error messages

For more information, refer to the [official documentation](https://github.com/kiliczsh/mcp-mongo-server).
