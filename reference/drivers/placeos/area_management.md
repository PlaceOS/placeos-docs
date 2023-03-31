---
title: PlaceOS Area Management
description: Counts trackable objects, such as laptops, in building areas
---

# PlaceOS Area Management Driver
* Type: Logic Driver
* Dependencies: PlaceOS Driver
* Source: https://github.com/PlaceOS/drivers/blob/master/drivers/place/area_management.cr

## Functions

* 
* 
* 


## Settings

| Key | Type | Default value | Description |
| --- | --- | --- | --- |
|`poll_rate`|  | 60 | time in seconds |
|`rounding_precision`|  | 2 | How many decimal places area summaries should be rounded to |
|`duplication_factor`|  | 0.8 |  |
|`location_service`| String | LocationServices |  |
|`include_sensors`| Bool | true |  |
|`areas`|  | 2 |  |
|`units`|  | 2 |  |


## Status Variables

### `variable`
Description
#### Schema/Type
Boolean





### `vaiable`
Description

#### Schema/Type

See also: https://github.com/PlaceOS/
```
[

]
```

#### Examples

##### 1. No events
```
[]
```









## Commands

### `write_sensor_discovery`
Description

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| None |  |  |  |   |

#### Response Schema
```
```

#### Example Responses
##### 1.
```

```



### `sensor_locations`
Description

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| level_id | false | String | nil |  The floor to search for locations of sensors  |

#### Response Schema
```
```

#### Example Responses
##### 1.
```

```





### `request_sensor_data`
Description

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| level_id | false | String | nil |  The floor to receive sensor data from  |

#### Response Schema
```
```

#### Example Responses
##### 1.
```

```







### `request_locations`
Description

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| sensor_data | false | Hash(String, Array(SensorDetail) | nil |   |

#### Response Schema
```
```

#### Example Responses
##### 1.
```
{
    "zone-Cd-1qEb18O": {
        "measurement": "level_summary",
        "desk_count": 116,
        "desk_usage": 0,
        "device_capacity": 0,
        "device_count": 0,
        "estimated_people": 0,
        "percentage_use": 100,
        "recommendation": 0
    },
    "zone-Cd-25eIppQ": {
        "measurement": "level_summary",
        "desk_count": 120,
        "desk_usage": 0,
        "device_capacity": 0,
        "device_count": 0,
        "estimated_people": 0,
        "percentage_use": 100,
        "recommendation": 0
    }
}
```





### `request_level_locations`
Description

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| level_id | false | String | nil |  The floor to receive sensor data from  |
| sensor_data | false | Hash(String, Array(SensorDetail) | nil |   |

#### Response Schema
```
```

#### Example Responses
##### 1.
```
null
```





### `is_inside?`
Description

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| x | true |  | N/A |   |
| y | true |  | N/A |   |
| area_id | true |  | N/A |   |

#### Response Schema
```
```

#### Example Responses
##### 1.
```

```






### `update_available`
Description

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| level_ids |  |  |  |   |

#### Response Schema
```
```

#### Example Responses
##### 1.
```

```







### `synchronize_all_levels`
Description

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| None |  |  |  |   |

#### Response Schema
```
```

#### Example Responses
##### 1.
```

```
