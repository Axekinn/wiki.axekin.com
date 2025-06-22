---
title: "How to Use Amiibo on Switch Emulators (Yuzu & Ryujinx)"
description: "Complete guide to use virtual amiibo on Nintendo Switch emulators Yuzu and Ryujinx - Detailed configuration and usage"
date: 2025-06-04
lastmod: 2025-06-04
categories: ["Yuzu", "Ryujinx"]
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
summary: "Learn to use virtual amiibo on Yuzu and Ryujinx emulators. Step-by-step guide with file download and complete configuration."
cover: "/images/covers/amiibo-emulators.webp"
image: "/images/covers/amiibo-emulators.webp"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

## Introduction

**Amiibo** are Nintendo's NFC figurines that unlock special content in many Switch games. Thanks to **Yuzu** and **Ryujinx** emulators, it's possible to use **virtual amiibo** without owning the physical figurines.

This guide explains how to configure and use amiibo on the two most popular emulators.

### What is a virtual amiibo?

**Definition:**
- `.bin` file containing NFC data from an amiibo
- Simulates scanning a physical figurine
- Compatible with all games supporting amiibo

**Virtual amiibo advantages:**
- Access to all amiibo without purchase
- No daily scan limit
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

> **📥 Download**: Amiibo are already available in the Ryujinx emulator.

## Usage on Yuzu

### Step 1: Game preparation

#### Launch and position the game

1. **Start Yuzu** and launch your amiibo-compatible game
2. **Navigate** to the amiibo scan area in the game
3. **Position yourself** where the game asks to scan an amiibo

### Step 2: Load the amiibo

#### Access amiibo menu

4. **Without closing the game**, go to Yuzu's menu bar
5. Click on **"File"**
6. Select **"Load Amiibo"**

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
3. **Get ready** to scan (the game usually displays an amiibo icon)

### Step 2: Scan the amiibo

#### Access scan menu

4. **Without closing the game**, go to Ryujinx's menu bar
5. Click on **"Actions"**
6. Select **"Scan Amiibo"**

#### Select the amiibo

7. A **selection window** appears
8. **Choose** your amiibo
9. Click **"Open"**

### Step 3: Confirmation

#### Verify the scan

10. **The amiibo is immediately scanned** in the game
11. **Verify** that the content is unlocked
12. **Repeat** the operation for other amiibo if necessary

## Conclusion

Using **virtual amiibo** on Switch emulators opens a world of possibilities to enrich your gaming experience. Whether to unlock exclusive content or simply to test features, the presented methods are simple and effective.

## FAQ - Frequently Asked Questions

**Q: Can I use the same amiibo multiple times per day?**
A: It depends on the game. Some limit daily usage, others allow unlimited use.

**Q: Do amiibo work on all game versions?**
A: Generally yes, but check the specific compatibility of your game version.

**Q: Can I create my own custom amiibo?**
A: Yes, with tools like TagMo or Amiitool, but it requires technical knowledge.

**Q: Do amiibo affect emulator performance?**
A: No, using amiibo has no impact on performance.

**Q: How do I save my amiibo data?**
A: Data is automatically saved in the game's save files.

---