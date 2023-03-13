---
Type: Service
title: PlaceOS Staff API Driver
description: Helpers for requesting data held in PlaceOS staff API
---

# PlaceOS Staff API Driver
* Type: Service
* Dependencies: PlaceOS Calendar Driver
* Source: https://github.com/PlaceOS/drivers/blob/master/drivers/place/staff_api.cr

## Functions

* PlaceOS staff authentication
* Support for guest, calendar, zones, bookings, and PlaceOS authentication
* Helpers for requesting data held in PlaceOS staff API

## Settings 

| Key | Type | Default value | Description |
| --- | --- | --- | --- |
| `api_key` | String | "" | PlaceOS X-API-key, for simpler authentication | 
| `username` | String | "" | PlaceOS API Credentials
| `password` | String | "" | 
| `client_id`| String | "" | 
| `redirect_uri` | String | "" | 
| `calendar_service_account` | String | service_account@email.address | 
| `calendar_config` | | |
| scopes |String | https://www.googleapis.com/auth/calendar, https://www.googleapis.com/auth/admin.directory.user.readonly
| domain | String | primary.domain.com
| sub | String | default.service.account@google.com
| issuer | String | placeos@organisation.iam.gserviceaccount.com
| signing_key | String | PEM encoded private key
|`calendar_config_office`| 
| calendar_config | String | ""
|tenant| String | ""
|client_id | String | ""
|client_secret| String | ""
|conference_type| | nil
|`rate_limit` | Int | 5
|`mailer_from`| String | email_or_office_userPrincipalName
|`email_templates`|
|subject| String | %{name} has arrived
|text| String | for your meeting at %{time}

## Status Variables
| Key | Type | Default value | Description |
| --- | --- | --- | --- |
### `connected`

## Commands

### `get_system`
#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| id |  true  |  String | complete = false |    |

#### Response Schema
```
```
#### 1. If unsuccessful user string:
```
"error": "request failed",
    "sys_id": "sys-ELNF3KjDuK",
    "module_name": "StaffAPI",
    "index": 1,
    "message": "module raised: unexpected response for system id string: 404\n{\"error\":\"Key not present: string\"} (Exception)",
    "backtrace": [
        "repositories/drivers/drivers/place/staff_api.cr:60:5 in 'get_system'",
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
```



### `systems`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| q |  false  |  String | nil |    |
| zone_id |  false  |  String | nil |    |
| capacity |  false  |  Int32 | nil |    |
| bookable |  false  |  Boolean | nil |    |
| features |  false  |  String | nil |    |
| limit |  false  | Int32 | 1000 |    |
| offset |  false  | Int32 | 0 |    |

#### Response Schema
```
```

#### Example Responses
##### 1. If successful:
```
"created_at": 1643255840,
        "updated_at": 1678305608,
        "id": "sys-DDL~Y-QsMY",
        "name": "[PlaceOS Dev] AV Demo",
        "zones": [
            "zone-EDvzySzrvj",
            "zone-EJeRO3sODH",
            "zone-E6bGxaHy0F",
            "zone-E6bIkk0B--",
            "zone-DnTc8chjVb",
            "zone-DtInkbLwH9",
            "zone-DnTcV5ZeEq",
            "zone-Do2HJ00hTG"
        ],
        "modules": [
            "mod-DVxAQrwgnG",
            "mod-DVxD9pZpPw",
            "mod-GFF2CmK9Es1",
            "mod-DWqCA5qECr",
            "mod-DWqHuzoQE-",
            "mod-DtInkWoYbX",
            "mod-EV7tyePU8Z",
            "mod-E_-HwtVqbQ"
        ],
        "description": "",
        "email": "",
        "display_name": "AV Demo",
        "map_id": "",
        "capacity": 0,
        "features": [
            "StaffAPI",
            "LocationServices",
            "ChatBot",
            "SecurityMock",
            "RhombusSecurity",
            "Module-ba640e46",
            "Module-0a6e6d73",
            "Module-0552e8a8"
        ],
        "bookable": false,
        "installed_ui_devices": 0,
        "support_url": "",
        "version": 932
```




### `systems_in_building`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| zone_id |  true  | String | null |    |
| ids_only |  false  |  Boolean | true |    |

#### Response Schema
```
```

#### Example Responses
##### 1. If successful:
```
{}
```









### `staff_details`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| email |  true  | String |  | Staff details returns the information from AD   |

#### Response Schema
```
```

#### Example Responses
##### 1. If staff email not found:
```
"error": "request failed",
    "sys_id": "sys-ELNF3KjDuK",
    "module_name": "StaffAPI",
    "index": 1,
    "message": "module raised: unexpected response for staff irvin@place.tech: 404\n{\"error\":\"user irvin@place.tech not found\"} (Exception)",
    "backtrace": [
        "repositories/drivers/drivers/place/staff_api.cr:105:5 in 'staff_details'",
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
```



### `user`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| id |  true  | String |  |    |

#### Response Schema
```
```

#### Example Responses
##### 1. If user ID not found:
```
"error": "request failed",
    "sys_id": "sys-ELNF3KjDuK",
    "module_name": "StaffAPI",
    "index": 1,
    "message": "module raised: Not Found (PlaceOS::Client::API::Error)",
    "backtrace": [
        "repositories/drivers/lib/placeos/src/placeos/api_wrapper/endpoint.cr:17:9 in 'fetch'",
        "repositories/drivers/drivers/place/staff_api.cr:119:5 in 'user'",
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
```




### `create_user`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| body_json |  true  | String |  |    |

#### Response Schema
```
```

#### Example Responses
##### 1. Failed to create user:
```
"error": "request failed",
    "sys_id": "sys-ELNF3KjDuK",
    "module_name": "StaffAPI",
    "index": 1,
    "message": "module raised: failed to create user: 403 (Exception)",
    "backtrace": [
        "repositories/drivers/drivers/place/staff_api.cr:127:5 in 'create_user'",
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
```




### `update_user`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| id |  true  | String | Nil |    |
| body_json |  true  | String | Nil |    |

#### Response Schema
```
```

#### Example Responses
##### 1. Failed to update user:
```
"error": "request failed",
    "sys_id": "sys-ELNF3KjDuK",
    "module_name": "StaffAPI",
    "index": 1,
    "message": "module raised: failed to update user a: 404 (Exception)",
    "backtrace": [
        "repositories/drivers/drivers/place/staff_api.cr:137:5 in 'update_user'",
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
```




### `delete_user`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| id |  true  | String | Nil |    |
| foce_removal |  false  | Boolean | false |    |

#### Response Schema
```
```

#### Example Responses
##### 1. Failed to delete user:
```
"error": "request failed",
    "sys_id": "sys-ELNF3KjDuK",
    "module_name": "StaffAPI",
    "index": 1,
    "message": "module raised: failed to delete user a: 403 (Exception)",
    "backtrace": [
        "repositories/drivers/drivers/place/staff_api.cr:143:5 in 'delete_user'",
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
```





### `revive_user`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| id |  true  | String | Nil |    |

#### Response Schema
```
```

#### Example Responses
##### 1. If unsuccessful:
```
"error": "request failed",
    "sys_id": "sys-ELNF3KjDuK",
    "module_name": "StaffAPI",
    "index": 1,
    "message": "module raised: failed to revive user a: 403 (Exception)",
    "backtrace": [
        "repositories/drivers/drivers/place/staff_api.cr:149:5 in 'revive_user'",
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
```



### `resource_token`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
|  |    |  |  |    |

#### Response Schema
```
```

#### Example Responses
##### 1. If successful:
```
{
    "token": "eyJ0eXAiOiJKV1QiLCJub25jZSI6ImxsRGhETzJpeERzTXZyXzk0RWh1azRBRGxsVVlzMTlSRjcybVpWQ0JUSGsiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC81YmFkMmY5YS1hZTU1LTRlMTItYjUzZC0xZjJhYTQ2ZjViYTQvIiwiaWF0IjoxNjc4MzIyNDk5LCJuYmYiOjE2NzgzMjI0OTksImV4cCI6MTY3ODMyNzE1NywiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhUQUFBQUJ3NjVzb1hGbXoxVVZxK0J0aGlWM0VRMWxWSkZsNDRKNGdGN3ltQ1FyK0txVmE5cVFUajczQ0N1RGE1L2dOcVciLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6InBsYWNlb3MtZGV2LmFjYS5pbSIsImFwcGlkIjoiYjc1ZjUyN2UtMTU0ZC00ODRlLThlMmMtYmRjMTE0MzhiYjVkIiwiYXBwaWRhY3IiOiIxIiwiZmFtaWx5X25hbWUiOiJMYW5nZXIiLCJnaXZlbl9uYW1lIjoiSXNhaWFoIiwiaWR0eXAiOiJ1c2VyIiwiaXBhZGRyIjoiMTgyLjIzOS4xMTcuMTM1IiwibmFtZSI6IklzYWlhaCBMYW5nZXIiLCJvaWQiOiI1YzA1NzM2MS04ZTAyLTQwYWQtYTE4Yy01ODJkY2JiYzliZWUiLCJwbGF0ZiI6IjUiLCJwdWlkIjoiMTAwMzIwMDFFMTk5MkIxMSIsInJoIjoiMC5BVlVBbWktdFcxV3VFazYxUFI4cXBHOWJwQU1BQUFBQUFBQUF3QUFBQUFBQUFBQ0lBS1kuIiwic2NwIjoiQ2FsZW5kYXJzLlJlYWRXcml0ZSBDYWxlbmRhcnMuUmVhZFdyaXRlLlNoYXJlZCBDb250YWN0cy5SZWFkLlNoYXJlZCBlbWFpbCBHcm91cC5SZWFkLkFsbCBvcGVuaWQgUGxhY2UuUmVhZC5BbGwgcHJvZmlsZSBVc2VyLlJlYWQgVXNlci5SZWFkLkFsbCIsInN1YiI6Ink1SW5JUEZQWEc5MkZ0TUc0eGpyWHk1dkpaLURPRE1zc3hQVTVUMUN2R1kiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiQVMiLCJ0aWQiOiI1YmFkMmY5YS1hZTU1LTRlMTItYjUzZC0xZjJhYTQ2ZjViYTQiLCJ1bmlxdWVfbmFtZSI6IklzYWlhaExAbDZ5eS5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJJc2FpYWhMQGw2eXkub25taWNyb3NvZnQuY29tIiwidXRpIjoicFBfWkhiYTJaRU9SajJJVUJId3FBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiMjkyMzJjZGYtOTMyMy00MmZkLWFkZTItMWQwOTdhZjNlNGRlIiwiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19zdCI6eyJzdWIiOiJvSTBGYmp3b25JZlI3MmFVVFpCdmlKN216QXhsRkMyYlRwTHFscTF3bXYwIn0sInhtc190Y2R0IjoxNjQ2NDkxNDM5fQ.dXYJgaVUnGsxapsKZqfhaY4Hhj82pBecxN4bNuxXElSCS-I0ymJNQNbjbqV_leLgWNr_C1ZhgcXCwBBEkQGTrB5daMfrb9dDAcNHSr1-opanpp90m4ffekyFAAiHoBQT5JbyyYLPrBlPXcNIuIJyGc-pEvNPcCA-2X8y9JJWgDn-wSTyIY21VjVRjBWj0w3sL3JWwpyALTwwGinS5XUtmbrCYU3J4DfGlnVRAWmthUrDkza1fLOrcBdSCcqryXIgie698gBUzF3nyKWtw1uUe55UuZ0wdXmpieH7JDgKIURUKOgFlEda-TtdbtbtilkaYKmkBjxpn55A8NplUpQCpQ",
    "expires": 1678327156
}
```



### `query_users`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| q |  false  | String | Nil |    |
| limit |  false  | Int32 | 20 |    |
| offset |  false  | Int32 | 0 |    |
| authority_id |  false  | String | Nil |    |
| include_deleted |  false  | Boolean | false |    |

#### Response Schema
```
```

#### Example Responses
##### 1. If successful:
```
{
        "created_at": 1619071832,
        "id": "user-H84eEsZB1N4",
        "email_digest": "18a2f5a0f52fcef4a8d3c7f35dced9b5",
        "nickname": "",
        "name": "Aaron James",
        "first_name": "Aaron",
        "last_name": "James",
        "groups": [],
        "country": "",
        "building": "",
        "image": "",
        "authority_id": "authority-GAdySsf05mL",
        "deleted": false,
        "email": "aaron.james@suncorp.com.au",
        "phone": ""
```




### `guest_details`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| guest_id |  true  | String |  |    |

#### Response Schema
```
```

#### Example Responses
##### 1. If unsuccessful:
```
"error": "request failed",
    "sys_id": "sys-ELNF3KjDuK",
    "module_name": "StaffAPI",
    "index": 1,
    "message": "module raised: unexpected response 404\n{\"error\":\" (Clear::SQL::RecordNotFoundError)\\n  from app/lib/clear/src/clear/model/collection.cr:509:7 in 'find!'\\n  from app/lib/clear/src/clear/model/collection.cr:506:5 in 'find!'\\n  from app/src/controllers/guests.cr:20:16 in 'find_guest'\\n  from app/src/controllers/guests.cr:3:1 in '_before_action_find_guest_wrapper_'\\n  from app/src/controllers/guests.cr:3:1 in 'get__api_staff_v1_guests__id'\\n  from app/src/controllers/guests.cr:3:1 in '->'\\n  from app/lib/action-controller/src/action-controller/router/route_handler.cr:39:25 in 'process_request'\\n  from app/lib/opentelemetry-instrumentation/src/opentelemetry/instrumentation/frameworks/spider-gazelle.cr:62:9 in 'process_request'\\n  from app/lib/action-controller/src/action-controller/router/route_handler.cr:30:7 in 'call'\\n  from usr/share/crystal/src/http/server/handler.cr:28:7 in 'call_next'\\n  from app/lib/opentelemetry-instrumentation/src/opentelemetry/instrumentation/crystal/http_server.cr:48:9 in 'call_next'\\n  from app/lib/action-controller/src/action-controller/log_handler.cr:57:13 in 'call'\\n  from usr/share/crystal/src/http/server/handler.cr:28:7 in 'call_next'\\n  from app/lib/opentelemetry-instrumentation/src/opentelemetry/instrumentation/crystal/http_server.cr:48:9 in 'call_next'\\n  from app/lib/action-controller/src/action-controller/error_handler.cr:70:5 in 'call'\\n  from app/lib/opentelemetry-instrumentation/src/opentelemetry/instrumentation/crystal/http_server.cr:192:23 in 'process'\\n  from usr/share/crystal/src/http/server.cr:515:5 in 'handle_client'\\n  from app/lib/opentelemetry-instrumentation/src/opentelemetry/instrumentation/crystal/http_server.cr:86:9 in 'handle_client'\\n  from usr/share/crystal/src/http/server.cr:468:13 in '->'\\n  from usr/share/crystal/src/fiber.cr:146:11 in 'run'\\n  from usr/share/crystal/src/fiber.cr:98:34 in '->'\\n  from ???\\n\"} (Exception)",
    "backtrace": [
        "repositories/drivers/drivers/place/staff_api.cr:182:5 in 'guest_details'",
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
```



### `update_guest`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| id |  true  | String | nil |    |
| body_json |  true  | String | nil |    |

#### Response Schema
```
```

#### Example Responses
##### 1. Failed to update guest:
```
{
    "error": "request failed",
    "sys_id": "sys-ELNF3KjDuK",
    "module_name": "StaffAPI",
    "index": 1,
    "message": "module raised: failed to update guest asdasd: 404 (Exception)",
    "backtrace": [
        "repositories/drivers/drivers/place/staff_api.cr:198:5 in 'update_guest'",
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




### `query_guests`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| period_start |  true  | Int64 |  |    |
| period_end |  true  | Int64 |  |    |
| zones |  true  | String |  |    |

#### Response Schema
```
```

#### Example Responses
##### 1. If successful:
```
```




### `query_events`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| period_start |  true  | Int64 |  |    |
| period_end |  true  | Int64 |  |    |
| zones |  false  | String | nil |    |
| systems |  false  | String | nil |    |
| capacity |  false  | Int32 | nil |    |
| features |  false  | String | nil |    |
| bookable |  false  | Boolean | nil |    |
| include_cancelled |  false  | Boolean | nil |    |

#### Response Schema
```
```

#### Example Responses
##### 1. If successful:
```
[]
```





### `update_event`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| system_id |  true  | String |  |    |
| event |  true  | PlaceCalendar |  |    |

#### Response Schema
```
```

#### Example Responses
##### 1. If successful:
```
```



### `delete_event`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| system_id |  true  | String |  |    |
| event_id |  true  | String |  |    |

#### Response Schema
```
```

#### Example Responses
##### 1. If successful:
```
```

### `patch_event_metadata`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| system_id |  true  | String |  |    |
| event_id |  true  | String |  |    |
| metadata |  true  |  |  |    |

#### Response Schema
```
```

#### Example Responses
##### 1. If successful:
```
```





### `replace_event_metadata`
### Parameters

| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| system_id |  true  | String |  |    |
| event_id |  true  | String |  |    |
| metadata |  true  |  |  |    |

#### Response Schema
```
```

#### Example Responses
##### 1. If successful:
```
```



### `metadata`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| id |  true  | String |  |    |
| key |  false  | String | nil | |

#### Response Schema
```
```

#### Example Responses
##### 1. If successful:
```
{}
```

### `metadata_children`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| id |  true  | String |  |    |
| key |  false  | String | nil | |

#### Response Schema
```
```

#### Example Responses
##### 1. Metadata not found:
```
{
    "error": "request failed",
    "sys_id": "sys-ELNF3KjDuK",
    "module_name": "StaffAPI",
    "index": 1,
    "message": "module raised: Not Found (PlaceOS::Client::API::Error)",
    "backtrace": [
        "repositories/drivers/lib/placeos/src/placeos/api_wrapper/metadata.cr:13:7 in 'children'",
        "repositories/drivers/drivers/place/staff_api.cr:293:5 in 'metadata_children'",
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


### `write_metadata`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| id |  true  | String |  |    |
| key |  true  | String | null | |
| payload |  true  |  |  | |
| description |  false  | String | "" | |

#### Response Schema
```
```

#### Example Responses
##### 1. If successful:
```
```


### `merge_metadata`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| id |  true  | String |  |    |
| key |  true  | String | null | |
| payload |  true  |  |  | |
| description |  false  | String | "" | |

#### Response Schema
```
```

#### Example Responses
##### 1. If successful:
```
```

### `zone`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| zone_id |  true  | String | null |    |

#### Response Schema
```
```

#### Example Responses
##### 1. Zone ID not found:
```
{
    "error": "request failed",
    "sys_id": "sys-ELNF3KjDuK",
    "module_name": "StaffAPI",
    "index": 1,
    "message": "module raised: Not Found (PlaceOS::Client::API::Error)",
    "backtrace": [
        "repositories/drivers/lib/placeos/src/placeos/api_wrapper/endpoint.cr:17:9 in 'fetch'",
        "repositories/drivers/drivers/place/staff_api.cr:310:5 in 'zone'",
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

### `zones`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| q |  false  | String | nil |    |
| limit |  false  | Int32 | 1000 |    |
| offset |  false  | Int32 | 0 |    |
| parent |  false  | String | nil |    |
| tags |  false  | String | nil |    |

#### Response Schema
```
```

#### Example Responses
##### 1. If successful:
```
{
        "created_at": 1653973909,
        "updated_at": 1670211337,
        "id": "zone-DnTc8chjVb",
        "name": "ORG PlaceOS Dev",
        "display_name": "PlaceOS Dev",
        "location": "-33.8860721,151.2073892",
        "description": "",
        "code": "",
        "type": "",
        "count": 0,
        "capacity": 0,
        "map_id": "",
        "tags": [
            "org"
        ],
        "triggers": [],
        "parent_id": ""
    },
```



### `create_booking`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| booking_type |  true  | String |  |    |
| asset_id |  true  | String | 1000 |    |
| user_id |  true  | String | 0 |    |
| user_email |  true  | String |  |    |
| user_name |  true  | String |  |    |
| zones |  true  | String |  |    |
| booking_start |  false  | Int64 | nil |    |
| booking_end |  false  | Int64 | nil |    |
| checked_in |  false  | Boolean | false |    |
| approved |  false  | Boolean | nil |    |
| title |  false  | String | nil |    |
| description |  false  | String | nil |    |
| time_zone |  false  | String | nil |    |
| extension_data |  false  |  | nil |    |
| utm_source |  false  | String | nil |    |
| limit_override |  false  | Int64 | nil |    |

#### Response Schema
```
```

#### Example Responses
##### 1. If successful:
```
```



### `update_booking`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| booking_id |  true  | String |  |    |
| booking_start |  false  | Int64 | nil |    |
| booking_end |  false  | Int64 | nil |    |
| asset_id |  false  | String | nil |    |
| title |  false  | String | nil |    |
| description |  false  | String | nil |    |
| timezone |  false  | String | nil |    |
| extension_data |  false  |  | nil |    |
| approved |  false  | Boolean | nil |    |
| checked_in |  false  | Boolean | false |    |
| limit_override |  false  | Int64 | nil |    |

#### Response Schema
```
```

#### Example Responses
##### 1. Issue updating booking:
```
{
    "error": "request failed",
    "sys_id": "sys-ELNF3KjDuK",
    "module_name": "StaffAPI",
    "index": 1,
    "message": "module raised: issue updating booking 1: 404 (Exception)",
    "backtrace": [
        "repositories/drivers/drivers/place/staff_api.cr:423:5 in 'update_booking'",
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

### `reject`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| booking_id |  true  | String |  |    |
| utm_source |  false  | String | nil |    |

#### Response Schema
```
```

#### Example Responses
##### 1. Issue rejecting booking:
```
{
    "error": "request failed",
    "sys_id": "sys-ELNF3KjDuK",
    "module_name": "StaffAPI",
    "index": 1,
    "message": "module raised: issue rejecting booking 1: 404 (Exception)",
    "backtrace": [
        "repositories/drivers/drivers/place/staff_api.cr:436:5 in 'reject'",
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

### `approve`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| booking_id |  true  | String |  |    |

#### Response Schema
```
```

#### Example Responses
##### 1. Issue approving booking:
```
{
    "error": "request failed",
    "sys_id": "sys-ELNF3KjDuK",
    "module_name": "StaffAPI",
    "index": 1,
    "message": "module raised: issue approving booking 1: 404 (Exception)",
    "backtrace": [
        "repositories/drivers/drivers/place/staff_api.cr:444:5 in 'approve'",
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

### `booking_state`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| booking_id |  true  | String |  |    |
| state |  true  | String |  |    |

#### Response Schema
```
```

#### Example Responses
##### 1. Issue updating booking state:
```
{
    "error": "request failed",
    "sys_id": "sys-ELNF3KjDuK",
    "module_name": "StaffAPI",
    "index": 1,
    "message": "module raised: issue updating booking state 1: 404 (Exception)",
    "backtrace": [
        "repositories/drivers/drivers/place/staff_api.cr:452:5 in 'booking_state'",
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


### `booking_check_in`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| booking_id |  true  | String |  |    |
| state |  false  | Boolean | true |    |
| utm_source |  false  | String | nil |    |

#### Response Schema
```
```

#### Example Responses
##### 1. If successful:
```
```


### `booking_delete`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| booking_id |  true  | String |  |    |
| utm_source |  false  | String | nil |    |

#### Response Schema
```
```

#### Example Responses
##### 1. If unsuccessful:
```
{
    "error": "request failed",
    "sys_id": "sys-ELNF3KjDuK",
    "module_name": "StaffAPI",
    "index": 1,
    "message": "module raised: issue updating booking state a: 400 (Exception)",
    "backtrace": [
        "repositories/drivers/drivers/place/staff_api.cr:476:5 in 'booking_delete'",
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


### `query_bookings`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| type |  true  | String |  |    |
| period_start |  false  | Int64 | nil |    |
| period_end  |  false  | Int64 | nil |    |
| zones  |  false  | String |  |    |
| user  |  false  | String | nil |    |
| email  |  false  | String | nil |    |
| state  |  false  | String | nil |    |
| created_before  |  false  | Int64 | nil |    |
| created_after  |  false  | Int64 | nil |    |
| approved  |  false  | Boolean | nil |    |
| rejected   |  false  | Boolean | nil |    |
| checked_in   |  false  | Boolean | nil |    |

#### Response Schema
```
```

#### Example Responses
##### 1. If successful:
```
[]
```



### `get_booking`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| booking_id |  true  | String |  |    |

#### Response Schema
```
```

#### Example Responses
##### 1. If unsuccessful:
```
{
    "error": "request failed",
    "sys_id": "sys-ELNF3KjDuK",
    "module_name": "StaffAPI",
    "index": 1,
    "message": "module raised: issue getting booking a: 400 (Exception)",
    "backtrace": [
        "repositories/drivers/drivers/place/staff_api.cr:568:5 in 'get_booking'",
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

### `signal`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| channel |  true  | String |  |    |
| payload |  false  |  | nil |    |

#### Response Schema
```
```

#### Example Responses
##### 1. If successful:
```
null
```