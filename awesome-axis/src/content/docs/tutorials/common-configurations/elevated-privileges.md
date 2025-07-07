---
title: Elevated Privileges
description: >-
  Some users require additional permissions to manage rooms and assets, such as
  concierge users.
---

# Elevated Privileges

These are the resources that users can access as privileges are raised

<table><thead><tr><th width="160">Resource</th><th width="154">Standard User</th><th width="218">Manager</th><th>Administrator</th></tr></thead><tbody><tr><td>Assets</td><td>View</td><td>Create, Update, Delete</td><td>Create, Update, Delete</td></tr><tr><td>Metadata</td><td>View</td><td>Create, Update</td><td>Create, Update, Delete</td></tr><tr><td>Zones</td><td>View</td><td>Create, Update</td><td>Create, Update, Delete</td></tr><tr><td>Systems</td><td>View</td><td>Create, Update</td><td>Create, Update, Delete, Add / Remove Module</td></tr><tr><td>Modules</td><td>None</td><td>None</td><td>Create, Update, Delete, Start, Stop (logic only) and View all types</td></tr><tr><td>Settings</td><td>None</td><td>View</td><td>Create, Update</td></tr></tbody></table>

This allows a sufficiently privileged individual to perform tasks such as:

* Creating new systems
  * Add existing Calendar and Staff API modules
  * Create a new Booking, Auto Check-in drivers and start them
  * Configure any custom settings (such as sensor id for the room)
* Modify metadata in zones
  * Adding or removing bookable desks
  * Changing owner of parking spaces
  * etc

### Configuring Permissions

Typically this would be managed via the concierge application. This is a description of the JSON that application generates.

* User groups are used to apply permissions
* User groups can be applied at logon via SSO

#### Enabling Permission Elevation

This must be done on a per-domain basis. Specify a root zone for the domain, permissions will only apply to Systems and Zones that are associated with this zone.

<!-- TODO: Add image showing domain permission configuration -->

#### Defining permissions

In the `org` zone defined in the domain config, create a metadata entry called `permissions`&#x20;

```yaml
{
  # if someone is in group1, group3 and group4 they won't have any permissions
  # deny always takes precedence
  "deny": ["group1"],
  "manage": ["group2", "group3"],
  "admin": ["group4"]
}
```

You only need to define the keys that you're using.

* Permissions can be defined at multiple levels in the zone hierarchy
  * i.e. you can provide global permissions to a group then deny that group from modifying certain zones.
  * Or provide allow manage permissions globally and admin in certain zones
