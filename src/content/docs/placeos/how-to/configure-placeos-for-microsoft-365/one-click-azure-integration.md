---
title: One-Click Azure Integration
description: >-
  Set up Microsoft 365 user authentication and room calendar access for a domain automatically, from a single admin consent screen.
sidebar:
  order: 0
---

# One-Click Azure Integration

Connecting PlaceOS to Microsoft 365 normally involves creating two Azure App Registrations by hand, assigning them Graph API permissions and copying the ids and secrets into PlaceOS. The one-click integration performs these steps automatically. A PlaceOS administrator starts the flow from Backoffice and a Microsoft administrator approves a single consent screen, then PlaceOS registers the applications and configures the domain itself.

This one-click process automates the same process as the [manual configuration steps](/placeos/how-to/configure-placeos-for-microsoft-365/user-authentication/create-a-placeos-authentication-source).

## Prerequisites

* The domain has been [added to PlaceOS](/placeos/how-to/backoffice/add-domain)
* PlaceOS Backoffice Administrator Access
* A Microsoft account able to grant tenant-wide admin consent for your directory (for example, a Global Administrator)
* The deployment has been configured for one-click integration (see below)

### Deployment Configuration

The flow is driven by a multi-tenant "management" App Registration belonging to the operator of the PlaceOS deployment. The rest-api service must be given its details via environment variables:

* `PLACE_APP_TENANT_ID`
* `PLACE_APP_CLIENT_ID`
* `PLACE_APP_CLIENT_SECRET`

The management app needs admin-consented Application permissions `Application.ReadWrite.All`, `AppRoleAssignment.ReadWrite.All`, `DelegatedPermissionGrant.ReadWrite.All` and `Directory.ReadWrite.All`, and a Web platform section (the flow adds its own callback URL to the app's redirect URIs). These variables are not set by default; without them, starting the integration fails with the `Failed to start Azure integration` error.

## Procedure

1. Login to PlaceOS Backoffice
2. Navigate to Domains and select the domain to integrate
3. Open the three-dot menu at the top of the domain page and select `Integrate Azure`
   <!-- TODO: Add screenshot of the domain three-dot menu -->
4. A new tab opens with the Microsoft admin consent screen. Sign in with your Microsoft administrator account, review the requested permissions and click Accept
5. The tab now shows a progress page titled "Setting up your Microsoft integration", stepping through:
   1. Register the Bookings Visualiser application
   2. Connect room calendar access
   3. Register the User Authentication application
   4. Configure the Outlook add-in
   5. Save the authentication configuration
6. Leave the tab open. A run typically takes a minute or two, and "Waiting for Microsoft to replicate" messages are normal: newly registered applications can take a while to replicate through the Microsoft directory
7. When the flow completes, the tab returns to the domain's Authentication tab, where the new `Microsoft AD` authentication source is listed

Users on the domain will now sign in with Microsoft.

:::caution
The final step points the domain's Login URL at the new authentication source, which changes how every user on that domain signs in. A failed or abandoned run leaves the existing login configuration untouched.
:::

## Created Resources

In your Azure tenant:

* `PlaceOS Bookings Visualiser`: a single-tenant App Registration with Application permissions `Calendars.ReadWrite`, `Group.Read.All`, `User.Read.All` and `Place.Read.All`, used to read and manage room resource calendars without a signed-in user
* `PlaceOS User Authentication`: a single-tenant App Registration with Delegated permissions `Calendars.ReadWrite`, `Calendars.ReadWrite.Shared`, `Group.Read.All`, `User.Read.All`, `offline_access`, `openid` and `profile`, used for single sign-on and as the API endpoint for the Outlook add-in
* A client secret and a service principal for each, with consent granted for the whole tenant

In PlaceOS:

* A `Microsoft AD` OAuth authentication source on the domain, wired to the User Authentication app
* A Staff API tenant for the domain holding the Bookings Visualiser credentials (encrypted), providing application-level calendar access. If the domain already has a Staff API tenant, it is updated in place and switched to application-level access
* An `Outlook Plugin` repository entry and the tenant's Outlook add-in configuration
* An updated domain Login URL pointing at the new authentication source, and a Logout URL that also signs the user out of Microsoft

The client secrets are created with Microsoft's default expiry (currently around two years). Note the expiry dates in the Azure portal, PlaceOS will not warn you before they expire.

For the purpose of the Microsoft Graph permissions PlaceOS uses, see the [Microsoft Azure Permissions Table](/placeos/reference/microsoft-azure-permissions).

## Remaining Manual Steps

* The Bookings Visualiser app can read and write every calendar in the tenant (user and room mailboxes alike) until it is restricted with an [Exchange calendar group](/placeos/how-to/configure-placeos-for-microsoft-365/calendar-access/exchange-calendar-group) and an [application access policy](/placeos/how-to/configure-placeos-for-microsoft-365/calendar-access/limit-application-permissions). This Exchange-side configuration is still manual
* Calendar and Bookings driver modules are not added to any system. See [Configure PlaceOS Calendar Driver](/placeos/how-to/configure-placeos-for-microsoft-365/calendar-access/configure-placeos-calendar-driver)

## Failures and Retries

* If a step fails, the progress page shows the error and stops. Nothing is rolled back: applications already registered in Azure remain, and an incomplete `Microsoft AD` authentication source may be left on the domain
* If the domain already had a Staff API tenant, it is switched to the new application-level credentials early in the run. A run that fails later leaves it converted, and delegated access can be re-enabled in Backoffice if needed
* To try again, start the flow from Backoffice again. Each run registers a fresh pair of App Registrations and a fresh authentication source, so remove leftovers from a failed run in the Azure portal and the domain's Authentication tab
* The consent link is single-use and expires after 15 minutes. Revisiting the callback URL (for example, through a restored browser session) shows `Invalid state value returned in admin consent`. Start a new flow from Backoffice instead
* Declining the consent screen returns to Backoffice without making any changes
* Closing the progress tab does not stop the setup, the work continues on the server
