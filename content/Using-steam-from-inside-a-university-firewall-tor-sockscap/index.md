---
title: "Using Steam from inside a university firewall (w/Tor + Sockscap)"
description: "Our university firewall is shockingly restrictive, this meant that recently I couldn’t even download a game that I bought using Steam (this is my first time using the Steam system)..."
date: "2009-02-15T12:00:00.000Z"
categories: 
  - Sysadmin
  - Technical Support

published: true
---

Our university firewall is shockingly restrictive, this meant that recently I couldn’t even download a game that I bought using Steam (this is my first time using the Steam system).

There instructions will also work for any program you might be unable to use behind a firewall in a university that’s still old-fashioned enough to limit its residential users in this way.

1. Install Tor (https://www.torproject.org/download.html.en) – Standard configuration is fine

2. Tor is now listening on 9050 for SOCKSv4 connections, install SocksCap (http://www.brothersoft.com/sockscap-192885.html) – Standard Configuration, setup the SocksV4 proxy on port 9050 when prompted to provide Sockscap settings.

3. Add the ‘Steam’ launcher to Sockscap

4. Run Steam, optionally keep the Tor window with the bandwidth graph open to confirm everything is working.

This is a very simple guide, I haven’t gone into the ’step by step’ configuration of any of these components – if you can’t figure it out you probably shouldn’t be doing something so complicated.

Typically you can get ~40k/s over the Tor network, i’m looking into the ability to provide one’s own Tor proxy (with privileged bandwidth for the owner) – more soon!

Nevertheless if you have any questions. please post them here.
