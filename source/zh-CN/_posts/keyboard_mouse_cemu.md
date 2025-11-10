---
title: "在 Cemu 模拟器上使用键盘和鼠标玩游戏"
description: "在 Cemu 上使用 Mouse2Joystick 和 ViGEmBus 配置键盘鼠标控制的详细教程 - 分步配置指南"
date: 2025-06-04
lastmod: 2025-06-04
categories: ["PC"]
tags: ["cemu", "wiiu", "键盘鼠标", "mouse2joystick", "vigembus", "模拟", "任天堂"]
series: ["模拟指南"]
author: "Axekin"
draft: false
toc: true
math: false
featured: false
weight: 20
aliases: 
  - /zh-CN/cemu-keyboard-mouse/
  - /zh-CN/guides/cemu-keyboard-mouse/
summary: "学习如何在 Cemu 上使用键盘和鼠标玩 Wii U 游戏。包含 Mouse2Joystick 和详细配置的完整指南。"
cover: "covers/cemu-keyboard-mouse.webp"
image: "covers/cemu-keyboard-mouse.webp"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

> **⚠️ 重要提示**：虽然可行，但在 Cemu 上使用键盘和鼠标的体验不如使用手柄。此解决方案适合没有兼容游戏手柄的玩家。

## 简介

在 **Cemu** 模拟器上使用**键盘和鼠标**玩 **Wii U** 游戏需要使用第三方工具来模拟手柄。本指南将介绍如何使用 **Mouse2Joystick** 和 **ViGEmBus** 配置此解决方案。

此方法特别适用于：
- 没有兼容手柄的玩家
- 无需投资游戏手柄即可快速测试游戏
- 某些适合键盘鼠标的游戏类型

### 一般流程

1. **下载** ViGEmBus 和 Mouse2Joystick
2. **安装** ViGEmBus（虚拟手柄驱动程序）
3. 根据您的偏好**配置** Mouse2Joystick
4. **设置** Cemu 以识别控件
5. **测试**并调整设置

## 先决条件和下载

### 所需软件

**必备应用程序：**
- **ViGEmBus**：虚拟手柄驱动程序
- **Mouse2Joystick**：将键盘/鼠标信号转换成手柄信号
- **Cemu**：Wii U 模拟器（最新稳定版）

### 下载

#### ViGEmBus（虚拟手柄驱动程序）

**🔗 [下载 ViGEmBus](https://github.com/ViGEm/ViGEmBus/releases)**

**下载说明：**
1. **访问**发布页面
2. **下载**最新的 `.msi` 文件
3. **示例**：`ViGEmBus_Setup_1.17.333.msi`

**ViGEmBus 功能：**
- **免费**且开源
- **兼容** Windows 10/11
- **稳定**并定期更新
- **需要**模拟 Xbox 手柄

#### Mouse2Joystick（控件转换器）

**🔗 [下载 Mouse2Joystick](https://github.com/memethyl/Mouse2Joystick/releases)**

**下载说明：**
1. **下载**最新的 `.zip` 文件
2. **示例**：`Mouse2Joystick_v2.3.1.zip`
3. **解压**到专用文件夹（例如 `C:\Tools\Mouse2Joystick\`）

**Mouse2Joystick 功能：**
- **便携式**：无需安装
- **可定制**：可配置的按键映射
- **轻量级**：性能影响极小
- **实时**：即时移动转换

## 步骤 1：ViGEmBus 安装

### 安装过程

#### 运行安装程序

1. **找到**下载的 `.msi` 文件
2. **双击**开始安装
3. 如果出现提示，**接受**管理员权限

#### 安装配置

**安装步骤：**
1. **欢迎** → 点击“Next”
2. **许可协议** → 接受并点击“Next”
3. **目标文件夹** → 保留默认值，点击“Next”
4. **准备安装** → 点击“Install”
5. **完成** → 点击“Finish”

**已安装组件：**
- 虚拟总线驱动程序
- 所需的系统库
- 设备管理界面

### 安装验证

#### 在设备管理器中检查

1. **右键单击**“此电脑”→ **设备管理器**
2. **展开**“系统设备”
3. **验证**是否存在“ViGEmBus Device”


## 步骤 2：Mouse2Joystick 配置

### 解压和首次使用

#### 软件准备

1. **导航**到下载的 `.zip` 文件
2. **右键单击** → **全部解压**
3. **选择**一个永久文件夹（例如 `C:\Tools\Mouse2Joystick\`）
4. **启动** `Mouse2Joystick.exe`

### 界面和基本配置

#### 首次启动

启动后，Mouse2Joystick 会显示一个简单的界面：


#### 推荐配置

**建议的基本设置：**

**“鼠标设置”部分：**
```
鼠标灵敏度 X: 3.0
鼠标灵敏度 Y: 3.0
鼠标死区: 0.1
反转 Y 轴: 根据偏好
```

**“手柄设置”部分：**
```
手柄类型: Xbox 360 Controller
振动: 禁用（不必要）
```

### 按键映射

#### 控件配置

**推荐的标准映射：**

| Wii U 操作 | 键盘按键 | 功能 |
|--------------|--------------|----------|
| **左摇杆** | WASD | 移动 |
| **右摇杆** | 鼠标 | 视角 |
| **A 键** | 空格 | 主要操作 |
| **B 键** | 左 Ctrl | 次要操作 |
| **X 键** | E | 互动 |
| **Y 键** | Q | 菜单/物品栏 |
| **L/R** | Shift/Tab | 肩键 |
| **ZL/ZR** | 左/右键 | 数字扳机 |

#### 高级设置

**鼠标灵敏度：**
- **FPS 游戏**：高灵敏度 (4.0-5.0)
- **冒险游戏**：中等灵敏度 (2.5-3.5)
- **平台游戏**：低灵敏度 (1.5-2.5)

**死区：**
- **鼠标**：0.05-0.15（避免微小移动）
- **键盘**：0.0（即时响应）

## 步骤 3：Cemu 配置

### 访问控制设置

#### 在 Cemu 中导航

1. **启动** Cemu
2. **菜单**“选项”→ **“输入设置”**
3. 使用 **“-”** 按钮**移除**所有现有手柄


### 移除现有手柄

#### 配置清理

**移除步骤：**
1. **识别**所有列出的手柄
2. 为每个手柄**点击** **“-”** 按钮
3. 如果出现提示，**确认**移除
4. **验证**列表是否为空


### 添加新手柄

#### XInput 配置 (Mouse2Joystick)

**在 Mouse2Joystick 打开的情况下：**
1. **点击** **“+”** 按钮
2. **选择**“XInput”作为 API
3. **选择**应该出现的“Controller 1”
4. **确认**选择


#### 键盘配置（附加按键）

**对于未映射的按键：**
1. 再次**点击** **“+”**
2. **选择**“Keyboard”作为 API
3. **选择**“Controller 1”
4. **配置**特定的 Wii U 按键


### 最终按键配置

#### 在 Cemu 中映射

**推荐配置：**

**XInput 手柄 (Mouse2Joystick)：**
```
左摇杆: 角色移动
右摇杆: 视角控制
A 键: 主要操作
B 键: 返回/取消
X 键: 次要操作
Y 键: 菜单
L/R 肩键: 快速扳机
L/R 扳机: 模拟扳机
```

**键盘手柄（特殊按键）：**
```
Plus: Enter (主菜单)
Minus: Escape (暂停)
Home: Tab (主页菜单)
Screenshot: F12
```

## 结论

感谢 **Mouse2Joystick** 和 **ViGEmBus**，在 **Cemu** 上使用键盘和鼠标玩 **Wii U** 游戏是可行的。虽然对于所有游戏来说体验并非最佳，但此解决方案让您无需投资手柄即可探索优秀的 Wii U 游戏目录。


### 最终提示

**为了更好的体验：**
- 从适合的游戏开始（塞尔达、RPG）
- 花时间调整灵敏度
- 保存您的配置
- 最终考虑购买一个手柄

## FAQ - 常见问题

**问：此方法适用于所有 Wii U 游戏吗？**
答：不，某些游戏（如马里奥赛车、任天堂明星大乱斗等）绝对需要手柄才能获得良好的体验。

**问：我可以将此配置用于其他模拟器吗？**
答：是的，Mouse2Joystick 适用于大多数支持 XInput 的模拟器。

**问- 延迟明显吗？**
答：延迟通常很低，但可能因您的硬件配置而异。

**问：我需要一直开着 Mouse2Joystick 吗？**
答：是的，在玩游戏时必须保持 Mouse2Joystick 打开以维持手柄模拟。

**问：此方法会影响 Cemu 的性能吗？**
答：影响极小，因为 Mouse2Joystick 资源占用非常少。
