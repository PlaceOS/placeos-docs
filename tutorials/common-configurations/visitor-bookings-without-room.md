---
description: >-
  Support visitor invites without booking a room, but still allow assets and
  catering.
---

# Visitor Bookings (without room)

Booking visitors without a specific room may be required in some cases where users require visitors to have access to additional features such as catering and asset booking.

While we can invite general visitors to attend the building using the Visitor Management feature, this does not extend catering and other booking features.

## Create a Room Resource

Like standard room bookings in PlaceOS, we will require a resource calendar to hold our visitor invites.

1. Access your Office 365 Administration Dashboard.
2. Navigate to Resources -> Rooms & Equipment.
3. Create a new room resource, we suggest calling this \<building>visitors so it can be easily identified.
4. If you are using room access permissions, ensure this room is added to your security group: [Limiting Access Permissions](../../how-to/configure-placeos-for-microsoft-365/calendar-access/limit-application-permissions.md)

### Allow Conflicts

To support booking multiple visitors, the room resource needs to allow conflicts. To do this, we will need to modify the `AllowConflicts` parameter via PowerShell.

1. Access your Exchange Online instance using PowerShell.
2. Use the `GetCalendarProcessing` command with the `fl` flag to list all the resource configuration e.g. `Get-CalendarProcessing –Identity sydneyvisitors@0cbfs.onmicrosoft.com | fl`
3. Look for the `AllowConflicts` parameter, this should be set to `False`.\
   ![](<../../.gitbook/assets/image (35).png>)
4. Use the `Set-CalendarProcessing` command to change the `AllowConflicts` parameter to be `True` e.g. `Set-CalendarProcessing sydneyvisitors@0cbfs.onmicrosoft.com -AllowConflicts $True`
5. Using the `Get-CalendarProcessing` command again, we can check to see the `AllowConflicts` paramter is now set to `True`\
   ![](<../../.gitbook/assets/image (36).png>)

## Create the Room in PlaceOS

To make the resource available, we need to add the new room resource as a system to PlaceOS so users can book the resource.

The new system should be in the relevant ORG, BUILDING and LEVEL Zones and contain the Calendar and Bookings modules.

## Configure Workplace App

Once the system is created, we need to tell Workplace App which system to use for room bookings where no room is selected.

1. Navigate to the appropriate Zone Metadata (typically the ORG Zone).
2. Locate `workplace_app` metadata.
3. Under the `events` property, add `no_space_resource` and provide it the System ID of the system created in the previous step, e.g. `"no_space_resource": "sys-GfcVon~oyd"`

