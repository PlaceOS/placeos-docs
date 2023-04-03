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

## Create API Endpoint in Azure

To enable the application to authenticate and return a user token to PlaceOS, we need to create an API Endpoint in Azure App Registrations.

If you have previously configured Azure App Registrations for PlaceOS Room Booking or Calendar integration, you can simply add the endpoint to the existing App Registration on Azure.&#x20;

### Add Azure API Endpoint

These instructions are taken directly from Microsoft Documentation: [Configure Azure AD App for Office add-in.](https://docs.microsoft.com/en-us/training/modules/office-add-ins-sso/6-azure-ad-app-registration-guidance)

1. Login to Azure Portal
2. Navigate to Azure Active Directory -> App Registrations.
3. Select the PlaceOS User Authentication app registration.
4. Select the Expose an API blade.\
   ![](<../../.gitbook/assets/image (6) (2).png>)
5. Set the App ID URI to your PlaceOS Domain, Azure will automatically add your App ID to the end of the URL. Note down the App ID URI as you will need this for the manifest file.\
   ![](<../../.gitbook/assets/image (3) (3).png>)
6. Add a new scope, configure it with the following details:
   * Scope Name: `access_as_user`
   * Who can consent: Admin & Users.
   * Admin consent name: Access User and Room Calendars.
   * Admin consent description: All the app to read the user calendar and calendars of rooms the user has permission to view/book.
   * User consent name: Access User and Room Calendars.
   * User consent description: All the app to read the user calendar and calendars of rooms the user has permission to view/book.
   * State: Enable\
     ![](<../../.gitbook/assets/image (23).png>)
7. Click Add Client Application
8. Add the following clients:
   * `d3590ed6-52b3-4102-aeff-aad2292ab01c` (_Microsoft Office_)
   * `ea5a67f6-b6f3-4338-b240-c655ddc3cc8e` (_Microsoft Office_)
   * `57fb890c-0dab-4253-a5e0-7188c88b2bb4` (_Office on the web_)
   * `08e18876-6177-487e-b8b5-cf950c1e598c` (_Office on the web_)
   * `bc59ab01-8403-45c6-8796-ac3ef710b3e3` (_Outlook on the web_)
   * `93d53678-613d-4013-afc1-62e9e444a0a5` (_Office on the web_)\
     ![](<../../.gitbook/assets/image (21).png>)

### Add Redirect URI

To ensure we can obtain the user token after authentication, you will need to register a redirect URI.

1. Login to Azure Portal
2. Navigate to Azure Active Directory -> App Registrations.
3. Select the PlaceOS User Authentication app registration.
4. Select the Authentication Blade.\
   ![](<../../.gitbook/assets/image (9) (3).png>)
5. Add a new Redirect URI and select Web.\
   ![](<../../.gitbook/assets/image (2) (1) (2).png>)
6. Enter your PlaceOS base domain plus `/outlook/#/book/spaces` for example: `https://placeos.com/outlook/#/book/spaces`\
   ![](<../../.gitbook/assets/image (4) (1).png>)
7. Once the Redirect URI is added, ensure Access tokens and ID Token checkboxes are selected. \
   ![](<../../.gitbook/assets/image (11) (2).png>)
8. Under supported account types, select only accounts in this domain. \
   ![](<../../.gitbook/assets/image (5) (2).png>)

### Update Manifest File

We will need to tell Exchange your users require permissions, this must be included with the `manifest.xml` file which also includes the Azure App Registration API Endpoint.

1. If it does not already exist, add a `<WebApplicationInfo>` element to your manifest after the closing `</Resources>` tag.&#x20;
2. Set the `<Id>` element to your App Registrations Client ID.
3. Set the `<Resource>` element to the API endpoint URL provided in the API section of your App Registration.
4. Add a `<Scopes>` element which includes `profile`, `openid` and `User.Read`

Example:

```yaml
      <WebApplicationInfo>
        <Id>client-id</Id>
        <Resource>api://placeosdomain.com/client-id</Resource>
        <Scopes>
          <Scope>profile</Scope>
          <Scope>openid</Scope>
          <Scope>User.Read</Scope>
        </Scopes>
      </WebApplicationInfo>
```

## Generate the Manifest File

To deploy the plugin to Microsoft Exchange, a Manifest File detailing the location and parameters of the application is required.

PlaceOS is able to automatically generate and serve the manifest file once you have created the API Endpoint in Azure.

To generate the manifest file, follow these steps:

1. Navigate to PlaceOS Backoffice.
2. Select Manage Instance from the left menu.
3. Select Staff API.
4. Use the drop down list to select the domain you are intending to deploy the plugin to.
5. You should already have a Staff API Registration if you have previously integrated PlaceOS with Microsoft Services. If not you can refer to the documentation on Configuring Staff API.
6. Edit the Staff API Registration.
7. Enable the Configure Outlook Plugin checkbox.
8. Enter the App ID from your Azure API Endpoint.

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

{% hint style="info" %}
PlaceOS will either automatically generate the Manifest file or you will be provided with a correctly formatted manifest file to upload.
{% endhint %}

1. In Outlook, Navigate to the Tools Menu and select Get Add-ins
2. In the add-in window, select Admin-Managed.
3. You will see the PlaceOS Room Booking add-in.\
   ![](<../../.gitbook/assets/image (4) (2).png>)
4. Select the Room Booking Add-in tile.&#x20;
5. Once installed, users will need to sign into the add-in with their corporate credentials.\
   ![](<../../.gitbook/assets/image (16) (1) (1).png>)
