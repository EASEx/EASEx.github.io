---
sidebar_position: 4
---

# Data Types

## Duration

Duration string is a signed sequence of decimal numbers with optional fraction and unit suffix, like “100ms”, “2.3h” or “4h35m”. See [here](https://docs.gomplate.ca/functions/time/#time-parseduration) for more details.

:::danger

EASEx only uses time deltas and thus does not need to rely upon timezones. Please ensure that both the server and application are configured correctly to use the same time zone.

:::