---
title: "Cemu Installation und Konfiguration"
date: 2025-06-14
draft: false
lang: de
categories: ["Cemu"]
tags: ["Cemu", "Nintendo Wii U", "Emulation", "Gaming"]
author: "Axekin"
description: "Detaillierte Anleitung zur Installation, Konfiguration und Verwendung des Nintendo Wii U-Emulators Cemu"
series: ["Emulations-Anleitungen"]
toc: true
math: false
featured: false
weight: 20
aliases: 
  - /de/cemu-guide/
  - /de/guides/cemu-setup/
summary: "Vollständige Anleitung zur Installation und Konfiguration von Cemu, dem leistungsstärksten Wii U-Emulator. Installation, optimale Konfiguration und Tipps."
cover: "covers/cemu.webp"
image: "covers/cemu.webp"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

## 🎮 Einführung in Cemu

**Cemu** ist der leistungsstärkste und am weitesten entwickelte Nintendo Wii U-Emulator, der verfügbar ist. Er wird seit 2015 entwickelt und ermöglicht es Ihnen, Wii U-Exklusivtitel auf dem PC mit spektakulären grafischen Verbesserungen, Mods und ausgezeichneter Kompatibilität zu spielen.

## 🔧 Schritt 1: Herunterladen von Cemu

### Empfohlene Option: Offizielle Version
```bash
# Offizielle Website
https://github.com/cemu-project/Cemu/releases
```

1. **Klicken** Sie auf Ihr Betriebssystem
2. **Laden** Sie `cemu_X.X.X.zip` (neueste Version) herunter
3. **Extrahieren** Sie es in einen dedizierten Ordner (z. B.: `Emulatoren\Cemu` oder im Stammverzeichnis eines sekundären Laufwerks)

## 📦 Herunterladen Ihrer Spiele

### Schritt 1: Zugriff auf die Spielebibliothek

Gehen Sie zu **[🎮 Axekin Games - Nintendo Wii U](https://www.axekin.com/games?platform=wiiu)**, um auf die Nintendo Wii U-Spielesammlung zuzugreifen.

### Schritt 2: Das Spiel herunterladen

1. **Suchen** Sie das gewünschte Spiel in der Liste
2. **Klicken** Sie auf den Download-Button
3. **Warten** Sie, bis der Download abgeschlossen ist

### Schritt 3: Die Datei extrahieren

Sobald der Download abgeschlossen ist, **extrahieren** Sie das Archiv mit einer dieser Software:

| Software | Download-Link | Kompatibilität |
|----------|---------------|----------------|
| **7-Zip** | [7-Zip herunterladen](https://www.7-zip.org/) | Windows/Linux |
| **WinRAR** | [WinRAR herunterladen](https://www.win-rar.com/) | Windows |

> **💡 Tipp**: 7-Zip ist kostenlos und Open-Source, während WinRAR nach der Testphase eine Lizenz erfordert.

**Ergebnis**: Sie erhalten Spieldateien, die bereit sind, mit Cemu verwendet zu werden! 🎯

## 📁 Schritt 2: Ordnerstruktur

Für eine optimale Organisation Ihrer Bibliothek ist hier die empfohlene Dateistruktur:

````
Wii U Spiele/
    Super Mario 3D World/
   ├── BASE
   │   ├── code/      # 🎮 Spielcode (Haupt-.rpx-Datei)
   │   ├── content/   # 📁 Spielinhalte (Texturen, Audio, etc.)
   │   └── meta/      # 📋 Metadaten (Symbol, Titel, etc.)
   ├── UPDATE     
   │   ├── code/      # 🎮 Spielcode (Haupt-.rpx-Datei)
   │   ├── content/   # 📁 Spielinhalte (Texturen, Audio, etc.)
   │   └── meta/      # 📋 Metadaten (Symbol, Titel, etc.)            
   ├── DLC   
   │   ├── code/      # 🎮 Spielcode (Haupt-.rpx-Datei)
   │   ├── content/   # 📁 Spielinhalte (Texturen, Audio, etc.)
   │   └── meta/      # 📋 Metadaten (Symbol, Titel, etc.)   
    Zelda Breath Of The Wild/
   ├── BASE
   │   ├── code/      # 🎮 Spielcode (Haupt-.rpx-Datei)
   │   ├── content/   # 📁 Spielinhalte (Texturen, Audio, etc.)
   │   └── meta/      # 📋 Metadaten (Symbol, Titel, etc.)
   ├── UPDATE     
   │   ├── code/      # 🎮 Spielcode (Haupt-.rpx-Datei)
   │   ├── content/   # 📁 Spielinhalte (Texturen, Audio, etc.)
   │   └── meta/      # 📋 Metadaten (Symbol, Titel, etc.)            
   ├── DLC   
   │   ├── code/      # 🎮 Spielcode (Haupt-.rpx-Datei)
   │   ├── content/   # 📁 Spielinhalte (Texturen, Audio, etc.)
   │   └── meta/      # 📋 Metadaten (Symbol, Titel, etc.)    
            
````

### Inhaltstypen


- **code/** 📁: Enthält die Haupt-.rpx-Datei des Spiels
- **content/** 📁: Spiel-Assets (Texturen, Sounds, Videos)
- **meta/** 📁: Metadaten und Symbole
- **Updates/** 📁: Spiel-Updates (wichtig für die Kompatibilität)



✅ **Automatische Erkennung**: Cemu scannt und fügt Spiele automatisch hinzu  
✅ **Vereinfachte Verwaltung**: Übersichtliche Benutzeroberfläche in Cemu  
✅ **Einfache Updates**: Dedizierter Ordner für Updates und DLCs
✅ **Maximale Kompatibilität**: Struktur, die dem offiziellen Wii U-Format entspricht


## 💡 Portable Konfiguration (Empfohlen)


Cemu ist standardmäßig portabel. Alle Konfigurationen werden im `mlc01`-Installationsordner gespeichert, was Backups und Portabilität erleichtert.


### Portable Installationsstruktur

```
📁 Cemu/
├── 🎮 Cemu.exe
├── 📁 gameProfiles/      # Spielprofile
├── 📁 graphicPacks/      # Grafikpakete und Mods
├── 📁 memorySearcher/    # Speicher-Suchwerkzeuge
├── 📁 mlc01/            # Virtuelle Wii U-Systemdaten
├── 📁 shaderCache/      # Kompilierter Shader-Cache
└── 📄 settings.xml      # Hauptkonfiguration
```


**✅ Einfaches Backup**: Nur ein Ordner zum Sichern  
**✅ Totale Portabilität**: Auf jeden PC verschiebbar  
**✅ Konfigurationen bleiben erhalten**: Kein Verlust bei Neuinstallation  
**✅ Vereinfachtes Teilen**: Leicht teilbare Konfiguration


## ⚙️ Schritt 3: Installation und erster Start

### Erster Start

1. **Führen Sie** `Cemu.exe` als Administrator aus (nur beim ersten Start)
2. **Legen Sie** den Spieleordner in `Game paths` fest
3. **Fügen Sie** Ihren "Wii U Spiele"-Ordner hinzu
4. **Laden Sie** Grafikpakete herunter
5. **Überprüfen Sie**, ob die Spiele in der Bibliothek erscheinen

- Klicken Sie dann auf Schließen, wir konfigurieren den Controller später

## ⚙️ Schritt 4: Optimale Konfiguration

### Allgemeine Einstellungen

```
Options → General settings
```

**Registerkarte Allgemein:**
- **Interface language**: Deutsch
- **Discord Presence**: ✅ Aktiviert (optional)
- **Check for updates**: ✅ Aktiviert

### Optimale Grafikeinstellungen

```
Options → General settings → Graphics
```

#### Registerkarte Allgemein

| Parameter | Empfohlener Wert | Beschreibung |
|-----------|------------------|-------------|
| **Graphics API** | Vulkan | Beste Leistung (OpenGL bei Problemen) |
| **Graphics Device** | Ihre Haupt-GPU | Leistungsstärkste verfügbare GPU |
| **VSync** | ✅ Aktiviert | Verhindert Bildschirm-Tearing |

- Lassen Sie die restlichen Parameter auf den Standardwerten, das ist ausreichend

### Audio-Konfiguration

```
Options → General settings → Audio
```

- **Audio API**: XAudio2 (Windows) oder DirectSound
- **Audio channels**: Stereo oder 5.1 je nach Ihrer Konfiguration

### Steuerungs-Konfiguration

#### Automatische Methode für Controller

```
Options → Input settings
```

1. **Emulated controller**: Wii U GamePad
2. **Controller API**: XInput (Xbox-Controller) oder DirectInput
3. **Klicken** Sie auf "Calibrate"
4. **Folgen** Sie den Anweisungen auf dem Bildschirm
5. **Testen** Sie alle Tasten und Joysticks

## 🎨 Schritt 5: Grafikpakete und Mods

### Grafikpakete installieren

1. **Grafikpakete herunterladen**: `Options → Download community graphic packs`
2. **Cemu neu starten**
3. **Pro Spiel konfigurieren**: Rechtsklick auf ein Spiel → `Edit graphic packs`

**Empfohlene Seiten für Mods:**
- **GameBanana**: [gamebanana.com](https://gamebanana.com)
- **NexusMods**: [nexusmods.com](https://nexusmods.com)
- **Reddit r/cemu**: Aktive Community und Unterstützung

## ❓ FAQ - Häufig gestellte Fragen

### Allgemeine Fragen

**F: Funktionieren alle Wii U-Spiele auf Cemu?**
**A:** Etwa 95% der Spiele sind perfekt spielbar. Überprüfen Sie die offizielle Kompatibilitätsliste auf der Cemu-Website.

**F: Kann ich meine echten Wii U-Speicherstände verwenden?**
**A:** Ja, mit Saviine oder dedizierten Homebrews können Sie Ihre Speicherstände übertragen.

**F: Funktioniert das GamePad wirklich?**
**A:** Ja, der Touchscreen wird mit der Maus emuliert und die GamePad-Oberfläche ist voll funktionsfähig.

### Technische Fragen

**F: Vulkan oder OpenGL?**
**A:** Vulkan bietet im Allgemeinen eine bessere Leistung. Verwenden Sie OpenGL bei Kompatibilitätsproblemen.

**F: Warum dauert das Kompilieren der Shader so lange?**
**A:** Das ist beim ersten Start eines Spiels normal. Die Shader werden dann für nachfolgende Sitzungen zwischengespeichert.

### Häufige Probleme

**F: Das Spiel stürzt abrupt ab?**
**A:** Überprüfen Sie die aktivierten Grafikpakete, aktualisieren Sie Cemu und Ihre GPU-Treiber.

**F: Der Ton ist abgehackt?**
**A:** Erhöhen Sie die Audio-Latenz auf 64ms oder ändern Sie die Audio-API (XAudio2/DirectSound).

**F: Texturen sind verschwommen?**
**A:** Aktivieren Sie die 16x anisotrope Filterung und überprüfen Sie, ob die Auflösung korrekt konfiguriert ist.

### Spielformate

**F: Was ist der Unterschied zwischen .wud und .wux?**
**A:** .wux ist eine komprimierte Version von .wud. Beide funktionieren perfekt, .wux spart Speicherplatz.

**F: Wie installiere ich DLCs und Updates?**
**A:** Legen Sie sie in den Ordner Updates/ mit der gleichen Struktur wie die Basisspiele.


**🎉 Herzlichen Glückwunsch!** Sie haben jetzt ein perfekt konfiguriertes Cemu, um Wii U-Exklusivtitel in High Definition mit optimaler Leistung zu genießen!


**Genießen Sie Ihre Wii U-Spiele in 4K mit unglaublichen Mods! 🎮✨**
