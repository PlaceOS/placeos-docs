# Add User Login Redirects

Once the Authentication Source is configured, we need to ensure PlaceOS Applications redirect the user to the authentication provider to login.&#x20;

## Prerequisites

* PlaceOS Backoffice Administrator Access

## Procedure

1. Login to PlaceOS Backoffice
2. Navigate to the Domains tab.
3. Select the Domain for your organisation.
4. Click on the Edit icon.
5. Set the login URL to `/auth/login?provider=[AUTH-TYPE-HERE]&id=[AUTH-ID-HERE]&continue={{url}}`, replacing the \[AUTH-TYPE-HERE] with one of (adfs, oauth2, ldap) & the `[AUTH-ID-HERE]` with the authentication source ID created in '[Creating a PlaceOS Authentication Source](../../configure-placeos-for-google-workspace/user-authentication/create-a-placeos-authentication-source-for-google.md)' instructions, leaving the `{{url}}` as is.
6. Set the logout URL to `/auth/logout?continue=https://sso.org.com/logout` if they haven’t provided you a logout.\
   ![](<../../../.gitbook/assets/image (14).png>)

## Debugging

**ADFS:**

The first step in this process should be to get the raw request.\


Often you can see if a request attribute is not lining up to an attribute statement by inspecting the XML.

You can paste the resulting data into this [SAML Decoder](https://www.samltool.com/decode.php)

Then paste the XML into [Pretty Print](https://www.samltool.com/prettyprint.php) (so it’s readable)

There are two methods of getting SSO data, described below:

1. If you have an account you can use to test
2. If the client is logging in and you have access to logs

### Self Check

1. Open the Chrome or Firefox inspection tool
2. Go to the network tab
3. Select: **preserve log**
4. Go through the login flow

The request coming back to the assertion URL is the one you want to inspect.

Assertion URL: `/auth/[AUTH-TYPE-HERE]/callback?id=[AUTH-ID-HERE]`

**ADFS:** Copy and paste the SAML response into the SAML decoder.
