# Bookings

Bookings here refer to a user created reservation of resource that are represented natively in PlaceOS only. These bookings are not associated with an external directory like MS Graph or Google Calendar. They are stored only in the PlaceOS database. PlaceOS bookings are most commonly used to reserve resources such as desks, car spaces, lockers, equipment, etc...

Either `zones` OR `user` MUST be specified. Otherwise there is no search criteria. The system will NOT search ALL bookings across all zones when `zones=null`.

{% swagger method="get" path="/staff/v1/bookings" baseUrl="" summary="Query Bookings" %}
{% swagger-description %}
Returns the list of guests that have ever been entered into the system and if they are currently checked in or expected
{% endswagger-description %}

{% swagger-parameter in="query" name="period_start" type="Integer" required="true" %}
The start time as a unix epoch. 

_Example: `1234`_
{% endswagger-parameter %}

{% swagger-parameter in="query" name="period_end" type="Integer" required="true" %}
The end time as a unix epoch. 

_Example: `1234`_
{% endswagger-parameter %}

{% swagger-parameter in="query" name="type" required="true" %}
The booking category we are interested in. 

_Example: `desks`._
{% endswagger-parameter %}

{% swagger-parameter in="query" name="zones" %}
limits the search to the items in the zones specified

&#x20;_Example: `zone-1234,zone-4567`_
{% endswagger-parameter %}

{% swagger-parameter in="query" name="user" %}
limits the search to the user specified or `current` user

&#x20;_Example: `current`._
{% endswagger-parameter %}

{% swagger-parameter in="query" name="deleted" type="Bool" %}
whether or not to include deleted bookings in the results. Defaults to false.

&#x20;_Example: `true`._
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
[
    {
        id: 123,
        user_id: "user-1234",
        user_email: "steve@domain.com",
        user_name: "Name at Time of Booking",

        asset_id: "desk-12234",
        zones: ["zone-123",  "zone-456"],
        booking_type: "desk",

        booking_start: 1234567,
        booking_end: 1234589,
        timezone: "Sydney",

        title: "optional",
        description: "optional",

        checked_in: false,
        rejected: false,
        approved: true,
        approver_id: "user-5678",
        approver_email: "admin@domain.com",
        approver_name: "Bob Jane",
        extension_data: {
            anykind_of_data: "user defined"
        }
    }
]
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="get" path="/staff/v1/bookings/booking_id" baseUrl="" summary="Show Booking" %}
{% swagger-description %}
Return the guest details
{% endswagger-description %}

{% swagger-parameter in="path" name="booking_id" required="true" %}
The id of the booking. 

_Example: `1234`_
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    id: 123,
    user_id: "user-1234",
    user_email: "steve@domain.com",
    user_name: "Name at Time of Booking",

    asset_id: "desk-12234",
    zones: ["zone-123",  "zone-456"],
    booking_type: "desk",

    booking_start: 1234567,
    booking_end: 1234589,
    timezone: "Sydney",

    title: "optional",
    description: "optional",

    checked_in: false,
    rejected: false,
    approved: true,
    approver_id: "user-5678",
    approver_email: "admin@domain.com",
    approver_name: "Bob Jane",
    extension_data: {
        anykind_of_data: "user defined"
    }
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="post" path="/staff/v1/bookings/" baseUrl="" summary="Create Booking" %}
{% swagger-description %}
Creates a new booking
{% endswagger-description %}

{% swagger-parameter in="body" name="asset_id" required="true" %}
"desk-12234"
{% endswagger-parameter %}

{% swagger-parameter in="body" name="zones" required="true" %}
\["zone-123", "zone-456"]
{% endswagger-parameter %}

{% swagger-parameter in="body" name="booking_type" required="true" %}
"desk"
{% endswagger-parameter %}

{% swagger-parameter in="body" name="booking_start" type="Integer" required="true" %}
1234567
{% endswagger-parameter %}

{% swagger-parameter in="body" name="booking_end" type="Integer" required="true" %}
1234567
{% endswagger-parameter %}

{% swagger-parameter in="body" name="timezone" required="true" %}
"Sydney"
{% endswagger-parameter %}

{% swagger-parameter in="body" name="title" %}
"optional"
{% endswagger-parameter %}

{% swagger-parameter in="body" name="description" %}
"optional"
{% endswagger-parameter %}

{% swagger-parameter in="body" name="extension_data" %}
anykind_of_data: "user defined"
{% endswagger-parameter %}
{% endswagger %}

{% swagger method="patch" path="/staff/v1/bookings/booking_id" baseUrl="" summary="Edit Booking" %}
{% swagger-description %}
Edits an existing booking
{% endswagger-description %}

{% swagger-parameter in="path" name="booking_id" required="true" %}
The id of the booking. 

_Example: `1234`._
{% endswagger-parameter %}

{% swagger-parameter in="body" name="asset_id" %}
"desk-12234"
{% endswagger-parameter %}

{% swagger-parameter in="body" name="zones" %}
\["zone-123", "zone-456"]
{% endswagger-parameter %}

{% swagger-parameter in="body" name="booking_type" %}
"desk"
{% endswagger-parameter %}

{% swagger-parameter in="body" name="booking_start" type="Integer" %}
1234567
{% endswagger-parameter %}

{% swagger-parameter in="body" name="booking_end" type="Integer" %}
1234567
{% endswagger-parameter %}

{% swagger-parameter in="body" name="timezone" %}
"Sydney"
{% endswagger-parameter %}

{% swagger-parameter in="body" name="title" %}
"optional"
{% endswagger-parameter %}

{% swagger-parameter in="body" name="description" %}
"optional"
{% endswagger-parameter %}

{% swagger-parameter in="body" name="extension_data" type="JSON" %}
anykind_of_data: "user defined"
{% endswagger-parameter %}

{% swagger-response status="202: Accepted" description="" %}
```javascript
{
    id: 123,
    user_id: "user-1234",
    user_email: "steve@domain.com",
    user_name: "Name at Time of Booking",

    asset_id: "desk-12234",
    zones: ["zone-123",  "zone-456"],
    booking_type: "desk",

    booking_start: 1234567,
    booking_end: 1234589,
    timezone: "Sydney",

    title: "optional",
    description: "optional",

    checked_in: false,
    rejected: false,
    approved: false,
    approver_id: nil,
    approver_email: nil,
    approver_name: nil,
    extension_data: {
        anykind_of_data: "user defined"
    }
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="delete" path="/staff/v1/bookings/booking_id" baseUrl="" summary="Delete Booking" %}
{% swagger-description %}
Deletes an existing booking
{% endswagger-description %}

{% swagger-parameter in="path" name="booking_id" required="true" %}
The id of the booking. 

_Example: `1234`._
{% endswagger-parameter %}

{% swagger-response status="202: Accepted" description="" %}
```javascript
{
    // Response
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="post" path="/staff/v1/bookings/booking_id/approve" baseUrl="" summary="Approve Booking" %}
{% swagger-description %}
Approves a booking
{% endswagger-description %}

{% swagger-parameter in="path" name="booking_id" required="true" %}
The id of the booking. 

_Example: `1234`._
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    id: 123,
    user_id: "user-1234",
    user_email: "steve@domain.com",
    user_name: "Name at Time of Booking",

    asset_id: "desk-12234",
    zones: ["zone-123",  "zone-456"],
    booking_type: "desk",

    booking_start: 1234567,
    booking_end: 1234589,
    timezone: "Sydney",

    title: "optional",
    description: "optional",

    checked_in: false,
    rejected: false,
    approved: true,
    approver_id: "user-5678",
    approver_email: "admin@domain.com",
    approver_name: "Bob Jane",
    extension_data: {
        anykind_of_data: "user defined"
    }
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="post" path="/staff/v1/bookings/booking_id/reject" baseUrl="" summary="Reject Booking" %}
{% swagger-description %}
Rejects a booking
{% endswagger-description %}

{% swagger-parameter in="path" name="booking_id" required="true" %}
The id of the booking. 

_Example: `1234`._
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    id: 123,
    user_id: "user-1234",
    user_email: "steve@domain.com",
    user_name: "Name at Time of Booking",

    asset_id: "desk-12234",
    zones: ["zone-123",  "zone-456"],
    booking_type: "desk",

    booking_start: 1234567,
    booking_end: 1234589,
    timezone: "Sydney",

    title: "optional",
    description: "optional",

    checked_in: false,
    rejected: true,
    approved: false,
    approver_id: nil,
    approver_email: nil,
    approver_name: nil,
    extension_data: {
        anykind_of_data: "user defined"
    }
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="post" path="/staff/v1/bookings/booking_id/check_in" baseUrl="" summary="Check-in Booking" %}
{% swagger-description %}
Checks in a booking, person turned up
{% endswagger-description %}

{% swagger-parameter in="path" name="booking_id" required="true" %}
The ID of the Booking
{% endswagger-parameter %}

{% swagger-parameter in="query" name="state" type="Bool" %}
Maybe you want to check-out. 

_Example: `false`_
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    id: 123,
    user_id: "user-1234",
    user_email: "steve@domain.com",
    user_name: "Name at Time of Booking",

    asset_id: "desk-12234",
    zones: ["zone-123",  "zone-456"],
    booking_type: "desk",

    booking_start: 1234567,
    booking_end: 1234589,
    timezone: "Sydney",

    title: "optional",
    description: "optional",

    checked_in: true,
    rejected: false,
    approved: true,
    approver_id: "user-5678",
    approver_email: "admin@domain.com",
    approver_name: "Bob Jane",
    extension_data: {
        anykind_of_data: "user defined"
    }
}
```
{% endswagger-response %}
{% endswagger %}
