---
title: "RyujinxでXLink Kaiを設定する"
date: 2025-06-03
draft: false
categories: ["Ryujinx", "XLink Kai"]
tags: ["Ryujinx", "XLink Kai", "Nintendo Switch", "エミュレーション", "マルチプレイヤー"]
author: "Axekin"
description: "Nintendo SwitchエミュレータRyujinxでXLink Kaiをマルチプレイヤーゲーム用に設定するための詳細なチュートリアル"
cover: "covers/ryujinx.png"
---

## 🎮 XLink Kai + Ryujinxの紹介

**XLink Kai + Ryujinx**は、プレイヤーがネットワーク経由でNintendo Switchのゲームをエミュレートできるようにします。この実験的な統合により、他のRyujinxユーザーや実際のNintendo Switch本体とマルチプレイヤーで遊ぶことができます。

> ⚠️ **重要事項**: XLink Kai + Ryujinxのサポートは実験的なものであり、現在Windowsでのみ利用可能です。

## 📋 動作するもの

- LAN対応のNintendo Switchゲーム
- ローカルワイヤレス対応のNintendo Switchゲーム
- 他のRyujinxプレイヤーと対戦するRyujinx
- Switch上のプレイヤーと対戦するRyujinx（ローカルワイヤレスゲームにはCFWが必要）
- RyujinxとローカルのSwitchが一緒にプレイ
- 上記の任意の組み合わせ！

## ❌ 動作しないもの

- macOSのサポートはまだ利用できません
- Linuxのサポートはまだ利用できません

## 🌐 接続タイプ

### LANゲーム

LANゲームは最も広くサポートされており、以下の構成で一緒にプレイできます。

- 未改造の「OFW」Nintendo SwitchおよびNintendo Switch Liteシステムを使用しているプレイヤー
- 改造された「CFW」Nintendo Switchシステムを使用しているプレイヤー
- Ryujinxを使用しているプレイヤー

### ローカルワイヤレスゲーム

ローカルワイヤレスゲームはもう少し制限がありますが、以下の構成で一緒にプレイできます。

- ldn_mitmシステムモジュールを備えた改造された「CFW」Nintendo Switchシステムを使用しているプレイヤー
- Ryujinxを使用しているプレイヤー

> ⚠️ **重要**: 未改造の「OFW」Nintendo SwitchおよびNintendo Switch Liteシステムは、ローカルワイヤレスゲームではサポートされていません。

## 🔧 ネットワーク設定

### Windows

これらの手順はWindows 10およびWindows 11に固有のものです。古いバージョンのWindowsでも同様のプロセスに従う必要があります。

#### NPCAPのインストール

ライセンスの問題により、XLink KaiにはWinPCAPが同梱されていますが、残念ながらループバックアダプタとは互換性がありません。この問題を解決するには、NPCAPをインストールする必要があります。バージョン1.31は安定していることが知られています。

1. [公式サイト](https://npcap.com/#download)からNPCAPを**ダウンロード**します
2. デフォルトオプションでNPCAPを**インストール**します（最後まで「次へ」をクリックするだけです）

#### kaiLoopbackBridgeの実行

1. Windowsエクスプローラーを**開き**、`C:\Program Files (x86)\XLink Kai\`に移動します
2. `kaiLoopbackBridge64.exe`を**見つけ**、右クリックして**管理者として実行**します
3. 警告を**読み**、任意のキーを押して続行します
4. エミュレータの種類としてNintendo Switchを**選択**します
5. ループバックアダプタが自動的に設定されます
6. kaiLoopbackBridgeを**閉じます**。後で再び使用します。

## ⚙️ Ryujinxのインストールと設定

Ryujinxのセットアップは非常に簡単です。基本的なインストールについては、[Ryujinxガイド](https://wiki.axekin.com/ja/post/ryujinx/)を確認してください。

### ネットワーク設定

#### LANゲームの場合

1. Ryujinxが実行されたら、**Options**、次に**Settings**をクリックして設定にアクセスします
2. **System**タブをクリックします
3. **Enable VSync**ボックスをチェックします
4. **Enable Guest Internet Access**ボックスをチェックします
5. **Multiplayer**タブをクリックします
6. LANの見出しの下で、**Network Interface**を**XLink Kai Loopback Switch XXXX**に設定します
7. 設定を**保存**してRyujinxを終了します

#### ローカルワイヤレスゲームの場合

1. Ryujinxが実行されたら、**Options**、次に**Settings**をクリックして設定にアクセスします
2. **System**タブをクリックします
3. **Enable VSync**ボックスをチェックします
4. **Network**タブをクリックします
5. **Enable Guest Internet Access**ボックスのチェックを外します
6. Multiplayerの見出しの下で、**Mode**を**ldn_mitm**に設定します
7. LANの見出しの下で、**Network Interface**を**XLink Kai Loopback Switch XXXX**に設定します
8. 設定を**保存**してRyujinxを終了します

## 🎮 XLink Kaiでゲームをプレイする

RyujinxとXLink Kaiは（まだ）直接通信できないため、kaiLoopbackBridgeがそれらの間の「ブリッジ」として使用されます。

1. XLink Kaiを**起動**してログインします
2. kaiLoopbackBridgeを**起動**し、プロンプトに従って進み、ゲームセッション中ずっと開いたままにします。数秒後、XLink KaiはMetricsタブの下にNintendo Switchを表示します。
3. Ryujinxを**起動**してゲームを開始します。kaiLoopbackBridgeを起動する前にRyujinxが実行されていてはいけません。
4. ゲームアリーナに**移動**してプレイしてください！


必ずこの順序でアプリケーションを起動してください：
1. XLink Kai
2. kaiLoopbackBridge
3. Ryujinx


接続に問題が発生した場合：
- すべてのファイアウォールがXLink KaiとRyujinxを許可していることを確認してください
- ループバックアダプタが正しく設定されていることを確認してください
- すべてのアプリケーションを正しい順序で再起動してください

---

> **リマインダー**: エミュレーションは、エミュレートするゲームを合法的に所有している場合に合法です。常にゲームを購入して開発者をサポートしてください。

**RyujinxとXLink Kaiでマルチプレイヤーゲームをお楽しみください！ 🎮✨**
（このチュートリアルは、公式のX Link Kaiチュートリアルに完全に基づいています。私が単に更新しただけです。）
