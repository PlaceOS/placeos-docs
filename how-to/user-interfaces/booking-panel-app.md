# Booking Panel App

This page contains common configuration to modify the behaviour of the PlaceOS Web Based Booking Panel App.

In a standard deployment, the booking panel app will be deployed at `https://yourdomain.com/booking-panel/`&#x20;

## Available Configuration Parameters

The below table lists the available configuration paramters and where they are configured, full details are included below.

<table><thead><tr><th width="249">Parameter</th><th width="95">Type</th><th width="157">Config Location</th><th>Behaviour</th></tr></thead><tbody><tr><td><code>disable_book_now</code></td><td><code>bool</code></td><td>System or Zone</td><td>Enables the Touch to book function on the booking panel UI.</td></tr><tr><td><code>hide_meeting_title</code></td><td><code>bool</code></td><td>System or Zone</td><td>Hides the Title of the Meeting</td></tr><tr><td><code>hide_meeting_details</code></td><td><code>bool</code></td><td>System or Zone</td><td>Hides the Details of the Meeting</td></tr><tr><td><code>show_qr_code</code></td><td><code>bool</code></td><td>System or Zone</td><td>Hide the QR Code in the UI</td></tr><tr><td><code>room_image</code></td><td><code>string</code></td><td>System or Zone</td><td>Show an image in the top half of the panel UI</td></tr></tbody></table>

## Enable Touch to Book

Enabling Touch to Book provides a button on the user interface that allows users to make ad-hoc room bookings from the booking panel.

{% hint style="info" %}
Touch to Book will **not** work where PlaceOS is integrated to Microsoft 365 using Delegated Access. Touch to Book will only function where Application Access is used.
{% endhint %}

<figure><img src="../../.gitbook/assets/image (2) (4).png" alt=""><figcaption><p>Booking Panel showing the Touch to Book button enabled.</p></figcaption></figure>

This feature is enabled by adding configuration to modify the PlaceOS Bookings Driver.

1. Navigate to Zones.
2. Select the appropriate zone in the zone hierarchy of which you want to enable this feature.
   * You may enable this feature globally by adding the configuration to the ORG Zone.
   * You may enable this feature to a building by adding the configuration to a BUILDING Zone.
   * You may enable this feature for a single level by adding the configuration to a LEVEL Zone.
   * You may enable this feature for a region by adding the configuration to a REGION Zone.
3. Select the Unencrypted Tab.
4. Enter Configuration: `disable_book_now: false`
   * Alternatively, adding `disable_book_now: true` or omitting this configuration will hide the touch to book bar.
5. Save.
6.  Check a Booking Panel to confirm the configuration was set.\


    <figure><img src="../../.gitbook/assets/image (3) (7) (1).png" alt=""><figcaption></figcaption></figure>

## Disable Meeting Title

This setting will disable the meeting title from being displayed on the booking panel.

1. Navigate to Zones.
2. Select the appropriate zone in the zone hierarchy of which you want to enable this feature.
   * You may enable this feature globally by adding the configuration to the ORG Zone.
   * You may enable this feature to a building by adding the configuration to a BUILDING Zone.
   * You may enable this feature for a single level by adding the configuration to a LEVEL Zone.
   * You may enable this feature for a region by adding the configuration to a REGION Zone.
3. Select the Unencrypted Tab.
4. Enter configuration: `hide_meeting_title: true`
   1. Alternatively the configuration `hide_meeting_title: false` will show the meeting title, this is also the default behaviour and does not require configuration.
5. Save

## Disable Meeting Details

This setting will disable the meeting details from being displayed on the booking panel.

1. Navigate to Zones.
2. Select the appropriate zone in the zone hierarchy of which you want to enable this feature.
   * You may enable this feature globally by adding the configuration to the ORG Zone.
   * You may enable this feature to a building by adding the configuration to a BUILDING Zone.
   * You may enable this feature for a single level by adding the configuration to a LEVEL Zone.
   * You may enable this feature for a region by adding the configuration to a REGION Zone.
3. Select the Unencrypted Tab.
4. Enter configuration: `hide_meeting_details: true`
   1. Alternatively the configuration `hide_meeting_details: false` will show the meeting title, this is also the default behaviour and does not require configuration.
5. Save

## Disable QR Code

The QR Code can be used by users to access a room features menu that may include:

* Ad-hoc booking ability
* Future booking ability
* AV Control
* Lights and Blind Control
* Heating/Cooling Control

The available options in this UI will depend on integrations available for the selected space.

However, you may wish to disable the QR Code entirely from view.

1. Navigate to Zones.
2. Select the appropriate zone in the zone hierarchy of which you want to enable this feature.
   * You may enable this feature globally by adding the configuration to the ORG Zone.
   * You may enable this feature to a building by adding the configuration to a BUILDING Zone.
   * You may enable this feature for a single level by adding the configuration to a LEVEL Zone.
   * You may enable this feature for a region by adding the configuration to a REGION Zone.
3. Select the Unencrypted Tab.
4. Enter configuration: `show_qr_code: false`
   1. Alternatively the configuration `show_qr_code: true` will show the meeting title, this is also the default behaviour and does not require configuration.
5. Save

## Background Image

You may decide to show a image on the booking panel, this may be of the room itself, the building or other relevant image to your organisation.

1. Navigate to Zones.
2. Select the appropriate zone in the zone hierarchy of which you want to enable this feature.
   * You may enable this feature globally by adding the configuration to the ORG Zone.
   * You may enable this feature to a building by adding the configuration to a BUILDING Zone.
   * You may enable this feature for a single level by adding the configuration to a LEVEL Zone.
   * You may enable this feature for a region by adding the configuration to a REGION Zone.
3. Select the Unencrypted Tab.
4. Enter configuration: `room_image: absolute_url_to_image`
5. Save

<figure><img src="../../.gitbook/assets/image (1) (1) (2).png" alt=""><figcaption></figcaption></figure>

### Enabling Ms / Google Push events

This allows the panel to update as soon as bookings are modified. Reducing reliance on polling.

````yaml
```yaml
# use this for MS events
push_notification_url: 'https://yourdomain.placeos.run/api/engine/v2/notifications/office365'

# use this for Google events
push_notification_url: 'https://yourdomain.placeos.run/api/engine/v2/notifications/google'
```
````

Once configured, the panels will register for push events and maintain the subscription
