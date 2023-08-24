---
title: PlacesOS Microsoft Graph API Driver
description: >-
  Communicates with the Microsoft Graph API to share information with Microsoft
  services
---

# Graph API

* Type: Service Driver
* Dependencies: None
* Source: https://github.com/PlaceOS/drivers/blob/master/drivers/microsoft/graph\_api.cr

## Functions

* Groups booking requests and sends them to the Microsoft calendar
* Manages calendar events, groups, and users through Microsoft Graph API
* Sends emails and notifies invited users
* Creates email templates for specified responses

## Settings

| Key                        | Type   | Default value                                                                                  | Description                                                                  |
| -------------------------- | ------ | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `calendar_service_account` | String | service\_account@email.address                                                                 | ---                                                                          |
| `calendar_config`          | Object | {tenant: "", client\_id: "", client\_secret: "", conference\_type: ""}                         | ---                                                                          |
| `rate_limit`               | ---    | 5                                                                                              | limits the number of API calls so it does not exceed limits set by Microsoft |
| `mailer_from`              | String | email\_or\_office\_userPrincipalName                                                           |                                                                              |
| `email_templates`          | Object | {visitor: {checkin: {subject: "%{name} has arrived", text: "for your meeting at %{time}", \}}} |                                                                              |

## Status Variables

### `connected`

Shows true if the driver is connected to the Microsoft Graph API and false if not

#### Schema/Type

Boolean

#### Examples

**1. If connected to Microsoft Graph API**

```
{
"connected": true 
}
```

## Commands

### `queue_size`

Displays the number of API calls waiting in the queue to be sent to Microsoft Graph API

#### Parameters

| Name | Required? | Type | Default | Description |
| ---- | --------- | ---- | ------- | ----------- |
| None |           |      |         |             |

#### Response Schema

```
```

#### Example Responses

**1. If no calls waiting in the queue:**

```
0
```

### `in_flight_size`

Displays the number of API calls to Microsoft Graph API currently in progress

#### Parameters

| Name | Required? | Type | Default | Description |
| ---- | --------- | ---- | ------- | ----------- |
| None |           |      |         |             |

#### Response Schema

```
```

#### Example Responses

**1. If no calls in progress:**

```
0
```

### `generate_svg_qrcode`

Generates an SVG of a QR code which encodes the given text.

#### Parameters

| Name | Required? | Type   | Default | Description                                     |
| ---- | --------- | ------ | ------- | ----------------------------------------------- |
| text | true      | String | N/A     | The text the user wishes to turn into a QR code |

#### Response Schema

```
```

#### Example Responses

**1.**

```
<?xml version="1.0" standalone="yes"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events" width="231" height="231" shape-rendering="crispEdges">
<rect width="231" height="231" x="0" y="0" style="fill:#fff"/>
<rect width="11" height="11" x="0" y="0" style="fill:#000"/><rect width="11" height="11" x="11" y="0" style="fill:#000"/><rect width="11" height="11" x="22" y="0" style="fill:#000"/><rect width="11" height="11" x="33" y="0" style="fill:#000"/><rect width="11" height="11" x="44" y="0" style="fill:#000"/><rect width="11" height="11" x="55" y="0" style="fill:#000"/><rect width="11" height="11" x="66" y="0" style="fill:#000"/><rect width="11" height="11" x="88" y="0" style="fill:#000"/><rect width="11" height="11" x="132" y="0" style="fill:#000"/><rect width="11" height="11" x="154" y="0" style="fill:#000"/><rect width="11" height="11" x="165" y="0" style="fill:#000"/><rect width="11" height="11" x="176" y="0" style="fill:#000"/><rect width="11" height="11" x="187" y="0" style="fill:#000"/><rect width="11" height="11" x="198" y="0" style="fill:#000"/><rect width="11" height="11" x="209" y="0" style="fill:#000"/><rect width="11" height="11" x="220" y="0" style="fill:#000"/>
<rect width="11" height="11" x="0" y="11" style="fill:#000"/><rect width="11" height="11" x="66" y="11" style="fill:#000"/><rect width="11" height="11" x="99" y="11" style="fill:#000"/><rect width="11" height="11" x="110" y="11" style="fill:#000"/><rect width="11" height="11" x="121" y="11" style="fill:#000"/><rect width="11" height="11" x="132" y="11" style="fill:#000"/><rect width="11" height="11" x="154" y="11" style="fill:#000"/><rect width="11" height="11" x="220" y="11" style="fill:#000"/>
<rect width="11" height="11" x="0" y="22" style="fill:#000"/><rect width="11" height="11" x="22" y="22" style="fill:#000"/><rect width="11" height="11" x="33" y="22" style="fill:#000"/><rect width="11" height="11" x="44" y="22" style="fill:#000"/><rect width="11" height="11" x="66" y="22" style="fill:#000"/><rect width="11" height="11" x="88" y="22" style="fill:#000"/><rect width="11" height="11" x="99" y="22" style="fill:#000"/><rect width="11" height="11" x="121" y="22" style="fill:#000"/><rect width="11" height="11" x="132" y="22" style="fill:#000"/><rect width="11" height="11" x="154" y="22" style="fill:#000"/><rect width="11" height="11" x="176" y="22" style="fill:#000"/><rect width="11" height="11" x="187" y="22" style="fill:#000"/><rect width="11" height="11" x="198" y="22" style="fill:#000"/><rect width="11" height="11" x="220" y="22" style="fill:#000"/>
<rect width="11" height="11" x="0" y="33" style="fill:#000"/><rect width="11" height="11" x="22" y="33" style="fill:#000"/><rect width="11" height="11" x="33" y="33" style="fill:#000"/><rect width="11" height="11" x="44" y="33" style="fill:#000"/><rect width="11" height="11" x="66" y="33" style="fill:#000"/><rect width="11" height="11" x="110" y="33" style="fill:#000"/><rect width="11" height="11" x="121" y="33" style="fill:#000"/><rect width="11" height="11" x="154" y="33" style="fill:#000"/><rect width="11" height="11" x="176" y="33" style="fill:#000"/><rect width="11" height="11" x="187" y="33" style="fill:#000"/><rect width="11" height="11" x="198" y="33" style="fill:#000"/><rect width="11" height="11" x="220" y="33" style="fill:#000"/>
<rect width="11" height="11" x="0" y="44" style="fill:#000"/><rect width="11" height="11" x="22" y="44" style="fill:#000"/><rect width="11" height="11" x="33" y="44" style="fill:#000"/><rect width="11" height="11" x="44" y="44" style="fill:#000"/><rect width="11" height="11" x="66" y="44" style="fill:#000"/><rect width="11" height="11" x="88" y="44" style="fill:#000"/><rect width="11" height="11" x="99" y="44" style="fill:#000"/><rect width="11" height="11" x="121" y="44" style="fill:#000"/><rect width="11" height="11" x="154" y="44" style="fill:#000"/><rect width="11" height="11" x="176" y="44" style="fill:#000"/><rect width="11" height="11" x="187" y="44" style="fill:#000"/><rect width="11" height="11" x="198" y="44" style="fill:#000"/><rect width="11" height="11" x="220" y="44" style="fill:#000"/>
<rect width="11" height="11" x="0" y="55" style="fill:#000"/><rect width="11" height="11" x="66" y="55" style="fill:#000"/><rect width="11" height="11" x="99" y="55" style="fill:#000"/><rect width="11" height="11" x="132" y="55" style="fill:#000"/><rect width="11" height="11" x="154" y="55" style="fill:#000"/><rect width="11" height="11" x="220" y="55" style="fill:#000"/>
<rect width="11" height="11" x="0" y="66" style="fill:#000"/><rect width="11" height="11" x="11" y="66" style="fill:#000"/><rect width="11" height="11" x="22" y="66" style="fill:#000"/><rect width="11" height="11" x="33" y="66" style="fill:#000"/><rect width="11" height="11" x="44" y="66" style="fill:#000"/><rect width="11" height="11" x="55" y="66" style="fill:#000"/><rect width="11" height="11" x="66" y="66" style="fill:#000"/><rect width="11" height="11" x="88" y="66" style="fill:#000"/><rect width="11" height="11" x="110" y="66" style="fill:#000"/><rect width="11" height="11" x="132" y="66" style="fill:#000"/><rect width="11" height="11" x="154" y="66" style="fill:#000"/><rect width="11" height="11" x="165" y="66" style="fill:#000"/><rect width="11" height="11" x="176" y="66" style="fill:#000"/><rect width="11" height="11" x="187" y="66" style="fill:#000"/><rect width="11" height="11" x="198" y="66" style="fill:#000"/><rect width="11" height="11" x="209" y="66" style="fill:#000"/><rect width="11" height="11" x="220" y="66" style="fill:#000"/>
<rect width="11" height="11" x="88" y="77" style="fill:#000"/><rect width="11" height="11" x="99" y="77" style="fill:#000"/><rect width="11" height="11" x="110" y="77" style="fill:#000"/><rect width="11" height="11" x="132" y="77" style="fill:#000"/>
<rect width="11" height="11" x="55" y="88" style="fill:#000"/><rect width="11" height="11" x="66" y="88" style="fill:#000"/><rect width="11" height="11" x="132" y="88" style="fill:#000"/><rect width="11" height="11" x="154" y="88" style="fill:#000"/><rect width="11" height="11" x="176" y="88" style="fill:#000"/><rect width="11" height="11" x="198" y="88" style="fill:#000"/><rect width="11" height="11" x="220" y="88" style="fill:#000"/>
<rect width="11" height="11" x="0" y="99" style="fill:#000"/><rect width="11" height="11" x="11" y="99" style="fill:#000"/><rect width="11" height="11" x="22" y="99" style="fill:#000"/><rect width="11" height="11" x="33" y="99" style="fill:#000"/><rect width="11" height="11" x="88" y="99" style="fill:#000"/><rect width="11" height="11" x="99" y="99" style="fill:#000"/><rect width="11" height="11" x="110" y="99" style="fill:#000"/><rect width="11" height="11" x="121" y="99" style="fill:#000"/><rect width="11" height="11" x="143" y="99" style="fill:#000"/><rect width="11" height="11" x="154" y="99" style="fill:#000"/><rect width="11" height="11" x="176" y="99" style="fill:#000"/><rect width="11" height="11" x="187" y="99" style="fill:#000"/><rect width="11" height="11" x="198" y="99" style="fill:#000"/>
<rect width="11" height="11" x="22" y="110" style="fill:#000"/><rect width="11" height="11" x="33" y="110" style="fill:#000"/><rect width="11" height="11" x="44" y="110" style="fill:#000"/><rect width="11" height="11" x="66" y="110" style="fill:#000"/><rect width="11" height="11" x="88" y="110" style="fill:#000"/><rect width="11" height="11" x="99" y="110" style="fill:#000"/><rect width="11" height="11" x="121" y="110" style="fill:#000"/><rect width="11" height="11" x="132" y="110" style="fill:#000"/><rect width="11" height="11" x="143" y="110" style="fill:#000"/><rect width="11" height="11" x="176" y="110" style="fill:#000"/><rect width="11" height="11" x="187" y="110" style="fill:#000"/><rect width="11" height="11" x="198" y="110" style="fill:#000"/><rect width="11" height="11" x="209" y="110" style="fill:#000"/>
<rect width="11" height="11" x="33" y="121" style="fill:#000"/><rect width="11" height="11" x="55" y="121" style="fill:#000"/><rect width="11" height="11" x="121" y="121" style="fill:#000"/><rect width="11" height="11" x="176" y="121" style="fill:#000"/><rect width="11" height="11" x="187" y="121" style="fill:#000"/><rect width="11" height="11" x="198" y="121" style="fill:#000"/>
<rect width="11" height="11" x="22" y="132" style="fill:#000"/><rect width="11" height="11" x="66" y="132" style="fill:#000"/><rect width="11" height="11" x="88" y="132" style="fill:#000"/><rect width="11" height="11" x="110" y="132" style="fill:#000"/><rect width="11" height="11" x="121" y="132" style="fill:#000"/><rect width="11" height="11" x="143" y="132" style="fill:#000"/><rect width="11" height="11" x="154" y="132" style="fill:#000"/><rect width="11" height="11" x="220" y="132" style="fill:#000"/>
<rect width="11" height="11" x="88" y="143" style="fill:#000"/><rect width="11" height="11" x="110" y="143" style="fill:#000"/><rect width="11" height="11" x="154" y="143" style="fill:#000"/><rect width="11" height="11" x="165" y="143" style="fill:#000"/><rect width="11" height="11" x="198" y="143" style="fill:#000"/><rect width="11" height="11" x="209" y="143" style="fill:#000"/>
<rect width="11" height="11" x="0" y="154" style="fill:#000"/><rect width="11" height="11" x="11" y="154" style="fill:#000"/><rect width="11" height="11" x="22" y="154" style="fill:#000"/><rect width="11" height="11" x="33" y="154" style="fill:#000"/><rect width="11" height="11" x="44" y="154" style="fill:#000"/><rect width="11" height="11" x="55" y="154" style="fill:#000"/><rect width="11" height="11" x="66" y="154" style="fill:#000"/><rect width="11" height="11" x="110" y="154" style="fill:#000"/><rect width="11" height="11" x="154" y="154" style="fill:#000"/><rect width="11" height="11" x="165" y="154" style="fill:#000"/><rect width="11" height="11" x="187" y="154" style="fill:#000"/><rect width="11" height="11" x="209" y="154" style="fill:#000"/>
<rect width="11" height="11" x="0" y="165" style="fill:#000"/><rect width="11" height="11" x="66" y="165" style="fill:#000"/><rect width="11" height="11" x="88" y="165" style="fill:#000"/><rect width="11" height="11" x="99" y="165" style="fill:#000"/><rect width="11" height="11" x="121" y="165" style="fill:#000"/><rect width="11" height="11" x="132" y="165" style="fill:#000"/><rect width="11" height="11" x="143" y="165" style="fill:#000"/><rect width="11" height="11" x="165" y="165" style="fill:#000"/><rect width="11" height="11" x="176" y="165" style="fill:#000"/><rect width="11" height="11" x="187" y="165" style="fill:#000"/><rect width="11" height="11" x="198" y="165" style="fill:#000"/><rect width="11" height="11" x="220" y="165" style="fill:#000"/>
<rect width="11" height="11" x="0" y="176" style="fill:#000"/><rect width="11" height="11" x="22" y="176" style="fill:#000"/><rect width="11" height="11" x="33" y="176" style="fill:#000"/><rect width="11" height="11" x="44" y="176" style="fill:#000"/><rect width="11" height="11" x="66" y="176" style="fill:#000"/><rect width="11" height="11" x="110" y="176" style="fill:#000"/><rect width="11" height="11" x="143" y="176" style="fill:#000"/><rect width="11" height="11" x="165" y="176" style="fill:#000"/><rect width="11" height="11" x="187" y="176" style="fill:#000"/><rect width="11" height="11" x="209" y="176" style="fill:#000"/>
<rect width="11" height="11" x="0" y="187" style="fill:#000"/><rect width="11" height="11" x="22" y="187" style="fill:#000"/><rect width="11" height="11" x="33" y="187" style="fill:#000"/><rect width="11" height="11" x="44" y="187" style="fill:#000"/><rect width="11" height="11" x="66" y="187" style="fill:#000"/><rect width="11" height="11" x="99" y="187" style="fill:#000"/><rect width="11" height="11" x="110" y="187" style="fill:#000"/><rect width="11" height="11" x="121" y="187" style="fill:#000"/><rect width="11" height="11" x="143" y="187" style="fill:#000"/><rect width="11" height="11" x="154" y="187" style="fill:#000"/><rect width="11" height="11" x="187" y="187" style="fill:#000"/><rect width="11" height="11" x="198" y="187" style="fill:#000"/>
<rect width="11" height="11" x="0" y="198" style="fill:#000"/><rect width="11" height="11" x="22" y="198" style="fill:#000"/><rect width="11" height="11" x="33" y="198" style="fill:#000"/><rect width="11" height="11" x="44" y="198" style="fill:#000"/><rect width="11" height="11" x="66" y="198" style="fill:#000"/><rect width="11" height="11" x="99" y="198" style="fill:#000"/><rect width="11" height="11" x="132" y="198" style="fill:#000"/><rect width="11" height="11" x="143" y="198" style="fill:#000"/><rect width="11" height="11" x="187" y="198" style="fill:#000"/><rect width="11" height="11" x="198" y="198" style="fill:#000"/><rect width="11" height="11" x="209" y="198" style="fill:#000"/><rect width="11" height="11" x="220" y="198" style="fill:#000"/>
<rect width="11" height="11" x="0" y="209" style="fill:#000"/><rect width="11" height="11" x="66" y="209" style="fill:#000"/><rect width="11" height="11" x="99" y="209" style="fill:#000"/><rect width="11" height="11" x="110" y="209" style="fill:#000"/><rect width="11" height="11" x="132" y="209" style="fill:#000"/><rect width="11" height="11" x="143" y="209" style="fill:#000"/><rect width="11" height="11" x="154" y="209" style="fill:#000"/><rect width="11" height="11" x="176" y="209" style="fill:#000"/><rect width="11" height="11" x="198" y="209" style="fill:#000"/>
<rect width="11" height="11" x="0" y="220" style="fill:#000"/><rect width="11" height="11" x="11" y="220" style="fill:#000"/><rect width="11" height="11" x="22" y="220" style="fill:#000"/><rect width="11" height="11" x="33" y="220" style="fill:#000"/><rect width="11" height="11" x="44" y="220" style="fill:#000"/><rect width="11" height="11" x="55" y="220" style="fill:#000"/><rect width="11" height="11" x="66" y="220" style="fill:#000"/><rect width="11" height="11" x="99" y="220" style="fill:#000"/><rect width="11" height="11" x="121" y="220" style="fill:#000"/><rect width="11" height="11" x="132" y="220" style="fill:#000"/><rect width="11" height="11" x="154" y="220" style="fill:#000"/><rect width="11" height="11" x="176" y="220" style="fill:#000"/><rect width="11" height="11" x="198" y="220" style="fill:#000"/><rect width="11" height="11" x="209" y="220" style="fill:#000"/>
</svg>
```

### `generate_png_qrcode`

Generates the code for a PNG version of a QR code which encodes the text provided at the specified size.

#### Parameters

| Name | Required? | Type   | Default | Description                                     |
| ---- | --------- | ------ | ------- | ----------------------------------------------- |
| text | true      | String | N/A     | The text the user wishes to turn into a QR code |
| size | false     | Int32  | 128     | The size of the image the user wants to create  |

#### Response Schema

```
```

#### Example Responses

**1. For the word "Test" at size 100:**

```
iVBORw0KGgoAAAANSUhEUgAAAGQAAABkEAYAAAAgckkXAAADrklEQVR4nO2TMZLkMAzE5v+fvqvaumSCpcfnpgl6gESJioJI9uuPiPzKa1pAhIwBESkwICIFBkSkwICIFBgQkQIDIlJgQEQKDIhIgQERKTAgIgUGRKTAgIgUGBCRAgMiUmBARAoMiEgBLiCvH/jnWf/u/jy1n9Pg1KYHdXWg3QuQ8qGdVHBq04O6OtDuBUj50E4qODVaA1M+Uwv21H7eBU6N1kADkoXmcwROjdZAA5KF5nMETi21AFML1v0uzb/bZxqc2vaBdr9L8+/2mQantn2g3e/S/Lt9psGpfdtAU54p/+39TINT+7aBpjxT/tv7mQan9m0DTXmm/Lf3Mw1ObftAaYu0vZ/T4NS2D5S2SNv7OQ1ObftAaYu0vZ/T4NRoDZxa1FSdp/bzLnBqtAYakCw0nyNwarQGGpAsNJ8jcGq/NZB2nvWn3aedVHBq04O6OtAt92knFZza9KCuDnTLfdpJBay2k+6F2bZg27G1YQzIs7C1YQzIs7C1/0gt8JTnU+9PA1a7FwPCvD8NWO1eDAjz/jQ4tbOLSlvsKf+pOlN9vgvcV6YWbLv/VJ2pPt8F7itTC7bdf6rOVJ/vYv1XphYv5TP1r+53Uz7TLFR+p3twqfvddVILmXo35TPNQuV3ugeXut9dJ7WQqXdTPtMsVP6M1EJOMeXzrUH4jQd95R0Dkn3XgDwMA5J914AspXtA3UFLLd6WBab5HAFW+wwDkq3TDc3nCLDaZxiQbJ1uaD5HgNV20h2olE/q3S3B/F8WKrMxIAZECgyIAWnlbMOnzu7/dtc/+273fSo45enFv7pIqf921z/7bvd9Kjjl6cW/ukip/3bXP/tu930qOGVaY1OL0V1nqn7qXSo4NVoDuxcvVWeqfupdKjg1WgO7Fy9VZ6p+6l0qOLUtizT131Qd2n0qOGUDYkBI4JQNiAEhgVN+akCmPKf8nwLuK92Lkaqf+le355T/U8B9pXsxUvVT/+r2nPJ/CrivdC9Gqn73v1L/TZHqc7dnGpxaaoFTA0oNtLtO9+Kl+tztmQanllrg1IBSA+2u0714qT53e6bBqdEaSFvs7oXsvr8N3FdoDTcgBgQFreEGxICgSC1A95n6V6oP3e92e1LBKXctdPpM/SvVh+53uz2p4JS7Fjp9pv6V6kP3u92eVBYqi9yHAREpMCAiBQZEpMCAiBQYEJECAyJSYEBECgyISIEBESkwICIFBkSkwICIFBgQkQIDIlJgQEQKDIhIgQERKTAgIgV/AVWCRjmiRazdAAAAAElFTkSuQmCC
```

### `send_mail`

Sends an email to any email address NOTE - ONE of message\_plaintext OR message\_html IS required.

Security Level: Support

#### Parameters

| Name                  | Required? | Type                           | Default | Description                                                  |
| --------------------- | --------- | ------------------------------ | ------- | ------------------------------------------------------------ |
| to                    | true      | String OR Array(String)        | N/A     | the destation of the email                                   |
| subject               | true      | String                         | N/A     | The subject line of the email                                |
| message\_plaintext    | false     | String                         | nil     | The message body of the email                                |
| message\_html         | false     | String                         | nil     | The message body of the email that will be displayed as HTML |
| resource\_attachments | false     | Array(ResourceAttachment)      | \[]     | Array of objects to be attached to the email                 |
| cc                    | false     | String OR Array(String)        | \[]     | ---                                                          |
| bcc                   | false     | String OR Array(String)        | \[]     | ---                                                          |
| from                  | false     | String Or Array(String) Or Nil | nil     | ---                                                          |

#### Response Schema

```
```

#### Example Responses

**1. If the email is not registered to a user**

```
{
    "error": "request failed",
    "sys_id": "sys-E7A7jh9V4U",
    "module_name": "Calendar",
    "index": 1,
    "message": "module raised: \"email_or_office_userPrincipalName\" is invalid as a mail address. (EMail::Error::AddressError)",
    "backtrace": [
        "repositories/drivers/lib/email/src/email/address.cr:16:5 in 'valid_address!'",
        "repositories/drivers/lib/email/src/email/address.cr:32:13 in 'initialize'",
        "repositories/drivers/lib/email/src/email/address.cr:31:3 in 'new'",
        "repositories/drivers/lib/email/src/email/header.cr:114:16 in 'add'",
        "repositories/drivers/lib/email/src/email/message.cr:415:3 in 'from'",
        "repositories/drivers/lib/place_calendar/src/google.cr:447:7 in 'send_mail'",
        "repositories/drivers/drivers/place/calendar_common.cr:142:14 in 'send_mail'",
        "repositories/drivers/drivers/place/calendar.cr:3:1 in '->'",
        "repositories/drivers/drivers/place/calendar.cr:3:1 in 'execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:164:5 in 'execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver.cr:522:1 in 'run_execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:262:24 in 'process'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:179:7 in '->'",
        "/usr/share/crystal/src/fiber.cr:146:11 in 'run'",
        "/usr/share/crystal/src/fiber.cr:98:34 in '->'",
        "???"
    ]
}
```

### `access_token`

Generates an access token for an admin to log in to Microsoft services as a given user.

Security Level: Admin

#### Parameters

| Name     | Required? | Type   | Default | Description                                           |
| -------- | --------- | ------ | ------- | ----------------------------------------------------- |
| user\_id | false     | String | nil     | email address of the user as registered in BackOffice |

#### Response Schema

```
```

#### Example Responses

**1. If user does not exist:**

```
{
    "error": "request failed",
    "sys_id": "sys-E7A7jh9V4U",
    "module_name": "Calendar",
    "index": 1,
    "message": "module raised: Bad Request\n{\n  \"error\": \"invalid_request\",\n  \"error_description\": \"Invalid impersonation \\u0026quot;sub\\u0026quot; field: H84U9JLbocG\"\n} (Google::Exception)",
    "backtrace": [
        "repositories/drivers/lib/google/src/google.cr:25:9 in 'raise_on_failure'",
        "repositories/drivers/lib/google/src/auth/service_auth.cr:50:7 in 'get_token'",
        "repositories/drivers/lib/place_calendar/src/google.cr:67:15 in 'access_token'",
        "repositories/drivers/lib/place_calendar/src/place_calendar.cr:23:5 in 'access_token'",
        "repositories/drivers/drivers/place/calendar_common.cr:158:14 in 'access_token'",
        "repositories/drivers/drivers/place/calendar.cr:3:1 in '->'",
        "repositories/drivers/drivers/place/calendar.cr:3:1 in 'execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:164:5 in 'execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver.cr:522:1 in 'run_execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:262:24 in 'process'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:179:7 in '->'",
        "/usr/share/crystal/src/fiber.cr:146:11 in 'run'",
        "/usr/share/crystal/src/fiber.cr:98:34 in '->'",
        "???"
    ]
}
```

**2. If user exists:**

```
{
    "expires": "2023-03-09T12:51:24Z",
    "token": "eyJ0eXAiOiJKV1QiLCJub25jZSI6IjhkXzJxRVMxb0hoWHFjV2h1cnh1RUlwNWVUQlBvM3A1SjVicTlpaTRxWm8iLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9lMTJkNDlhZi02YWRkLTRlNmQtODNiOS1hZTI4YWJhNmZhYmMvIiwiaWF0IjoxNjc4MzYyMzg1LCJuYwa3Q0ZDFxYlU2RHVhNG9xNmI2dkFNQUFBQUFBQUFBd0FBQUFBQUFBQUJCQUFBLiIsInJvbGVzIjpbIkRpcmVjdG9yeS5SZWFkV3JpdGUuQWxsIiwiQ29udGFjdHMuUmVhZFdyaXRlIiwiVXNlci5SZWFkLkFsbCIsIkNhbGVuZGFycy5SZWFkV3JpdGUiXSwic31uv58xYs4Ul7naaDPJZzDz49q5ZeukN-2qLAoHBP6wBa57Ms55rmFsaijTovYemVIzDpFBVltczZbTVkUSHb0vpbqB3GJAo5yO_qder_U5kugC48RLJxzxSnNZRnjLLbFLuA10uFDFkLJGb4sgQCPAjLvyYxcolu8bdnZYFalMY55-tF2nhEB0aHcCAszs4ikPMxsxXP7RoF8UjBQiYbLayGXhGMN8U_M7LlqRJMOmCd162wQsV31WnMeDSIFC7GQ"
}
```

### `get_groups`

Shows all the groups a given user belongs to.

Security Level: Support

#### Parameters

| Name     | Required? | Type   | Default | Description                         |
| -------- | --------- | ------ | ------- | ----------------------------------- |
| user\_id | false     | String | nil     | email address of the user to search |

#### Response Schema

```
[
{
"id": <the id of the group,
"name": <the name of the group>
}
]
```

#### Example Responses

**1. If the user exists and is a member of at least one group:**

```
[
    {
        "id": "668dsfd3c5-fcd4-4dc8-a6bb-335ewerfsb8c5",
        "name": "All Users"
    }
]
```

**2. If user does not exist:**

```
{
    "error": "request failed",
    "sys_id": "sys-E7A7jh9V4U",
    "module_name": "Calendar",
    "index": 1,
    "message": "module raised: Forbidden\n{\n  \"error\": {\n    \"code\": 403,\n    \"message\": \"Request had insufficient authentication scopes.\",\n    \"errors\": [\n      {\n        \"message\": \"Insufficient Permission\",\n        \"domain\": \"global\",\n        \"reason\": \"insufficientPermissions\"\n      }\n    ],\n    \"status\": \"PERMISSION_DENIED\",\n    \"details\": [\n      {\n        \"@type\": \"type.googleapis.com/google.rpc.ErrorInfo\",\n        \"reason\": \"ACCESS_TOKEN_SCOPE_INSUFFICIENT\",\n        \"domain\": \"googleapis.com\",\n        \"metadata\": {\n          \"service\": \"admin.googleapis.com\",\n          \"method\": \"ccc.hosted.frontend.directory.v1.DirectoryGroups.List\"\n        }\n      }\n    ]\n  }\n}\n (PlaceCalendar::Exception)",
    "backtrace": [
        "repositories/drivers/lib/place_calendar/src/google.cr:303:7 in 'handle_google_exception'",
        "repositories/drivers/lib/place_calendar/src/google.cr:94:7 in 'get_groups'",
        "repositories/drivers/lib/place_calendar/src/place_calendar.cr:23:5 in 'get_groups'",
        "repositories/drivers/drivers/place/calendar_common.cr:164:14 in 'get_groups'",
        "repositories/drivers/drivers/place/calendar.cr:3:1 in '->'",
        "repositories/drivers/drivers/place/calendar.cr:3:1 in 'execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:164:5 in 'execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver.cr:522:1 in 'run_execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:262:24 in 'process'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:179:7 in '->'",
        "/usr/share/crystal/src/fiber.cr:146:11 in 'run'",
        "/usr/share/crystal/src/fiber.cr:98:34 in '->'",
        "???"
    ]
}
```

### `get_members`

Shows all the members of a given group.

Security Level: Support

#### Parameters

| Name      | Required? | Type   | Default | Description                                                                   |
| --------- | --------- | ------ | ------- | ----------------------------------------------------------------------------- |
| group\_id | false     | String | nil     | The group ID - can be obtained by running get\_groups on a known group member |

#### Response Schema

```
```

#### Example Responses

**2. If group exisits:**

```
[
    {
        "id": "9ddsfs04e-ffa3-451f-93cb-dfhsfh74ac70",
        "name": "On-Premises Directory Synchronization Service Account",
        "email": "Sync_c7dfgdf2ae9c@company.onmicrosoft.com",
        "username": "Sync__c7dfgdf2ae9c@company.onmicrosoft.com"
    },
    {
        "id": "a7asdgf8b-ebc1-4843-8479-0ctgsdgfsb2d6",
        "name": "variant",
        "email": "variant@company.onmicrosoft.com",
        "username": "variant@company.com.au"
    }
```

**1. If group does not exist:**

```
{
    "error": "request failed",
    "sys_id": "sys-E7A7jh9V4U",
    "module_name": "Calendar",
    "index": 1,
    "message": "module raised: Forbidden\n{\n  \"error\": {\n    \"code\": 403,\n    \"message\": \"Request had insufficient authentication scopes.\",\n    \"errors\": [\n      {\n        \"message\": \"Insufficient Permission\",\n        \"domain\": \"global\",\n        \"reason\": \"insufficientPermissions\"\n      }\n    ],\n    \"status\": \"PERMISSION_DENIED\",\n    \"details\": [\n      {\n        \"@type\": \"type.googleapis.com/google.rpc.ErrorInfo\",\n        \"reason\": \"ACCESS_TOKEN_SCOPE_INSUFFICIENT\",\n        \"domain\": \"googleapis.com\",\n        \"metadata\": {\n          \"service\": \"admin.googleapis.com\",\n          \"method\": \"ccc.hosted.frontend.directory.v1.DirectoryMembers.List\"\n        }\n      }\n    ]\n  }\n}\n (PlaceCalendar::Exception)",
    "backtrace": [
        "repositories/drivers/lib/place_calendar/src/google.cr:303:7 in 'handle_google_exception'",
        "repositories/drivers/lib/place_calendar/src/google.cr:100:7 in 'get_members'",
        "repositories/drivers/lib/place_calendar/src/place_calendar.cr:23:5 in 'get_members'",
        "repositories/drivers/drivers/place/calendar_common.cr:170:14 in 'get_members'",
        "repositories/drivers/drivers/place/calendar.cr:3:1 in '->'",
        "repositories/drivers/drivers/place/calendar.cr:3:1 in 'execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:164:5 in 'execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver.cr:522:1 in 'run_execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:262:24 in 'process'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:179:7 in '->'",
        "/usr/share/crystal/src/fiber.cr:146:11 in 'run'",
        "/usr/share/crystal/src/fiber.cr:98:34 in '->'",
        "???"
    ]
}
```

### `list_users`

Lists all users if no paramaters are filled. Can be filtered by name.

Security Level: Support

#### Parameters

| Name  | Required? | Type   | Default | Description                                                       |
| ----- | --------- | ------ | ------- | ----------------------------------------------------------------- |
| query | false     | String | nil     | filters results whose "name" category contains the entered string |
| limit | false     | Int32  | nil     | Limits the number of results to the number entered                |

#### Response Schema

```
```

#### Example Responses

**1. If group does not exist:**

```
[
    {
        "id": "116847001215",
        "name": "Firstname Lastname",
        "email": "email@place.os"
    },
    {
        "id": "107849665",
        "name": "First Last",
        "email": "email1@place.os",
        "photo": "https://www.google.com/photos/private/AIbEiAIAAABDCIHpmpHo6cCzGUO0TUcpevl6e27"
    },
    {
        "id": "1017948066277",
        "name": "Given Last",
        "email": "email2@place.os",
        "department": "Department department",
        "title": "Department head",
        "photo": "https://www.google.com/photos/private/AIbEiAIAkS9j5GQ"
    }
  ]
```

### `get_user`

Searches for a user by their email. The user\_id is considered their email - this is different from what is returned in the results under "id".

Security Level: Support

#### Parameters

| Name     | Required? | Type   | Default | Description                  |
| -------- | --------- | ------ | ------- | ---------------------------- |
| user\_id | true      | String | N/A     | The user email to search for |

#### Response Schema

```
```

#### Example Responses

**2. If user exists:**

```
{
    "id": "85348a34-1c88-4ed6-9efd-92gefgddb2daa",
    "name": "ACA test",
    "email": "ACA.test@company.com.au",
    "username": "ACA.test@company.com.au"
}
```

**1. If user does not exist:**

```
{
    "error": "request failed",
    "sys_id": "sys-EJhU_4DEvQ",
    "module_name": "Calendar",
    "index": 1,
    "message": "module raised: Forbidden (PlaceCalendar::Exception)",
    "backtrace": [
        "repositories/drivers/lib/place_calendar/src/office365.cr:420:7 in 'handle_office365_exception'",
        "repositories/drivers/lib/place_calendar/src/office365.cr:85:7 in 'get_user'",
        "repositories/drivers/lib/place_calendar/src/office365.cr:93:9 in 'get_user_by_email'",
        "repositories/drivers/lib/place_calendar/src/place_calendar.cr:23:5 in 'get_user_by_email'",
        "repositories/drivers/drivers/place/calendar_common.cr:182:14 in 'get_user'",
        "repositories/drivers/drivers/microsoft/graph_api.cr:3:1 in '->'",
        "repositories/drivers/drivers/microsoft/graph_api.cr:3:1 in 'execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:164:5 in 'execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver.cr:522:1 in 'run_execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:262:24 in 'process'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:179:7 in '->'",
        "/usr/share/crystal/src/fiber.cr:146:11 in 'run'",
        "/usr/share/crystal/src/fiber.cr:98:34 in '->'",
        "???"
    ]
}
```

### `list_calendars`

Lists the calendars that belong to a user, specified by their email as registered in BackOffice.

Security Level: Support

#### Parameters

| Name     | Required? | Type   | Default | Description                                   |
| -------- | --------- | ------ | ------- | --------------------------------------------- |
| user\_id | true      | String | N/A     | The email of the user, as shown in BackOffice |

#### Response Schema

```
```

#### Example Responses

**2. If user exists:**

```
[
    {
        "id": "ACA.test@company.com.au",
        "ref": "AAkALgAAAAfdgdfmEc2byACqAC-EWg0ASuIL0BZ9OEGaBdfgdfgKM9wAAAAAhlgAA",
        "summary": "Calendar",
        "primary": true,
        "can_edit": true
    }
]
```

**1. If user does not exist:**

```
{
    "error": "request failed",
    "sys_id": "sys-EJhU_4DEvQ",
    "module_name": "Calendar",
    "index": 1,
    "message": "module raised: Not Found (PlaceCalendar::Exception)",
    "backtrace": [
        "repositories/drivers/lib/place_calendar/src/office365.cr:420:7 in 'handle_office365_exception'",
        "repositories/drivers/lib/place_calendar/src/office365.cr:138:7 in 'list_calendars'",
        "repositories/drivers/lib/place_calendar/src/place_calendar.cr:23:5 in 'list_calendars'",
        "repositories/drivers/drivers/place/calendar_common.cr:188:14 in 'list_calendars'",
        "repositories/drivers/drivers/microsoft/graph_api.cr:3:1 in '->'",
        "repositories/drivers/drivers/microsoft/graph_api.cr:3:1 in 'execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:164:5 in 'execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver.cr:522:1 in 'run_execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:262:24 in 'process'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:179:7 in '->'",
        "/usr/share/crystal/src/fiber.cr:146:11 in 'run'",
        "/usr/share/crystal/src/fiber.cr:98:34 in '->'",
        "???"
    ]
}
```

### `get_user_manager`

Gets the registered manager of a given user

Security Level: Support

#### Parameters

| Name     | Required? | Type   | Default | Description                     |
| -------- | --------- | ------ | ------- | ------------------------------- |
| user\_id | true      | String | N/A     | The email of the user to search |

#### Response Schema

```
```

#### Example Responses

**1. If user does not have a registered manager:**

```
{
    "error": "request failed",
    "sys_id": "sys-Ewmyx8wEF_",
    "module_name": "Calendar",
    "index": 1,
    "message": "module raised: Not Found (Office365::Exception)",
    "backtrace": [
        "repositories/drivers/lib/office365/src/client.cr:132:9 in 'graph_request'",
        "repositories/drivers/lib/office365/src/users.cr:39:22 in 'get_user_manager'",
        "repositories/drivers/drivers/place/calendar_common.cr:197:9 in 'get_user_manager'",
        "repositories/drivers/drivers/microsoft/graph_api.cr:3:1 in '->'",
        "repositories/drivers/drivers/microsoft/graph_api.cr:3:1 in 'execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:164:5 in 'execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver.cr:522:1 in 'run_execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:262:24 in 'process'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:179:7 in '->'",
        "/usr/share/crystal/src/fiber.cr:146:11 in 'run'",
        "/usr/share/crystal/src/fiber.cr:98:34 in '->'",
        "???"
    ]
}
```

### `list_groups`

Lists all groups if no parameters entered.

Security Level: Support

#### Parameters

| Name  | Required? | Type   | Default | Description                                                       |
| ----- | --------- | ------ | ------- | ----------------------------------------------------------------- |
| query | false     | String | nil     | filters search results by whether the query appears in the "name" |

#### Response Schema

```
```

#### Example Responses

**1.**

```
[
    {
        "id": "0013fdgd63-7bd8-4e8d-92d4-ea3dfgfg7d38",
        "name": "LaptopUsers-Brisbane"
    },
    {
        "id": "0dfgdfcd-dfg6-462d-aa86-8fcaf2dfgdfdf",
        "name": "UserAdmins",
        "description": "Members can manage users in this forest."
    },
    {
        "id": "00dfgfg3ae-9fdgd-4645-9dbc-a4172a4fdg8e",
        "name": "WebVPN"
    }
]
```

### `get_group`

Searches for a group by its group ID, as returned in the "id" section of list\_groups UNLIKE with get\_user

Security Level: Support

#### Parameters

| Name      | Required? | Type   | Default | Description                                                            |
| --------- | --------- | ------ | ------- | ---------------------------------------------------------------------- |
| group\_id | true      | String | N/A     | The group ID to use in the search - can be found by using list\_groups |

#### Response Schema

```
```

#### Example Responses

**1. If id is correct:**

```
{
    "id": "0sfdf6063-7bd8-4e8sdfd-92d4-ea3sdfd38",
    "name": "LaptopUsers-Brisbane"
}
```

**2. If group does not exist:**

```
{
    "error": "request failed",
    "sys_id": "sys-Ewmyx8wEF_",
    "module_name": "Calendar",
    "index": 1,
    "message": "module raised: Bad Request (Office365::Exception)",
    "backtrace": [
        "repositories/drivers/lib/office365/src/client.cr:132:9 in 'graph_request'",
        "repositories/drivers/lib/office365/src/groups.cr:41:15 in 'get_group'",
        "repositories/drivers/drivers/place/calendar_common.cr:219:9 in 'get_group'",
        "repositories/drivers/drivers/microsoft/graph_api.cr:3:1 in '->'",
        "repositories/drivers/drivers/microsoft/graph_api.cr:3:1 in 'execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:164:5 in 'execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver.cr:522:1 in 'run_execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:262:24 in 'process'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:179:7 in '->'",
        "/usr/share/crystal/src/fiber.cr:146:11 in 'run'",
        "/usr/share/crystal/src/fiber.cr:98:34 in '->'",
        "???"
    ]
}
```

### `list_events`

Searches for all events happening on a given calendar within a specified time frame.

Security Level: Support

#### Parameters

| Name               | Required? | Type    | Default | Description                                                                                             |
| ------------------ | --------- | ------- | ------- | ------------------------------------------------------------------------------------------------------- |
| calendar\_id       | true      | String  | N/A     | The EMAIL of the user OR the EMAIL of the room whose calender you want to search                        |
| period\_start      | true      | Int64   | N/A     | The start of the time period to search in Unix time                                                     |
| period\_end        | true      | Int64   | N/A     | The end of the period to search in Unix time                                                            |
| time\_zone         | false     | String  | nil     | filters results by time zone - format: 2/3 letter timezone code e.g UTC, AU                             |
| user\_id           | false     | String  | nil     | filters results by user EMAIL (Only necessary if the calendar\_id you are looking up belongs to a room) |
| include\_cancelled | false     | Boolean | false   | if true, includes cancelled events                                                                      |

#### Response Schema

```
```

#### Example Responses

**1. If the user or room has no events in the given time frame:**

```
[]
```

**4. If the room or user has events within the given time frame:**

```
[
    {
        "event_start": 1671408000,
        "event_end": 1671410700,
        "id": "AAkALgAAAAAAHYQDEapmdsfdsm8FgRUSiiZH26Qy2dwAEM3At3gAA",
        "host": "Person@company.com.au",
        "title": "Fortnightly Catch-Up",
        "body": "<html>\r\n<head></head>\r\n<body>html body</body>\r\n</html>\r\n",
        "attendees": [
            {
                "name": "Person Mcfolk",
                "email": "Person@company.com.au",
                "response_status": "needsAction",
                "resource": false
            },
            {
                "name": "Jim Bob",
                "email": "Jim@company.com.au",
                "response_status": "accepted",
                "resource": false
            },
            {
                "name": "Resource - Meeting Room",
                "email": "meetingroom@company.com.au",
                "response_status": "accepted",
                "resource": false
            }
        ],
        "location": "Microsoft Teams Meeting",
        "private": false,
        "all_day": false,
        "timezone": "Australia/Sydney",
        "recurring": false,
        "created": "2022-12-18T23:58:18Z",
        "updated": "2022-12-19T00:08:08Z",
        "attachments": [],
        "status": "confirmed",
        "creator": "person@company.com.au",
        "ical_uid": "04000000810000000000000000100000001186DAC27148E847BB58B773F3B941A7",
        "online_meeting_provider": "teamsForBusiness",
        "online_meeting_phones": [],
        "online_meeting_url": "https://teams.microsoft.com/l/meetup-join/19%3ameetFkLTliNjMtODQ2NzcwODJkZjQ1%40thread.v2/0?context=%7b%2212d49af-6add-4e6d-83b9-ae28aba6fabc%22%2c%2f-431f-91a1-b893ed3b6dbf%22%7d"
    },
    {
        "event_start": 1671417000,
        "event_end": 1671420600,
        "id": "AAkALgAAAAAAHYQDEapmEc2byACqAC-EWg0A2oF4m8FgRUSiiZH26Qy2dwAEM3BNNQAA",
        "host": "person2@company.com.au",
        "title": "Meeting",
        "body": "<html>\r\n<head>\r\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\r\n<meta name=\"Generator\" content=\"Microsoft Word 15 (filt63C1;\r\n\ttext-decoration:underline}\r\nspan.EmailStyle18\r\n\t{font-family:\"Calibri\",sans-serif;\r\n\tcolor:windowtext}\r\n.MsoChpDefault\r\n\t{font-size:10.0pt}\r\n@page WordSection1\r\n\t{margin:72.0pt 72.0pt 72.0pt 72.0pt}\r\ndiv.WordSection1\r\n\t{}\r\n-->\r\n</style>\r\n</head>\r\n<body lang=\"EN-AU\" link=\"#0563C1\" vlink=\"#954F72\" style=\"word-wrap:break-word\">\r\n<div class=\"WordSection1\">\r\n<p class=\"MsoNormal\">&nbsp;</p>\r\n<div>\r\n<p class=\"MsoNormal\"><span style=\"color:#5F5F5F\">________________________________________________________________________________</span>\r\n</p>\r\n</div>\r\n<div>\r\n<div style=\"margin-top:18.0pt; margin-bottom:15.0pt\">\r\n<p class=\"MsoNormal\"><span lang=\"EN-US\" style=\"font-size:18.0pt; font-family:&quot;Segoe UI&quot;,sans-serif; color:#252424\">Microsoft Teams meeting</span><span lang=\"EN-US\" style=\"font-family:&quot;Segoe UI&quot;,sans-serif; color:#252424\">\r\n</span></p>\r\n</div>\r\n<div style=\"margin-bottom:15.0pt\">\r\n<div>\r\n<p class=\"MsoNormal\"><b><span lang=\"EN-US\" style=\"font-size:10.52424\">Join with a video conferencing device</span></b><span lang=\"EN-US\" style=\"font-family:&quot;Segoe UI&quot;,sans-serif; color:#252424\">\r\n</span></p>\r\n</div>\r\n</span></a> </span></p>\r\n</div>\r\n<div style=\"margin-top:15.0pt; margin-bottom:18.0pt\">\r\n<p class=\"MsoNormal\"><span lang=\"EN-US\" style=\"font-family:&quot;Segoe UI&quot;,sans-serif; color:#252424\"><a href=\"https://aka.ms/JoinTeamsMeeting\"><span style=\"font-size:10.5pt; colorZDdmMzUtNWYzYy00NGJkLWE2N2QtNmYyOTMyMGFjYjRl@thread.v2&amp;messageId=0&amp;language=en-US\">\r\n<span style=\"font-size:10.5pt; color:#6264A7\">Meeting options</span></a> </span></p>\r\n</div>\r\n</div>\r\n<div>\r\n<p class=\"MsoNormal\"><span style=\"color:#5F5F5F\">________________________________________________________________________________</span>\r\n</p>\r\n</div>\r\n<p class=\"MsoNormal\">&nbsp;</p>\r\n</div>\r\n</body>\r\n</html>\r\n",
        "attendees": [
            {
                "name": "Person Two",
                "email": "person2@company.com.au",
                "response_status": "needsAction",
                "resource": false
            },
            {
                "name": "Resource Meeting Room",
                "email": "meetingroom@company.com.au",
                "response_status": "accepted",
                "resource": true
            }
        ],
        "location": "Microsoft Teams Meeting; Resource VIC - Meeting Room 2 (80a Turner St, Port Melb)",
        "private": false,
        "all_day": false,
        "timezone": "Australia/Sydney",
        "recurring": false,
        "created": "2022-12-19T02:23:59Z",
        "updated": "2022-12-19T02:29:40Z",
        "attachments": [],
        "status": "confirmed",
        "creator": "person2@company.com.au",
        "ical_uid": "040000008200E00074C5B71010010000000B4D1E494FA625B43B2FEE33B578A80A6",
        "online_meeting_provider": "teamsForBusiness",
        "online_meeting_phones": [],
        "online_meeting_url": "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZDZlZDdmMzUtNWYzYy00NGJkLWE2N2QtNmYyOTMyMGFjYjRl%40thread.v2/0?context=%7b%22Tid%22%3a%22e50f-a2fe-41c6-af48-4bd90ecc006e%22%7d"
    }
```

**3. If calendar\_id does not exist:**

```
{
    "error": "request failed",
    "sys_id": "sys-EJhU_4DEvQ",
    "module_name": "Calendar",
    "index": 1,
    "message": "module raised: Not Found (PlaceCalendar::Exception)",
    "backtrace": [
        "repositories/drivers/lib/place_calendar/src/office365.cr:420:7 in 'handle_office365_exception'",
        "repositories/drivers/lib/place_calendar/src/office365.cr:192:7 in 'list_events:period_start:period_end:showDeleted'",
        "repositories/drivers/lib/place_calendar/src/place_calendar.cr:23:5 in 'list_events:period_start:period_end:showDeleted'",
        "repositories/drivers/drivers/place/calendar_common.cr:243:7 in 'list_events'",
        "repositories/drivers/drivers/microsoft/graph_api.cr:3:1 in '->'",
        "repositories/drivers/drivers/microsoft/graph_api.cr:3:1 in 'execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:164:5 in 'execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver.cr:522:1 in 'run_execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:262:24 in 'process'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:179:7 in '->'",
        "/usr/share/crystal/src/fiber.cr:146:11 in 'run'",
        "/usr/share/crystal/src/fiber.cr:98:34 in '->'",
        "???"
    ]
}
```

### `delete_event`

Deletes an event from the calendar. Requires a calendar ID (the email of the room OR a user) AND a meeting ID - a long set of numbers and letters as returned by list\_events

Security Level: Support

#### Parameters

| Name         | Required? | Type    | Default | Description                                                                     |
| ------------ | --------- | ------- | ------- | ------------------------------------------------------------------------------- |
| calendar\_id | true      | String  | N/A     | The user Email OR the room EMAIL                                                |
| event\_id    | true      | String  | N/A     | The ID of the event as returned by list\_events                                 |
| user\_id     | false     | String  | nil     | IF the calendar\_id is the email of a ROOM, this filters by the email of a user |
| notify       | false     | Boolean | false   | notifies attendees if set to true                                               |
| comment      | false     | String  | nil     | adds a comment to the cancellation notification                                 |

#### Response Schema

```
```

#### Example Responses

**1. If request fails:**

```
{
    "error": "request failed",
    "sys_id": "sys-Ewmyx8wEF_",
    "module_name": "Calendar",
    "index": 1,
    "message": "module raised: Status 204 should not have a body (ArgumentError)",
    "backtrace": [
        "/usr/share/crystal/src/http/client/response.cr:20:11 in 'initialize'",
        "/usr/share/crystal/src/http/client/response.cr:13:5 in 'new'",
        "/usr/share/crystal/src/http/client/response.cr:150:22 in 'from_io?'",
        "/usr/share/crystal/src/http/client.cr:604:5 in 'exec_internal_single'",
        "/usr/share/crystal/src/http/client.cr:587:18 in 'exec_internal'",
        "/usr/share/crystal/src/http/client.cr:581:7 in 'exec'",
        "repositories/drivers/lib/office365/src/client.cr:125:7 in 'graph_request'",
        "repositories/drivers/lib/office365/src/events.cr:107:16 in 'delete_event:mailbox:calendar_id:id'",
        "repositories/drivers/lib/place_calendar/src/office365.cr:239:7 in 'delete_event:calendar_id:notify'",
        "repositories/drivers/lib/place_calendar/src/place_calendar.cr:23:5 in 'delete_event:calendar_id:notify'",
        "repositories/drivers/drivers/place/calendar_common.cr:275:14 in 'delete_event'",
        "repositories/drivers/drivers/microsoft/graph_api.cr:3:1 in '->'",
        "repositories/drivers/drivers/microsoft/graph_api.cr:3:1 in 'execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:164:5 in 'execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver.cr:522:1 in 'run_execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:262:24 in 'process'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:179:7 in '->'",
        "/usr/share/crystal/src/fiber.cr:146:11 in 'run'",
        "/usr/share/crystal/src/fiber.cr:98:34 in '->'",
        "???"
    ]
}
```

### `decline_event`

Declines an event from the calendar. Event is still shown but crossed out. Requires a calendar ID (the email of the room OR a user) AND a meeting ID - a long set of numbers and letters as returned by list\_events

Security Level: Support

#### Parameters

| Name         | Required? | Type    | Default | Description                                                                     |
| ------------ | --------- | ------- | ------- | ------------------------------------------------------------------------------- |
| calendar\_id | true      | String  | N/A     | The user Email OR the room EMAIL                                                |
| event\_id    | true      | String  | N/A     | The ID of the event as returned by list\_events                                 |
| user\_id     | false     | String  | nil     | IF the calendar\_id is the email of a ROOM, this filters by the email of a user |
| notify       | false     | Boolean | false   | notifies attendees if set to true                                               |
| comment      | false     | String  | nil     | adds a comment to the cancellation notification                                 |

#### Response Schema

```
```

#### Example Responses

**1. If request fails:**

```
{
    "error": "request failed",
    "sys_id": "sys-EJhU_4DEvQ",
    "module_name": "Calendar",
    "index": 1,
    "message": "module raised: Not Found (PlaceCalendar::Exception)",
    "backtrace": [
        "repositories/drivers/lib/place_calendar/src/office365.cr:420:7 in 'handle_office365_exception'",
        "repositories/drivers/lib/place_calendar/src/office365.cr:251:7 in 'decline_event:calendar_id:notify:comment'",
        "repositories/drivers/lib/place_calendar/src/place_calendar.cr:23:5 in 'decline_event:calendar_id:notify:comment'",
        "repositories/drivers/drivers/place/calendar_common.cr:266:14 in 'decline_event'",
        "repositories/drivers/drivers/microsoft/graph_api.cr:3:1 in '->'",
        "repositories/drivers/drivers/microsoft/graph_api.cr:3:1 in 'execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:164:5 in 'execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver.cr:522:1 in 'run_execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:262:24 in 'process'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:179:7 in '->'",
        "/usr/share/crystal/src/fiber.cr:146:11 in 'run'",
        "/usr/share/crystal/src/fiber.cr:98:34 in '->'",
        "???"
    ]
}
```

### `create_event`

Creates an event

Security Level: Support

#### Parameters

| Name                      | Required? | Type                 | Default | Description                                                                          |
| ------------------------- | --------- | -------------------- | ------- | ------------------------------------------------------------------------------------ |
| title                     | true      | String               | N/A     | The title of the event                                                               |
| event\_start              | true      | Int64                | N/A     | Start time of the event in Unix time                                                 |
| event\_end                | false     | String               | N/A     | End time of the even in Unix time                                                    |
| description               | false     | String               | N/A     | description of the event sent to the attendees                                       |
| attendees                 | false     | String/Array(String) | nil     | ---                                                                                  |
| location                  | false     | String               | nil     | Shown on the invitation, human-readable name                                         |
| timezone                  | false     | String               | nil     | 2/3 letter timezone code - affects time meeting may appear for all users             |
| user\_id                  | false     | String               | nil     | The SERVER user to create the event AS                                               |
| calendar\_id              | false     | String               | nil     | The EMAIL of the ROOM                                                                |
| online\_meeting\_id       | false     | String               | nil     | Need to generate meeting with provider first, these details will be provided by then |
| online\_meeting\_provider | false     | String               | nil     | Need to generate meeting with provider first, these details will be provided by them |
| online\_meeting\_url      | false     | String               | nil     | Need to generate meeting with provider first, these details will be provided by them |
| online\_meeting\_sip      | false     | String               | nil     | Need to generate meeting with provider first, these details will be provided by them |
| online\_meeting\_phones   | false     | String               | nil     | Need to generate meeting with provider first, these details will be provided by them |
| online\_meeting\_pin      | false     | String               | nil     | Need to generate meeting with provider first, these details will be provided by them |
| #### Response Schema      |           |                      |         |                                                                                      |
| \`\`\`                    |           |                      |         |                                                                                      |
| \`\`\`                    |           |                      |         |                                                                                      |

#### Example Responses

**1. If request fails:**

```
{
    "error": "request failed",
    "sys_id": "sys-Ewmyx8wEF_",
    "module_name": "Calendar",
    "index": 1,
    "message": "module raised: Not Found (PlaceCalendar::Exception)",
    "backtrace": [
        "repositories/drivers/lib/place_calendar/src/office365.cr:420:7 in 'handle_office365_exception'",
        "repositories/drivers/lib/place_calendar/src/office365.cr:213:7 in 'create_event'",
        "repositories/drivers/lib/place_calendar/src/place_calendar.cr:23:5 in 'create_event'",
        "repositories/drivers/drivers/place/calendar_common.cr:322:14 in 'create_event'",
        "repositories/drivers/drivers/microsoft/graph_api.cr:3:1 in '->'",
        "repositories/drivers/drivers/microsoft/graph_api.cr:3:1 in 'execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:164:5 in 'execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver.cr:522:1 in 'run_execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:262:24 in 'process'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:179:7 in '->'",
        "/usr/share/crystal/src/fiber.cr:146:11 in 'run'",
        "/usr/share/crystal/src/fiber.cr:98:34 in '->'",
        "???"
    ]
}
```

### `send_template`

Send an email template you have created to given users to get specific responses back from them.

#### Parameters

\| Name | Required? | Type | Default | Description | | to | true | String | N/A | email to send the template to | | template | true | String | N/A | template to send | | args | true | String | N/A | --- | | resource\_attachments | false | String/Array(string) | \[] | --- | | attachments | false | String/Array(string) | \[] | --- | | cc | false | String/Array(string) | \[] | --- | | bcc | false | String/Array(string) | \[] | --- | | from | false | String | null | optional email to use as sender |

#### Response Schema

```
```

#### Example Responses

**1. If request fails:**

```
{
    "error": "request failed",
    "sys_id": "sys-Ewmyx8wEF_",
    "module_name": "Calendar",
    "index": 1,
    "message": "module raised: Not Found (PlaceCalendar::Exception)",
    "backtrace": [
        "repositories/drivers/lib/place_calendar/src/office365.cr:420:7 in 'handle_office365_exception'",
        "repositories/drivers/lib/place_calendar/src/office365.cr:213:7 in 'create_event'",
        "repositories/drivers/lib/place_calendar/src/place_calendar.cr:23:5 in 'create_event'",
        "repositories/drivers/drivers/place/calendar_common.cr:322:14 in 'create_event'",
        "repositories/drivers/drivers/microsoft/graph_api.cr:3:1 in '->'",
        "repositories/drivers/drivers/microsoft/graph_api.cr:3:1 in 'execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:164:5 in 'execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver.cr:522:1 in 'run_execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:262:24 in 'process'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:179:7 in '->'",
        "/usr/share/crystal/src/fiber.cr:146:11 in 'run'",
        "/usr/share/crystal/src/fiber.cr:98:34 in '->'",
        "???"
    ]
}
```

### `build_template`

Generates an email template to be used for questionaires/to generate specific responses

#### Parameters

\| Name | Required? | Type | Default | Description | | string | true | String | N/A | --- | | args | true | String | N/A | --- |

#### Response Schema

```
```

#### Example Responses

**1. If request fails:**

```
{
    "error": "request failed",
    "sys_id": "sys-Ewmyx8wEF_",
    "module_name": "Calendar",
    "index": 1,
    "message": "module raised: Not Found (PlaceCalendar::Exception)",
    "backtrace": [
        "repositories/drivers/lib/place_calendar/src/office365.cr:420:7 in 'handle_office365_exception'",
        "repositories/drivers/lib/place_calendar/src/office365.cr:213:7 in 'create_event'",
        "repositories/drivers/lib/place_calendar/src/place_calendar.cr:23:5 in 'create_event'",
        "repositories/drivers/drivers/place/calendar_common.cr:322:14 in 'create_event'",
        "repositories/drivers/drivers/microsoft/graph_api.cr:3:1 in '->'",
        "repositories/drivers/drivers/microsoft/graph_api.cr:3:1 in 'execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:164:5 in 'execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver.cr:522:1 in 'run_execute'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:262:24 in 'process'",
        "repositories/drivers/lib/placeos-driver/src/placeos-driver/driver_manager.cr:179:7 in '->'",
        "/usr/share/crystal/src/fiber.cr:146:11 in 'run'",
        "/usr/share/crystal/src/fiber.cr:98:34 in '->'",
        "???"
    ]
}
```
