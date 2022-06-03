# Events

Events here refer to PlaceOS' abstraction of [MS Graph](https://docs.microsoft.com/en-us/graph/api/resources/event?view=graph-rest-1.0) (aka Office365) or [Google Calendar](https://developers.google.com/calendar/v3/reference/events) Events The purpose of the abstraction is to allow clients of the PlaceOS Staff API to not need to be concerned about which Calendar system is in use, while associating room resource calendars with PlaceOS Systems (usually a 1:1 mapping)

{% swagger method="get" path="/staff/v1/events" baseUrl="" summary="List Events" %}
{% swagger-description %}
Attachments won't be returned on this request.
{% endswagger-description %}

{% swagger-parameter in="query" name="zone_ids" %}
Grab events from rooms in the selected zones

&#x20;_Example: `id1,id2`._
{% endswagger-parameter %}

{% swagger-parameter in="query" name="system_ids" %}
Grab events from specified rooms

&#x20;_Example: `sys1,sys2`._
{% endswagger-parameter %}

{% swagger-parameter in="query" name="calendars" %}
Grab events from user calendars

&#x20;_Example: `cal1_id,cal2_id`._
{% endswagger-parameter %}

{% swagger-parameter in="query" name="period_start" type="Integer" required="true" %}
unix epoch start time

&#x20;_Example: `12345`_
{% endswagger-parameter %}

{% swagger-parameter in="query" name="period_end" type="Integer" required="true" %}
unix epoch end time

&#x20;_Example: `12345`_
{% endswagger-parameter %}

{% swagger-parameter in="query" name="include_cancelled" type="Boolean" %}
include events that have been cancelled in the results - ONLY works for Google Calendar (not MS Graph API)

&#x20;_Example: `true`._
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
[
    {
        id: "abcd",
        status: "accepted",
        host: "user@email",
        calendar: "calendar_id",
        creator: "optional@secretary",
        attendees: [
            {
                name: "Steve",
                email: "bob@place.com"
            },
            {
                name: "Bob",
                email: "bob@place.com",
                checked_in: false,
                visit_expected: true,
            },
            {
                email: "testroom1@place.com"
                extension_data: {}
                name: "Test Room 1"
                resource: true
                response_status: "accepted"
            }
        ],
        title:  "name of the meeting",
        body: "event details",
        private: false,
        event_start: 12345,
        event_end: 23456,
        timezone: "Sydney",
        all_day: false,
        location: "clear text location",
        recurring: true,
        recurrence: {
            range_start: 12345,
            range_end: 23456,
            days_of_week: 4,
            interval: 2,
            pattern: 1
        },
        recurring_master_id: "abcd",
        attachments: [
            {
                name: "file_name.ext",
                blob: "base64 bytes"
            }
        ],
        # .system and is only returned when event is from a System mailbox (i.e. when listing events with ?zone_ids or ?system_ids as opposedto ?calendars)
        system: {  
            id: "system id used to obtain this event",
            name: "system display name",
            capacity: 3,
            features: "VidConf Whiteboard",
            bookable: true
        },
        extension_data: {
            whatever: "you want"
        }
    }
]
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="get" path="/staff/v1/events" baseUrl="" summary="Get Events" %}
{% swagger-description %}
Returns the complete details of an event
{% endswagger-description %}

{% swagger-parameter in="query" name="calendar" %}
the personal calendar this event exists on

&#x20;_Example: `personal@calendar`._
{% endswagger-parameter %}

{% swagger-parameter in="path" name="event_id" %}
the ID of the event

&#x20;_Example: `id`._
{% endswagger-parameter %}

{% swagger-parameter in="query" name="system_id" %}
the system representing the calendar this event exists on

&#x20;_Example: `sysid`._
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    id: "abcd",
    status: "accepted",
    host: "user@email",
    calendar: "calendar_id",
    creator: "optional@secretary",
    attendees: [
        {
            name: "Bob",
            email: "bob@place.com"
        }
    ],
    title:  "name of the meeting",
    body: "event details",
    private: false,
    event_start: 12345,
    event_end: 23456,
    timezone: "Sydney",
    all_day: false,
    location: "clear text location",
    recurring: true,
    recurrence: {
        range_start: 12345,
        range_end: 23456,
        days_of_week: 4,
        interval: 2,
        pattern: 1
    },
    recurring_master_id: "abcd",
    attachments: [
        {
            name: "file_name.ext",
            blob: "base64 bytes"
        }
    ],
    system: {
        id: "system id used to obtain this event",
        name: "system display name",
        capacity: 3,
        features: "VidConf Whiteboard",
        bookable: true
    },
    extension_data: {
        whatever: "you want"
    }
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="post" path="/staff/v1/events/" baseUrl="" summary="Create Event" %}
{% swagger-description %}
Creates an event.

The `host` (email) will always automatically be included in the resulting event's `attendees[]` - even if the payload does not include the Host in attendees\[].

To add additional information like the host.name, include the host in the `attendees[]`, with a `name` value.
{% endswagger-description %}

{% swagger-parameter in="body" required="true" name="" %}

{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    id: "abcd",
    status: "tentative",
    host: "user@email",
    calendar: "calendar_id",
    creator: "optional@secretary",
    attendees: [
        {
            name: "Bob",
            email: "bob@place.com",
            visit_expected: true

        },
        {
            name: "Steve",
            email: "steve@mail.com",
            phone: "+61 234 345 678",
            organisation: "T-Mart",
            notes: "great guy",
            checked_in: false,
            visit_expected: false,
            photo: "https://storage.com/steve.jpeg",
            extension_data: {
                whatever: "you want",
                perferred_coffee: "Flat white, skim milk, one sugar"
            }
        }
    ],
    title:  "name of the meeting",
    body: "new event details",
    private: false,
    event_start: 12345,
    event_end: 23456,
    timezone: "Sydney",
    all_day: false,
    location: "clear text location",
    recurring: true,
    recurrence: {
        range_start: 12345,
        range_end: 23456,
        days_of_week: 4,
        interval: 2,
        pattern: 1
    },
    recurring_master_id: "abcd",
    attachments: [
        {
            name: "file_name.ext",
            blob: "base64 bytes"
        }
    ],
    system: {
        id: "system id used to obtain this event",
        name: "system display name",
        capacity: 3,
        features: "VidConf Whiteboard",
        bookable: true
    },
    extension_data: {
        whatever: "you want",
        catering_order: [{
            item: "Choc Cake",
            qty: 1
        }]
    }
}
```
{% endswagger-response %}
{% endswagger %}
