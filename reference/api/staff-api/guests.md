# Guests

Guests are attendees of Events created with the PlaceOS api where:

* The attendee in the Event was marked with `visit_expected: true` indicating that the Event organizer expects this person to physically come to the building to attendee the meeting.
* The attendee's email address domain is NOT one of the pre-defined internal enterprise email domains (configured during the set up of the PlaceOS instance).

{% swagger src="https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml" path="/api/staff/v1/guests" method="get" %}
[https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml" path="/api/staff/v1/guests" method="post" %}
[https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml" path="/api/staff/v1/guests/{id}" method="get" %}
[https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml" path="/api/staff/v1/guests/{id}" method="put" %}
[https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml" path="/api/staff/v1/guests/{id}" method="delete" %}
[https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml" path="/api/staff/v1/guests/{id}" method="patch" %}
[https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml" path="/api/staff/v1/guests/{id}/meetings" method="get" %}
[https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml" path="/api/staff/v1/guests/{id}/bookings" method="get" %}
[https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml)
{% endswagger %}
