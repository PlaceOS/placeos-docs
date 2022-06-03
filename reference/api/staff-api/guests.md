# Guests

Guests are attendees of Events created with the PlaceOS api where:

* The attendee in the Event was marked with `visit_expected: true` indicating that the Event organizer expects this person to physically come to the building to attendee the meeting.
* The attendee's email address domain is NOT one of the pre-defined internal enterprise email domains (configured during the set up of the PlaceOS instance).

{% swagger method="get" path="/staff/v1/guests" baseUrl="" summary="Search" %}
{% swagger-description %}
Returns the list of guests that have ever been entered into the system and if they are currently checked in or expected
{% endswagger-description %}

{% swagger-parameter in="query" name="q" required="true" %}
The search string. 

_Example: `search`._
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
[
    {
        name: "Steve",
        email: "steve@mail.com",
        phone: "+61 234 345 678",
        organisation: "T-Mart",
        notes: "great guy",
        photo: "https://storage.com/steve.jpeg"
    }
]
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="get" path="/staff/v1/guests/guest_id" baseUrl="" summary="Show" %}
{% swagger-description %}
Return the guest details
{% endswagger-description %}

{% swagger-parameter in="path" name="guest_id" required="true" %}
The email address of the attending. 

_Example: `guest@email`._
{% endswagger-parameter %}

{% swagger-parameter in="body" name="name" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="email" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="phone" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="organisation" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="notes" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="checked_in" type="Bool" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="visit_expected" type="Bool" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="photo" type="URI" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="extension_data" type="JSON" %}
JSON Payload of key:value pairs.
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    // Response
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="get" path="/staff/v1/guests" baseUrl="" summary="List" %}
{% swagger-description %}
Returns the guest list for a specified time range.
{% endswagger-description %}

{% swagger-parameter in="query" name="zone_ids" %}
check rooms in the selected zones

&#x20;_Example: `id1,id2`._
{% endswagger-parameter %}

{% swagger-parameter in="query" name="system_ids" %}
check specified rooms

&#x20;_Example: `sys1,sys2`._
{% endswagger-parameter %}

{% swagger-parameter in="query" name="period_start" type="Integer" required="true" %}
Unix epoch start time. 

_Example: `12345`._
{% endswagger-parameter %}

{% swagger-parameter in="query" name="period_end" type="Integer" required="true" %}
Unix epoch end time. 

_Example: `12345`._
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
[
    {
        name: "Steve",
        email: "steve@mail.com",
        phone: "+61 234 345 678",
        organisation: "T-Mart",
        notes: "great guy",
        photo: "https://storage.com/steve.jpeg",
        checked_in: false,
        // is the guest expected in this time range
        visit_expected: true,
        event: {
            id: "abcd",
            status: "tentative",
            host: "user@email",
            creator: "optional@secretary",
            title:  "name of the meeting",
            private: false,
            event_start: 12345,
            event_end: 23456,
            timezone: "Sydney",
            all_day: false,
            system: {
                id: "system id used to obtain this event",
                name: "system display name",
                capacity: 3,
                features: "VidConf Whiteboard",
                bookable: true
            }
        }
    }
]
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="patch" path="/staff/v1/guests/guest_id" baseUrl="" summary="Edit Guest Metadata" %}
{% swagger-description %}
Updates personal details about the guest in question
{% endswagger-description %}

{% swagger-parameter in="body" name="name" %}
Steve
{% endswagger-parameter %}

{% swagger-parameter in="body" name="phone" %}
\+61123456789
{% endswagger-parameter %}

{% swagger-parameter in="body" name="organization" %}
Place Technology
{% endswagger-parameter %}

{% swagger-parameter in="body" name="notes" %}

{% endswagger-parameter %}

{% swagger-parameter in="path" name="guest_id" required="true" %}
the email address of the attending. 

_Example: `guest@email`._
{% endswagger-parameter %}

{% swagger-parameter in="body" name="photo" required="true" %}
URI
{% endswagger-parameter %}

{% swagger-parameter in="body" name="extension_data" type="JSON" %}
Additional data as key:value pairs in JSON Array.
{% endswagger-parameter %}

{% swagger-response status="202: Accepted" description="" %}
```javascript
{
    name: "Steve",
    email: "steve@mail.com",
    phone: "+61 234 345 678",
    organisation: "T-Mart",
    notes: "great guy",
    checked_in: false,
    visit_expected: true,
    photo: "https://storage.com/steve.jpeg",
    extension_data: {
        whatever: "you want",
        perferred_coffee: "Flat white, skim milk, one sugar"
    }
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="delete" path="/staff/v1/guests/guest_id" baseUrl="" summary="Delete Metadata" %}
{% swagger-description %}
Deletes personal details about the guest in question
{% endswagger-description %}

{% swagger-parameter in="path" name="guest_id" required="true" %}
the email address of the attending. 

_Example: `guest@email`._
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    // Response
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="get" path="" baseUrl="" summary="Guest Upcoming Visits" %}
{% swagger-description %}
Return a list of upcoming meetings this guest is attending.
{% endswagger-description %}

{% swagger-parameter in="query" name="guest_id" required="true" %}
The email address of the attending. 

_Example: `guest@email`._
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
[
    {
        host: "user@email",
        host_name: "Bob",
        event_id: "abcd",
        calendar: "calendar_id",
        title:  "name of the meeting",
        event_start: 12345,
        event_end: 23456,
        timezone: "Sydney",
        all_day: false
    }
]
```
{% endswagger-response %}
{% endswagger %}
