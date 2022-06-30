---
description: If the user browses to the root of the domain which UI should loa
---

# Configuring a default UI

By default the root URL `https://my.domain.com/` will redirect to `https://my.domain.com/backoffice/`

To override this behaviour:

1. Goto the domains tab in backoffice
2. select the domain you would like to configure
3. add the following config

```
{
  "default_app": "/concierge/"
}
```

![](<../../.gitbook/assets/image (9) (1) (1).png>)
