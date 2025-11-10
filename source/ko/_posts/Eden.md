---
title: "Eden 설치 및 구성"
description: "Nintendo Switch 에뮬레이터 Eden 설치, 구성 및 최적화에 대한 자세한 튜토리얼 - 키, 펌웨어 및 설정을 포함한 전체 설정"
date: 2025-06-02
lastmod: 2025-06-07
categories: ["Yuzu"]
tags: ["eden", "yuzu", "nintendo-switch", "emulation", "installation", "configuration", "gaming", "firmware"]
series: ["에뮬레이션 가이드"]
author: "Axekin"
draft: false
toc: true
math: false
featured: true
weight: 10
aliases: 
  - /ko/eden-yuzu-guide/
  - /ko/guides/eden-installation/
summary: "최적의 Nintendo Switch 에뮬레이션을 위해 Eden(Yuzu 포크)을 설치하고 구성하는 방법을 알아보세요. 펌웨어, 키 및 최적화가 포함된 전체 가이드입니다."
cover: "covers/yuzu.png"
image: "covers/yuzu.png"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

## 🎮 Yuzu 소개

**Eden**은 Citra 팀이 개발한 오픈 소스 Nintendo Switch 에뮬레이터입니다. 높은 성능과 증가하는 호환성으로 유명한 Eden은 세계에서 가장 인기 있는 Switch 에뮬레이터 중 하나입니다.

> ⚠️ **법적 참고**: 이 에뮬레이터는 합법적으로 소유한 게임을 플레이하기 위한 것입니다. 백업 및 연구 목적의 에뮬레이션은 합법이지만 불법 복제는 그렇지 않습니다.

## 🔧 1단계: Eden 다운로드

```bash
# 공식 웹사이트
https://eden-emu.dev/download
```

## 게임 다운로드

### 1단계: 게임 라이브러리 접속

**[🎮 Axekin Games - Nintendo Switch](https://www.axekin.com/games?platform=switch)**로 이동하여 Nintendo Switch 게임 컬렉션에 액세스하세요.

### 2단계: 게임 다운로드

1. 목록에서 원하는 게임을 **검색**하세요.
2. 다운로드 버튼을 **클릭**하세요.
3. 다운로드가 끝날 때까지 **기다리세요**.

### 3단계: 파일 압축 풀기

다운로드가 완료되면 다음 프로그램 중 하나를 사용하여 아카이브의 **압축을 푸세요**:

| 소프트웨어   | 다운로드 링크                             | 호환성    |
|------------|-------------------------------------------|------------------|
| **7-Zip**  | [7-Zip 다운로드](https://www.7-zip.org/) | Windows/Linux    |
| **WinRAR** | [WinRAR 다운로드](https://www.win-rar.com/)| Windows         |

> **💡 팁**: 7-Zip은 무료 오픈 소스이며, WinRAR은 평가판 기간 이후 라이선스가 필요합니다.

**결과**: Eden에서 사용할 준비가 된 게임 파일을 얻게 됩니다! 🎯

## ⚙️ 2단계: 설치 및 구성

### 첫 실행
1. `eden.exe`를 관리자 권한으로 **실행**하세요.
2. 초기 설정을 **수락**하세요.
3. 기본 폴더를 **구성**하세요.

## 🎯 3단계: 키 및 펌웨어 설치

### 암호화 키 설치

#### 자동 방법
- [키 버전 18.X.X](https://files-prodkeys.b-cdn.net/prodkeys/ProdKeys.net-v18.-1-0.zip)
- [키 버전 19.X.X](https://files.prodkeys.net/ProdKeys.net-v19.0.1.zip)
- [키 버전 20.X.X](https://files.prodkeys.net/ProdKeys.net-v20.0.1.zip)

#### Eden에 설치
1. Eden을 **엽니다**.
2. `파일 → Eden 폴더 열기`
3. `keys/` 폴더로 **이동**합니다.
4. `prod.keys`와 `title.keys`를 안에 **복사**합니다.
5. Eden을 **다시 시작**합니다.

### Nintendo Switch 펌웨어 설치

- [펌웨어 19.0.1](https://github.com/THZoria/NX_Firmware/releases/download/19.0.1/Firmware.19.0.1.zip)
- [펌웨어 20.1.5](https://github.com/THZoria/NX_Firmware/releases/download/19.0.1/Firmware.20.1.5.zip)
- [펌웨어 20.2.0](https://github.com/THZoria/NX_Firmware/releases/download/19.0.1/Firmware.20.2.0.zip)
- [펌웨어 20.3.0](https://github.com/THZoria/NX_Firmware/releases/download/19.0.1/Firmware.20.3.0.zip)
- [펌웨어 20.4.0](https://github.com/THZoria/NX_Firmware/releases/download/19.0.1/Firmware.20.4.0.zip)
- [펌웨어 20.5.0](https://github.com/THZoria/NX_Firmware/releases/download/20.5.0/Firmware.20.5.0.zip)


#### Eden에 설치
1. `도구 → 펌웨어 설치`
2. 펌웨어 .zip 파일을 **선택**합니다.
3. 설치가 완료될 때까지 **기다립니다**.
4. **확인**: `도구 → 펌웨어 버전`

## ⚙️ 4단계: 최적 구성

### 일반 설정
```
에뮬레이션 → 구성 → 일반
```
- **속도 제한 비율**: 100% (정상 속도용)
- **멀티코어 CPU 에뮬레이션**: ✅ 활성화됨
- **확장 메모리 레이아웃**: ✅ 활성화됨 (12GB+ RAM인 경우)

### 시스템 구성
```
에뮬레이션 → 구성 → 시스템
```
- **지역**: Europe (유럽에 있는 경우, 그렇지 않으면 지역 설정)
- **언어**: French (프랑스에 있는 경우, 그렇지 않으면 언어 설정)
- **RTC 소스**: 시스템 시계
- **시간대**: Europe/Paris
- **사운드 출력 모드**: 스테레오

### 최적의 그래픽 설정

#### API 탭
```
그래픽 → API
- API: Vulkan (권장) 또는 OpenGL
- 장치: 주 GPU
- 셰이더 백엔드: GLSL (Vulkan) / GLASM (OpenGL)
```

#### 그래픽 탭
```
그래픽 → 그래픽
- 디스크 파이프라인 캐시 사용: ✅ 활성화됨
- 비동기 GPU 에뮬레이션 사용: ✅ 활성화됨
- 비동기 셰이더 빌딩 사용: ✅ 활성화됨
- ASTC 텍스처 디코딩 가속: ✅ 활성화됨
- VSync 모드: FIFO (권장)
```

#### 고급 그래픽 탭
```
그래픽 → 고급
- 정확도 수준: 보통 (더 높은 정밀도를 위해 높음)
- 빠른 GPU 시간 사용: ✅ 활성화됨
- Vulkan 파이프라인 캐시 사용: ✅ 활성화됨 (Vulkan인 경우)
- 비등방성 필터링: 16x
- 해상도 스케일러: 1x (GPU가 강력한 경우 더 높게)
- 앤티앨리어싱: 없음 또는 FXAA
```

### 오디오 구성
```
오디오
- 출력 엔진: 자동
- 출력 장치: 기본값
- 볼륨: 100%
```

### 컨트롤러 구성

#### Xbox/PlayStation/Switch/호환되는 모든 컨트롤러
```
컨트롤 → 구성
1. 플레이어 1 → 연결된 컨트롤러: Pro 컨트롤러
2. 구성 → 자동 매핑
3. 모든 버튼 테스트
```

#### 키보드 (임시)
```
컨트롤 → 구성
1. 플레이어 1 → 연결된 컨트롤러: 핸드헬드
2. 구성 → 수동 매핑
3. 버튼에 키 할당
```

## 🎮 5단계: 게임 추가 및 최적화

### 지원되는 형식
- **.NSP**: Nintendo Submission Package (eShop 게임)
- **.XCI**: NX Card Image (실물 카드)

## 에뮬레이터에서 게임 구성

### 게임 폴더 추가

에뮬레이터 메뉴에서 **더블 클릭**한 다음 모든 게임이 포함된 폴더를 선택합니다.

### 권장 폴더 구조

라이브러리를 최적으로 구성하기 위한 권장 구조는 다음과 같습니다.

````
Switch Games/
├── Mario Kart 8 Deluxe/
│   ├── BASE/                # 🎮 메인 게임 (메인 파일)
│   ├── UPDATE/              # 🔄 게임 업데이트 (권장)
│   └── DLC/                 # 📦 다운로드 가능 콘텐츠 (선택 사항)
├── New Super Mario Bros U Deluxe/
│   ├── BASE/                # 🎮 메인 게임
│   ├── UPDATE/              # 🔄 게임 업데이트
│   └── DLC/                 # 📦 추가 DLC
├── The Legend of Zelda BOTW/
│   ├── BASE/
│   ├── UPDATE/
│   └── DLC/
└── Super Mario Odyssey/
    ├── BASE/
    └── UPDATE/              # (이 게임에는 DLC 없음)
````

### 콘텐츠 유형


- **BASE** 📁: 다운로드하는 메인 게임
- **UPDATE** 📁: 업데이트 및 패치 (권장)
- **DLC** 📁: 추가 유료 콘텐츠 (선택 사항이지만 권장)


✅ **자동 감지**: 게임이 에뮬레이터에 자동으로 추가됩니다.  
✅ **간소화된 관리**: 각 ROM을 수동으로 선택할 필요가 없습니다.  
✅ **명확한 구성**: 각 게임에 대해 어떤 콘텐츠가 있는지 쉽게 확인할 수 있습니다.  
✅ **쉬운 유지 관리**: 콘텐츠 추가/제거가 간단합니다.

> **📝 중요 참고**: 게임에 업데이트나 DLC가 없는 경우 해당 폴더를 만들 필요가 없습니다. 소유한 콘텐츠에 대해서만 폴더를 만드세요.

### 결과

이 구조가 마련되면 에뮬레이터가 "Switch Games" 폴더의 모든 게임을 자동으로 감지하고 라이브러리에 깔끔하게 정리합니다! 🎯

### 업데이트 설치
```bash
# Yuzu에서
파일 → NAND에 파일 설치
→ .nsp 업데이트 파일 선택
```

### DLC 설치
```bash
# Yuzu에서
파일 → NAND에 파일 설치
→ .nsp DLC 파일 선택
```

## 🔧 문제 해결

### 일반적인 문제 및 해결책

#### 게임이 실행되지 않음
```bash
우선 순위별 해결책:
1. 펌웨어 설치 확인
2. 키 확인 (prod.keys/title.keys)
3. 기본 설정으로 테스트
4. Visual C++ 재배포 가능 패키지 재설치
5. Eden을 최신 버전으로 업데이트
```

#### 낮은 성능
```bash
즉각적인 최적화:
1. 해상도 스케일러를 1x로 줄이기
2. 멀티코어 CPU 에뮬레이션 활성화
3. OpenGL 대신 Vulkan 사용
4. 백그라운드 애플리케이션 닫기
5. CPU/GPU 온도 확인

마지막 참고: FPS를 높이는 모드를 설치해도 FPS가 증가하지 않습니다. 게임이 30fps로 실행되도록 설계되었지만 PC에서 15-20fps로 실행되는 경우(안녕하세요 포켓몬 스칼렛), 모드를 추가해도 아무 소용이 없습니다. 더 좋은 PC를 구하세요. 제가 거짓말을 한다고 말하는 사람들에게는 그들의 헛소리 능력에 미리 웃어줍니다.
```

#### 잦은 충돌
```bash
진단:
1. 게임 무결성 확인 (SHA256)
2. 모드 없이 테스트
3. 정확도 수준 낮추기
4. 오버클러킹 비활성화
5. 이전 버전의 Yuzu로 테스트
```

#### 오디오 비동기화
```bash
해결책:
1. 출력 엔진 변경 (자동 → WASAPI)
2. 오디오 버퍼 조정
3. 오디오 드라이버 확인
4. Windows 오디오 효과 비활성화
```

#### 손상된 그래픽
```bash
수정:
1. 셰이더 캐시 삭제
2. 그래픽 API 변경 (Vulkan ↔ OpenGL)
3. GPU 드라이버 업데이트
4. 정확도 수준 낮추기
5. ASTC 디코딩 일시적으로 비활성화
```

## ❓ FAQ - 자주 묻는 질문

### 일반 질문

**Q: Eden은 합법적인가요?**  
**A:** 예, 에뮬레이션은 합법입니다. 그러나 사용하는 모든 게임, 키 및 펌웨어를 합법적으로 소유해야 합니다.

**Q: Eden으로 온라인 플레이를 할 수 있나요?**  
**A:** 예

### 기술 질문

**Q: Vulkan 또는 OpenGL?**  
**A:** Vulkan은 일반적으로 최신 GPU에서 더 나은 성능을 보입니다. OpenGL은 일부 시스템에서 더 안정적일 수 있습니다.

**Q: 최소 RAM은 얼마인가요?**  
**A:** 최소 8GB, 권장 16GB, 모드가 있는 가장 무거운 게임의 경우 32GB.

**Q: 제 GPU는 호환되나요?**  
**A:** Vulkan: 최소 GTX 1060/RX 580. OpenGL: OpenGL 4.6을 지원하는 모든 GPU.

## 🎯 결론

이 전체 가이드를 통해 이제 다음을 수행할 수 있는 모든 키를 갖게 되었습니다.
- Yuzu를 최적으로 **설치** 및 구성
- 하드웨어에 따라 성능 **최적화**
- 일반적인 문제 **해결**
- 우수한 품질로 Nintendo Switch 게임 **즐기기**

---

> **알림**: 항상 저작권을 존중하고 게임을 구매하여 개발자를 지원하세요.

**Eden과 함께 즐거운 게임 되세요! 🎮✨**
