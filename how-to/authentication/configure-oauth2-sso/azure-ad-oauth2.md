---
description: Steps required for enabling OAuth2 sign on for PlaceOS with Azure
---

# Azure AD OAuth2

### Create a new authentication source in PlaceOS

![New authentication source on the selected domain](<../../../.gitbook/assets/image (3).png>)

#### Overview of steps

1. Add an Azure Authentication (Web platform)
2. Create a new auth source in PlaceOS with the details below
3. Grab the generated ID and place it in the following URL:\
   https://{your-placeos-domain}/auth/oauth2/callback?id={generated-id}
4. Add the above redirect URI to the Azure Authentication configuration

#### Configuring fields

These fields are specific to the OAuth2 provider and tend to differ slightly between providers.

Details on how [Azure handles OAuth2](https://docs.microsoft.com/en-us/graph/auth-v2-user) will be used to describe the following fields

* `name`: a friendly name for this authentication configuration
* `client_id`: the id provided by the OAuth2 provider when you added a new application
* `client_secret`: as above
* `site`: this should be set to:
  * `https://login.microsoftonline.com`
* `scope`: the scopes, space separated, for the APIs that are intended to be accessed
  * `openid offline_access calendars.readwrite calendars.readwrite.shared contacts.read.shared group.read.all place.read.all user.read.all`
* `token_method`: Azure uses a POST to obtain a token
* `authentication_scheme`: do we use request params or request body to obtain a token, Azure uses the body
* `token_url`: the URL to obtain a token from, Azures is
  * `https://login.microsoftonline.com/{tenant_id}/oauth2/v2.0/token`
* `authorize_url`: this is the URL that initialises the OAuth2 request.
  * `https://login.microsoftonline.com/{tenant_id}/oauth2/v2.0/authorize`
* `user_profile_url`: the is is the URL we can use to test the OAuth2 token and obtain user details
  * `https://graph.microsoft.com/v1.0/me`
* `info_mappings`: this maps PlaceOS fields to User Profile fields (see below)

### Azure Settings

Modify scopes based on the [permissions required](https://docs.microsoft.com/en-us/graph/permissions-reference#openid-connect-oidc-scopes)

* client\_id: the id provided by the OAuth2 provider when you added a new application
* client\_secret: as above
* site: this should be set to:
  * `https://login.microsoftonline.com`
* scope: `openid offline_access calendars.readwrite calendars.readwrite.shared contacts.read.shared group.read.all place.read.all user.read.all`
* token method: `POST`
* Auth Scheme: `Request Body`
* Token URL: `https://login.microsoftonline.com/{tenant_id}/oauth2/v2.0/token`
* Authorize URL: `https://login.microsoftonline.com/{tenant_id}/oauth2/v2.0/authorize`
* User Profile URL: `https://graph.microsoft.com/v1.0/me`
* Info Mappings: (PlaceOS -> Google)
  * email -> mail,userPrincipalName
  * first\_name -> givenName
  * last\_name -> surname
  * uid -> id
  * access\_token -> token
  * refresh\_token -> refresh\_token
  * expires -> expires
  * expires\_at -> expires\_at

NOTE: If you plan to use the `resource_token` API then remember to [configure which OAuth strategy to use](./#user-access-tokens).
