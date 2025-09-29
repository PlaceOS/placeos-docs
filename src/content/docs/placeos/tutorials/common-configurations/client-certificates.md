---
title: Client Certificates
description: Authenticating using client certificates
---

## Overview

This is an alternative to passwords where both the client and server provide keys forming a two way trust.
In a typical HTTPS request, only the server proves via certificates who it is.

* Server presents its certificate → client verifies against trusted CA.
* Server requests a client certificate → client sends its certificate.
* Server verifies client cert against its trust store (and optionally checks revocation).
* Client proves ownership of the cert by signing a handshake message with the private key.

This means the client (PlaceOS module) needs to be configured with a public and private key

## Certificate generation

Ideally the private key should not be shared over email, this process can be used to generate a client certificate

1. Generate the keypair locally.
2. Send the service owner a CSR (certificate signing request), not the key.
3. They sign it with their CA and return your client certificate (and chain).
4. You then connect using your private key + their signed cert + their CA chain.

Key generation

```shell
openssl genpkey -algorithm RSA -pkeyopt rsa_keygen_bits:3072 -out client.key
chmod 600 client.key

# OR for an alternative algorithm (possibly not as well supported)
openssl genpkey -algorithm EC -pkeyopt ec_paramgen_curve:P-256 -out client.key
chmod 600 client.key
```

Create a CSR for their CA to sign

```shell
openssl req -new -key client.key -out client.csr \
  -subj "/CN=steve@example.com/O=Your Org/OU=Your Unit" \
  -addext "extendedKeyUsage=clientAuth" \
  -addext "subjectAltName=email:steve@example.co"
```

They return your certificate (e.g., client.crt) and a CA chain (ca-chain.pem)

## PlaceOS configuration

This can be configured at the driver or module level, supporting both Service (HTTPS) and Websocket (WSS) drivers.
All certificates are in PEM format

```yaml

https_private_key: |
  -----BEGIN PRIVATE KEY-----
  MIIEvQ...
  -----END PRIVATE KEY-----

https_client_cert: |
  -----BEGIN CERTIFICATE-----
  MIID9jC...
  -----END CERTIFICATE-----

# This is optional
https_ca_certificates: |
  -----BEGIN CERTIFICATE-----
  MIID9jC...
  -----END CERTIFICATE-----

# typically required if CA certificates are not provided
# unless the service is public
https_verify: none
```

## Client Certificate Files

Sometimes a single file may be provided with the private key, client certificate and CA all in one, typically in that order.
The keys need to be extracted and entered into PlaceOS in the above format.
