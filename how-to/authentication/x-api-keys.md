# X-API Keys

PlaceOS can generate API Keys for authenticated access.

The API keys can be used for:

* [Unattended Panel Access](../user-interfaces/panel-login.md)
* Accessing the [PlaceOS API](../../reference/api/)
* Using the [Real-time Websocket](../../reference/api/websocket.md)

### Prerequisites

* Administrator access to your PlaceOS Backoffice

### Generate API Key

1. Login to PlaceOS Backoffice
2. Navigate to the Admin Tab
3. Select API Keys\
   [![Select API Keys from Admin Menu](https://github.com/PlaceOS/docs/raw/generate-api-key/how-to/backoffice/assets/menu-api-keys.png)](https://github.com/PlaceOS/docs/blob/generate-api-key/how-to/backoffice/assets/menu-api-keys.png)
4. Select the domain the API Key will belong to
5. Any existing API Keys will be shown in the list
6. Click `Add API Key`\
   [![Select API Keys from Admin Menu](https://github.com/PlaceOS/docs/raw/generate-api-key/how-to/backoffice/assets/add-api-key.png)](https://github.com/PlaceOS/docs/blob/generate-api-key/how-to/backoffice/assets/add-api-key.png)
7. Enter the required information:
   * Name: Suitable name for the API Key
   * Description: What the key will be used for (useful for other administrators)
   * Scopes: Select from available scopes (see available scopes below)
   * User: The user in which the API Key will emulate
   * Permissions: Permission level assigned to the API Key (see permission details below)\
     [![Add new API Key Form](https://github.com/PlaceOS/docs/raw/generate-api-key/how-to/backoffice/assets/add-new-key.png)](https://github.com/PlaceOS/docs/blob/generate-api-key/how-to/backoffice/assets/add-new-key.png)
8. Click Save
9. The new API Key will be shown once after it is saved, you will not be able to view it again\
   [![Showing the new API Key](https://github.com/PlaceOS/docs/raw/generate-api-key/how-to/backoffice/assets/display-key.png)](https://github.com/PlaceOS/docs/blob/generate-api-key/how-to/backoffice/assets/display-key.png)

#### Available Scopes

Available Scopes for API Keys are:

* `public`\
  A special scope that can access all routes (supports read and write modifiers)
* `api_keys`
* `ldap_authentication`
* `saml_authentication`
* `o_auth_authentication`
* `o_auth_applications`
* `brokers`
* `cluster`
* `domains`
* `drivers`
* `settings`
* `modules`
* `guests`\
  A special scope for guests that provides [access to some APIs](https://docs.google.com/document/d/1LyHi1oeuIDE2WIdAmACpNaLhsITB6aALYk52EYVWAVc/edit?usp=sharing)
* `systems`
* `control`\
  `.read`: module class types, function list of a module, module state lookup\
  `.write`: control websocket, API execute request
* `edges`
* `metadata`
* `repositories`

#### Available Permissions

* `scope.read`
* `scope.write`

### Using the API Key

API Keys are typically passed in the header of the request, however can be used in the following ways

1. HTTP Header: `X-API-Key: <token>`
2. URL param: `?api-key=<token>`
3. A HTTP Cookie: `api-key=<token>`

### Removing an API Key

1. Navigate to the API Key Page in Backoffice located in the Admin Tab.
2. Click the trash icon to remove the key.\
   [![Remove API Key](https://github.com/PlaceOS/docs/raw/generate-api-key/how-to/backoffice/assets/remove-key.png)](https://github.com/PlaceOS/docs/blob/generate-api-key/how-to/backoffice/assets/remove-key.png)
