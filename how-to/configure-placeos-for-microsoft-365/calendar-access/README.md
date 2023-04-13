---
description: >-
  The following steps show how to set up an Azure App Registration to allow 
  PlaceOS to read Exchange Online Room Resource Calendars
---

# Step 1: Room Calendar Access

The PlaceOS Application requires access to read the booking state of room resources within the Microsoft 365 domain.&#x20;

This is achieved by creating a [Microsoft App Registration](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app) with [Application Permissions](https://learn.microsoft.com/en-us/graph/auth/auth-concepts#access-scenarios), configuration of an Exchange Group for Room Resources and applying an Application Restriction Policy to the Exchange Group.

Complete the following steps to correctly configure calendar access.&#x20;

The steps should be completed in the following order:

{% hint style="info" %}
The steps in the following pages may need to be performed by different platform administrators in your organisation, so be sure to capture the required information to be passed between each step.
{% endhint %}

1. [**Azure App Registration:**](azure-app-registration.md) Create the Azure App Registration PlaceOS will use to authenticate with the MS Graph API.
2. [**Exchange Calendar Group:**](exchange-calendar-group.md) Create an exchange calendar group to provide PlaceOS Access with only the required room resource calendars.
3. [**Limit Application Permissions:** ](limit-application-permissions.md)Apply an application permission to the Exchange Calendar Group.
4. [**Configure PlaceOS Calendar Driver:**](configure-placeos-calendar-driver.md) Apply the required configuration in PlaceOS to allow the platform to connect and read your calendar resources.

PlaceOS has made the decision to implement our resource calendar visualisation in this method to heavily restrict the application access to organisation calendars.&#x20;

This method creates a strict separation of concerns between user authentication and access to PlaceOS and the PlaceOS Room Booking Functions, you can think of this as the PlaceOS Daemon.

Using the documented method will prevent the application from reading all calendars in your domain, such as the CEO's calendar and ensure scope is enforced to only provide access to those room resource calendars required for the correct function of PlaceOS.
