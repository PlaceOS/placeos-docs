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

{% swagger src="https://raw.githubusercontent.com/PlaceOS/rest-api/master/OPENAPI_DOC.yml" path="/api/engine/v2/zones" method="get" %}
[https://raw.githubusercontent.com/PlaceOS/rest-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/rest-api/master/OPENAPI_DOC.yml)
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

{% swagger src="https://raw.githubusercontent.com/PlaceOS/rest-api/master/OPENAPI_DOC.yml" path="/api/engine/v2/zones" method="post" %}
[https://raw.githubusercontent.com/PlaceOS/rest-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/rest-api/master/OPENAPI_DOC.yml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/PlaceOS/rest-api/master/OPENAPI_DOC.yml" path="/api/engine/v2/zones/{id}" method="get" %}
[https://raw.githubusercontent.com/PlaceOS/rest-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/rest-api/master/OPENAPI_DOC.yml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/PlaceOS/rest-api/master/OPENAPI_DOC.yml" path="/api/engine/v2/zones/{id}" method="put" %}
[https://raw.githubusercontent.com/PlaceOS/rest-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/rest-api/master/OPENAPI_DOC.yml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/PlaceOS/rest-api/master/OPENAPI_DOC.yml" path="/api/engine/v2/zones/{id}" method="delete" %}
[https://raw.githubusercontent.com/PlaceOS/rest-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/rest-api/master/OPENAPI_DOC.yml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/PlaceOS/rest-api/master/OPENAPI_DOC.yml" path="/api/engine/v2/zones/{id}" method="patch" %}
[https://raw.githubusercontent.com/PlaceOS/rest-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/rest-api/master/OPENAPI_DOC.yml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/PlaceOS/rest-api/master/OPENAPI_DOC.yml" path="/api/engine/v2/zones/{id}/metadata" method="get" %}
[https://raw.githubusercontent.com/PlaceOS/rest-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/rest-api/master/OPENAPI_DOC.yml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/PlaceOS/rest-api/master/OPENAPI_DOC.yml" path="/api/engine/v2/zones/{id}/triggers" method="get" %}
[https://raw.githubusercontent.com/PlaceOS/rest-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/rest-api/master/OPENAPI_DOC.yml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/PlaceOS/rest-api/master/OPENAPI_DOC.yml" path="/api/engine/v2/zones/{id}/exec/{module_slug}/{method}" method="post" %}
[https://raw.githubusercontent.com/PlaceOS/rest-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/rest-api/master/OPENAPI_DOC.yml)
{% endswagger %}
