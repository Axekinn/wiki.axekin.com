---
title: "How to Reinstall Yuzu & Ryujinx While Keeping Your Save Files"
description: "Complete guide to cleanly reinstall Nintendo Switch emulators Yuzu and Ryujinx while preserving your game saves"
date: 2025-06-04
lastmod: 2025-06-04
categories: ["PC"]
tags: ["yuzu", "ryujinx", "nintendo-switch", "emulation", "backup", "save", "reinstallation"]
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
summary: "Learn how to completely reinstall Yuzu and Ryujinx without losing your precious save files. Detailed guide with screenshots and backup methods."
cover: "covers/yuzu-ryujinx-backup.webp"
image: "covers/yuzu-ryujinx-backup.webp"
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

#### Locate saves

1. **Launch Yuzu** (if possible)
2. **Right-click** on the desired game in the list
3. Select **"Open Save Data Location"**

#### Backup content

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

8. **Repeat this operation** for each game whose save you want to preserve
9. **Note the name** of each folder to facilitate restoration

### Step 2: Delete Yuzu data

#### Access configuration folder

1. Press **Windows + R**
2. Type `%appdata%` and press **Enter**

#### Delete Yuzu folder

3. Navigate to the **"yuzu"** folder
4. **Completely delete** this folder
5. **Empty the recycle bin** to free up space

> **💡 Tip**: If the folder is in use, completely close Yuzu via Task Manager.

### Step 3: [Reinstall Yuzu](http://localhost:1313/en/post/yuzu/)

### Step 4: Restore saves

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

![Ryujinx Menu](path_save_1.png)
*Save options in Ryujinx*

#### Backup additional data

4. If available, also click on **"Open Device Save Directory"** and/or BCAT
5. **Copy** all content to your backup folders
6. **Organize** by game name like for Yuzu

### Step 2: Delete Ryujinx

#### Locate configuration folder

1. Press **Windows + R**
2. Type `%appdata%` and validate
3. Navigate to the **"Ryujinx"** folder
4. **Completely delete** this folder

### Step 3: Reinstallation and restoration

#### [Reinstall Ryujinx](http://localhost:1313/en/post/ryujinx/)

#### Restore saves

4. **Launch each game** once
5. **Close** Ryujinx
6. **Replace** save files with your backups
7. **Test** that everything works correctly

### Important verifications

**Before reinstallation:**
- ✅ Complete backups created
- ✅ Game names noted
- ✅ Firmware/keys available

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
1. Check the exact file location
2. Try with a similar emulator version
3. Use an older backup

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
**A:** Yes, there are plenty of tutorials available on the internet

**Q: How long does the complete procedure take?**
**A:** It depends completely on the number of games you have

**Q: What to do if I forgot to backup before reinstallation?**
**A:** Check Windows recycle bin, use file recovery tools, or restore from a system backup.

---