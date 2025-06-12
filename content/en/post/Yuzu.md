---
title: "Eden Installation and Configuration"
description: "Detailed tutorial for installing, configuring and optimizing the Eden Nintendo Switch emulator - Complete setup with keys, firmware and settings"
date: 2025-06-02
lastmod: 2025-06-07
categories: ["gaming", "emulation", "tutorials"]
tags: ["eden", "yuzu", "nintendo-switch", "emulation", "installation", "configuration", "gaming", "firmware"]
series: ["Emulation Guides"]
author: "Axekin"
draft: false
toc: true
math: false
featured: true
weight: 10
aliases: 
  - /en/eden-yuzu-guide/
  - /en/guides/eden-installation/
summary: "Learn how to install and configure Eden (Yuzu fork) for optimal Nintendo Switch emulation. Complete guide with firmware, keys and optimizations."
cover: "/images/covers/yuzu.png"
image: "/images/covers/yuzu.png"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

## 🎮 Introduction to Yuzu

**Yuzu** is an open-source Nintendo Switch emulator developed by the Citra team. Renowned for its high performance and growing compatibility, Yuzu is one of the most popular Switch emulators in the world.

> ⚠️ **Legal note**: This emulator is intended for playing only games you legally own. Emulation for backup and research purposes is legal, but piracy is not (I would have said that if I were myself in legality)

## 🔧 Step 1: Eden Download

```bash
# Official site
https://git.eden-emu.dev/eden-emu/eden#download
```

## Game Download

### Step 1: Access the game library

Go to **[🎮 Axekin Games - Nintendo Switch](https://www.axekin.com/search?platform=switch)** to access the Nintendo Switch game collection.

### Step 2: Download the game

1. **Search** for the desired game in the list
2. **Click** on the download button
3. **Wait** for the download to complete

### Step 3: File extraction

Once the download is finished, **extract** the archive with one of these software:

| Software | Download Link | Compatibility |
|----------|---------------|---------------|
| **7-Zip** | [Download 7-Zip](https://www.7-zip.org/) | Windows/Linux |
| **WinRAR** | [Download WinRAR](https://www.win-rar.com/) | Windows |

> **💡 Tip**: 7-Zip is free and open-source, while WinRAR requires a license after the trial period.

**Result**: You'll get game files ready to be used with Eden! 🎯

## ⚙️ Step 2: Installation and configuration

### First launch
1. **Run** `yuzu.exe` as administrator
2. **Accept** the initial configuration
3. **Configure** the base folders

## 🎯 Step 3: Keys and firmware installation

### Installing encryption keys

#### Automatic method (Homebrew required)

- [Keys version 20.0.1 | 20.1.0](https://cdn.discordapp.com/attachments/1055844117344690296/1378798667779149856/Keys-20.0.1.zip?ex=68448153&is=68432fd3&hm=ca448d573b22f44a791a294708b3728a933114448dff0da746b31b7bcf72e818&)

#### Installation in Yuzu
1. **Open** Yuzu
2. `File → Open Eden Folder`
3. **Navigate** to the `keys/` folder
4. **Copy** `prod.keys` and `title.keys` inside
5. **Restart** Yuzu

### Installing Nintendo Switch firmware

- [Firmware 20.1.0](https://cdn.discordapp.com/attachments/1055844117344690296/1378798667779149856/Keys-20.0.1.zip?ex=68448153&is=68432fd3&hm=ca448d573b22f44a791a294708b3728a933114448dff0da746b31b7bcf72e818&)

#### Installation in Yuzu
1. `Tools → Install Firmware`
2. **Select** the firmware .zip file
3. **Wait** for complete installation
4. **Verify**: `Tools → Firmware Version`

## ⚙️ Step 5: Optimal configuration

### General settings
```
Emulation → Configure → General
```
- **Limit Speed Percent**: 100% (for normal speed)
- **Multicore CPU Emulation**: ✅ Enabled
- **Extended Memory Layout**: ✅ Enabled (if 12GB+ RAM)

### System configuration
```
Emulation → Configure → System
```
- **Region**: Europe (If you're in Europe, otherwise put where you are)
- **Language**: English (If you're in an English-speaking country, otherwise put where you are)
- **RTC Source**: System Clock
- **Time Zone**: Your timezone
- **Sound Output Mode**: Stereo

### Optimal graphics settings

#### API tab
```
Graphics → API
- API: Vulkan (recommended) or OpenGL
- Device: Your main GPU
- Shader Backend: GLSL (Vulkan) / GLASM (OpenGL)
```

#### Graphics tab
```
Graphics → Graphics
- Use disk pipeline cache: ✅ Enabled
- Use asynchronous GPU emulation: ✅ Enabled
- Use asynchronous shader building: ✅ Enabled
- Accelerate ASTC texture decoding: ✅ Enabled
- VSync Mode: FIFO (Recommended)
```

#### Advanced Graphics tab
```
Graphics → Advanced
- Accuracy Level: Normal (High for more precision)
- Use Fast GPU Time: ✅ Enabled
- Use Vulkan pipeline cache: ✅ Enabled (if Vulkan)
- Anisotropic Filtering: 16x
- Resolution Scaler: 1x (or higher if powerful GPU)
- Anti-Aliasing: None or FXAA
```

### Audio configuration
```
Audio
- Output Engine: auto (or WASAPI on Windows)
- Output Device: Default
- Volume: 100%
```

### Control configuration

#### Xbox/PlayStation/Switch/Whatever controller you have
```
Controls → Configure
1. Player 1 → Connected Controller: Pro Controller
2. Configure → Automatically map
3. Test all buttons
```

#### Keyboard (temporary)
```
Controls → Configure
1. Player 1 → Connected Controller: Handheld
2. Configure → Manual mapping
3. Assign keys to buttons
```

## 🎮 Step 6: Adding and optimizing games

### Supported formats
- **.NSP**: Nintendo Submission Package (eShop games)
- **.XCI**: NX Card Image (Physical cards)
- **.NCA**: Nintendo Content Archive (Raw content)
- **.NSZ**: Compressed NSP (requires tools)
- **.XCZ**: Compressed XCI (requires tools)

## Game configuration in the emulator

### Adding the game folder

In the emulator menu, **double-click** then select the folder that contains all your games.

### Recommended folder structure

For optimal organization of your library, here's the recommended tree structure:
