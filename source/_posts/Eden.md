---
title: "Installation and Configuration of Eden"
description: "Detailed tutorial to install, configure, and optimize the Nintendo Switch emulator Eden - Complete setup with keys, firmware, and settings"
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
summary: "Learn how to install and configure Eden (Yuzu fork) for optimal Nintendo Switch emulation. Complete guide with firmware, keys, and optimizations."
cover: "covers/yuzu.png"
image: "covers/yuzu.png"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

## 🎮 Introduction to Yuzu

**Eden** is an open-source Nintendo Switch emulator developed by the Citra team. Known for its high performance and growing compatibility, Eden is one of the most popular Switch emulators in the world.

> ⚠️ **Legal Note**: This emulemmelator is intended only for playing games you legally own. Emulation for backup and research purposes is legal, but piracy is not.

## 🔧 Step 1: Downloading Eden

```bash
# Official website
https://eden-emu.dev/download
```

## Downloading your game

### Step 1: Access the game library

Go to **[🎮 Axekin Games - Nintendo Switch](https://www.axekin.com/games?platform=switch)** to access the Nintendo Switch game collection.

### Step 2: Download the game

1. **Search** for the desired game in the list
2. **Click** the download button
3. **Wait** for the download to finish

### Step 3: Extract the file

Once the download is complete, **extract** the archive using one of these programs:

| Software   | Download Link                             | Compatibility    |
|------------|-------------------------------------------|------------------|
| **7-Zip**  | [Download 7-Zip](https://www.7-zip.org/) | Windows/Linux    |
| **WinRAR** | [Download WinRAR](https://www.win-rar.com/)| Windows         |

> **💡 Tip**: 7-Zip is free and open-source, while WinRAR requires a license after the trial period.

**Result**: You will get game files ready to use with Eden! 🎯

## ⚙️ Step 2: Installation and configuration

### First launch
1. **Run** `eden.exe` as administrator
2. **Accept** the initial setup
3. **Configure** the base folders

## 🎯 Step 3: Installing keys and firmware

### Installing encryption keys

#### Automatic method
- [Keys version 18.X.X](https://files-prodkeys.b-cdn.net/prodkeys/ProdKeys.net-v18.-1-0.zip)
- [Keys version 19.X.X](https://files.prodkeys.net/ProdKeys.net-v19.0.1.zip)
- [Keys version 20.X.X](https://files.prodkeys.net/ProdKeys.net-v20.0.1.zip)

#### Installation in Eden
1. **Open** Eden
2. `File → Open Eden Folder`
3. **Navigate** to the `keys/` folder
4. **Copy** `prod.keys` and `title.keys` inside
5. **Restart** Eden

### Installing Nintendo Switch firmware

- [Firmware 19.0.1](https://github.com/THZoria/NX_Firmware/releases/download/19.0.1/Firmware.19.0.1.zip)
- [Firmware 20.1.5](https://github.com/THZoria/NX_Firmware/releases/download/19.0.1/Firmware.20.1.5.zip)
- [Firmware 20.2.0](https://github.com/THZoria/NX_Firmware/releases/download/19.0.1/Firmware.20.2.0.zip)
- [Firmware 20.3.0](https://github.com/THZoria/NX_Firmware/releases/download/19.0.1/Firmware.20.3.0.zip)
- [Firmware 20.4.0](https://github.com/THZoria/NX_Firmware/releases/download/19.0.1/Firmware.20.4.0.zip)
- [Firmware 20.5.0](https://github.com/THZoria/NX_Firmware/releases/download/20.5.0/Firmware.20.5.0.zip)


#### Installation in Eden
1. `Tools → Install Firmware`
2. **Select** the firmware .zip file
3. **Wait** for the installation to complete
4. **Check**: `Tools → Firmware Version`

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
- **Region**: Europe (If you are in Europe, otherwise set your region)
- **Language**: French (If you are in France, otherwise set your language)
- **RTC Source**: System Clock
- **Time Zone**: Europe/Paris
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
- Resolution Scaler: 1x (or higher if your GPU is powerful)
- Anti-Aliasing: None or FXAA
```

### Audio configuration
```
Audio
- Output Engine: auto
- Output Device: Default
- Volume: 100%
```

### Controller configuration

#### Xbox/PlayStation/Switch/Any compatible controller
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

## Game configuration in the emulator

### Adding the games folder

In the emulator menu, **double-click** then select the folder containing all your games.

### Recommended folder structure

For optimal organization of your library, here is the recommended structure:

````
Switch Games/
├── Mario Kart 8 Deluxe/
│   ├── BASE/                # 🎮 Main game (main file)
│   ├── UPDATE/              # 🔄 Game update (recommended)
│   └── DLC/                 # 📦 Downloadable content (optional)
├── New Super Mario Bros U Deluxe/
│   ├── BASE/                # 🎮 Main game
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


- **BASE** 📁: The main game you download
- **UPDATE** 📁: Updates and patches (recommended)
- **DLC** 📁: Additional paid content (optional but recommended)


✅ **Automatic detection**: Games are automatically added to the emulator  
✅ **Simplified management**: No need to manually select each ROM  
✅ **Clear organization**: Easy to see what content you have for each game  
✅ **Easy maintenance**: Adding/removing content is simple

> **📝 Important note**: If a game has no update or DLC, there is no need to create the corresponding folders. Only create folders for the content you own.

### Result

Once this structure is in place, your emulator will automatically detect all games in the "Switch Games" folder and neatly organize them in your library! 🎯

### Installing updates
```bash
# In Yuzu
File → Install Files to NAND
→ Select the .nsp update file
```

### Installing DLC
```bash
# In Yuzu
File → Install Files to NAND
→ Select the .nsp DLC file
```

## 🔧 Troubleshooting

### Common problems and solutions

#### Game does not launch
```bash
Solutions in order of priority:
1. Check firmware installation
2. Check keys (prod.keys/title.keys)
3. Test with default settings
4. Reinstall Visual C++ Redistributables
5. Update Eden to the latest version
```

#### Low performance
```bash
Immediate optimizations:
1. Reduce Resolution Scaler to 1x
2. Enable Multicore CPU Emulation
3. Use Vulkan instead of OpenGL
4. Close background applications
5. Check CPU/GPU temperatures

Final note: Installing a mod to increase FPS will NOT increase your FPS. If a game is designed to run at 30fps, but on your PC it runs at 15-20fps (hello Pokémon Scarlet), adding a mod will do NOTHING. Get a better PC, and for those who say I'm lying, I laugh in advance at their ability to talk nonsense.
```

#### Frequent crashes
```bash
Diagnostics:
1. Check game integrity (SHA256)
2. Test without mods
3. Lower the accuracy level
4. Disable overclocking
5. Test with an older version of Yuzu
```

#### Desynchronized audio
```bash
Solutions:
1. Change Output Engine (auto → WASAPI)
2. Adjust the audio buffer
3. Check audio drivers
4. Disable Windows audio effects
```

#### Corrupted graphics
```bash
Fixes:
1. Delete the shader cache
2. Change graphics API (Vulkan ↔ OpenGL)
3. Update GPU drivers
4. Lower Accuracy Level
5. Temporarily disable ASTC decoding
```

## ❓ FAQ - Frequently Asked Questions

### General questions

**Q: Is Eden legal?**  
**A:** Yes, emulation is legal. However, you must legally own all games, keys, and firmware you use.

**Q: Can I play online with Eden?**  
**A:** Yes

### Technical questions

**Q: Vulkan or OpenGL?**  
**A:** Vulkan is generally more performant on recent GPUs. OpenGL may be more stable on some systems.

**Q: How much RAM minimum?**  
**A:** 8GB minimum, 16GB recommended, 32GB for the heaviest games with mods.

**Q: Is my GPU compatible?**  
**A:** Vulkan: GTX 1060/RX 580 minimum. OpenGL: Any GPU supporting OpenGL 4.6.

## 🎯 Conclusion

With this complete guide, you now have all the keys to:
- **Install** and optimally configure Yuzu
- **Optimize** performance according to your hardware
- **Solve** common problems
- **Enjoy** your Nintendo Switch games with superior quality

---

> **Reminder**: Always respect copyright and support developers by buying their games.

**Enjoy your games with Eden! 🎮✨**
````