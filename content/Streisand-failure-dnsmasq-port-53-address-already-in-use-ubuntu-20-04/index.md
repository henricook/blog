---
title: "port 53: Address already in use when installing Streisand on Ubuntu 20.04"
description: "Whilst installing Streisand on Ubuntu 20.04 I came across this error related to dnsmasq. Luckily it's simple to solve."
date: "2020-06-26T17:30:00.000Z"
categories: 
  - Streisand
  - VMs
  - Proxy
  - Ubuntu
  - Linux

published: true
---

Whilst installing Streisand on Ubuntu 20.04 I came across this error related to dnsmasq. Luckily it's simple to solve.

![](./dnsmasq-port-53-already-in-use.jpeg)

See what's listening:

```
sudo netstat -tulpn | grep ":53 "
```

There's something hogging our port! Result:

```
tcp        0      0 127.0.0.53:53           0.0.0.0:*               LISTEN      582/systemd-resolve 
udp        0      0 127.0.0.53:53           0.0.0.0:*                           582/systemd-resolve
```

Kill this out of the box Ubuntu service:

```
# sudo systemctl disable systemd-resolved
Removed /etc/systemd/system/multi-user.target.wants/systemd-resolved.service.
Removed /etc/systemd/system/dbus-org.freedesktop.resolve1.service.
# sudo systemctl stop systemd-resolved
```

Retry streisand install, done.