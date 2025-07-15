# Create Azure App Registration (Application Permissions)

## Prerequisites

* Microsoft Azure Administrator Access or Permission to Create App Registrations

## Procedure

In this step, we will create the application access PlaceOS will use to access the room resource calendars in your organisation via Microsoft Graph API.

After completion of this step, we will apply a policy restriction so the application can only access room resource calendars.

1. Login to Microsoft Azure Portal.
2. Navigate to App Registration blade.
3. Create a new App Registration called `PlaceOS Bookings Visualiser`
   * Supported account types should be ‘Accounts in this organisational directory only’
   * No redirect URI is required.
4. Note down the:
   * Application (client) ID as this will be required in the next step and also to be provided to PlaceOS.
   * Directory (tenant) ID this will not be required in the next step but will need to be provided to PlaceOS.\
     <img src="https://lh5.googleusercontent.com/ulIRa5QpUwDbFBDWls5SlB00otIQZzakPASw8URjfJh30I4VvFKxrDFThVKAKiA3FXJpbdbWI2-aVWS74DL8tGEFeu9DqOMVTwmi9TJWD_2Jp-faKUEJxEvL-tqrmW4eAgXQCn8wTmRk6ARIOQ" alt="" data-size="original">
5. Once created, navigate to Certificates and Secrets.
6. Create a New Client Secret called ‘PlaceOS Booking Visualiser Secret’ and note down the secret value (you will need to supply this to PlaceOS).\
   <img src="https://lh6.googleusercontent.com/ECGCNqjQtoae6bpdVCR0rxpww-BmZ9r3MD0MPdiTQsDcWOfLYqIbB_N4obq0qIAghr85sOqSshs8unnjZC2IqPWegEdPRwgWMBevUVvgfP_PpekeLPiYSPHr0NIqrg9miDT9UKayMEMm8ATpbg" alt="" data-size="original">
7. Navigate to 'API Permissions'.
8. Click 'Add Permission'.
9. Click 'Microsoft Graph'.
10. Click 'Application Permissions'.
11. Add the following permissions:\
    \- `Calendars.ReadWrite`\
    \- `User.Read.All`\
    \- `GroupMember.Read.All`\
    \- `Place.Read.All`\
    ![](https://lh4.googleusercontent.com/XDYxU9SORBoh9sbS-TLeu-RCd0zBGP-4xQjqr7PE2O4a1DQFLj4Az1OXRRVhTPoxLrxjDxrGEd36urvVQIRGmEopr7TAltvIrTsUnewaH8LJumCjrSrYFwb5zTO2FdLkvbqELAYLy8lzZz04Jw)
13. Click 'Add permissions'.
14. Click ‘Grant admin consent for xyz’.\
    <img src="../../../.gitbook/assets/image (11).png" alt="" data-size="original">
15. Configuration of the Azure App is now complete.
16. Supply PlaceOS or your integration partner with (be aware that supplying these credentials to PlaceOS prior to configuring the application policy in exchange will allow PlaceOS to see ALL calendars in your organisation):
    * Application ID
    * Tenant ID
    * Secret
