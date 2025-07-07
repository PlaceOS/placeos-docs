---
title: "Configure PlaceOS Authentication Source"
---

# Configure PlaceOS Authentication Source

{% hint style="success" %}
You may supply the `client_id` and `client_secret` to PlaceOS or your PlaceOS Integration Partner to complete these steps.
{% endhint %}

## Prerequisites

* PlaceOS Backoffice Administrator Access
* Microsoft Azure App Registration `client_id` and `client_secret` generated in the [Microsoft Azure App Registration](create-microsoft-azure-app-registration.md) steps.&#x20;

## Procedure

1. In PlaceOS Backoffice navigate to the Domains tab.
2. Select the domain you would like to add Microsoft Authentication to.
3. Click the Authentication Tab.
4. Identify the OAuth Source previously created.
5. Click the Edit Icon.
6. Update missing fields per the table below.&#x20;

These fields are specific to the OAuth2 provider and tend to differ slightly between providers.

Details on how [Azure handles OAuth2](https://docs.microsoft.com/en-us/graph/auth-v2-user) will be used to describe the following fields.

| PlaceOS Field           | Requirement                                                                                                                                                                                                                                                                                                                          |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`                  | A friendly name for this authentication configuration.                                                                                                                                                                                                                                                                               |
| `client_id`             | The Client ID provided by Microsoft Azure App Registration.                                                                                                                                                                                                                                                                          |
| `client_secret`         | The Secret created in the Microsoft Azure App Registration.                                                                                                                                                                                                                                                                          |
| `site`                  | This should be set to: \``https://login.microsoftonline.com`\`                                                                                                                                                                                                                                                                       |
| `scope`                 | <p></p><p>The scopes, space separated, for the APIs that are intended to be accessed</p><ul><li><code>openid</code></li><li><code>offline_access</code></li><li><code>calendars.readwrite.shared</code></li><li><code>group.read.all</code></li><li><code>user.read.all</code></li></ul>                                             |
| `token_method`          | Azure uses a `POST` to obtain a token                                                                                                                                                                                                                                                                                                |
| `authentication_scheme` | `Request Body`                                                                                                                                                                                                                                                                                                                       |
| `token_url`             | <p>The URL to obtain a token from, Azures is:</p><p><code>https://login.microsoftonline.com/{tenant_id}/oauth2/v2.0/token</code></p>                                                                                                                                                                                                 |
| `authorize_url`         | <p>The URL that initialises the OAuth2 request:</p><p><code>https://login.microsoftonline.com/{tenant_id}/oauth2/v2.0/authorize</code></p>                                                                                                                                                                                           |
| `user_profile_url`      | <p>The URL we can use to test the OAuth2 token and obtain user details:</p><p><code>https://graph.microsoft.com/v1.0/me</code></p>                                                                                                                                                                                                   |
| `info_mappings`         | <p>This maps PlaceOS fields to User Profile fields (see below).</p><ul><li>email -> mail,userPrincipalName</li><li>first_name -> givenName</li><li>last_name -> surname</li><li>uid -> id</li><li>access_token -> token</li><li>refresh_token -> refresh_token</li><li>expires -> expires</li><li>expires_at -> expires_at</li></ul> |

## PlaceOS Staff API

Once you have completed the above steps, you will also need to create a StaffAPI Record for your domain.

To create the Staff API Record follow [these instructions on configuring Staff API.](../../backoffice/configure-staff-api.md)
