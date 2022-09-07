# Configure PlaceOS Calendar Driver

Once the above steps are complete, we can add the required driver on PlaceOS and configure it with the Application ID, Tenant ID and Secret generated in previous steps.

## Prerequisites

* PlaceOS Administrator Access
* Azure Application ID
* Azure Tenant ID
* Azure Application Secret

{% hint style="danger" %}
We recommend secrets are shared using a private service and not transmitted via email, this can include supported parameter stores on cloud services.
{% endhint %}

## Add Calendar Driver

If you have already added the calendar driver, you can skip this step.

1. In PlaceOS Backoffice navigate to the Drivers tab.
2. Click New Driver.\
   ![](<../../../.gitbook/assets/image (15).png>)
3. Select the Drivers Repository.
4. Search for `Microsoft Graph API`
5. Select the most recent commit.
6. Click Save. \
   ![](<../../../.gitbook/assets/image (16) (1).png>)

## Configure Calendar Driver

1. In PlaceOS Backoffice navigate to Systems.
2. Select the Organisation System, typically this is `*Org Name` or similar.
3. Click Modules.
4. Click Add New Module.
5. Search for the Microsoft Graph API Driver.
6. Enter the domain your users will use to access PlaceOS eg. `https://yourcompany.placeos.run`
7. Click Save.\
   ![](<../../../.gitbook/assets/image (17).png>)
8. Click the Microsoft Graph API Module in the Module list to go to the module settings.
9. Click the Unencrypted tab.
10. Enter the following configuration, noting your application ID, tenant ID and secret.

```
calendar_config:
  tenant: your-tenant-id
  client_id: your-application-id
  client_secret: your-client-secret
  conference_type: teamsForBusiness
```

## Testing Calendar Driver

In order to test the Calendar Driver with Delegated Access for Microsoft 365 you will require at least 1 system configured with a room resource and the Microsoft Graph API Calendar Module and Bookings Module added to the system.

![](<../../../.gitbook/assets/image (7).png>)

1. Navigate to a system configured with the correct modules and a valid room resource address.
2. Under Modules, execute `poll_events` against the Bookings\_1 module.\
   ![](<../../../.gitbook/assets/image (6) (1).png>)
3. You should get a successful response.\
   ![](<../../../.gitbook/assets/image (20).png>)
4. If you enable Debug and open the Console and the room has valid bookings, you will see the module return the next meeting details.\
   ![](<../../../.gitbook/assets/image (18).png>)
