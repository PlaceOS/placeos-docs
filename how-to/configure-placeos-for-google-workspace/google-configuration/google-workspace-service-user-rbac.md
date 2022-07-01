# Google Workspace Service User (RBAC)

There are some actions that regular staff do not have permission to perform, such as:&#x20;

* listing the users in the organisation
* interacting directly with resource calendars

## Prerequisites

* Google Workspace Administrative Access

## Procedure

### Create a New User

The new user may sit in a different OU to your regular users for security purposes.

To create a new user, if you are not already familiar you can follow these instructions from Google on [Creating a Google Workspace User.](https://support.google.com/a/answer/33310?hl=en)

{% hint style="info" %}
Do not assign a password to this user.&#x20;

It will never have to log on as it will be used solely by the API application.
{% endhint %}

### Assign Permissions

1. Select the newly created user from the user list.\
   ![](https://lh5.googleusercontent.com/Lpce4fnKSYf3e7xv1VJKT10PQ1FFsV8uABEKOO-cvZLniNNtp44iwM8ZRPfYCvCiJTEQRbN0Rml1rRF6H9FJbSFcZU1gOn\_se2l54LfpTxuZrvYsAXu\_rVotkay\_VVB\_qvf4zYrxDRe4HwVC)
2. Click the Roles and Privileges tab.
3. Click Edit.
4. Click create Custom Role.
5. On the privileges selection screen, under the 'Admin API Privileges' select the following permissions:
   1. Organization Units: Read
   2. Users: Read
   3. Groups: Read
6. When completed, the role summary should look like:\
   ![](https://lh4.googleusercontent.com/UTyRHuP0mI6M2xR9jezCRdryALWfxq-sfEShVPpc2EHhlcAZ9uwEQaTZAgZGR1WODwsZZ-DkDCST9bS7ThFCVdTpt06fuEX0FtqmiJMcGXs2f\_iGDuHrGZpQvZXoz\_eCOCgD\_1igm-uOTE\_M)
7. Assign the role to the account.\
   ![](https://lh5.googleusercontent.com/oqNd5heq1cW1g0OZSWcJl2HwbZ6iJk6P6MZQTcnPEiaPsVIcWVcgqrqtcmmTEWdZwMYW5Lf0wHgICU1yI9RvoV4oaqLs2bTXlyqreh269vmHg-esm6LxfJQn8-vXRBooLRO6zo5LuHt-IRb1)
