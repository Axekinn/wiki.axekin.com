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
cover: "covers/azahar.webp"
image: "covers/azahar.webp"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

## 🎮 Introduction to Citra

**Citra** is the most advanced open-source Nintendo 3DS emulator. Developed since 2013, it allows you to play 3DS games on PC with significant graphical improvements and near-perfect compatibility. Azahar is its fork.

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


- **BASE** 📁 : The main game files you downloaded
- **UPDATE** 📁 : Updates and patches (recommended)
- **DLC** 📁 : Additional paid content (optional but recommended)


✅ **Auto-detection**: Games are added automatically in the emulator  
✅ **Simplified management**: No need to manually add each ROM  
✅ **Clear organization**: Easy to see what content you have per game  
✅ **Easy maintenance**: Adding/removing content is straightforward

> **📝 Important note**: If a game has no updates or DLC, you don't need to create those folders. Only create folders for content you own.

### Result

Once this structure is in place, your emulator will automatically detect all games in the "Games 3DS" folder and display them neatly in your library! 🎯

## 💡 Portable configuration (Recommended)


**Before first launch**, create a folder named `user` at the root of the Azahar installation. This will make the install fully portable.

### Advantages of portable mode

| Aspect | Normal mode | Portable mode |
|--------|-------------|---------------|
| **Configs** | Stored in the system | Stored inside the folder |
| **Saves** | Spread across the computer | Centralized in one folder |
| **Portability** | ❌ Tied to the system | ✅ Easily movable |
| **Backup** | Harder to locate | Simple to back up |

### Structure after creating the portable folder

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


**All your data** (configs, saves, profiles) will be stored inside the `user` folder, making management and backups much easier!

### Creation steps

1. Navigate to the Azahar installation folder
2. Create a new folder named exactly `user`
3. Launch Azahar — it will detect portable mode automatically

> **📝 Note**: This must be done **before** the first launch to take effect!

## ⚙️ Step 3: Install and first run

### Windows prerequisites

### First run
1. Run `azahar.exe`
2. Set your games folder (double-click the menu, add the "Games 3DS" folder)

## ⚙️ Step 4: Optimal configuration

### General settings
```
Emulation → Configure → General
```
- **Confirm exit while emulation is running** : ✅ Enabled
- **Pause emulation when in background** : ✅ Enabled (optional)
- **Enable Discord Presence** : ✅ Enabled (optional)

### System configuration
```
Emulation → Configure → System
```
- **Region** : Europe (or your region)
- **Language** : Your language
- **Console ID** : Random (auto-generated)
- **Enable New 3DS** : ✅ Enabled (for better performance)

### Recommended graphics settings

#### Graphics tab
```
Graphics → General
- Internal Resolution: 2x Native (400x480) or higher. Higher values increase GPU usage.
- Enable Linear Filtering: ✅ Enabled
→ General
```

#### Layout tab

```
Graphics → Layout
```


This section lets you customize the display of the two 3DS screens according to your visual preference and hardware.

### Screen layouts

**Preset options:**

| Mode | Description | Recommendation |
|------|-------------|----------------|
| **Default** | Standard Nintendo layout | ✅ **Beginners** |
| **Single screen** | Shows only the active screen | Gameplay focus |
| **Wide** | Stretches across the width | Wide monitors |
| **Side-by-side** | Horizontal screens | **Recommended for gaming** |
| **Separate windows** | Two independent windows | Multi-monitor setups |
| **Stacked** | Screens stacked vertically | Space saving |
| **Custom layout** | Manual configuration | ⭐ **Most flexible** |

### Custom layout configuration


**Top screen:**
- **Position X/Y** : `0px, 0px` (top-left corner)
- **Width/Height** : `800px, 480px` (4:3 ratio ideal)

**Bottom screen:**
- **Position X/Y** : `80px, 500px` (slightly centered)
- **Width/Height** : `640px, 480px` (proportional)

**Bottom screen opacity** : `100%` (fully visible)

### Display settings

#### General options
```
Screens → Setup
```

**Recommended tweaks:**
- **Swap screens** : ❌ Disabled (preserve DS logic)
- **Rotate screens upwards** : ❌ Disabled
- **Screen gap** : `0.00` to `4.00` depending on preference
- **Main screen scale** : `4.00` (larger primary screen)
- **Secondary screen position** : `Bottom right` (touch area)

#### Single-screen mode


**Use cases:**
- Games that use only one main screen
- Save rendering resources
- Focus on the main action

**Configuration:**
- **Stretch** : ☑️ Checked for both screens
- **Left/Right margin** : `0px` (fullscreen)
- **Top/Bottom margin** : `0px` (maximize usage)

> **💡 Practical tip**: Test different layouts depending on the game. RPGs often benefit from custom layouts while action games prefer side-by-side.

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

#### Auto-detect method
```
Controls → Configure
1. Click "Auto Config"
2. Press buttons on your controller
3. Test all inputs
```

## ⚙️ Step 🌐 Multiplayer (quick setup)

You can connect Citra/Azahar to an external multiplayer service by editing the local configuration. Warning: fully close Citra/Azahar before editing configuration files or your changes will be overwritten.

1. Open the config folder:

   - For a standard Windows install: `C:\\Users\\<YourUser>\\AppData\\Roaming\\citra\\config\\`
   - For a portable install: open the `user` folder at the root of Azahar/Citra

2. Edit the `qt-config.ini` file (with Notepad or a text editor) and change/add these two lines:

```
web_api_url\\default=false
web_api_url=http://88.198.47.46:5000/
```

3. Save and close the editor, then relaunch Citra/Azahar.

Host a dedicated room (Windows `host.bat` example)

If you want to host via a dedicated batch file, create or edit a `host.bat` and paste the example below. You can change the room name and the Title ID.

```
citra-room ^
  --room-name "your room name" ^
  --room-description "All Games" ^
  --preferred-game "Super Smash Bros" ^
  --preferred-game-id "00040000000EDF00" ^
  --port 24872 ^
  --max_members 16 ^
  --token "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" ^
  --enable-citra-mods ^
  --web-api-url http://88.198.47.46:5000 ^
  --ban-list-file "INSERT_BAN_LIST_FILE_PATH_HERE"
pause
```

Notes:

- Replace `--token` with your real token when required.
- `--preferred-game-id` corresponds to the game's Title ID (16 hex digits). Leave empty to accept all games.
- `--web-api-url` must point to the API server (here: `http://88.198.47.46:5000`).

With these steps, Citra/Azahar will use the specified multiplayer service and the `host.bat` will let you host a room from your machine.

### Supported formats
- **.CCI** : Only format supported by my ROMs with Azahar due to anti-piracy restrictions


## ❓ FAQ - Frequently Asked Questions

### General questions

**Q: Can Azahar run every 3DS game?**  
**A:** Approximately 90% of 3DS games run well to perfectly. Check the compatibility database for your specific title.

**Q: Does stereoscopic 3D work?**  
**A:** Yes, with 3D-capable displays or using side-by-side mode for VR.

**Q: Can I use my real 3DS saves?**  
**A:** Yes — with Checkpoint or JKSM you can transfer saves both ways.

### Technical questions

**Q: Why are some games slow?**  
**A:** 3DS games are optimized for specific hardware. Emulation is more demanding, especially for complex titles.

**Q: OpenGL or Vulkan?**  
**A:** OpenGL is more stable and compatible. Vulkan can offer better performance on modern GPUs.

**Q: Does enabling New 3DS mode improve everything?**  
**A:** Mainly for games that natively use New 3DS features (Xenoblade, Monster Hunter, etc.) and certain homebrews.

### Common issues

**Q: "Could not determine the system region"?**  
**A:** Install system files (aes_keys.txt) and configure the region in settings.

**Q: HD textures not showing?**  
**A:** Verify "Custom Textures" is enabled and the Title ID matches the folder.

**Q: How to improve performance on Android?**  
**A:** Use Citra MMJ, lower the resolution, enable frame skip if needed.

Enjoy your 3DS games in high definition! 🎮✨