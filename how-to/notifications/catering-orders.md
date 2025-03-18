---
title: Catering Orders
sidebar_position: 1
description: Catering Order Notifications
---

# Catering Orders

Catering orders are linked bookings with a type of `catering-order`.
Any driver that operates on bookings with a configurable `booking_type` can be used for catering bookings.



## Examples



### Booking Approver

The `place/booking_approver` driver can be used to auto approve catering orders with this configuration.

```
approve_booking_types:
	- catering-order

approve_zones:
	- building-zone-id
```



### Booking Notifier

The `place/booking_notifier` driver can be configured to send notifications for catering orders to a specific email address like this.

```
booking_type: catering-order
unique_templates: true
notify:
	building-zone-id:
		name: Building Name
		email:
			- notify@example.com
		notify_manager: false
		notify_booking_owner: false
```

Setting `notify_booking_owner` to `true` will send the notifications to the booking creator.

To send cancellation notifications a template must be created for the `bookings.cancelled_catering-order` trigger.

