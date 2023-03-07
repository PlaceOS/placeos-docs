---
title: PlacesOS Microsoft Graph API Driver
description: Communicates with the Microsoft Graph API to share information with Microsoft services
---

# PlaceOS Microsoft Graph API Driver
* Type: Logic Driver
* Dependencies: PlaceOS Calendar Driver
* Source: https://github.com/PlaceOS/drivers/blob/master/drivers/microsoft/graph_api.cr

## Functions

* Groups booking requests and sends them to the Microsoft calendar
* 
* 


## Settings

| Key | Type | Default value | Description |
| --- | --- | --- | --- |
|`calendar_service_account`| String | service_account@email.address | --- |
|`calendar_config`| Object | {tenant: "", client_id: "", client_secret: "", conference_type: ""} | --- |
|`rate_limit`| --- | 5 |  limits the number of API calls so it does not exceed limits set by Microsoft |
|`mailer_from`| String | email_or_office_userPrincipalName |   |
|`email_templates`| Object | {visitor: {checkin: {subject: "%{name} has arrived", text:    "for your meeting at %{time}", }}} |   |



## Status Variables

### `connected`
Shows true if the driver is connected to the Microsoft Graph API and false if not

#### Schema/Type
Boolean 

#### Examples

##### 1. If connected to Microsoft Graph API
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
| --- | --- | --- | --- | --- |
| None |  |  |  |  |

#### Response Schema
```
```

#### Example Responses
##### 1. If no calls waiting in the queue:
```
0
```


### `in_flight_size`
Displays the number of API calls to Microsoft Graph API currently in progress

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| None |  |  |  |  |

#### Response Schema
```
```

#### Example Responses
##### 1. If no calls in progress:
```
0
```







### `generate_svg_qrcode`
Generates an SVG of a QR code which encodes the given text.

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| text | true | String | N/A | The text the user wishes to turn into a QR code |

#### Response Schema
```
```

#### Example Responses
##### 1. 
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
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| text | true | String | N/A | The text the user wishes to turn into a QR code |
| size | false | Int32 | 128 | The size of the image the user wants to create |

#### Response Schema
```
```

#### Example Responses
##### 1. For the word "Test" at size 100:
```
iVBORw0KGgoAAAANSUhEUgAAAGQAAABkEAYAAAAgckkXAAADrklEQVR4nO2TMZLkMAzE5v+fvqvaumSCpcfnpgl6gESJioJI9uuPiPzKa1pAhIwBESkwICIFBkSkwICIFBgQkQIDIlJgQEQKDIhIgQERKTAgIgUGRKTAgIgUGBCRAgMiUmBARAoMiEgBLiCvH/jnWf/u/jy1n9Pg1KYHdXWg3QuQ8qGdVHBq04O6OtDuBUj50E4qODVaA1M+Uwv21H7eBU6N1kADkoXmcwROjdZAA5KF5nMETi21AFML1v0uzb/bZxqc2vaBdr9L8+/2mQantn2g3e/S/Lt9psGpfdtAU54p/+39TINT+7aBpjxT/tv7mQan9m0DTXmm/Lf3Mw1ObftAaYu0vZ/T4NS2D5S2SNv7OQ1ObftAaYu0vZ/T4NRoDZxa1FSdp/bzLnBqtAYakCw0nyNwarQGGpAsNJ8jcGq/NZB2nvWn3aedVHBq04O6OtAt92knFZza9KCuDnTLfdpJBay2k+6F2bZg27G1YQzIs7C1YQzIs7C1/0gt8JTnU+9PA1a7FwPCvD8NWO1eDAjz/jQ4tbOLSlvsKf+pOlN9vgvcV6YWbLv/VJ2pPt8F7itTC7bdf6rOVJ/vYv1XphYv5TP1r+53Uz7TLFR+p3twqfvddVILmXo35TPNQuV3ugeXut9dJ7WQqXdTPtMsVP6M1EJOMeXzrUH4jQd95R0Dkn3XgDwMA5J914AspXtA3UFLLd6WBab5HAFW+wwDkq3TDc3nCLDaZxiQbJ1uaD5HgNV20h2olE/q3S3B/F8WKrMxIAZECgyIAWnlbMOnzu7/dtc/+273fSo45enFv7pIqf921z/7bvd9Kjjl6cW/ukip/3bXP/tu930qOGVaY1OL0V1nqn7qXSo4NVoDuxcvVWeqfupdKjg1WgO7Fy9VZ6p+6l0qOLUtizT131Qd2n0qOGUDYkBI4JQNiAEhgVN+akCmPKf8nwLuK92Lkaqf+le355T/U8B9pXsxUvVT/+r2nPJ/CrivdC9Gqn73v1L/TZHqc7dnGpxaaoFTA0oNtLtO9+Kl+tztmQanllrg1IBSA+2u0714qT53e6bBqdEaSFvs7oXsvr8N3FdoDTcgBgQFreEGxICgSC1A95n6V6oP3e92e1LBKXctdPpM/SvVh+53uz2p4JS7Fjp9pv6V6kP3u92eVBYqi9yHAREpMCAiBQZEpMCAiBQYEJECAyJSYEBECgyISIEBESkwICIFBkSkwICIFBgQkQIDIlJgQEQKDIhIgQERKTAgIgV/AVWCRjmiRazdAAAAAElFTkSuQmCC
```




### `send_mail`
Sends an email to registered addresses in the company. NOTE - ONE of message_plaintext OR message_html IS required.

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| to | true | String OR Array(String) | N/A | the destation of the email |
| subject | true | String | N/A | The subject line of the email |
| message_plaintext | false | String | nil | The message body of the email |
| message_html | false | String | nil | The message body of the email that will be displayed as HTML |
| resource_attachments | false | Array(ResourceAttachment) | [] | Array of objects to be attached to the email |
| cc | false | String OR Array(String) | [] | --- |
| bcc | false | String OR Array(String) | [] | --- |
| from | false | String Or Array(String) Or Nil | nil | --- |

#### Response Schema
```
```

#### Example Responses
##### 1. If the email is not registered to a user
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
Description

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| user_id | false | String | nil | --- |

#### Response Schema
```
```

#### Example Responses
##### 1. If user does not exist:
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


### `get_groups`
Description

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| user_id | false | String | nil | --- |

#### Response Schema
```
```

#### Example Responses
##### 1. If user does not exist:
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
Description

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| group_id | false | String | nil | --- |

#### Response Schema
```
```

#### Example Responses
##### 1. If group does not exist:
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
Description

#### Parameters
| Name | Required? | Type | Default | Description |
| --- | --- | --- | --- | --- |
| query | false | String | nil | --- |
| limit | false | Int32 | nil | --- |

#### Response Schema
```
```

#### Example Responses
##### 1. If group does not exist:
```
[
    {
        "id": "116849993287607001215",
        "name": "Firstname Lastname",
        "email": "email@place.os"
    },
    {
        "id": "107883273308461249665",
        "name": "First Last",
        "email": "email1@place.os",
        "photo": "https://www.google.com/photos/private/AIbEiAIAAABDCIHpmpHo6cCzGUO0TUcpevl6e27"
    },
    {
        "id": "101794854964970066277",
        "name": "Given Last",
        "email": "email2@place.os",
        "department": "Department department",
        "title": "Department head",
        "photo": "https://www.google.com/photos/private/AIbEiAIAkS9j5GQ"
    }
  ]
```


