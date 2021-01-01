---
title: "Http4s Tips and Tricks"
description: "Things that I regularly need to remember about Http4s but struggle to find in the documentation"
date: "2021-01-01T09:00:00.000Z"
categories: 
  - Functional Scala
  - Scala
  - Notes
  - Http4s

published: true
---

![](./http4s-logo.svg)

# Get the text body of a response with EntityDecoder

If you've got a request like this:

```scala
val postRequest: Task[Request[Task]] = POST(
                                     payload,
                                     uri
                                   )
```

and you just want the body as text (e.g. for debug), use:

```scala
postRequest.map { req =>
  client.run(req).use {
    case Status.Successful(resp) =>
      EntityDecoder.decodeText(resp).flatMap { respText =>
        logger.info(s"The body of the response as text is: " + respText)
      }
  }
}
```