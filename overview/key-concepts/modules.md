---
title: Modules
sidebar_position: 3
description: Modules are instances of drivers
---

# Modules

![](<../../.gitbook/assets/Jon's general slide deck.png>)

_Modules_ are instances of [drivers](drivers.md). Each module represents either:

* A specific physical device controlled by PlaceOS,
* A specific digital platform, or
* Logic that controls how a specific set of hardware and software should interact

### Purpose

All modules have two broad functions on the system they control:

1. **State**: status information about the integration or higher level logic they control. Some examples of this kind of data could be:
   * Power status
   * Upcoming booking info
   * Current user
2. **Behavior**: actions which the device, service, or logic can do. Some examples of these actions could be:
   * Power on/off
   * Create/edit booking
   * Post a chat message

### Starting and Stopping Modules

Each module can be individually started or stopped at any time. When started, the driver connects to the physical or digital integration and keeps track of its status. When stopped, the driver disconnects from its integration and will not send or receive any data or commands. For logic modules, this enables / disables its functionality.

### Modules and Systems

Modules must be a part of _at least_ one [system](systems.md), but can be part of more than one system. Each system can use the same module instance everywhere it's required. Examples of modules used this way could be:

* A lighting gateway
* Centrally installed audio-visual equipment
* A common service such as a chatbot integration

#### Logic Modules

Logic modules are different to all other types of Modules (e.g. Device/Service modules) as they do not communicate to external devices/services. They only have access to the other Modules within the same System and co-ordinate actions across then.

As such, Logic Modules are strictly bound to the first System in which they are added, and should not be added to multiple Systems.

#### Settings Inheritance

Logic modules inherit settings from both the Driver from which they are instantiated and the System in which they are added (including the settings that the System has inherited from it's Zones). System settings override Driver settings.

&#x20;   Driver settings > Zone Settings (in the hierarchical order specified by the System) > System Settings > Logic Module Settings

All other Module types only inherit Settings from the Driver from which they are instantiated.

&#x20;   Driver settings > Logic Module Settings
