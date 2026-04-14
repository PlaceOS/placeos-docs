---
title: Sending Emails
description: Comprehensive guide to sending emails in PlaceOS
---

# Mailer Drivers

PlaceOS provides two primary drivers for sending email:

* **SMTP Mailer** — sends direct emails
* **Template Mailer** — resolves templates and delegates delivery to another mailer (typically SMTP)

Email delivery is exposed through the shared:

```crystal
PlaceOS::Driver::Interface::Mailer
```

Drivers that want to publish available template fields implement:

```crystal
PlaceOS::Driver::Interface::MailerTemplates
```

---

# Architecture Overview

Typical deployment:

```
Custom Driver
      │
      │ send_template(...)
      ▼
Template Mailer
      │
      │ send_mail(...)
      ▼
SMTP Mailer
      │
      ▼
SMTP Server
```

## Flow Summary

### Direct Email

```
Custom Driver → SMTP Mailer → SMTP Server
```

### Template Email

```
Custom Driver → Template Mailer → SMTP Mailer → SMTP Server
```

---

# SMTP Mailer

Driver:

```
drivers/place/smtp.cr
```

Interface:

```
PlaceOS::Driver::Interface::Mailer
```

The SMTP mailer sends standard email messages with:

* Plain text content
* HTML content
* Attachments
* Inline resources
* CC / BCC
* Custom sender and reply-to

---

## SMTP Driver Configuration

Example settings:

```yaml
---
sender: "support@example.com"

host: "smtp.example.com"
port: 587

tls_mode: "STARTTLS"

username: "smtp-user"
password: "smtp-password"

ssl_verify_ignore: false
```

### Settings

| Setting             | Description                      |
| ------------------- | -------------------------------- |
| `sender`            | Default `from` address           |
| `host`              | SMTP server hostname             |
| `port`              | SMTP port                        |
| `tls_mode`          | `NONE`, `SSL`, or `STARTTLS`     |
| `username`          | SMTP username (optional)         |
| `password`          | SMTP password (optional)         |
| `ssl_verify_ignore` | Disable certificate verification |

---

## Sending Direct Email

Use when subject and content are known at runtime.

### Example Driver

```crystal
require "placeos-driver"
require "placeos-driver/interface/mailer"

class Example::AlertMailer < PlaceOS::Driver
  descriptive_name "Example Alert Mailer"
  generic_name :AlertMailer

  def mailer
    system.implementing(
      PlaceOS::Driver::Interface::Mailer
    )[0]
  end

  def send_alert(
    email : String,
    room_name : String,
    fault : String
  )
    mailer.send_mail(
      to: email,
      subject: "Fault detected in #{room_name}",

      message_plaintext:
        "Fault detected: #{fault}",

      message_html: <<-HTML
        <h1>Fault detected</h1>
        <p>Room: <strong>#{room_name}</strong></p>
        <p>Fault: #{fault}</p>
      HTML
    )
  end
end
```

---

## send_mail Method

```crystal
send_mail(
  to : String | Array(String),

  subject : String,

  message_plaintext : String? = nil,
  message_html : String? = nil,

  resource_attachments :
    Array(ResourceAttachment) = [] of ResourceAttachment,

  attachments :
    Array(Attachment) = [] of Attachment,

  cc : String | Array(String) = [] of String,
  bcc : String | Array(String) = [] of String,

  from : String | Array(String) | Nil = nil,
  reply_to : String | Array(String) | Nil = nil,
)
```

---

## Attachments

Attachments must be Base64 encoded.

```crystal
require "base64"

def send_report(
  email : String,
  pdf_bytes : Bytes
)
  mailer.send_mail(
    to: email,

    subject: "Daily report",

    message_plaintext:
      "Attached is your report.",

    attachments: [
      {
        file_name: "report.pdf",
        content: Base64.strict_encode(pdf_bytes),
      }
    ]
  )
end
```

---

## Inline Resources

Used for embedded images in HTML.

```crystal
require "base64"

def send_badge(
  email : String,
  png_bytes : Bytes
)
  mailer.send_mail(
    to: email,

    subject: "Badge",

    message_html:
      %(<img src="cid:badge_image" />),

    resource_attachments: [
      {
        file_name: "badge.png",
        content: Base64.strict_encode(png_bytes),
        content_id: "badge_image",
      }
    ]
  )
end
```

---

# Template Mailer

Driver:

```
drivers/place/template_mailer.cr
```

Interface:

```
PlaceOS::Driver::Interface::MailerTemplates
```

The Template Mailer:

1. Receives `send_template(...)`
2. Finds matching template
3. Expands fields
4. Sends via downstream mailer

Typically:

```
Template Mailer → SMTP Mailer
```

---

# Template Resolution

Templates are resolved in order:

1. Level
2. Building
3. Region
4. Organisation

The most specific match is used.

---

# Defining Template Fields

Custom drivers define available fields using:

```crystal
PlaceOS::Driver::Interface::MailerTemplates
```

This enables UI configuration of templates.

---

## Example Template Definition

```crystal
require "placeos-driver"
require "placeos-driver/interface/mailer"
require "placeos-driver/interface/mailer_templates"

class Example::BookingMailer < PlaceOS::Driver
  include PlaceOS::Driver::Interface::MailerTemplates

  descriptive_name "Booking Mailer"
  generic_name :BookingMailer

  def mailer
    system.implementing(
      PlaceOS::Driver::Interface::Mailer
    )[0]
  end

  def template_fields
    [
      TemplateFields.new(
        trigger: {"bookings", "approved"},

        name: "Booking approved",

        description:
          "Sent when booking approved",

        fields: [
          {
            name: "user_name",
            description: "Recipient name"
          },
          {
            name: "room_name",
            description: "Room name"
          },
          {
            name: "start_time",
            description: "Booking start"
          }
        ]
      )
    ]
  end
end
```

---

# Sending Template Email

Use when subject and content are externally managed.

```crystal
def send_booking_email(
  email : String,
  user_name : String,
  room_name : String,
  start_time : String
)
  mailer.send_template(
    to: email,

    template:
      {"bookings", "approved"},

    args: {
      "user_name"  => user_name,
      "room_name"  => room_name,
      "start_time" => start_time,
    }
  )
end
```

---

# send_template Method

```crystal
send_template(
  to : String | Array(String),

  template : Tuple(String, String),

  args : TemplateItems,

  resource_attachments :
    Array(ResourceAttachment) = [] of ResourceAttachment,

  attachments :
    Array(Attachment) = [] of Attachment,

  cc : String | Array(String) = [] of String,
  bcc : String | Array(String) = [] of String,

  from : String | Array(String) | Nil = nil,
  reply_to : String | Array(String) | Nil = nil,
)
```

---

# Template Format

Templates use:

```
%{field_name}
```

Example metadata:

```json
[
  {
    "trigger": "bookings.approved",

    "subject":
      "Booking approved for %{room_name}",

    "text":
      "Hi %{user_name}, your booking starts at %{start_time}.",

    "html":
      "<p>Hi %{user_name}</p><p>Your booking starts at %{start_time}</p>",

    "from":
      "bookings@example.com",

    "reply_to":
      "support@example.com"
  }
]
```

---

# Template Fallback Behaviour

If the Template Mailer:

* cannot find metadata template

then:

```
send_template(...)
```

is forwarded to the downstream mailer.

This allows fallback templates defined in:

```yaml
email_templates:
```

---

# Minimal SMTP Template Fallback

```yaml
---
email_templates:

  bookings:

    approved:

      subject:
        "Booking approved for %{room_name}"

      text:
        "Hi %{user_name}, your booking starts at %{start_time}"

      html:
        "<p>Hi %{user_name}</p><p>Your booking starts at %{start_time}</p>"
```

---

# Choosing the Right Method

## Use `send_mail` when:

* content generated in driver
* no UI-editable templates required
* simple delivery logic

```crystal
mailer.send_mail(...)
```

---

## Use `send_template` when:

* content managed outside driver
* templates editable in UI
* reusable email formats required

```crystal
mailer.send_template(...)
```

---

# Best Practices

* Always resolve the mailer using:

```crystal
system.implementing(
  PlaceOS::Driver::Interface::Mailer
)
```

* Prefer templates for user-facing emails
* Use direct mail for operational alerts
* Base64 encode all attachments
* Provide descriptive template fields
* Keep template triggers consistent

---

# Related Drivers

* [SMTP Mailer](https://github.com/PlaceOS/drivers/blob/master/drivers/place/smtp.cr)
  `drivers/place/smtp.cr`

* [Template Mailer](https://github.com/PlaceOS/drivers/blob/master/drivers/place/template_mailer.cr)
  `drivers/place/template_mailer.cr`

* [Example Template Driver](https://github.com/PlaceOS/drivers/blob/master/drivers/place/survey_mailer.cr)
  `drivers/place/survey_mailer.cr`

---

# Related Interfaces

* [Mailer Interface](https://github.com/PlaceOS/driver/blob/master/src/placeos-driver/interface/mailer.cr)
  `interface/mailer.cr`

* [Mailer Templates Interface](https://github.com/PlaceOS/driver/blob/master/src/placeos-driver/interface/mailer_templates.cr)
  `interface/mailer_templates.cr`

