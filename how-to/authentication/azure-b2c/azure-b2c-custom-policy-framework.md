# Azure B2C Custom Policy Framework

{% hint style="info" %}
This guide provides the steps required to set up a User Journey where users will authenticate with 'local' B2C Accounts. You will need to follow additional Microsoft Documentation if you would like to include Social Sign In on your Azure B2C App.
{% endhint %}

To use Azure B2C with PlaceOS you will need to configure a Custom Policy Framework, using the existing User Flows provided by Azure B2C is not sufficient for use with OAuth2 as it does not provide a User Info endpoint.

Without a User Info endpoint, PlaceOS is unable to correctly create the user record in our users table.&#x20;

## Create Custom Policy

The first step in configuration is to create a custom policy framework and the supporting application registrations.

Microsoft have prepared extensive documentation to complete this process and we recommend following this documentation to complete this step: [Microsoft Azure B2C - Create Custom Policy Framework](https://docs.microsoft.com/en-us/azure/active-directory-b2c/tutorial-create-user-flows?pivots=b2c-custom-policy)

To complete this step, you will also require the Custom Policy Provider templates.

[Download the Custom Policy Templates from Github](https://github.com/Azure-Samples/active-directory-b2c-custom-policy-starterpack/archive/master.zip) or `git clone https://github.com/Azure-Samples/active-directory-b2c-custom-policy-starterpack`

## Add User Info Endpoint

To allow PlaceOS to obtain your users information from Azure B2C via the Graph API, you will need to modify the custom policy to support a User Info endpoint.&#x20;

Microsoft have prepared extensive documentation to complete this process and we recommend following this documentation to complete this step: [Microsoft Azure B2C - Add User Info Endpoint to Custom Policies ](https://docs.microsoft.com/en-us/azure/active-directory-b2c/userinfo-endpoint?pivots=b2c-custom-policy)

## Add Custom User Attributes

You may also opt to collect additional data from your users when they sign up to the application, these are referred to as Custom User Attributes.

Custom User Attributes may include additional information such as:

* Users phone number
* Address
* Company
* Department

This information will be stored against the user record in the Azure B2C Directory and can be claimed by PlaceOS where required.&#x20;

Microsoft have prepared extensive documentation to add Custom User Attributes to your B2C Custom Policy, we recommend following this documentation to complete this step: [Microsoft Azure B2C - Add Custom User Attributes](https://docs.microsoft.com/en-us/azure/active-directory-b2c/configure-user-input?pivots=b2c-custom-policy)

## Password Reset Policy

By default, the self serve password reset user flow is not enabled.

You will need to add a custom user sub-journey to your policy to enable self serve password reset facilities, to do this you can follow this guide by Microsoft: [Microsoft Azure B2C - Add Password Reset Journey](https://docs.microsoft.com/en-us/azure/active-directory-b2c/add-password-reset-policy?pivots=b2c-custom-policy)

## Examples

We have provided an example Custom User Policy that includes:

* Local user sign-up/sign-in i.e. using a email address and password.
* User Info endpoint enabled.
* Custom User Attributes added.

You can [download](https://github.com/place-labs/azure-b2c-custom-policy-sample/archive/refs/heads/main.zip) our example policies from Github or `git clone git@github.com:place-labs/azure-b2c-custom-policy-sample.git`
