---
title: "Boot hangs after grub on Ubuntu 18.04, 17.10 with Nvidia Drivers sometimes, often after booting Windows"
description: "Running nvidia-390 or -396 on Ubuntu 18.04 (Bionic) and 17.10 on a Windows dual boot machine I would sometimes encounter a blank screen after grub, especially when rebooting from Windows and…"
date: "2018-05-05T09:58:46.641Z"
categories: 
  - Linux
  - Nvidia
  - Ubuntu

published: true
canonicalLink: https://medium.com/@henricook/boot-hangs-after-grub-on-ubuntu-18-04-742e6067dd87
---

Running nvidia-390 or -396 on Ubuntu 18.04 (Bionic) and 17.10 on a Windows dual boot machine I would sometimes encounter a blank screen after grub, especially when rebooting from Windows and attempting to boot to linux.

I tried a lot of things to investigate this, the only signal that something was wrong i could find is that the grub screen would have a 30 second timeout instead of a 10 second timeout seemingly every time the error was due to occur. Looking into that it looks like Grub has a ‘recordfail’ mode that causes this long timeout, I don’t know what else it does but it would appear that’s what was breaking my boot.

Edit `/etc/grub.d/00_header`and find a line setting recordfail=1 (enabling recordfail) — change this to ‘0’ and run `update-grub`and profit.

If anyone discovers just what recordfail was doing to bork this up I’d be very interested to hear.