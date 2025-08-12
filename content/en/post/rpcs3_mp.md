---
title: "RPCS3 Netplay (RPCN) Guide"
date: 2025-08-12
draft: false
categories: ["RPCS3"]
tags: ["RPCS3"]
author: "Axekin"
description: "Step-by-step guide to configure RPCS3 Netplay using RPCN: global setup, per-game settings, troubleshooting, and account recovery."
series: ["Emulation Guides"]
toc: true
math: false
featured: false
weight: 20
aliases:
  - /en/rpcs3-netplay-guide/
  - /en/guides/rpcs3-rpcn-netplay/
summary: "Learn how to set up and use RPCS3 Netplay (RPCN). This guide covers global configuration, per-game settings, connectivity fixes, and RPCN account recovery."
cover: "/images/covers/rpcs3.png"
image: "/images/covers/rpcs3.png"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

> Play PS3 games online via RPCN with a smooth, reliable setup. Follow the quick checklist, then dive deeper when needed.

> 📝 Author’s note  
> RPCS3 has never been easier to set up for multiplayer gaming. For those of you who are more tech-savvy, I've included the RPCS3 tutorial, which is very well explained.

## ⚡ Quick Start Checklist

- Update to the latest RPCS3 build
- Create and verify an RPCN account
- Per‑game: Network = Connected, PSN = RPCN
- DNS 8.8.8.8 (unless the game needs another)
- UPnP enabled on PC/router or forward UDP 3658
- Test Account in RPCN window

## ℹ️ What is RPCN?

RPCN is a community‑made replacement for PSN used by RPCS3 to enable online features in supported games.

> ⚠️ Disclaimer  
> In 99% of cases you do not need to change firewall, NAT/UPnP, or port‑forwarding settings. RPCS3 + RPCN should work out of the box on most networks. Only touch these settings if online connectivity with the other player fails after following the steps below.

## ✅ Requirements

| Item | Recommendation | Note |
|------|----------------|------|
| RPCS3 | Latest build | Auto-updater or fresh download |
| Ports | UDP 3658 | UPnP or manual port forwarding |
| NAT | Open/Type A | Avoid double NAT/CGNAT |
| Firewall | Allow RPCS3 | OS and security suite |

---

## 🔧 Global configuration

1. Open RPCS3 → Configuration → **RPCN**
2. Click **Account**
3. Select server: **Official RPCN Server**
4. Click **Create Account**
5. Set a **Username** → OK
6. Enter **Password** twice → OK
7. Enter **Email** twice → OK
8. Confirm summary → **Yes**
9. Success message → an “RPCN: Username” window appears
10. Check mailbox for the RPCN **token** → paste in **Token** → OK
11. Click **Test Account**

> 💡 Pro tip  
> Keep your token private. If you lose it, use “Resend Token” in Edit Account.

---

## 🎯 Game-specific configuration

1. In the game list, right‑click the title → **Create Custom Configuration**
2. Go to **Network**
3. **Network Status**: Connected
4. **PSN Status**: RPCN
5. **DNS**: `8.8.8.8` (unless the game requires another)
6. If the game needs a custom server, enter the IP/Host switches provided by the community

> 💡 Per‑game overrides  
> These settings apply only to this game and won’t change your global configuration.

![RPCS3 RPCN netplay proof (Assault Heroes)](/images/covers/rpcs3_mp.png)  
*Proof it works: Online Multiplayer running via RPCN on RPCS3.*

---

## 🌐 Connectivity essentials

- Enable UPnP in RPCS3: Configuration → Network → **Enable UPnP**
- Enable UPnP on your router (manual varies by model)
- Or forward port **3658/UDP** to your PC’s local IP

<details>
  <summary>Show port forwarding notes</summary>

- Forward: UDP 3658 → your PC IP (reserve via DHCP)  
- Avoid double NAT (bridge ISP modem if needed)  
- VPNs may block inbound UDP; either configure port forwarding on the VPN or disable it while playing
</details>

> 🚧 NAT & ISP constraints  
> Strict NAT or CGNAT can break peer connectivity. Ask your ISP for a public IPv4 or use a VPN supporting port forwarding.

---

## 🛠️ Troubleshooting

### Can’t connect to other players
- UPnP enabled in RPCS3 and on the router
- Or forward UDP 3658 to your PC
- Allow RPCS3 through firewall/security suite
- Disable or reconfigure VPN
- RPCN → Account → **Test Account**

<details>
  <summary>Advanced checks</summary>

- Confirm your PC’s IP didn’t change (DHCP reservation)  
- Detect double NAT (modem + router both routing)  
- Router NAT test should target Open/Type A
</details>

---

## 🔐 Recover RPCN Account

### Resend RPCN Token
1. RPCS3 → Configuration → RPCN → **Account**
2. **Edit Account** → **Resend Token**
3. Confirm → OK → check email “Your token for RPCN”
4. Paste token into **Token** field → OK → **Save**

### Reset RPCN Password
1. RPCS3 → Configuration → RPCN → **Account**
2. **Edit Account** → **Change Password**
3. Confirm username → OK
4. When asked “Do you already have a reset password token?” → **No**
5. Enter signup email twice → OK
6. Check email “Your password reset code for RPCN”
7. Paste token → OK
8. Enter new password twice → OK
9. Back in Edit Account → **Set Password** → enter new password → OK → **Save**
10. RPCN: **Test account**

---

### Good practice
- Use strong, unique passwords  
- Don’t share your token  
- Keep RPCS3 updated for the latest RPCN fixes  

> Respect game licenses and online terms of service. Support developers by purchasing their games.

🎯 Result: You’re ready to play online via RPCN!
````