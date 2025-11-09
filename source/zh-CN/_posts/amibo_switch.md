---
title: "如何在 Switch 模拟器上使用 Amiibo（Yuzu 和 Ryujinx）"
description: "在 Nintendo Switch 模拟器 Yuzu 和 Ryujinx 上使用虚拟 amiibo 的完整指南 - 详细配置和使用"
date: 2025-06-04
lastmod: 2025-06-04
categories: ["Yuzu", "Ryujinx"]
tags: ["amiibo", "yuzu", "ryujinx", "nintendo-switch", "模拟", "nfc", "手办"]
series: ["模拟指南"]
author: "Axekin"
draft: false
toc: true
math: false
featured: false
weight: 30
aliases: 
  - /zh-CN/amiibo-emulators/
  - /zh-CN/guides/amiibo-switch/
summary: "学习在 Yuzu 和 Ryujinx 模拟器上使用虚拟 amiibo。包含文件下载和完整配置的分步指南。"
cover: "covers/amiibo-emulators.webp"
image: "covers/amiibo-emulators.webp"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

## 简介

**Amiibo** 是任天堂的 NFC 手办，可以在许多 Switch 游戏中解锁特殊内容。借助 **Yuzu** 和 **Ryujinx** 模拟器，无需拥有实体手办即可使用 **虚拟 amiibo**。

本指南介绍如何在两个最流行的模拟器上配置和使用 amiibo。

### 什么是虚拟 amiibo？

**定义：**
- 包含 amiibo NFC 数据的 `.bin` 文件
- 模拟扫描实体手办
- 与所有支持 amiibo 的游戏兼容

**虚拟 amiibo 的优势：**
- 无需购买即可访问所有 amiibo
- 无每日扫描限制
- 易于存储和组织
- 即时使用

## 先决条件和下载

### 所需文件

**完整的 amiibo 收藏：**
```
📁 Amiibo_Collection/
├── 📁 Animal_Crossing/
├── 📁 Legend_of_Zelda/
├── 📁 Super_Mario/
├── 📁 Pokemon/
└── 📁 Fire_Emblem/
```

> **📥 下载**：Amiibo 已在 Ryujinx 模拟器中提供。

## 在 Yuzu 上使用

### 步骤 1：游戏准备

#### 启动并定位游戏

1. **启动 Yuzu** 并运行支持 amiibo 的游戏
2. **导航** 到游戏中的 amiibo 扫描区域
3. **定位** 到游戏要求扫描 amiibo 的位置

### 步骤 2：加载 amiibo

#### 访问 amiibo 菜单

4. **不关闭游戏**，转到 Yuzu 的菜单栏
5. 点击 **"文件"**
6. 选择 **"加载 Amiibo"**

#### 选择文件

7. **选择窗口** 打开
8. **导航** 到您的 amiibo 文件夹
9. **选择** 所需的 `.bin` 文件
10. 点击 **"打开"**

### 步骤 3：游戏内激活

#### 扫描虚拟 amiibo

11. **返回** 游戏（Alt+Tab）
12. **按下** amiibo 扫描按钮（通常是 **右摇杆**）
13. amiibo **自动检测** 并扫描
14. **享受** 解锁的内容！

**成功指标：**
- 游戏中的扫描动画
- 解锁的 amiibo 内容（物品、服装等）
- 游戏确认消息

## 在 Ryujinx 上使用

### 步骤 1：游戏准备

#### 启动并定位

1. **启动 Ryujinx** 并运行您的游戏
2. **导航** 到 amiibo 扫描区域
3. **准备好** 扫描（游戏通常会显示 amiibo 图标）

### 步骤 2：扫描 amiibo

#### 访问扫描菜单

4. **不关闭游戏**，转到 Ryujinx 的菜单栏
5. 点击 **"操作"**
6. 选择 **"扫描 Amiibo"**

#### 选择 amiibo

7. **选择窗口** 出现
8. **选择** 您的 amiibo
9. 点击 **"打开"**

### 步骤 3：确认

#### 验证扫描

10. **amiibo 立即在游戏中扫描**
11. **验证** 内容已解锁
12. 如有必要，**重复** 操作以使用其他 amiibo

## 结论

在 Switch 模拟器上使用 **虚拟 amiibo** 为丰富您的游戏体验开启了无限可能。无论是解锁独家内容还是简单测试功能，所介绍的方法都简单有效。

## 常见问题解答

**问：我可以每天多次使用同一个 amiibo 吗？**
答：这取决于游戏。有些游戏限制每日使用，其他游戏允许无限使用。

**问：amiibo 在所有游戏版本上都有效吗？**
答：通常是的，但请检查您的游戏版本的具体兼容性。

**问：我可以创建自己的自定义 amiibo 吗？**
答：可以，使用 TagMo 或 Amiitool 等工具，但需要技术知识。

**问：amiibo 会影响模拟器性能吗？**
答：不会，使用 amiibo 对性能没有影响。

**问：如何保存我的 amiibo 数据？**
答：数据会自动保存在游戏的存档文件中。

---
