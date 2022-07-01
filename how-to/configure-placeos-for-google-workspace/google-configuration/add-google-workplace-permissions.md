# Add Google Workplace Permissions

{% hint style="info" %}
If you want to configure this application for use in a subset of the organisation, then ignore this step and follow the steps to [Create a marketplace application](create-google-marketplace-app-optional.md)
{% endhint %}

## Prerequisites

* Google Workspace Administrator Access
* JSON Service Account File generated in [Configure Google Service Account](configure-google-cloud-service-account.md) step
* The `client_id` from the JSON file\
  ![](https://lh6.googleusercontent.com/Nk-2YjdL51LA6LV4QEINzP7xNXIcMlHOH-pA5Ul6zbmuHpGquSFzsSjJbJ0oCNPMtnse3nBXqE9drTuSwmYObB\_KjOoC81LFyD\_oyI6g3XhxH1m6YzXhnnDoK\_GCY1Bg4VYhIVrDNXSyMZj8)

## Procedure

1. Go to [https://admin.google.com](https://admin.google.com)&#x20;
2. Navigate to Security
3. Scroll down to Advanced Settings
4. Select 'Manage API Client Access'.
5. Add the following API Scopes to the `client_id` you extracted earlier.
   1. https://www.googleapis.com/auth/calendar,https://www.googleapis.com/auth/admin.directory.user.readonly,https://www.googleapis.com/auth/drive.file\
      ![](https://lh3.googleusercontent.com/bkdGnYjsRxQdSHa5ajlbw1gHb9vk6ddmpxo\_uOgGuqNixRVBCiLIeXoO\_ixvbu1U5y7LpIY5E\_QX5mS9xjIdRXbfgUj7b2uD0gH7mIlmAuGlFbS6H19szFq2AgM4YBWqITloqdeVvXPBQqHt)
6. Click Authorise.
7. Navigate to the Security Tab and select API Controls.
8. Ensure Internal Applications are Trusted.\
   ![](https://lh5.googleusercontent.com/aQHYx8ScK2vm-GGiTO\_dzUiKMsjiqCFkxS2px2PWLvaOFPYWZN1cAEdEQE801TJWN3pJqzG8r2kIUefw45l4uGdqIwy\_yP9Ne4Anoj2-BRjArkBTz2izv3sgEBs3sBmSwAnegrBGqKTJEd4T)

{% hint style="info" %}
https://www.googleapis.com/auth/drive.file allows the application to add attachments to calendar events, such as QR codes. It does not allow for reading or modifying any files not created by the application. i.e. there is no access to company documents or attachments staff have added to events.
{% endhint %}
