---
description: PlaceOS Provide a plugin for Microsoft Outlook to facilitate room bookin
---

# Microsoft Outlook Plugin

## Adding Outlook Plugin to PlaceOS

The Outlook Plugin is treated like a normal Frontend Repository in PlaceOS Backoffice.

To add the plugin, you will require administrator access to PlaceOS. You can follow the instructions below or reference the [Deploy a Frontend Interface](deploy-frontend.md) document.

1. Navigate to the Repositories tab in Backoffice.
2. Create a new Repository.
3. For repository name enter: `Outlook Plugin`
4. For repository URL enter: `https://github.com/placeos/user-interfaces`
5. For repository branch enter: `build/outlook-rooms-addin/prod`
6. For folder name enter: `outlookplugin`
7. Ensure repository type is set to `Interface`
8. Enter GitHub credentials.\
   ![](<../../.gitbook/assets/image (9).png>)
9. You should now be able to pull the repository and reference it in domains as `outlookplugin` i.e. `https://company.placeos.com/outlookplugin/`
10. If configured correctly, the URL should load the frontend and redirect to Microsoft Authentication.

![Outlook Plugin displayed in Web Browser after following configuration steps.](<../../.gitbook/assets/image (17) (1).png>)

## Register Plugin with Exchange 365

In order for the plugin to work effectively with your organisation and to allow users to add the plugin to Outlook, it must be registered in Exchange 365 Admin.&#x20;

To complete these steps you will require administrator access to Exchange 365.

### Register the Custom App&#x20;

1. In Exchange 365 Admin navigate to Settings -> Integrated Apps.\
   ![](<../../.gitbook/assets/image (15) (1).png>)
2. Select Upload Custom Apps.\
   ![](<../../.gitbook/assets/image (10) (1).png>)
3. PlaceOS provide a `manifest.xml` file with the user interface, in the Custom App settings select the Provide Link to Manifest file option and enter your manifest.xml URL.
4. The Manifest URL will be per the configuration, following the example used in Adding the Outlook Plugin in this case the manifest file is located at: `https://company.placeos.com/outlookplugin/manifest.xml`\
   ![](<../../.gitbook/assets/image (14) (1).png>)
5. Click Validate. The Manifest File should validate successfully.\
   ![](<../../.gitbook/assets/image (18) (1) (1).png>)
6. You can click Next and Finish the Wizard.

### Update the Custom App

If PlaceOS make changes to the plugin, the manifest.xml file version will be incremented and these changes may be updated in the custom app.

Follow the same steps to access the Custom App under Integrated Apps in Exchange 365, then:

1. Select the Custom Room Booking app.
2. Select Update App under Actions.\
   ![](<../../.gitbook/assets/image (7) (1).png>)
3. Provide your `manifest.xml` URL Path.
4. Click Update.
5. Any changes in the `manifest.xml` will be applied and the plugin will be updated.

## Add Plugin to Outlook

If the instructions are followed correctly, shortly after registering the custom app the plugin will become visible to users in Outlook Mc & Windows.

1. In Outlook, Navigate to the Tools Menu and select Get Add-ins
2. In the add-in window, select Admin-Managed.
3. You will see the PlaceOS Room Booking add-in.\
   ![](<../../.gitbook/assets/image (4).png>)
4. Select the Room Booking Add-in tile.&#x20;
5. Once installed, users will need to sign into the add-in with their corporate credentials.\
   ![](<../../.gitbook/assets/image (16) (1).png>)
