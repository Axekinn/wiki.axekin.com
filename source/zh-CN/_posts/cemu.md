---
title: "Cemu 安装与配置"
date: 2025-06-14
draft: false
categories: ["Cemu"]
tags: ["Cemu", "Nintendo Wii U", "模拟", "游戏"]
author: "Axekin"
description: "详细教程，介绍如何安装、配置和使用任天堂 Wii U 模拟器 Cemu"
series: ["模拟指南"]
toc: true
math: false
featured: false
weight: 20
aliases: 
  - /zh-CN/cemu-guide/
  - /zh-CN/guides/cemu-setup/
summary: "Cemu 安装与配置完整指南，Cemu 是性能最强的 Wii U 模拟器。包含安装、优化配置和技巧。"
cover: "covers/cemu.webp"
image: "covers/cemu.webp"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

## 🎮 Cemu 简介

**Cemu** 是目前性能最强、功能最完善的任天堂 Wii U 模拟器。自 2015 年开发以来，它允许您在 PC 上玩 Wii U 独占游戏，并提供惊人的图形增强、模组和出色的兼容性。

## 🔧 第 1 步：下载 Cemu

### 推荐选项：官方版本
```bash
# 官方网站
https://github.com/cemu-project/Cemu/releases
```

1. **点击** 您的操作系统
2. **下载** `cemu_X.X.X.zip` (最新版本)
3. **解压** 到一个专用文件夹（例如：`Emulators\Cemu` 或在次要驱动器的根目录）

## 📦 下载您的游戏

### 第 1 步：访问游戏库

前往 **[🎮 Axekin Games - Nintendo Wii U](https://www.axekin.com/games?platform=wiiu)** 访问任天堂 Wii U 游戏合集。

### 第 2 步：下载游戏

1. 在列表中 **搜索** 所需游戏
2. **点击** 下载按钮
3. **等待** 下载完成

### 第 3 步：解压文件

下载完成后，使用以下软件之一 **解压** 存档：

| 软件 | 下载链接 | 兼容性 |
|----------|---------------|---------------|
| **7-Zip** | [下载 7-Zip](https://www.7-zip.org/) | Windows/Linux |
| **WinRAR** | [下载 WinRAR](https://www.win-rar.com/) | Windows |

> **💡 提示**：7-Zip 是免费和开源的，而 WinRAR 在试用期后需要许可证。

**结果**：您将获得准备好与 Cemu 一起使用的游戏文件！ 🎯

## 📁 第 2 步：文件夹结构

为了优化您的游戏库组织，以下是推荐的文件树结构：

````
Wii U Games/
    Super Mario 3D World/
   ├── BASE
   │   ├── code/      # 🎮 游戏代码 (主 .rpx 文件)
   │   ├── content/   # 📁 游戏内容 (纹理、音频等)
   │   └── meta/      # 📋 元数据 (图标、标题等)
   ├── UPDATE     
   │   ├── code/      # 🎮 游戏代码 (主 .rpx 文件)
   │   ├── content/   # 📁 游戏内容 (纹理、音频等)
   │   └── meta/      # 📋 元数据 (图标、标题等)            
   ├── DLC   
   │   ├── code/      # 🎮 游戏代码 (主 .rpx 文件)
   │   ├── content/   # 📁 游戏内容 (纹理、音频等)
   │   └── meta/      # 📋 元数据 (图标、标题等)   
    Zelda Breath Of The Wild/
   ├── BASE
   │   ├── code/      # 🎮 游戏代码 (主 .rpx 文件)
   │   ├── content/   # 📁 游戏内容 (纹理、音频等)
   │   └── meta/      # 📋 元数据 (图标、标题等)
   ├── UPDATE     
   │   ├── code/      # 🎮 游戏代码 (主 .rpx 文件)
   │   ├── content/   # 📁 游戏内容 (纹理、音频等)
   │   └── meta/      # 📋 元数据 (图标、标题等)            
   ├── DLC   
   │   ├── code/      # 🎮 游戏代码 (主 .rpx 文件)
   │   ├── content/   # 📁 游戏内容 (纹理、音频等)
   │   └── meta/      # 📋 元数据 (图标、标题等)    
            
````

### 内容类型


- **code/** 📁: 包含游戏的主 .rpx 文件
- **content/** 📁: 游戏资源 (纹理、声音、视频)
- **meta/** 📁: 元数据和图标
- **Updates/** 📁: 游戏更新 (对兼容性很重要)



✅ **自动检测**：Cemu 会自动扫描并添加游戏  
✅ **简化管理**：Cemu 中清晰的界面  
✅ **轻松更新**：用于更新和 DLC 的专用文件夹
✅ **最大兼容性**：遵循官方 Wii U 格式的结构


## 💡 便携式配置 (推荐)


Cemu 默认为便携式。所有配置都存储在 `mlc01` 安装文件夹中，便于备份和移植。


### 便携式安装结构

```
📁 Cemu/
├── 🎮 Cemu.exe
├── 📁 gameProfiles/      # 游戏配置文件
├── 📁 graphicPacks/      # 图形包和模组
├── 📁 memorySearcher/    # 内存搜索工具
├── 📁 mlc01/            # 虚拟 Wii U 系统数据
├── 📁 shaderCache/      # 编译的着色器缓存
└── 📄 settings.xml      # 主配置文件
```


**✅ 轻松备份**：只需备份一个文件夹  
**✅ 完全便携**：可移动到任何 PC  
**✅ 保留配置**：重新安装时不会丢失  
**✅ 简化共享**：易于共享的配置


## ⚙️ 第 3 步：安装和首次启动

### 首次启动

1. 以管理员身份 **执行** `Cemu.exe` (仅限首次启动)
2. 在 `Game paths` 中 **设置** 游戏文件夹
3. **添加** 您的 "Wii U Games" 文件夹
4. **下载** 图形包
5. **验证** 游戏是否出现在库中

- 然后点击关闭，我们稍后将配置控制器

## ⚙️ 第 4 步：优化配置

### 常规设置

```
Options → General settings
```

**常规选项卡：**
- **界面语言**：中文
- **Discord Presence**：✅ 启用 (可选)
- **检查更新**：✅ 启用

### 优化图形配置

```
Options → General settings → Graphics
```

#### 常规选项卡

| 参数 | 推荐值 | 描述 |
|-----------|------------------|-------------|
| **图形 API** | Vulkan | 最佳性能 (如果出现问题则使用 OpenGL) |
| **图形设备** | 您的主 GPU | 可用的最强大的 GPU |
| **VSync** | ✅ 启用 | 防止屏幕撕裂 |

- 其余参数保持默认即可

### 音频配置

```
Options → General settings → Audio
```

- **音频 API**：XAudio2 (Windows) 或 DirectSound
- **音频通道**：根据您的配置选择立体声或 5.1

### 控制器配置

#### 控制器自动方法

```
Options → Input settings
```

1. **模拟控制器**：Wii U GamePad
2. **控制器 API**：XInput (Xbox 控制器) 或 DirectInput
3. **点击** "Calibrate"
4. **按照** 屏幕上的说明操作
5. **测试** 所有按钮和摇杆

## 🎨 第 5 步：图形包和模组

### 安装图形包

1. **下载图形包**：`Options → Download community graphic packs`
2. **重启** Cemu
3. **按游戏配置**：右键单击游戏 → `Edit graphic packs`

**推荐的模组网站：**
- **GameBanana**: [gamebanana.com](https://gamebanana.com)
- **NexusMods**: [nexusmods.com](https://nexusmods.com)
- **Reddit r/cemu**: 活跃的社区和支持

## ❓ FAQ - 常见问题

### 一般问题

**问：所有 Wii U 游戏都能在 Cemu 上运行吗？**
**答：** 大约 95% 的游戏可以完美运行。请查看 Cemu 官网上的官方兼容性列表。

**问：我可以使用我真正的 Wii U 存档吗？**
**答：** 是的，使用 Saviine 或专用的自制软件，您可以传输您的存档。

**问：GamePad 真的能用吗？**
**答：** 是的，触摸屏通过鼠标模拟，GamePad 界面功能齐全。

### 技术问题

**问：Vulkan 还是 OpenGL？**
**答：** Vulkan 通常提供更好的性能。如果出现兼容性问题，请使用 OpenGL。

**问：为什么着色器编译需要时间？**
**答：** 这在首次启动游戏时是正常的。之后着色器会被缓存以供后续会话使用。

### 常见问题

**问：游戏突然崩溃？**
**答：** 检查已激活的图形包，更新 Cemu 和您的 GPU 驱动程序。

**问：音频断断续续？**
**答：** 将音频延迟增加到 64ms 或更改音频 API (XAudio2/DirectSound)。

**问：纹理模糊？**
**答：** 启用 16x 各向异性过滤并验证分辨率是否正确配置。

### 游戏格式

**问：.wud 和 .wux 有什么区别？**
**答：** .wux 是 .wud 的压缩版本。两者都完美运行，.wux 节省磁盘空间。

**问：如何安装 DLC 和更新？**
**答：** 将它们放在 Updates/ 文件夹中，结构与基础游戏相同。


**🎉 恭喜！** 您现在拥有一个完美配置的 Cemu，可以以高清和最佳性能享受 Wii U 独占游戏！


**以 4K 分辨率和惊人的模组享受您的 Wii U 游戏！ 🎮✨**
