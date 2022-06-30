# Limit Application Permissions

In this step, we will now apply the restriction to the PlaceOS Room Booking group, restricting it to only see the calendars required for the purposes of room booking.

{% hint style="warning" %}
The application permissions policy may take up to 12 hours to become available after configuration, during this time PlaceOS will not be able to access room resources.
{% endhint %}

{% hint style="success" %}
These steps are taken directly from the Microsoft Documentation: [Limiting application permissions to specific exchange online mailboxes.](https://docs.microsoft.com/en-us/graph/auth-limit-mailbox-access)
{% endhint %}

## Prerequisites

* Exchange Resource Group
* Exchange Administrator Access
* Azure App Registration App ID

## Procedure

1. From Exchange Online, or any other service with PowerShell connected to Exchange, open a new PowerShell Terminal.
2. Run the following command, replacing the arguments for AppID, PolicyScopeGroupID and Description. We will use the AppID and PolicyScopeGroupID from previous steps:

```powershell
New-ApplicationAccessPolicy -AppId e7e4dbfc-046f-4074-9b3b-2ae8f144f59b -PolicyScopeGroupId EvenUsers@contoso.com -AccessRight RestrictAccess -Description "Restrict this app to members of distribution group PlaceOS Room Booking."
```

3\. The application policy should now be applied, this can be tested using the \`Test-ApplicationAccessPolicy\` cmdlet:

```powershell
Test-ApplicationAccessPolicy -Identity user1@contoso.com -AppId e7e4dbfc-046-4074-9b3b-2ae8f144f59b
```

4\. If we test using a regular user, the result should be denied:

![](https://lh4.googleusercontent.com/iYhJTmhpCKMDfUc8c6KYYvmUt\_SuKfq\_u6qaTYV2iZgvil9ZqB7IfqTiWf48I9QP-g9ygWpcXzECFl0x3cv-n7gMbg\_QCKbK9I9x62DsflKqfDm4rfhXtTN7rbJJr9TCeuBRVQZZfQUKe\_dCJw)

5\. If we test using a room resource address, the result should be granted:

![](https://lh6.googleusercontent.com/qaX80LgRZX8H\_ZGLbtHi9WpuXd6f8ZMbh01BHX2ztLmM1-Co88cO2lGBJkp1-yGcpweMDcwNO2KSa8Br203enh395RMqLY7ENwfVwMZ-OpJ3BMEeNWf9SdpqW78JSnHHZfJzT5ml4z2alGqgqw)
