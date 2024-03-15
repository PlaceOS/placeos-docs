---
description: Using drivers to provide capabilities to large language models
---

# ChatGPT / LLM Capabilities

It's possible to create a custom LLM chat bot per system, providing the LLM with the ability to execute functions within the system.

<figure><img src="../../../../.gitbook/assets/image (33).png" alt=""><figcaption><p>Example system configuration</p></figcaption></figure>

For a system to work as a ChatGPT chat bot it requires the [PlaceOS LLM Interface driver](https://github.com/PlaceOS/drivers/blob/master/drivers/place/llm/llm.cr).\
This driver is used to define the system prompt and the initial message to display to the user.

Drivers implementing the ChatFunctions interface expose the available functionality to the LLM.

### Building a capability

Each driver should encapsulate related functions that can easily be summarised. This summary is used by the LLM to discover the driver with the function it needs.

The key to building effective functions is to make them as human friendly as possible. If the parameters are hard to understand and not constructed for a human the LLM will produce more errors. An example would be to use parsable date strings over Unix timestamps.

Descriptions should explain how to use any non-obvious parameters and be firm when describing any order of operations:

```crystal
# Capability example
getter capabilities : String do
  String.build do |str|
    str << "provides details of my daily schedule, meeting room bookings and events I'm attending.\n"
    str << "lookup or search for the email and phone numbers of other staff members if you haven't been provided their details. Do not guess.\n"
    str << "check schedules before booking or moving meetings to ensure no one is busy at that time\n"
  end
end
```

```crystal
# Parameter usage example, only functions with descriptions are provided to the LLM
@[Description("search for a staff members phone and email addresses using odata filter queries, don't include `$filter=`, for example: `givenName eq 'mary' or startswith(surname,'smith')`, confrim with the user when there are multiple results, search for both givenName and surname using `or` if there is ambiguity")]
def search_staff_member(filter : String)
  # ...
end

```

See the example [TODO driver](https://github.com/PlaceOS/drivers/blob/master/drivers/place/llm/todo\_list.cr) and spec as a template.

### Configuring access to OpenAI or Azure APIs

Either OpenAI or Azure APIs can be used to provide LLM model functionality. API keys can be defined for each domain in the internal settings.

<figure><img src="../../../../.gitbook/assets/image (34).png" alt=""><figcaption></figcaption></figure>

#### Settings

```yaml
"openai": {
  # either the OpenAI or Azure API key
  "api_key": "",
  # specify your Azure API URI here. Don't include key if not in use.
  "api_base": "",
  "api_model": "gpt-4-1106-preview",
  # max tokens before the conversation needs to be truncated
  # this is a good default for GPT 4
  "max_tokens": 11264
}
```

### Chat API

These HTTP and Websocket API routes available for interfacing with the LLM

#### Websocket

To establish a new chat, open a websocket to:\
WS /api/engine/v2/chatgpt/chat/:system\_id

Request messages are raw strings (frontend -> backend)\
&#x20;   **What do I have on today?**

Response messages are JSON encoded (backend -> frontend)

```yaml
{
  # use the chat_id to recover a chat if the websocket is disconnected
  "chat_id": "chats-GXs4_ynIhe",
  "message": "checking Schedule capabilities",
  # progress messages are provided as the request is worked on
  "type": "progress",
  "function": "list_function_schemas",
  # token usage is provided for debugging purposes
  # as you don't want requests exceeding your limits
  "usage": {
    "prompt_tokens": 883,
    "completion_tokens": 16,
    "total_tokens": 899
  }
}
```

```yaml
{
  "chat_id": "chats-GXs4_ynIhe",
  "message": "performing action: Schedule.my_schedule({\"day_offset\" => 0})",
  "type": "progress",
  "function": "call_function",
  "usage": {
    "prompt_tokens": 2197,
    "completion_tokens": 26,
    "total_tokens": 2223
  }
}
```

```yaml
{
  "chat_id": "chats-GXs4_ynIhe",
  "message": "condensing progress: Checked schedule for today, no meetings are present.",
  "type": "progress",
  "function": "task_complete",
  "usage": {
    "prompt_tokens": 2240,
    "completion_tokens": 23,
    "total_tokens": 2263
  },
  # progress messages are pruned from the chat to minimize token usage
  "compressed_usage": 883
}
```

```yaml
{
  "chat_id": "chats-GXs4_ynIhe",
  "message": "You don't have any meetings scheduled for today. Is there anything else you would like to know or do?",
  "type": "response",
  "usage": {
    "prompt_tokens": 931,
    "completion_tokens": 23,
    "total_tokens": 954
  },
  "compressed_usage": 954
}
```

If the websocket is dropped you can resume the chat where you left off by re-establishing with the **resume** parameter:\
WS /api/engine/v2/chatgpt/chat/:system\_id?resume=chats-GXs4\_ynIhe

#### REST API Routes

* List your past chats\
  GET /api/engine/v2/chatgpt/
* List the chat history\
  GET /api/engine/v2/chatgpt/:chat\_id
* Delete chat history\
  DELETE /api/engine/v2/chatgpt/:chat\_id
