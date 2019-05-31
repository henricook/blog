---
title: "Bad VPN Speeds on Asus RT-AC87U"
description: "After a lot of experiment on my RT-AC87U and pulling of hair over *dreadful* VPN speeds i’ve come to the conclusion that it just doesn’t have the processing power to handle encryption overhead. I can…"
date: "2017-04-25T18:41:42.714Z"
categories: 
  - VPN
  - Privacy

published: true
---

Tried NordVPN, Private Internet Access (PIA) and others

After a lot of experiment on my RT-AC87U and pulling of hair over \*dreadful\* VPN speeds i’ve come to the conclusion that it just doesn’t have the processing power to handle encryption overhead.

I can normally average 13MB/s down from home, with a VPN i’d expect this to go to half or 2/3 because of the overhead, but using the router-based VPN client i was lucky to get 1MB/s which was totally unsatisfactory.

I switched to command line OpenVPN on my desktop and speeds are within the expected range 5–7MB/s

So unfortunately, the moral of this story is — don’t use the RT-AC87U’s built in VPN Client if you want good speeds!