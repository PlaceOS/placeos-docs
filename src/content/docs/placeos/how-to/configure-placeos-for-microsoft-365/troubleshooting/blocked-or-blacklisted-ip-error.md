---
title: "Blocked or Blacklisted IP Error"
---

# Blocked or Blacklisted IP Error

## Issue

An issue may arise where users receive an email from Microsoft when attempting to book a room via PlaceOS that states the email was undeliverable to the destination, noting the sender and receiver are both in the same domain.

The specific error:

```
Diagnostic information for administrators:

Generating server: SEZPR02MB5759.apcprd02.prod.outlook.com

LON-M01.01@l6yy.onmicrosoft.com
Remote Server returned '550 5.7.501 Service unavailable. Spam abuse detected from IP range. For more information please go to http://go.microsoft.com/fwlink/?LinkId=526653. S(2017052602) [SI2PR02MB5562.apcprd02.prod.outlook.com]'

Original message headers:

Received: from SEZPR02MB5759.apcprd02.prod.outlook.com
 ([fe80::2859:6314:4b05:dd7b]) by SEZPR02MB5759.apcprd02.prod.outlook.com
 ([fe80::2859:6314:4b05:dd7b%2]) with mapi id 15.20.5395.021; Tue, 5 Jul 2022
 00:37:40 +0000
MIME-Version: 1.0
Content-Type: text/plain
Date: Tue, 5 Jul 2022 00:37:40 +0000
Message-ID:
	<SEZPR02MB5759F90749FCD41572767AE8C3819@SEZPR02MB5759.apcprd02.prod.outlook.com>
Subject: test
```

## Root Cause

This is caused by API Spam from the PlaceOS application to the Microsoft 365 via the Graph API Endpoint.

This condition is triggered where PlaceOS drivers are set to a running state against your tenant prior to correct configuration and API access been granted.

PlaceOS drivers related to Microsoft Graph API including the Microsoft Graph API, Staff API, Calendar Driver and Bookings Driver should not be put into an active state until configuration of Microsoft Graph API is complete.

## Resolution

1. Navigate to the Exchange Admin Centre
2. Click Support
3. Raise a new Support Request
4. Advice you have received an error that email is undelivered due to spam blacklist.
5. A Microsoft agent will contact you and run a diagnostic tool that will resolve the issue typically within an hour.&#x20;
