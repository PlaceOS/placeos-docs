---
description: How to locate people using Juniper Mist
---

# People Finding with Juniper Mist on PlaceOS

### Generate a Mist API token

You must record and save the API Token immediately after generating it, as the API Token cannot be re-displayed.

To generate a Mist API Token:

1. In your browser, access the [Mist management dashboard](https://manage.mist.com). The Mist Sign In page opens.
2. Log in to your Mist account by entering your account credentials.
3. While logged in to your Mist account, open another browser tab and access the URL [https://api.mist.com/api/v1/self/apitokens](https://api.mist.com/api/v1/self/apitokens)
4. Select POST The generated API Token displays in the following format:
   * `"key": "<randomly generated character string>"`\
     where the character string is the API Token\
     For example, `"key": "34223XFE...e5"`
   * also see the [mist guide on this process](https://api-class.mist.com/rest/create/api\_tokens/)
5. Record and save the API Token, before closing the browser tab.

Note the following about Mist API Tokens:

* An API Token generated for a specific admin has the same privilege as the user
* API Tokens are automatically deleted, if not used within 90 days.

#### Obtain the Site ID

When you configure the PlaceOS connection to Mist, you'll need the `site_id` for the network you want to monitor. You can obtain these by:

1. logging into the [Mist management dashboard](https://manage.mist.com)
2. select the organisation and site (orange arrow below)
3. Record and save the UUID from the URL (highlighted in orange)

![Org ID (green), Site ID (orange)](<../../.gitbook/assets/image (5) (1).png>)

### Configure Mist Websocket Driver

Add the `Juniper Mist Websocket` driver to the drivers list and configure the settings

```yaml
{
  # the api token we generated above
  api_token: "<randomly generated character string>",

  # the id of the site we want to monitor
  site_id:   "site_id"
}
```

Then add the driver to the location services system.

#### Obtain the list of map ids

We'll need to link Mist maps to PlaceOS maps. Use backoffice to execute the following command:

* MistWebsocket -> maps (execute)

This will return data like:

```json
[{
  "id": "cbdb7f0b-3be0-4872-88f9-58790b509c23-j68kows8",
  "name": "Mist Office",
  "type": "image"
}]
```

### Configure Mist Location Services

Add the Juniper Mist Locations driver to the drivers list and configure the settings

```yaml
{
  floorplan_mappings: {
    "mist_map1_id" => {
      "building":   "zone-12345",
      "level":      "zone-123456",
      
      # free text field for reference
      "level_name": "BUILDING - L1"
    },
    "mist_map2_id" => {
      "building":   "zone-12345",
      "level":      "zone-7891",
      
      # free text field for reference
      "level_name": "BUILDING - L2"
    }
  }
}
```

Once the floor mappings are in place and the module has been added to your location services system, WIFI users will be searchable.
