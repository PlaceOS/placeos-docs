---
description: Using location services to collect sensor data
---

# Sensor Data Collection

There are two modes that location services can function in

* Local only\
  All sensor data is coming from platforms with drivers in the current system
* Building search\
  Sensors can exist in any system, as well as locally, and the building is searched for modules implementing the sensor interface

Before going further, see the guide on configuring [desk bookings](../desk-booking.md) and follow all steps, the desk booking driver is optional.

### Local only configuration

Add the sensor platform sources and their location service modules to the location services system.

Some examples include

* [Vergesense API](https://github.com/PlaceOS/drivers/blob/master/drivers/vergesense/vergesense\_api.cr) and corresponding [Vergesense Location Service](https://github.com/PlaceOS/drivers/blob/master/drivers/vergesense/location\_service.cr)
* [BACnet](https://github.com/PlaceOS/drivers/blob/master/drivers/ashrae/bacnet.cr) is a two in one
* [Cisco Meraki Dashboard](https://github.com/PlaceOS/drivers/blob/master/drivers/cisco/meraki/dashboard.cr) and [Meraki Location Services](https://github.com/PlaceOS/drivers/blob/master/drivers/cisco/meraki/meraki\_locations.cr)

### Building search configuration

Where sensors are communicated with directly, not via a 3rd party platform, they will be configured in [PlaceOS Systems](../../../overview/key-concepts/systems.md) that represent their physical location.

To enable building search, add the following setting to the buildings location services system

```yaml
search_building: true
```

The location services driver auto-detects the building it is providing locations for.

### Placing data on a map

#### Generate sensor metadata

Ensure all the sensor data is up-to-date in AreaManagement.

If the sensors have just been configured, perform the following actions in backoffice to ensure sensor meta data is saved (this occurs automatically periodically)

1. select the location services system
2. select the modules tab
3. execute the following commands
   1. AreaManagement\_1 -> synchronize\_all\_levels
   2. AreaManagement\_1 -> write\_sensor\_discovery

![](<../../../.gitbook/assets/image (9) (1) (1).png>)

This saves building level metadata: `sensor-discovered`

#### Place sensor data

Level zones have a `Sensors` tab that allows placement of sensor data on a map

* Data coming from local only configuration is listed when selecting any level
* Data coming from building search will only show on matching levels

![Sensor placement UI](<../../../.gitbook/assets/image (6) (1).png>)

Remember to click save!

![](<../../../.gitbook/assets/image (2) (1).png>)

Sensor locations are stored in level metadata called `sensor-locations`

### Defining map regions

Level zones have a `Sensors` tab that allows drawing of regions on the map.

1. Either select an existing region OR click `New Region`
2. Click and drag the desired area on the map
3. Remember to click save!

Region metadata is stored in `map_regions` - you can edit this for fine tuned adjustment or if you would like to define more complex polygon shapes.

### Backoffice extensions

Both Sensor Placement and Map Regions UIs are backoffice extensions.\
The following will enable the tabs if they are not available

![Backoffice extension UI](<../../../.gitbook/assets/image (3) (1).png>)

#### Sensor placement

* Type: zones
* URL: [`https://editor.place.tech/sensor-map/#/editor/{{map_id}}`](https://editor.place.tech/sensor-map/#/editor/\{{map\_id\}})``
* Add Condition: `map_id` truthy

![](<../../../.gitbook/assets/image (8) (1) (1).png>)

#### Region mapping

* Type: zones
* URL: [`https://editor.place.tech/map-regions/#/editor/{{map_id}}`](https://editor.place.tech/map-regions/#/editor/\{{map\_id\}})``
* Add Condition: `map_id` truthy

![](<../../../.gitbook/assets/image (4) (1).png>)
