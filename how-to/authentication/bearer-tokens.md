---
description: >-
  PlaceOS is an OAuth2 authentication service provider. These are a few ways to
  obtain a bearer token
---

# Bearer tokens

Bearer tokens are tied to client applications. You can find the list of configured applications in Backoffice on the Domains -> Applications tab.

### Password Flow

NOTE:: this flow is not recommended and only works for services accounts, it can be useful to obtain a token simply for testing.

POST `/auth/oauth/token`

```yaml
{
  "grant_type"    : "password",
  "username"      : "<user@email.com>",
  "password"      : "<password>",
  "client_id"     : "7976...a25be",
  # space seperated scope list
  "scope"         : "public mqtt.read"
}
```

This will return a new token

```yaml
{
    "access_token": "guxu05o",
    "token_type": "bearer",
    "expires_in": 7200,
    "refresh_token": "CvUwMfso",
    "scope": "public",
    "created_at": 1642051911
}
```

you can specify more than one scope - defaults to `public` the scopes selected here must be a subset of those configured on the client application

### Making Requests

There are three ways to make an authenticated request with a bearer token:

1. A HTTP Header: `Authorization: Bearer <token>`
2. A URL Param: `?bearer_token=<token>`
3. A HTTP Cookie: `bearer_token=<token>`

### Inspect an existing token

GET `/api/engine/v2/api_keys/inspect?bearer_token=yourtoken`

GET `/api/engine/v2/api_keys/inspect?api-key=yourkey`

### Authorisation Code Flow

This is the recommended flow for applications built on top of the PlaceOS platform. All PlaceOS templates additionally implement the PKCE extensions for additional security.

1. First a user session must be established, there are two methods to achieve this
   * Local login, POST `/auth/signin?email=service@account.com&password=developer`
   * SSO login, GET `/auth/oauth2?id=oauth2-id` (generated as part of configuration)
2. Extract the user cookie (if performing programatically)
3. Perform the authorisation code flow to obtain a token, with the cookie header set
   * Authorise endpoint: `/auth/oauth/authorize`
   * Token endpoint: `/auth/oauth/token`

```crystal
require "http"
require "uri"

# your client application is expected to know these (public information)
client_id = "797688xxxxxxxxxxx7a25be"
redirect_uri = URI.encode_path_segment "https://localhost:8443/backoffice/oauth-resp.html"
scope = "public"

# NOTE:: in a browser you won't need to handle this manually
auth_cookie = "user=y1GTR1Xf7ZuhoYGYtOuQVyY8hwUhbwnRoh%2FEuuB%2F7frquxI14zpCUqQqJZs%3D--QxluRWU9NngkNOA3--bTqBdZlpiGoOsBtRVV3Tnw%3D%3D"

# make the request
authorize_uri = "https://localhost:8443/auth/oauth/authorize?response_type=code&scope=#{scope}&client_id=#{client_id}&redirect_uri=#{redirect_uri}"
response = HTTP::Client.get authorize_uri, HTTP::Headers{"Cookie" => auth_cookie}

# parse the authorisation code out of the response header
# the location header will be the redirect URI with a code parameter
# example: `https://localhost:8443/backoffice/oauth-resp.html?code=tB2AUQQ8KXm`
location = response.headers["Location"]
code = location.split("code=").last

# Obtain the bearer token
token_uri = "http://localhost:8443/auth/oauth/token?grant_type=authorization_code&code=#{code}&client_id=#{client_id}&redirect_uri=#{redirect_uri}"
token_respose = HTTP::Client.post token_uri

token_respose.body
# => { "access_token":"eyJh", "token_type":"bearer", "expires_in":7200, "refresh_token":"CvUwMfso", "scope":"public", "created_at":1642051911 }

```
