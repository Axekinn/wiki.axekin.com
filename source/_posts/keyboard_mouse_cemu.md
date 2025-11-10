---
title: "Playing with Keyboard & Mouse on Cemu Emulator"
description: "Detailed tutorial for configuring keyboard-mouse controls on Cemu with Mouse2Joystick and ViGEmBus - Step-by-step configuration guide"
date: 2025-06-04
lastmod: 2025-06-04
categories: ["PC"]
tags: ["cemu", "wiiu", "keyboard-mouse", "mouse2joystick", "vigembus", "emulation", "nintendo"]
series: ["Emulation Guides"]
author: "Axekin"
draft: false


toc: true
math: false
featured: false
weight: 20
aliases: 
  - /en/cemu-keyboard-mouse/
  - /en/guides/cemu-keyboard-mouse/
summary: "Learn how to play Wii U games on Cemu with keyboard and mouse. Complete guide with Mouse2Joystick and detailed configuration."
cover: "covers/cemu-keyboard-mouse.webp"
image: "covers/cemu-keyboard-mouse.webp"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

> **⚠️ Important Note**: While possible, the keyboard-mouse experience on Cemu won't be as pleasant as with a controller. This solution suits players who don't have a compatible gamepad.

## Introduction

Playing **Wii U** games on the **Cemu** emulator with a **keyboard and mouse** requires using third-party tools to simulate a controller. This guide explains how to configure this solution with **Mouse2Joystick** and **ViGEmBus**.

This method is particularly useful for:
- Players who don't have a compatible controller
- Quick game testing without investing in a gamepad
- Certain game genres adapted to keyboard-mouse

### General Process

1. **Download** ViGEmBus and Mouse2Joystick
2. **Install** ViGEmBus (virtual controller driver)
3. **Configure** Mouse2Joystick according to your preferences
4. **Set up** Cemu to recognize the controls
5. **Test** and adjust settings

## Prerequisites and Downloads

### Required Software

**Essential applications:**
- **ViGEmBus**: Driver for virtual controllers
- **Mouse2Joystick**: Converts keyboard/mouse to controller signals
- **Cemu**: Wii U emulator (latest stable version)

### Downloads

#### ViGEmBus (Virtual Controller Driver)

**🔗 [Download ViGEmBus](https://github.com/ViGEm/ViGEmBus/releases)**

**Download instructions:**
1. **Access** the releases page
2. **Download** the latest `.msi` file
3. **Example**: `ViGEmBus_Setup_1.17.333.msi`

**ViGEmBus features:**
- **Free** and open-source
- **Compatible** with Windows 10/11
- **Stable** and regularly updated
- **Required** to simulate Xbox controllers

#### Mouse2Joystick (Control Converter)

**🔗 [Download Mouse2Joystick](https://github.com/memethyl/Mouse2Joystick/releases)**

**Download instructions:**
1. **Download** the latest `.zip` file
2. **Example**: `Mouse2Joystick_v2.3.1.zip`
3. **Extract** to a dedicated folder (e.g., `C:\Tools\Mouse2Joystick\`)

**Mouse2Joystick features:**
- **Portable**: no installation required
- **Customizable**: configurable key mapping
- **Lightweight**: minimal performance impact
- **Real-time**: instant movement conversion

## Step 1: ViGEmBus Installation

### Installation Process

#### Running the Installer

1. **Locate** the downloaded `.msi` file
2. **Double-click** to start installation
3. **Accept** administrator permissions if prompted

#### Installation Configuration

**Installation steps:**
1. **Welcome** → Click "Next"
2. **License Agreement** → Accept and click "Next"
3. **Destination Folder** → Leave default, click "Next"
4. **Ready to Install** → Click "Install"
5. **Completed** → Click "Finish"

**Installed components:**
- Virtual bus driver
- Required system libraries
- Device management interface

### Installation Verification

#### Check in Device Manager

1. **Right-click** "This PC" → **Device Manager**
2. **Expand** "System devices"
3. **Verify** presence of "ViGEmBus Device"


## Step 2: Mouse2Joystick Configuration

### Extraction and First Use

#### Software Preparation

1. **Navigate** to the downloaded `.zip` file
2. **Right-click** → **Extract All**
3. **Choose** a permanent folder (e.g., `C:\Tools\Mouse2Joystick\`)
4. **Launch** `Mouse2Joystick.exe`

### Interface and Basic Configuration

#### First Launch

Once launched, Mouse2Joystick displays a simple interface:


#### Recommended Configuration

**Suggested basic settings:**

**"Mouse Settings" section:**
```
Mouse Sensitivity X: 3.0
Mouse Sensitivity Y: 3.0
Mouse Deadzone: 0.1
Invert Y-axis: Per preference
```

**"Controller Settings" section:**
```
Controller Type: Xbox 360 Controller
Vibration: Disabled (not necessary)
```

### Key Mapping

#### Control Configuration

**Recommended standard mapping:**

| Wii U Action | Keyboard Key | Function |
|--------------|--------------|----------|
| **Left Stick** | WASD | Movement |
| **Right Stick** | Mouse | Camera |
| **A Button** | Space | Primary action |
| **B Button** | Left Ctrl | Secondary action |
| **X Button** | E | Interaction |
| **Y Button** | Q | Menu/Inventory |
| **L/R** | Shift/Tab | Bumpers |
| **ZL/ZR** | Left/Right Click | Digital triggers |

#### Advanced Settings

**Mouse sensitivity:**
- **FPS games**: High sensitivity (4.0-5.0)
- **Adventure games**: Medium sensitivity (2.5-3.5)
- **Platform games**: Low sensitivity (1.5-2.5)

**Dead zones:**
- **Mouse**: 0.05-0.15 (avoids micro-movements)
- **Keyboard**: 0.0 (instant response)

## Step 3: Cemu Configuration

### Accessing Control Settings

#### Navigating in Cemu

1. **Launch** Cemu
2. **Menu** "Options" → **"Input Settings"**
3. **Remove** all existing controllers with the **"-"** button


### Removing Existing Controllers

#### Configuration Cleanup

**Removal steps:**
1. **Identify** all listed controllers
2. **Click** the **"-"** button for each controller
3. **Confirm** removal if prompted
4. **Verify** the list is empty


### Adding New Controllers

#### XInput Configuration (Mouse2Joystick)

**With Mouse2Joystick open:**
1. **Click** the **"+"** button
2. **Select** "XInput" as API
3. **Choose** "Controller 1" which should appear
4. **Confirm** selection


#### Keyboard Configuration (Additional Keys)

**For unmapped keys:**
1. **Click** **"+"** again
2. **Select** "Keyboard" as API
3. **Choose** "Controller 1"
4. **Configure** specific Wii U keys


### Final Key Configuration

#### Mapping in Cemu

**Recommended configuration:**

**XInput Controller (Mouse2Joystick):**
```
Left Stick: Character movement
Right Stick: Camera control
A Button: Primary action
B Button: Back/Cancel
X Button: Secondary action
Y Button: Menu
L/R Bumper: Quick triggers
L/R Trigger: Analog triggers
```

**Keyboard Controller (special keys):**
```
Plus: Enter (Main menu)
Minus: Escape (Pause)
Home: Tab (Home menu)
Screenshot: F12
```

## Conclusion

Playing **Wii U** games on **Cemu** with keyboard and mouse is possible thanks to **Mouse2Joystick** and **ViGEmBus**. While the experience isn't optimal for all games, this solution allows discovering the excellent Wii U catalog without investing in a controller.


### Final Tips

**For a better experience:**
- Start with adapted games (Zelda, RPG)
- Take time to adjust sensitivities
- Save your configurations
- Consider buying a controller eventually

## FAQ - Frequently Asked Questions

**Q: Does this method work with all Wii U games?**
A: No, some games absolutely require a controller for a proper experience (Mario Kart, Smash Bros, etc.).

**Q: Can I use this configuration for other emulators?**
A: Yes, Mouse2Joystick works with most emulators supporting XInput.

**Q: Is latency significant?**
A: Latency is generally low but may vary depending on your hardware configuration.

**Q: Do I need to keep Mouse2Joystick open permanently?**
A: Yes, Mouse2Joystick must remain open while you play to maintain controller simulation.

**Q: Does this method affect Cemu performance?**
A: Impact is minimal, as Mouse2Joystick is very resource-light.
````