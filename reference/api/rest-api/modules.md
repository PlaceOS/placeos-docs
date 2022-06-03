# Modules

The `/modules` endpoint provides creation, management and direct interaction with modules outside of a system context. For more information on the role that modules play, see:

{% content-ref url="../../../overview/key-concepts/modules.md" %}
[modules.md](../../../overview/key-concepts/modules.md)
{% endcontent-ref %}

## Model



{% swagger baseUrl="https://example.com" path="/api/engine/v2/control/modules" method="get" summary="Search" %}
{% swagger-description %}
List or search for existing modules.
{% endswagger-description %}

{% swagger-parameter in="query" name="q" type="string" %}
A search filter to apply.
{% endswagger-parameter %}

{% swagger-parameter in="query" name="limit" type="integer" %}
(default 20) Max results to return.
{% endswagger-parameter %}

{% swagger-parameter in="query" name="offset" type="integer" %}
The offset within the result set.
{% endswagger-parameter %}

{% swagger-parameter in="query" name="system_id" type="string" %}
Return modules associated with the specified system.
{% endswagger-parameter %}

{% swagger-parameter in="query" name="dependency_id" type="string" %}
Return modules that are an instance of the specified dependency.
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```javascript
{
  "total": 1,
  "results": [
    {
      "dependency_id": "dep-wJHShR4Ffa",
      "control_system_id": null,
      "edge_id": "edge-E9vIruSZ",
      "ip": "10.45.6.3",
      "tls": false,
      "udp": false,
      "port": 8192,
      "makebreak": false,
      "uri": null,
      "custom_name": null,
      "settings": {},
      "updated_at": 1572412023,
      "created_at": 1572392714,
      "role": 1,
      "connected": true,
      "running": true,
      "notes": null,
      "ignore_connected": false,
      "ignore_startstop": false,
      "id": "mod-wJHYeHm6Yn"
    }
  ]
}
```
{% endswagger-response %}
{% endswagger %}

Queries default to searching for any of the entered terms (words). A small query language provides the ability to structure complex queries.

| Operator    | Action                                            |                       |
| ----------- | ------------------------------------------------- | --------------------- |
| `+`         | Matches both terms.                               |                       |
| \`          | \`                                                | Matches either terms. |
| `-`         | Negates a single token.                           |                       |
| `"`         | Wraps tokens to form a phrase.                    |                       |
| `(` and `)` | Provide precedence.                               |                       |
| `~N`        | Specifies edit distance (fuzziness) after a word. |                       |
| `~N`        | Specifies slop amount (deviation) after a phrase. |                       |

## Management

{% swagger baseUrl="https://example.com" path="/api/engine/v2/control/modules{id}" method="get" summary="Retrieve" %}
{% swagger-description %}
Retrieve all metadata associated with a module.
{% endswagger-description %}

{% swagger-parameter in="path" name="id" type="string" %}
ID of the modules to retrieve.
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```javascript
{
  "dependency_id": "dep-wJHShR4Ffa",
  "control_system_id": null,
  "edge_id": "edge-E9vIruSZ",
  "ip": "10.45.6.3",
  "tls": false,
  "udp": false,
  "port": 8192,
  "makebreak": false,
  "uri": null,
  "custom_name": null,
  "settings": {},
  "updated_at": 1572412023,
  "created_at": 1572412023,
  "role": 1,
  "connected": true,
  "running": true,
  "notes": null,
  "ignore_connected": false,
  "ignore_startstop": false,
  "id": "mod-wJHYeHm6Yn"
}
```
{% endswagger-response %}

{% swagger-response status="404" description="" %}
```

Creates a new module.


required for logic modules
required for ssh and device modules



required for service modules





{
  "dependency_id": "dep-wJHShR4Ffa",
  "control_system_id": null,
  "edge_id": "edge-E9vIruSZ",
  "ip": "10.45.6.3",
  "tls": false,
  "udp": false,
  "port": 8192,
  "makebreak": false,
  "uri": null,
  "custom_name": null,
  "settings": {},
  "updated_at": 1572412023,
  "created_at": 1572412023,
  "role": 1,
  "connected": true,
  "running": true,
  "notes": null,
  "ignore_connected": false,
  "ignore_startstop": false,
  "id": "mod-wJHYeHm6Yn"
}
{
  "dependency_id": ["can't be blank"]
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://example.com" path="/api/engine/v2/control/modules" method="post" summary="Create" %}
{% swagger-description %}
Creates a new module.
{% endswagger-description %}

{% swagger-parameter in="body" name="dependency_id" type="string" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="edge_id" type="string" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="control_system_id" type="string" %}
required for logic modules
{% endswagger-parameter %}

{% swagger-parameter in="body" name="ip" type="string" %}
required for ssh and device modules
{% endswagger-parameter %}

{% swagger-parameter in="body" name="udp" type="boolean" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="port" type="integer" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="makebreak" type="boolean" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="uri" type="string" %}
required for service modules
{% endswagger-parameter %}

{% swagger-parameter in="body" name="custom_name" type="string" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="settings" type="object" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="notes" type="string" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="ignore_connected" type="boolean" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="ignore_startstop" type="boolean" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="Successful creations will return the full module." %}
```javascript
{
  "dependency_id": "dep-wJHShR4Ffa",
  "control_system_id": null,
  "edge_id": "edge-E9vIruSZ",
  "ip": "10.45.6.3",
  "tls": false,
  "udp": false,
  "port": 8192,
  "makebreak": false,
  "uri": null,
  "custom_name": null,
  "settings": {},
  "updated_at": 1572412023,
  "created_at": 1572412023,
  "role": 1,
  "connected": true,
  "running": true,
  "notes": null,
  "ignore_connected": false,
  "ignore_startstop": false,
  "id": "mod-wJHYeHm6Yn"
}
```
{% endswagger-response %}

{% swagger-response status="406" description="Missing or invalid module configuration." %}
```javascript
{
  "dependency_id": ["can't be blank"]
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://example.com" path="/api/engine/v2/control/modules{id}" method="put" summary="Update" %}
{% swagger-description %}
Updates module attributes or configuration.
{% endswagger-description %}

{% swagger-parameter in="path" name="id" type="string" %}
ID of the module to update.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="control_system_id" type="string" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="edge_id" type="string" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="ip" type="string" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="udp" type="boolean" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="port" type="integer" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="makebreak" type="boolean" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="uri" type="string" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="custom_name" type="string" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="settings" type="object" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="notes" type="string" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="ignore_connected" type="boolean" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="ignore_startstop" type="boolean" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="Module updated." %}
```javascript
{
  "dependency_id": "dep-wJHShR4Ffa",
  "control_system_id": null,
  "edge_id": "edge-E9vIruSZ",
  "ip": "10.45.6.3",
  "tls": false,
  "udp": false,
  "port": 8192,
  "makebreak": false,
  "uri": null,
  "custom_name": null,
  "settings": {},
  "updated_at": 1572412023,
  "created_at": 1572414543,
  "role": 1,
  "connected": true,
  "running": true,
  "notes": null,
  "ignore_connected": false,
  "ignore_startstop": false,
  "id": "mod-wJHYeHm6Yn"
}
```
{% endswagger-response %}

{% swagger-response status="403" description="The user does not have permissions to update this module." %}
```
```
{% endswagger-response %}

{% swagger-response status="404" description="The passed module ID does not exist." %}
```
```
{% endswagger-response %}

{% swagger-response status="406" description="Validation error." %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://example.com" path="/api/engine/v2/control/modules{id}" method="delete" summary="Delete" %}
{% swagger-description %}
Removes a module. Modules that are associated with multiple systems be removed from all.
{% endswagger-description %}

{% swagger-parameter in="path" name="id" type="string" %}
ID of the module to delete.
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```
```
{% endswagger-response %}

{% swagger-response status="403" description="" %}
```
```
{% endswagger-response %}

{% swagger-response status="404" description="" %}
```

Updates module attributes or configuration.
ID of the module to update.












{
  "dependency_id": "dep-wJHShR4Ffa",
  "control_system_id": null,
  "edge_id": "edge-E9vIruSZ",
  "ip": "10.45.6.3",
  "tls": false,
  "udp": false,
  "port": 8192,
  "makebreak": false,
  "uri": null,
  "custom_name": null,
  "settings": {},
  "updated_at": 1572412023,
  "created_at": 1572414543,
  "role": 1,
  "connected": true,
  "running": true,
  "notes": null,
  "ignore_connected": false,
  "ignore_startstop": false,
  "id": "mod-wJHYeHm6Yn"
}



```
{% endswagger-response %}
{% endswagger %}

## Interaction

{% swagger baseUrl="https://example.com" path="/api/engine/v2/control/modules/{id}/start" method="post" summary="Start" %}
{% swagger-description %}
Starts a module on it's associated control node.
{% endswagger-description %}

{% swagger-parameter in="path" name="id" type="string" %}
ID of the module to start.
{% endswagger-parameter %}

{% swagger-response status="200" description="Module started." %}
```
```
{% endswagger-response %}

{% swagger-response status="403" description="" %}
```
```
{% endswagger-response %}

{% swagger-response status="404" description="" %}
```
```
{% endswagger-response %}

{% swagger-response status="500" description="An error occurred that prevented the module from starting." %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://example.com" path="/api/engine/v2/control/modules/{id}/stop" method="post" summary="Stop" %}
{% swagger-description %}
Stops the module. Exposed state will still be available but will not update.
{% endswagger-description %}

{% swagger-parameter in="path" name="id" type="string" %}
ID of the module to stop.
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```
```
{% endswagger-response %}

{% swagger-response status="403" description="" %}
```
```
{% endswagger-response %}

{% swagger-response status="404" description="" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://example.com" path="/api/engine/v2/control/modules/{id}/ping" method="post" summary="Ping" %}
{% swagger-description %}
Performs a connectivity check with the associated device or service.
{% endswagger-description %}

{% swagger-parameter in="path" name="id" type="string" %}
ID of the module to check.
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```javascript
{
  "host": "10.45.5.2",
  "pingable": true,
  "warning": null,
  "exception": null
}
```
{% endswagger-response %}

{% swagger-response status="406" description="The module specified is a logic module." %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://example.com" path="/api/engine/v2/control/modules/{id}/state" method="get" summary="State" %}
{% swagger-description %}
Gets the state information exposed by a module.
{% endswagger-description %}

{% swagger-parameter in="path" name="id" type="string" %}
ID of the module to query.
{% endswagger-parameter %}

{% swagger-parameter in="query" name="lookup" type="string" %}
Status key of interest. If included, the response filters to this value.
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```javascript
{
  "foo": "abc",
  "bar": 42

Performs a connectivity check with the associated device or service.
ID of the module to check.
{
  "host": "10.45.5.2",
  "pingable": true,
  "warning": null,
  "exception": null
}
}
```
{% endswagger-response %}
{% endswagger %}
