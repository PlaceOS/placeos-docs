---
description: Single Sign On for PlaceOS using an OAuth2 provider
---

# Configure OAuth2 SSO

One advantage of using OAuth2 over SAML is that it is possible to require individuals to authorise access to certain resources. Thus users grant access to PlaceOS which can maintain a refresh token for offline access as needed.

### Prerequisites

1. Confirm the final UAT and PROD URLs of the web apps
2. Ensure that the **DNS** entries for these URLs are active and forwarding to the server(s)
3. Ensure that the SSL certificates for the above domains are signed and recognized as secure

### User Access Tokens

User tokens obtained from the OAuth2 flow are stored in the database and can be used for making requests on behalf of the users logging in.

You can obtain a token via `POST /api/engine/v2/users/resource_token`\
It will return a JSON payload

```yaml
{
  # a valid bearer token for the current user
  token:   "1234567",
  # optional unix timestamp (seconds)
  expires: 122345
}
```

If the OAuth2 service returned a refresh token then this API will always return a valid token, refreshed as required (there is never direct access to the refresh token)
