---
title: System Functionality & Requirements
sidebar_label: System Functionality
description: Reference for functional requirements for a system implementing PlaceOS
---

# System Functionality & Requirements

Below is a list of high level functions that PlaceOS is capable of and the technical requirements for each.

### Log in with SSO

Users can log on using existing enterprise credentials. They do not need to “sign up” nor remember a new user account/password.

**Requirement**\
Integration with enterprise identity providers via SAML2 or OAuth2. Examples:

* Azure AD Enterprise Application
* AD FS
* Google Workspace (GSuite) authentication

### Book Rooms

PlaceOS web apps are able to search and book room & user Calendars from the enterprise directory. Enterprise directories include Office 365, Exchange Online, Google Workspace (GSuite) etc.

**Requirement**\
Office 365/Exchange Online or Google Calendar:

* Integration with Microsoft Graph API via an Azure “Registered App”
* All required Calendars and Users must be accessible via MS Graph API _or_ Google Calendar API if users are on GSuitexs

### Show or use sensor data

PlaceOS web apps or analytics are able to show or track live sensor data, such as:

* Desk occupancy
* In-room people count
* Air quality

**Requirement**

* Compatible PlaceOS Driver for the integration (device/service)
* Network connectivity to the Cisco DNA Spaces integration or its gateway

### Control devices

PlaceOS web apps or automations are able to send messages to edge devices over the network. These can control integrations or receive live status information.

**Requirement**

* Compatible PlaceOS Driver for the integration (device/service)
* Network connectivity to the integration or its gateway

### Locate Devices

If a user's device (such as phone or laptop) is online, PlaceOS will be able to locate it within the building. This infers a user's location and the distribution/density of people.

**Requirement**\
Locations services such as:

* Cisco DNA Spaces
* Cisco Meraki RTLS
* HP Aruba
* Juniper Mist
* RUCKUS SPoT

### Analytics for connected integrations

PlaceOS provides live and retrospective data for all connected integrations. An analytics dashboard enables insights.

**Requirement**\
PlaceAnalytics API

### Network Connectivity, WAN Access & Ports

PlaceOS Frontend Applications require Ports 80 and 443. 443 is preferred for all data in transit.

All cloud services integration via API require Port 443.

Integration with Audio Visual and other Bespoke hardware may require additional ports, these will be scoped in the solution design.&#x20;

The PlaceOS Servers will require access to https://github.com for routine code updates and frontend deployments. PlaceOS connects to Github via the SSH Protocol.&#x20;
