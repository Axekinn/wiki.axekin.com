---
title: "Ryujinx Installation and Configuration"
description: "Detailed tutorial for installing, configuring and optimizing the Ryujinx Nintendo Switch emulator - Complete setup with firmware, keys and settings"
date: 2025-06-02
lastmod: 2025-06-07
categories: ["gaming", "emulation", "tutorials"]
tags: ["ryujinx", "nintendo-switch", "emulation", "installation", "configuration", "gaming"]
series: ["Emulation Guides"]
author: "Axekin"
draft: false
toc: true
math: false
featured: true
weight: 20
aliases: 
  - /en/ryujinx-guide/
  - /en/guides/ryujinx-installation/
summary: "Learn how to install and configure Ryujinx for optimal Nintendo Switch emulation. Complete guide with firmware, keys and optimizations."
cover: "/images/covers/ryujinx.png"
image: "/images/covers/ryujinx.png"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

## 🎮 Introduction to Ryujinx

**Ryujinx** is an open-source Nintendo Switch emulator written in C#. It allows you to play Nintendo Switch games on PC with excellent performance and constantly improving compatibility.

## 🔧 Step 1: Downloading Ryujinx

### Option 1: Stable Version (Recommended)
```bash
# Visit the official website
https://ryujinx.app/
```

1. Click on **"Download"**
2. Extract the archive to a dedicated folder (e.g., `Documents\Ryujinx` or at the root of another drive, not C)

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

**Result**: You'll get game files ready to be used with Ryujinx! 🎯

## 📁 Step 2: Folder Structure

Create this folder structure to organize your files:

For optimal organization of your library, here's the recommended tree structure:

````
Switch Games/
├── Mario Kart 8 Deluxe/
│   ├── BASE/                # 🎮 Base game (main file)
│   ├── UPDATE/              # 🔄 Game update (recommended)
│   └── DLC/                 # 📦 Downloadable content (optional)
├── New Super Mario Bros U Deluxe/
│   ├── BASE/                # 🎮 Base game
│   ├── UPDATE/              # 🔄 Game update
│   └── DLC/                 # 📦 Additional DLC
├── The Legend of Zelda BOTW/
│   ├── BASE/
│   ├── UPDATE/
│   └── DLC/
└── Super Mario Odyssey/
    ├── BASE/
    └── UPDATE/              # (No DLC for this game)
````

### Content types

{{< admonition tip "Understanding folders" >}}
- **BASE** 📁: The main game you download
- **UPDATE** 📁: Updates and patches (recommended)
- **DLC** 📁: Additional paid content (optional but recommended)
{{< /admonition >}}

{{< admonition success "Advantages of this organization" >}}
✅ **Automatic detection**: Games are automatically added to the emulator  
✅ **Simplified management**: No need to manually select each ROM  
✅ **Clear organization**: Easy to see what content you have for each game  
✅ **Easy maintenance**: Simplified content addition/removal
{{< /admonition >}}

> **📝 Important note**: If a game doesn't have updates or DLC, there's no need to create the corresponding folders. Only create folders for content you actually have.

### Result

Once this structure is in place, your emulator will automatically detect all games present in the "Switch Games" folder and organize them properly in your library! 🎯

## 💡 Portable Configuration (Recommended)

{{< admonition tip "Portable installation" >}}
**Before the first launch**, create a folder named `portable` at the root of the Ryujinx directory. This operation will make the installation entirely portable.
{{< /admonition >}}

### Advantages of portable mode

| Aspect | Normal mode | Portable mode |
|--------|-------------|---------------|
| **Configurations** | Stored in system | Stored in folder |
| **Saves** | Scattered on computer | Centralized in folder |
| **Portability** | ❌ Tied to system | ✅ Easily movable |
| **Backup** | Hard to locate | Simple to backup |

### Structure after creating portable folder

```
📁 Ryujinx/
├── 🎮 Ryujinx.exe
├── 📁 portable/              # ← Create this folder!
│   ├── 📁 bis/
│   ├── 📁 games/
│   ├── 📁 profiles/
│   └── 📁 system/
└── 📄 Other files...
```

{{< admonition success "Result" >}}
**All your data** (configurations, saves, profiles) will be stored in the `portable` folder, greatly facilitating management and backups!
{{< /admonition >}}

### Creation instructions

1. **Navigate** to the Ryujinx installation folder
2. **Create** a new folder named exactly `portable`
3. **Launch** Ryujinx - it will automatically detect portable mode

> **📝 Note**: This operation must be performed **before** the first launch to be taken into account!

## ⚙️ Step 3: Initial configuration

### First launch
1. **Execute** `ryujinx.exe`
2. **Install keys**
- [Keys version 20.0.1 | 20.1.0](https://cdn.discordapp.com/attachments/1055844117344690296/1378798667779149856/Keys-20.0.1.zip?ex=68448153&is=68432fd3&hm=ca448d573b22f44a791a294708b3728a933114448dff0da746b31b7bcf72e818&)

#### Installation in Ryujinx
1. **Open** Ryujinx
2. `File → Open Ryujinx Folder`
3. **Navigate** to the `system/` folder
4. **Copy** `prod.keys` and `title.keys` (if present, but useless) inside
5. **Restart** Ryujinx

### Installing Nintendo Switch firmware

- [Firmware 20.1.0](https://cdn.discordapp.com/attachments/1055844117344690296/1378798667779149856/Keys-20.0.1.zip?ex=68448153&is=68432fd3&hm=ca448d573b22f44a791a294708b3728a933114448dff0da746b31b7bcf72e818&)

#### Installation in Ryujinx
1. `Action → Install Firmware → Install Firmware from a XCI or ZIP`
2. **Select** the firmware .zip file
3. **Wait** for complete installation

### Essential settings configuration

#### Interface settings
```
Options → Settings → User Interface
```
- **Game Directories**: Set the **Switch Games** directory you created previously
- **Autoload DLC/Updates Directories**: Same as above
- **Theme**: Choose what you want

#### Input settings
```
Options → Settings → Input
```
- **Input Device**: Connect your controller, then select it
- **Let it do**: Configuration is automatic, change buttons you want afterwards
- **Keyboard/mouse**: For keyboard/mouse players, adjust your keys

#### System settings
```
Options → Settings → System
```
- **System Region**: Your country
- **System Language**: Your language
- **Audio Backend**: SDL2 (recommended)
- **Volume**: 100%

## 🚀 Performance optimization

### Advanced settings for better performance

#### CPU
```
Settings → CPU
- Enable PTC (Profiled Translation Cache): ✅ Enabled
- Memory Manager Mode: Host
```

#### GPU
```
Settings → Graphics
- Shader Cache: ✅ Enabled
- Texture Recompression: ✅ Enabled
- Resolution Scale: 1x (or higher if sufficient performance). Same for Anti Aliasing, scaling filter and anisotropic filtering, adjust the value according to your PC's power
```

## 🌐 Multiplayer mode configuration

### Enabling online mode

{{< admonition info "Network configuration" >}}
**Go to** `Options → Settings → Network → Mode` and select **RyuLDN**.
{{< /admonition >}}

### Recommended connection mode

| Connection Type | Action in game | Result |
|-----------------|----------------|--------|
| **❌ To avoid** | "Online" or "Internet" options | Connection to Nintendo servers |
| **✅ Recommended** | "Play locally" or "Local wireless" options | Connection via RyuLDN |

### Connection process

```
1. RyuLDN configuration enabled ✅
2. Game launch
3. Select "Play locally" in menu
4. Automatic connection with other Ryujinx players
```

{{< admonition tip "Multiplayer advice" >}}
Make sure all players use **the same version** of the game and have **RyuLDN enabled** for optimal connection!
{{< /admonition >}}

## 🛠️ Common troubleshooting

### Problem: Game won't launch
```bash
Solutions:
1. Check that firmware is installed
2. Check that prod.keys are present
3. Test with different graphics settings
```

### Problem: Poor performance
```bash
Solutions:
1. Reduce resolution to 1x
2. Temporarily disable V-Sync
3. Close other applications
4. Use Vulkan instead of OpenGL
```

### Problem: Frequent crashes
```bash
Solutions:
1. Update Ryujinx to latest version
2. Check integrity of your game files
3. Reinstall firmware
4. Test with default settings
```

## ❓ FAQ - Frequently Asked Questions

### General questions

**Q: Is Ryujinx legal?**
**A:** Yes, emulation is legal. However, you must legally own all games and firmware you use.

**Q: Can I play online with Ryujinx?**
**A:** Yes, via RyuLDN for local play emulation.

**Q: What are the minimum system requirements?**
**A:** Windows 10 64-bit, Intel Core i5-4430 / AMD FX-6300, 8GB RAM, DirectX 11 compatible GPU.

### Technical questions

**Q: Vulkan or OpenGL?**
**A:** Vulkan is generally more performant on recent GPUs. OpenGL can be more stable on some systems.

**Q: How much RAM minimum?**
**A:** 8GB minimum, 16GB recommended, 32GB for the heaviest games.

**Q: Is my GPU compatible?**
**A:** Any GPU supporting DirectX 11 or Vulkan 1.1. GTX 1060/RX 580 for good performance.

## 🎯 Conclusion

With this complete guide, you now have all the keys to:
- **Install** and configure Ryujinx optimally
- **Optimize** performance according to your hardware
- **Solve** common problems
- **Enjoy** your Nintendo Switch games with superior quality

---

> **Reminder**: Always respect copyrights and support developers by buying their games.

**Have fun with Ryujinx! 🎮✨**
````