---
title: Real-time Websocket
description: Specifications for interaction with PlaceOS realtime websocket
---

# Real-time Websocket

{% hint style="success" %}
The real-time WebSocket works in conjunction with the [PlaceOS API](./). The PlaceOS API can list systems and zones that are then used with the WebSocket.
{% endhint %}

PlaceOS exposes the endpoint `wss://<app_domain>/api/engine/v2/systems/control` to allow for real-time communication. The endpoint requires a valid API token.

API tokens are sent in the header of the request.

`X-API-Key: <token>`

The `/websocket` endpoint is used to provide real-time interaction with modules running on Engine. It provides an interface to build efficient, responsive user interfaces, monitoring systems and other extensions which require live, two-way or asynchronous interaction.

## Heartbeat

The client can periodically send a raw string as an application layer keep-alive.

`ping`

the server will respond

`pong`

## Commands

Command messages are the basis for interacting with the real-time API. All commands take the form of a JSON payload, and will return a JSON response.

| Attribute | Type                 | Description                                                                                                                                                                 |
| --------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id        | `number` or `string` | A unique ID to associated with the command. This is returned as part of the response. Generally an incrementing counter, however any string or numerical value may be used. |
| cmd       | `string`             | The command type. One of `bind`, `unbind`, `exec`, `debug`, or`ignore`.                                                                                                     |
| sys       | `string`             | The system ID that the command targets.                                                                                                                                     |
| mod       | `string`             | The name of the module that the command targets.                                                                                                                            |
| name      | `string`             | Method, or status variable name to be interacted with.                                                                                                                      |

5 commands available for the user to perform over the API. These are:

### Bind

`bind` command allows the user to bind to status variable values on a given driver module.

Example of a `bind` command:

```yaml
{
  
  "id": 1, # Any number
  "cmd": "bind", # ID of the PlaceOS system
  "sys": "sys-1234", # Name of the PlaceOS module
  "mod": "Bookings",
  "index": 1, # Non-zeroed index of the module in the system. i.e. 1st index is 1
  "name": "bookings" # Name of the variable to bind to
}
```

After a successful bind you will receive a success response from the server. The ID of the response will match the ID of the message.

```json
{
    "id": 1,
    "type": "success",
    "meta": {
        "sys": "sys-1234",
        "mod": "Bookings",
        "index": 1,
        "name": "bookings"
    }
}
```

After binding to a status variable the WebSocket will post the current value and any changes to the value until the `unbind` command is issued.

Example of the value change notification:

```yaml
{
    "id": 18,
    "type": "notify",
    "value": "[]", # Stringified JSON
    "meta": {
        "sys": "sys-1234",
        "mod": "Bookings",
        "index": 1,
        "name": "bookings"
    }
}
```

### Unbind

`unbind` command terminates an existing binding for the given driver module.

Example of a `unbind` command:

```yaml
{
  "id": 2, # Any number
  "cmd": "unbind",
  "sys": "sys-1234", # ID of the PlaceOS system
  "mod": "Bookings", # Name of the PlaceOS module
  "index": 1, # Non-zeroed index of the module in the system. i.e. 1st index is 1
  "name": "bookings" # Name of the variable to bind to
}
```

After a successful unbind you will receive a success response from the server. The ID of the response will match the ID of the message.

```json
{
    "id": 2,
    "type": "success",
    "meta": {
        "sys": "sys-1234",
        "mod": "Bookings",
        "index": 1,
        "name": "bookings"
    }
}
```

### Execute

The `exec` command allows you to call available methods on the target driver.

```yaml
{
  "id": 3, # Any number
  "cmd": "exec",
  "sys": "sys-1234", # ID of the PlaceOS system
  "mod": "Bookings", # Name of the PlaceOS module
  "index": 1, # Non-zeroed index of the module in the system. i.e. 1st index is 1
  "name": "make_booking", # Name of the method to call
  "args": [1631058815] # List of arguments to pass into the function
}
```

After a successful execution you will receive a success response from the server. The ID of the response will match the ID of the message. The value return is the value returned by the called method.

```json
{
    "id": 3,
    "type": "success",
    "meta": {
        "sys": "sys-1234",
        "mod": "Bookings",
        "index": 1,
        "name": "bookings"
    },
    "value": {}
}
```

### Debug

This lowers the drivers log level to debug and forwards messages to the connection.

```javascript
{
    "id": 4,
    "cmd": "debug",
    "sys": "sys-Z6XXA-Kc_v",
    "mod": "Bookings",
    "index": 1,
    "name": "debug"
}
```

Responds with the module ID that uniquely identifies the code being monitored

```javascript
{
    "id": 4,
    "type": "success",
    "mod_id": "mod-Z6XXB1doL4",
    "meta": {
        "sys": "sys-Z6XXA-Kc_v",
        "mod": "Bookings",
        "index": 1
    }
}
```

Log messages are then sent to the browser

```javascript
{
    "type": "debug",
    "mod": "mod-Z6XXB1doL4",
    "klass": "::Some::Display",
    "level": "debug",
    "msg": "input changed to HDMI"
}
```

### Ignore

The `ignore` command cancels any debug subscriptions and the log level is restored (if no other connections are debugging).

```javascript
{
    "id": 5,
    "cmd": "ignore",
    "sys": "sys-Z6XXA-Kc_v",
    "mod": "mod-Z6XXB1doL4",
    "index": null,
    "name": "ignore"
}
```

responds

```javascript
{
    "id": 5,
    "type": "success"
}
```

## Errors

| Name               | Code | Description                                                                   |
| ------------------ | ---- | ----------------------------------------------------------------------------- |
| parse error        | `0`  | invalid JSON sent to the server                                               |
| bad request        | `1`  | request was missing required fields                                           |
| access denied      | `2`  | you don’t have permission to access this system, the access attempt is logged |
| request failed     | `3`  | an error was raised or a promise rejected when processing the request         |
| unknown command    | `4`  | the command type unknown, the connection is logged as suspicious              |
| system not found   | `5`  | the system does not exist                                                     |
| module not found   | `6`  | the module does not exist in the system                                       |
| unexpected failure | `7`  | a framework level error occurred (this should never happen)                   |
