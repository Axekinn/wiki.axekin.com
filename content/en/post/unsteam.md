---
title: "Unsteam - Playing Co-op with Patched Games"
description: "Detailed tutorial for using Unsteam and playing online with patched games - Complete setup guide for Steam API emulation"
date: 2025-06-04
lastmod: 2025-06-04
categories: ["PC"]
tags: ["unsteam", "steam", "coop", "gaming", "patch", "multiplayer", "emulation"]
series: ["Gaming Guides"]
author: "Axekin"
draft: false
toc: true
math: false
featured: false
weight: 30
aliases: 
  - /en/unsteam-guide/
  - /en/guides/unsteam-coop/
summary: "Learn how to use Unsteam to play online co-op with patched games. Complete guide with Steam API emulation and multiplayer setup."
cover: "/images/covers/unsteam.png"
image: "/images/covers/unsteam.png"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

## 🎮 Introduction to Unsteam

**Unsteam** is a Steam emulator that allows patched games to function with online multiplayer features. It simulates the Steam API to enable cooperation between players with unofficial versions.

> **💡 Important note**: Unsteam works ONLY on games with Steam protection, nothing else. So you can't patch Black Myth Wukong because Denuvo anti-cheat is present, same for FC 25 with EA, etc. Don't complain if it doesn't work when you try to patch these games.

## 🔧 Step 1: Obtaining Files

### Game Downloads
```bash
# You need to create an account to download content
https://cs.rin.ru/forum/viewforum.php?f=22
```

1. **Access** the cs.rin.ru forum
2. **Download** your desired game. If it's not available, go to https://cs.rin.ru/forum/viewforum.php?f=10, search for your desired game in CSF format (CSF = Clean Steam Files) on your game's page.

### Downloading Unsteam
```bash
# You need to create an account to download content
https://cs.rin.ru/forum/viewtopic.php?f=29&t=134707
```

1. **Download** the latest version of Unsteam
2. **Extract** the archive to a folder EXCLUDED FROM WINDOWS DEFENDER. Follow this tutorial if you don't know how: https://www.youtube.com/watch?v=BonLkFNnO9w

## 🔍 Step 2: Finding Game Information

### Using SteamDB
```bash
# Reference site
https://steamdb.info/
```

1. **Access** SteamDB.info
2. **Search** for your game by name
3. **Note** the following information:
   - **AppID** of the main game
   - **AppID** of DLCs (if present)
   - **Name** of DLCs

### Example for God of War
```
Game name: God of War
Main AppID: 1593500
DLC example: Digital Deluxe Edition (AppID: 1593501)
```

## ⚙️ Step 3: Configuring Unsteam

### Unsteam File Structure
```
Unsteam/
├── unsteam_loader_x64.exe    # Main launcher
├── unsteam_x64.dll          # Emulation library
└── unsteam.ini              # Configuration file
```

### Configuring the unsteam.ini file

Create or modify the `unsteam.ini` file. It will auto-generate on first launch, and here's its configuration:

```ini
[loader]
exe_file=
dll_file=unsteam_x64.dll

[game]
real_app_id=387990
fake_app_id=480
language=english
beta_name=public
saves_path=saves

[dlcs]
appid1=DLC Name
appid2=DLC Name
```

### Detailed Parameter Explanation

#### [loader] Section
```ini
exe_file=GoW.exe                # Path to your game's EXE
dll_file=unsteam_x64.dll       # Unsteam DLL (don't modify)
```

#### [game] Section
```ini
real_app_id=1593500            # Real game AppID (from SteamDB)
fake_app_id=480                # Fake AppID (leave 480 by default)
language=english               # Game language (english/french/german/etc.)
beta_name=public               # Beta version (leave "public")
saves_path=saves               # Save folder
```

#### [dlcs] Section
```ini
1593501=Digital Deluxe Edition # AppID=DLC Name
1593502=Season Pass            # AppID=DLC Name (example)
```

## 📁 Step 4: Installation and Configuration

### File Placement
```
YourGame/
├── GoW.exe                    # Game executable
├── unsteam_loader_x64.exe     # ← Copy this file here
├── unsteam_x64.dll           # ← Copy this file here
├── unsteam.ini               # ← Create this file here
└── saves/                    # Save folder (auto-created)
```

### Example Configuration for God of War
```ini
[loader]
exe_file=GoW.exe
dll_file=unsteam_x64.dll

[game]
real_app_id=1593500
fake_app_id=480
language=english
beta_name=public
saves_path=saves

[dlcs]
1593501=Digital Deluxe Upgrade
```

## 🚀 Step 5: Launching the Game

### Launch Procedure
1. **Launch Steam** first
2. **Log in** to your Steam account
3. **Navigate** to your game folder
4. **Execute** `unsteam_loader_x64.exe` (NOT the game's .exe)
5. **Wait** for loading

### Verifying Functionality
```
✅ Steam overlay visible
✅ Steam profile displayed in game
✅ Multiplayer functions active
✅ Steam achievements unlocked (optional)
```

## 🌐 Step 6: Co-op Gaming

### Connecting with Friends
1. **Ensure** your friends are also using Unsteam
2. **Verify** you have the same AppID configured
3. **Launch** the game simultaneously
4. **Use** normal multiplayer functions

## 🔧 Common Troubleshooting

### Frequent Problems

#### Game Won't Launch
```
❌ Problem: "Failed to load game"
✅ Solution: Check the exe_file= path in unsteam.ini
```

#### Steam Overlay Missing
```
❌ Problem: No Steam overlay
✅ Solution: Launch Steam BEFORE unsteam_loader_x64.exe
```

#### Multiplayer Not Working
```
❌ Problem: Can't join friends
✅ Solution: Verify everyone uses the same real_app_id. If it still doesn't work,
online functionality simply isn't supported
```

#### DLL Error
```
❌ Problem: "unsteam_x64.dll not found"
✅ Solution: Place the DLL in the same folder as the EXE
```

#### Game Still Won't Launch
```
❌ Problem: "Game won't launch even after doing all this?"
✅ Solution: Sometimes a game doesn't only have Steam protection. As mentioned at the beginning,
if the game has protection OTHER than Steam, like Denuvo, BattleEye, etc., then it's impossible.
```

## ⚠️ Important Precautions

### Steam Account Security
- **DON'T USE** your main Steam account
- **Create** a secondary account if necessary
- **Avoid** games with aggressive anti-cheat

### Game Compatibility
```
✅ Compatible: Steam coop/multiplayer games
✅ Compatible: Games with Steam Workshop
❌ Incompatible: Games with EAC/BattlEye
❌ Incompatible: Games requiring Steam DRM
```

### Updates
```
Frequency: Check Unsteam updates monthly
Source: cs.rin.ru (official forum)
Version: Always use the latest stable version
```

### Multi-Game Configuration
```
Create a folder per game with its own configuration:
Games/
├── GoW/
│   ├── unsteam.ini (GoW config)
│   └── unsteam_loader_x64.exe
└── Elden Ring/
    ├── unsteam.ini (Elden Ring config)
    └── unsteam_loader_x64.exe
```

---

> **💡 Final tip**: Always test with free games or games you legally own before using with other titles.
````