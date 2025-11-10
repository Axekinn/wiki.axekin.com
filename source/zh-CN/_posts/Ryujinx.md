---
title: "Ryujinx 安装和配置"
description: "详细教程，用于安装、配置和优化 Ryujinx Nintendo Switch 模拟器 - 包含固件、密钥和设置的完整设置"
date: 2025-06-02
lastmod: 2025-06-07
categories: ["Ryujinx"]
tags: ["ryujinx", "nintendo-switch", "模拟", "安装", "配置", "游戏"]
series: ["模拟指南"]
author: "Axekin"
draft: false
toc: true
math: false
featured: true
weight: 20
aliases: 
  - /zh-CN/ryujinx-guide/
  - /zh-CN/guides/ryujinx-installation/
summary: "学习如何安装和配置 Ryujinx 以实现最佳的 Nintendo Switch 模拟。包含固件、密钥和优化的完整指南。"
cover: "covers/ryujinx.png"
image: "covers/ryujinx.png"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

## 🎮 Ryujinx 简介

**Ryujinx** 是一个用 C# 编写的开源 Nintendo Switch 模拟器。它允许您在 PC 上玩 Nintendo Switch 游戏，具有出色的性能和不断提高的兼容性。

## 🔧 步骤 1：下载 Ryujinx

### 选项 1：稳定版（推荐）
```bash
# 访问官方网站
https://ryujinx.app/
```

1. 点击 **"Download"**
2. 将存档解压到一个专用文件夹（例如，`Documents\Ryujinx` 或另一个驱动器的根目录，而不是 C 盘）

## 游戏下载

### 步骤 1：访问游戏库

前往 **[🎮 Axekin Games - Nintendo Switch](https://www.axekin.com/games?platform=switch)** 访问 Nintendo Switch 游戏合集。

### 步骤 2：下载游戏

1. 在列表中 **搜索** 所需游戏
2. **点击** 下载按钮
3. **等待** 下载完成

### 步骤 3：文件提取

下载完成后，使用以下软件之一 **提取** 存档：

| 软件 | 下载链接 | 兼容性 |
|----------|---------------|---------------|
| **7-Zip** | [下载 7-Zip](https://www.7-zip.org/) | Windows/Linux |
| **WinRAR** | [下载 WinRAR](https://www.win-rar.com/) | Windows |

> **💡 提示**：7-Zip 是免费和开源的，而 WinRAR 在试用期后需要许可证。

**结果**：您将获得准备好与 Ryujinx 一起使用的游戏文件！ 🎯

## 📁 步骤 2：文件夹结构

创建此文件夹结构以组织您的文件：

为了优化您的库的组织，这里是推荐的树形结构：

````
Switch Games/
├── Mario Kart 8 Deluxe/
│   ├── BASE/                # 🎮 基础游戏（主文件）
│   ├── UPDATE/              # 🔄 游戏更新（推荐）
│   └── DLC/                 # 📦 可下载内容（可选）
├── New Super Mario Bros U Deluxe/
│   ├── BASE/                # 🎮 基础游戏
│   ├── UPDATE/              # 🔄 游戏更新
│   └── DLC/                 # 📦 附加 DLC
├── The Legend of Zelda BOTW/
│   ├── BASE/
│   ├── UPDATE/
│   └── DLC/
└── Super Mario Odyssey/
    ├── BASE/
    └── UPDATE/              # (此游戏无 DLC)
````

### 内容类型


- **BASE** 📁：您下载的主游戏
- **UPDATE** 📁：更新和补丁（推荐）
- **DLC** 📁：额外的付费内容（可选但推荐）


✅ **自动检测**：游戏会自动添加到模拟器  
✅ **简化管理**：无需手动选择每个 ROM  
✅ **清晰的组织**：轻松查看每个游戏拥有的内容  
✅ **易于维护**：简化的内容添加/删除

> **📝 重要说明**：如果游戏没有更新或 DLC，则无需创建相应的文件夹。仅为您实际拥有的内容创建文件夹。

### 结果

一旦此结构到位，您的模拟器将自动检测“Switch Games”文件夹中存在的所有游戏，并在您的库中正确组织它们！ 🎯

## 💡 便携式配置（推荐）


**在首次启动之前**，在 Ryujinx 目录的根目录下创建一个名为 `portable` 的文件夹。此操作将使安装完全便携。

### 便携模式的优点

| 方面 | 普通模式 | 便携模式 |
|--------|-------------|---------------|
| **配置** | 存储在系统中 | 存储在文件夹中 |
| **存档** | 分散在计算机上 | 集中在文件夹中 |
| **便携性** | ❌ 绑定到系统 | ✅ 易于移动 |
| **备份** | 难以定位 | 易于备份 |

### 创建 portable 文件夹后的结构

```
📁 Ryujinx/
├── 🎮 Ryujinx.exe
├── 📁 portable/              # ← 创建此文件夹！
│   ├── 📁 bis/
│   ├── 📁 games/
│   ├── 📁 profiles/
│   └── 📁 system/
└── 📄 其他文件...
```


**您的所有数据**（配置、存档、配置文件）都将存储在 `portable` 文件夹中，极大地简化了管理和备份！

### 创建说明

1. **导航** 到 Ryujinx 安装文件夹
2. **创建** 一个名为 `portable` 的新文件夹
3. **启动** Ryujinx - 它将自动检测便携模式

> **📝 注意**：此操作必须在**首次启动之前**执行才能生效！

## ⚙️ 步骤 3：初始配置

### 首次启动
1. **执行** `ryujinx.exe`
2. **安装密钥**
- [密钥版本 18.X.X](https://files-prodkeys.b-cdn.net/prodkeys/ProdKeys.net-v18.-1-0.zip)
- [密钥版本 19.X.X](https://files.prodkeys.net/ProdKeys.net-v19.0.1.zip)
- [密钥版本 20.X.X](https://files.prodkeys.net/ProdKeys.net-v20.0.1.zip)

#### 在 Ryujinx 中安装
1. **打开** Ryujinx
2. `文件 → 打开 Ryujinx 文件夹`
3. **导航** 到 `system/` 文件夹
4. **复制** `prod.keys` 和 `title.keys`（如果存在，但无用）到其中
5. **重新启动** Ryujinx

### 安装 Nintendo Switch 固件

- [固件 19.0.1](https://github.com/THZoria/NX_Firmware/releases/download/19.0.1/Firmware.19.0.1.zip)
- [固件 20.1.5](https://github.com/THZoria/NX_Firmware/releases/download/19.0.1/Firmware.20.1.5.zip)
- [固件 20.2.0](https://github.com/THZoria/NX_Firmware/releases/download/19.0.1/Firmware.20.2.0.zip)
- [固件 20.3.0](https://github.com/THZoria/NX_Firmware/releases/download/19.0.1/Firmware.20.3.0.zip)
- [固件 20.4.0](https://github.com/THZoria/NX_Firmware/releases/download/19.0.1/Firmware.20.4.0.zip)
- [固件 20.5.0](https://github.com/THZoria/NX_Firmware/releases/download/20.5.0/Firmware.20.5.0.zip)

#### 在 Ryujinx 中安装
1. `操作 → 安装固件 → 从 XCI 或 ZIP 安装固件`
2. **选择** 固件 .zip 文件
3. **等待** 安装完成

### 基本设置配置

#### 界面设置
```
选项 → 设置 → 用户界面
```
- **游戏目录**：设置您之前创建的 **Switch Games** 目录
- **自动加载 DLC/更新目录**：同上
- **主题**：选择您想要的

#### 输入设置
```
选项 → 设置 → 输入
```
- **输入设备**：连接您的控制器，然后选择它
- **让它做**：配置是自动的，之后可以更改您想要的按钮
- **键盘/鼠标**：对于键盘/鼠标玩家，调整您的按键

#### 系统设置
```
选项 → 设置 → 系统
```
- **系统区域**：您的国家
- **系统语言**：您的语言
- **音频后端**：SDL2（推荐）
- **音量**：100%

## 🚀 性能优化

### 提高性能的高级设置

#### CPU
```
设置 → CPU
- 启用 PTC (Profiled Translation Cache): ✅ 启用
- 内存管理器模式: Host
```

#### GPU
```
设置 → 图形
- 着色器缓存: ✅ 启用
- 纹理重压缩: ✅ 启用
- 分辨率缩放: 1x (如果性能足够，可以更高)。抗锯齿、缩放滤镜和各向异性过滤也是如此，根据您的 PC 性能调整值
```

## 🌐 多人模式配置

### 启用在线模式


**转到** `选项 → 设置 → 网络 → 模式` 并选择 **RyuLDN**。

### 推荐的连接模式

| 连接类型 | 游戏内操作 | 结果 |
|-----------------|----------------|--------|
| **❌ 避免** | “在线”或“互联网”选项 | 连接到任天堂服务器 |
| **✅ 推荐** | “本地播放”或“本地无线”选项 | 通过 RyuLDN 连接 |

### 连接过程

```
1. RyuLDN 配置已启用 ✅
2. 游戏启动
3. 在菜单中选择“本地播放”
4. 与其他 Ryujinx 玩家自动连接
```


确保所有玩家使用**相同版本**的游戏并**启用 RyuLDN** 以获得最佳连接！

## 🛠️ 常见故障排除

### 问题：游戏无法启动
```bash
解决方案：
1. 检查固件是否已安装
2. 检查 prod.keys 是否存在
3. 使用不同的图形设置进行测试
```

### 问题：性能不佳
```bash
解决方案：
1. 将分辨率降低到 1x
2. 暂时禁用 V-Sync
3. 关闭其他应用程序
4. 使用 Vulkan 而不是 OpenGL
```

### 问题：频繁崩溃
```bash
解决方案：
1. 将 Ryujinx 更新到最新版本
2. 检查游戏文件的完整性
3. 重新安装固件
4. 使用默认设置进行测试
```

## ❓ FAQ - 常见问题

### 一般问题

**问：Ryujinx 合法吗？**
**答：** 是的，模拟是合法的。但是，您必须合法拥有您使用的所有游戏和固件。

**问：我可以用 Ryujinx 在线玩吗？**
**答：** 是的，通过 RyuLDN 进行本地游戏模拟。

**问：最低系统要求是什么？**
**答：** Windows 10 64 位、Intel Core i5-4430 / AMD FX-6300、8GB RAM、兼容 DirectX 11 的 GPU。

### 技术问题

**问：Vulkan 还是 OpenGL？**
**答：** Vulkan 在最近的 GPU 上通常性能更好。OpenGL 在某些系统上可能更稳定。

**问：最低需要多少 RAM？**
**答：** 最低 8GB，推荐 16GB，最重的游戏需要 32GB。

**问：我的 GPU 兼容吗？**
**答：** 任何支持 DirectX 11 或 Vulkan 1.1 的 GPU。GTX 1060/RX 580 可获得良好性能。

## 🎯 结论

有了这个完整的指南，您现在拥有了所有关键信息：
- **安装** 和优化配置 Ryujinx
- 根据您的硬件 **优化** 性能
- **解决** 常见问题
- 以卓越的品质 **享受** 您的 Nintendo Switch 游戏

---

> **提醒**：始终尊重版权并通过购买游戏来支持开发者。

**祝您在 Ryujinx 上玩得开心！ 🎮✨**
