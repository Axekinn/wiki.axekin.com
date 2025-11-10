---
title: "Eden 安装与配置"
description: "详细教程，教您如何安装、配置和优化任天堂 Switch 模拟器 Eden - 包含密钥、固件和设置的完整指南"
date: 2025-06-02
lastmod: 2025-06-07
categories: ["Yuzu"]
tags: ["eden", "yuzu", "nintendo-switch", "emulation", "installation", "configuration", "gaming", "firmware"]
series: ["模拟器指南"]
author: "Axekin"
draft: false
toc: true
math: false
featured: true
weight: 10
aliases: 
  - /zh-CN/eden-yuzu-guide/
  - /zh-CN/guides/eden-installation/
summary: "学习如何安装和配置 Eden (Yuzu 分支) 以获得最佳的任天堂 Switch 模拟体验。包含固件、密钥和优化的完整指南。"
cover: "covers/yuzu.png"
image: "covers/yuzu.png"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

## 🎮 Yuzu 简介

**Eden** 是由 Citra 团队开发的开源任天堂 Switch 模拟器。Eden 以其高性能和不断增长的兼容性而闻名，是世界上最受欢迎的 Switch 模拟器之一。

> ⚠️ **法律声明**: 此模拟器仅用于玩您合法拥有的游戏。出于备份和研究目的的模拟是合法的，但盗版不是。

## 🔧 第 1 步：下载 Eden

```bash
# 官方网站
https://eden-emu.dev/download
```

## 下载您的游戏

### 第 1 步：访问游戏库

前往 **[🎮 Axekin Games - Nintendo Switch](https://www.axekin.com/games?platform=switch)** 访问任天堂 Switch 游戏合集。

### 第 2 步：下载游戏

1. 在列表中 **搜索** 所需游戏
2. **点击** 下载按钮
3. **等待** 下载完成

### 第 3 步：解压文件

下载完成后，使用以下任一程序 **解压** 压缩包：

| 软件     | 下载链接                                   | 兼容性         |
|------------|-------------------------------------------|------------------|
| **7-Zip**  | [下载 7-Zip](https://www.7-zip.org/)      | Windows/Linux    |
| **WinRAR** | [下载 WinRAR](https://www.win-rar.com/)   | Windows          |

> **💡 提示**: 7-Zip 是免费和开源的，而 WinRAR 在试用期后需要许可证。

**结果**: 您将获得可与 Eden 一起使用的游戏文件！ 🎯

## ⚙️ 第 2 步：安装与配置

### 首次启动
1. 以管理员身份 **运行** `eden.exe`
2. **接受** 初始设置
3. **配置** 基础文件夹

## 🎯 第 3 步：安装密钥和固件

### 安装加密密钥

#### 自动方法
- [密钥版本 18.X.X](https://files-prodkeys.b-cdn.net/prodkeys/ProdKeys.net-v18.-1-0.zip)
- [密钥版本 19.X.X](https://files.prodkeys.net/ProdKeys.net-v19.0.1.zip)
- [密钥版本 20.X.X](https://files.prodkeys.net/ProdKeys.net-v20.0.1.zip)

#### 在 Eden 中安装
1. **打开** Eden
2. `文件 → 打开 Eden 文件夹`
3. **导航** 到 `keys/` 文件夹
4. **复制** `prod.keys` 和 `title.keys` 到其中
5. **重启** Eden

### 安装任天堂 Switch 固件

- [固件 19.0.1](https://github.com/THZoria/NX_Firmware/releases/download/19.0.1/Firmware.19.0.1.zip)
- [固件 20.1.5](https://github.com/THZoria/NX_Firmware/releases/download/19.0.1/Firmware.20.1.5.zip)
- [固件 20.2.0](https://github.com/THZoria/NX_Firmware/releases/download/19.0.1/Firmware.20.2.0.zip)
- [固件 20.3.0](https://github.com/THZoria/NX_Firmware/releases/download/19.0.1/Firmware.20.3.0.zip)
- [固件 20.4.0](https://github.com/THZoria/NX_Firmware/releases/download/19.0.1/Firmware.20.4.0.zip)
- [固件 20.5.0](https://github.com/THZoria/NX_Firmware/releases/download/20.5.0/Firmware.20.5.0.zip)


#### 在 Eden 中安装
1. `工具 → 安装固件`
2. **选择** 固件 .zip 文件
3. **等待** 安装完成
4. **检查**: `工具 → 固件版本`

## ⚙️ 第 4 步：优化配置

### 常规设置
```
模拟 → 配置 → 常规
```
- **限制速度百分比**: 100% (正常速度)
- **多核 CPU 模拟**: ✅ 启用
- **扩展内存布局**: ✅ 启用 (如果内存 ≥ 12GB)

### 系统配置
```
模拟 → 配置 → 系统
```
- **地区**: Europe (如果您在欧洲，否则请设置您的地区)
- **语言**: French (如果您在法国，否则请设置您的语言)
- **RTC 源**: 系统时钟
- **时区**: Europe/Paris
- **声音输出模式**: 立体声

### 最佳图形设置

#### API 选项卡
```
图形 → API
- API: Vulkan (推荐) 或 OpenGL
- 设备: 您的主 GPU
- 着色器后端: GLSL (Vulkan) / GLASM (OpenGL)
```

#### 图形 选项卡
```
图形 → 图形
- 使用磁盘管线缓存: ✅ 启用
- 使用异步 GPU 模拟: ✅ 启用
- 使用异步着色器构建: ✅ 启用
- 加速 ASTC 纹理解码: ✅ 启用
- VSync 模式: FIFO (推荐)
```

#### 高级图形 选项卡
```
图形 → 高级
- 精度级别: Normal (更高精度为 High)
- 使用快速 GPU 时间: ✅ 启用
- 使用 Vulkan 管线缓存: ✅ 启用 (如果使用 Vulkan)
- 各向异性过滤: 16x
- 分辨率缩放器: 1x (如果您的 GPU 性能强大，可设置更高)
- 抗锯齿: None 或 FXAA
```

### 音频配置
```
音频
- 输出引擎: auto
- 输出设备: Default
- 音量: 100%
```

### 控制器配置

#### Xbox/PlayStation/Switch/任何兼容的控制器
```
控制 → 配置
1. 玩家 1 → 连接的控制器: Pro Controller
2. 配置 → 自动映射
3. 测试所有按钮
```

#### 键盘 (临时)
```
控制 → 配置
1. 玩家 1 → 连接的控制器: Handheld
2. 配置 → 手动映射
3. 将按键分配给按钮
```

## 🎮 第 5 步：添加和优化游戏

### 支持的格式
- **.NSP**: Nintendo Submission Package (eShop 游戏)
- **.XCI**: NX Card Image (实体卡带)

## 在模拟器中配置游戏

### 添加游戏文件夹

在模拟器菜单中，**双击** 然后选择包含所有游戏的文件夹。

### 推荐的文件夹结构

为了优化您的游戏库，建议使用以下结构：

````
Switch Games/
├── Mario Kart 8 Deluxe/
│   ├── BASE/                # 🎮 主游戏 (主文件)
│   ├── UPDATE/              # 🔄 游戏更新 (推荐)
│   └── DLC/                 # 📦 可下载内容 (可选)
├── New Super Mario Bros U Deluxe/
│   ├── BASE/                # 🎮 主游戏
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


- **BASE** 📁: 您下载的主游戏
- **UPDATE** 📁: 更新和补丁 (推荐)
- **DLC** 📁: 额外的付费内容 (可选但推荐)


✅ **自动检测**: 游戏会自动添加到模拟器  
✅ **简化管理**: 无需手动选择每个 ROM  
✅ **清晰的组织**: 轻松查看每个游戏拥有的内容  
✅ **易于维护**: 添加/删除内容很简单

> **📝 重要提示**: 如果游戏没有更新或 DLC，则无需创建相应的文件夹。仅为您拥有的内容创建文件夹。

### 结果

一旦此结构就位，您的模拟器将自动检测“Switch Games”文件夹中的所有游戏，并在您的库中整齐地组织它们！ 🎯

### 安装更新
```bash
# 在 Yuzu 中
文件 → 安装文件到 NAND
→ 选择 .nsp 更新文件
```

### 安装 DLC
```bash
# 在 Yuzu 中
文件 → 安装文件到 NAND
→ 选择 .nsp DLC 文件
```

## 🔧 故障排除

### 常见问题及解决方案

#### 游戏无法启动
```bash
按优先级顺序排列的解决方案：
1. 检查固件安装
2. 检查密钥 (prod.keys/title.keys)
3. 使用默认设置测试
4. 重新安装 Visual C++ Redistributables
5. 将 Eden 更新到最新版本
```

#### 性能低下
```bash
即时优化：
1. 将分辨率缩放器降至 1x
2. 启用多核 CPU 模拟
3. 使用 Vulkan 而不是 OpenGL
4. 关闭后台应用程序
5. 检查 CPU/GPU 温度

最后说明：安装一个增加 FPS 的 mod 并不会增加您的 FPS。如果一个游戏设计为以 30fps 运行，但在您的 PC 上它以 15-20fps 运行（你好，《宝可梦 朱/紫》），添加一个 mod 将毫无作用。买一台更好的 PC，对于那些说我撒谎的人，我预先嘲笑他们胡说八道的能力。
```

#### 频繁崩溃
```bash
诊断：
1. 检查游戏完整性 (SHA256)
2. 不使用 mod 进行测试
3. 降低精度级别
4. 禁用超频
5. 使用旧版本的 Yuzu 进行测试
```

#### 音频不同步
```bash
解决方案：
1. 更改输出引擎 (auto → WASAPI)
2. 调整音频缓冲区
3. 检查音频驱动程序
4. 禁用 Windows 音频效果
```

#### 图形损坏
```bash
修复：
1. 删除着色器缓存
2. 更改图形 API (Vulkan ↔ OpenGL)
3. 更新 GPU 驱动程序
4. 降低精度级别
5. 临时禁用 ASTC 解码
```

## ❓ FAQ - 常见问题

### 一般问题

**问：Eden 合法吗？**  
**答：** 是的，模拟是合法的。但是，您必须合法拥有您使用的所有游戏、密钥和固件。

**问：我可以用 Eden 在线玩游戏吗？**  
**答：** 是的

### 技术问题

**问：Vulkan 还是 OpenGL？**  
**答：** Vulkan 通常在较新的 GPU 上性能更佳。OpenGL 在某些系统上可能更稳定。

**问：最低需要多少 RAM？**  
**答：** 最低 8GB，推荐 16GB，对于带有 mod 的最重型游戏则需要 32GB。

**问：我的 GPU 兼容吗？**  
**答：** Vulkan：最低 GTX 1060/RX 580。OpenGL：任何支持 OpenGL 4.6 的 GPU。

## 🎯 结论

通过这个完整的指南，您现在掌握了所有关键信息：
- **安装** 和优化配置 Yuzu
- 根据您的硬件 **优化** 性能
- **解决** 常见问题
- 以卓越的质量 **享受** 您的任天堂 Switch 游戏

---

> **提醒**: 始终尊重版权并通过购买游戏来支持开发者。

**祝您在 Eden 中游戏愉快！ 🎮✨**
