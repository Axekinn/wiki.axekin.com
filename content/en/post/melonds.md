---
title: "melonDS Installation and Configuration"
description: "Detailed tutorial for installing, configuring and using the melonDS Nintendo DS emulator - Complete setup with BIOS, graphics and controls"
date: 2025-06-02
lastmod: 2025-06-07
categories: ["MelonDS"]
tags: ["melonDS", "Nintendo DS", "Emulation", "Gaming"]
author: "Axekin"
draft: false
toc: true
math: false
featured: true
weight: 5
aliases: 
  - /en/melonds-guide/
  - /en/guides/melonds-installation/
summary: "Learn how to install and configure melonDS for optimal Nintendo DS emulation. Complete guide with BIOS, graphics settings and advanced features."
cover: "/images/covers/melonds.png"
image: "/images/covers/melonds.png"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

## 🎮 Introduction to melonDS

**melonDS** is a modern and accurate open-source Nintendo DS emulator, developed since 2016. It stands out for its excellent compatibility, emulation precision, and advanced features like local Wi-Fi, savestates, and graphics enhancement. It's the perfect modern alternative to DeSmuME.

> 💡 **Important note**: melonDS is less demanding than most modern emulators thanks to the DS's simple architecture.

## 🔧 Step 1: Downloading melonDS

### Stable Version (Recommended)
```bash
# Official site
https://melonds.kuribo64.net/downloads.php
```

1. **Click** on "Download Windows x64"
2. **Download** `melonds-0.9.5-windows-x64.zip`
3. **Extract** to a dedicated folder (e.g., `Documents\melonDS` or at the root of another drive, not C)

### Development versions
```bash
# Automatic builds with latest features
https://github.com/melonDS-emu/melonDS/releases

Advantages:
- New improvements
- Recent fixes
- Experimental features

Risks:
- Potentially unstable
- Possible regressions
```

### melonDS Android
```bash
# Official mobile version
https://play.google.com/store/apps/details?id=me.magnum.melonds

Features:
- Optimized touch interface
- Bluetooth controller support
- Save synchronization
```

## Game Download

### Step 1: Access the game library

Go to **[🎮 Axekin Games - Nintendo DS](https://www.axekin.com/search?platform=ds)** to access the Nintendo DS game collection.

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

**Result**: You'll get game files ready to be used with melonDS! 🎯

## 📁 Step 2: Folder Structure

Create this folder structure to organize your files:

For optimal organization of your library, here's the recommended tree structure:

````
DS Games/
├── Animal Crossing: Wild World/
│   ├── BASE/                # 🎮 Base game (main file)
├── Anno 1701: Dawn of Discovery/
│   ├── BASE/                # 🎮 Base game
├── Art Academy/
│   ├── BASE/
└── Assassin's Creed: Altaïr's Chronicles/
    ├── BASE/
````

### Content types

{{< admonition tip "Understanding folders" >}}
- **BASE** 📁: The main game you download
{{< /admonition >}}

{{< admonition success "Advantages of this organization" >}}
✅ **Automatic detection**: Games are automatically added to the emulator  
✅ **Simplified management**: No need to manually select each ROM  
✅ **Clear organization**: Easy to see what content you have for each game  
✅ **Easy maintenance**: Simplified content addition/removal
{{< /admonition >}}

> **📝 Important note**: If a game doesn't have updates or DLC, there's no need to create the corresponding folders. Only create folders for content you actually have.

### Result

Once this structure is in place, your emulator will automatically detect all games present in the "DS Games" folder and organize them properly in your library! 🎯

## ⚙️ Step 3: Nintendo DS BIOS Installation

### Required BIOS files

> ⚠️ **(Not) Required**: Nintendo DSi BIOS files are required for optimal functionality.

**Necessary files:**
- `biosdsi7.bin` (16 KB) - ARM7 BIOS
- `biosdsi9.bin` (4 KB) - ARM9 BIOS  
- `dsifirmware.bin` (256 KB) - DS Firmware

**📥 Nintendo DSi BIOS Download:**

[Download Nintendo DSi BIOS](https://cdn.discordapp.com/attachments/1332956018665328702/1381293934109786246/Nintendo_DSi_Bios_for_emulators.zip?ex=6846fdb9&is=6845ac39&hm=e36162ccf2877cea45ea2ab9e004f2d38fddd8a7583be41f7e8414edc49e1383&)

> **📋 Content:** `biosdsi7.bin`, `biosdsi9.bin`, `dsifirmware.bin`

### Configuration in melonDS

1. **Launch** `melonDS.exe`
2. `Config → Emu settings → DSi-mode`
3. **Configure** BIOS paths:
   - **DS ARM9 BIOS**: `bios/biosdsi9.bin`
   - **DS ARM7 BIOS**: `bios/biosdsi7.bin`
   - **DS Firmware**: `bios/dsifirmware.bin`
4. **Restart** melonDS

## ⚙️ Step 4: Basic configuration

### General settings
```
Config → Emu settings → General
```

**Recommended configuration:**
- **Console type**: DS (or DSi if DSi games)
- **Direct boot**: ✅ Enabled (starts game directly)
- **JIT enable**: ✅ Enabled (greatly improves performance)
- **JIT max block size**: 32 (optimal)
- **JIT literal optimizations**: ✅ Enabled
- **JIT branch optimizations**: ✅ Enabled
- **JIT fast memory**: ✅ Enabled

### 3D Settings
```
Config → Video Settings
```

{{< admonition tip "Video settings interface" >}}
You'll access a window with two main sections: **Display settings** (left) and rendering settings **Software renderer** / **OpenGL renderer** (right).
{{< /admonition >}}

#### 3D Rendering Configuration

**Rendering engine selection:**

| Option | Performance | Quality | Recommendation |
|--------|-------------|---------|----------------|
| **Software** | Low | Basic | Old hardware |
| **OpenGL (Classic)** | Excellent | Very good | ✅ **Recommended** |
| **OpenGL (Compute shader)** | Variable | Maximum | Recent GPUs only |

#### OpenGL Settings (Recommended)

{{< admonition success "Optimal OpenGL configuration" >}}
**Internal resolution:** `1x native (4096x3072)` to `16x` according to your GPU
- 1x = Original DS resolution
- 2x-3x = Good quality/performance compromise  
- 4x+ = Powerful GPU required

**Enhancement options:**
- ✅ **Improved polygon splitting**: Improves geometric quality
- ✅ **Use high resolution coordinates**: Increased texture precision
{{< /admonition >}}

#### General display settings

```
Display settings (left side)
```

**Recommended configuration:**
- **VSync**: ✅ Enabled (prevents tearing)
- **VSync interval**: `1` (standard 60 FPS)
- **OpenGL display**: ✅ Checked for OpenGL display

### Visual result

{{< admonition info "Graphics improvement" >}}
With these settings, your DS games will benefit from **multiplied resolution** and **considerably improved display quality** compared to the original console!
{{< /admonition >}}

> **💡 Performance tip**: If you experience slowdowns, first reduce the **Internal resolution** before changing rendering engine.

## ⚙️ Step 5: Video and audio configuration

### Video settings
```
View
```

**Display settings:**
- **DS screen layout**: Natural, Vertical, Horizontal (your choice)
- **DS screen sizing**: Even (equal screens) or Emphasize top/bottom
- **DS screen gap**: 0-96 pixels (personal preference)
- **Screen filtering**: Linear (smoother) or Nearest (sharp pixel art)
- **Show OSD**: ✅ Enabled (useful information)

### Audio settings
```
Config → Audio settings
```

**Optimal configuration:**
- **Audio output**: Automatic (recommended)
- **Audio volume**: 256 (maximum)
- **Mic input**: Automatic or specific device
- **Mic noise gate**: ✅ Enabled (filters background noise)

## ⚙️ Step 6: Control configuration

### Keyboard controls (default)
```
Config → Input and hotkeys → DS keypad
```

**Default mapping:**
- **A**: X
- **B**: Z  
- **X**: A
- **Y**: S
- **L**: Q
- **R**: W
- **Start**: Return
- **Select**: RShift
- **D-Pad**: Arrow keys

(Personal example, put whatever you want instead)

### Controller configuration
```bash
# Automatic detection
1. Connect your controller
2. Config → Input and hotkeys → DS keypad
3. Click on a button to configure
4. Press the corresponding button on the controller
5. Repeat for all buttons

# Recommended mapping (Xbox controller)
A → A (Xbox)
B → B (Xbox)  
X → Y (Xbox)
Y → X (Xbox)
L → LB
R → RB
D-Pad → D-Pad
Start → Menu
Select → View
```

### Game launching

#### Direct method
```bash
# Simple opening
1. File → Open ROM
2. Navigate to your .nds file
3. Select and open
4. Game starts automatically

# Drag & Drop
1. Drag the .nds file onto melonDS
2. Immediate launch
```

## 🛠️ Advanced features

### Wi-Fi and local multiplayer

#### Local network configuration
```bash
# Local multiplayer melonDS
1. System → Multiplayer → Local multiplayer
2. Each melonDS instance = one console
3. Automatic detection of other instances
4. Compatible: Mario Kart DS, Pokémon, etc.

# Configuration:
- Same local network required
- Firewall: Allow melonDS
- Ports: Automatic
- Connect with RadminVPN, create your own network, and connect with your friend
```

## 🔧 Troubleshooting

### Launch problems

#### melonDS won't start
```bash
System checks:
1. Visual C++ Redistributable installed
2. OpenGL 3.2+ supported by GPU
3. Graphics drivers up to date
4. Antivirus: Exception for melonDS folder
5. Administrator rights if necessary
```

#### ROM won't launch
```bash
ROM diagnostics:
1. Format: Check valid .nds
2. Size: File not corrupted
3. BIOS: Files present and valid
4. Region: PAL/NTSC/JPN compatible
5. Protection: Some dumps require patches
```

## ❓ FAQ - Frequently Asked Questions

### General questions

**Q: Can melonDS play all DS games?**
**A:** About 97% of games work perfectly. Excellent overall compatibility.

**Q: Do I need BIOS files?**
**A:** Yes, required for optimal functionality and maximum compatibility.

**Q: Does melonDS support DSi games?**
**A:** Partial support. Some DSi games work, others not yet.

### Technical questions

**Q: OpenGL or Software renderer?**
**A:** OpenGL recommended for performance and visual enhancement. Software for compatibility.

**Q: What resolution to choose?**
**A:** 2x-3x for good quality/performance compromise. 4x+ if powerful GPU.

**Q: Is JIT safe?**
**A:** Yes, required for good performance. No security risk.

### Common problems

**Q: Lag despite good PC?**
**A:** Check JIT enabled, use OpenGL, reduce scale factor if necessary.

**Q: Save doesn't work?**
**A:** Check write permission for saves folder, correct ROM format.

**Q: Wi-Fi doesn't work?**
**A:** Wi-Fi limited to supported games, network configuration required.

## 🎯 Conclusion

**Rediscover the Nintendo DS library in high definition with melonDS! 🎮✨**