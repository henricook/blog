---
title: "Corrections for the Youtube Analytics “Sample Application”"
description: "I’ve recently tried out the YT Analytics sample application. I had a few problems and had to trawl the internet to find the solutions, they weren’t overly easy to find so here they are to help you…"
date: "2015-09-13T17:30:57.572Z"
categories: 
  - JavaScript
  - Nodejs

published: true
---

![](./asset-1.jpeg)

I’ve recently tried out the YT Analytics sample application. I had a few problems and had to trawl the internet to find the solutions, they weren’t overly easy to find so here they are to help you out.

index.js has a couple of notable omissions.

1.  Change this:

```
function handleAuthResult(authResult) {
 if (authResult) {
```

to this:

```
function handleAuthResult(authResult) {
 if (authResult && !authResult.error) {
```

If you don’t do this you’ll see an error about:

_The request uses the <code>mine</code> parameter but is not properly authorized._

2\. If you see this error:

_Daily Limit for Unauthenticated Use Exceeded. Continued use requires signup._

Create an ‘API Key’ -> ‘Browser Key’ in the Developers Console (http://console.developers.google.com) to complement your existing OAuth key, don’t forget to set the proper javascript origins again. This is for the Data API. Find the following line:

```
gapi.auth.authorize({
 client_id: OAUTH2_CLIENT_ID,
 scope: OAUTH2_SCOPES,
 immediate: true
 }, handleAuthResult);
 }
```

Add above the authorize line:

```
gapi.client.setApiKey(‘YOUR_API_KEY_HERE’);
```

3\. I couldn’t get anything working with:

```
immediate: true
```

in the checkAuth() function. I had to change it to:

```
immediate: false
```

You should now see the ‘authorize’ link rather than an error when you load the page, and it’ll let you OAuth and view channel statistics for your account as you’d expect.