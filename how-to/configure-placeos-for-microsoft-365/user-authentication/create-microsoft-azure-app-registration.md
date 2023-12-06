# Create Azure App Registration (Delegated Permissions)

## Prerequisites

* OAuth2 Callback URL from PlaceOS Authentication Source
* Microsoft Azure Administrator Access or App Registration Role

## Procedure

1. Login to Microsoft Azure Portal.
2. Navigate to App Registration blade.
3. Create a new App Registration called `PlaceOS User Authentication`
   * Supported account types should be ‘Accounts in this organisational directory only’
   * See also: [https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app#register-an-application](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app#register-an-application)
4.  Configure a Web Redirect URI with the PlaceOS Redirect URI created in the previous step eg. `https://<YOUR-PLACEOS-DOMAIN>/auth/oauth2/callback`&#x20;

    <figure><img src="../../../.gitbook/assets/image (27).png" alt=""><figcaption><p>Paste the PlaceOS Redirect URI into you Azure App Registration</p></figcaption></figure>
5. Note down the:
   * Application (client) ID as this will be required to be provided to PlaceOS.
   * Directory (tenant) ID as this will be required to be provided to PlaceOS.\
     ![](<../../../.gitbook/assets/image (19).png>)
6. Once created, navigate to Certificates and Secrets.
7. Create a New Client Secret called `PlaceOS User Auth Secret` and note down the secret value (you will need to supply this to PlaceOS).\
   ![](<../../../.gitbook/assets/image (18) (1).png>)
8. Navigate to 'API Permissions'.
9. Click 'Add Permission'.
10. Click 'Microsoft Graph'.
11. Click 'Delegated Permissions'.
12. Add the following Permissions:
    * `Calendars.ReadWrite`
    * `Calendars.ReadWrite.Shared`
    * `Group.Read.All`
    * `User.Read.All`
    * `offline_access`
13. This completes the App Registration.

{% hint style="success" %}
For more detailed information about the permissions required by PlaceOS, please reference the [Microsoft Azure Permissions Table.](../../../reference/microsoft-azure-permissions.md)
{% endhint %}
