---
description: How to configure a webhook for a trigger or a module that can accept a webhook
---

# Configure a webhook

Webhooks are defined as a condition of a trigger. Add a new trigger that represents the webhook.

* Supported methods are the HTTP Verbs that should be accepted by the webhook URI
* The debounce period can be used to prevent multiple triggers occurring over a short period of time. (in seconds)

<figure><img src="../../.gitbook/assets/image (10).png" alt=""><figcaption><p>New trigger configuration form</p></figcaption></figure>

Once configured this trigger needs to be applied to a system before it's active.

<figure><img src="../../.gitbook/assets/image (6) (3).png" alt=""><figcaption><p>Add a trigger to a system</p></figcaption></figure>

Once you've added the trigger, you can obtain the webhook URL by clicking the link icon

<figure><img src="../../.gitbook/assets/image (14) (2).png" alt=""><figcaption><p>Obtaining the webhook URI</p></figcaption></figure>

#### The webhook URL

The webhook URL will look something like:

_https://my.placeos.domain/api/engine/v2/webhook/trig-DHgkU1\~p/notify?secret=kfwu5WYc3a1su_

### Webhooks that map to module functions

If this webhook is intended to provide data to modules in the system, not just as a condition to execute the trigger actions, then it needs a little more configuration.

1. in the System trigger list, click the edit button
2. ensure execute enabled is selected
3. click save

<figure><img src="../../.gitbook/assets/image (1) (2) (1).png" alt=""><figcaption><p>Enabling webhook to execute module webhook methods</p></figcaption></figure>

You will have to be aware of the methods that support Webhooks, which might involve looking at the driver code or driver documentation. Examples of webhook methods

* [Meraki Dashboard](https://github.com/PlaceOS/drivers/blob/86dc9ee65818e392fac5311abd45fce5bbbf872e/drivers/cisco/meraki/dashboard.cr#L166)
* [Rhombus Interop](https://github.com/PlaceOS/drivers/blob/03b469976699efa83ead9839348efef6b4bcff94/drivers/rhombus/security\_interop.cr#L31)

To build the execute URL you'll need the following information:

* Module name, i.e. _Display_
* Module index, i.e. 1, 2, 3 (_Display\_2_ is index 2)
* Module method name: i.e. _request_

Then you can update the Webhook URL from above with this information

/api/engine/v2/webhook/trig-DHgkU1\~p/notify?secret=kfwu5WYc3a1suZ**\&exec=true\&mod=**_**Display**_**\&index=**_**2**_**\&method=**_**request**_

An alternative form of this URL is (note that the secret is part of the route)

/api/engine/v2/webhook/trig-DHgkU1\~p/notify/kfwu5WYc3a1suZ/_**Display/2/request**_

This URL can then be used to pass HTTP data to the module and should be provided to the service that uses websockets.
