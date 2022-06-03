---
description: Steps required for enabling OAuth2 sign on for PlaceOS with Google
---

# Google OAuth2

Before configuring PlaceOS, add a [new client application](https://support.google.com/cloud/answer/6158849) to your Google account and obtain the client id and secret.

### Create a new authentication source in PlaceOS

![New authentication source on the selected domain](<../../../.gitbook/assets/image (3).png>)

#### Configuring fields

These fields are specific to the OAuth2 provider and tend to differ slightly between providers.

Details on how [Google handles OAuth2](https://developers.google.com/identity/protocols/oauth2/web-server#handlingresponse) will be used to describe the following fields

* `name`: a friendly name for this authentication configuration
* `client_id`: the id provided by the OAuth2 provider when you added a new application
* `client_secret`: as above
* `site`: the URL of the application requesting access (`https://poc.placeos.com` in the screenshot above)
* `scope`: the scopes, space separated, for the APIs that are intended to be accessed
* `token_method`: POST or GET, Google uses a POST to obtain a token
* `authentication_scheme`: do we use request params or request body to obtain a token, Google uses the body
* `token_url`: the URL to obtain a token from, Googles is `https://oauth2.googleapis.com/token`&#x20;
* `authorize_url`: this is the URL that initialises the OAuth2 request. [Google details here](https://developers.google.com/identity/protocols/oauth2/web-server#creatingclient).
* `user_profile_url`: the is is the URL we can use to test the OAuth2 token and obtain user details
* `info_mappings`: this maps PlaceOS fields to User Profile fields
* `authorize_params`: query params to pass along with the authorize URL
* `ensure_matching`: authorization response fields that should match

### Google Example

An example configuration that works with Google

* scope: `profile email https://www.googleapis.com/auth/admin.directory.user.readonly https://www.googleapis.com/auth/admin.directory.group.readonly`
* token method: `POST`
* Auth Scheme: `Request Body`
* Token URL: [https://oauth2.googleapis.com/token](https://oauth2.googleapis.com/token)
* Authorize URL: [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
* User Profile URL: [https://openidconnect.googleapis.com/v1/userinfo](https://openidconnect.googleapis.com/v1/userinfo)
* Info Mappings: (PlaceOS -> Google)
  * email -> email
  * first\_name -> given\_name
  * last\_name -> family\_name
  * uid -> sub
  * image -> picture
  * access\_token -> token
  * refresh\_token -> refresh\_token
  * expires -> expires
  * expires\_at -> expires\_at
* Authorise Params
  * access\_type -> offline (this will return a refresh token)
  * prompt -> consent (ensures we are always sent a new refresh token on login)
* Ensure Matching
  * hd -> my.google.apps.domain (typically the domain after the @ in your login name)

The above stores a refresh token against each user for scoped directory access.\
A simpler version if token based access isn't required could be:

![](<../../../.gitbook/assets/image (10) (1).png>)

With scopes: `profile email`&#x20;
