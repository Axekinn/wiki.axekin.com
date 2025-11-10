------

title: "Dolphin 安装与配置"title: "Dolphin 安装与配置"

description: "任天堂 Wii/GameCube 模拟器 Dolphin 安装、配置和使用的详细教程"description: "详细教程，介绍如何安装、配置和使用任天堂 Wii/GameCube 模拟器 Dolphin"

date: 2025-06-02date: 2025-06-02

lastmod: 2025-06-07lastmod: 2025-06-07

categories: ["Dolphin"]categories: ["Dolphin"]

tags: ["Dolphin"]tags: ["Dolphin"]

author: "Axekin"author: "Axekin"

draft: falsedraft: false

toc: truetoc: true

math: falsemath: false

featured: falsefeatured: false

weight: 15weight: 15

aliases:aliases: 

  - /zh-CN/dolphin-installation-guide/  - /zh-CN/dolphin-installation-guide/

  - /zh-CN/guides/dolphin-setup/  - /zh-CN/guides/dolphin-setup/

summary: "学习如何安装和配置 Dolphin 模拟器，以获得最佳的任天堂 GameCube 和 Wii 游戏体验。完整的设置指南，包含性能优化。"summary: "学习如何安装和配置 Dolphin 模拟器，以获得最佳的任天堂 GameCube 和 Wii 游戏体验。包含性能优化的完整设置指南。"

cover: "covers/dolphin-emulator-guide.webp"cover: "covers/dolphin-emulator-guide.webp"

image: "covers/dolphin-emulator-guide.webp"image: "covers/dolphin-emulator-guide.webp"

showtoc: trueshowtoc: true

tocopen: truetocopen: true

comments: truecomments: true

searchHidden: falsesearchHidden: false

------



## 🎮 Dolphin 简介## 🎮 Dolphin 简介



**Dolphin** 是世界上最先进的任天堂 GameCube 和 Wii 模拟器。自 2003 年开发以来，它提供了近乎完美的兼容性、惊人的图形增强功能以及在线游戏和虚拟现实等独特功能。**Dolphin** 是世界上最先进的任天堂 GameCube 和 Wii 模拟器。自 2003 年开发以来，它提供了近乎完美的兼容性、惊人的图形增强功能以及在线游戏和虚拟现实等独特功能。



## 🔧 第 1 步：下载 Dolphin## 🔧 第 1 步：下载 Dolphin



### 选项 1：稳定版（推荐）### 选项 1：稳定版（推荐）

```bash```bash

# 官方网站# 官方网站

https://dolphin-emu.org/download/https://dolphin-emu.org/download/

``````



1.  **点击** “Download Dolphin 5.0”1. **点击** “下载 Dolphin 5.0”

2.  **下载** `dolphin-x64-X.0.zip`2. **下载** `dolphin-x64-X.0.zip`

3.  **解压** 到一个专用文件夹（例如 `Documents\Dolphin` 或另一个驱动器的根目录，而不是 C 盘）3. **解压** 到一个专用文件夹（例如 `Documents\Dolphin` 或另一个驱动器的根目录，而不是 C 盘）



### 选项 2：Dolphin Android### 选项 2：Dolphin 安卓版

```bash```bash

# 优化的移动版本# 优化的移动版本

https://play.google.com/store/apps/details?id=org.dolphinemu.dolphinemuhttps://play.google.com/store/apps/details?id=org.dolphinemu.dolphinemu

``````



## 游戏下载## 游戏下载



### 第 1 步：访问游戏库### 第 1 步：访问游戏库



前往 **[🎮 Axekin Games - Nintendo Wii](https://www.axekin.com/games?platform=wii)** 访问任天堂 Wii 游戏合集。前往 **[🎮 Axekin Games - Nintendo Wii](https://www.axekin.com/games?platform=wii)** 访问任天堂 Wii 游戏合集。



### 第 2 步：下载游戏### 第 2 步：下载游戏



1.  在列表中 **搜索** 所需游戏1. 在列表中 **搜索** 所需游戏

2.  **点击** 下载按钮2. **点击** 下载按钮

3.  **等待** 下载完成3. **等待** 下载完成



### 第 3 步：文件提取### 第 3 步：文件提取



下载完成后，使用以下软件之一 **提取** 压缩包：下载完成后，使用以下软件之一 **提取** 存档：



| 软件 | 下载链接 | 兼容性 || 软件 | 下载链接 | 兼容性 |

|----------|---------------|---------------||----------|---------------|---------------|

| **7-Zip** | [下载 7-Zip](https://www.7-zip.org/) | Windows/Linux || **7-Zip** | [下载 7-Zip](https://www.7-zip.org/) | Windows/Linux |

| **WinRAR** | [下载 WinRAR](https://www.win-rar.com/) | Windows || **WinRAR** | [下载 WinRAR](https://www.win-rar.com/) | Windows |



> **💡 提示**：7-Zip 是免费和开源的，而 WinRAR 在试用期后需要许可证。> **💡 提示**：7-Zip 是免费和开源的，而 WinRAR 在试用期后需要许可证。



**结果**：您将获得准备好与 Dolphin 一起使用的游戏文件！ 🎯**结果**：您将获得可与 Dolphin 一起使用的游戏文件！ 🎯



## 📁 第 2 步：文件夹结构## 📁 第 2 步：文件夹结构



创建此文件夹结构以组织您的文件：创建此文件夹结构来组织您的文件：



为了优化您的游戏库，建议使用以下树形结构：为了优化您的库组织，建议使用以下树形结构：



````````

Wii Games/Wii Games/

├── Alice in Wonderland/├── Alice in Wonderland/

│   ├── BASE/                # 🎮 基础游戏 (主文件)│   ├── BASE/                # 🎮 基础游戏（主文件）

│   ├── UPDATE/              # 🔄 游戏更新 (推荐)│   ├── UPDATE/              # 🔄 游戏更新（推荐）

│   └── DLC/                 # 📦 可下载内容 (可选)│   └── DLC/                 # 📦 可下载内容（可选）

├── Alvin and the Chipmunks: Chipwrecked/├── Alvin and the Chipmunks: Chipwrecked/

│   ├── BASE/                # 🎮 基础游戏│   ├── BASE/                # 🎮 基础游戏

│   ├── UPDATE/              # 🔄 游戏更新│   ├── UPDATE/              # 🔄 游戏更新

│   └── DLC/                 # 📦 附加 DLC│   └── DLC/                 # 📦 附加 DLC

├── Animal Crossing: City Folk/├── Animal Crossing: City Folk/

│   ├── BASE/│   ├── BASE/

│   ├── UPDATE/│   ├── UPDATE/

│   └── DLC/│   └── DLC/

````````



### 内容类型### 内容类型





- **BASE** 📁: 您下载的主游戏- **BASE** 📁：您下载的主游戏

- **UPDATE** 📁: 更新和补丁 (推荐)- **UPDATE** 📁：更新和补丁（推荐）

- **DLC** 📁: 额外的付费内容 (可选但推荐)- **DLC** 📁：额外的付费内容（可选但推荐）





✅ **自动检测**：游戏会自动添加到模拟器  ✅ **自动检测**：游戏会自动添加到模拟器中  

✅ **简化管理**：无需手动选择每个 ROM  ✅ **简化管理**：无需手动选择每个 ROM  

✅ **清晰的组织**：轻松查看每个游戏拥有的内容  ✅ **清晰的组织**：轻松查看每个游戏拥有的内容  

✅ **易于维护**：简化内容的添加/删除✅ **易于维护**：简化内容的添加/删除



> **📝 重要提示**：如果游戏没有更新或 DLC，则无需创建相应的文件夹。仅为您实际拥有的内容创建文件夹。> **📝 重要提示**：如果游戏没有更新或 DLC，则无需创建相应的文件夹。仅为您实际拥有的内容创建文件夹。



### 结果### 结果



一旦此结构就位，您的模拟器将自动检测“Wii Games”文件夹中的所有游戏，并在您的库中正确组织它们！ 🎯一旦此结构就位，您的模拟器将自动检测“Wii Games”文件夹中存在的所有游戏，并在您的库中正确组织它们！ 🎯



## 💡 便携式配置（推荐）## 💡 便携式配置（推荐）





**在首次启动之前**，在 Dolphin 目录的根目录下创建一个名为 `portable.txt` 的文件。此操作将使安装完全便携。**在首次启动之前**，在 Dolphin 目录的根目录下创建一个名为 `portable.txt` 的文件。此操作将使安装完全便携。



### 便携模式的优点### 便携模式的优势



| 方面 | 普通模式 | 便携模式 || 方面 | 普通模式 | 便携模式 |

|--------|-------------|---------------||--------|-------------|---------------|

| **配置** | 存储在系统中 | 存储在文件夹中 || **配置** | 存储在系统中 | 存储在文件夹中 |

| **存档** | 分散在计算机上 | 集中在文件夹中 || **存档** | 分散在计算机上 | 集中在文件夹中 |

| **便携性** | ❌ 绑定到系统 | ✅ 易于移动 || **便携性** | ❌ 绑定到系统 | ✅ 轻松移动 |

| **备份** | 难以定位 | 易于备份 || **备份** | 难以定位 | 易于备份 |



### 创建便携文件后的结构### 创建便携文件后的结构



``````

📁 Dolphin/📁 Dolphin/

├── 🎮 Dolphin.exe├── 🎮 Dolphin.exe

├── 📄 portable.txt          # ← 创建此文件！├── 📄 portable.txt          # ← 创建此文件！

│   ├── 📁 bis/│   ├── 📁 bis/

│   ├── 📁 games/│   ├── 📁 games/

│   ├── 📁 profiles/│   ├── 📁 profiles/

│   └── 📁 system/│   └── 📁 system/

└── 📄 其他文件...└── 📄 其他文件...

``````





**您的所有数据**（配置、存档、个人资料）都将存储在 `portable.txt` 文件中，极大地简化了管理和备份！**您的所有数据**（配置、存档、个人资料）都将存储在 `portable.txt` 文件中，极大地简化了管理和备份！



### 创建说明### 创建说明



1.  **导航** 到 Dolphin 安装文件夹1. **导航** 到 Dolphin 安装文件夹

2.  **创建** 一个名为 `portable.txt` 的新文件2. **创建** 一个名为 `portable.txt` 的新文件

3.  **启动** Dolphin - 它将自动检测便携模式3. **启动** Dolphin - 它将自动检测便携模式



> **📝 注意**：此操作必须在 **首次启动之前** 执行才能生效！> **📝 注意**：此操作必须在**首次启动之前**执行才能生效！



## ⚙️ 第 3 步：安装和首次启动## ⚙️ 第 3 步：安装和首次启动



### 首次启动### 首次启动

1.  **执行** `Dolphin.exe`1. **执行** `Dolphin.exe`

2.  **接受（或不接受）** 数据发送2. **接受（或不接受）** 数据发送

3.  **配置** 游戏文件夹：`选项 → 配置 → 路径`3. **配置** 游戏文件夹：`选项 → 配置 → 路径`

4.  **添加** 您之前看到的 ROM 文件夹4. **添加** 您之前看到的 ROM 文件夹



## 🎯 第 4 步：基本系统配置## 🎯 第 4 步：基本系统配置



### 常规设置### 常规设置

```````

配置 → 常规
```

#### 常规选项卡
- **启用双核**：✅ 启用（极大地提高性能）
- **启用作弊**：✅ 启用（如果您想使用代码）

#### 界面选项卡
- **语言**：选择所需语言
- **主题**：选择所需主题
- **样式**：选择所需样式
- **下载游戏封面等**：✅ 启用（用于图标）

其余部分保留默认设置。

### 控制器配置

> 为此，有几种配置在某些具有陀螺仪的游戏中效果更好，我将把这部分留给 YouTube 主播，他们通常会在 YouTube 简介中留下配置文件。我放了马里奥银河，但您可以放上您的游戏，您会找到适合您游戏的正确配置（如果存在）：[您的控制器教程](https://www.youtube.com/results?search_query=gyro+controller+configuration+dolphin+mario+galaxy)

## ⚙️ 第 5 步：最佳图形配置

### 基本图形设置
```
图形 → 常规
```

#### 图形后端
- **后端**：Vulkan（推荐）或 Direct3D 11/12
- **设备**：您的主 GPU
- **宽高比**：自动或强制 16:9
- **V-Sync**：启用，全屏也一样

#### 视觉增强

**基本增强：**
- **内部分辨率**：您想要的，值越高 = 性能消耗越多
- **抗锯齿**：同上
- **各向异性过滤**：同上

其他一切，保留默认设置

### 高级设置
```
图形 → 高级
```

**最佳配置：**
- **显示 FPS**：✅ 启用（性能监控）
- **启用逐行扫描**：✅ 启用
- **后端多线程**：✅ 启用
- **首选独占全屏**：✅ 启用（减少延迟）

## 🌐 高级功能

### Netplay（在线游戏）

#### Netplay 配置
```bash
# 主持会话
1. 工具 → 启动 NetPlay
2. 主持选项卡 → 配置设置：
   - 游戏：选择您的游戏
   - 玩家：玩家数量
   - 缓冲区：4-8（取决于 ping）
3. 启动 → 分享会话代码

# 加入会话
1. 工具 → 启动 NetPlay  
2. 连接选项卡 → 输入代码
3. 连接并等待同步
```

#### 最佳 netplay 设置
```bash
# 为了稳定的体验
常规：
- 双核：❌ 禁用
- 空闲跳过：❌ 禁用
- 音频：DSP HLE（更稳定）

图形：
- 后端：Direct3D 11（比 Vulkan 更稳定）
- 分辨率：1x 原生（减少网络负载）
- 增强：最小
```

## ❓ FAQ - 常见问题

### 一般问题

**问：Dolphin 能玩所有 GameCube/Wii 游戏吗？**
**答：** 大约 95% 的游戏可以完美运行或有轻微错误。请查看兼容性列表。

**问：我可以使用真正的 GameCube 控制器吗？**
**答：** 可以，使用官方任天堂 GameCube-USB 适配器或兼容的 Mayflash。

**问：真实主机的存档可以使用吗？**
**答：** 可以，您可以使用 GCMM 等自制软件导入/导出您的存档。

### 技术问题

**问：Vulkan 还是 Direct3D？**
**答：** Vulkan 通常在较新的 GPU 上提供更好的性能。D3D11 在较旧的系统上更稳定。

**问：我应该启用双核吗？**
**答：** 是的，为了更好的性能，除了 netplay，应该禁用。

**问：选择什么内部分辨率？**
**答：** 2x 原生（856x528）是一个很好的折衷方案。4x+ 适用于强大的 GPU。

### 常见问题

**问：尽管 PC 配置强大，游戏仍然卡顿？**
**答：** 有些游戏要求更高。启用双核，降低分辨率，更换后端。

**问：音频有爆裂声？**
**答：** 更改音频后端，增加延迟，关闭其他音频应用程序。

**问：Wiimote 无法连接？**
**答：** 检查蓝牙适配器，使用“连续扫描”，通过 Dolphin 配对。

**以高清方式重温您的 GameCube/Wii 经典！ 🎮✨**
