---
title: Configure Signage AI Providers
description: Connect an image generation vendor so Signage Manager can create artwork
sidebar:
  order: 9
---

# Configure Signage AI Providers

### Overview

Signage Manager can generate poster artwork from a written brief. The images are
made by an external vendor using **your** account, so nothing is generated until
a provider is configured here. Until then the feature is hidden from users
rather than shown as broken.

### Prerequisites

1. Upload storage configured for the domain (**Manage instance → Upload
   Storage**). Generated images are written to the same bucket as uploads, so
   signage AI cannot be enabled without it.
2. An account with one of the supported vendors, and credentials for it:
   - **OpenAI** - an API key
   - **Azure OpenAI** - the resource endpoint, a deployment name, an API
     version and a key
   - **Google (Vertex)** - a project id and a service account (email and
     private key). Only Vertex is supported for Google: an AI Studio key
     carries neither the indemnity nor the no-training terms.
3. Outbound network access from the `rest-api` pods to the vendor's host.

### Adding a provider

1. Go to **Manage instance → Signage AI**.
2. Choose the domain from the selector, or leave it on **All domains** to add a
   shared fallback that any domain without its own provider will use.
3. Select **Add provider** and fill in:
   - **Name** - how it appears in this list
   - **Vendor** - which of the three above
   - **Credentials** - the fields change to suit the vendor
   - **Default model** - `gpt-image-2` for OpenAI and Azure,
     `gemini-3.1-flash-image` for Google
   - **Endpoint** - leave empty unless the traffic goes through a gateway
   - **Quotas** - images per person per day, and per domain per month
4. Save, then select the **Test credentials** button on the row. It asks the
   vendor for one small image and reports how long it took. A wrong key is
   caught here rather than by a user halfway through a poster.

### Credentials are never shown again

Credentials are encrypted and are never returned by the API, so the boxes are
empty when you edit a provider. Leaving them empty keeps what is stored;
filling them in replaces it.

### Usage

The bottom of the page lists what the domain has asked for over the last 30
days, per vendor and model: how many requests, how many images were asked for
and how many came back. Use it to sanity check spend against the vendor's own
billing.

### Brand kit

Artwork comes out closer to the mark when the domain has a brand kit. Add a
`signage_ai` metadata entry on the organisation zone:

```json
{
    "organisation": "Acme",
    "palette": { "primary": "#0E6E52", "accent": "#B8771F", "text": "#1B2420" },
    "tone": "warm, professional",
    "logo_upload_id": "uploads-XXX",
    "never_include": ["competitor logos", "photographs of real people"]
}
```

The palette and tone are folded into every request. `logo_upload_id` points at
an uploaded logo file, which is composited over the finished poster in the
browser rather than drawn by the model, and turns on the logo controls in the
layer editor.

### Rate limits before you enable it widely

Vendor entry tiers are low: OpenAI's first tier allows five images a minute,
and Azure's default deployment quota is the same. Four options for one person
is most of that. Move the account to a higher tier, or raise the deployment
quota, before enabling the feature for a second customer.

### Turning it off

Disable the provider row, or remove it. Artwork already generated stays in the
media library; only new generation stops. There is also a
`SIGNAGE_AI_DISABLED=true` environment variable on `rest-api` as a kill switch.
