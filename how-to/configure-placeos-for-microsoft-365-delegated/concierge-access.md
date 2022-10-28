---
description: >-
  This page covers the steps required to configure access for Concierge Users,
  if required.
---

# Concierge Access

PlaceOS recommends managing your Concierge users directly in 365 or Exchange Administration to allow Concierge users to be added and removed as required by the business.

Once changes are made on 365 or Exchange Admin the changes will be available to the user in real time via the PlaceOS Concierge App.

## Prerequisites

* 365 or Exchange Administrator Access
  * Group Creation
  * Resource Management

## Procedure

### Group Creation

{% hint style="info" %}
To improve security and allow only users who require access to specific rooms, if you have multiple office locations we recommend creating a security group specific to each office.

You can create a single Concierge security group, noting that all members of this group will be able to see all associated room resources.
{% endhint %}

1. Navigate to [365 Admin Centre](https://admin.microsoft.com/)
2. In 365 Admin Centre select the Teams & Groups Blade -> Active teams & groups.\
   ![](<../../.gitbook/assets/image (22).png>)
3. In Active teams & Groups select Add Group.\
   ![](<../../.gitbook/assets/image (19) (1).png>)
4. For Group Type select Mail-enabled Security.\
   ![](<../../.gitbook/assets/image (7) (2).png>)
5. Give your group a relevant name such as PlaceOS Concierge + Office\
   ![](<../../.gitbook/assets/image (26).png>)
6. Nominate a user (typically a tenant administrator as the group owner).\
   ![](<../../.gitbook/assets/image (9) (1).png>)
7. &#x20;In add members, select your Concierge users for that office location.\
   ![](<../../.gitbook/assets/image (8) (2).png>)
8. Nominate a email address for the group.\
   ![](<../../.gitbook/assets/image (24).png>)
9. Click Finish followed by Create Group.

### Delegate Room Resources

1. In 365 Admin Centre select the Resources Blade -> Rooms & Equipment.\
   ![](<../../.gitbook/assets/image (6) (3).png>)
2. Select the room you want to provide concierge access to.
3. Select Edit Exchange Settings.
4. Select mailbox delegation.
5. Under Full Access, add your Concierge Security Group.\
   ![](<../../.gitbook/assets/image (25).png>)
6. Select Save.
7. Repeat these steps for other rooms as required.

You may also apply the Concierge group to a list of rooms via Powershell: [https://learn.microsoft.com/en-us/exchange/recipients-in-exchange-online/manage-resource-mailboxes](https://learn.microsoft.com/en-us/exchange/recipients-in-exchange-online/manage-resource-mailboxes)&#x20;

