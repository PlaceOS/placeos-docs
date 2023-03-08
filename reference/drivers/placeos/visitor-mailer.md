---
title: PlaceOS Visitor Mailer Driver
description: Access this System's Event and Bookings data, via the Mailer Driver
---

# PlaceOS Bookings (Room Events) Driver
* Type: Logic Driver
* Dependencies: 
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

#### `building_zone?`

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |

#### `building_zone`

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |


#### `send_visitor_qr_email`

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

#### `send_visitor_qr_email`
#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |