---
title: Location Services
sidebar_position: 1
description: Overview on Location Services Integration on PlaceOS
---

# Location Services

### Location services

Location services are any driver that support the [Locatable Interface](https://github.com/PlaceOS/driver/blob/master/src/placeos-driver/interface/locatable.cr)

The [Location Service](https://github.com/PlaceOS/drivers/blob/master/drivers/place/location\_services.cr) driver collects the responses of locatable modules in the same system and returns this as the result of a location search.

### Response types

The frontend translates the search responses into a pin on a map. These are the supported formats:

#### X,Y Location

Such as a location calculated by a wireless network

```yaml
{
  "location": "wireless",
  "coordinates_from": "bottom-left",
  "x": 27.113065326953013,
  "y": 36.85052447328469,
  "lon": 55.27498749637098,
  "lat": 25.20090608906493,
  "mac": "66e0fd1279ce",
  "variance": 4.5194575835650745,
  "last_seen": 1601555879,
  "building": "zone-EmWLJNm0i~6",
  "level": "zone-Epaq-dE1DaH",
  "map_width": 1234.2,
  "map_height": 123.8,

  # driver can include additional data to help with debugging
  "meraki_floor_id": "g_727894289736675",
  "meraki_floor_name": "BUILDING Name - L2"
}
```

#### Map Feature

Such as a desk

```yaml
{
  "location": "desk",
  # the count of people at the location, desks will typically be 0 or 1
  # however other location types could have more
  "at_location": 1,
  "map_id": "desk-4-1006",
  "level": "zone_1234",
  "building": "zone_1234",

  # if provided can be used to look up user details
  "mac": "66e0fd1279ce",

  # provided if known
  "capacity": 1
}
```

Desks highlight based on **desk** metadata stored against each level zone:

```yaml
[
    {
        "id": "table-07.001.status",
        "name": "Desk 07.001",
        "map_id": "table-07.001.status",
        "bookable": true,
        "features": ["standing"]
    }
    # ...
]
```

Where bookable is false, desks highlight based on sensor data

NOTE:: no metadata is required for **area** locations assuming there is a matching map\_id, in which case the highlighting is based on the used capacity (low, medium or high)

#### Booking

Such as an event in a meeting room

```yaml
[{
  "location": "meeting",
  "mac": "meeting2.city1@resource.org.com",
  "event_id": "meet-1234567",
  "map_id": "map-1234",
  "sys_id": "sys-id",
  "ends_at": 1234567,
  "private": false,
  "level": "zone-GAgFNk8vm67",
  "building": "zone-GAf3dfZq80~"
},

# Or for a desk or car-space booking etc
# where the asset ID is the map id

{
  "location": "booking",
  "checked_in": false,
  "asset_id": "desk-4-1006"
  "booking_id": "booking-4567",
  "building": "zone_1234",
  "level": "zone_1234",
  "ends_at": 1234567,

  "mac": "placeos-user-id",
  "staff_email": "bob@tmart",
  "staff_name": "Bob Jane"
}]
```

### Lockers

Any lockers that are in use on the floor

```yaml
{
  "location": "locker",
  "bank_id": "bank-id",
  "locker_id": "locker-id",
  "allocated": true,
  "building": "zone_1234",
  "level": "zone_1234",

  # if the locker booking expires
  expires_at: 1234567,

  # something we can use to look up the user, might not be available
  "mac": "bank-id-locker-id-etc"
}
```

### Configuring Cisco Meraki

See the [Cisco Meraki Wireless Tracking](../../tutorials/common-configurations/sensor-data-collection/configuring-meraki.md) guide.
