---
title: Resumable Uploads
description: Specifications for interaction with Cloud blob storage
---

## Uploads

PlaceOS can be configured to upload a cloud blob storage service. Content may include:

* Images for spaces
* PDFs and other documents for API protocols etc
* Digital signage content

The API provides clients with signed requests for performing the upload to the blob store directly.

### Multi-part / resumable uploads

File larger than 5MB are uploaded in 5MB chunks and then commited to the blob store.
This is the flow for `"type": "chunked_upload"` if in the response payload of the initial `POST /api/engine/v2/uploads` request.

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

        Client->>PlaceOS: PATCH /uploads/:id {resumable_id}
        PlaceOS-->>Client: 200 OK
    end

    rect rgb(245,255,245,0.3)
        Note over Client,BlobStore: Upload parts

        loop each part
            Client->>BlobStore: Upload part N
            BlobStore-->>Client: 200 OK {part metadata}
            Client->>PlaceOS: PATCH /uploads/:id {part metadata}
            PlaceOS-->>Client: 200 OK
        end

        Note over Client: Upload final part

        Client->>BlobStore: Upload final part
        BlobStore-->>Client: 200 OK {final part metadata}
        Client->>PlaceOS: PATCH /uploads/:id {final part metadata, final_part: true}
        PlaceOS-->>Client: 200 OK (provides commit details)
    end

    rect rgb(255,245,245,0.3)
        Note over Client,BlobStore: Commit in BlobStore

        Client->>BlobStore: Commit multipart upload (using commit details)
        BlobStore-->>Client: 200 OK
    end

    rect rgb(255,245,255,0.3)
        Note over Client,PlaceOS: Finalize in PlaceOS

        Client->>PlaceOS: PUT /uploads/:id (marks upload complete)
        PlaceOS-->>Client: 200 OK
    end

```



