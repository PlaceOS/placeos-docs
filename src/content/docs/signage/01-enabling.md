---
title: Enabling Digital Signage
---

## Cloud Storage

Before gettig started, you must enable cloud storage on your PlaceOS Instance: [Configure cloud storage. ](/how-to/backoffice/backoffice-uploads/)

:::tip
Currently supports AWS S3 and Azure Blob storage.
This can be configured in backoffice at: Manage Instance -> Data Stores
:::

## Enable Signage Feature

The following UIs are required to be configured

1. signage manager:
   * folder: `signage-manager`
   * git: `https://github.com/placeos/user-interfaces`
   * barnch: `build/signage-manager`
2. signage player:
   * folder: `signage`
   * git: `https://github.com/placeos/user-interfaces`
   * branch: `build/signage`
2. signage plugins:
   * folder: `place-sign-plugins`
   * git: `https://github.com/place-labs/signage-plugin-templates`
   * branch: `trunk`
