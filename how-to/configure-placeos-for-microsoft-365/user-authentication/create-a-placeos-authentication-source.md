# Create a PlaceOS Authentication Source

{% hint style="success" %}
To complete this step, ensure you have already followed the [steps to add a domain to PlaceOS.](../../backoffice/add-domain.md)
{% endhint %}

{% hint style="success" %}
This step can be completed by PlaceOS or your PlaceOS Integration Partner.
{% endhint %}

## Prerequisites

* PlaceOS Backoffice Administration Access

## Procedure

1. In PlaceOS Backoffice navigate to the Domains tab.
2. Select the domain you would like to add Microsoft Authentication to.
3. Click the Authentication Tab.
4. Click New Auth Source.
5. Select OAuth as the auth source type.
6. Provide a name eg. 'Microsoft AD'.
7. Click Save.\
   ![](<../../../.gitbook/assets/image (1) (3).png>)
8. Copy the Auth Source ID eg. `oauth_strat-Dw9b-5_lO3`
9. You will require the Auth Source ID to be used as the Azure App Registration Callback URI, for example: \`https://placeos-dev.im/auth/oauth2/callback?id=`oauth_strat-Dw9b-5_lO3`\`&#x20;
