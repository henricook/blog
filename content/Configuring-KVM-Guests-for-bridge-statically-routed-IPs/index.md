---
title: "Configuring KVM Guests (In a bridge fashion) on a network using statically routed IPs"
date: "2009-02-20T12:00:00.000Z"
categories: 
  - Sysadmin
  - Technical Support
  - Ubuntu

published: true
---

I recently co-located a new server to find that I was given one ‘main ip’ on subnet X and all my additional IPs were on subnet Y. This has happened in the past but the Datacentre setup usually has a gateway on each subnet to allow for internet access. This was not the case in this instance, instead the additional IPs were expected to use the host machine as a gateway (bound to lo:* addresses). In my previous KVM setups i’ve had br0 as a bridge over eth0 and all guests have received unadulterated access to the network to use the standard network config (i.e. the same gateway as the host machine).

In this case that didn’t work (as machines with their primary IPs on subnet Y could not access the subnet X gateway, and there wasn’t one for subnet Y).

Instead with a lot of help from the Bluesquare support team we were able to come up with a solution, using a virtual device (br:0) bound to one of the IPs in subnet Y to act as a gateway, effectively bridging the connections between addresses on subnet Y with the main address on subnet X. This is best explained by showing you my /etc/network/interfaces on both host and example client, both running Ubuntu Linux (Server ed.):

Throughout please assume 192.168.1.100 is the machine’s main IP (on subnet X) and 192.168.2.xxx is subnet Y with 192.168.2.101 being the additional IP chosen to act as our ‘virtual gateway’:

On the host:

    # The primary network interface
    auto eth0
    iface eth0 inet manual

    # Standard bridge interface on the main IP
    auto br0
    iface br0 inet static
    address 192.168.1.100
    network 192.168.1.0
    netmask 255.255.255.0
    broadcast 192.168.1.255
    gateway 192.168.1.1
    bridge_ports eth0
    bridge_fd 0
    bridge_hello 2
    bridge_maxage 12
    bridge_stp off
    # Virtual Bridge for additional IPs
    auto br0:1
    iface br0:1 inet static
    address 192.168.2.101
    netmask 255.255.255.0 

On the guest:

    # The primary network interface
    auto eth0
    iface eth0 inet static
    address 192.168.2.105
    netmask 255.255.255.0
    network 192.168.2.0
    broadcast 192.168.2.255
    gateway 192.168.2.101

    auto br0:1
    iface br0:1 inet static
    address 192.168.2.101

In the Libvirt Configuration file (or convert to command line if you so wish):

    <interface type=’bridge’>
    <mac address=’00:16:3e:01:00:15′/>
    <model type=’e1000′/>
    <source bridge=’br0′/>
    </interface> 

Finally:

    Make sure “echo 1 > /proc/sys/net/ipv4/ip_forward” has been executed – IP forwarding will be needed for this.

Conclusions:

I actually like this approach, although it wastes one of my paid-for IPs it allows all my guests to use one of my own IPs as a gateway. If for any reason I ever need to change the gateway of the host, I no longer have to go through each individual client and change the settings there as well.

Please post any comments/questions.

