---
title: Systems
sidebar_position: 4
description: Systems are collections of modules
---

# Systems

<!-- TODO: Replace with appropriate diagram showing system architecture -->

A _system_ is the main logical building blocks within PlaceOS. They contain three components:

* A collection of [modules](modules.md)
* [Settings](settings.md) which will apply to the system and modules in it
* Basic metadata (name, description etc)

### Purpose

Systems often represent physical spaces, such as meeting rooms. They can also represent connected items which run across physical spaces, such as a range of digital signage. Otherwise, they can represent a non-physical system with data inputs and outputs, such as a payment portal.

### Systems and Zones

[Zones](zones.md) are groups of systems which can reflect their physical or conceptual groupings. Systems can belong to zero or more zones.

#### Settings Inheritance

Systems inherit settings from their Zones, in the order specified on their Zones tab (highest priority at top).

&#x20;   Zone Settings (in the hierarchical order specified by the System) > System Settings
