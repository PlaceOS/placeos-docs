---
title: Enable Sensor UI
description: How to enable the Sensor management UI
---
# Enable Sensor UI

Where sensors are installed, the Sensor Management User Interface provides an interface to plot the sensors on the floor map.

This will enable custom zone capacity and enhanced capacity reporting via the zones.

The Sensor Management User Interface is able to plot the following types of sensors:

## Prerequisites

* Administrator access to your PlaceOS Backoffice
* A Valid Org, Building and Zone Configuration

## Enable the Sensor Extension

The first step is to enable the sensor extension.

1. In PlaceOS Backoffice Navigate to the Admin Tab
2. Under PlaceOS Admin select Extensions\
   [![Admin Extensions](https://github.com/PlaceOS/docs/raw/enable-sensor-ui/how-to/backoffice/assets/admin-extensions.png)](https://github.com/PlaceOS/docs/blob/enable-sensor-ui/how-to/backoffice/assets/admin-extensions.png)
3. Select a Domain and Click `Add Extension`\
   [![Extensions Domain](https://github.com/PlaceOS/docs/raw/enable-sensor-ui/how-to/backoffice/assets/extensions-domain.png)](https://github.com/PlaceOS/docs/blob/enable-sensor-ui/how-to/backoffice/assets/extensions-domain.png)
4. Configure the new extension as below:

* Type: `zones`
* Name: `Sensors`
* URL: `https://editor.place.tech/sensor-map/#/editor/{{map_id}}`

1. Click Add Condition and add the following condition:

* Condition Field: `map_id`
* Operation: `truthy`\
  [![Sensors Config](https://github.com/PlaceOS/docs/raw/enable-sensor-ui/how-to/backoffice/assets/sensors-config.png)](https://github.com/PlaceOS/docs/blob/enable-sensor-ui/how-to/backoffice/assets/sensors-config.png)

1. Click `Add`\
   [![Extension Added](https://github.com/PlaceOS/docs/raw/enable-sensor-ui/how-to/backoffice/assets/extension-added.png)](https://github.com/PlaceOS/docs/blob/enable-sensor-ui/how-to/backoffice/assets/extension-added.png)

The Extension is now enabled.

{% hint style="success" %}
After completing this step you will need to refresh Backoffice to enable the extension.&#x20;
{% endhint %}

## Using The Sensor Manager

Once enabled, you can place sensors on the floor maps of Level Zones.

1. Navigate to Zones and select a zone with a tag of `level`
2. In the options bar you will now see the `Sensors` option\
   [![Sensor Menu](https://github.com/PlaceOS/docs/raw/enable-sensor-ui/how-to/backoffice/assets/zones-sensors.png)](https://github.com/PlaceOS/docs/blob/enable-sensor-ui/how-to/backoffice/assets/zones-sensors.png)
3. Select the `Sensors` tab.\
   [![Sensor View](https://github.com/PlaceOS/docs/raw/enable-sensor-ui/how-to/backoffice/assets/sensor-view.png)](https://github.com/PlaceOS/docs/blob/enable-sensor-ui/how-to/backoffice/assets/sensor-view.png)

You will now be able to select sensors from the list and place them according to their physical location on the map.
