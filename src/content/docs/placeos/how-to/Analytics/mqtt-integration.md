---
title: MQTT Integration
description: Guide on integrating PlaceOS with MQTT messaging
---

# MQTT Integration

![](https://mermaid.ink/img/eyJjb2RlIjoiZmxvd2NoYXJ0IFREXG4gICAgY3MoKENsb3VkIFNlcnZpY2VzKSkgPC0tPiBvXG4gICAgbXFbTVFUVCBQcm92aWRlcnNdIC0tIEFsbCBldmVudHMgJiBtZXRhZGF0YSBwdXNoZWQgdG8gYnJva2VyIGZvciBhbmFseXNpcyAtLT4gbVxuICAgIGwtLT5vcGRcblxuXG4gICAgc3ViZ3JhcGggSW50ZXJuZXQgR2F0ZXdheVxuICAgICAgICBjc1xuICAgICAgICBtcVxuICAgIGVuZFxuXG4gICAgc3ViZ3JhcGggVmlydHVhbCBQcml2YXRlIENsb3VkXG4gICAgICAgIG9bT3V0bG9vazM2NV1vLS1vTFxuICAgICAgICBtW01RVFQgc2VydmljZV1cbiAgICAgICAgbWVbTWVyYWtpXVxuICAgICAgICBsW0xvY2tlcnNdXG4gICAgICAgIEx7TG9naWN9IFxuICAgICAgICBMIG8tLW8gbWVcbiAgICAgICAgTCBvLS1vIGxcbiAgICAgICAgcFtQbGFjZU9TXSBvLS1vIExcbiAgICAgICAgbSBvLS1vIHBcbiAgICAgICAgcCBvLS1vIHJcbiAgICAgICAgcltSRVNULUFQSV1cbiAgICBlbmRcblxuICAgIG9wZFtPbi1QcmVtIERldmljZXNdICAgICIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)

PlaceOS supports publishing module state information via MQTT. This provides environment information to external systems such as [Amazon MQTT Service](https://docs.aws.amazon.com/iot/latest/developerguide/view-mqtt-messages.html)

MQTT messages consist of a _header_ and a _payload_ and typically have low bandwidth usage. The header declares the topic of the message, and the payload carries data as key-value pairs. PlaceOS uses two types of message sent over MQTT: State Changes and Metadata.

### State Change

Changes to module state propagate in real time. All change messages share the following topic structure:

```text
placeos/<org>/state/<bld>/<lvl>/<area>/<sys>/<drv>/<mod>/<idx>/<state>
```

In this structure, each section is a unique identifying tag to represent part of the system.

* `<org>`: Organization ID
* `<bld>`: [Building](../../overview/key-concepts/zones.md) ID
* `<lvl>`: [Level](../../overview/key-concepts/zones.md) ID
* `<area>`: [Area](../../overview/key-concepts/zones.md) ID
* `<sys>`: [System](../../overview/key-concepts/systems.md) ID
* `<drv>`: [Driver](../../overview/key-concepts/drivers.md) ID
* `<mod>`: [Module](../../overview/key-concepts/modules.md) ID
* `<idx>`: Module Index
* `<state>`: State Key

On a state change, the module will publish a message with the payload containing the new state value as a JSON entity. The associated driver defines the structure and frequency of this state change.

Some systems may not have a building, level, or area. If they generate a state change, the missing topic level will be an underscore character (`_`).

#### State Change Payload

The _payload_ is the value of the status variable paired with a timestamp

```json
{
  "time": unix_integer_milliseconds,
  "value": "payload is a serialized json string"
}
```

### Metadata

Metadata is available for _building_, _level_, _area_, _system_ and _driver_ tiers. The format is this persistent topic:

```text
placeos/<org>/metadata/<id>
```

#### Metadata Payloads

Metadata payloads are JSON objects that contain model info for the publishing entity. This includes the human-readable "friendly name", e.g.

```json
{
  "name": "Cisco VC"
}
```

```json
{
  "name": "Level 24"
}
```

### Wildcard Subscriptions

Wildcards can replace any topic level to catch state information across different services. Some common examples are:

All events within a building:

```text
placeos/<org>/state/<bld>/# 
```

Connected status of all devices:

```text
placeos/<org>/state/+/+/+/+/+/+/+/connected 
```

Power status for all displays:

```text
placeos/<org>/state/+/+/+/+/+/Display/+/power
```

Call status information for Cisco VC endpoints (`dep-123` is the driver ID for Cisco VC):

```text
placeos/<org>/state/+/+/+/+/dep-123/+/+/call_status
```

### Privacy

Some deployment requirements may include filtering of sensitive information. The system parses state changes for content such as email addresses or user IDs before they propagate. A match can lead to actions such as:

* Replacing the value with a hashed version of itself
* Masking the value
* Dropping the associated event

### Cloud Brokers

PlaceOS can integrate with MQTT Brokers including the major service providers listed below.

![MQTT brokers' logos](../assets/mqtt-brokers-logos.png)

* [Cloud MQTT](https://www.cloudmqtt.com/)
* [Google Cloud](https://cloud.google.com/iot/docs/how-tos/mqtt-bridge)
* [MyQTTHub](https://myqtthub.com/en)
* [Heroku CloudMQTT](https://elements.heroku.com/addons/cloudmqtt)
* [HiveMQ](https://www.hivemq.com/)
* [Azure](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-mqtt-support)
* [AWS](https://docs.aws.amazon.com/iot/latest/developerguide/view-mqtt-messages.html)

\*\[MQTT]: Message Queuing Telemetry Transport\
\*\[VC]: Video Conferencing

### Websocket MQTT API

PlaceOS provides an out of the box MQTT solution via the API, delivered over websockets using standard JWTs or X-API-keys for authentication.

Secure WSS available at the route `/api/mqtt/` it expects the following MQTT authentication message details:

* Username: **users JWT token or X-API-Key**
* Password: **users JWT token or X-API-Key**

Example: MQTT Websocket Client ([hivemq.com](http://www.hivemq.com/demos/websocket-client/))

Regular users have read and subscribe permissions.

### MQTT Clients

We've found the following clients useful

* JS: [https://github.com/mqttjs/MQTT.js](https://github.com/mqttjs/MQTT.js)
* Explorer: [https://mqtt-explorer.com/](https://mqtt-explorer.com/)

Example configuration for explorer

<!-- TODO: Add MQTT Client Configuration screenshot -->
