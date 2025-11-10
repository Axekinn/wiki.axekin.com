---
title: "melonDS Installation und Konfiguration"
description: "Detailliertes Tutorial zur Installation, Konfiguration und Nutzung des melonDS Nintendo DS Emulators - Komplette Einrichtung mit BIOS, Grafik und Steuerung"
date: 2025-06-02
lastmod: 2025-06-07
categories: ["MelonDS"]
tags: ["melonDS", "Nintendo DS", "Emulation", "Gaming"]
author: "Axekin"
draft: false
lang: de
toc: true
math: false
featured: true
weight: 5
aliases: 
  - /de/melonds-guide/
  - /de/guides/melonds-installation/
summary: "Lernen Sie, wie Sie melonDS für eine optimale Nintendo DS-Emulation installieren und konfigurieren. Vollständige Anleitung mit BIOS, Grafikeinstellungen und erweiterten Funktionen."
cover: "covers/melonds.png"
image: "covers/melonds.png"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

## 🎮 Einführung in melonDS

**melonDS** ist ein moderner und präziser Open-Source-Nintendo-DS-Emulator, der seit 2016 entwickelt wird. Er zeichnet sich durch seine hervorragende Kompatibilität, Emulationspräzision und erweiterte Funktionen wie lokales Wi-Fi, Savestates und Grafikverbesserung aus. Es ist die perfekte moderne Alternative zu DeSmuME.

> 💡 **Wichtiger Hinweis**: melonDS ist dank der einfachen Architektur des DS weniger anspruchsvoll als die meisten modernen Emulatoren.

## 🔧 Schritt 1: Herunterladen von melonDS

### Stabile Version (Empfohlen)
```bash
# Offizielle Seite
https://melonds.kuribo64.net/downloads.php
```

1.  **Klicken** Sie auf "Download Windows x64"
2.  **Laden** Sie `melonds-0.9.5-windows-x64.zip` herunter
3.  **Extrahieren** Sie es in einen dedizierten Ordner (z. B. `Dokumente\melonDS` oder im Stammverzeichnis eines anderen Laufwerks, nicht C)

### Entwicklungsversionen
```bash
# Automatische Builds mit den neuesten Funktionen
https://github.com/melonDS-emu/melonDS/releases

Vorteile:
- Neue Verbesserungen
- Aktuelle Korrekturen
- Experimentelle Funktionen

Risiken:
- Potenziell instabil
- Mögliche Regressionen
```

### melonDS Android
```bash
# Offizielle mobile Version
https://play.google.com/store/apps/details?id=me.magnum.melonds

Funktionen:
- Optimierte Touch-Oberfläche
- Unterstützung für Bluetooth-Controller
- Speichersynchronisation
```

## Spiel-Download

### Schritt 1: Zugriff auf die Spielebibliothek

Gehen Sie zu **[🎮 Axekin Games - Nintendo DS](https://www.axekin.com/games?platform=ds)**, um auf die Nintendo DS-Spielesammlung zuzugreifen.

### Schritt 2: Das Spiel herunterladen

1.  **Suchen** Sie das gewünschte Spiel in der Liste
2.  **Klicken** Sie auf den Download-Button
3.  **Warten** Sie, bis der Download abgeschlossen ist

### Schritt 3: Datei-Extraktion

Sobald der Download abgeschlossen ist, **extrahieren** Sie das Archiv mit einer dieser Software:

| Software | Download-Link | Kompatibilität |
|----------|---------------|---------------|
| **7-Zip** | [7-Zip herunterladen](https://www.7-zip.org/) | Windows/Linux |
| **WinRAR** | [WinRAR herunterladen](https://www.win-rar.com/) | Windows |

> **💡 Tipp**: 7-Zip ist kostenlos und Open-Source, während WinRAR nach der Testphase eine Lizenz erfordert.

**Ergebnis**: Sie erhalten Spieldateien, die bereit sind, mit melonDS verwendet zu werden! 🎯

## 📁 Schritt 2: Ordnerstruktur

Erstellen Sie diese Ordnerstruktur, um Ihre Dateien zu organisieren:

Für eine optimale Organisation Ihrer Bibliothek wird die folgende Baumstruktur empfohlen:

````
DS Games/
├── Animal Crossing: Wild World/
│   ├── BASE/                # 🎮 Basisspiel (Hauptdatei)
├── Anno 1701: Dawn of Discovery/
│   ├── BASE/                # 🎮 Basisspiel
├── Art Academy/
│   ├── BASE/
└── Assassin's Creed: Altaïr's Chronicles/
    ├── BASE/
````

### Inhaltstypen

- **BASE** 📁: Das Hauptspiel, das Sie herunterladen

✅ **Automatische Erkennung**: Spiele werden automatisch zum Emulator hinzugefügt  
✅ **Vereinfachte Verwaltung**: Kein manuelles Auswählen jeder ROM erforderlich  
✅ **Klare Organisation**: Leicht zu erkennen, welche Inhalte Sie für jedes Spiel haben  
✅ **Einfache Wartung**: Vereinfachtes Hinzufügen/Entfernen von Inhalten

> **📝 Wichtiger Hinweis**: Wenn ein Spiel keine Updates oder DLCs hat, müssen die entsprechenden Ordner nicht erstellt werden. Erstellen Sie nur Ordner für Inhalte, die Sie tatsächlich besitzen.

### Ergebnis

Sobald diese Struktur vorhanden ist, erkennt Ihr Emulator automatisch alle Spiele im Ordner "DS Games" und organisiert sie ordnungsgemäß in Ihrer Bibliothek! 🎯

## ⚙️ Schritt 3: Nintendo DS BIOS-Installation

### Erforderliche BIOS-Dateien

> ⚠️ **(Nicht) Erforderlich**: Nintendo DSi BIOS-Dateien sind für eine optimale Funktionalität erforderlich.

**Notwendige Dateien:**
- `biosdsi7.bin` (16 KB) - ARM7 BIOS
- `biosdsi9.bin` (4 KB) - ARM9 BIOS  
- `dsifirmware.bin` (256 KB) - DS Firmware

**📥 Nintendo DSi BIOS-Download:**

[Nintendo DSi BIOS herunterladen](https://cdn.discordapp.com/attachments/1332956018665328702/1381293934109786246/Nintendo_DSi_Bios_for_emulators.zip?ex=6846fdb9&is=6845ac39&hm=e36162ccf2877cea45ea2ab9e004f2d38fddd8a7583be41f7e8414edc49e1383&)

> **📋 Inhalt:** `biosdsi7.bin`, `biosdsi9.bin`, `dsifirmware.bin`

### Konfiguration in melonDS

1.  **Starten** Sie `melonDS.exe`
2.  `Config → Emu settings → DSi-mode`
3.  **Konfigurieren** Sie die BIOS-Pfade:
    - **DS ARM9 BIOS**: `bios/biosdsi9.bin`
    - **DS ARM7 BIOS**: `bios/biosdsi7.bin`
    - **DS Firmware**: `bios/dsifirmware.bin`
4.  **Starten** Sie melonDS neu

## ⚙️ Schritt 4: Grundkonfiguration

### Allgemeine Einstellungen
```
Config → Emu settings → General
```

**Empfohlene Konfiguration:**
- **Konsolentyp**: DS (oder DSi bei DSi-Spielen)
- **Direkter Start**: ✅ Aktiviert (startet das Spiel direkt)
- **JIT aktivieren**: ✅ Aktiviert (verbessert die Leistung erheblich)
- **JIT max. Blockgröße**: 32 (optimal)
- **JIT-Literal-Optimierungen**: ✅ Aktiviert
- **JIT-Branch-Optimierungen**: ✅ Aktiviert
- **JIT-Fast-Memory**: ✅ Aktiviert

### 3D-Einstellungen
```
Config → Video Settings
```

Sie gelangen zu einem Fenster mit zwei Hauptbereichen: **Anzeigeeinstellungen** (links) und Rendereinstellungen **Software-Renderer** / **OpenGL-Renderer** (rechts).

#### 3D-Rendering-Konfiguration

**Auswahl der Rendering-Engine:**

| Option | Leistung | Qualität | Empfehlung |
|--------|-------------|---------|----------------|
| **Software** | Niedrig | Einfach | Alte Hardware |
| **OpenGL (Klassisch)** | Ausgezeichnet | Sehr gut | ✅ **Empfohlen** |
| **OpenGL (Compute-Shader)** | Variabel | Maximal | Nur für neue GPUs |

#### OpenGL-Einstellungen (Empfohlen)

**Interne Auflösung:** `1x nativ (4096x3072)` bis `16x` je nach Ihrer GPU
- 1x = Original-DS-Auflösung
- 2x-3x = Guter Kompromiss zwischen Qualität und Leistung  
- 4x+ = Leistungsstarke GPU erforderlich

**Verbesserungsoptionen:**
- ✅ **Verbesserte Polygonaufteilung**: Verbessert die geometrische Qualität
- ✅ **Hochauflösende Koordinaten verwenden**: Erhöhte Texturpräzision

#### Allgemeine Anzeigeeinstellungen

```
Anzeigeeinstellungen (linke Seite)
```

**Empfohlene Konfiguration:**
- **VSync**: ✅ Aktiviert (verhindert Tearing)
- **VSync-Intervall**: `1` (Standard 60 FPS)
- **OpenGL-Anzeige**: ✅ Aktiviert für OpenGL-Anzeige

### Visuelles Ergebnis

Mit diesen Einstellungen profitieren Ihre DS-Spiele von einer **vervielfachten Auflösung** und einer **erheblich verbesserten Anzeigequalität** im Vergleich zur Originalkonsole!

> **💡 Leistungstipp**: Wenn Sie Verlangsamungen feststellen, reduzieren Sie zuerst die **Interne Auflösung**, bevor Sie die Rendering-Engine ändern.

## ⚙️ Schritt 5: Video- und Audiokonfiguration

### Videoeinstellungen
```
View
```

**Anzeigeeinstellungen:**
- **DS-Bildschirmlayout**: Natürlich, Vertikal, Horizontal (Ihre Wahl)
- **DS-Bildschirmgröße**: Gleich (gleiche Bildschirme) oder Oben/Unten betonen
- **DS-Bildschirmlücke**: 0-96 Pixel (persönliche Präferenz)
- **Bildschirmfilterung**: Linear (glatter) oder Nächster (scharfe Pixelkunst)
- **OSD anzeigen**: ✅ Aktiviert (nützliche Informationen)

### Audioeinstellungen
```
Config → Audio settings
```

**Optimale Konfiguration:**
- **Audioausgabe**: Automatisch (empfohlen)
- **Audiolautstärke**: 256 (maximal)
- **Mikrofoneingang**: Automatisch oder bestimmtes Gerät
- **Mikrofon-Noise-Gate**: ✅ Aktiviert (filtert Hintergrundgeräusche)

## ⚙️ Schritt 6: Steuerungskonfiguration

### Tastatursteuerung (Standard)
```
Config → Input and hotkeys → DS keypad
```

**Standardbelegung:**
- **A**: X
- **B**: Z  
- **X**: A
- **Y**: S
- **L**: Q
- **R**: W
- **Start**: Return
- **Select**: RShift
- **D-Pad**: Pfeiltasten

(Persönliches Beispiel, setzen Sie ein, was Sie wollen)

### Controller-Konfiguration
```bash
# Automatische Erkennung
1. Schließen Sie Ihren Controller an
2. Config → Input and hotkeys → DS keypad
3. Klicken Sie auf eine zu konfigurierende Taste
4. Drücken Sie die entsprechende Taste am Controller
5. Wiederholen Sie dies für alle Tasten

# Empfohlene Belegung (Xbox-Controller)
A → A (Xbox)
B → B (Xbox)  
X → Y (Xbox)
Y → X (Xbox)
L → LB
R → RB
D-Pad → D-Pad
Start → Menü
Select → Ansicht
```

### Spielstart

#### Direkte Methode
```bash
# Einfaches Öffnen
1. File → Open ROM
2. Navigieren Sie zu Ihrer .nds-Datei
3. Auswählen und öffnen
4. Das Spiel startet automatisch

# Drag & Drop
1. Ziehen Sie die .nds-Datei auf melonDS
2. Sofortiger Start
```

## 🛠️ Erweiterte Funktionen

### Wi-Fi und lokaler Mehrspielermodus

#### Lokale Netzwerkkonfiguration
```bash
# Lokaler Mehrspielermodus melonDS
1. System → Multiplayer → Local multiplayer
2. Jede melonDS-Instanz = eine Konsole
3. Automatische Erkennung anderer Instanzen
4. Kompatibel: Mario Kart DS, Pokémon, etc.

# Konfiguration:
- Gleiches lokales Netzwerk erforderlich
- Firewall: melonDS zulassen
- Ports: Automatisch
- Verbinden Sie sich mit RadminVPN, erstellen Sie Ihr eigenes Netzwerk und verbinden Sie sich mit Ihrem Freund
```

## 🔧 Fehlerbehebung

### Startprobleme

#### melonDS startet nicht
```bash
Systemprüfungen:
1. Visual C++ Redistributable installiert
2. OpenGL 3.2+ von der GPU unterstützt
3. Grafiktreiber auf dem neuesten Stand
4. Antivirus: Ausnahme für den melonDS-Ordner
5. Administratorrechte bei Bedarf
```

#### ROM startet nicht
```bash
ROM-Diagnose:
1. Format: Gültiges .nds prüfen
2. Größe: Datei nicht beschädigt
3. BIOS: Dateien vorhanden und gültig
4. Region: PAL/NTSC/JPN-kompatibel
5. Schutz: Einige Dumps erfordern Patches
```

## ❓ FAQ - Häufig gestellte Fragen

### Allgemeine Fragen

**F: Kann melonDS alle DS-Spiele spielen?**
**A:** Etwa 97 % der Spiele funktionieren einwandfrei. Hervorragende Gesamtkompatibilität.

**F: Benötige ich BIOS-Dateien?**
**A:** Ja, für optimale Funktionalität und maximale Kompatibilität erforderlich.

**F: Unterstützt melonDS DSi-Spiele?**
**A:** Teilweise Unterstützung. Einige DSi-Spiele funktionieren, andere noch nicht.

### Technische Fragen

**F: OpenGL- oder Software-Renderer?**
**A:** OpenGL wird für Leistung und visuelle Verbesserung empfohlen. Software für Kompatibilität.

**F: Welche Auflösung soll ich wählen?**
**A:** 2x-3x für einen guten Kompromiss zwischen Qualität und Leistung. 4x+ bei leistungsstarker GPU.

**F: Ist JIT sicher?**
**A:** Ja, für eine gute Leistung erforderlich. Kein Sicherheitsrisiko.

### Häufige Probleme

**F: Verzögerung trotz gutem PC?**
**A:** Überprüfen Sie, ob JIT aktiviert ist, verwenden Sie OpenGL, reduzieren Sie bei Bedarf den Skalierungsfaktor.

**F: Speichern funktioniert nicht?**
**A:** Überprüfen Sie die Schreibberechtigung für den Speicherordner, korrektes ROM-Format.

**F: Wi-Fi funktioniert nicht?**
**A:** Wi-Fi ist auf unterstützte Spiele beschränkt, Netzwerkkonfiguration erforderlich.

## 🎯 Fazit

**Entdecken Sie die Nintendo DS-Bibliothek in High Definition mit melonDS neu! 🎮✨**
