---
title: "使用 Ryujinx 设置 XLink Kai"
date: 2025-06-03
draft: false
categories: ["Ryujinx", "XLink Kai"]
tags: ["Ryujinx", "XLink Kai", "Nintendo Switch", "模拟", "多人游戏"]
author: "Axekin"
description: "使用 Nintendo Switch 模拟器 Ryujinx 配置 XLink Kai 进行多人游戏的详细教程"
cover: "covers/ryujinx.png"
---

## 🎮 XLink Kai + Ryujinx 简介

**XLink Kai + Ryujinx** 允许玩家通过网络模拟 Nintendo Switch 游戏。这种实验性集成使您能够与其他 Ryujinx 用户甚至真实的 Nintendo Switch 主机进行多人游戏。

> ⚠️ **重要提示**：XLink Kai + Ryujinx 支持是实验性的，目前仅在 Windows 上可用。

## 📋 有效功能

- 支持 LAN 的 Nintendo Switch 游戏
- 支持本地无线的 Nintendo Switch 游戏
- Ryujinx 对战其他 Ryujinx 玩家
- Ryujinx 对战 Switch 上的玩家（本地无线游戏需要 CFW）
- Ryujinx 和本地 Switch 一起玩
- 混合以上任何组合！

## ❌ 无效功能

- 尚不支持 macOS
- 尚不支持 Linux

## 🌐 连接类型

### LAN 游戏

LAN 游戏支持最广泛，以下配置可以一起玩：

- 使用未修改的“OFW”Nintendo Switch 和 Nintendo Switch Lite 系统的玩家
- 使用修改过的“CFW”Nintendo Switch 系统的玩家
- 使用 Ryujinx 的玩家

### 本地无线游戏

本地无线游戏限制更多，但以下配置可以一起玩：

- 使用带有 ldn_mitm 系统模块的修改过的“CFW”Nintendo Switch 系统的玩家
- 使用 Ryujinx 的玩家

> ⚠️ **重要**：未修改的“OFW”Nintendo Switch 和 Nintendo Switch Lite 系统不支持本地无线游戏。

## 🔧 网络配置

### Windows

这些说明特定于 Windows 10 和 Windows 11。旧版 Windows 应遵循类似的过程。

#### 安装 NPCAP

由于许可问题，XLink Kai 附带的 WinPCAP 不幸与环回适配器不兼容。要解决此问题，您需要安装 NPCAP。已知版本 1.31 是稳定的。

1. 从[官方网站](https://npcap.com/#download) **下载** NPCAP
2. 使用默认选项 **安装** NPCAP（只需单击“下一步”直到结束）

#### 运行 kaiLoopbackBridge

1. **打开** Windows 资源管理器并导航到 `C:\Program Files (x86)\XLink Kai\`
2. **找到** `kaiLoopbackBridge64.exe`，右键单击，**以管理员身份运行**
3. **阅读** 警告，按任意键继续
4. **选择** Nintendo Switch 作为模拟器类型
5. 环回适配器现在将自动配置
6. **关闭** kaiLoopbackBridge。我们稍后会再次使用它。

## ⚙️ 安装和配置 Ryujinx

Ryujinx 的设置非常简单，请查看 [Ryujinx 指南](https://wiki.axekin.com/zh-CN/post/ryujinx/) 进行基本安装。

### 网络设置

#### 对于 LAN 游戏

1. Ryujinx 运行后，通过单击 **Options** 然后 **Settings** 访问配置
2. 单击 **System** 选项卡
3. 选中 **Enable VSync** 复选框
4. 选中 **Enable Guest Internet Access** 复选框
5. 单击 **Multiplayer** 选项卡
6. 在 LAN 标题下，将 **Network Interface** 设置为 **XLink Kai Loopback Switch XXXX**
7. **保存** 配置并退出 Ryujinx

#### 对于本地无线游戏

1. Ryujinx 运行后，通过单击 **Options** 然后 **Settings** 访问配置
2. 单击 **System** 选项卡
3. 选中 **Enable VSync** 复选框
4. 单击 **Network** 选项卡
5. 取消选中 **Enable Guest Internet Access** 复选框
6. 在 Multiplayer 标题下，将 **Mode** 设置为 **ldn_mitm**
7. 在 LAN 标题下，将 **Network Interface** 设置为 **XLink Kai Loopback Switch XXXX**
8. **保存** 配置并退出 Ryujinx

## 🎮 在 XLink Kai 上玩游戏

由于 Ryujinx 和 XLink Kai（目前）无法直接相互通信，因此 kaiLoopbackBridge 被用作它们之间的“桥梁”。

1. **启动** XLink Kai 并登录
2. **启动** kaiLoopbackBridge，浏览提示并在整个游戏会话期间保持其打开。几秒钟后，XLink Kai 将在“Metrics”选项卡下看到一个 Nintendo Switch。
3. **启动** Ryujinx 并启动您的游戏。在启动 kaiLoopbackBridge 之前，Ryujinx 不得运行。
4. **导航** 到游戏竞技场并开始游戏！


请务必始终按以下顺序启动应用程序：
1. XLink Kai
2. kaiLoopbackBridge
3. Ryujinx


如果遇到连接问题：
- 检查所有防火墙是否允许 XLink Kai 和 Ryujinx
- 确保环回适配器配置正确
- 按正确顺序重新启动所有应用程序

---

> **提醒**：如果您合法拥有所模拟的游戏，则模拟是合法的。请始终通过购买游戏来支持开发者。

**使用 Ryujinx 和 XLink Kai 享受多人游戏！ 🎮✨**
（本教程完全基于官方 X Link Kai 教程；我只是对其进行了更新。）
