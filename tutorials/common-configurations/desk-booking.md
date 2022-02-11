---
description: A guide to configuring our standard desk booking system
---

# Desk booking

This guide will cover the following steps

1. configuring zones, building and levels
2. configuring the application, domain and application settings
3. configuring a service account for backend queries
4. configuring a tenant for Staff API access
5. configuring location services: StaffAPI, AreaManagement, LocationServices, DeskBookings

### Configuring Zones

A typical zone structure is organisation -> building -> level\
A location services system should be are configured for each building.

![](<../../.gitbook/assets/image (2) (1) (1).png>)\
Create a building zone with a `building` tag

![](<../../.gitbook/assets/image (3) (1) (1).png>)\
Create level zones with the `level` tag and the appropriate parent zones. The structure is important.

#### Level zone metadata

For each level desk metadata should be configured\
![](<../../.gitbook/assets/image (1).png>)

```yaml
[
    {
        # id tag on the SVG maps
        "id": "table-09.B901",

        # friendly name of the desks
        "name": "B901",

        # should the desk appear in booking search results
        # non-bookable desks might have a sensor associated with them
        "bookable": true,

        # features that can be searched for
        "features": ["sit_to_stand", "dual_monitor"]
    },
    {
        "id": "table-09.B902",
        "name": "B902",
        "bookable": true,
        "features": []
    }
]
```

### Configuring the Application

API access is scoped and configured via applications on the domain.\
To complete the configuration you'll need the following datapoints

* Client ID: `5217b4fd2f06` (example)
* Redirect URI: [https://poc.placeos.com/workplace/oauth-resp.html](https://poc.placeos.com/workplace/oauth-resp.html)

![](<../../.gitbook/assets/image (6) (1) (1) (1).png>)

### Configuring a service account

This will be the account that is used to query Staff API (support for API Keys is coming soon)\
The account needs to be configured on the same domain as the redirect URI above and you'll need to make note of:

* username: `service-account@placeos.com` (make up an email address it is unimportant)
* password: `yoursecurepassword`

### Configuring a Staff API tenant

Staff API needs to be configured for each domain that intends to use it.\
It provides the Google or Office365 / MS Graph API configuration required for an organisation, however this is not a requirement for pure desk booking and dummy config can be provided.

![](<../../.gitbook/assets/image (4) (1) (1).png>)

Add a tenant for the required domain, if dummy data is going to be used - configure for Office365

### Configure location services

A location services System should be created for each building.\
Add the following PlaceOS modules to that System for Desk Bookings

* StaffAPI (one instance per-domain, can be shared between buildings)
* AreaManagement
* LocationServices
* DeskBookings

#### Add settings to StaffAPI module

click the staff API module to configure the following settings, values collected earlier

```yaml
username: service-account@placeos.com
password: yoursecurepassword
client_id: 5217b4fd2f06
redirect_uri: 'https://poc.placeos.com/workplace/oauth-resp.html'

```

#### Add settings to the location services system

AreaManagement and DeskBookings can be configured at the system level (recommended or clarity)

```yaml
# The LocationServices module is a proxy that collects data from other
# location service modules in the same system. If there is only desk
# bookings being configured, you could change this to DeskBookings
location_service: LocationServices

# The buildings zone ID
building: zone-DGUP0QI0gX

# How often we want to update location data
# NOTE:: the DeskBookings module will signal when updates occur so
# polling is not critical here and updates will be near realtime
poll_rate: 15

# These are the zones we want to query for desk bookings
# easy to filter by building, however you can also add
# multiple level zones if excluding one is desirable
zone_filter:
  - zone-DGUP0QI0gX

# The booking type for the DeskBookings module
# typically not required to be defined however could be changed to
# `parking` if you were tracking car parking spaces etc
booking_type: desk
```

Once the modules are started you should find the list of desk IDs and any bookings now appear in AreaManagement if you view the state

![](<../../.gitbook/assets/image (1) (1).png>)
