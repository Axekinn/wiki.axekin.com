---
title: "Cemu Installation and Configuration"
date: 2025-06-14
draft: false
categories: ["Cemu"]
tags: ["Cemu", "Nintendo Wii U", "Emulation", "Gaming"]
author: "Axekin"
description: "Detailed tutorial for installing, configuring and using Nintendo Wii U emulator Cemu"
series: ["Emulation Guides"]
toc: true
math: false
featured: false
weight: 20
aliases: 
  - /en/cemu-guide/
  - /en/guides/cemu-setup/
summary: "Complete guide for installing and configuring Cemu, the most performant Wii U emulator. Installation, optimal configuration and tips."
cover: "covers/cemu.webp"
image: "covers/cemu.webp"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

## 🎮 Introduction to Cemu

**Cemu** is the most performant and accomplished Nintendo Wii U emulator available. Developed since 2015, it allows you to play Wii U exclusives on PC with spectacular graphical improvements, mods and excellent compatibility.

## 🔧 Step 1: Downloading Cemu

### Recommended option: Official version
```bash
# Official website
https://github.com/cemu-project/Cemu/releases
```

1. **Click** on your OS
2. **Download** `cemu_X.X.X.zip` (latest version)
3. **Extract** to a dedicated folder (e.g.: `Emulators\Cemu` or at the root of a secondary drive)

## 📦 Downloading your games

### Step 1: Access the game library

Go to **[🎮 Axekin Games - Nintendo Wii U](https://www.axekin.com/games?platform=wiiu)** to access the Nintendo Wii U game collection.

### Step 2: Download the game

1. **Search** for the desired game in the list
2. **Click** on the download button
3. **Wait** for the download to complete

### Step 3: Extract the file

Once the download is complete, **extract** the archive with one of these software:

| Software | Download Link | Compatibility |
|----------|---------------|---------------|
| **7-Zip** | [Download 7-Zip](https://www.7-zip.org/) | Windows/Linux |
| **WinRAR** | [Download WinRAR](https://www.win-rar.com/) | Windows |

> **💡 Tip**: 7-Zip is free and open-source, while WinRAR requires a license after the trial period.

**Result**: You will get game files ready to be used with Cemu! 🎯

## 📁 Step 2: Folder structure

For optimal organization of your library, here's the recommended file tree:

````
Wii U Games/
    Super Mario 3D World/
   ├── BASE
   │   ├── code/      # 🎮 Game code (main .rpx file)
   │   ├── content/   # 📁 Game content (textures, audio, etc.)
   │   └── meta/      # 📋 Metadata (icon, title, etc.)
   ├── UPDATE     
   │   ├── code/      # 🎮 Game code (main .rpx file)
   │   ├── content/   # 📁 Game content (textures, audio, etc.)
   │   └── meta/      # 📋 Metadata (icon, title, etc.)            
   ├── DLC   
   │   ├── code/      # 🎮 Game code (main .rpx file)
   │   ├── content/   # 📁 Game content (textures, audio, etc.)
   │   └── meta/      # 📋 Metadata (icon, title, etc.)   
    Zelda Breath Of The Wild/
   ├── BASE
   │   ├── code/      # 🎮 Game code (main .rpx file)
   │   ├── content/   # 📁 Game content (textures, audio, etc.)
   │   └── meta/      # 📋 Metadata (icon, title, etc.)
   ├── UPDATE     
   │   ├── code/      # 🎮 Game code (main .rpx file)
   │   ├── content/   # 📁 Game content (textures, audio, etc.)
   │   └── meta/      # 📋 Metadata (icon, title, etc.)            
   ├── DLC   
   │   ├── code/      # 🎮 Game code (main .rpx file)
   │   ├── content/   # 📁 Game content (textures, audio, etc.)
   │   └── meta/      # 📋 Metadata (icon, title, etc.)    
            
````

### Content types


- **code/** 📁: Contains the main .rpx file of the game
- **content/** 📁: Game assets (textures, sounds, videos)
- **meta/** 📁: Metadata and icons
- **Updates/** 📁: Game updates (important for compatibility)



✅ **Automatic detection**: Cemu scans and automatically adds games  
✅ **Simplified management**: Clear interface in Cemu  
✅ **Easy updates**: Dedicated folder for updates and DLC
✅ **Maximum compatibility**: Structure respecting the official Wii U format


## 💡 Portable configuration (Recommended)


Cemu is portable by default. All configurations are stored in the `mlc01` installation folder, facilitating backups and portability.


### Portable installation structure

```
📁 Cemu/
├── 🎮 Cemu.exe
├── 📁 gameProfiles/      # Game profiles
├── 📁 graphicPacks/      # Graphic packs and mods
├── 📁 memorySearcher/    # Memory search tools
├── 📁 mlc01/            # Virtual Wii U system data
├── 📁 shaderCache/      # Compiled shader cache
└── 📄 settings.xml      # Main configuration
```


**✅ Easy backup**: Only one folder to backup  
**✅ Total portability**: Movable to any PC  
**✅ Preserved configurations**: No loss during reinstallation  
**✅ Simplified sharing**: Easily shareable configuration


## ⚙️ Step 3: Installation and first launch

### First launch

1. **Execute** `Cemu.exe` as administrator (first launch only)
2. **Set** the games folder in `Game paths`
3. **Add** your "Wii U Games" folder
4. **Download** graphic packs
5. **Verify** that games appear in the library

- Then click on Close, we'll configure the controller later

## ⚙️ Step 4: Optimal configuration

### General settings

```
Options → General settings
```

**General tab:**
- **Interface language**: English
- **Discord Presence**: ✅ Enabled (optional)
- **Check for updates**: ✅ Enabled

### Optimal graphics configuration

```
Options → General settings → Graphics
```

#### General tab

| Parameter | Recommended value | Description |
|-----------|------------------|-------------|
| **Graphics API** | Vulkan | Best performance (OpenGL if issues) |
| **Graphics Device** | Your main GPU | Most powerful available GPU |
| **VSync** | ✅ Enabled | Prevents screen tearing |

- Leave the rest of the parameters as default, that's enough

### Audio configuration

```
Options → General settings → Audio
```

- **Audio API**: XAudio2 (Windows) or DirectSound
- **Audio channels**: Stereo or 5.1 according to your configuration

### Controls configuration

#### Automatic method for controller

```
Options → Input settings
```

1. **Emulated controller**: Wii U GamePad
2. **Controller API**: XInput (Xbox controllers) or DirectInput
3. **Click** on "Calibrate"
4. **Follow** the on-screen instructions
5. **Test** all buttons and joysticks

## 🎨 Step 5: Graphics Packs and mods

### Installing Graphics Packs

1. **Download** Graphics Packs: `Options → Download community graphic packs`
2. **Restart** Cemu
3. **Configure** per game: Right-click on a game → `Edit graphic packs`

**Recommended sites for mods:**
- **GameBanana**: [gamebanana.com](https://gamebanana.com)
- **NexusMods**: [nexusmods.com](https://nexusmods.com)
- **Reddit r/cemu**: Active community and support

## ❓ FAQ - Frequently Asked Questions

### General questions

**Q: Do all Wii U games work on Cemu?**
**A:** About 95% of games are perfectly playable. Check the official compatibility list on Cemu's website.

**Q: Can I use my real Wii U saves?**
**A:** Yes, with Saviine or dedicated homebrew, you can transfer your saves.

**Q: Does the GamePad really work?**
**A:** Yes, the touch screen is emulated with the mouse and the GamePad interface is perfectly functional.

### Technical questions

**Q: Vulkan or OpenGL?**
**A:** Vulkan generally offers better performance. Use OpenGL in case of compatibility issues.

**Q: Why do shaders take time to compile?**
**A:** This is normal during the first launch of a game. Shaders are then cached for subsequent sessions.

### Common problems

**Q: The game crashes abruptly?**
**A:** Check activated Graphics Packs, update Cemu and your GPU drivers.

**Q: Audio is choppy?**
**A:** Increase audio latency to 64ms or change audio API (XAudio2/DirectSound).

**Q: Textures are blurry?**
**A:** Enable 16x anisotropic filtering and verify that resolution is correctly configured.

### Game formats

**Q: What's the difference between .wud and .wux?**
**A:** .wux is a compressed version of .wud. Both work perfectly, .wux saves disk space.

**Q: How to install DLC and updates?**
**A:** Place them in the Updates/ folder with the same structure as base games.


**🎉 Congratulations!** You now have a perfectly configured Cemu to enjoy Wii U exclusives in high definition with optimal performance!


**Enjoy your Wii U games in 4K with incredible mods! 🎮✨**