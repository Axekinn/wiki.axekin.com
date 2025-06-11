---
title: "How to Use Amiibo on Switch Emulators (Yuzu & Ryujinx)"
description: "Complete guide to use virtual amiibo on Nintendo Switch emulators Yuzu and Ryujinx - Detailed configuration and usage tutorial"
date: 2025-06-04
lastmod: 2025-06-04
categories: ["gaming", "emulation", "tutorials"]
tags: ["amiibo", "yuzu", "ryujinx", "nintendo-switch", "emulation", "nfc", "figurines"]
series: ["Emulation Guides"]
author: "Axekin"
draft: false
toc: true
math: false
featured: false
weight: 30
aliases: 
  - /en/amiibo-emulators/
  - /en/guides/amiibo-switch/
summary: "Learn how to use virtual amiibo on Yuzu and Ryujinx emulators. Step-by-step guide with file downloads and complete configuration."
cover: "/images/covers/amiibo-emulators.webp"
image: "/images/covers/amiibo-emulators.webp"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

> **⚠️ Legal Disclaimer**: Amiibo files should come from figurines you legally own. This guide is for educational purposes only.

## Introduction

**Amiibo** are Nintendo's NFC figurines that unlock special content in many Switch games. Thanks to **Yuzu** and **Ryujinx** emulators, it's possible to use **virtual amiibo** without owning the physical figurines.

This guide explains how to configure and use amiibo on the two most popular emulators.

### What is a virtual amiibo?

**Definition:**
- `.bin` file containing NFC data of an amiibo
- Simulates scanning a physical figurine
- Compatible with all amiibo-supporting games

**Virtual amiibo advantages:**
- Access to all amiibo without purchase
- No daily scan limits
- Easy storage and organization
- Instant usage

## Prerequisites and Download

### Required files

**Complete amiibo collection:**
```
📁 Amiibo_Collection/
├── 📁 Animal_Crossing/
├── 📁 Legend_of_Zelda/
├── 📁 Super_Mario/
├── 📁 Pokemon/
└── 📁 Fire_Emblem/
```

> **📥 Download**: [Complete Amiibo Collection](https://mega.nz/file/AXolTKwC#UgYFoVPWQs_MPPaZZxVifaJgnvpqMJRr_psW-Q_U7A)

### File verification

**Expected format:**
- Extension: `.bin`
- Size: 540 bytes (exactly)
- Naming: `Character_Name.bin`

**Example files:**
```
Link_Breath_of_Wild.bin
Mario_Super_Mario.bin
Pikachu_Pokemon.bin
Isabelle_Animal_Crossing.bin
```

## Usage on Yuzu

### Step 1: Game preparation

#### Launch and position the game

1. **Start Yuzu** and launch your amiibo-compatible game
2. **Navigate** to the amiibo scan area in the game
3. **Position yourself** where the game asks to scan an amiibo

![TOTK amiibo scan position](/images/yuzu-amiibo-position.png)
*Position to scan an amiibo in Tears of the Kingdom*

**Popular compatible games:**
- The Legend of Zelda: Breath of the Wild / Tears of the Kingdom
- Super Mario Odyssey
- Animal Crossing: New Horizons
- Fire Emblem: Three Houses
- Super Smash Bros. Ultimate

### Step 2: Load the amiibo

#### Access amiibo menu

4. **Without closing the game**, go to Yuzu's menu bar
5. Click on **"File"**
6. Select **"Load Amiibo"**

![Yuzu amiibo menu](/images/yuzu-amiibo-menu.png)
*Amiibo loading menu in Yuzu*

#### Select the file

7. A **selection window** opens
8. **Navigate** to your amiibo folder
9. **Select** the desired `.bin` file
10. Click **"Open"**

### Step 3: In-game activation

#### Scan the virtual amiibo

11. **Return** to the game (Alt+Tab)
12. **Press** the amiibo scan button (usually **right stick**)
13. The amiibo is **automatically detected** and scanned
14. **Enjoy** the unlocked content!

**Success indicators:**
- Scan animation in the game
- Unlocked amiibo content (items, costumes, etc.)
- Game confirmation message

## Usage on Ryujinx

### Step 1: Game preparation

#### Launch and position

1. **Start Ryujinx** and launch your game
2. **Navigate** to the amiibo scan area
3. **Prepare** to scan (the game usually displays an amiibo icon)

### Step 2: Scan the amiibo

#### Access scan menu

4. **Without closing the game**, go to Ryujinx's menu bar
5. Click on **"Actions"**
6. Select **"Scan Amiibo"**

![Ryujinx scan menu](/images/ryujinx-amiibo-scan.png)
*Amiibo scan menu in Ryujinx*

#### Select the amiibo

7. A **selection window** appears
8. **Choose** your amiibo `.bin` file
9. Click **"Open"**

### Step 3: Confirmation

#### Scan verification

10. **The amiibo is immediately scanned** in the game
11. **Verify** that content is unlocked
12. **Repeat** the operation for other amiibo if needed

## Method Comparison

| Aspect | Yuzu | Ryujinx |
|--------|------|---------|
| **Access menu** | File → Load Amiibo | Actions → Scan Amiibo |
| **Simplicity** | 2 steps | 2 steps |
| **Speed** | Fast | Instant |
| **Interface** | Standard | More intuitive |
| **Compatibility** | Excellent | Excellent |

## Amiibo Collection Management

### Recommended organization

**Folder structure by series:**
```
📁 Amiibo_Collection/
├── 📁 01_Super_Mario/
│   ├── Mario.bin
│   ├── Luigi.bin
│   ├── Peach.bin
│   └── Bowser.bin
├── 📁 02_Legend_of_Zelda/
│   ├── Link_BOTW.bin
│   ├── Link_TOTK.bin
│   ├── Zelda.bin
│   └── Ganondorf.bin
├── 📁 03_Pokemon/
│   ├── Pikachu.bin
│   ├── Lucario.bin
│   └── Mewtwo.bin
└── 📁 04_Animal_Crossing/
    ├── Isabelle.bin
    ├── Tom_Nook.bin
    └── K.K._Slider.bin
```

### Renaming for easier usage

**Naming convention:**
```
[Series]_[Character]_[Variant].bin

Examples:
ZELDA_Link_Breath_of_Wild.bin
MARIO_Mario_Wedding.bin
POKEMON_Pikachu_Detective.bin
```

## Advanced Usage

### Scanning multiple amiibo quickly

**Yuzu method:**
1. Keep amiibo folder open
2. Use **Ctrl+O** for quick access
3. Double-click files to load

**Ryujinx method:**
1. Create **bookmarks** to most used amiibo
2. Use **Alt+A** as shortcut (if configured)

### Amiibo for special content

#### The Legend of Zelda: BOTW/TOTK

**Essential amiibo:**
- **Link (BOTW)**: Rare materials + chance of legendary sword
- **Zelda**: Rare plants and herbs
- **Ganondorf**: Dark weapons and unique materials
- **Mipha**: Rare fish

#### Super Mario Odyssey

**Useful amiibo:**
- **Mario (Wedding)**: Wedding costume
- **Peach (Wedding)**: Wedding dress for Peach
- **Bowser (Wedding)**: Bowser costume

#### Animal Crossing: New Horizons

**Popular amiibo:**
- **All villagers**: Invitation to your island
- **Isabelle**: Special office items
- **Tom Nook**: Decoration items

## Troubleshooting

### Common problems

#### 🚫 Amiibo not recognized

**Possible causes:**
- Corrupted file
- Wrong format
- Game not compatible

**Solutions:**
1. Check file size (540 bytes)
2. Re-download the amiibo file
3. Test with another amiibo
4. Verify game compatibility

#### ⚠️ Scan doesn't work

**Checks:**
1. Is the game in "amiibo scan" mode?
2. Are you in the right place in the game?
3. Does the emulator support amiibo?

**Solutions:**
- Restart the emulator
- Update to latest version
- Check error logs

### Specific errors

#### Invalid file

```
Error: Invalid amiibo file format
```

**Solution:** Verify the file is exactly 540 bytes and has `.bin` extension

#### Amiibo already used

```
This amiibo has already been used today
```

**Solution:** Some games limit daily usage. Wait or change the emulator's system date.

## Creating Custom Amiibo

### Required tools

**TagMo (Android):**
- Application to create amiibo
- Requires NFC keys
- User-friendly interface

**Amiitool (PC):**
- Command line tool
- More technical but powerful
- Compatible Linux/Windows/Mac

### Creation process

1. **Obtain** base amiibo data
2. **Modify** desired parameters
3. **Generate** the `.bin` file
4. **Test** on emulator

> **⚠️ Note**: Creating amiibo requires advanced technical knowledge.

## Legality and Ethics

### Legal usage

**Best practices:**
- Only use amiibo you physically own
- Don't share files publicly
- Respect Nintendo's copyrights

**Gray area:**
- Backing up your own amiibo: Generally accepted
- Downloading non-owned amiibo: Legally questionable
- Commercial usage: Strictly forbidden

## Popular Games and their Amiibo

### The Legend of Zelda: Breath of the Wild

**Rewards by amiibo:**
| Amiibo | Main rewards |
|--------|--------------|
| **Link (BOTW)** | Legendary sword, rare materials |
| **Zelda** | Plants, radishes, mushrooms |
| **Ganondorf** | Meat, dark minerals |
| **Guardian** | Guardian materials |

### Super Smash Bros. Ultimate

**Fighter system:**
- AI fighter training
- Combat style customization
- Reward unlocking

### Animal Crossing: New Horizons

**Features:**
- Specific villager invitation
- Costume unlocking
- Exclusive decoration items

## Video Tutorial

For a complete visual demonstration, check out this tutorial:

**[Complete explanatory video](https://odysee.com/@696_STS:1/googledocpc:2)**

The video covers:
- Amiibo file installation
- Usage on Yuzu and Ryujinx
- In-game demonstration
- Common problem troubleshooting

## Conclusion

Using **virtual amiibo** on Switch emulators opens a world of possibilities to enrich your gaming experience. Whether to unlock exclusive content or simply test features, the presented methods are simple and effective.

### Key points to remember

> **🎯 Method summary:**
> 
> **Yuzu:**
> - File → Load Amiibo
> - Select .bin file
> - Scan in game
> 
> **Ryujinx:**
> - Actions → Scan Amiibo
> - Choose .bin file
> - Immediate activation

### Final tips

**For optimal experience:**
- Organize your collection by series
- Test amiibo on different games
- Save your configurations
- Respect legal aspects

## FAQ - Frequently Asked Questions

**Q: Can I use the same amiibo multiple times per day?**
A: It depends on the game. Some limit daily usage, others allow unlimited use.

**Q: Do amiibo work on all game versions?**
A: Generally yes, but check specific compatibility of your game version.

**Q: Can I create my own custom amiibo?**
A: Yes, with tools like TagMo or Amiitool, but it requires technical knowledge.

**Q: Do amiibo affect emulator performance?**
A: No, using amiibo has no impact on performance.

**Q: How do I save my amiibo data?**
A: Data is automatically saved in the game's save files.

---

**Did this guide help you?** Share your favorite amiibo and their uses in the comments!

**Related articles:**
- [Optimize Yuzu for Zelda Games](/en/post/yuzu-zelda-optimization/)
- [Complete Ryujinx Guide](/en/post/ryujinx-complete-guide/)
- [Best Switch Emulation Settings](/en/post/switch-emulation-settings/)
````