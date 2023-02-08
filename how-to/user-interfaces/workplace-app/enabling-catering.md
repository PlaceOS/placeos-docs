# Enabling Catering

Workplace App allows configuration of catering in two methods:

1. Catering is applied globally to an entire building, or selected levels of that building.
2. Catering is applied to specific rooms in a building.

This guide will demonstrate how to configure catering in both modes.

## Configure Catering Globally

This configuration can be used to enable catering for an entire building or an entire organisation.

### To enable catering for an entire building:

1. Navigate to the target building zone.
2. Select Metadata and add a new metadata section `workplace_app`
3.  Add the below configuration, where the zone specific is the building zone.

    ```
    {
             "events": {
                    "catering_enabled": "zone-EW7FggNf8n" 
        }
    }
    ```
4. All systems within this building zone will now have catering, provided a catering menu has been configured for those levels.&#x20;

### To configure catering for an entire organisation:

1. Navigate to the target org zone.
2. Select Metadata and expand the `workplace_app` metadata section.
3.  Add the below configuration to the events config, where the zone specific is the building zone.

    ```
    "catering_enabled": "zone-EW7FggNf8n"
    ```
4. All systems within this building zone will now have catering, provided a catering menu has been configured for those levels.&#x20;

## Configure Catering per Room

To configure catering per room, it is advised to create a new zone attached to the relevant building to manage the rooms as a group.

1. Create a new Zone and and name it `<Building> Catering Enabled`
2. On the new zone, navigate to metadata.
3. Add a new metadata section and call it `workplace_app` and click save.
4. Expand the `workplace_app` metadata section and remove any existing config.
5.  Add the following config:

    ```yaml
    {    
            "events": {
                    "catering_enabled": "zone-EW7FggNf8n" 
        }
    }
    ```
6. The zone defined should be the catering zone we just created![](<../../../.gitbook/assets/image (11).png>).\

7. Navigate to the Systems tab.
8. Identify systems you would like to have catering and add them to the \<Building> Catering zone.\
   ![](<../../../.gitbook/assets/image (3) (6).png>)
9. These systems will now have catering enabled, provided a catering menu has been created.

{% hint style="success" %}
Ensure your Org Zone `workplace_app` configuration does not include `"catering_enabled"` to avoid a conflict.
{% endhint %}
