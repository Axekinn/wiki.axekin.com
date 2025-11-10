---
title: "XLink Kai와 Ryujinx 설정하기"
date: 2025-06-03
draft: false
categories: ["Ryujinx", "XLink Kai"]
tags: ["Ryujinx", "XLink Kai", "Nintendo Switch", "에뮬레이션", "멀티플레이어"]
author: "Axekin"
description: "멀티플레이어 게임을 위해 Nintendo Switch 에뮬레이터 Ryujinx와 XLink Kai를 구성하는 상세 튜토리얼"
cover: "covers/ryujinx.png"
---

## 🎮 XLink Kai + Ryujinx 소개

**XLink Kai + Ryujinx**는 플레이어가 네트워크를 통해 Nintendo Switch 게임을 에뮬레이트할 수 있게 해줍니다. 이 실험적인 통합을 통해 다른 Ryujinx 사용자나 실제 Nintendo Switch 콘솔과 멀티플레이어 게임을 즐길 수 있습니다.

> ⚠️ **중요 참고**: XLink Kai + Ryujinx 지원은 실험적이며 현재 Windows에서만 사용할 수 있습니다.

## 📋 작동하는 것

- LAN을 지원하는 Nintendo Switch 게임
- 로컬 무선을 지원하는 Nintendo Switch 게임
- 다른 Ryujinx 플레이어와 대전하는 Ryujinx
- Switch의 플레이어와 대전하는 Ryujinx (로컬 무선 게임에는 CFW 필요)
- Ryujinx와 로컬 Switch가 함께 플레이
- 위의 모든 조합을 혼합!

## ❌ 작동하지 않는 것

- macOS 지원은 아직 제공되지 않음
- Linux 지원은 아직 제공되지 않음

## 🌐 연결 유형

### LAN 게임

LAN 게임은 가장 널리 지원되며 다음 구성으로 함께 플레이할 수 있습니다.

- 수정되지 않은 "OFW" Nintendo Switch 및 Nintendo Switch Lite 시스템을 사용하는 플레이어
- 수정된 "CFW" Nintendo Switch 시스템을 사용하는 플레이어
- Ryujinx를 사용하는 플레이어

### 로컬 무선 게임

로컬 무선 게임은 좀 더 제한적이지만 다음 구성으로 함께 플레이할 수 있습니다.

- ldn_mitm 시스템 모듈이 있는 수정된 "CFW" Nintendo Switch 시스템을 사용하는 플레이어
- Ryujinx를 사용하는 플레이어

> ⚠️ **중요**: 수정되지 않은 "OFW" Nintendo Switch 및 Nintendo Switch Lite 시스템은 로컬 무선 게임에서 지원되지 않습니다.

## 🔧 네트워크 구성

### Windows

이 지침은 Windows 10 및 Windows 11에만 해당됩니다. 이전 버전의 Windows는 유사한 프로세스를 따라야 합니다.

#### NPCAP 설치

라이선스 문제로 인해 XLink Kai는 WinPCAP과 함께 제공되지만 안타깝게도 루프백 어댑터와 호환되지 않습니다. 이 문제를 해결하려면 NPCAP를 설치해야 합니다. 버전 1.31이 안정적인 것으로 알려져 있습니다.

1. [공식 웹사이트](https://npcap.com/#download)에서 NPCAP를 **다운로드**합니다.
2. 기본 옵션으로 NPCAP를 **설치**합니다(끝까지 "다음"을 클릭하기만 하면 됩니다).

#### kaiLoopbackBridge 실행

1. Windows 탐색기를 **열고** `C:\Program Files (x86)\XLink Kai\`로 이동합니다.
2. `kaiLoopbackBridge64.exe`를 **찾아** 마우스 오른쪽 버튼을 클릭하고 **관리자 권한으로 실행**합니다.
3. 경고를 **읽고** 아무 키나 눌러 계속합니다.
4. 에뮬레이터 유형으로 Nintendo Switch를 **선택**합니다.
5. 이제 루프백 어댑터가 자동으로 구성됩니다.
6. kaiLoopbackBridge를 **닫습니다**. 나중에 다시 사용할 것입니다.

## ⚙️ Ryujinx 설치 및 구성

Ryujinx 설정은 매우 간단합니다. 기본 설치는 [Ryujinx 가이드](https://wiki.axekin.com/ko/post/ryujinx/)를 확인하세요.

### 네트워크 설정

#### LAN 게임용

1. Ryujinx가 실행되면 **Options**를 클릭한 다음 **Settings**를 클릭하여 구성에 액세스합니다.
2. **System** 탭을 클릭합니다.
3. **Enable VSync** 확인란을 선택합니다.
4. **Enable Guest Internet Access** 확인란을 선택합니다.
5. **Multiplayer** 탭을 클릭합니다.
6. LAN 제목 아래에서 **Network Interface**를 **XLink Kai Loopback Switch XXXX**로 설정합니다.
7. 구성을 **저장**하고 Ryujinx를 종료합니다.

#### 로컬 무선 게임용

1. Ryujinx가 실행되면 **Options**를 클릭한 다음 **Settings**를 클릭하여 구성에 액세스합니다.
2. **System** 탭을 클릭합니다.
3. **Enable VSync** 확인란을 선택합니다.
4. **Network** 탭을 클릭합니다.
5. **Enable Guest Internet Access** 확인란을 선택 취소합니다.
6. Multiplayer 제목 아래에서 **Mode**를 **ldn_mitm**으로 설정합니다.
7. LAN 제목 아래에서 **Network Interface**를 **XLink Kai Loopback Switch XXXX**로 설정합니다.
8. 구성을 **저장**하고 Ryujinx를 종료합니다.

## 🎮 XLink Kai에서 게임 플레이하기

Ryujinx와 XLink Kai는 (아직) 서로 직접 통신할 수 없으므로 kaiLoopbackBridge가 그들 사이의 "다리" 역할을 합니다.

1. XLink Kai를 **시작**하고 로그인합니다.
2. kaiLoopbackBridge를 **시작**하고 프롬프트를 탐색하며 게임 세션 내내 열어 둡니다. 몇 초 후 XLink Kai는 Metrics 탭 아래에 Nintendo Switch를 보게 됩니다.
3. Ryujinx를 **시작**하고 게임을 실행합니다. kaiLoopbackBridge를 실행하기 전에 Ryujinx가 실행 중이어서는 안 됩니다.
4. 게임 경기장으로 **이동**하여 플레이하세요!


항상 다음 순서로 응용 프로그램을 시작해야 합니다.
1. XLink Kai
2. kaiLoopbackBridge
3. Ryujinx


연결 문제가 발생하면:
- 모든 방화벽이 XLink Kai와 Ryujinx를 허용하는지 확인하세요.
- 루프백 어댑터가 올바르게 구성되었는지 확인하세요.
- 모든 응용 프로그램을 올바른 순서로 다시 시작하세요.

---

> **알림**: 에뮬레이션은 합법적으로 소유한 게임을 에뮬레이트하는 경우 합법입니다. 항상 게임을 구매하여 개발자를 지원하세요.

**Ryujinx와 XLink Kai로 멀티플레이어 게임을 즐기세요! 🎮✨**
(이 튜토리얼은 공식 X Link Kai 튜토리얼을 전적으로 기반으로 하며, 제가 단순히 업데이트했습니다.)
