# Google Configuration



To use google APIs you’ll need a server to server OAuth2 application configured. This involves creating a service account that will be used for authentication.

The service account can then “act as” staff in the organisation to perform action on their behalf, such as booking meeting rooms.&#x20;

See: [https://cloud.google.com/iam/docs/creating-managing-service-accounts](https://cloud.google.com/iam/docs/creating-managing-service-accounts)

There are some actions that regular staff do not have permission to perform, such as:&#x20;

* Listing the users in the organisation&#x20;
* Interacting directly with resource calendars.&#x20;

For this functionality a user account should be created that is granted special permissions for these activities.
