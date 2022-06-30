---
description: Steps required for enabling OAuth2 sign on for PlaceOS with Azure.
---

# User Authentication

This steps will configure PlaceOS to use Microsoft Azure Active Directory as a federated authentication provider to allow users to sign in using their corporate credentials.

PlaceOS prefers to use OAuth2.

One advantage of using OAuth2 over SAML is that it is possible to require individuals to authorise access to certain resources. Thus users grant access to PlaceOS which can maintain a refresh token for offline access as needed.

## Prerequisites

* Confirm the final UAT and PROD URLs of the web apps
* Ensure that the **DNS** entries for these URLs are active and forwarding to the server(s)
* Ensure that the SSL certificates for the above domains are signed and recognized as secure
