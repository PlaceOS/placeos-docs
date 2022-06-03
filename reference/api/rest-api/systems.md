# Systems

The `/systems` endpoint provides methods for discovering, creating and interacting with systems. For more on the role that systems play, see:

{% content-ref url="../../../overview/key-concepts/systems.md" %}
[systems.md](../../../overview/key-concepts/systems.md)
{% endcontent-ref %}

All systems provide a base set of metadata that helps to describe their role and capabilities, as well as provide references to the modules they contain, and the zones they exist in.

## Model

| id                     | `string`        | The system's unique ID.                                                                    |
| ---------------------- | --------------- | ------------------------------------------------------------------------------------------ |
| name                   | `string`        | The system's primary identifier.                                                           |
| zones                  | `array`         | Zone IDs that this system is a member of.                                                  |
| modules                | `array`         | Module ID's that this system contains.                                                     |
| description            | `string`        | Markdown formatted text that describes the system.                                         |
| email                  | `string`        | Calendar email that represents this system. Typically used for room scheduling / bookings. |
| capacity               | `integer`       | Number of people this space can accommodate.                                               |
| features               | `array(string)` | List of features in the room for searching and filtering spaces.                           |
| bookable               | `boolean`       | Flag for signifying the space is bookable.                                                 |
| installed\_ui\_devices | `integer`       | Expected number of fixed installation touch panels.                                        |
| created\_at            | `integer`       | Timestamp of creation.                                                                     |
| support\_url           | `string`        | A URL linking to the primary interface for controlling this system.                        |
| version                | `integer`       | Incremental counter for handling stale updates.                                            |

## Discovery

{% swagger baseUrl="https://example.com" path="/api/engine/v2/systems" method="get" summary="Search" %}
{% swagger-description %}
Direct queries to the systems endpoint list, or search for existing systems.
{% endswagger-description %}

{% swagger-parameter in="query" name="q" type="string" %}
A search query for the system metadata.
{% endswagger-parameter %}

{% swagger-parameter in="query" name="limit" type="integer" %}
Max results to return (default 20).
{% endswagger-parameter %}

{% swagger-parameter in="query" name="offset" type="integer" %}
The offset within the result set.
{% endswagger-parameter %}

{% swagger-parameter in="query" name="zone_id" type="string" %}
Limit to systems within this zone.
{% endswagger-parameter %}

{% swagger-parameter in="query" name="module_id" type="string" %}
Limit to systems that contain this module.
{% endswagger-parameter %}

{% swagger-response status="200" description="A list of systems matching the search criteria." %}
```javascript
{
    "total": 3,
    "results": [
        {
            "edge_id": "edge-QC03B3OM",
            "name": "Room 1",
            "description": null,
            "email": "room1@example.com",
            "capacity": 10,
            "features": "",
            "bookable": true,
            "installed_ui_devices": 0,
            "zones": [
                "zone-rGhCRp_aUD"
            ],
            "modules": [
                "mod-rJRCVYKVuB",
                "mod-rJRGK21pya",
                "mod-rJRHYsZExU"
            ],
            "settings": {},
            "created_at": 1562041110,
            "support_url": null,
            "version": 5,
            "id": "sys-rJQQlR4Cn7"
        },
        {
            "edge_id": "edge-QC03B3OM",
            "name": "Room 2",
            "description": null,
            "email": "room2@example.com",
            "capacity": 10,
            "features": "",
            "bookable": true,
            "installed_ui_devices": 0,
            "zones": [
                "zone-rGhCRp_aUD"
            ],
            "modules": [
                "mod-rJRJOM27Kb",
                "mod-rJRLE4_PQ7",
                "mod-rJRLwe72Mo"
            ],
            "settings": {},
            "created_at": 1562041127,
            "support_url": null,
            "version": 4,
            "id": "sys-rJQSySsELE"
        },
        {
            "edge_id": "edge-QC03B3OM",
            "name": "Room 3",
            "description": null,
            "email": "room3@example.com",
            "capacity": 4,
            "features": "",
            "bookable": true,
            "installed_ui_devices": 0,
            "zones": [
                "zone-rGhCRp_aUD"
            ],
            "modules": [
                "mod-rJRNrLDPNz",
                "mod-rJRQ~JwE7U",
                "mod-rJRV1qokbH"
            ],
            "settings": {},
            "created_at": 1562041145,
            "support_url": null,
            "version": 4,
            "id": "sys-rJQVPIR9Uf"
        }}
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



{% swagger baseUrl="https://example.com" path="/api/engine/v2/control/systems" method="post" summary="Create" %}
{% swagger-description %}
Defines a new system. Systems names must be unique within the instance they are running on and all systems must have at least one zone associated. All other attributes are optional at the time of creation.
{% endswagger-description %}

{% swagger-parameter in="body" name="name" type="string" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="zones" type="array" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="edge_id" type="string" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="description" type="string" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="email" type="string" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="capacity" type="integer" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="bookable" type="boolean" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="installed_ui_devices" type="integer" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="modules" type="string" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="settings" type="string" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="support_url" type="string" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```javascript
{
    "edge_id": "edge-QC03B3OM",
    "name": "Example Room",
    "description": "Example room description containing further cotnext",
    "email": "room@example.com",
    "capacity": 10,
    "features": "",
    "bookable": true,
    "installed_ui_devices": 0,
    "zones": [
        "zone-rGhCRp_aUD"
    ],
    "modules": [],
    "settings": {},
    "created_at": 1562041110,
    "support_url": "https://example.com/foo",
    "id": "sys-rJQQlR4Cn7"
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://example.com" path="/api/engine/v2/control/systems/{id}" method="get" summary="Retrieve" %}
{% swagger-description %}
Retrieve all metadata associated with the system.
{% endswagger-description %}

{% swagger-parameter in="path" name="id" type="string" %}
ID of the system to retrieve.
{% endswagger-parameter %}

{% swagger-parameter in="query" name="complete" type="boolean" %}
Include full models of all modules and zones associated with the system rather than their ID.
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```javascript
{
    "edge_id": "edge-QC03B3OM",
    "name": "Example Room",
    "description": "Example room description containing further context",
    "email": "room@example.com",
    "capacity": 10,
    "features": "",
    "bookable": true,
    "installed_ui_devices": 0,
    "zones": [
        "zone-rGhCRp_aUD"
    ],
    "modules": [
        "mod-rJRCVYKVuB",
        "mod-rJRGK21pya",
        "mod-rJRHYsZExU"
    ],
    "settings": {},
    "created_at": 1562041110,
    "support_url": "https://example.com/foo",
    "version": 3,
    "id": "sys-rJQQlR4Cn}
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://example.com" path="/api/engine/v2/control/systems/{id}" method="put" summary="Update" %}
{% swagger-description %}
Updates system attributes. Any selection of attributes form the request - unspecified items will keep their current values. All requests must include a 

**version**

 parameter that matches the current system version.
{% endswagger-description %}

{% swagger-parameter in="path" name="id" type="string" %}
ID of the system to update.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="version" type="integer" %}
The system metadata version. This must match the current version and increments following each successful update.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="name" type="string" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="description" type="string" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="email" type="string" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="capacity" type="integer" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="bookable" type="boolean" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="installed_ui_devices" type="integer" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="zones" type="array" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="modules" type="string" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="settings" type="string" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="support_url" type="string" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```javascript
{
    "edge_id": "edge-QC03B3OM",
    "name": "Example Room",
    "description": "Example room description containing further context",
    "email": "room@example.com",
    "capacity": 10,
    "features": "",
    "bookable": true,
    "installed_ui_devices": 0,
    "zones": [
        "zone-rGhCRp_aUD"
    ],
    "modules": [],
    "settings": {},
    "created_at": 1562041110,
    "support_url": "https://example.com/foo",
    "id": "sys-rJQQlR4Cn7"
}
```
{% endswagger-response %}

{% swagger-response status="409" description="The specified version does not match the current system version." %}

{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://example.com" path="/api/engine/v2/control/systems/{id}" method="delete" summary="Delete" %}
{% swagger-description %}
Removes a system. This will stop, and remove any modules that are not associated with other systems.
{% endswagger-description %}

{% swagger-parameter in="path" name="id" type="string" %}
ID of the system to retrieve.
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```
```
{% endswagger-response %}
{% endswagger %}

## Interaction

{% swagger baseUrl="https://example.com" path="/api/engine/v2/control/systems/{id}/start" method="post" summary="Start" %}
{% swagger-description %}
Starts all modules associated with the system.
{% endswagger-description %}

{% swagger-parameter in="path" name="id" type="string" %}
ID of the system to start.
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://example.com" path="/api/engine/v2/control/systems/{id}/stop" method="post" summary="Stop" %}
{% swagger-description %}
Stops all modules associated with the system.
{% endswagger-description %}

{% swagger-parameter in="path" name="id" type="string" %}
ID of the system to stop.
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```
```
{% endswagger-response %}
{% endswagger %}
