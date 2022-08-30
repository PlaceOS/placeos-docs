# Events

Events here refer to PlaceOS' abstraction of [MS Graph](https://docs.microsoft.com/en-us/graph/api/resources/event?view=graph-rest-1.0) (aka Office365) or [Google Calendar](https://developers.google.com/calendar/v3/reference/events) Events The purpose of the abstraction is to allow clients of the PlaceOS Staff API to not need to be concerned about which Calendar system is in use, while associating room resource calendars with PlaceOS Systems (usually a 1:1 mapping)

{% swagger src="https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml" path="/api/staff/v1/events" method="get" %}
[https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml" path="/api/staff/v1/events" method="post" %}
[https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml" path="/api/staff/v1/events/{id}" method="get" %}
[https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml" path="/api/staff/v1/events/{id}" method="delete" %}
[https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml" path="/api/staff/v1/events/{id}" method="patch" %}
[https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml" path="/api/staff/v1/events/{id}/metadata/{system_id}" method="put" %}
[https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml" path="/api/staff/v1/events/{id}/metadata/{system_id}" method="patch" %}
[https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml" path="/api/staff/v1/events/{id}/decline" method="post" %}
[https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml" path="/api/staff/v1/events/{id}/approve" method="post" %}
[https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml" path="/api/staff/v1/events/{id}/reject" method="post" %}
[https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml" path="/api/staff/v1/events/{id}/guests" method="get" %}
[https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml" path="/api/staff/v1/events/extension_metadata" method="get" %}
[https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml" path="/api/staff/v1/events/{id}/guests/{guest_id}/checkin" method="post" %}
[https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml)
{% endswagger %}
