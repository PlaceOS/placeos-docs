---
title: Settings
sidebar_position: 6
description: Settings can be configured at any level
---

# Settings

_Settings_ are the configuration information that define how a deployment should behave. Any level can have defined settings, which are ultimately consumed by [modules](modules.md). [Zones](zones.md), [systems](systems.md), [drivers](drivers.md) or [modules](modules.md) can have settings defined on them. Together, these create a system configuration that is easier to manage at scale.

Examples of some common uses for settings are:

* Available video inputs/outputs
* Source names
* DSP block IDs
* Lighting control IDs
* Device authorization information
* Desk / room auto-release timeouts

Within driver files are definitions for naming conventions and expected values for the settings. They will vary based on each deployment, but the general structure will always be similar.

### JSON definitions

Settings are expressed as [JSON data](https://en.wikipedia.org/wiki/JSON#JSON\_sample), that is, key-value pairs:

```javascript
{
  "key": "value",
  "foo": [1, 2, 3],
  "bar": true 
  "baz": { 
    "qux": 1.234
  }
}
```

{% hint style="info" %}
JSON is a common data-interchange format designed to be readable for humans, and for machines to parse and generate. If it's a new concept, you can [learn more here](https://learnxinyminutes.com/docs/json/)
{% endhint %}

### Settings inheritance

Different layers define settings which then combine to produce the final configuration. This simplifies large deployments, standardizes systems and reduces management overhead.

Systems inherit all the settings from each zone that they are in. Zones pass down their settings to all systems within them. Similarly, Modules inherit all the settings from the driver that they instantiate.

Only Systems and Modules inherit Settings

#### Systems

Systems inherit settings from their Zones, in the order specified on their Zones tab (highest priority at top).

&#x20;   Zone Settings (in the hierarchical order specified by the System) > System Settings

#### Modules

**Logic modules** inherit settings from both the Driver from which they are instantiated and the System in which they are added (including the settings that the System has inherited from it's Zones). System settings override Driver settings.

&#x20;   Driver settings > Zone Settings (in the hierarchical order specified by the System) > System Settings > Logic Module Settings

All **other Module types** (e.g. Device, Service) only inherit Settings from the Driver from which they are instantiated.

&#x20;   Driver settings > Logic Module Settings

### Specific Overrules General

Settings inherited from a zone or driver combine with any settings defined directly on the system or module. If an inherited setting has the same key as one defined directly, the latter will override the inherited one. This lets you write general settings at a higher common level, with more specific ones on each lower tier.
