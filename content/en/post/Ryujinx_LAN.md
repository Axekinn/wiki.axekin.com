---
title: "Setting up XLink Kai with Ryujinx"
date: 2025-06-03
draft: false
categories: ["Ryujinx", "XLink Kai"]
tags: ["Ryujinx", "XLink Kai", "Nintendo Switch", "Emulation", "Multiplayer"]
author: "Axekin"
description: "Detailed tutorial for configuring XLink Kai with the Nintendo Switch emulator Ryujinx for multiplayer gaming"
cover: "/images/covers/ryujinx.png"
---

## 🎮 Introduction to XLink Kai + Ryujinx

**XLink Kai + Ryujinx** allows players to emulate Nintendo Switch games over a network. This experimental integration enables you to play multiplayer with other Ryujinx users or even with real Nintendo Switch consoles.

> ⚠️ **Important note**: XLink Kai + Ryujinx support is experimental and currently only available on Windows.

## 📋 What works

- Nintendo Switch games with LAN support
- Nintendo Switch games with Local Wireless support
- Ryujinx playing against other Ryujinx players
- Ryujinx playing against players on Switch (CFW required for Local Wireless games)
- Ryujinx and local Switch playing together
- Mixing any combination of the above!

## ❌ What doesn't work

- macOS support not yet available
- Linux support not yet available

## 🌐 Connection types

### LAN Games

LAN games are the most widely supported and the following configurations can play together:

- Players using unmodified "OFW" Nintendo Switch and Nintendo Switch Lite systems
- Players using modified "CFW" Nintendo Switch systems
- Players using Ryujinx

### Local Wireless Games

Local Wireless games are a bit more restricted, but the following configurations can play together:

- Players using modified "CFW" Nintendo Switch systems with the ldn_mitm system module
- Players using Ryujinx

> ⚠️ **Important**: Unmodified "OFW" Nintendo Switch and Nintendo Switch Lite systems are not supported for Local Wireless games.

## 🔧 Network Configuration

### Windows

These instructions are specific to Windows 10 and Windows 11. Older versions of Windows should follow a similar process.

#### Installing NPCAP

Due to licensing issues, XLink Kai ships with WinPCAP which unfortunately is not compatible with loopback adapters. To solve this problem, you will need to install NPCAP. Version 1.31 is known to be stable.

1. **Download** NPCAP from [the official website](https://npcap.com/#download)
2. **Install** NPCAP with the default options (simply click "Next" until the end)

#### Running kaiLoopbackBridge

1. **Open** Windows Explorer and navigate to `C:\Program Files (x86)\XLink Kai\`
2. **Find** `kaiLoopbackBridge64.exe`, right-click, **Run as Administrator**
3. **Read** the warning, press any key to continue
4. **Select** Nintendo Switch as the emulator type
5. The loopback adapter will now be automatically configured
6. **Close** kaiLoopbackBridge. We will use it again later.

## ⚙️ Installing and Configuring Ryujinx

Ryujinx setup is quite simple, check the [Ryujinx Guide](https://wiki.axekin.com/en/post/ryujinx/) for basic installation.

### Network settings

#### For LAN Games

1. Once Ryujinx is running, access the configuration by clicking **Options** then **Settings**
2. Click the **System** tab
3. Check the **Enable VSync** box
4. Check the **Enable Guest Internet Access** box
5. Click the **Multiplayer** tab
6. Under the LAN heading, set **Network Interface** to **XLink Kai Loopback Switch XXXX**
7. **Save** the configuration and exit Ryujinx

#### For Local Wireless Games

1. Once Ryujinx is running, access the configuration by clicking **Options** then **Settings**
2. Click the **System** tab
3. Check the **Enable VSync** box
4. Click the **Network** tab
5. Uncheck the **Enable Guest Internet Access** box 
6. Under the Multiplayer heading, set **Mode** to **ldn_mitm**
7. Under the LAN heading, set **Network Interface** to **XLink Kai Loopback Switch XXXX**
8. **Save** the configuration and exit Ryujinx

## 🎮 Playing a game on XLink Kai

Since Ryujinx and XLink Kai cannot communicate directly with each other (yet), kaiLoopbackBridge is used as a "bridge" between them.

1. **Start** XLink Kai and log in
2. **Start** kaiLoopbackBridge, navigate through the prompts and keep it open for the entire duration of your gaming session. After a few seconds, XLink Kai will see a Nintendo Switch under the Metrics tab.
3. **Start** Ryujinx and launch your game. Ryujinx must not be running before you launch kaiLoopbackBridge.
4. **Navigate** to a game arena and play!

{{< admonition tip "Important advice" >}}
Make sure to always launch the applications in this order:
1. XLink Kai
2. kaiLoopbackBridge
3. Ryujinx
{{< /admonition >}}

{{< admonition warning "Troubleshooting" >}}
If you encounter connection problems:
- Check that all firewalls allow XLink Kai and Ryujinx
- Make sure the loopback adapter is properly configured
- Restart all applications in the correct order
{{< /admonition >}}

---

> **Reminder**: Emulation is legal if you legally own the games you emulate. Always support developers by buying their games.

**Enjoy multiplayer gaming with Ryujinx and XLink Kai! 🎮✨**
(This tutorial is based entirely on the official X Link Kai tutorial; I have simply updated it.)

````