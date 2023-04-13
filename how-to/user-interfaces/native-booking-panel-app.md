---
description: >-
  The PlaceOS Native Booking Panel app is designed to be deployed on Apple iPad
  and Android Tablet devices.
---

# Native Booking Panel App

The PlaceOS Native Booking Panel App may be deployed stand-alone from the public Apple App Store and Google Play Store or deployed to a fleet of devices via a Mobile Device Management platform.&#x20;

You can also download the APK, Android App Bundle and iOS IPA directly if required from [here](https://placeos-apps.s3.ap-southeast-2.amazonaws.com/index.html).

The Mobile Device Management platform will provide some added benefits of passing additional pre-configuration to each device to make the set up process easier. End users would need to refer to documentation specific to their MDM for these instructions.&#x20;

## Configuring The App

Configuring the App requires three key pieces of information:

* PlaceOS API Key: [Click here to learn how to generate an API Key.](../authentication/x-api-keys.md)
* Your PlaceOS URL.
* A Room Booking System configured.

1. On first launch, the app will provide some brief instructions detailing the required information as above.
2. On the second screen, enter your PlaceOS Domain/URL. This is the URL your users use to access existing PlaceOS Apps eg. `https://yourcompany.placeos.run`\
   ![](<../../.gitbook/assets/image (4) (3).png>)
3. Next, enter the API Key you have generated or was provided to you by PlaceOS Support.\
   ![](<../../.gitbook/assets/image (2) (3).png>)
4. Finally select the room you wish the panel to display. If you have multiple systems a drop down will be shown, or you can search for the system by name or ID.\
   ![](<../../.gitbook/assets/image (1) (1) (2) (1).png>)
5. The app will launch and display the room booking panel interface.

## Configuring Device to Remain On

When using an Android Tablet or Apple iPad as a Kiosk Device, you will need to ensure the device will remain unlocked.

If you are using a Mobile Device Management platform you can configure this as part of your room booking profile.

For Apple devices, this is referred to as Guided Access and can be configured with [these instructions.](https://support.apple.com/en-au/guide/ipad/ipada16d1374/ipados)

Screen Pinning is one technique on Android devices, although depending on the make and model of the tablet you may require a third party app to configure Kiosk Mode. [You can read more about pinning apps here](https://www.manageengine.com/mobile-device-management/mdm-screen-pinning-android-devices.html).

## Deploying via MDM

The booking panel app is designed to support custom configuration that can be deployed along with the app via a MDM Platform such as SimpleMDM or Google Device Manager.

For this to work, you must use the correct keys in your configuration schema and submit the required information.

Once the data is received by the device, they will display the custom configuration and ask for the data to be validated. Once this is complete, you can set the appropriate Room System on the device.

<figure><img src="../../.gitbook/assets/WhatsApp Image 2022-11-30 at 01.48.00.jpeg" alt=""><figcaption></figcaption></figure>

### Dictionary

The following dictionary is required for generating custom configuration:

| key          | type   | Required                                      | example                                                              |
| ------------ | ------ | --------------------------------------------- | -------------------------------------------------------------------- |
| `bundleId`   | String | <p>iOS: Required<br>Android: Not Required</p> | place.technology.bookingPanel                                        |
| `apiKey`     | String | Required                                      | `2246a9570b1e821a337c47353c.cUm33sGOmjHlSCbf5M07v8y8vRa4_GBmCW7hFkU` |
| `domainName` | String | Required                                      | [https://placeos-dev.aca.im](https://placeos-dev.aca.im)             |
| `SystemId`   | String | Optional                                      | `sys-223fn20n`                                                       |

```xml
<?xml version="1.0"?>
<managedAppConfiguration>
  <version>1</version>
  <bundleId>place.technology.bookingPanel</bundleId>
  <dict>
    <string apiKey="2246a9570b1e821a337c47353c.cUm33sGOmjHlSCbf5M07v8y8vRa4_GBmCW7hFkU"></string>
    <string domainName="https://placeos-dev.aca.im"></string>
    <string systemId="sys-223fn20n"></string>
  </dict>
</managedAppConfiguration>
```
