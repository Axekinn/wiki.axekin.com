---
title: "Complete Guide: melonDS Installation and Configuration"
date: 2025-06-02
draft: false
categories: ["Gaming", "Tutorials"]
tags: ["melonDS", "Nintendo DS", "Emulation", "Gaming"]
author: "Axekin"
description: "Detailed tutorial for installing, configuring and using the Nintendo DS emulator melonDS"
cover: "/images/covers/melonds.png"
---

## 🎮 Introduction to melonDS

**melonDS** is a modern and accurate open-source Nintendo DS emulator, developed since 2016. It stands out with its excellent compatibility, emulation accuracy, and advanced features like local Wi-Fi, savestates, and graphical enhancement. It's the perfect modern alternative to DeSmuME.

> ⚠️ **Legal Notice**: This emulator is intended for playing only games you legally own. Emulation for backup and research purposes is legal, but piracy is not.

## 📋 System Requirements

### Minimum Configuration
- **OS**: Windows 7+ (64-bit) / Linux / macOS
- **CPU**: Intel Core i3-3220 / AMD FX-4300 (2+ cores, 2.5+ GHz)
- **RAM**: 2 GB
- **GPU**: OpenGL 3.2 compatible
- **Storage**: 1 GB free space + game space

### Recommended Configuration
- **CPU**: Intel Core i5-4590 / AMD Ryzen 3 1200 (4+ cores, 3.0+ GHz)
- **RAM**: 4 GB
- **GPU**: OpenGL 4.3 / Vulkan 1.0 compatible
- **Storage**: SSD with 20+ GB free space

### Optimal Configuration
- **CPU**: Intel Core i7-8700 / AMD Ryzen 5 2600 (6+ cores, 3.2+ GHz)
- **RAM**: 8 GB
- **GPU**: NVIDIA GTX 1050 / AMD RX 560 or higher
- **Storage**: NVMe SSD with 50+ GB free space

> 💡 **Important Note**: melonDS is less demanding than most modern emulators thanks to the DS's simple architecture.

## 🔧 Step 1: Downloading melonDS

### Stable Version (Recommended)
```bash
# Official website
https://melonds.kuribo64.net/downloads.php
```

1. **Click** on "Download Windows x64"
2. **Download** `melonds-0.9.5-windows-x64.zip`
3. **Extract** to a dedicated folder (e.g., `C:\melonDS`)

### Development Versions
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

## 📁 Step 2: Folder Structure

Organize your files with this structure:

```
melonDS/
├── melonDS.exe              # Main executable
├── bios/                    # Nintendo DS BIOS (required)
│   ├── bios7.bin           # ARM7 BIOS
│   ├── bios9.bin           # ARM9 BIOS
│   └── firmware.bin        # DS Firmware
├── games/                   # Your Nintendo DS ROMs
│   ├── nds/                # Standard .nds games
│   ├── dsi/                # DSi .nds games
│   └── homebrew/           # Homebrew applications
├── saves/                   # Save data
│   ├── sav/                # .sav saves
│   └── states/             # .mln savestates
├── cheats/                  # Cheat codes
│   └── usrcheat.dat        # AR database
├── screenshots/             # Screenshots
├── firmware/                # Alternative firmwares
└── dldi/                   # DLDI drivers for homebrew
```

## ⚙️ Step 3: Installing Nintendo DS BIOS

### Required BIOS Files

> ⚠️ **Mandatory**: Nintendo DS BIOS files are required for optimal operation.

**Required files:**
- `bios7.bin` (16 KB) - ARM7 BIOS
- `bios9.bin` (4 KB) - ARM9 BIOS  
- `firmware.bin` (256 KB) - DS Firmware

### Extraction from Real Nintendo DS

#### Method 1: With Flashcart
```bash
# Using GodMode9i or similar
1. Install homebrew on your DS via flashcart
2. Use GodMode9i to extract:
   - ARM7 BIOS → bios7.bin
   - ARM9 BIOS → bios9.bin
   - Firmware → firmware.bin
3. Transfer to PC in melonDS/bios/
```

#### Method 2: Via DSi with HiyaCFW
```bash
# If you have a modded DSi
1. Install HiyaCFW on your DSi
2. Use dsidumper to extract:
   - BIOS files
   - Complete firmware
3. Copy to bios/ folder
```

### Configuration in melonDS

1. **Launch** `melonDS.exe`
2. `Config → Emu settings → DS-mode`
3. **Configure** BIOS paths:
   - **DS ARM9 BIOS**: `bios/bios9.bin`
   - **DS ARM7 BIOS**: `bios/bios7.bin`
   - **DS Firmware**: `bios/firmware.bin`
4. **Restart** melonDS

## ⚙️ Step 4: Basic Configuration

### General Settings
```
Config → Emu settings → General
```

**Recommended configuration:**
- **Console type**: DS (or DSi for DSi games)
- **Direct boot**: ✅ Enabled (boots directly to game)
- **JIT enable**: ✅ Enabled (greatly improves performance)
- **JIT max block size**: 32 (optimal)
- **JIT literal optimizations**: ✅ Enabled
- **JIT branch optimizations**: ✅ Enabled
- **JIT fast memory**: ✅ Enabled

### 3D Settings
```
Config → Emu settings → 3D settings
```

**Optimal configuration:**
- **3D renderer**: OpenGL (recommended) or Software
- **Threaded 3D**: ✅ Enabled (uses multiple cores)
- **GL scale factor**: 1x-4x depending on your GPU
- **GL better polygons**: ✅ Enabled (improves quality)
- **GL anti-aliasing**: ✅ Enabled if GPU sufficient

## ⚙️ Step 5: Video and Audio Configuration

### Video Settings
```
Config → Video settings
```

**Display settings:**
- **DS screen layout**: Natural, Vertical, Horizontal (your choice)
- **DS screen sizing**: Even (equal screens) or Emphasize top/bottom
- **DS screen gap**: 0-96 pixels (personal preference)
- **Screen filtering**: Linear (smoother) or Nearest (crisp pixel art)
- **Show OSD**: ✅ Enabled (useful information)

### Audio Settings
```
Config → Audio settings
```

**Optimal configuration:**
- **Audio output**: Automatic (recommended)
- **Audio volume**: 256 (maximum)
- **Mic input**: Automatic or specific device
- **Mic noise gate**: ✅ Enabled (filters background noise)

## ⚙️ Step 6: Control Configuration

### Keyboard Controls (Default)
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

### Controller Configuration
```bash
# Automatic detection
1. Connect your controller
2. Config → Input and hotkeys → DS keypad
3. Click on a button to configure
4. Press corresponding button on controller
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

### Touch Controls
```
Config → Input and hotkeys → Touch screen
```

**Available options:**
- **Mouse**: Uses mouse for touchscreen
- **Touch**: Touchscreen (on touchscreen PC/tablet)
- **Joystick**: Right analog stick (recommended for controller)

### Useful Hotkeys
```
Config → Input and hotkeys → Hotkeys
```

**Essential shortcuts:**
- **Fast forward**: Tab (acceleration)
- **Pause/unpause**: P
- **Reset**: Ctrl+R
- **Save state**: F1-F8  
- **Load state**: Shift+F1-F8
- **Screenshot**: F12

## 🎮 Step 7: Game and ROM Management

### Supported Formats

#### Nintendo DS ROMs
- **.nds**: Standard Nintendo DS format
- **.srl**: Developer format (identical to .nds)
- **.dsi**: DSi enhanced games
- **.ids**: iQue DS (China region)

#### Saves
- **.sav**: Standard save
- **.mln**: melonDS savestate
- **.dsv**: DeSmuME save (compatible)

### Launching Games

#### Direct Method
```bash
# Simple opening
1. File → Open ROM
2. Navigate to your .nds file
3. Select and open
4. Game starts automatically

# Drag & Drop
1. Drag .nds file onto melonDS
2. Instant launch
```

#### Multi-ROM Management
```bash
# Recent games list
File → Recent ROMs
- Quick access to last 10 games
- Persistent between sessions

# Custom favorites
- Create shortcuts in games/
- Organization by genre/series
```

### Dumping Your Own Games

#### With R4/Acekard Flashcart
```bash
# Physical cartridge method
1. Insert DS cartridge into flashcart dumper
2. Use GodMode9i or Wood Dumper
3. Dump in .nds format to SD
4. Transfer to PC

# Advantages: 
- Perfect bit-perfect dump
- Includes protection data
- 100% melonDS compatible
```

#### With Nintendo 3DS (CFW)
```bash
# Via GodMode9 on 3DS
1. Install CFW on your 3DS
2. Insert DS cartridge into 3DS
3. GodMode9 → [C:] GAMECART
4. Dump cartridge as .nds
5. Transfer via SD/FTP
```

## 🚀 Optimization by Popular Games

### Pokémon Diamond/Pearl/Platinum
```bash
# Optimal RPG configuration
3D Settings:
- Renderer: OpenGL
- Scale factor: 2x-3x
- Better polygons: ✅ Enabled
- Anti-aliasing: ✅ Enabled

General:
- JIT: ✅ All enabled
- Direct boot: ✅ Enabled

Performance: Excellent, stable 60 FPS
```

### Mario Kart DS
```bash
# Racing configuration
3D Settings:
- Renderer: OpenGL required
- Scale factor: 2x-4x possible
- Threaded 3D: ✅ Enabled

Input:
- Controller control recommended
- Analog stick for fine steering

Wi-Fi: Local play support in melonDS
```

### The Legend of Zelda: Spirit Tracks
```bash
# Game using microphone
Audio:
- Mic input: Mandatory configuration
- Noise gate: ✅ Enabled

3D Settings:
- Renderer: OpenGL
- Scale factor: 2x-3x
- Anti-aliasing: ✅ Recommended

Controls: Touchscreen essential
```

### Professor Layton Series
```bash
# Point-and-click games
Input:
- Touch screen: Mouse recommended
- Touch precision important

Video:
- Screen layout: Natural or Vertical
- Screen gap: Minimal (0-8px)
- Filtering: Linear (sharper text)

Perfect for PC emulation
```

### New Super Mario Bros.
```bash
# Classic platformer
3D Settings:
- Renderer: OpenGL
- Scale factor: 3x-4x excellent
- Better polygons: ✅ Enabled

Performance:
- JIT: ✅ All enabled
- Threaded 3D: ✅ Enabled

Result: Spectacular visual improvement
```

### Phoenix Wright: Ace Attorney
```bash
# Visual novel
Video:
- Screen layout: Vertical optimal
- Filtering: Linear (sharp text)
- Sizing: Emphasize top screen

Audio:
- Volume: Maximum (important music)
- Excellent audio quality in melonDS

Interface: Perfect for PC/mouse
```

## 🛠️ Advanced Features

### Wi-Fi and Local Multiplayer

#### Local Network Configuration
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
```

#### Online Gaming (Experimental)
```bash
# Via Kaeru WFC (third-party server)
1. System → Wi-Fi settings
2. Access point configuration:
   - SSID: Your network
   - Security: WPA2/WEP according to config
3. DNS: Kaeru WFC servers
4. Limited but functional support
```

### Savestates and Backup

#### Using Savestates
```bash
# Quick save
System → Save state → Slot 1-8
- Instant save of exact state
- Includes position, inventory, timing
- 8 slots available per game

# Restore
System → Load state → Slot X
- Instant restoration
- Compatible between melonDS versions
```

#### Save Management
```bash
# Automatic backup
Config → Emu settings → General
- Save state autosave: ✅ Enabled
- Interval: 5-10 minutes

# Export/Import
Tools → Save data export/import
- Compatible with other emulators
- Cloud backup possible
```

### Cheats and Action Replay Codes

#### Database Installation
```bash
# usrcheat.dat
1. Download complete AR codes database
2. Place in melonDS/cheats/usrcheat.dat
3. System → Cheat setup
4. Enable cheats: ✅ Enabled
```

#### Custom Codes
```bash
# Manual addition
1. System → Cheat setup → Add cheat
2. Name: Code description
3. Code: Standard Action Replay format
4. Enable: ✅ Check to activate

Pokémon example (infinite money):
94000130 FCFF0000
B21C4D28 00000000
B0000004 00000000
00000090 000F423F
D2000000 00000000
```

## 🔧 Troubleshooting

### Launch Issues

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
1. Format: Verify valid .nds
2. Size: File not corrupted
3. BIOS: Files present and valid
4. Region: PAL/NTSC/JPN compatible
5. Protection: Some dumps require patches
```

### Performance Issues

#### Low FPS/slowdowns
```bash
Performance optimizations:
1. JIT: ✅ All enabled mandatory
2. 3D Renderer: OpenGL vs Software
3. Threaded 3D: ✅ Enabled
4. Scale factor: Reduce to 1x-2x
5. Anti-aliasing: Disable temporarily
6. Background apps: Close heavy applications
```

#### Frequent micro-freezes
```bash
Stuttering solutions:
1. SSD: Move ROMs to SSD
2. JIT block size: Test 16-64
3. Fast memory: ✅ Mandatory
4. Windows Game Mode: Disable
5. Real-time protection: Antivirus exception
```

### Graphics Issues

#### Incorrect 3D display
```bash
3D corrections:
1. 3D Renderer: Change OpenGL ↔ Software
2. GL better polygons: Toggle
3. Scale factor: Test 1x native
4. GPU drivers: Mandatory update
5. OpenGL version: Verify 3.2+ support
```

#### Misaligned screens
```bash
Display adjustments:
1. Screen layout: Test Natural/Vertical/Horizontal
2. Screen sizing: Adjust Even/Emphasize
3. Screen gap: Modify 0-96 pixels
4. Screen swap: Switch top/bottom if needed
5. Zoom: Maintain aspect ratio
```

#### Blurry/pixelated textures
```bash
Visual improvements:
1. GL scale factor: Increase 2x-4x
2. Screen filtering: Linear vs Nearest
3. GL anti-aliasing: ✅ Enabled
4. Better polygons: ✅ Enabled
5. Native resolution: Respect DS ratio
```

### Audio Issues

#### No sound
```bash
Audio diagnostics:
1. Audio output: Test different options
2. Volume: Check level (max 256)
3. Device: Correct Windows default audio
4. Exclusive mode: Disable Windows
5. Sample rate: 44.1/48 kHz compatible
```

#### Crackling audio
```bash
Audio corrections:
1. Audio buffer: Increase if available
2. Background apps: Close audio players
3. Audio drivers: Update drivers
4. CPU usage: Check processor load
5. Power management: High performance
```

### Control Issues

#### Controller not detected
```bash
Input configuration:
1. Reconnect controller
2. Input settings: Rescan devices
3. Driver: XInput vs DirectInput
4. Steam Input: Disable if interfering
5. Test: Check Windows Game Controllers
```

#### Touchscreen unresponsive
```bash
Touch solutions:
1. Touch mode: Mouse/Touch/Joystick
2. Calibration: Windows touch settings
3. Sensitivity: Adjust if available
4. Interference: Close other touch apps
5. Hardware: Test different device
```

## 📊 Compatibility and Performance

### Compatibility Statistics
| Status | Percentage | Description |
|--------|------------|-------------|
| **Perfect** | ~85% | Works perfectly |
| **Playable** | ~12% | Acceptable minor bugs |
| **Ingame** | ~2% | Starts but major issues |
| **Broken** | ~1% | Doesn't work |

### Perfectly Compatible Games

#### RPG/Adventure
```bash
✅ Pokémon Diamond/Pearl/Platinum/HeartGold/SoulSilver
✅ The Legend of Zelda: Phantom Hourglass/Spirit Tracks
✅ Dragon Quest IX: Sentinels of the Starry Skies
✅ Final Fantasy III/IV/Tactics A2
✅ Chrono Trigger DS
✅ Radiant Historia
✅ Phoenix Wright: Ace Attorney series
✅ Professor Layton series
```

#### Action/Platform
```bash
✅ New Super Mario Bros.
✅ Super Mario 64 DS
✅ Kirby Super Star Ultra/Canvas Curse
✅ Metroid Prime Hunters
✅ Castlevania: Dawn of Sorrow/Portrait of Ruin/Order of Ecclesia
✅ Mega Man Zero Collection
✅ Sonic Rush/Rush Adventure
```

#### Racing/Sports
```bash
✅ Mario Kart DS
✅ Diddy Kong Racing DS
✅ TrackMania DS
✅ Tony Hawk's American Sk8land
✅ FIFA series
✅ Madden NFL series
```

### Performance Benchmarks

#### Test configuration: i5-8400, GTX 1060, 8GB RAM

| Game | Scale Factor | FPS | CPU Usage | Notes |
|------|--------------|-----|-----------|-------|
| **Pokémon Platinum** | 3x | 60 | 35% | Perfect |
| **Mario Kart DS** | 4x | 60 | 45% | Excellent |
| **Zelda PH** | 3x | 60 | 40% | Perfect |
| **NSMB** | 4x | 60 | 30% | Excellent |
| **Ace Attorney** | 2x | 60 | 25% | Perfect |

## 🌐 Resources and Community

### Official Sites
- [🏠 Official melonDS Site](https://melonds.kuribo64.net/)
- [📱 melonDS Android](https://play.google.com/store/apps/details?id=me.magnum.melonds)
- [📚 Documentation](https://melonds.kuribo64.net/faq.php)
- [🔧 User Wiki](https://melonds.kuribo64.net/board/)

### Active Communities
- [💬 melonDS Discord](https://discord.gg/AQAhe5S)
- [🗨️ Reddit r/emulation](https://www.reddit.com/r/emulation/)
- [🌐 melonDS Forums](https://melonds.kuribo64.net/board/)
- [📺 YouTube guides](https://www.youtube.com/results?search_query=melonds+tutorial)

### Development and Contribution
- [💻 GitHub melonDS](https://github.com/melonDS-emu/melonDS)
- [🐛 Bug reports](https://github.com/melonDS-emu/melonDS/issues)
- [💰 Donations](https://www.patreon.com/StapleButter)
- [🔧 Compilation guide](https://github.com/melonDS-emu/melonDS/blob/master/README.md)

### DS Resources
- [🔧 GodMode9i](https://github.com/DS-Homebrew/GodMode9i) - DS file manager
- [📁 TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu) - DS homebrew menu
- [🎮 nds-bootstrap](https://github.com/DS-Homebrew/nds-bootstrap) - DS game launcher
- [🔍 NDSTokyoTrim](http://www.romhacking.net/utilities/383/) - ROM trimming tool

## ❓ FAQ - Frequently Asked Questions

### General Questions

**Q: Can melonDS play all DS games?**
**A:** About 97% of games work perfectly. Excellent overall compatibility.

**Q: Do I need BIOS files?**
**A:** Yes, mandatory for optimal operation and maximum compatibility.

**Q: Does melonDS support DSi games?**
**A:** Partial support. Some DSi games work, others not yet.

### Technical Questions

**Q: OpenGL or Software renderer?**
**A:** OpenGL recommended for performance and visual improvement. Software for compatibility.

**Q: What resolution to choose?**
**A:** 2x-3x for good quality/performance compromise. 4x+ if powerful GPU.

**Q: Is JIT safe?**
**A:** Yes, mandatory for good performance. No security risk.

### Common Issues

**Q: Lag despite good PC?**
**A:** Check JIT enabled, use OpenGL, reduce scale factor if necessary.

**Q: Save doesn't work?**
**A:** Check write permissions for saves folder, correct ROM format.

**Q: Wi-Fi doesn't work?**
**A:** Wi-Fi limited to supported games, network configuration required.

## 🎯 Conclusion

melonDS is the reference Nintendo DS emulator that offers:

- ✅ **Exceptional compatibility** with 97%+ of DS games
- ✅ **Excellent performance** even on modest hardware  
- ✅ **Considerable graphical improvement** with upscaling
- ✅ **Modern features** (savestates, cheats, Wi-Fi)
- ✅ **Superior emulation accuracy** compared to DeSmuME
- ✅ **Multiplatform support** (Windows, Linux, macOS, Android)
- ✅ **Active development** with constant improvements
- ✅ **Intuitive interface** and simple configuration

With this comprehensive guide, you now master:
- **Installation** and optimal configuration
- **BIOS and ROM management**
- **Graphics and performance optimization**
- **Using** advanced features
- **Resolving** common issues
- **Access** to the entire Nintendo DS library

---

> **Legal reminder**: Only use games you legally own. melonDS provides no games or BIOS - you must extract them from your own Nintendo DS consoles.

**Rediscover the Nintendo DS library in high definition with melonDS! 🎮✨**
````