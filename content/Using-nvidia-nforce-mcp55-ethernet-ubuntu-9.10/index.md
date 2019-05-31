---
title: "Using Nvidia/Nforce (MCP55) on-board ethernet with Ubuntu 9.10 (Karmic)"
description: "Ever since Ubuntu Gutsy i’ve had issues with the wired ethernet (MCP55) on my ABit IN-9 32X Max – there are two problems, i’ve summated them and the way that I work around them below..."
date: "2010-04-05T12:00:00.000Z"
categories: 
  - Ubuntu
  - Technical Support

published: true
---

Ever since Ubuntu Gutsy i’ve had issues with the wired ethernet (MCP55) on my ABit IN-9 32X Max – there are two problems, i’ve summated them and the way that I work around them below:

1\. Interfaces appear in ‘ifconfig’ but do not establish connection/accept DHCP address
  
  Most people with this problem say add the following to /etc/modprobe.d/forcedeth.conf (which may need creating):
  
  ```
  options forcedeth msi=0 msix=0 
  ```
  
  Then issue the command (as root) – be warned this is potentially dangerous but assuming you’ve made no other changes should be fine:
  
  ```
  update-initramfs -u
  ``` 
  
  Reboot. This is the permanent fix but if you wanted to try it out temporarily, from a terminal as root type:
  
  ```
  rmmod forcedeth
  modprobe forcedeth msi=0 msix=0
  /etc/init.d/networking restart
  ``` 
  
2\. Interfaces don’t appear in 'ifconfig' or only appear intermittently
  
  This happened to me a lot of the time and it took a long time to figure out a workaround. Somehow the interfaces get deactivated, and they can’t be bought back online by the OS. I think perhaps booting to Windows which never seemed to recognise my wired ethernet might influence this but have no evidence to back this up.
  
  The ‘fix’ is to power down the the PC and wait at least 10 seconds to clear everything in the board’s EPROM before powering up again – when I do this I also turn off the PSU but I don’t know that this is necessary. Usually then when I reboot the devices appear in Ubuntu. Your mileage may vary but do let me know how this goes/if you think anything should be added in the comments.