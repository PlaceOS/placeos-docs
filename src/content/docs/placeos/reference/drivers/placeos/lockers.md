---
title: PlaceOS Lockers Driver
description: Programmatically interacting with locker systems via the Lockers interface
---

# Lockers

PlaceOS provides an interface to locker systems to simplify interactions and allow code reuse.

NOTE::

* it's recommended to use users SSO email addresses as the `user_id` this includes `owner_id` and `share_with` parameters
* an example implementation of the lockers interface include [Vecos Releezme](https://github.com/PlaceOS/drivers/blob/master/drivers/vecos/releezme\_locations.cr)
* abstract methods should implement security protections and not be used directly by frontends\
  the [public methods](https://github.com/PlaceOS/driver/blob/master/src/placeos-driver/interface/lockers.cr#L100-L161) are provided by the interface for user interfaces

### Interface Overview

All drivers implementing the Lockers Interface need to implement the [following functions](https://github.com/PlaceOS/driver/blob/master/src/placeos-driver/interface/lockers.cr):

#### locker\_allocate

This allocates a locker to the specified user, without delay.\
If the locker system supports it you can specify an expiry time.

#### locker\_release

This returns the locker to the pool of available lockers.

#### lockers\_allocated\_to

This lists the lockers allocated to the user specified

#### locker\_share

Shares an allocated locker with another user

#### locker\_unshare

Unshares an allocated locker from an individual or all users that a locker had been shared with

#### locker\_shared\_with

This lists the users that have shared access to the locker, returning a list of PlaceOS ids that are preferred by the system. Typically a user emails.

#### locker\_unlock

unlocks a locker, can accept a pin as a check to confirm the user has access
