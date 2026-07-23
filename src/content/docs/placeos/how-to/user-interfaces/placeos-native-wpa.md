---
title: "Native Workplace App"
description: >-
  The PlaceOS Native Workplace is a native replacement for the Workplace Web App, offering Intune Enrolment and HID Origo Integration.
---

## Microsoft Intune / Managed App

The PlaceOS Native Workplace app is a MAM-WE (App Manaement Without Enrollment), designed to support BYOD Devices in a managed Microsoft Environment.

The users personal device is never enrolled in the MDM; only data presented within the app is governed by Intune Policies.

For this to work, the end user must install the relevant Microsoft broker app on their device and sign in with their work Microsoft 365 Account:
**- iOS:** install Microsoft Authenticator app.
**- Android:** install Intune Company Portal (installed only - device does not need to be enrolled)

The broker app is what allows Microsoft Entra to confirm the app is protected. It is a foundational requirement of Microsoft MAM and cannot be removed, but installing it does **not** enrol the device or give the organisation control over it.

Note: during sign-in, the consent screen may show the app as "PlaceOS Native WPA - unverified". This is expected behaviour and is safe to approve.

### Microsoft Intune Admin

For the app to work, the Intune admin must complete all of the following.

1. Target the app with an App Protection Policy (APP). Intune admin center → Apps → App protection policies → open the iOS and the Android policy → add PlaceOS Native WPA to the targeted apps. If it is not in the built-in list, add it as a custom/unlisted app by bundle id com.placeos.wpa. This is what lets the app satisfy "require app protection policy."
2. Assign the policy to users. In the same policy, open the Assignments tab and assign it to the user group(s) who will use the app. A policy that targets the app but is assigned to no one has no effect.
3. Set the Conditional Access grant to "Require app protection policy." Configure this for the resource the app calls. Once steps 1–2 are in place, this is the grant the brokered sign-in passes.

Do not use "Require approved client app." That control only works with apps on Microsoft's built-in approved-apps list and will block a custom app like this one. Microsoft is also retiring it in favour of "Require app protection policy."

### Microsoft Entra ID Admin

For the app to work, the Entra ID admin must complete one of the following. The app's Enterprise Application entry appears in the tenant only after the first sign-in attempt, so have a user attempt sign-in once first.

A. One-time admin-consent URL (grants org-wide, cleanest). Replace {tenant-id} with your tenant ID, open the link, sign in, and click Accept:
`https://login.microsoftonline.com/{tenant-id}/adminconsent?client_id=dfc36464-a3ef-475a-a272-333a9c6b701d&redirect_uri=msauth.com.placeos.wpa://auth`

B. Azure Portal → Enterprise Applications → PlaceOS Native WPA → Permissions → Grant admin consent for <tenant>.

C. Entra admin center → Identity → Applications → Enterprise applications → Admin consent requests → approve the outstanding request.

Options A and B grant consent tenant-wide and are the most reliable. Option C may only approve individual requests depending on your configuration.
