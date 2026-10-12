---
title: API Reference
description: PlaceOS API documentation and reference guides
---

# PlaceOS API Reference

In order to use the PlaceOS API and Staff API, you will need to obtain an API Key to accompany all API Requests.

To generate an API Key you can follow the instructions to generate an [X-API Key](../../how-to/authentication/x-api-keys).

PlaceOS has two main APIs, you can navigate to the API Swagger using the links below or in the left navigation menu:

## REST API

The main PlaceOS REST API provides access to all core functionality including systems, modules, zones, and more.

**[REST API Documentation →](https://placeos.github.io/rest-api-swagger-ui/)**

**MCP server:** `/api/engine/v2/mcp`, the REST API as tools for AI assistants such as Claude, ChatGPT and Copilot. See [connecting via MCP](../../tutorials/backend/write-a-driver/chatgpt-llm-capabilities/native-gpt-plugins).

## Staff API

The Staff API provides specialized endpoints for staff directory integration and calendar access.

**[Staff API Documentation →](https://placeos.github.io/staff-api-swagger-ui/)**

**MCP server:** `/api/staff/v1/mcp`, the Staff API as tools for AI assistants such as Claude, ChatGPT and Copilot: booking desks, rooms and meetings, with interactive cards and guided prompts. See [connecting via MCP](../../tutorials/backend/write-a-driver/chatgpt-llm-capabilities/native-gpt-plugins).

## WebSocket API

For real-time communication and live updates, PlaceOS provides a WebSocket API.

- [WebSocket API](websocket) - Real-time communication documentation

## Authentication

All API requests require authentication using API keys:

- [X-API Keys](../../how-to/authentication/x-api-keys) - Generate and manage API keys for authentication

## Uploads

File uploads (images, documents, videos etc)

- [Resumable Uploads](uploads) - Direct to cloud uploads using signed requests
