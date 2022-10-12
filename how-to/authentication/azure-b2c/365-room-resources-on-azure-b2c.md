# 365 Room Resources on Azure B2C

As Azure B2C does not explicitly provide us access to end user calendars, or a tenant for room resources you may optionally configure a 365 Tenant to be used for room booking/reservations.

To configure PlaceOS for integration with 365 Calendars, [follow the existing instructions for integrating PlaceOS with 365](../../configure-placeos-for-microsoft-365/calendar-access/).

{% hint style="info" %}
Access Control Restrictions are NOT required for 365 Room Resources when using Azure B2C - this steps in the Configuring PlaceOS for Calendar Access on Microsoft 365 may be skipped.
{% endhint %}

Once Calendar Access has been configured, you will need to configure room resources to accept external meeting requests, this is done via PowerShell:

```powershell
Set-CalendarProcessing -ProcessExternalMeetingMessages $true
```

For example:

```powershell
PS> Set-CalendarProcessing -ProcessExternalMeetingMessages $true

cmdlet Set-CalendarProcessing at command pipeline position 1
Supply values for the following parameters:
Identity: room01_01l6yy.onmicrosoft.com
```
