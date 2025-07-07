---
title: Backoffice File Upload
description: Upload files to Backoffice
---

# Backoffice File Upload

### Overview

Backoffice supports uploading files to cloud storage for secure temporary access or public read.\
This is useful for device documentation, SVG Floor Maps or Room Photos.

### Prerequisites

1. Configure your storage bucket on the cloud storage platform
2. Ensure CORS is enabled for the domain Backoffice will be uploading from
3. Note the storage bucket name
4. Generate access credentials for the storage bucket

### Backoffice configuration

1. Go to the Manage instance tab and select Upload Storage\
   <!-- TODO: Add Upload Storage screenshot -->
2. You can optionally configure a default storage solution or a per-domain one
3. Enter the bucket name and access keys, examples below:

<!-- TODO: Add storage provider configuration screenshot -->

### Cloud configuration

#### S3 Configuration

You will find this under bucket permissions -> CORS configuration.

```yaml
[
    {
        "AllowedHeaders": [
            "Authorization",
            "content-type"
        ],
        "AllowedMethods": [
            "GET"
        ],
        "AllowedOrigins": [
            "*"
        ],
        "ExposeHeaders": [],
        "MaxAgeSeconds": 3000
    },
    {
        "AllowedHeaders": [
            "*"
        ],
        "AllowedMethods": [
            "PUT",
            "POST",
            "DELETE"
        ],
        "AllowedOrigins": [
            # add the domains that will be uploading files here
            "https://os.place.tech",
        ],
        "ExposeHeaders": []
    }
]
```

You will want to configure the access key with minimal permissions too:

1. In IAM, create a new user to act as the service account
2. Grant the user no permissions except S3 List, Read, Write, Object permissions management
3. Generate some access keys to use for signing upload requests

An example IAM user policy for file uploads:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": "s3:ListBucket",
            "Resource": "arn:aws:s3:::os.place.tech"
        },
        {
            "Sid": "VisualEditor1",
            "Effect": "Allow",
            "Action": "s3:*Object",
            "Resource": "arn:aws:s3:::os.place.tech/*"
        },
        {
            "Sid": "VisualEditor2",
            "Effect": "Allow",
            "Action": [
                "s3:PutObjectVersionAcl",
                "s3:PutObjectAcl"
            ],
            "Resource": "*"
        }
    ]
}
```

If you don't want the user to have object permission management then you also override the bucket level policy, where all objects are public

```json
{
    "Version": "2008-10-17",
    "Id": "Policy1397632521960",
    "Statement": [
        {
            "Sid": "Stmt1397633323327",
            "Effect": "Allow",
            "Principal": {
                "AWS": "*"
            },
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::os.place.tech/*"
        }
    ]
}
```

### Upload Files

Once the above configuration steps are completed, you should be able to upload files to PlaceOS.

To upload a file, drag and drop it into Backoffice in your browser.

The file upload status will be displayed.

<!-- TODO: Add file upload status screenshot -->

Once the upload is complete, you can copy the file URL and use this as required.

![Map URL](assets/map-url.png)

:::tip The uploaded file will be given a discrete URL on the storage bucket, for example: `https://s3-ap-southeast-2.amazonaws.com/bucket.name/directory.name/16221818379492128.svg`.\
Characters will be automatically encoded, if present. :::

\*\[CORS]: Cross-Origin Resource Sharing \*\[IAM]: Identity & Access Management
