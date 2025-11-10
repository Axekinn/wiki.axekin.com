---
title: "Einrichten von XLink Kai mit Ryujinx"
date: 2025-06-03
draft: false
categories: ["Ryujinx", "XLink Kai"]
tags: ["Ryujinx", "XLink Kai", "Nintendo Switch", "Emulation", "Multiplayer"]
author: "Axekin"
description: "Detailliertes Tutorial zur Konfiguration von XLink Kai mit dem Nintendo Switch-Emulator Ryujinx für Multiplayer-Spiele"
cover: "covers/ryujinx.png"
---

## 🎮 Einführung in XLink Kai + Ryujinx

**XLink Kai + Ryujinx** ermöglicht es Spielern, Nintendo Switch-Spiele über ein Netzwerk zu emulieren. Diese experimentelle Integration ermöglicht es Ihnen, Multiplayer mit anderen Ryujinx-Benutzern oder sogar mit echten Nintendo Switch-Konsolen zu spielen.

> ⚠️ **Wichtiger Hinweis**: Die Unterstützung von XLink Kai + Ryujinx ist experimentell und derzeit nur unter Windows verfügbar.

## 📋 Was funktioniert

- Nintendo Switch-Spiele mit LAN-Unterstützung
- Nintendo Switch-Spiele mit Local Wireless-Unterstützung
- Ryujinx spielt gegen andere Ryujinx-Spieler
- Ryujinx spielt gegen Spieler auf der Switch (CFW für Local Wireless-Spiele erforderlich)
- Ryujinx und eine lokale Switch spielen zusammen
- Mischen beliebiger Kombinationen der oben genannten!

## ❌ Was nicht funktioniert

- macOS-Unterstützung noch nicht verfügbar
- Linux-Unterstützung noch nicht verfügbar

## 🌐 Verbindungstypen

### LAN-Spiele

LAN-Spiele werden am breitesten unterstützt und die folgenden Konfigurationen können zusammen spielen:

- Spieler, die unmodifizierte "OFW" Nintendo Switch- und Nintendo Switch Lite-Systeme verwenden
- Spieler, die modifizierte "CFW" Nintendo Switch-Systeme verwenden
- Spieler, die Ryujinx verwenden

### Local Wireless-Spiele

Local Wireless-Spiele sind etwas eingeschränkter, aber die folgenden Konfigurationen können zusammen spielen:

- Spieler, die modifizierte "CFW" Nintendo Switch-Systeme mit dem ldn_mitm-Systemmodul verwenden
- Spieler, die Ryujinx verwenden

> ⚠️ **Wichtig**: Unmodifizierte "OFW" Nintendo Switch- und Nintendo Switch Lite-Systeme werden für Local Wireless-Spiele nicht unterstützt.

## 🔧 Netzwerkkonfiguration

### Windows

Diese Anweisungen gelten speziell für Windows 10 und Windows 11. Ältere Versionen von Windows sollten einem ähnlichen Prozess folgen.

#### Installation von NPCAP

Aufgrund von Lizenzproblemen wird XLink Kai mit WinPCAP ausgeliefert, das leider nicht mit Loopback-Adaptern kompatibel ist. Um dieses Problem zu lösen, müssen Sie NPCAP installieren. Version 1.31 ist als stabil bekannt.

1. **Laden** Sie NPCAP von [der offiziellen Website](https://npcap.com/#download) herunter
2. **Installieren** Sie NPCAP mit den Standardoptionen (klicken Sie einfach bis zum Ende auf "Weiter")

#### Ausführen von kaiLoopbackBridge

1. **Öffnen** Sie den Windows Explorer und navigieren Sie zu `C:\Program Files (x86)\XLink Kai\`
2. **Suchen** Sie `kaiLoopbackBridge64.exe`, klicken Sie mit der rechten Maustaste und wählen Sie **Als Administrator ausführen**
3. **Lesen** Sie die Warnung und drücken Sie eine beliebige Taste, um fortzufahren
4. **Wählen** Sie Nintendo Switch als Emulatortyp
5. Der Loopback-Adapter wird nun automatisch konfiguriert
6. **Schließen** Sie kaiLoopbackBridge. Wir werden es später wieder verwenden.

## ⚙️ Installation und Konfiguration von Ryujinx

Die Einrichtung von Ryujinx ist recht einfach, siehe die [Ryujinx-Anleitung](https://wiki.axekin.com/de/post/ryujinx/) für die grundlegende Installation.

### Netzwerkeinstellungen

#### Für LAN-Spiele

1. Sobald Ryujinx läuft, greifen Sie auf die Konfiguration zu, indem Sie auf **Options** und dann auf **Settings** klicken
2. Klicken Sie auf die Registerkarte **System**
3. Aktivieren Sie das Kontrollkästchen **Enable VSync**
4. Aktivieren Sie das Kontrollkästchen **Enable Guest Internet Access**
5. Klicken Sie auf die Registerkarte **Multiplayer**
6. Stellen Sie unter der Überschrift LAN **Network Interface** auf **XLink Kai Loopback Switch XXXX** ein
7. **Speichern** Sie die Konfiguration und beenden Sie Ryujinx

#### Für Local Wireless-Spiele

1. Sobald Ryujinx läuft, greifen Sie auf die Konfiguration zu, indem Sie auf **Options** und dann auf **Settings** klicken
2. Klicken Sie auf die Registerkarte **System**
3. Aktivieren Sie das Kontrollkästchen **Enable VSync**
4. Klicken Sie auf die Registerkarte **Network**
5. Deaktivieren Sie das Kontrollkästchen **Enable Guest Internet Access**
6. Stellen Sie unter der Überschrift Multiplayer **Mode** auf **ldn_mitm** ein
7. Stellen Sie unter der Überschrift LAN **Network Interface** auf **XLink Kai Loopback Switch XXXX** ein
8. **Speichern** Sie die Konfiguration und beenden Sie Ryujinx

## 🎮 Ein Spiel auf XLink Kai spielen

Da Ryujinx und XLink Kai (noch) nicht direkt miteinander kommunizieren können, wird kaiLoopbackBridge als "Brücke" zwischen ihnen verwendet.

1. **Starten** Sie XLink Kai und melden Sie sich an
2. **Starten** Sie kaiLoopbackBridge, navigieren Sie durch die Eingabeaufforderungen und lassen Sie es für die gesamte Dauer Ihrer Spielsitzung geöffnet. Nach einigen Sekunden wird XLink Kai eine Nintendo Switch auf der Registerkarte "Metrics" sehen.
3. **Starten** Sie Ryujinx und starten Sie Ihr Spiel. Ryujinx darf nicht laufen, bevor Sie kaiLoopbackBridge starten.
4. **Navigieren** Sie zu einer Spielarena und spielen Sie!


Stellen Sie sicher, dass Sie die Anwendungen immer in dieser Reihenfolge starten:
1. XLink Kai
2. kaiLoopbackBridge
3. Ryujinx


Wenn Sie Verbindungsprobleme haben:
- Überprüfen Sie, ob alle Firewalls XLink Kai und Ryujinx zulassen
- Stellen Sie sicher, dass der Loopback-Adapter ordnungsgemäß konfiguriert ist
- Starten Sie alle Anwendungen in der richtigen Reihenfolge neu

---

> **Erinnerung**: Emulation ist legal, wenn Sie die Spiele, die Sie emulieren, legal besitzen. Unterstützen Sie Entwickler immer, indem Sie ihre Spiele kaufen.

**Viel Spaß beim Multiplayer-Gaming mit Ryujinx und XLink Kai! 🎮✨**
(Dieses Tutorial basiert vollständig auf dem offiziellen X Link Kai-Tutorial; ich habe es lediglich aktualisiert.)
