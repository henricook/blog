---
title: "How to remove “on behalf of” when sending via GSuite"
description: "If you have an aliased domain you use to send mail as part of your Google Apps account and are annoyed by the “on behalf of” that appears when recipients read your messages, this is for you. There’s…"
date: "2018-05-05T06:32:58.409Z"
categories: 
  - Email
  - G Suite

published: true
---

If you have an aliased domain you use to send mail as part of your Google Apps account and are annoyed by the “on behalf of” that appears when recipients read your messages, this is for you.

e.g. “bob@bobsalias.com via bob@bobsgsuitedomain.com”

There’s several guides online that will suggest you have to set an ‘external SMTP’ server to get around this — i’ve found that solution ineffective.

What did work was the following:

-   Ensure your domain is setup as an alias in the GSuite admin console
-   Ensure your aliased domain has correct DKIM and SPF records
-   Profit

In cases where I was seeing ‘on behalf of’ my alias’ed domain’s DNS settings only had the mx records for Google setup, they did not have proper DKIM and SPF. Since I was using Google Domains for DNS i just had to remove my manual mx settings and use the ‘GSuite Synthetic record’ setting which added all the appropriate fields for me.

I hope this works for you!