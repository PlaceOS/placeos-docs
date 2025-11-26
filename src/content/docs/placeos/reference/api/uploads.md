---
title: Resumable Uploads
description: Specifications for interaction with Cloud blob storage
---

PlaceOS can be configured to upload a cloud blob storage service. Content may include:

* Images for spaces
* PDFs and other documents for API protocols etc
* Digital signage content

The API provides clients with signed requests for performing the upload to the blob store directly.

## Multi-part / resumable uploads

File larger than 5MB are uploaded in 5MB chunks and then commited to the blob store.
This applies if the response payload of the initial `POST /api/engine/v2/uploads` includes `"type": "chunked_upload"`.

```mermaid
sequenceDiagram
    autonumber

    participant Client
    participant PlaceOS
    participant BlobStore

    rect rgb(245,245,245,0.3)
        Note over Client,PlaceOS: Create upload record

        Client->>PlaceOS: POST /uploads {file metadata}
        PlaceOS-->>Client: 201 Created {id, blob init info}
    end

    rect rgb(235,245,255,0.3)
        Note over Client,BlobStore: Initialize BlobStore session (as required)

        Client->>BlobStore: Create multipart upload
        BlobStore-->>Client: 200 OK {resumable_id}

        Client->>PlaceOS: PATCH /uploads/:id {resumable_id + first part metadata}
        PlaceOS-->>Client: 200 OK
    end

    rect rgb(245,255,245,0.3)
        Note over Client,BlobStore: Upload parts

        loop each part
            Client->>BlobStore: Upload part N
            BlobStore-->>Client: 200 OK
            Client->>PlaceOS: PATCH /uploads/:id {next part metadata}
            PlaceOS-->>Client: 200 OK
        end
    end

    rect rgb(255,245,245,0.3)
        Note over Client,BlobStore: Commit in BlobStore

        Client->>BlobStore: Commit multipart upload (when no next part metadata provided above)
        BlobStore-->>Client: 200 OK
    end

    rect rgb(255,245,255,0.3)
        Note over Client,PlaceOS: Finalize in PlaceOS

        Client->>PlaceOS: PUT /uploads/:id (marks upload complete)
        PlaceOS-->>Client: 200 OK
    end

```

### Check which blob store will be used

As different blob stores may have slightly different requirements from the frontend

`GET /api/engine/v2/uploads/new?file_size=7065473&file_name=file_name.ext&file_mime=video/mp4&permissions=none&public=true`

responds

```json
{"residence": "AzureStorage"}
```

### Create the Upload Record

This tells PlaceOS to create an upload entry in the database and this entry will be returned if an upload can be resumed.

`POST /api/engine/v2/uploads`

```yaml
{
  "file_size": "7065473", # in bytes
  "file_name": "file_name.ext",
  "permissions": "none",
  "public": true,
  # this is the MD5 of the file being uploaded as a checksum
  "file_id": "5ymJIxM7GVLfTbMS6YI1Bw=="
}
```

responds

```yaml
{
  "type": "chunked_upload",
  "signature": {
    "verb": "PUT",
    "url": "", # If URL blank then no need to initialize BlobStore
    "headers": {
      "Content-Type": "binary/octet-stream",
      "x-ms-blob-content-type": "binary/octet-stream",
      "x-ms-blob-content-md5": "5ymJIxM7GVLfTbMS6YI1Bw=="
    }
  },
  "upload_id": "uploads-JUea_g-EeY",
  "residence": "AzureStorage"
}
```

### Prepare to upload first part

Aquire the signed request for the upload part number and MD5 hash of that part

`PATCH /api/engine/v2/uploads/uploads-JUea_g-EeY?part=1&file_id=5ymJIxM7GVLfTbMS6YI1Bw==`

```yaml
{
  # resumable id is the blob store reference
  # if the blob store doesn't need to initalized, then use file MD5 or random string
  "resumable_id": "MDAwMDAx"
}
```

Use the signature in the response to upload the first part to the blob store

```yaml
{
  "type": "part_upload",
  "signature": {
    "verb": "PUT",
    "url": "https://blobaccount.blob.core.windows.net/bucket_name/2F17641224208373232499.mp4?sv=2024-05-04&spr=https%2Chttp&st=2025-11-26T02%3A00%3A20Z&se=2025-11-26T02%3A05%3A20Z&sp=cw&sr=b&sig=ztnXHZ03Qew&comp=block&blockid=MDAwMDAx",
    "headers": {
      "Content-Type": "binary/octet-stream"
    }
  },
  "upload_id": "uploads-JUea_g-EeY"
}
```

### Notify of part upload completion

Provide details of the parts that have been uploaded in the body and aquire the signed request for the next part using the query params.
This allows parallel part uploads which may be desirable if bandwidth is available

`PATCH /api/engine/v2/uploads/uploads-JUea_g-EeY?part=2&file_id=Ay7Is29LPzk1e58V1V7cww==`

```yaml
{
  "part_list": [
    1
  ],
  "part_data": [
    {
      "md5": "5ymJIxM7GVLfTbMS6YI1Bw==",
      "part": 1
    }
  ]
}
```

The response will include the signature for the next part as with the previous request

### Notify of final part upload

Don't provide a part or file id in the query params

`PATCH /api/engine/v2/uploads/uploads-JUea_g-EeY`

```yaml
{
  # NOTE:: you don't need to provide all the previous parts but you can if you like
  "part_list": [
    1,
    2
  ],
  "part_data": [
    {
      "md5": "5ymJIxM7GVLfTbMS6YI1Bw==",
      "part": 1
    },
    {
      "md5": "Ay7Is29LPzk1e58V1V7cww==",
      "part": 2
    }
  ]
}
```

responds with the blob store commit request

```yaml
{
  "type": "finish",
  "signature": {
    "verb": "PUT",
    "url": "https://blobaccount.blob.core.windows.net/bucket_name/2F17641224208373232499.mp4?sv=2024-05-04&spr=https%2Chttp&st=2025-11-26T02%3A00%3A25Z&se=2025-11-26T02%3A05%3A25Z&sp=cw&sr=b&sig=k0N9W3hr8Bj%2BNwq%2FHBlLrTvh8N1E%2BlOanIq030IiXJw%3D&comp=blocklist",
    "headers": {
      "Content-Type": "binary/octet-stream"
    }
  },
  "upload_id": "uploads-JUea_g-EeY",
  "body": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<BlockList><Latest>MDAwMDAx</Latest><Latest>MDAwMDAy</Latest><Latest>MDAwMDAz</Latest><Latest>MDAwMDA0</Latest></BlockList>\n"
}
```

### Commit the upload in PlaceOS

`PUT /api/engine/v2/uploads/uploads-JUea_g-EeY`

## Resuming an interrupted upload

When performing the [Create the Upload Record](#create-the-upload-record) request it may return an existing upload with a part list.

```yaml
{
  "type": "parts",
  "signature": {
    # signature for a request to get the list of parts on the blob store
    # should not need to use this
  },
  "part_list": [
    1,
    2
  ],
  "part_data": [
    {
      "md5": "5ymJIxM7GVLfTbMS6YI1Bw==",
      "part": 1
    },
    {
      "md5": "Ay7Is29LPzk1e58V1V7cww==",
      "part": 2
    }
  ],
  "upload_id": "uploads-JUea_g-EeY",
  "residence": "AzureStorage"
}
```

Use
* To get the signature for the next part
  `GET /api/engine/v2/uploads/<upload_id>/edit?part=3&file_id=ud/ZcwpsXKwPoxjHE7NwTQ==`
* To get the final commit signature
  `GET /api/engine/v2/uploads/<upload_id>/edit?part=finish`

Then continue with the flow above, PATCHING when this part upload completes or committing the upload in PlaceOS

## Small file uploads

These are uploads where the file size is 5MB or lower

```mermaid
sequenceDiagram
    autonumber

    participant Client
    participant PlaceOS
    participant BlobStore

    rect rgb(245,245,245,0.3)
        Note over Client,PlaceOS: Create upload record

        Client->>PlaceOS: POST /uploads {file metadata}
        PlaceOS-->>Client: 201 Created {id, blob init info}
    end

    rect rgb(235,245,255,0.3)
        Note over Client,BlobStore: Upload file to BlobStore

        Client->>BlobStore: Upload full file content
        BlobStore-->>Client: 200 OK
    end

    rect rgb(255,245,255,0.3)
        Note over Client,PlaceOS: Finalize in PlaceOS

        Client->>PlaceOS: PUT /uploads/:id (marks upload complete)
        PlaceOS-->>Client: 200 OK
    end

```

