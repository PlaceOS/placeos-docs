---
title: "Concierge Access"
description: >-
  This page covers the steps required to configure access for Concierge Users,
  if required.
---

# Allowing Concierge App Users to view/manage Room Calendar schedules

The PlaceOS Concierge App includes a bird's eye view of Meeting Room Calendars. The level of event detail that users of the Concierge app will see within the Concierge app depends on their user's permissions on each room's calendar within Exchange Online, and will match what the user sees when viewing the room calendar in Outlook. This permission is managed by your organizations Exchange Online or Azure Administrator.

PlaceOS recommends:
1. Adding all Concierge App users to one or more Entra Security Groups, to simplify the management of their permissions on room calendars. For , let's add all the users who will use the Concierge app to an Entra security group called "PlaceOS Concierge Users". 
    * If your organization has multiple buildings then you may want to create a separate Group for each building, where each Group has permissions to view the full details of that building's meeting room calendars.
2. Setting each Room Calendar's permissions to allow the above mentioned Group(s) to  VIEW full event details and Accept/Decline events on behalf of the room. The Exchange configuration for this will be explained below.
    * Allowing the Concierge Group to EDIT events in the room calendars may be ideal when events are created with the room as the event Organizer, but typically the event organizer is a normal Outlook user and the room is just an invited attendee. In that scenario, editing the room's copy of the event will result in the organizer's copy of the event to no longer match the room's copy of the event, which may lead to confusion.

Your organization's Exchange Online or Azure administrator will be able to determine the desired level of meeting room calendar permissions for your concierge app users, and then perform the steps below to set those permissions enabling concierge app users greater visibility over room calendar event details (e.g. see Title and Organizer) than a typical Outlook user (who may only see anonymous free/busy slots).

## 1. Creating a "PlaceOS Concierge Users" Entra Security Group

1. An Azure admin should navigate to the [Microsoft 365 Admin Centre: https://admin.microsoft.com/](https://admin.microsoft.com/)
2. In 365 Admin Centre select the Teams & Groups Blade -> Active teams & groups.
   <!-- TODO: Add screenshot -  -->
3. In Active teams & Groups select Add Group.
   <!-- TODO: Add screenshot -  -->
4. For Group Type select Mail-enabled Security.
   <!-- TODO: Add screenshot -  -->
5. Give your group a relevant name such as "PlaceOS Concierge Users"
   <!-- TODO: Add screenshot -  -->
6. Nominate a user (typically a tenant administrator) as the group owner
   <!-- TODO: Add screenshot -  -->
7. In add members, select your Concierge users for that office location
   <!-- TODO: Add screenshot -  -->
8. Nominate an address for the group.
   <!-- TODO: Add screenshot -  -->
9. Click Finish, followed by Create Group.

## 2. Allowing the Group to view/edit meeting room Event details

#### Option A: Giving the group permissions to VIEW meeting room Events

##### Part 1:
1. An Outlook user who is an administrator of the Room Mailbox/Calendar (e.g. an Exchange Online Admin) should navigate to the Calendar view of Outlook (or Outlook Online)
2. Add the Room calendar to your list of calendars by selecting Add Calendar > Add from Directory and searching for the target Room.
3. Once the Room Calendar is added and appears in the list of calendars on the left sidebar, right click the room calendar and click "Sharing and Permissions". If this option is not listed in the right-click menu, then your Outlook user is not an administrator of the room, so cannot change its permissions.
4. In the "Sharing and permissions" window, search for the Concierge Group and click "Share", then set permission level of that Group to __"Can view all details"__

##### Part 2:
1. An Exchange online admin can use the Exchange Online Admin Centre, navigate to Resources: https://admin.exchange.microsoft.com/#/resources
   <!-- TODO: Add screenshot -  -->
2. Select the room you want to provide Concierge access to
3. Select the "Delegation" tab for that room
4. Under __"Send As"__ add your Concierge Security Group. This will allow Concierge users to make the room mailbox Accept or Decline event invitations from Organizers
   <!-- TODO: Add screenshot -  -->
6. Select Save
7. Repeat these steps for other rooms as required

#### Option B: Giving the group permissions to EDIT meeting room Events

1. An Exchange online admin can use the Exchange Online Admin Centre, navigate to Resources: https://admin.exchange.microsoft.com/#/resources
   <!-- TODO: Add screenshot -  -->
2. Select the room you want to provide concierge access to
3. Select the "Delegation" tab for that room
5. Under __"Read and manage (Full Access)"__ add your Concierge Security Group
   <!-- TODO: Add screenshot -  -->
6. Select Save
7. Repeat these steps for other rooms as required

Alternatively, your Exchange Online admin could user Powershell to apply the Concierge group's permissions to a list of rooms: [https://learn.microsoft.com/en-us/exchange/recipients-in-exchange-online/manage-resource-mailboxes](https://learn.microsoft.com/en-us/exchange/recipients-in-exchange-online/manage-resource-mailboxes)

