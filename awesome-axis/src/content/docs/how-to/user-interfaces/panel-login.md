---
title: Configure Endpoint Auto Login
sidebar_position: 2
description: Allow automatic or unatteded authentication for PlaceOS Frontend Applications
---

# Configure Endpoint Auto Login

PlaceOS requires all interactions to be authenticated and associated with a specific identity. This includes fixed devices such as visitor sign-in kiosks or public information displays. Endpoint auto-login can provide persistent sessions for this style of shared device.

{% hint style="success" %}
When PlaceOS uses an external Identity Provider with unattended device login, it should use a standard SSO flow. Auto-login provides an option for devices or environments which may not support this.
{% endhint %}

### Prerequisites

1. Confirm the final UAT and PROD URLs of the web apps
2. Ensure that the **DNS** entries for these URLs are active and forwarding to the server(s)
3. Ensure that the SSL certificates for the above domains are signed and recognized as secure

### Step 1: Create a local user account

1. Login as an admin to Backoffice
2. On the **Users** click **Add new**
3. Enter the required information, including a descriptive username (e.g. `Touchpanel User`)
4. Enter an email address (this does not need to be an active address)
5. No password required

![New User Entry](assets/panel\_login\_new\_user.png)

### Step 2: Create an X-API-Key for panel authentication

Follow the [X-API-Key guide](../authentication/x-api-keys.md), specifying the service account created in the previous step

### Step 3: Construct URL for Applications

Most PlaceOS applications can be passed a the API Key as a query parameter, so a destination URL such as:

/booking-panel/#/?**panel=**sys-F2u1l-oyxJ&**x-api-key=**be2aba8c8bd2be2a5c719339695b5a63.Edm7STXHDbacbsytz4RGvFc51PnBdQtcU9Yo7BSSVHw

Would be [encoded](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/encodeURIComponent) and configured as the continue param:

/auth/login?continue=%2Fbooking-panel%2F%23%2F%3F**panel**%2Fsys-F2u1l-oyxJ%3F**x-api-key**%3Dbe2aba8c8bd2be2a5c719339695b5a63.Edm7STXHDbacbsytz4RGvFc51PnBdQtcU9Yo7BSSVHw

The application will use the API key for authentication and will display a bootstrap page for system selection, unless provided additional params that specify a system.
