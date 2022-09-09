---
description: Create an Authentication Source for a PlaceOS Domain with Azure B2C.
---

# Configure PlaceOS for Azure B2C

To allow users to authenticate on PlaceOS provided applications against Azure B2C, we will need to configure a PlaceOS Domain to use Azure B2C as the Authentication Provider.&#x20;

These steps are similar to configuring OAuth2 for Google Workspace or Azure Active Directory, however, it is important to note the specific endpoints are different and unique to your Azure B2C tenant.&#x20;

## Create an Authentication Source on PlaceOS

1. In PlaceOS Backoffice navigate to the Domains tab.
2. Select the domain you would like to add Microsoft B2C Authentication to.
3. Click the Authentication Tab.
4. Click New Auth Source.
5. Select OAuth as the auth source type.
6. Provide a name eg. 'Microsoft Azure B2C'.
7. Click Save.\
   ![](<../../../.gitbook/assets/image (1) (1).png>)
8. Copy the Auth Source ID eg. `oauth_strat-Dw9b-5_lO3`
9. You will require the Auth Source ID to be used as the Azure App Registration Callback URI, for example: `https://placeos-dev.im/auth/oauth2/callback?id=oauth_strat-Dw9b-5_lO3`

## Create Azure B2C App Registration

You will need to create an App Registration for PlaceOS in Azure B2C. This is the application PlaceOS will use to communicate with B2C.

1. Login to your Azure B2C Tenant.
2. Under Manage select App Registrations.
3. Click new App Registration
4. Give your App a name e.g. PlaceOS User Auth
5. Under supported account types select: Accounts in this organizational directory only
6. Under URI Redirect select Web and enter the PlaceOS oauth\_strat created in the previous step e.g. `https://placeos-dev.im/auth/oauth2/callback?id=oauth_strat-Dw9b-5_lO3`
7. Click Register.
8. Navigate to API Permissions and confirm `offline_access` and `openid` scopes are granted.
9. Navigate to Certificates and Keys.
10. Click New Client Secret, name the secret something relevant e.g. PlaceOS Secret.
11. Note down your Secret Value.

{% hint style="info" %}
You will need to include this Application ID in the array of Application ID's in the TrustFrameWorkExtension.xml `audience` section.
{% endhint %}

## Configure the Authentication Source

Information required in this step:

* App Registration Client ID & Secret
* Azure B2C Tenant Name
* Azure B2C Custom Policy Name

In the Authentication Source, enter the following information:

| Field                 | Description                                                                                  | Example                                                                                                           |
| --------------------- | -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Name                  | A unique name for the Auth Source                                                            | `Azure B2C`                                                                                                       |
| Client ID             | The Client ID from your PlaceOS App Registration                                             |                                                                                                                   |
| Client Secret         | The Client Secret from your PlaceOS App Registration                                         |                                                                                                                   |
| Site                  | PlaceOS Domain + b2c.com                                                                     | {placeos\_domain}`.b2clogin.com`                                                                                  |
| Scope                 | Scope's the application will use.                                                            | `openid offline_access`                                                                                           |
| Token Method          | `POST`                                                                                       |                                                                                                                   |
| Authentication Scheme | `Request Body`                                                                               |                                                                                                                   |
| Token URL             | Endpoint for obtaining the token, including your Azure B2C Tenant Name and Policy Name       | `https://`{tenant\_name}`.b2clogin.com/{tenant_name}.onmicrosoft.com/`B2C\_1A\_SIGNUP\_SIGNIN`/oauth2/v2.0/token` |
| Authorize URL         | Endpoint used for Authenticating Users, including your Azure B2C Tenant Name and Policy Name | `https://{tenant_name}.b2clogin.com/{tenant_name}.onmicrosoft.com/B2C_1A_SIGNUP_SIGNIN/oauth2/v2.0/authorize`     |
| User Profile URL      | The User Info endpoint that was created to pull user information via Graph API               | `https://{tenant_name}.b2clogin.com{tenant_name}.onmicrosoft.com/B2C_1A_SIGNUP_SIGNIN/openid/v2.0/userinfo`       |

Info Mappings:

| PlaceOS      | Provider                      |
| ------------ | ----------------------------- |
| `email`      | `sign_in_names.email_address` |
| `first_name` | `given_name`                  |
| `last_name`  | `surname`                     |

## Add User Login Redirects



1. Login to PlaceOS Backoffice
2. Navigate to the Domains tab.
3. Select the Domain for your organisation.
4. Click on the Edit icon.
5. Set the login URL to `/auth/login?provider=oauth2&id=[OAUTH_STRAT]&continue={{url}}`, replacing the `[OAUTH_STRAT]` with the authentication source ID created in '[Creating a PlaceOS Authentication Source](../../configure-placeos-for-google-workspace/user-authentication/create-a-placeos-authentication-source-for-google.md)' instructions, leaving the `{{url}}` as is.
6. Set the logout URL to `/auth/logout?continue=https://sso.org.com/logout` if they haven’t provided you a logout.\
   ![](<../../../.gitbook/assets/image (14).png>)
