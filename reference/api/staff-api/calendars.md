# Calendars

{% swagger method="get" path="/staff/v1/calendars" baseUrl="" summary="List Personal Calendars" %}
{% swagger-description %}
List users calendars
{% endswagger-description %}

{% swagger-response status="200: OK" description="" %}
```javascript
[
  {
    id: "calendar@id",
    name: "My Calendar",
    primary: true,
    can_edit: true
  }
]
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="get" path="/staff/v1/calendars/availability" baseUrl="" summary="Available Rooms" %}
{% swagger-description %}
Lists rooms that are available in the time period specified. At least one of 

`zone_ids`

 or 

`system_ids`

 or 

`calendars`

 MUST be present.
{% endswagger-description %}

{% swagger-parameter in="query" name="zone_ids" %}
Check rooms in the selected zones.

_Example: `id1,id2`._
{% endswagger-parameter %}

{% swagger-parameter in="query" name="system_ids" %}
check specified rooms

&#x20;_Example: `sys1,sys2`_
{% endswagger-parameter %}

{% swagger-parameter in="query" name="calendars" %}
check specified user calendars

&#x20;_Example: `cal1_id,cal2_id`._
{% endswagger-parameter %}

{% swagger-parameter in="query" name="capacity" type="Integer" %}
the minimum space required

&#x20;_Example: `6`_
{% endswagger-parameter %}

{% swagger-parameter in="query" name="features" %}
a comma seperated list of room requirements

&#x20;_Example: `vidconf,whiteboard`._
{% endswagger-parameter %}

{% swagger-parameter in="query" name="period_start" type="Integer" required="true" %}
unix epoch start time

&#x20;_Example: `12345`._
{% endswagger-parameter %}

{% swagger-parameter in="query" name="period_end" type="Integer" required="true" %}
unix epoch end time

&#x20;_Example: `23456`._
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
[
  {
    id: "some_calendar@id"
  },
  {
    id: "personal_calendar@id",
    name: "My Personal Calendar"
  },
  {
    id: "resource_calendar@id",
    name: "Resource Calendar Name",
    system: {
        id: "system id used to obtain this event",
        name: "system display name",
        capacity: 3,
        features: "VidConf Whiteboard",
        bookable: true
    }
  }
]
```
{% endswagger-response %}
{% endswagger %}
