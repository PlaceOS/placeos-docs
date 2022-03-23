---
title: Bookings Driver
description: How to Configure the Bookings Driver on PlaceOS
---

# Bookings Driver

The primary purpose of the Bookings Driver is to enable room booking panels, kiosks and space maps.

Best practice is to add the Bookings Driver to every system on PlaceOS that supports room booking.

## Prerequisites

* Administrator access to your PlaceOS Backoffice
* PlaceOS Drivers Repository Configured in Backoffice
* Systems have a valid calendar resource address from Microsoft 365 or Google Workspace

## Add Driver

Before we can use the PlaceOS Bookings Driver we must instantiate it as a driver.

1. Navigate to the Drivers tab
2. Click the `+` icon to add a new driver
3. Select `PlaceOS Drivers` Repository
4. Select the `drivers > place > bookings.cr` Driver Base
5. Select the latest commit
6. Click Save\
   ![Add Bookings Driver](assets/add-bookings-driver.png)

## Add to Systems

You need to instantiate a single instance of the PlaceOS Bookings Driver in each system that has a bookable space.

1. Navigate to a bookable system
2. Select the `Modules` tab
3. Click `Add New`
4.  Select `PlaceOS Bookings`

    &#x20;![Add Bookings Driver to System](assets/bookings-to-system.png)
5.  Click Save

    &#x20;![Save Bookings Driver](assets/save-bookings.png)
6. Click the Black Dot next to the Module to start it

## Test Module

You can test by creating a booking and inspecting the state of the Bookings Driver.

Inspecting the state will return a JSON response of all bookings for that systems calendar resource.

In the example below, you will see a positive response with a calendar booking.

![Bookings State](assets/bookings-view-state.png)

## Status Variables

| Status            | Values                    | Function                                                                                                                             |
| ----------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `booked`          | (Bool)                    | `true` when there is a current (start time < current time < end time)                                                                |
| `next_pending`    | (Bool)                    | `true` from `pending_before` mins before an event start time or until `checkin` is executed.                                         |
| `current_pending` | (Bool)                    | `true` from the event start time til `pending_period` mins after the event start time or until `checkin` is executed.                |
| `pending`         | (Bool)                    | `true` when either current\_pending or next\_pending is true                                                                         |
| `in_use`          | (Bool)                    | `true` when `booked` AND NOT `pending` (means that the current event has been checked in via `checkin` OR `start_meeting` functions) |
| `status`          | `free`, `pending`, `busy` |                                                                                                                                      |
|                   |                           |                                                                                                                                      |
|                   |                           |                                                                                                                                      |

## Settings

List of settings can be found in the driver source: [https://github.com/PlaceOS/drivers/blob/master/drivers/place/bookings.cr#L12](https://github.com/PlaceOS/drivers/blob/master/drivers/place/bookings.cr#L12)



| Setting               | Default Value |                                                                                                                                                                                                                   |
| --------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pending_period`      | `5` (mins)    | Number of minutes AFTER the Booking start time until the current event is truncated and `status` changes from `pending` to `free`                                                                                 |
| `pending_before`      | `5` (mins)    | Number of minutes before the Booking start time until the `status` changes from `free`  to `pending`                                                                                                              |
| `disable_end_meeting` | `false`       | Exposes a `disable_end_meeting` status variable such that frontends like PlaceOS template Bookings can detect it and enable/disable it's auto event cancellation functionality (frontend will exec `end_meeting`) |

### Example config

```
pending_before: 5,
pending_period: 0,
disable_end_meeting: false,
```

This will make `status` change to `pending` 5 mins before the booking start time. Then change to `busy` at the booking start time.

