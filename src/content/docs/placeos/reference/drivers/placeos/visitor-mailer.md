---
title: PlaceOS Visitor Mailer Driver
description: Access this System's Event and Bookings data, via the Mailer Driver
---

# PlaceOS Bookings (Room Events) Driver
* Type: Logic Driver
* Dependencies: PlaceOS Driver
* Source: https://github.com/PlaceOS/drivers/blob/master/drivers/place/visitor_mailer.cr
## Functions

* Emails visitors when they are invited and notifies hosts when visitors check in
* 
*

## Settings

| Key | Type | Default value | Description |
| --- | --- | --- | --- |
|`timezone`| String | GMT | 
|`date_time_format`| String | %c | 
|`time_format`| String | %l:%M%p | 
|`date_format`| String | %A, %-d %B |
|`booking_space_name`| String | Client Floor | 
|`send_reminders`| String | nil | 
|`reminder_template` | String | visitor | 
|`event_template`| String | event | 
|`booking_template`| String | booking | 
|`disable_qr_code`| Boolean | false
|`send_network_credentials`| Boolean | false
|`network_password_length`| Int32 | DEFAULT_PASSWORD_LENGTH | 
|`network_password_exclude`| String | DEFAULT_PASSWORD_EXCLUDE | 
|`network_password_minimum_lowercase` | Int32  | DEFAULT_PASSWORD_MINIMUM_LOWERCASE | 
|`network_password_minimum_uppercase` | Int32 | DEFAULT_PASSWORD_MINIMUM_UPPERCASE | 
|`network_password_minimum_numbers` | Int32  | DEFAULT_PASSWORD_MINIMUM_NUMBERS | 
|`network_password_minimum_symbols`| Int32 | DEFAULT_PASSWORD_MINIMUM_SYMBOLS | 
|`network_group_ids`| String | 
|`error_count`| | 
|`last_error`| String | 

## Status Variables
| Key | Type | Default value | Description |
| --- | --- | --- | --- |
|`connected`| Boolean | True

## Commands

### `building_zone?`

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |

#### Response Schema
```
```

#### Example Responses
##### 1. If successful:
```
{
    "id": "zone-DnTcV5ZeEq",
    "name": "BLD PlaceOS Dev Sydney",
    "display_name": "PlaceOS Sydney Dev",
    "location": "<-33.8688197, 151.2092955>",
    "tags": [
        "building"
    ]
}
```

### `building_zone`

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |

#### Response Schema
```
```

#### Example Responses
##### 1. If successful:
```
{
    "id": "zone-DnTcV5ZeEq",
    "name": "BLD PlaceOS Dev Sydney",
    "display_name": "PlaceOS Sydney Dev",
    "location": "<-33.8688197, 151.2092955>",
    "tags": [
        "building"
    ]
}
```


### `send_visitor_qr_email`

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
|`template`| true | String | 
|`visitor_email`| true | String | 
|`visitor_name`| true | String | 
|`host_email`| true | String
|`event_title`| true | String | 
|`event_start` | true | Int64 | 
|`resource_id` | true | String | 
|`event_id` | true | String
|`area_name`| true | String | 

#### `send_reminder_emails`
#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |

#### Response Schema
```
```

#### Example Responses
##### 1. If unsuccessful:
```
{
    "error": "request failed",
    "sys_id": "sys-ELNF3KjDuK",
    "module_name": "VisitorMailer",
    "index": 1,
    "message": "module raised: remote exception: unexpected response 500\n{\"error\":\"unexpected upstream response BAD_REQUEST: Bad Request\\n{\\\"error\\\":{\\\"code\\\":\\\"AuthenticationError\\\",\\\"message\\\":\\\"Error authenticating with resource\\\",\\\"innerError\\\":{\\\"date\\\":\\\"2023-03-09T01:15:50\\\",\\\"request-id\\\":\\\"01ef7fe8-3ed3-40bf-9d4d-31db72afb586\\\",\\\"client-request-id\\\":\\\"01ef7fe8-3ed3-40bf-9d4d-31db72afb586\\\"}}}\"} (Exception) (PlaceOS::Driver::RemoteException) (PlaceOS::Driver::RemoteException)",
    "backtrace": [
        "repositories/drivers/drivers/place/staff_api.cr:211:5 in 'query_guests'",
        "repositories/drivers/drivers/place/staff_api.cr:7:1 in '->'",
        "repositories/drivers/drivers/place/staff_api.cr:7:1 in 'execute'",
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