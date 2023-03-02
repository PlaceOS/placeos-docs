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
|`calendar_id`| --- | nil | --- |
|`calendar_time_zone`| String | Australia/Sydney |  Currently has no impact |
|`book_now_default_title`| String | Ad Hoc booking |  Title of booking if unchanged |
|`disable_book_now`| Boolean | false |   |
|`disable_end_meeting`| Boolean | false |   |
|`pending_period`|  | 5 |   |
|`pending_before`|  | 5 |   |
|`cache_polling_period`|  | 5 |   |
|`cache_days`|  | 30 |   |
|`sensor_stale_minutes`|  | 8 | Consider sensor data older than this unreliable  |
|`change_event_sync_delay`|  | 5 |  As graph API is eventually consistent we want to delay syncing for a moment |
|`control_ui`| String | https://if.panel/to_be_used_for_control |   |
|`catering_ui`| String | https://if.panel/to_be_used_for_catering |   |
|`include_cancelled_bookings`| Boolean | false |   |
|`hide_qr_code`| Boolean | false |   |
|`custom_qr_url`| String | https://domain.com/path |   |
|`custom_qr_color`| String | black |   |
|`room_image`| String | https://domain.com/room_image.svg | This image is displayed along with the capacity when the room is not bookable  |
|`sensor_mac`| String | device-mac |   |
|`hide_meeting_details`| Boolean | false |   |
|`hide_meeting_title`| Boolean | false |   |


## Status Variables

### `bookable`
Write description here

#### Schema/Type



### `room_name`
Describe

#### Schema/Type


### `room_capacity`


#### Schema/Type


### `default_title`

#### Schema/Type


### `disable_book_now`

#### Schema/Type


### `disable_end_meeting`

#### Schema/Type


### `pending_period`

#### Schema/Type


### `pending_before`

#### Schema/Type


### `control_ui`

#### Schema/Type


### `catering_ui`

#### Schema/Type


### `show_qr_code`

#### Schema/Type


### `connected`

#### Schema/Type


### `booked`

#### Schema/Type

### `current_pending`

#### Schema/Type#


### `next_pending`

#### Schema/Type


### `pending`

#### Schema/Type


### `in_use`

#### Schema/Type


### `status `

#### Schema/Type





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



### `start_meeting`
description

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| meeting_start_time |  true  |  Int64 | Nil |  The time of the meeting you wish to start, format = ?????????  |

#### Response Schema
```
```

#### Example Responses
##### 1. 




### `checkin`
Description

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| None |

#### Response Schema
```
```

#### Example Responses
##### 1. 


### `end_meeting`
Description

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| meeting_start_time | true | Int64 | --- | --- |
| notify | false | Boolean | false | --- |
| comment | false | String | nil | --- |

#### Response Schema
```
```

#### Example Responses
##### 1. 




### `book_now`
Description

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| period_in_seconds | true | Int64 | --- | --- |
| titles | false | String | nil | --- |
| owner | false | String | nil | --- |

#### Response Schema
```
```

#### Example Responses
##### 1. 




### `poll_events`
Query neighbouring calendar driver for Events that occur in this System's mailbox (see `system.email` property) between the start of the current day (in the timezone of the core service) and the `cache_days` setting.

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| None |

#### Response Schema
```
```

#### Example Responses
##### 1. 



### `locate_user`
Description

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| email | --- | String | nil | --- |
| username | --- | String | nil | If no username matches, it will search for emails that begin with the username |

#### Response Schema
```
```

#### Example Responses
##### 1. 





### `macs_assigned_to`
Description

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| email | --- | String | nil | --- |
| username | --- | String | nil | --- |

#### Response Schema
```
```

#### Example Responses
##### 1. 






### `check_ownership_of`
Description

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| None |

#### Response Schema
```
```

#### Example Responses
##### 1. 






### `device_locations`
Descriptions

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| None |

#### Response Schema
```
```

#### Example Responses
##### 1. 






### `is_stale?`
Description

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| None |

#### Response Schema
```
```

#### Example Responses
##### 1. 


