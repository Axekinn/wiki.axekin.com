---
title: "Eden Installation and Configuration"
description: "Detailed tutorial to install, configure and optimize the Nintendo Switch emulator Eden - Complete setup with keys, firmware and settings"
date: 2025-06-02
lastmod: 2025-06-07
categories: ["Yuzu"]
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

**Yuzu** is an open-source Nintendo Switch emulator developed by the Citra team. Renowned for its high performance and growing compatibility, Yuzu is one of the most popular Switch emulators worldwide.

> ⚠️ **Legal notice**: This emulator is intended to play only games you legally own. Emulation for backup and research purposes is legal, but piracy is not (I would have said that if I were myself in legality)

## 🔧 Step 1: Eden Download

```bash
# Official website
https://git.eden-emu.dev/eden-emu/eden#download
```

## Downloading your game

### Step 1: Access the game library

Visit **[🎮 Axekin Games - Nintendo Switch](https://www.axekin.com/search?platform=switch)** to access the Nintendo Switch game collection.

### Step 2: Download the game

1. **Search** for the desired game in the list
2. **Click** on the download button
3. **Wait** for the download to complete

### Step 3: File extraction

Once the download is complete, **extract** the archive with one of these software:

| Software | Download Link | Compatibility |
|----------|---------------|---------------|
| **7-Zip** | [Download 7-Zip](https://www.7-zip.org/) | Windows/Linux |
| **WinRAR** | [Download WinRAR](https://www.win-rar.com/) | Windows |

> **💡 Tip**: 7-Zip is free and open-source, while WinRAR requires a license after the trial period.

**Result**: You will get game files ready to be used with Eden! 🎯

## ⚙️ Step 2: Installation and configuration

### First launch
1. **Run** `yuzu.exe` as administrator
2. **Accept** the initial setup
3. **Configure** the basic folders

## 🎯 Step 3: Keys and firmware installation

### Installing encryption keys

#### Automatic method
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

## ⚙️ Step 4: Optimal configuration

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
- **Region**: Europe (If you're in Europe, otherwise set your location)
- **Language**: English (If you're English-speaking, otherwise set your language)
- **RTC Source**: System Clock
- **Time Zone**: Your timezone
- **Sound Output Mode**: Stereo

### Optimal graphics settings

#### API Tab
```
Graphics → API
- API: Vulkan (recommended) or OpenGL
- Device: Your main GPU
- Shader Backend: GLSL (Vulkan) / GLASM (OpenGL)
```

#### Graphics Tab
```
Graphics → Graphics
- Use disk pipeline cache: ✅ Enabled
- Use asynchronous GPU emulation: ✅ Enabled
- Use asynchronous shader building: ✅ Enabled
- Accelerate ASTC texture decoding: ✅ Enabled
- VSync Mode: FIFO (Recommended)
```

#### Advanced Graphics Tab
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

### Controls configuration

#### Xbox/PlayStation/Switch/Any controller
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

## 🎮 Step 5: Adding and optimizing games

### Supported formats
- **.NSP**: Nintendo Submission Package (eShop games)
- **.XCI**: NX Card Image (Physical cards)
- **.NCA**: Nintendo Content Archive (Raw content)
- **.NSZ**: Compressed NSP (requires tools)
- **.XCZ**: Compressed XCI (requires tools)

## Configuring games in the emulator

### Adding the games folder

In the emulator menu, **double-click** then select the folder that contains all your games.

### Recommended folder structure

For optimal library organization, here's the recommended directory structure:

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

{{< admonition success "Benefits of this organization" >}}
✅ **Automatic detection**: Games are automatically added to the emulator  
✅ **Simplified management**: No need to manually select each ROM  
✅ **Clear organization**: Easy to see what content you have for each game  
✅ **Easy maintenance**: Simplified adding/removing content
{{< /admonition >}}

> **📝 Important note**: If a game has no update or DLC, there's no need to create the corresponding folders. Only create folders for content you own.

### Result

Once this structure is in place, your emulator will automatically detect all games present in the "Switch Games" folder and organize them properly in your library! 🎯

### Installing updates
```bash
# In Yuzu
File → Install Files to NAND
→ Select the update .nsp file
```

### Installing DLC
```bash
# In Yuzu
File → Install Files to NAND
→ Select the DLC .nsp file
```

## 🔧 Troubleshooting

### Common problems and solutions

#### Game won't launch
```bash
Solutions in order of priority:
1. Check firmware installation
2. Check keys (prod.keys/title.keys)
3. Test with default settings
4. Reinstall Visual C++ Redistributables
5. Update Eden to the latest version
```

#### Poor performance
```bash
Immediate optimizations:
1. Reduce Resolution Scaler to 1x
2. Enable Multicore CPU Emulation
3. Use Vulkan instead of OpenGL
4. Close background applications
5. Check CPU/GPU temperatures

Final note: installing a mod to increase FPS will NOT increase your FPS. If a game is made to run at 30fps, but on your PC runs at 15-20fps (hello Pokémon Scarlet), adding a mod will do NOTHING. Get a better PC, and those who tell you I'm lying, I'm already laughing at their competence to talk nonsense
```

#### Frequent crashes
```bash
Diagnostics:
1. Check game integrity (SHA256)
2. Test without mods
3. Reduce accuracy level
4. Disable overclocking
5. Test with an earlier version of Yuzu
```

#### Desynchronized audio
```bash
Solutions:
1. Change Output Engine (auto → WASAPI)
2. Adjust audio buffer
3. Check audio drivers
4. Disable Windows audio effects
```

#### Corrupted graphics
```bash
Corrections:
1. Delete shader cache
2. Change graphics API (Vulkan ↔ OpenGL)
3. Update GPU drivers
4. Reduce Accuracy Level
5. Temporarily disable ASTC decoding
```

## 🎯 Advanced tips and tricks

### Save management

#### Save location
```bash
# Windows
%APPDATA%\yuzu\nand\user\save\account\[user-id]\[title-id]\

# Linux
~/.local/share/yuzu/nand/user/save/account/[user-id]/[title-id]/

# Android
Android/data/org.yuzu.yuzu_emu/files/nand/user/save/
```

## ❓ FAQ - Frequently Asked Questions

### General questions

**Q: Is Eden legal?**
**A:** Yes, emulation is legal. However, you must legally own all games and firmware you use.

**Q: Can I play online with Eden?**
**A:** Yes

### Technical questions

**Q: Vulkan or OpenGL?**
**A:** Vulkan is generally more performant on recent GPUs. OpenGL can be more stable on some systems.

**Q: How much RAM minimum?**
**A:** 8GB minimum, 16GB recommended, 32GB for the heaviest games with mods.

**Q: Is my GPU compatible?**
**A:** Vulkan: GTX 1060/RX 580 minimum. OpenGL: Any GPU supporting OpenGL 4.6.

## 🎯 Conclusion

With this complete guide, you now have all the keys to:
- **Install** and configure Yuzu optimally
- **Optimize** performance according to your hardware
- **Solve** common problems
- **Enjoy** your Nintendo Switch games with superior quality

---

> **Reminder**: Always respect copyright and support developers by buying their games.

**Have fun with Yuzu! 🎮✨**
````