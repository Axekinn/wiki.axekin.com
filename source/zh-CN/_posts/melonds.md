---
title: "melonDS 安装与配置"
description: "安装、配置和使用 melonDS 任天堂 DS 模拟器的详细教程 - 包含 BIOS、图形和控制的完整设置"
date: 2025-06-02
lastmod: 2025-06-07
categories: ["MelonDS"]
tags: ["melonDS", "任天堂 DS", "模拟", "游戏"]
author: "Axekin"
draft: false
toc: true
math: false
featured: true
weight: 5
aliases: 
  - /zh-CN/melonds-guide/
  - /zh-CN/guides/melonds-installation/
summary: "学习如何安装和配置 melonDS 以实现最佳的任天堂 DS 模拟效果。包含 BIOS、图形设置和高级功能的完整指南。"
cover: "covers/melonds.png"
image: "covers/melonds.png"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

## 🎮 melonDS 简介

**melonDS** 是一款自 2016 年以来开发的现代化、精确的开源任天堂 DS 模拟器。它以其出色的兼容性、模拟精度和高级功能（如本地 Wi-Fi、即时存档和图形增强）而脱颖而出。它是 DeSmuME 的完美现代替代品。

> 💡 **重要提示**：由于 DS 的架构简单，melonDS 比大多数现代模拟器的要求要低。

## 🔧 第 1 步：下载 melonDS

### 稳定版（推荐）
```bash
# 官方网站
https://melonds.kuribo64.net/downloads.php
```

1.  **点击** "Download Windows x64"
2.  **下载** `melonds-0.9.5-windows-x64.zip`
3.  **解压**到一个专用文件夹（例如 `Documents\melonDS` 或另一个驱动器的根目录，而不是 C 盘）

### 开发版
```bash
# 包含最新功能的自动构建版本
https://github.com/melonDS-emu/melonDS/releases

优点：
- 新的改进
- 最近的修复
- 实验性功能

风险：
- 可能不稳定
- 可能出现退步
```

### melonDS Android
```bash
# 官方移动版
https://play.google.com/store/apps/details?id=me.magnum.melonds

功能：
- 优化的触摸界面
- 支持蓝牙控制器
- 存档同步
```

## 游戏下载

### 第 1 步：访问游戏库

前往 **[🎮 Axekin Games - Nintendo DS](https://www.axekin.com/games?platform=ds)** 访问任天堂 DS 游戏合集。

### 第 2 步：下载游戏

1.  在列表中**搜索**所需游戏
2.  **点击**下载按钮
3.  **等待**下载完成

### 第 3 步：文件提取

下载完成后，使用以下软件之一**提取**压缩包：

| 软件 | 下载链接 | 兼容性 |
|----------|---------------|---------------|
| **7-Zip** | [下载 7-Zip](https://www.7-zip.org/) | Windows/Linux |
| **WinRAR** | [下载 WinRAR](https://www.win-rar.com/) | Windows |

> **💡 提示**：7-Zip 是免费的开源软件，而 WinRAR 在试用期后需要许可证。

**结果**：您将获得可与 melonDS 一起使用的游戏文件！ 🎯

## 📁 第 2 步：文件夹结构

创建此文件夹结构以组织您的文件：

为了优化您的游戏库组织，推荐使用以下树形结构：

````
DS Games/
├── 动物森友会：野生世界/
│   ├── BASE/                # 🎮 基础游戏 (主文件)
├── 纪元 1701：探索的黎明/
│   ├── BASE/                # 🎮 基础游戏
├── 艺术学院/
│   ├── BASE/
└── 刺客信条：阿泰尔编年史/
    ├── BASE/
````

### 内容类型

- **BASE** 📁：您下载的主游戏

✅ **自动检测**：游戏会自动添加到模拟器中  
✅ **简化管理**：无需手动选择每个 ROM  
✅ **清晰的组织**：轻松查看每个游戏拥有的内容  
✅ **易于维护**：简化内容的添加/删除

> **📝 重要提示**：如果游戏没有更新或 DLC，则无需创建相应的文件夹。仅为您实际拥有的内容创建文件夹。

### 结果

一旦此结构就位，您的模拟器将自动检测 "DS Games" 文件夹中的所有游戏，并在您的库中正确组织它们！ 🎯

## ⚙️ 第 3 步：任天堂 DS BIOS 安装

### 所需的 BIOS 文件

> ⚠️ **（非）必需**：为实现最佳功能，需要任天堂 DSi BIOS 文件。

**必要文件：**
- `biosdsi7.bin` (16 KB) - ARM7 BIOS
- `biosdsi9.bin` (4 KB) - ARM9 BIOS  
- `dsifirmware.bin` (256 KB) - DS 固件

**📥 任天堂 DSi BIOS 下载：**

[下载任天堂 DSi BIOS](https://cdn.discordapp.com/attachments/1332956018665328702/1381293934109786246/Nintendo_DSi_Bios_for_emulators.zip?ex=6846fdb9&is=6845ac39&hm=e36162ccf2877cea45ea2ab9e004f2d38fddd8a7583be41f7e8414edc49e1383&)

> **📋 内容：** `biosdsi7.bin`, `biosdsi9.bin`, `dsifirmware.bin`

### 在 melonDS 中配置

1.  **启动** `melonDS.exe`
2.  `Config → Emu settings → DSi-mode`
3.  **配置** BIOS 路径：
    - **DS ARM9 BIOS**：`bios/biosdsi9.bin`
    - **DS ARM7 BIOS**：`bios/biosdsi7.bin`
    - **DS Firmware**：`bios/dsifirmware.bin`
4.  **重启** melonDS

## ⚙️ 第 4 步：基本配置

### 常规设置
```
Config → Emu settings → General
```

**推荐配置：**
- **控制台类型**：DS（如果是 DSi 游戏则为 DSi）
- **直接启动**：✅ 启用（直接启动游戏）
- **启用 JIT**：✅ 启用（极大提高性能）
- **JIT 最大块大小**：32（最佳）
- **JIT 字面优化**：✅ 启用
- **JIT 分支优化**：✅ 启用
- **JIT 快速内存**：✅ 启用

### 3D 设置
```
Config → Video Settings
```

您将进入一个包含两个主要部分的窗口：**显示设置**（左侧）和渲染设置 **软件渲染器** / **OpenGL 渲染器**（右侧）。

#### 3D 渲染配置

**渲染引擎选择：**

| 选项 | 性能 | 质量 | 推荐 |
|--------|-------------|---------|----------------|
| **软件** | 低 | 基本 | 旧硬件 |
| **OpenGL (经典)** | 优秀 | 非常好 | ✅ **推荐** |
| **OpenGL (计算着色器)** | 可变 | 最高 | 仅限最新 GPU |

#### OpenGL 设置（推荐）

**内部分辨率：** 根据您的 GPU 从 `1x 原生 (4096x3072)` 到 `16x`
- 1x = 原始 DS 分辨率
- 2x-3x = 良好的质量/性能折衷  
- 4x+ = 需要强大的 GPU

**增强选项：**
- ✅ **改进的多边形分割**：提高几何质量
- ✅ **使用高分辨率坐标**：提高纹理精度

#### 常规显示设置

```
显示设置 (左侧)
```

**推荐配置：**
- **垂直同步 (VSync)**：✅ 启用（防止画面撕裂）
- **垂直同步间隔**：`1`（标准 60 FPS）
- **OpenGL 显示**：✅ 勾选以使用 OpenGL 显示

### 视觉效果

通过这些设置，您的 DS 游戏将受益于**倍增的分辨率**和**相比原始主机显著改善的显示质量**！

> **💡 性能提示**：如果遇到速度变慢，请先降低**内部分辨率**，然后再更改渲染引擎。

## ⚙️ 第 5 步：视频和音频配置

### 视频设置
```
View
```

**显示设置：**
- **DS 屏幕布局**：自然、垂直、水平（您的选择）
- **DS 屏幕尺寸**：平均（屏幕大小相等）或强调顶部/底部
- **DS 屏幕间隙**：0-96 像素（个人偏好）
- **屏幕过滤**：线性（更平滑）或最近邻（清晰的像素艺术）
- **显示 OSD**：✅ 启用（有用的信息）

### 音频设置
```
Config → Audio settings
```

**最佳配置：**
- **音频输出**：自动（推荐）
- **音频音量**：256（最大）
- **麦克风输入**：自动或特定设备
- **麦克风噪声门**：✅ 启用（过滤背景噪音）

## ⚙️ 第 6 步：控制配置

### 键盘控制（默认）
```
Config → Input and hotkeys → DS keypad
```

**默认映射：**
- **A**：X
- **B**：Z  
- **X**：A
- **Y**：S
- **L**：Q
- **R**：W
- **Start**：回车
- **Select**：右 Shift
- **方向键**：箭头键

（个人示例，您可以随意设置）

### 控制器配置
```bash
# 自动检测
1. 连接您的控制器
2. Config → Input and hotkeys → DS keypad
3. 点击要配置的按钮
4. 按下控制器上相应的按钮
5. 为所有按钮重复此操作

# 推荐映射 (Xbox 控制器)
A → A (Xbox)
B → B (Xbox)  
X → Y (Xbox)
Y → X (Xbox)
L → LB
R → RB
方向键 → 方向键
Start → Menu
Select → View
```

### 游戏启动

#### 直接方法
```bash
# 简单打开
1. File → Open ROM
2. 导航到您的 .nds 文件
3. 选择并打开
4. 游戏自动启动

# 拖放
1. 将 .nds 文件拖到 melonDS 上
2. 立即启动
```

## 🛠️ 高级功能

### Wi-Fi 和本地多人游戏

#### 本地网络配置
```bash
# 本地多人游戏 melonDS
1. System → Multiplayer → Local multiplayer
2. 每个 melonDS 实例 = 一个控制台
3. 自动检测其他实例
4. 兼容：马里奥赛车 DS、宝可梦等。

# 配置：
- 需要在同一本地网络中
- 防火墙：允许 melonDS
- 端口：自动
- 使用 RadminVPN 连接，创建您自己的网络，并与您的朋友连接
```

## 🔧 故障排除

### 启动问题

#### melonDS 无法启动
```bash
系统检查：
1. 已安装 Visual C++ Redistributable
2. GPU 支持 OpenGL 3.2+
3. 显卡驱动程序已更新
4. 杀毒软件：为 melonDS 文件夹设置例外
5. 必要时使用管理员权限
```

#### ROM 无法启动
```bash
ROM 诊断：
1. 格式：检查是否为有效的 .nds
2. 大小：文件未损坏
3. BIOS：文件存在且有效
4. 区域：兼容 PAL/NTSC/JPN
5. 保护：某些转储需要补丁
```

## ❓ FAQ - 常见问题

### 一般问题

**问：melonDS 能玩所有 DS 游戏吗？**
**答：** 大约 97% 的游戏可以完美运行。总体兼容性非常好。

**问：我需要 BIOS 文件吗？**
**答：** 是的，为实现最佳功能和最大兼容性，需要 BIOS 文件。

**问：melonDS 支持 DSi 游戏吗？**
**答：** 部分支持。一些 DSi 游戏可以运行，其他的还不行。

### 技术问题

**问：OpenGL 还是软件渲染器？**
**答：** 推荐使用 OpenGL 以获得性能和视觉增强。软件渲染器用于兼容性。

**问：选择什么分辨率？**
**答：** 2x-3x 是质量/性能的良好折衷。如果 GPU 强大，则选择 4x+。

**问：JIT 安全吗？**
**答：** 是的，为获得良好性能所必需。没有安全风险。

### 常见问题

**问：尽管电脑配置很好但还是卡顿？**
**答：** 检查 JIT 是否启用，使用 OpenGL，必要时降低缩放因子。

**问：存档不工作？**
**答：** 检查存档文件夹的写入权限，正确的 ROM 格式。

**问：Wi-Fi 不工作？**
**答：** Wi-Fi 仅限于支持的游戏，需要网络配置。

## 🎯 结论

**用 melonDS 以高清方式重新发现任天堂 DS 游戏库！ 🎮✨**
