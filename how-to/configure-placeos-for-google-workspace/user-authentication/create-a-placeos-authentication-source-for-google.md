# Create a PlaceOS Authentication Source for Google

{% hint style="success" %}
To complete this step, ensure you have already followed the [steps to add a domain to PlaceOS.](../../backoffice/add-domain.md)
{% endhint %}

{% hint style="success" %}
This step can be completed by PlaceOS or your PlaceOS Integration Partner.
{% endhint %}

## Prerequisites

1. Confirm the final UAT and PROD URLs of the web apps
2. Ensure that the **DNS** entries for these URLs are active and forwarding to the server(s)
3. Ensure that the SSL certificates for the above domains are signed and recognized as secure
4. PlaceOS Backoffice Administration Access

## Procedure

1. In PlaceOS Backoffice navigate to the Domains tab.
2. Select the domain you would like to add Google Authentication to.
3. Click the Authentication Tab.
4. Click New Auth Source.
5. Select OAuth as the auth source type.
6. Provide a name eg. 'Google Workspace'.
7. Click Save.\
   ![](<../../../.gitbook/assets/image (1) (1).png>)
8. Copy the Auth Source ID eg. `oauth_strat-Dw9b-5_lO3`
9. You will require the Auth Source ID to be used as the Azure App Registration Callback URI, for example: \`https://placeos-dev.im/auth/oauth2/callback?id=`oauth_strat-Dw9b-5_lO3`\`&#x20;
