---
title: PlaceOS Bookings (Room Events)
description: Access this System's Event data, via the Calendar Driver
---

# PlaceOS Bookings (Room Events) Driver
* Type: Logic Driver
* Dependencies: PlaceOS Calendar Driver
* Source: https://github.com/PlaceOS/drivers/blob/master/drivers/place/bookings.cr

## Functions

* Regularly fetches this room's Events and exposes them along with the current state of the room's calendar. 
* Provide checkin, auto cancel and decline functions.
* Provides status variables for Booking panel app, kiosk and workplace app (explore/map page) to bind to for room availability data


## Settings

| Key | Type | Default value | Description |
| --- | --- | --- | --- |
|`calendar_id`| String | nil | The email address of the room the module is in |
|`calendar_time_zone`| String | Australia/Sydney |  Currently has no impact |
|`book_now_default_title`| String | Ad Hoc booking |  Title of booking if unchanged |
|`disable_book_now`| Boolean | false |   |
|`disable_end_meeting`| Boolean | false | Exposes a disable_end_meeting status variable such that frontends like PlaceOS template Bookings can detect it and enable/disable it's auto event cancellation functionality (frontend will exec end_meeting causing the current event to be truncated to the current time, freeing up the room (in case of no shows).  |
|`pending_period`| UInt32 | 5 | Number of minutes AFTER the Booking start time until status changes from pending to free |
|`pending_before`| UInt32 | 5 | Number of minutes BEFORE the Booking start time until the status changes from free  to pending  |
|`cache_polling_period`| UInt32 | 5 |   |
|`cache_days`| UInt32 | 30 |   |
|`sensor_stale_minutes`| Int32 | 8 | Consider sensor data older than this unreliable  |
|`change_event_sync_delay`| UInt32 | 5 |  As graph API is eventually consistent we want to delay syncing for a moment |
|`control_ui`| String | https://if.panel/to_be_used_for_control |   |
|`catering_ui`| String | https://if.panel/to_be_used_for_catering |   |
|`include_cancelled_bookings`| Boolean | false |   |
|`hide_qr_code`| Boolean | false |   |
|`custom_qr_url`| String | https://domain.com/path |   |
|`custom_qr_color`| String | black | The colour of the QR codes the module generates  |
|`room_image`| String | https://domain.com/room_image.svg | This image is displayed along with the capacity when the room is not bookable  |
|`sensor_mac`| String | device-mac |   |
|`hide_meeting_details`| Boolean | false |   |
|`hide_meeting_title`| Boolean | false |   |


## Status Variables

### `bookable`
true if the room can be directly booked by end users without going through an admin
#### Schema/Type
Boolean



### `room_name`
The name of the room
#### Schema/Type
String


### `room_capacity`
Max number of people that can be booked into a meeting in the room
#### Schema/Type
Int


### `default_title`
Title of meetings if none is set
#### Schema/Type
String


### `disable_book_now`

#### Schema/Type
Boolean


### `disable_end_meeting`
Exposes a disable_end_meeting status variable such that frontends like PlaceOS template Bookings can detect it and enable/disable it's auto event cancellation functionality (frontend will exec end_meeting causing the current event to be truncated to the current time, freeing up the room (in case of no shows).
#### Schema/Type
Boolean


### `pending_period`
Number of minutes AFTER the Booking start time until status changes from pending to free
#### Schema/Type
UInt32


### `pending_before`
Number of minutes BEFORE the Booking start time until the status changes from free  to pending
#### Schema/Type
UInt32


### `control_ui`

#### Schema/Type
String


### `catering_ui`

#### Schema/Type
String


### `show_qr_code`

#### Schema/Type
Boolean


### `connected`

#### Schema/Type
Boolean


### `booked`
true when there is a current (start time < current time < end time)
#### Schema/Type
Boolean


### `current_pending`
true from the event start time until pending_period mins after the event start time OR until checkin / start_meeting is executed.
#### Schema/Type#
Boolean


### `next_pending`
true from pending_before mins before an event start time until the event start time OR until checkin / start_meeting is executed.
#### Schema/Type
Boolean


### `pending`
true when either current_pending or next_pending is true
#### Schema/Type
Boolean


### `in_use`
true when booked AND NOT pending (means that the current event has been checked in via checkin OR start_meeting functions)
#### Schema/Type
Boolean


### `status `
Describes the current status of the room
#### Schema/Type
free, pending, busy




### `bookings`
Contains an array of Events that occur in this System's mailbox (see `system.email` property) between the start of the current day (in the timezone of the core service) and the `cache_days` setting.

#### Schema/Type

See also: https://github.com/PlaceOS/calendar/blob/master/src/models/event.cr
```
[
    # todo: move the Event schema to a single dedicated page, that other pages will link to.
    {
        event_start: Integer # Linux Epoch
        id: String
    }
]
```

#### Examples

##### 1. No events
```
[]
```









## Commands

### `calendar_id`
Displays the calendar ID - This means the ID of the room, which is the email address assigned to the room in BackOffice, as each room has its own calendar.

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| None |  |  |  |   |

#### Response Schema
```
```

#### Example Responses
##### 1. If successful:
```
meetingroom@company.com
```


### `start_meeting`
Starts a booked current or future meeting in the current room, to prevent automatic cancellation.

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| meeting_start_time |  true  |  Int64 | Nil |  The time of the meeting you wish to start, in Unix time  |

#### Response Schema
```
```

#### Example Responses
##### 1. If successful:
```
null
```




### `checkin`
Starts the current meeting in the current room to prevent automatic cancellation.

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| None |

#### Response Schema
```
```

#### Example Responses
##### 1. If successful:
```
null
```


### `end_meeting`
Ends the meeting in the current room which has the start time entered. 

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| meeting_start_time | true | Int64 | N/A | The start time of the meeting the user wishes to cancel in seconds (Unix time) |
| notify | false | Boolean | false | If set to true, this will notify the other meeting participants |
| comment | false | String | nil | This will be added to the notification |

#### Response Schema
```
```

#### Example Responses
##### 1. 
```

```



### `book_now`
Books and starts a meeting in the current system which starts immediately and lasts an certain length of time in seconds as specified by the user.

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| period_in_seconds | true | Int64 | N/A | The length of the meeting the user is booking in seconds |
| title | false | String | nil | The name of the meeting |
| owner | false | String | nil | The email of the host of the meeting as registered in BackOffice. Does not work if this is filled in with a host that does not exist. Works if left empty. |

#### Response Schema
```
```

#### Example Responses
##### 1. If the owner does not exist:
```
{
    "error": "request failed",
    "sys_id": "sys-EJeSmse5Z2",
    "module_name": "Bookings",
    "index": 1,
    "message": "module raised: remote exception: Bad Request (PlaceCalendar::Exception) (PlaceOS::Driver::RemoteException) (PlaceOS::Driver::RemoteException)",
    "backtrace": [
        "repositories/drivers/lib/place_calendar/src/office365.cr:420:7 in 'handle_office365_exception'",
        "repositories/drivers/lib/place_calendar/src/office365.cr:213:7 in 'create_event'",
        "repositories/drivers/lib/place_calendar/src/place_calendar.cr:23:5 in 'create_event'",
        "repositories/drivers/drivers/place/calendar_common.cr:322:14 in 'create_event'",
        "repositories/drivers/drivers/microsoft/graph_api.cr:3:1 in '->'",
        "repositories/drivers/drivers/microsoft/graph_api.cr:3:1 in 'execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:164:5 in 'execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver.cr:522:1 in 'run_execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:262:24 in 'process'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:179:7 in '->'",
        "/usr/share/crystal/src/fiber.cr:146:11 in 'run'",
        "/usr/share/crystal/src/fiber.cr:98:34 in '->'",
        "???"
    ]
}
```

##### 2. If neither optional field is filled out:
```
{
    "event_start": 1678359840,
    "event_end": 1678361880,
    "id": "AAkALgAAAAAAHYQDEapmEEGaBh1ZdOKM9wAEWahNjgAA",
    "host": "ACA.test@company.com.au",
    "title": "Test",
    "body": "",
    "attendees": [
        {
            "name": "Resource - Meeting Room  ",
            "email": "meetingroom@company.com.au",
            "response_status": "accepted",
            "resource": true
        }
    ],
    "location": "Australia/Sydney",
    "private": false,
    "all_day": false,
    "timezone": "Etc/GMT",
    "recurring": false,
    "created": "2023-03-09T11:04:48Z",
    "updated": "2023-03-09T11:04:48Z",
    "attachments": [],
    "status": "confirmed",
    "creator": "ACA.test@company.com.au",
    "ical_uid": "04000000820008000000000E15B0F67652D901000000000000000182B5434CB8A1190D33B69031",
    "online_meeting_provider": "unknown",
    "online_meeting_phones": []
}
```

##### 3. If the room is already booked:
```
{
    "event_start": 1677862320,
    "event_end": 1677868320,
    "id": "AAkALgAAAAAAHYQDEapmEc2byACqAC-EWg0XoQbkCdlH4poLQWvwAApKCC7wAA",
    "host": "testroom3@org.com",
    "title": "Ad Hoc booking",
    "body": "",
    "attendees": [
        {
            "name": "Test Room 3",
            "email": "testroom3@org.com",
            "response_status": "accepted",
            "resource": true
        }
    ],
    "location": "Australia/Sydney",
    "private": false,
    "all_day": false,
    "timezone": "Etc/GMT",
    "recurring": false,
    "created": "2023-03-03T16:52:09Z",
    "updated": "2023-03-03T16:52:09Z",
    "attachments": [],
    "status": "confirmed",
    "creator": "testroom3@org.com",
    "ical_uid": "040000008200E00074C5B7101A82E0080000000071000000000000000010000000088E69420B979D46A74BB28B9BFEFBAD",
    "online_meeting_provider": "unknown",
    "online_meeting_phones": []
}
```



### `poll_events`
Query neighbouring calendar driver for Events that occur in this System's mailbox (see `system.email` property) between the start of the current day (in the timezone of the core service) and the `cache_days` setting. Updates the state with this information, rather than returning it as a response.

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| None |

#### Response Schema
```
```

#### Example Responses
##### 1. If successful:
```
[]
```



### `locate_user`
Used by location services and area management drivers to locate a given user within the building. Not useful as a command on its own, only used by the location drivers. Nothing to do with the specific system the module is in, the location services use this command to poll each room for a specific user. If they are not present in the current room, it returns an empty array. Neither the username or email is required but at least one should be used for the command to be useful. The username is often the same as the username but in some cases is not, which is why there are two fields.

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| email | false | String | nil | The email of the user to search for |
| username | false | String | nil | If no username matches, it will search for emails that begin with the username |

#### Response Schema
```
```

#### Example Responses
##### 1. If user is not in the room OR the user AND email do not exist:
```
[]
```





### `macs_assigned_to`
Uses `locate_user` to find the MAC addresses assigned to users matching the email and username. Neither the username or email is required but at least one should be used for the command to be useful. Used by the location services and area management drivers and is not useful on its own.

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| email | false | String | nil | Searches for the MAC address of the user with email entered |
| username | false | String | nil | Searches for the MAC address of the user with username entered. Will search for emails that begin with the username if none are found |

#### Response Schema
```
```

#### Example Responses
##### 1. If user is not in the room OR does not exist:
```
[]
```





### `check_ownership_of`
Searches for a user by their MAC address. It will show the user the MAC address is assigned to as well as the meeting they are in. Used by location services and area management drivers and is not useful on its own.

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| mac_address | true | String | N/A | The MAC address to search for |

#### Response Schema
```
```

#### Example Responses
##### 1. If the MAC address belongs to a user:
```
    {
        location:    "meeting",
        assigned_to: host,
        mac_address: sys_email,
      }
```
##### 2. 
```
[]
```




### `device_locations`
Searches for all devices in a specific zone by zone ID or location name. Used by location services and area management drivers, not useful on its own.

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| zone_id | true | String | N/A | Zone ID of device search |
| location | false | String | nil | name of location |

#### Response Schema
```
```

#### Example Responses
##### 1. 
```
[]
```





### `is_stale?`
Checks if the information it has from room sensor data is old or up-to-date. Returns true if the information is old. Used by location services and area management drivers, not useful on its own.

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| timestamp | true | Boolean | N/A | The timestamp it receives from the location drivers to check if its info is old or not - Unix time |

#### Response Schema
```
```

#### Example Responses
##### 1. 
```
true
```
##### 2.
```
null
```


