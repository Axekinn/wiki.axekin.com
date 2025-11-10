---
title: "Lossless Scaling 模拟器配置"
description: "为 Nintendo Switch、PS2、PS3 等模拟器配置 Lossless Scaling 并提升 FPS 性能的完整指南 - 优化的帧生成和升频"
date: 2025-10-07
lastmod: 2025-10-07
categories: ["优化"]
tags: ["lossless-scaling", "帧生成", "升频", "模拟", "fps-boost", "yuzu", "ryujinx", "rpcs3", "pcsx2", "性能"]
series: ["优化指南"]
author: "Axekin"
draft: false
toc: true
math: false
featured: true
weight: 5
aliases: 
  - /zh-CN/lossless-scaling-guide/
  - /zh-CN/guides/lossless-scaling-emulators/
summary: "使用 Lossless Scaling 最大化您在模拟器上的 FPS。为 Switch、PS2、PS3 提供详细的帧生成和升频配置指南。"
cover: "covers/LS.png"
image: "covers/LS.png"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

## 🚀 Lossless Scaling 简介

**Lossless Scaling** 是一款强大的**帧生成**和**升频**工具，可以显著提升游戏和模拟器的性能和视觉质量。与 GPU 集成的解决方案（DLSS、FSR）不同，Lossless Scaling 在系统级别工作，并与**所有 GPU** 兼容。

### 主要优势

> **✨ 为什么要使用 Lossless Scaling？**
> 
> - **FPS 提升：** 生成中间帧，使您的帧率翻倍/三倍
> - **视觉增强：** 高质量升频以获得更高分辨率
> - **通用兼容性：** 适用于 NVIDIA、AMD 和 Intel
> - **模拟器优化：** 对 Switch、PS2、PS3 尤其有效
> - **低延迟：** 优化技术以最小化输入延迟

### 理想使用场景

**Lossless Scaling 的优势所在：**
- 以原生 30 FPS 运行的模拟游戏（宝可梦、塞尔达等）
- 资源密集型模拟器（RPCS3、Yuzu）
- 需要性能提升的中低端 PC
- 将 1080p 升频至 1440p/4K
- 整体更流畅的游戏体验

### 下载 Lossless Scaling

#### 购买地点

**🛒 [Steam 上的 Lossless Scaling](https://store.steampowered.com/app/993090/Lossless_Scaling/)**

请考虑购买该工具——就其功能而言，价格非常实惠。如果您无法购买，可以从[这里](https://cs.rin.ru/forum/viewtopic.php?f=41&t=94507)下载。

### 首次启动和初始设置

#### 主界面

首次启动时，Lossless Scaling 会显示一个简约的界面，包含几个部分：

**界面部分：**
- **缩放模式：** 升频模式
- **缩放类型：** 升频算法
- **帧生成：** 帧生成设置
- **捕获方法：** 屏幕捕获方法
- **热键：** 键盘快捷键

## ⚙️ 模拟器详细配置

## ⚙️ 优化的 Lossless Scaling 设置 (2025)

### 按优先级推荐的配置文件

以下是根据您的目标（质量或性能）优先考虑的配置，基于最新的视觉测试和比较：

#### 1. 最高质量 (图像: 最佳 / 性能: 慢)

```
类型: LSG 3.1
流比例: 90
乘数: 4
性能: OFF
```
如果您想要最佳的图像质量并且您的 GPU 能够处理，请使用此配置文件。

#### 2. 平衡质量/性能 (图像: 平衡)

```
类型: LSG 3.1
流比例: 65
乘数: 4
性能: OFF
```
此配置文件在流畅度和清晰度之间提供了极好的折衷，推荐给大多数用户。

#### 3. 最高性能 (图像: 差 / 性能: 最快)

```
类型: LSG 3.1
流比例: 65
乘数: 4
性能: ON
```
如果您想最大化 FPS，尤其是在中低端设备上或对于要求非常高的游戏，请优先选择此项。

> **提示：** 旧版本 (LSG 1.0) 现已过时，应避免使用。

### 集成技巧

- 根据您的硬件和优先级（质量或性能）调整配置文件。
- 对于大多数用户，推荐使用“平衡”配置文件。
- 不要犹豫，测试不同的设置以找到最适合您设备的折衷方案。
- 避免同时使用模拟器的内部缩放和 Lossless Scaling，以防止双重升频。

---

## 🔧 故障排除

### 常见问题与解决方案

#### 延迟过高 (输入延迟)

**症状：** 您的操作与屏幕响应之间有明显延迟。

**解决方案（按顺序）：**

```
1. 降低帧生成乘数
   x4 → x3 → x2 → OFF
   
2. 切换帧生成模式
   LS1 → LSFG
   
3. 在模拟器中禁用 VSync
   
4. 降低缩放因子
   2x → 1.5x → 1.2x
   
5. 更改捕获方法
   自动 → DXGI 桌面复制 → Windows 图形捕获
   
6. 提高进程优先级
   正常 → 高 → 实时 (仅测试)
```

**“低延迟”配置：**
```yaml
缩放类型: AMD FSR
缩放因子: 1.2x
帧生成: 仅 LSFG x2
捕获方法: DXGI 桌面复制
优先级: 高
模拟器 VSync: OFF
```

#### 视觉伪影和重影

**症状：** 拖影、重影、纹理模糊。

**解决方案：**

**对于重影（拖影）：**
```
1. 降低帧生成乘数
2. 从 LS1 切换到 LSFG
3. 增加锐度 (0.8 → 1.0)
4. 确保游戏以稳定的原生 FPS 运行
5. 在模拟器中禁用运动模糊
```

**对于图形伪影：**
```
1. 更改缩放类型 (FSR → NIS 或反之)
2. 降低锐度 (0.9 → 0.6)
3. 更改捕获方法
4. 更新 GPU 驱动程序
5. 禁用覆盖层 (Discord, Steam 等)
```

**“质量优先”配置：**
```yaml
缩放类型: NIS
缩放因子: 最大 1.5x
帧生成: LSFG x2
锐度: 0.7
捕获方法: DXGI 桌面复制
```

## ❓ FAQ - 常见问题

### 一般问题

**问：Lossless Scaling 是否适用于所有模拟器？**  
答：是的，Lossless Scaling 在系统级别工作，与所有 Windows 模拟器兼容。结果可能因模拟器和游戏而异。

**问：使用 Lossless Scaling 是否合法？**  
答：完全合法，这是在 Steam 上销售的官方软件，可增强任何 Windows 应用程序的显示效果。

**问：我可以将其与模拟器中的原生 DLSS/FSR 一起使用吗？**  
答：可以，但通常不推荐（双重升频）。为获得最佳效果，请选择其中之一。

### 技术问题

**问：LSFG 和 LS1 有什么区别？**  
答：LSFG (Lossless Scaling Frame Generation) 是最新技术，效率更高，延迟更低。LS1 是旧一代技术，仅在 LSFG 不稳定时使用。

**问：我的 AMD/Intel GPU 可以使用 Lossless Scaling 吗？**  
答：可以！与 DLSS（仅限 NVIDIA）不同，Lossless Scaling 适用于所有 GPU（NVIDIA、AMD、Intel）。

**问：需要多少 VRAM？**  
答：通常最低 4GB，推荐 6-8GB。升频和帧生成会使用额外的 VRAM。

**问- 延迟真的明显吗？**  
答：使用 LSFG x2 时，增加的延迟极小（5-10ms）。对于竞技游戏来说很明显，但对于单人/模拟游戏来说可以忽略不计。

**问：我可以在原生 PC 游戏中使用 Lossless Scaling 吗？**  
答：可以，Lossless Scaling 适用于任何 Windows 游戏或应用程序。

## 🎯 结论

**Lossless Scaling** 是一款功能强大的工具，可以改变您的模拟体验，尤其是在 **Yuzu**、**RPCS3** 或 **PCSX2** 等要求苛刻的模拟器上。通过适当的配置，您可以：

### 主要好处

> **✅ Lossless Scaling 的优势：**
> 
> - 在原生 30fps 游戏上**使您的 FPS 翻倍**
> - 通过智能升频**提高视觉质量**
> - 使用 LSFG 技术实现**最小延迟**
> - **与所有 GPU 兼容** (NVIDIA, AMD, Intel)
> - 正确配置后**易于使用**

**支持：** 如有任何问题或疑问，请查看 [Lossless Scaling Discord](https://discord.gg/losslessscaling) 或专门的模拟论坛。
