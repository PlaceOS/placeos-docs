---
title: Zones
sidebar_position: 5
description: Zones are collections of systems
---

# Zones

<!-- TODO: Replace with appropriate diagram showing zone architecture -->

_Zones_ are collections of [systems](systems.md). A system can have tags marking it as a member of any number of zones.

### Purpose

They serve two main purposes:

1. Logical groupings of systems with common traits, generally:
   * Those in the same physical space, but at a larger scale than systems. For example, if each system is a room then the building would be a zone
   * Systems of the same general concept. For example if you have customer-facing systems zoned separately to internal systems
2. A point to define [settings](settings.md) that need to affect a set of systems in the same way

### Settings Inheritance

Zones do not inherit settings from the Parent zones.

### Guides

* [Add Zone Structure to Backoffice](../../tutorials/backoffice/add-zone-structure.md)
