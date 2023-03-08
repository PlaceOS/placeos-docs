---
Type: Service
title: PlaceOS Staff API Driver
description: 
---

# PlaceOS Staff API Driver
* Type: Service
* Dependencies: 
* Source: https://github.com/PlaceOS/drivers/blob/master/drivers/place/staff_api.cr

## Functions

* Helpers for requesting data held in PlaceOS staff API
* PlaceOS authentication
* Support for guest, calendar, zones, bookings, and PlaceOS authentication

## Settings 

| Key | Type | Default value | Description |
| --- | --- | --- | --- |
| `api_key` | String | "" | PlaceOS X-API-key, for simpler authentication | 
| `username` | String | "" | PlaceOS API Credentials
| `password` | String | "" | 
| `client_id`| String | "" | 
| `redirect_uri` | String | "" | 

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
```









### `staff_details`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| email |  true  | String |  |    |

#### Response Schema
```
```

#### Example Responses
##### 1. If successful:
```
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
##### 1. If successful:
```
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
##### 1. If successful:
```
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
##### 1. If successful:
```
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
##### 1. If successful:
```
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
##### 1. If successful:
```
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
##### 1. If successful:
```
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
##### 1. If successful:
```
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

### `metadata_children`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| id |  true  | String |  |    |
| key |  false  | String | nil | |


### `write_metadata`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| id |  true  | String |  |    |
| key |  true  | String | null | |
| payload |  true  |  |  | |
| description |  false  | String | "" | |


### `merge_metadata`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| id |  true  | String |  |    |
| key |  true  | String | null | |
| payload |  true  |  |  | |
| description |  false  | String | "" | |

### `zone`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| zone_id |  true  | String | null |    |

### `zones`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| q |  false  | String | nil |    |
| limit |  false  | Int32 | 1000 |    |
| offset |  false  | Int32 | 0 |    |
| parent |  false  | String | nil |    |
| tags |  false  | String | nil |    |



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


### `reject`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| booking_id |  true  | String |  |    |
| utm_source |  false  | String | nil |    |

### `approve`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| booking_id |  true  | String |  |    |

### `booking_state`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| booking_id |  true  | String |  |    |
| state |  true  | String |  |    |


### `booking_check_in`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| booking_id |  true  | String |  |    |
| state |  false  | Boolean | true |    |
| utm_source |  false  | String | nil |    |


### `booking_delete`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| booking_id |  true  | String |  |    |
| utm_source |  false  | String | nil |    |


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



### `get_booking`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| booking_id |  true  | String |  |    |

### `signal`
### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| channel |  true  | String |  |    |
| payload |  false  |  | nil |    |
