---
title: "How to Reinstall Yuzu & Ryujinx While Keeping Your Save Files"
description: "Complete guide to cleanly reinstall Nintendo Switch emulators Yuzu and Ryujinx while preserving your game saves"
date: 2025-06-04
lastmod: 2025-06-04
categories: ["gaming", "emulation", "tutorials"]
tags: ["yuzu", "ryujinx", "nintendo-switch", "emulation", "backup", "save-data", "reinstallation"]
series: ["Emulation Guides"]
author: "Axekin"
draft: false
toc: true
math: false
featured: false
weight: 15
aliases: 
  - /en/reinstall-yuzu-ryujinx/
  - /en/guides/emulator-backup/
summary: "Learn how to completely reinstall Yuzu and Ryujinx without losing your precious game saves. Detailed guide with screenshots and backup methods."
cover: "/images/covers/yuzu-ryujinx-backup.webp"
image: "/images/covers/yuzu-ryujinx-backup.webp"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

> **⚠️ Important**: Always backup your data before any reinstallation! This guide shows you how to proceed safely.

## Introduction

Sometimes **Yuzu** or **Ryujinx** encounter problems requiring a complete reinstallation. File corruption, problematic updates, or simply wanting to start fresh...

This guide explains **how to cleanly reinstall** these emulators **without losing your Nintendo Switch game saves**.

### Why reinstall?

**Common problems requiring reinstallation:**
- Emulator refuses to start
- Degraded performance after an update
- Corrupted configuration files
- Persistent graphics issues
- Recurring error messages

## Method for Yuzu

### Step 1: Backup game data

#### Locate save files

1. **Launch Yuzu** (if possible)
2. **Right-click** on the desired game in the list
3. Select **"Open Save Data Location"**

![Yuzu context menu](/images/yuzu-right-click-menu.png)
*Right-click menu on a game in Yuzu*

#### Backup the content

4. **Select all content** from the folder that opens (Ctrl+A)
5. **Copy** the files (Ctrl+C)
6. **Create a backup folder** on your desktop or hard drive
7. **Paste** the content into this folder (Ctrl+V)

**Recommended structure for organization:**
```
📁 Backup_Yuzu_2025-06-04/
├── 📁 The_Legend_of_Zelda_BOTW/
│   ├── save_data.bin
│   └── other_files...
├── 📁 Super_Mario_Odyssey/
│   ├── save_data.bin
│   └── other_files...
└── 📁 Pokemon_Legends_Arceus/
    ├── save_data.bin
    └── other_files...
```

#### Repeat for all games

8. **Repeat this operation** for each game you want to keep the save for
9. **Note the name** of each folder to facilitate restoration

### Step 2: Delete Yuzu data

#### Access configuration folder

1. Press **Windows + R**
2. Type `%appdata%` and press **Enter**

![Run dialog box](/images/windows-run-appdata.png)
*Access to AppData folder via Windows + R*

#### Delete Yuzu folder

3. Navigate to the **"yuzu"** folder
4. **Completely delete** this folder
5. **Empty the recycle bin** to free up space

> **💡 Tip**: If the folder is in use, completely close Yuzu via Task Manager.

### Step 3: Reinstall Yuzu

#### Clean installation

1. **Download** the latest version of Yuzu from the official website
2. **Uninstall** the old version if still present
3. **Install** the new version with default settings
4. **Launch** Yuzu for initial configuration

#### Basic configuration

5. **Configure** graphics settings according to your hardware
6. **Add** your game folders
7. **Install** firmware and keys if necessary

### Step 4: Restore save files

#### Put back save files

1. **Launch** your games once to create save folders
2. **Close** Yuzu completely
3. **Right-click** on each game → "Open Save Data Location"
4. **Replace** the content with your backed up files

**Verification:**
- Launch the game to verify the save is properly loaded
- Check progress, statistics, etc.

## Method for Ryujinx

### Step 1: Backup Ryujinx data

#### Locate user saves

1. **Launch Ryujinx**
2. **Right-click** on the desired game
3. Select **"Open User Save Directory"**

![Ryujinx menu](/images/ryujinx-save-menu.png)
*Save options in Ryujinx*

#### Backup additional data

4. If available, also click on **"Open Mod Data Directory"** or additional data
5. **Copy** all content to your backup folders
6. **Organize** by game name like for Yuzu

### Step 2: Delete Ryujinx

#### Locate configuration folder

1. Press **Windows + R**
2. Type `%appdata%` and validate
3. Navigate to the **"Ryujinx"** folder
4. **Completely delete** this folder

### Step 3: Reinstallation and restoration

#### Reinstall Ryujinx

1. **Download** the latest version of Ryujinx
2. **Cleanly install** the emulator
3. **Configure** basic settings

#### Restore save files

4. **Launch each game** once
5. **Close** Ryujinx
6. **Replace** save files with your backups
7. **Test** that everything works correctly

## Method comparison

| Aspect | Yuzu | Ryujinx |
|--------|------|---------|
| **Save access** | Right-click → Open Save Data Location | Right-click → Open User Save Directory |
| **Config folder** | `%appdata%\yuzu` | `%appdata%\Ryujinx` |
| **Additional data** | Automatic | Separate Mod Data Directory |
| **Complexity** | Simple | Simple |

## Tips and best practices

### Automatic backups

**Automatic backup script (Windows):**
```batch
@echo off
set backup_dir=C:\Backup_Emulators\%date:~-4,4%-%date:~-10,2%-%date:~-7,2%
mkdir "%backup_dir%"

xcopy "%appdata%\yuzu\nand\user\save" "%backup_dir%\Yuzu_Saves\" /E /I /Y
xcopy "%appdata%\Ryujinx\bis\user\save" "%backup_dir%\Ryujinx_Saves\" /E /I /Y

echo Backup completed in %backup_dir%
pause
```

### Important checks

**Before reinstallation:**
- ✅ Complete backups created
- ✅ Game names noted
- ✅ Firmware/keys available
- ✅ Hardware configuration noted

**After reinstallation:**
- ✅ Emulator starts correctly
- ✅ Games detected
- ✅ Saves restored
- ✅ Satisfactory performance

### Common problems and solutions

#### 🚫 Saves not recognized

**Possible causes:**
- Wrong file location
- Incompatible emulator versions
- Corrupted files

**Solutions:**
1. Check exact file location
2. Try with a similar emulator version
3. Use an older backup

#### 💾 Large save files

**Optimization:**
- Compress backup folders (.zip, .7z)
- Use cloud storage for security
- Create incremental backups

#### ⚠️ Configuration loss

**Preventive backup:**
```
📁 Complete_Backup/
├── 📁 Saves/ (game saves)
├── 📁 Config/ (configuration files)
├── 📁 Keys/ (keys and firmware)
└── 📄 settings_backup.txt (noted settings)
```

## Recommended tools

### Save managers

| Tool | Description | Advantages |
|------|-------------|------------|
| **JKSV** | Switch homebrew manager | Native saves |
| **Checkpoint** | Alternative to JKSV | User-friendly interface |
| **Save Manager** | Third-party PC tool | Automation |

### Cloud synchronization

**Recommended services:**
- **Google Drive** - 15 GB free
- **OneDrive** - Windows integration
- **Dropbox** - Fast synchronization
- **Git** - Versioning for experts

## Advanced troubleshooting

### Emergency recovery

**If reinstallation fails:**

1. **Safe mode**: Start Windows in safe mode
2. **Registry cleanup**: Use CCleaner or equivalent
3. **Portable installation**: Test with portable versions
4. **System restore**: Windows restore point

### Migration to new PC

**Transfer entire environment:**

```bash
# Folders to copy
%appdata%\yuzu\           → New PC
%appdata%\Ryujinx\        → New PC
[Games_Folder]\           → New PC
[Backup_Folder]\          → New PC
```

## Conclusion

Reinstalling **Yuzu** and **Ryujinx** while preserving your saves is a simple process if you follow the right method. The essential thing is to **always backup before acting** and proceed step by step.

### Key points to remember

> **🎯 Procedure summary:**
> 1. **Backup** all important game data
> 2. **Cleanly delete** configuration folders
> 3. **Reinstall** the emulator with a recent version
> 4. **Restore** your saves and test
> 5. **Configure** according to your preferences

### Preventive maintenance

**To avoid reinstallations:**
- Regular but careful updates
- Weekly automatic backups
- Performance monitoring
- Periodic cache cleaning

## FAQ - Frequently Asked Questions

**Q: Can I transfer my saves between Yuzu and Ryujinx?**
A: Generally not directly, save formats differ. Use specialized conversion tools if needed.

**Q: How long does the complete procedure take?**
A: About 30-60 minutes depending on the number of games and your PC speed.

**Q: Are online saves (Nintendo Switch Online) compatible?**
A: No, emulator and official console saves are not interchangeable.

**Q: What to do if I forgot to backup before reinstallation?**
A: Check Windows recycle bin, use file recovery tools, or restore from a system backup.

---

**Did this guide help you?** Share your experiences and additional tips in the comments!

**Related articles:**
- [Optimal Yuzu Configuration](/en/post/yuzu-setup/)
- [Complete Ryujinx Guide](/en/post/ryujinx-guide/)
- [Best Switch Emulation Performance](/en/post/switch-emulation-performance/)
````