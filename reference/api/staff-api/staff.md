# Staff

{% swagger method="get" path="/staff/v1/guests/guest_id/meetings" baseUrl="" summary="Show Staff" %}
{% swagger-description %}
Return a specific staff member
{% endswagger-description %}

{% swagger-parameter in="path" name="guest_id" required="true" %}
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

{% swagger method="get" path="/staff/v1/people" baseUrl="" summary="Search Staff" %}
{% swagger-description %}
Search for a staff member, display their details
{% endswagger-description %}

{% swagger-parameter in="query" name="q" %}
The search string. 

_Example: `search`_
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
[
    {
        name: "Steve",
        email: "steve@mail.com",
        phone: "+61 234 345 678",
        department: "Engineering",
        photo: "https://storage.com/steve.jpeg",
        card_number: 12345,
        username: "stevevt"
    }
]
```
{% endswagger-response %}
{% endswagger %}
