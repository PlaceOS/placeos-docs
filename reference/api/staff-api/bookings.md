# Bookings

Bookings here refer to a user created reservation of resource that are represented natively in PlaceOS only. These bookings are not associated with an external directory like MS Graph or Google Calendar. They are stored only in the PlaceOS database. PlaceOS bookings are most commonly used to reserve resources such as desks, car spaces, lockers, equipment, etc...

Either `zones` OR `user` MUST be specified. Otherwise there is no search criteria. The system will NOT search ALL bookings across all zones when `zones=null`.

{% swagger src="https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml" path="/api/staff/v1/bookings" method="get" %}
[https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml" path="/api/staff/v1/bookings" method="post" %}
[https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml" path="/api/staff/v1/bookings/{id}" method="get" %}
[https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml" path="/api/staff/v1/bookings/{id}" method="put" %}
[https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml" path="/api/staff/v1/bookings/{id}" method="delete" %}
[https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml" path="/api/staff/v1/bookings/{id}" method="patch" %}
[https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml" path="/api/staff/v1/bookings/{id}/approve" method="post" %}
[https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml" path="/api/staff/v1/bookings/{id}/reject" method="post" %}
[https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml" path="/api/staff/v1/bookings/{id}/check_in" method="post" %}
[https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml" path="/api/staff/v1/bookings/{id}/update_state" method="post" %}
[https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml" path="/api/staff/v1/bookings/{id}/guests" method="get" %}
[https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml](https://raw.githubusercontent.com/PlaceOS/staff-api/master/OPENAPI_DOC.yml)
{% endswagger %}
