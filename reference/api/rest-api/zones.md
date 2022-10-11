# Zones

The `/zones` endpoint provide access to discover, create and manage zones available. For more information on the role that zones play, see:

{% content-ref url="../../../overview/key-concepts/zones.md" %}
[zones.md](../../../overview/key-concepts/zones.md)
{% endcontent-ref %}

## Model



| Attribute   | Type            | Description                                                                      |
| ----------- | --------------- | -------------------------------------------------------------------------------- |
| id          | `string`        | Unique ID the represents the zone.                                               |
| name        | `string`        | Human readable name.                                                             |
| description | `string`        | Long form description of the zone.                                               |
| tags        | `Array(String)` | Tags that provide context for the zone use. E.g. `org`, `buidling`, `level`.     |
| triggers    | `array(String)` | List of trigger ID's to be applied to all systems that associate with this zone. |
| created\_at | `integer`       | Timestamp of creation.                                                           |

## Discovery

{% swagger baseUrl="https://example.com" path="/api/engine/v2/control/zones" method="get" summary="Search" %}
{% swagger-description %}
List or search for zones.
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

{% swagger-parameter in="query" name="tags" type="string" %}
Return zones of this tag only.
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```javascript
{
  "total": 3,
  "results": [
    {
        "name": "ACA",
        "description": null,
        "tags": "org",
        "settings": {
            "discovery_info": {
                "buildings": [
                    {
                        "name": "Bourke St",
                        "zone_id": "zone-oOj4O_ijKl"
                    }
                ]
            }
        },
        "triggers": [],
        "created_at": 1555995992,
        "id": "zone-oOj2lGgszq"
    },
    {
        "name": "Bourke St",
        "description": null,
        "tags": "building",
        "settings": {
            "discovery_info": {
                "levels": [
                    {
                        "level_id": "zone-oOj57Msk19",
                        "level_name": "Level 1",
                        "map_url": "assets/maps/level_01.svg"
                    }
                ]
            }
        },
        "triggers": [],
        "created_at": 1555996004,
        "id": "zone-oOj4O_ijKl"
    },
    {
        "name": "Level 1",
        "description": null,
        "tags": "level",
        "settings": {},
        "triggers": [],
        "created_at": 1555996010,
        "id": "zone-oOj57Msk19"
    }
  ]}
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

{% swagger baseUrl="https://example.com" path="/api/engine/v2/control/zones" method="post" summary="Create" %}
{% swagger-description %}
Defines a new zone.
{% endswagger-description %}

{% swagger-parameter in="body" name="name" type="string" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="description" type="string" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="tags" type="string" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="settings" type="object" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="triggers" type="array" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="Zone created." %}
```javascript
{
    "name": "ACA",
    "description": null,
    "tags": "org",
    "settings": {},
    "triggers": [],
    "created_at": 1555995992,
    "id": "zone-oOj2lGgszq"}
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://example.com" path="/api/engine/v2/control/zones/{id}" method="get" summary="Retrieve" %}
{% swagger-description %}
Lookup an existing zone.
{% endswagger-description %}

{% swagger-parameter in="path" name="id" type="string" %}
ID of the zone to retrieve.
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```javascript
{
    "name": "ACA",
    "description": null,
    "tags": "org",
    "settings": {
        "discovery_info": {
            "buildings": [
                {
                    "name": "Bourke St",
                    "zone_id": "zone-oOj4O_ijKl"
                }
            ]
        }
    },
    "triggers": [],
    "created_at": 1555995992,
    "id": "zone-oOj2lGgszq"
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://example.com" path="/api/engine/v2/control/zones/{id}" method="put" summary="Update" %}
{% swagger-description %}
Updates metadata associated with a zone.
{% endswagger-description %}

{% swagger-parameter in="path" name="id" type="string" %}
ID of the zone to update.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="name" type="string" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="description" type="string" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="tags" type="string" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="settings" type="object" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="triggers" type="array" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```javascript
{
    "name": "ACA",
    "description": null,
    "tags": "org",
    "settings": {
        "discovery_info": {
            "buildings": [
                {
                    "name": "Bourke St",
                    "zone_id": "zone-oOj4O_ijKl"
                }
            ]
        }
    },
    "triggers": [],
    "created_at": 1555995992,
    "id": "zone-oOj2lGgszq"
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://example.com" path="/api/engine/v2/control/zones/{id}" method="delete" summary="Delete" %}
{% swagger-description %}
Removes a zone.
{% endswagger-description %}

{% swagger-parameter in="path" name="id" type="string" %}
ID of the zone to remove.
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```

Updates metadata associated with a zone.
ID of the zone to update.





{
    "name": "ACA",
    "description": null,
    "tags": "org",
    "settings": {
        "discovery_info": {
            "buildings": [
                {
                    "name": "Bourke St",
                    "zone_id": "zone-oOj4O_ijKl"
                }
            ]
        }
    },
    "triggers": [],
    "created_at": 1555995992,
    "id": "zone-oOj2lGgszq"
}
```
{% endswagger-response %}
{% endswagger %}
