---
title: "Azahar Installation and Configuration"
date: 2025-06-02
draft: false
categories: ["Citra"]
tags: ["Citra"]
author: "Axekin"
description: "Detailed tutorial for installing, configuring and using Nintendo 3DS emulator Azahar"
series: ["Emulation Guides"]
toc: true
math: false
featured: false
weight: 20
aliases: 
  - /en/citra-cheats-mods/
  - /en/guides/citra-modding/
summary: "Learn how to install cheat codes and game modifications on Citra emulator. Detailed tutorial with folder structure and installation steps."
cover: "/images/covers/azahar.webp"
image: "/images/covers/azahar.webp"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

## 🎮 Introduction to Citra

**Citra** is the world's most advanced open-source Nintendo 3DS emulator. Developed since 2013, it allows you to play 3DS games on PC with significant graphics improvements and near-perfect compatibility.

## 🔧 Step 1: Downloading Citra

### Option 1: Official Azahar
```bash
# Official site
https://github.com/azahar-emu/azahar/releases
```

1. **Click** on "Download for Windows"
2. **Download** `azahar-XXXX-rc1-windows-msvc-installer.exe`
3. **Extract** to a dedicated folder (e.g., `Documents\Azahar` or at the root of another drive, not C)

## Game Download

### Step 1: Access the game library

Go to **[🎮 Axekin Games - Nintendo 3DS](https://www.axekin.com/games?platform=3ds)** to access the Nintendo 3DS game collection.

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

**Result**: You'll get game files ready to be used with 3DS! 🎯

## 📁 Step 2: Folder Structure

Create this folder structure to organize your files:

For optimal organization of your library, here's the recommended tree structure:

````
3DS Games/
├── Animal Crossing - Happy Home Designer/
│   ├── BASE/                # 🎮 Base game (main file)
│   ├── UPDATE/              # 🔄 Game update (recommended)
│   └── DLC/                 # 📦 Downloadable content (optional)
├── Dead or Alive - Dimensions/
│   ├── BASE/                # 🎮 Base game
│   ├── UPDATE/              # 🔄 Game update
│   └── DLC/                 # 📦 Additional DLC
├── Ben 10 - Galactic Racing/
│   ├── BASE/
│   ├── UPDATE/
│   └── DLC/
└── Captain America - Super Soldier/
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

Once this structure is in place, your emulator will automatically detect all games present in the "3DS Games" folder and organize them properly in your library! 🎯

## 💡 Portable Configuration (Recommended)

{{< admonition tip "Portable installation" >}}
**Before the first launch**, create a folder named `user` at the root of the Azahar directory. This operation will make the installation entirely portable.
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
📁 Azahar/
├── 🎮 Azahar.exe
├── 📁 user/              # ← Create this folder!
│   ├── 📁 bis/
│   ├── 📁 games/
│   ├── 📁 profiles/
│   └── 📁 system/
└── 📄 Other files...
```

{{< admonition success "Result" >}}
**All your data** (configurations, saves, profiles) will be stored in the `user` folder, greatly facilitating management and backups!
{{< /admonition >}}

### Creation instructions

1. **Navigate** to the Azahar installation folder
2. **Create** a new folder named exactly `user`
3. **Launch** Azahar - it will automatically detect portable mode

> **📝 Note**: This operation must be performed **before** the first launch to be taken into account!

## ⚙️ Step 3: Installation and first launch

### Windows Prerequisites Installation

### First launch
1. **Execute** `azahar.exe`
2. **Set** the games folder (double click on the menu, add the "3DS Games" folder)

## ⚙️ Step 3: Optimal Configuration

### General settings
```
Emulation → Configure → General
```
- **Confirm exit while emulation is running**: ✅ Enabled
- **Pause emulation when in background**: ✅ Enabled (optional)
- **Enable Discord Presence**: ✅ Enabled (optional)

### System configuration
```
Emulation → Configure → System
```
- **Region**: Europe (or your region)
- **Language**: Your language
- **Console ID**: Random (generated automatically)
- **Enable New 3DS**: ✅ Enabled (for better performance)

### Optimal graphics settings

#### Graphics tab
```
Graphics → General
- Internal Resolution: 2x Native (400x480) or higher. The higher the value, the more GPU it will consume
- Enable Linear Filtering: ✅ Enabled
→ General
```

#### Layout tab

```
Graphics → Layout
```

{{< admonition tip "Screen layout interface" >}}
This section allows you to customize the display of the two 3DS screens according to your visual preferences and hardware configuration.
{{< /admonition >}}

### Screen layout

**Predefined layout options:**

| Mode | Description | Recommendation |
|------|-------------|----------------|
| **Default** | Standard Nintendo configuration | ✅ **Beginners** |
| **Single Screen** | Shows only the active screen | Gameplay focus |
| **Large Screen** | Stretches across full width | Wide screens |
| **Side by Side** | Horizontal screens | **Recommended gaming** |
| **Separate Windows** | Two independent windows | Multi-monitors |
| **Hybrid Screen** | Overlapped screens | Space saving |
| **Custom Layout** | Manual configuration | ⭐ **Most flexible** |

### Custom configuration

{{< admonition success "Advanced custom layout" >}}
**Top screen:**
- **Position X/Y**: `0px, 0px` (top left corner)
- **Width/Height**: `800px, 480px` (optimal 4:3 ratio)

**Bottom screen:**
- **Position X/Y**: `80px, 500px` (slightly centered)
- **Width/Height**: `640px, 480px` (proportional)

**Bottom screen opacity**: `100%` (full visibility)
{{< /admonition >}}

### Display settings

#### General options
```
Screens → Configuration
```

**Recommended settings:**
- **Swap Screens**: ❌ Disabled (keeps DS logic)
- **Upright Screens**: ❌ Disabled
- **Screen Gap**: `0.00` to `4.00` according to preference
- **Large Screen Proportion**: `4.00` (main screen larger)
- **Small Screen Proportion**: `Bottom Right` (touch position)

#### Single screen layout

{{< admonition note "Single screen mode" >}}
**Usage:**
- Games using only one main screen
- Display resource saving
- Focus on main action

**Configuration:**
- **Stretched**: ☑️ Checked for both screens
- **Left/Right Margin**: `0px` (full screen)
- **Top/Bottom Margin**: `0px` (maximum usage)
{{< /admonition >}}

> **💡 Practical tip**: Test different layouts according to the game. RPGs work better with custom layout, while action games often prefer side-by-side mode.

#### Advanced tab
```
Graphics → Advanced
- Graphics API: OpenGL (recommended) or Vulkan
- Enable Hardware Renderer: ✅ Enabled
- Enable Hardware Shader: ✅ Enabled
- Enable Accurate Multiplication: ✅ Enabled
- Use Disk Shader Cache: ✅ Enabled
- Enable VSync: ✅ Enabled
```

### Audio configuration
```
Audio
- Emulation: HLE
```

### Controls configuration

#### Automatic method
```
Controls → Configure
1. Click on "Auto Configuration"
2. Press the buttons on your controller
3. Test all controls
```

### Supported formats
- **.CCI**: Only format supported with my ROMs with Azahar, due to their anti-piracy restrictions

## ❓ FAQ - Frequently Asked Questions

### General questions

**Q: Can Azahar run all 3DS games?**
**A:** About 90% of 3DS games work well to perfectly. Check the compatibility database for your specific game.

**Q: Does stereoscopic 3D work?**
**A:** Yes, with 3D glasses or a 3D screen. Side-by-Side mode also available for VR.

**Q: Can I use my real 3DS saves?**
**A:** Yes, with Checkpoint or JKSM you can transfer your saves both ways.

### Technical questions

**Q: Why are some games slow?**
**A:** 3DS games are optimized for specific hardware. Emulation requires more power, especially for complex games.

**Q: OpenGL or Vulkan?**
**A:** OpenGL is more stable and compatible. Vulkan can offer better performance on recent GPUs.

**Q: Does New 3DS Mode improve all games?**
**A:** Mainly games that use it natively (Xenoblade, Monster Hunter, etc.) and some homebrews.

### Common problems

**Q: "Could not determine the system region"?**
**A:** Install system files (aes_keys.txt) and configure the region in settings.

**Q: HD textures don't display?**
**A:** Check that "Custom Textures" is enabled and that the Title ID matches the folder.

**Q: How to improve performance on Android?**
**A:** Use Citra MMJ, reduce resolution, enable frame skip if necessary.

**Enjoy your 3DS games in high definition! 🎮✨**