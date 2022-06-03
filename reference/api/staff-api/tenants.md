# Tenants

{% swagger method="get" path="/staff/v1/tenants" baseUrl="" summary="List Tenants" %}
{% swagger-description %}
Returns the list of tenants
{% endswagger-description %}

{% swagger-response status="200: OK" description="" %}
```javascript
[
  {
    "id": 1,
    "name": "a_friendly_tenant_label",
    "domain": "an_existing_placeos_DOMAIN",
    "platform": "office365",
    "booking_limits": {
      "desk": 2,
      "parking": 1
    }
  },
  {
    "id": 2,
    "name": "another_friendly_tenant_label",
    "domain": "an_existing_placeos_DOMAIN",
    "platform": "google"
  }
]
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="post" path="/staff/v1/tenants" baseUrl="" summary="Create Tenant" %}
{% swagger-description %}
Create a new tenant
{% endswagger-description %}

{% swagger-parameter in="body" name="name" required="true" %}
"an_o365_example"
{% endswagger-parameter %}

{% swagger-parameter in="body" name="domain" required="true" %}
"an_existing_placeos_DOMAIN"
{% endswagger-parameter %}

{% swagger-parameter in="body" name="platform" required="true" %}
"office365"
{% endswagger-parameter %}

{% swagger-parameter in="body" name="credentials" type="JSON" required="true" %}
"tenant": <string>,

\


"client

_id": <string>,_

\


__

"client_secr

_et":_

 \<string>
{% endswagger-parameter %}

{% swagger-parameter in="body" name="booking_limits" required="false" type="JSON" %}
\<string>:<integer>
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    "name": "an_o365_example",
    "domain": "an_existing_placeos_DOMAIN",
    "platform": "office365",
    "credentials": {
      "tenant": <string>,
      "client_id":   <string>,
      "client_secret": <string>
    },
    "booking_limits": {
      <string>: <integer>
    }
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="get" path="/staff/v1/tenants/id" baseUrl="" summary="Delete Tenant" %}
{% swagger-description %}
Delete a tenant
{% endswagger-description %}

{% swagger-parameter in="path" name="id" required="true" %}
The ID of the Tenant
{% endswagger-parameter %}

{% swagger-response status="202: Accepted" description="" %}
```javascript
{
    // Response
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="get" path="/staff/v1/tenants/current_limits" baseUrl="" summary="Get Current Limits" %}
{% swagger-description %}
Returns the limits for the current domains tenant
{% endswagger-description %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
  "desk": 2,
  "parking": 1
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="get" path="/staff/v1/tenants/id/limits" baseUrl="" summary="Get Limits" %}
{% swagger-description %}
Returns the limits for the specified tenant
{% endswagger-description %}

{% swagger-parameter in="path" name="id" required="true" %}
ID of the Tenant
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
  "desk": 2,
  "parking": 1
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="post" path="/staff/v1/tenants/id/limits" baseUrl="" summary="Update Booking Limits" %}
{% swagger-description %}
Update the booking limits for a tenant. Where the key is the resource and the value is the limit
{% endswagger-description %}

{% swagger-parameter in="path" name="id" required="true" %}
The Tenant ID
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    <string>: <integer>,
    <string>: <integer>
}
```
{% endswagger-response %}
{% endswagger %}
