---
description: Cisco Meraki wireless device tracking and camera sensors
---

# Configuring Meraki

Before going further, see the guide on configuring [desk bookings](../desk-booking.md) and follow all steps.\
This document covers

* Client Prerequisites
* Dashboard API configuration
* Scanning API configuration
* Client Integration
* Setup PlaceOS Location Services

### Client Prerequisites

1. Upload and [GEOALIGN the floor plans with google maps](https://documentation.meraki.com/General\_Administration/Monitoring\_and\_Reporting/Using\_a\_Floor\_Plan\_or\_Custom\_Map\_in\_Dashboard). The floor plans in use must be to scale.\
   It is recommended to use PlaceOS Maps as the floor plans for accurate presentation in client applications.
2. [Position the WAPS on that floor plan](https://documentation.meraki.com/General\_Administration/Monitoring\_and\_Reporting/Placing\_Devices\_on\_the\_Map\_in\_Dashboard) as accurately as possible based on their physical positions

### Dashboard API configuration

Add the `Cisco Meraki Dashboard` module to the location services system.\
Add the following settings to the module

```yaml
meraki_api_key:   "configure for the dashboard API, Client to provide"

meraki_validator: "configure if scanning API is enabled, Integrator to define"
meraki_secret:    "configure if scanning API is enabled, Client to provide"

```

NOTE: we'll update the values here once the client has configured Meraki.

### Scanning API configuration

Scanning API uses to Webhooks to pass information to PlaceOS so we'll need to configure a webhook endpoint for the Dashboard module.

On the triggers tab, add a new trigger for handling the webhook.

1. Enable webhook functionality
2. Select GET and POST methods

![Webhook trigger](<../../../.gitbook/assets/image (4) (1) (1) (2).png>)

Add the trigger to your location services system

![Adding webhook trigger](<../../../.gitbook/assets/image (7) (1) (1) (1).png>)

Once added, edit the webhook to enable tunnelling the data directly to the module

![Enable action execution](<../../../.gitbook/assets/image (8) (1) (1) (1).png>)

Click `Save` and copy the webhook link ![](<../../../.gitbook/assets/image (5) (1) (1) (1) (1).png>)

The link will look something like:

* https://poc.placeos.com/api/engine/v2/webhook/trig-DHgk0FU1\~p/notify?secret=kfwu5WYc3a1suZ
* Modify the link by adding the following parameters\
  `&exec=true&mod=Dashboard&method=scanning_api`
* So the webhook URL you will provide to the Meraki Dashboard would look something like\
  https://poc.placeos.com/api/engine/v2/webhook/trig-DHgk0FU1\~p/notify?secret=kfwu5WYc3a1suZ\&exec=true\&mod=Dashboard\&method=scanning\_api

### Client Integration

Clients will need to perform the following steps for PlaceOS integration

1. **Client** to generate a [Meraki Dashboard API Key](https://documentation.meraki.com/General\_Administration/Other\_Topics/Cisco\_Meraki\_Dashboard\_API) for the PlaceOS driver to use, read only permissions
   * We use Version 1 of the API
2. Integrator to enter the API key into the Dashboard module settings
3. **Client** to enable the [Meraki Location Services Scanning API](https://developer.cisco.com/meraki/scanning-api/#!enable-scanning-api)
   * Integrator to provide the webhook URL generated above
   * Integrator to provide the validator code, this can be anything, like `correcthorsebatterystaple`
   * Use Version 3 of the API
4. **Client** to provide the Scanning API secret
5. Integrator to enter the secret into the Dashboard module settings

### Setup PlaceOS Location Services

Add the `Meraki Location Service` module to the location services system

The following system level settings are important:

* default\_network\_id - the Meraki network we are interested, typically one per-building
* floorplan\_mappings - we need to map Meraki floorplan IDs to PlaceOS IDs

To collect this information you can execute the following functions in backoffice:

* ![](<../../../.gitbook/assets/image (6) (1) (1) (1).png>) Make note of the organisations ID
* <img src="../../../.gitbook/assets/image (3) (1).png" alt="" data-size="original"> make note of the network ID from the list

Configure the network ID in the location services system

```yaml
default_network_id: "N_627126248111343"
```

Obtain the list of floorplans for that network

![](<../../../.gitbook/assets/image (9) (1) (1) (1) (1) (1).png>) Copy the result into a text editor

Then for each floor plan find the matching PlaceOS building and level zone IDs and add the following setting

```yaml
floorplan_mappings:
  # Meraki Floorplan ID -> PlaceOS IDs
  g_62712624811134:
    building: zone-HlczU_ONm2E
    level: zone-HlczK4a7UVR
    level_name: BUILDING - L1
  N_627126248111343:
    building: zone-HlczU_ONm2E
    level: zone-HDvg9XMV0Jr
    
    # level_name is here for readability, not used.
    level_name: BUILDING - L2
```

At this point Meraki device location data will start appearing in the AreaManagement module.
