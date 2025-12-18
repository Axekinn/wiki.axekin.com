---
title: "mGBA Installation and Configuration"
description: "Detailed tutorial for installing, configuring and using the mGBA Game Boy Advance emulator - Complete setup with BIOS, graphics and controls"
date: 2025-12-18
lastmod: 2025-12-18
categories: ["mGBA"]
tags: ["mGBA", "Game Boy Advance", "GBA", "Emulation", "Gaming"]
author: "Axekin"
draft: false

toc: true
math: false
featured: true
weight: 5
aliases: 
  - /en/mgba-guide/
  - /en/guides/mgba-installation/
summary: "Learn how to install and configure mGBA for optimal Game Boy Advance emulation. Complete guide with BIOS, graphics settings and advanced features."
cover: "covers/mgba.jpg"
image: "covers/mgba.jpg"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

## 🎮 Introduction to mGBA

**mGBA** is a modern, fast and accurate open-source Game Boy Advance emulator, also supporting Game Boy and Game Boy Color. Developed since 2013, it stands out for its excellent compatibility, emulation precision, and advanced features like savestates, debugging tools, and multiplayer support.

> 💡 **Important note**: mGBA is optimized for performance while maintaining high accuracy, making it the best choice for GBA emulation.

## 🔧 Step 1: Downloading mGBA

### Stable Version (Recommended)
```bash
# Official site
https://mgba.io/downloads.html
```

1. **Click** on "Windows (64-bit)" (or any exploitation system)
2. **Download** `mGBA-0.10.3-win64.7z` (or latest version)
3. **Extract** to a dedicated folder (e.g., `Documents\mGBA` or at the root of another drive, not C)

> ⚠️ **Important**: Do NOT install in `Program Files` or any write-protected directory to avoid save file issues.


## Game Download

### Step 1: Access the game library

Go to **[🎮 Axekin Games - Game Boy Advance](https://www.axekin.com/games?platform=gameboyadvance)** to access the GBA game collection.
Go to **[🎮 Axekin Games - Game Boy](https://www.axekin.com/games?platform=gameboy)** to access the GB game collection.
Go to **[🎮 Axekin Games - Game Boy Color](https://www.axekin.com/games?platform=gameboycolor)** to access the GBC game collection.

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

**Result**: You'll get game files ready to be used with mGBA! 🎯

## 📁 Step 2: Folder Structure

Create this folder structure to organize your files:

For optimal organization of your library, here's the recommended tree structure:

````
GBA Games/
├── Pokemon FireRed/
│   ├── BASE/                # 🎮 Base game (main file)
├── The Legend of Zelda - The Minish Cap/
│   ├── BASE/                # 🎮 Base game
├── Metroid Fusion/
│   ├── BASE/
└── Mario Kart - Super Circuit/
    ├── BASE/
````

### Content types

- **BASE** 📁: The main game you download

✅ **Automatic detection**: Games are automatically added to the emulator  
✅ **Simplified management**: No need to manually select each ROM  
✅ **Clear organization**: Easy to see what content you have for each game  
✅ **Easy maintenance**: Simplified content addition/removal

> **📝 Important note**: If a game doesn't have updates or DLC, there's no need to create the corresponding folders. Only create folders for content you actually have.

### Result

Once this structure is in place, your emulator will automatically detect all games present in the "GBA Games" folder and organize them properly in your library! 🎯


## ⚙️ Step 3: Making mGBA Portable (Recommended)

Before configuring anything, it's **highly recommended** to make mGBA portable. This ensures all settings, saves, and data stay in the emulator folder.

### Why make mGBA portable?

**Advantages:**
- 📁 **All data in one place**: Settings, saves, and screenshots stay in the mGBA folder
- 🔄 **Easy backup**: Simply copy the entire folder to backup everything
- 💾 **Portable installation**: Move mGBA to another PC without losing anything
- 🛡️ **No permission issues**: Avoids Windows UAC and write-protection problems
- 🗂️ **Better organization**: All emulator data is self-contained

**Without portable mode:**
- Settings scattered in system folders (`%APPDATA%`, etc.)
- Harder to backup or transfer
- Potential permission issues
- Less organized

### How to make mGBA portable

1. **Launch** `mGBA.exe`
2. **Go to** `Tools → Make portable`
3. **Click** to confirm
4. **Restart** mGBA

**Result:** A `portable.ini` file is created in your mGBA folder. Now all settings, saves, and data will be stored locally in the emulator directory! ✅

> **💡 Important**: Do this BEFORE any other configuration to ensure all your settings are saved in the portable location.


## ⚙️ Step 4: Game Boy Advance BIOS Installation (Optional but Recommended)

### Required BIOS file

> ℹ️ **Optional**: The GBA (and other) BIOS file improves compatibility but is not strictly required.

**Necessary file:**
- `gba_bios.bin` (16 KB) - Official GBA BIOS
- `gbc_bios.bin` (16 KB) - Official GBC BIOS
- `gb_bios.bin` (16 KB) - Official GB BIOS
- `sgb_bios.bin` (16 KB) - Official SGB BIOS

**📥 Game Boy Advance BIOS Download:**

[Download GBA BIOS + SGB + GBC + GBA](https://vikingfile.com/f/11P6Cn5yL0)

> **📋 Content:** `gba_bios.bin`, `gbc_bios.bin`, `gb_bios.bin`, `sgb_bios.bin`

### Configuration in mGBA

1. **Launch** `mGBA.exe`
2. **Go to** `Tools → Settings`
3. **Click** on `BIOS` tab
4. **Browse** and select `gba_bios.bin`
5. **Repeat** for all BIOS
6. **Check** "Use BIOS file if found"
7. **Click** `OK`
8. **Restart** mGBA

## ⚙️ Step 5: Basic configuration

### General settings
```
Tools → Settings → Emulation
```

**Recommended configuration:**
- **Fast forward speed**: Ubounded
- **Autofire**: 1 (default)
- **Enable rewind**: ✅ Enabled (useful for mistakes)
- **Rewind buffer capacity**: 300 (5 seconds at 60fps)
- **Idle loops**: Run All
- **Preload entire ROM into memory**: You can enable it, but only if you have at least 8GB of RAM. It can reduce some stuttering or other issues, but it is not necessary.


## ⚙️ Step 6: Video and audio configuration

### Video settings
```
Tools → Settings → Enhancements
```

**Display settings:**
- **Display driver**: OpenGL (recommended)
- **High resolution scale** : depend on ur monitor. Personnaly, I have a 2K monitor, so I put 9x because it will scale at 2160x1440, the value that which comes closest to my resolution. Do the same for you

After go to 

```
Tools → Settings → Gameplay
```

- **FPS Target**: Personally, I set the hertz value on my screen, so you'll have to see what works for yours. If you notice any acceleration that shouldn't be happening, change this value to 60FPS.

Leave everything else as default; there is no need to change anything unless you see the need to do so.

### Audio settings
```
Tools → Settings → Audio/Video
```

**Optimal configuration:**
- **Audio driver**: SDL (recommended)
  - If issues: Try QtMultimedia
- **Audio buffer**: 2048 samples
  - Lower (1024): Less latency, may stutter
  - Higher (4096): More stable, slight delay
- **Sample rate**: 48000 Hz (standard)
- **Volume**: 100%

> **🔧 Troubleshooting audio stuttering:**
> 1. Make sure "Sync to audio" is enabled
> 2. Try different audio drivers
> 3. Adjust audio buffer (1024, 2048, or 4096)
> 4. Disable "Sync to video"

## ⚙️ Step 7: Control configuration

### Keyboard controls (default)
```
Tools → Settings → Controls
```

**Default mapping:**
- **A**: X
- **B**: Z
- **L**: A
- **R**: S
- **Start**: Return
- **Select**: Backspace
- **D-Pad**: Arrow keys

**Hotkeys:**
- **Fast forward**: Tab (hold)
- **Load/Save state**: F1-F9
- **Screenshot**: F12
- **Rewind**: Backquote (`)

### Controller configuration
```bash
# Automatic detection
1. Connect your controller
2. Tools → Settings → Controllers
3. Click on a button to configure
4. Press the corresponding button on the controller
5. Repeat for all buttons

# Recommended mapping (Xbox controller)
A → A (Xbox)
B → B (Xbox)
L → LB
R → RB
D-Pad → D-Pad
Start → Menu
Select → View
```

> **⚠️ Controller issues?**
> 
> mGBA's controller support can be limited. If you experience problems:
> - Check `Tools → Settings → Controllers`
> - Look for mis-detected devices
> - Click "Clear analog" and "Clear button" on D-Pad inputs
> - Consider using the libretro core for better controller support

## ⚙️ Step 8: Library Configuration - Display ROMs in Menu

To have your games displayed directly in mGBA's main menu, you need to configure the library settings and add your ROM folder.

### Configure library display

1. **Go to** `Tools → Settings`
2. **Click** on `Interface` in the left menu
3. **Configure these settings:**
   - **Library**: Select `Tree view` (recommended for organized display)
   - **Show when no game open**: ✅ Enable this option

### Add your ROM folder to the library

1. **Go to** `File → Add folder to library...`
2. **Browse** to your ROM folder (e.g., `Documents\GBA Games`)
3. **Select** the folder and confirm
4. **Wait** for mGBA to scan and index your games

**Result:** All your games will now be displayed in the main mGBA window when no game is running! You can simply click on a game to launch it. 🎮

> **💡 Practical tip**: The tree view organizes games alphabetically and allows you to quickly search through your library. If you add more games later, they will be automatically detected.

### Game launching

#### Direct method
```bash
# Simple opening
1. Click on the ROM in the menu of mGBA

# Simple opening #2
1. File → Load ROM
2. Navigate to your .gba file
3. Select and open
4. Game starts automatically

# Drag & Drop
1. Drag the .gba file onto mGBA
2. Immediate launch

# Recent games
File → Recent → [Select your game]
```

## 🛠️ Advanced features

### Save states

#### Quick save/load
```bash
# Quick save
F1-F9: Save to slot 1-9
Shift + F1-F9: Load from slot 1-9

# Save state management:
1. File → Save State → State [1-9]
2. File → Load State → State [1-9]
3. Slots are game-specific
4. Includes screenshot preview
```

### Cheats

#### Cheat code support
```bash
# Adding cheats:
1. Tools → Cheats
2. Add New Set
3. Enter cheat name
4. Add cheat codes (GameShark, Action Replay, CodeBreaker)
5. Enable desired cheats
6. Apply

# Cheat formats supported:
- GameShark
- Action Replay
- CodeBreaker
```

### Screenshots and recording

#### Screenshot capture
```bash
# Take screenshot:
F12 (default hotkey)

# Screenshots saved to:
- Windows: %APPDATA%/mGBA/screenshots
- macOS/Linux: ~/.config/mgba/screenshots
- Portable: mGBA folder/screenshots
```

## 🔧 Troubleshooting

### Launch problems

#### White screen on loading
```bash
Solutions:
1. Tools → Settings → Audio
2. Try different audio driver (SDL, DirectSound, etc.)
3. Enable "Sync to video"
4. Disable "Sync to audio"
5. Restart mGBA
```

#### Black screen on loading
```bash
Solutions:
1. Tools → Settings → Display
2. Change display driver:
   - Try "OpenGL (Force 1.x)"
   - Or try "Software"
3. Update graphics drivers
4. Restart mGBA
```

#### Game runs too fast
```bash
Checks:
1. Emulation → Fast forward: ❌ Unchecked
2. Tools → Settings → Emulation
3. Enable at least one:
   - ✅ Sync to audio (recommended)
   - ✅ Sync to video
4. FPS target: 60 fps
```

### Save problems

#### Saves won't work (Windows)
```bash
Directory checks:
1. ❌ ROMs NOT in Program Files
2. ❌ ROMs NOT in write-protected folders
3. ✅ ROMs in Documents or other user directory
4. ✅ mGBA has write permissions
5. Check antivirus isn't blocking

# If saves worked in Program Files:
Lost saves location:
%LocalAppData%\VirtualStore
(Copy saves from there to proper location)
```

### Performance issues

#### Gameplay or audio is stuttery
```bash
Solutions:
1. Enable "Sync to audio" ONLY
2. Adjust audio buffer:
   - Try 1024, 2048, or 4096
3. Change audio driver
4. Disable "Sync to video"
5. Close background applications
6. Update audio drivers

# Platform-specific:
- 3DS/Vita: Hardware limitations
  - Performance improvements in development
  - Some stuttering unavoidable
```

#### Controller directional input stuck
```bash
Fix steps:
1. Tools → Settings → Controllers
2. Check for mis-detected devices
3. Select D-Pad button inputs
4. Click "Clear analog"
5. Click "Clear button"
6. Reconfigure if needed
7. Remove phantom controllers
```

## 📂 Configuration file locations

### Where are settings stored?

**Portable version:**
- `config.ini` and `qt.ini` in mGBA folder

**Installed version:**

| Platform | Location |
|----------|----------|
| **Windows** | `%APPDATA%/mGBA` |
| **macOS/Linux** | `~/.config/mgba` (or `$XDG_CONFIG_HOME/mgba`) |
| **3DS/Switch/Wii** | `/mGBA` |
| **PS Vita** | `ux0:/data/mGBA` |

## ❓ FAQ - Frequently Asked Questions

### General questions

**Q: Can mGBA play all GBA games?**
**A:** Yes, mGBA has excellent compatibility with nearly all GBA, GB, and GBC games.

**Q: Do I need BIOS files?**
**A:** No, but recommended for maximum compatibility and accuracy. The built-in HLE BIOS works for most games.

**Q: Does mGBA support multiplayer?**
**A:** Yes, through link cable emulation. Multiple mGBA instances can connect locally.

### Technical questions

**Q: What's the best sync setting?**
**A:** "Sync to audio" only, with audio buffer at 2048. Adjust if you experience issues.

**Q: OpenGL or Software renderer?**
**A:** OpenGL recommended. Use Software or "OpenGL (Force 1.x)" if you have display issues.

**Q: How do I improve performance?**
**A:** Enable sync to audio only, adjust audio buffer, update drivers, close background apps.

### Common problems

**Q: Game runs too fast or too slow?**
**A:** Check Fast forward is disabled and at least one sync option (audio or video) is enabled.

**Q: Save doesn't work on Windows?**
**A:** Don't put ROMs in Program Files or write-protected folders. Use Documents or user directories.

**Q: Where did my saves go after moving ROMs?**
**A:** Check `%LocalAppData%\VirtualStore` if ROMs were in Program Files.

**Q: Audio is stuttery?**
**A:** Try different audio drivers, adjust buffer size, enable sync to audio only.

**Q: Controller isn't working properly?**
**A:** Check for mis-detected devices in controller settings. Clear analog/button inputs and reconfigure. Consider using libretro core for better support.

## 🎯 Conclusion

**Rediscover the Game Boy Advance library with perfect emulation using mGBA! 🎮✨**

With proper configuration, you can enjoy:
- ✅ Accurate emulation
- ✅ Save states and cheats
- ✅ High performance
- ✅ Enhanced graphics options
- ✅ Multiplayer support

Happy gaming! 🎉
````