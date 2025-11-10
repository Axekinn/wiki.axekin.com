---
title: "Azahar Installation und Konfiguration"
date: 2025-06-02
draft: false
lang: de
categories: ["Citra"]
tags: ["Citra"]
author: "Axekin"
description: "Detailliertes Tutorial zur Installation, Konfiguration und Nutzung des Nintendo 3DS-Emulators Azahar"
series: ["Emulations-Anleitungen"]
toc: true
math: false
featured: false
weight: 20
aliases: 
  - /de/citra-cheats-mods/
  - /de/guides/citra-modding/
summary: "Lernen Sie, wie Sie Cheat-Codes und Spielmodifikationen im Citra-Emulator installieren. Detailliertes Tutorial mit Ordnerstruktur und Installationsschritten."
cover: "covers/azahar.webp"
image: "covers/azahar.webp"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

## 🎮 Einführung in Citra

**Citra** ist der fortschrittlichste Open-Source-Emulator für den Nintendo 3DS. Er wird seit 2013 entwickelt und ermöglicht es Ihnen, 3DS-Spiele auf dem PC mit erheblichen grafischen Verbesserungen und nahezu perfekter Kompatibilität zu spielen. Azahar ist sein Fork.

## 🔧 Schritt 1: Herunterladen von Citra

### Option 1: Offizielles Azahar
```bash
# Offizielle Seite
https://github.com/azahar-emu/azahar/releases
```

1. **Klicken** Sie auf "Download for Windows"
2. **Laden** Sie `azahar-XXXX-rc1-windows-msvc-installer.exe` herunter
3. **Extrahieren** Sie es in einen dedizierten Ordner (z. B. `Documents\Azahar` oder auf der Wurzel eines anderen Laufwerks, nicht C)

## Spiel-Download

### Schritt 1: Zugriff auf die Spielebibliothek

Gehen Sie zu **[🎮 Axekin Games - Nintendo 3DS](https://www.axekin.com/games?platform=3ds)**, um auf die Nintendo 3DS-Spielesammlung zuzugreifen.

### Schritt 2: Das Spiel herunterladen

1. **Suchen** Sie das gewünschte Spiel in der Liste
2. **Klicken** Sie auf den Download-Button
3. **Warten** Sie, bis der Download abgeschlossen ist

### Schritt 3: Datei-Extraktion

Sobald der Download abgeschlossen ist, **extrahieren** Sie das Archiv mit einer dieser Software:

| Software | Download-Link | Kompatibilität |
|----------|---------------|----------------|
| **7-Zip** | [7-Zip herunterladen](https://www.7-zip.org/) | Windows/Linux |
| **WinRAR** | [WinRAR herunterladen](https://www.win-rar.com/) | Windows |

> **💡 Tipp**: 7-Zip ist kostenlos und Open-Source, während WinRAR nach der Testphase eine Lizenz erfordert.

**Ergebnis**: Sie erhalten Spieldateien, die bereit sind, mit 3DS verwendet zu werden! 🎯

## 📁 Schritt 2: Ordnerstruktur

Erstellen Sie diese Ordnerstruktur, um Ihre Dateien zu organisieren:

Für eine optimale Organisation Ihrer Bibliothek wird die folgende Baumstruktur empfohlen:

````
3DS-Spiele/
├── Animal Crossing - Happy Home Designer/
│   ├── BASE/                # 🎮 Basisspiel (Hauptdatei)
│   ├── UPDATE/              # 🔄 Spiel-Update (empfohlen)
│   └── DLC/                 # 📦 Herunterladbarer Inhalt (optional)
├── Dead or Alive - Dimensions/
│   ├── BASE/                # 🎮 Basisspiel
│   ├── UPDATE/              # 🔄 Spiel-Update
│   └── DLC/                 # 📦 Zusätzlicher DLC
├── Ben 10 - Galactic Racing/
│   ├── BASE/
│   ├── UPDATE/
│   └── DLC/
└── Captain America - Super Soldier/
    ├── BASE/
    └── UPDATE/              # (Kein DLC für dieses Spiel)
````


### Inhaltstypen


- **BASE** 📁 : Die Hauptspieldateien, die Sie heruntergeladen haben
- **UPDATE** 📁 : Updates und Patches (empfohlen)
- **DLC** 📁 : Zusätzlicher kostenpflichtiger Inhalt (optional, aber empfohlen)


✅ **Automatische Erkennung**: Spiele werden automatisch im Emulator hinzugefügt  
✅ **Vereinfachte Verwaltung**: Kein manuelles Hinzufügen jeder ROM erforderlich  
✅ **Klare Organisation**: Leicht zu erkennen, welche Inhalte Sie pro Spiel haben  
✅ **Einfache Wartung**: Das Hinzufügen/Entfernen von Inhalten ist unkompliziert

> **📝 Wichtiger Hinweis**: Wenn ein Spiel keine Updates oder DLCs hat, müssen Sie diese Ordner nicht erstellen. Erstellen Sie nur Ordner für Inhalte, die Sie besitzen.

### Ergebnis

Sobald diese Struktur vorhanden ist, erkennt Ihr Emulator automatisch alle Spiele im Ordner "3DS-Spiele" und zeigt sie ordentlich in Ihrer Bibliothek an! 🎯

## 💡 Portable Konfiguration (Empfohlen)


**Vor dem ersten Start** erstellen Sie einen Ordner namens `user` im Stammverzeichnis der Azahar-Installation. Dadurch wird die Installation vollständig portabel.

### Vorteile des portablen Modus

| Aspekt | Normaler Modus | Portabler Modus |
|--------|----------------|-----------------|
| **Konfigurationen** | Im System gespeichert | Im Ordner gespeichert |
| **Speicherstände** | Auf dem Computer verteilt | In einem Ordner zentralisiert |
| **Portabilität** | ❌ An das System gebunden | ✅ Leicht beweglich |
| **Sicherung** | Schwerer zu finden | Einfach zu sichern |

### Struktur nach Erstellung des portablen Ordners

```
📁 Azahar/
├── 🎮 Azahar.exe
├── 📁 user/              # ← Erstellen Sie diesen Ordner!
│   ├── 📁 bis/
│   ├── 📁 games/
│   ├── 📁 profiles/
│   └── 📁 system/
└── 📄 Andere Dateien...
```


**Alle Ihre Daten** (Konfigurationen, Speicherstände, Profile) werden im Ordner `user` gespeichert, was die Verwaltung und Sicherung erheblich erleichtert!

### Erstellungsschritte

1. Navigieren Sie zum Azahar-Installationsordner
2. Erstellen Sie einen neuen Ordner mit dem genauen Namen `user`
3. Starten Sie Azahar — es erkennt den portablen Modus automatisch

> **📝 Hinweis**: Dies muss **vor** dem ersten Start erfolgen, um wirksam zu werden!

## ⚙️ Schritt 3: Installation und erster Start

### Windows-Voraussetzungen

### Erster Start
1. Führen Sie `azahar.exe` aus
2. Legen Sie Ihren Spieleordner fest (doppelklicken Sie auf das Menü, fügen Sie den Ordner "3DS-Spiele" hinzu)

## ⚙️ Schritt 4: Optimale Konfiguration

### Allgemeine Einstellungen
```
Emulation → Konfigurieren → Allgemein
```
- **Beenden bestätigen, während die Emulation läuft** : ✅ Aktiviert
- **Emulation im Hintergrund anhalten** : ✅ Aktiviert (optional)
- **Discord-Präsenz aktivieren** : ✅ Aktiviert (optional)

### Systemkonfiguration
```
Emulation → Konfigurieren → System
```
- **Region** : Europa (oder Ihre Region)
- **Sprache** : Ihre Sprache
- **Konsolen-ID** : Zufällig (automatisch generiert)
- **New 3DS aktivieren** : ✅ Aktiviert (für bessere Leistung)

### Empfohlene Grafikeinstellungen

#### Grafik-Tab
```
Grafik → Allgemein
- Interne Auflösung: 2x Nativ (400x480) oder höher. Höhere Werte erhöhen die GPU-Auslastung.
- Lineare Filterung aktivieren: ✅ Aktiviert
→ Allgemein
```

#### Layout-Tab

```
Grafik → Layout
```


Dieser Abschnitt ermöglicht es Ihnen, die Anzeige der beiden 3DS-Bildschirme nach Ihren visuellen Vorlieben und Ihrer Hardware anzupassen.

### Bildschirm-Layouts

**Voreingestellte Optionen:**

| Modus | Beschreibung | Empfehlung |
|------|-------------|----------------|
| **Standard** | Standard-Nintendo-Layout | ✅ **Anfänger** |
| **Einzelbildschirm** | Zeigt nur den aktiven Bildschirm | Fokus auf das Gameplay |
| **Breitbild** | Erstreckt sich über die gesamte Breite | Breitbildmonitore |
| **Nebeneinander** | Horizontale Bildschirme | **Empfohlen zum Spielen** |
| **Getrennte Fenster** | Zwei unabhängige Fenster | Multi-Monitor-Setups |
| **Gestapelt** | Bildschirme vertikal gestapelt | Platzsparend |
| **Benutzerdefiniertes Layout** | Manuelle Konfiguration | ⭐ **Am flexibelsten** |

### Konfiguration des benutzerdefinierten Layouts


**Oberer Bildschirm:**
- **Position X/Y** : `0px, 0px` (obere linke Ecke)
- **Breite/Höhe** : `800px, 480px` (ideales 4:3-Verhältnis)

**Unterer Bildschirm:**
- **Position X/Y** : `80px, 500px` (leicht zentriert)
- **Breite/Höhe** : `640px, 480px` (proportional)

**Deckkraft des unteren Bildschirms** : `100%` (vollständig sichtbar)

### Anzeigeeinstellungen

#### Allgemeine Optionen
```
Bildschirme → Einrichtung
```

**Empfohlene Anpassungen:**
- **Bildschirme tauschen** : ❌ Deaktiviert (DS-Logik beibehalten)
- **Bildschirme nach oben drehen** : ❌ Deaktiviert
- **Bildschirmlücke** : `0.00` bis `4.00` je nach Vorliebe
- **Skalierung des Hauptbildschirms** : `4.00` (größerer primärer Bildschirm)
- **Position des sekundären Bildschirms** : `Unten rechts` (Touch-Bereich)

#### Einzelbildschirm-Modus


**Anwendungsfälle:**
- Spiele, die nur einen Hauptbildschirm verwenden
- Render-Ressourcen sparen
- Fokus auf die Hauptaktion

**Konfiguration:**
- **Strecken** : ☑️ Für beide Bildschirme aktiviert
- **Linker/Rechter Rand** : `0px` (Vollbild)
- **Oberer/Unterer Rand** : `0px` (maximale Nutzung)

> **💡 Praktischer Tipp**: Testen Sie verschiedene Layouts je nach Spiel. RPGs profitieren oft von benutzerdefinierten Layouts, während Action-Spiele den Nebeneinander-Modus bevorzugen.

#### Erweitert-Tab
```
Grafik → Erweitert
- Grafik-API: OpenGL (empfohlen) oder Vulkan
- Hardware-Renderer aktivieren: ✅ Aktiviert
- Hardware-Shader aktivieren: ✅ Aktiviert
- Genaue Multiplikation aktivieren: ✅ Aktiviert
- Festplatten-Shader-Cache verwenden: ✅ Aktiviert
- VSync aktivieren: ✅ Aktiviert
```

### Audio-Konfiguration
```
Audio
- Emulation: HLE
```

### Steuerungs-Konfiguration

#### Automatische Erkennungsmethode
```
Steuerung → Konfigurieren
1. Klicken Sie auf "Auto-Konfiguration"
2. Drücken Sie die Tasten auf Ihrem Controller
3. Testen Sie alle Eingaben
```

## ⚙️ Schritt 🌐 Multiplayer (Schnelleinrichtung)

Sie können Citra/Azahar mit einem externen Multiplayer-Dienst verbinden, indem Sie die lokale Konfiguration bearbeiten. Warnung: Schließen Sie Citra/Azahar vollständig, bevor Sie Konfigurationsdateien bearbeiten, da Ihre Änderungen sonst überschrieben werden.

1. Öffnen Sie den Konfigurationsordner:

   - Bei einer Standard-Windows-Installation: `C:\\Users\\<IhrBenutzer>\\AppData\\Roaming\\citra\\config\\`
   - Bei einer portablen Installation: Öffnen Sie den `user`-Ordner im Stammverzeichnis von Azahar/Citra

2. Bearbeiten Sie die Datei `qt-config.ini` (mit Notepad oder einem Texteditor) und ändern/fügen Sie diese beiden Zeilen hinzu:

```
web_api_url\\default=false
web_api_url=http://88.198.47.46:5000/
```

3. Speichern und schließen Sie den Editor und starten Sie Citra/Azahar neu.

Hosten eines dedizierten Raums (Windows `host.bat`-Beispiel)

Wenn Sie über eine dedizierte Batch-Datei hosten möchten, erstellen oder bearbeiten Sie eine `host.bat` und fügen Sie das folgende Beispiel ein. Sie können den Raumnamen und die Titel-ID ändern.

```
citra-room ^
  --room-name "Ihr Raumname" ^
  --room-description "Alle Spiele" ^
  --preferred-game "Super Smash Bros" ^
  --preferred-game-id "00040000000EDF00" ^
  --port 24872 ^
  --max_members 16 ^
  --token "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" ^
  --enable-citra-mods ^
  --web-api-url http://88.198.47.46:5000 ^
  --ban-list-file "PFAD_ZUR_BAN_LIST_DATEI_HIER_EINFÜGEN"
pause
```

Hinweise:

- Ersetzen Sie `--token` bei Bedarf durch Ihr echtes Token.
- `--preferred-game-id` entspricht der Titel-ID des Spiels (16 Hex-Ziffern). Lassen Sie es leer, um alle Spiele zu akzeptieren.
- `--web-api-url` muss auf den API-Server verweisen (hier: `http://88.198.47.46:5000`).

Mit diesen Schritten verwendet Citra/Azahar den angegebenen Multiplayer-Dienst und die `host.bat` ermöglicht es Ihnen, einen Raum von Ihrem Computer aus zu hosten.

### Unterstützte Formate
- **.CCI** : Einziges von meinen ROMs mit Azahar unterstütztes Format aufgrund von Anti-Piraterie-Beschränkungen


## ❓ FAQ - Häufig gestellte Fragen

### Allgemeine Fragen

**F: Kann Azahar jedes 3DS-Spiel ausführen?**  
**A:** Ungefähr 90 % der 3DS-Spiele laufen gut bis perfekt. Überprüfen Sie die Kompatibilitätsdatenbank für Ihren spezifischen Titel.

**F: Funktioniert stereoskopisches 3D?**  
**A:** Ja, mit 3D-fähigen Displays oder im Nebeneinander-Modus für VR.

**F: Kann ich meine echten 3DS-Speicherstände verwenden?**  
**A:** Ja — mit Checkpoint oder JKSM können Sie Speicherstände in beide Richtungen übertragen.

### Technische Fragen

**F: Warum sind einige Spiele langsam?**  
**A:** 3DS-Spiele sind für spezifische Hardware optimiert. Die Emulation ist anspruchsvoller, insbesondere bei komplexen Titeln.

**F: OpenGL oder Vulkan?**  
**A:** OpenGL ist stabiler und kompatibler. Vulkan kann auf modernen GPUs eine bessere Leistung bieten.

**F: Verbessert die Aktivierung des New 3DS-Modus alles?**  
**A:** Hauptsächlich für Spiele, die nativ New 3DS-Funktionen nutzen (Xenoblade, Monster Hunter usw.) und bestimmte Homebrews.

### Häufige Probleme

**F: "Systemregion konnte nicht ermittelt werden"?**  
**A:** Installieren Sie Systemdateien (aes_keys.txt) und konfigurieren Sie die Region in den Einstellungen.

**F: HD-Texturen werden nicht angezeigt?**  
**A:** Überprüfen Sie, ob "Benutzerdefinierte Texturen" aktiviert ist und die Titel-ID mit dem Ordner übereinstimmt.

**F: Wie kann die Leistung auf Android verbessert werden?**  
**A:** Verwenden Sie Citra MMJ, verringern Sie die Auflösung und aktivieren Sie bei Bedarf das Frame-Skipping.

Viel Spaß mit Ihren 3DS-Spielen in High Definition! 🎮✨
