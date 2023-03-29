---
description: >-
  Steps required to configure and integrate the PlaceOS Platform with Microsoft
  365 for user authentication and room booking.
---

# Configure PlaceOS for Microsoft 365

{% hint style="warning" %}
Microsoft Graph **Delegated Permissions** are used for users logged into PlaceOS **web apps** (like the Workplace app).

PlaceOS **Drivers** require Microsoft Graph **Application Permissions**, as there is no user involved in their authentication/usage.

For more information, see: [https://learn.microsoft.com/en-us/graph/auth/auth-concepts#access-scenarios](https://learn.microsoft.com/en-us/graph/auth/auth-concepts#access-scenarios)
{% endhint %}

{% hint style="warning" %}
When using Delegated Permissions some limitations are imposed on the Concierge Application - most notably the ability to edit user calendar bookings is removed. All other functionality such as viewing scheduled meetings and catering is retained, as long as the logged in user has permission to view those calendars.
{% endhint %}

These steps will help Azure Administrators make the necessary configurations for PlaceOS User Authentication via Microsoft Azure Active Directory (Federated Authentication) and PlaceOS Calendar Driver, for PlaceOS Room Booking.

If you only require User Authentication you do not need to complete the Calendar Access steps.

If your PlaceOS will have room booking enabled, you will need to complete the Calendar Access steps.
