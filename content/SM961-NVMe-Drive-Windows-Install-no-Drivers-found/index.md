---
title: "SM961 NVMe Drive Windows Install — no Drivers found"
description: "This is a niche post, I had a world of hurt trying to reinstall windows on a machine where it had worked previously with my PCIe NVMe drive. Windows install would start but no drivers were ever…"
date: "2018-01-29T08:49:09.767Z"
categories: 
  - Linux
  - Windows
  - Nvme
  - Software

published: true
canonicalLink: https://medium.com/@henricook/sm961-nvme-drive-windows-install-no-drivers-found-e474acbad3a6
---

This is a niche post, I had a world of hurt trying to reinstall windows on a machine where it had worked previously with my PCIe NVMe drive. Windows install would start but no drivers were ever found.

My windows install image was on a USB I’d burned from my linux partition

I tried loading a second USB stick with every driver under the sun and still ‘no drivers found’ — what was even weirder is when i plugged in a straight SATA spin disk… still no drivers found.

Hours spent with Dell technical support and eventually I happened upon the solution, which probably isn’t what you think.

I’d burned the Windows ISO with a normal image burning tool in Linux. Turns out that, for whatever reason, doesn’t burn the installer properly. It boots, the installer starts, but never finds any drivers.

This has taught me an important lesson. Always burn your windows images on linux with WoeUSB (WinUSB fork): [https://github.com/slacka/WoeUSB](https://github.com/slacka/WoeUSB)

After that, drivers found no problem — no extras needed.

Annoyingly i’d already wiped my whole disk in an attempt to fix it… wish i’d discovered this earlier!