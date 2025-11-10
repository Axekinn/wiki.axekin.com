---
title: "Spielen mit Tastatur & Maus auf dem Cemu-Emulator"
description: "Detailliertes Tutorial zur Konfiguration von Tastatur-Maus-Steuerungen auf Cemu mit Mouse2Joystick und ViGEmBus - Schritt-für-Schritt-Anleitung zur Konfiguration"
date: 2025-06-04
lastmod: 2025-06-04
categories: ["PC"]
tags: ["cemu", "wiiu", "tastatur-maus", "mouse2joystick", "vigembus", "emulation", "nintendo"]
series: ["Emulationsleitfäden"]
author: "Axekin"
draft: false
toc: true
math: false
featured: false
weight: 20
aliases: 
  - /de/cemu-keyboard-mouse/
  - /de/guides/cemu-keyboard-mouse/
summary: "Lernen Sie, wie man Wii U-Spiele auf Cemu mit Tastatur und Maus spielt. Vollständige Anleitung mit Mouse2Joystick und detaillierter Konfiguration."
cover: "covers/cemu-keyboard-mouse.webp"
image: "covers/cemu-keyboard-mouse.webp"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

> **⚠️ Wichtiger Hinweis**: Obwohl es möglich ist, wird das Erlebnis mit Tastatur und Maus auf Cemu nicht so angenehm sein wie mit einem Controller. Diese Lösung eignet sich für Spieler, die kein kompatibles Gamepad besitzen.

## Einführung

Das Spielen von **Wii U**-Spielen auf dem **Cemu**-Emulator mit **Tastatur und Maus** erfordert die Verwendung von Drittanbieter-Tools, um einen Controller zu simulieren. Diese Anleitung erklärt, wie man diese Lösung mit **Mouse2Joystick** und **ViGEmBus** konfiguriert.

Diese Methode ist besonders nützlich für:
- Spieler, die keinen kompatiblen Controller haben
- Schnelles Testen von Spielen, ohne in ein Gamepad zu investieren
- Bestimmte Spielgenres, die an Tastatur-Maus angepasst sind

### Allgemeiner Prozess

1. **Herunterladen** von ViGEmBus und Mouse2Joystick
2. **Installieren** von ViGEmBus (virtueller Controller-Treiber)
3. **Konfigurieren** von Mouse2Joystick nach Ihren Wünschen
4. **Einrichten** von Cemu, um die Steuerung zu erkennen
5. **Testen** und Anpassen der Einstellungen

## Voraussetzungen und Downloads

### Erforderliche Software

**Wesentliche Anwendungen:**
- **ViGEmBus**: Treiber für virtuelle Controller
- **Mouse2Joystick**: Wandelt Tastatur-/Maus-Signale in Controller-Signale um
- **Cemu**: Wii U-Emulator (neueste stabile Version)

### Downloads

#### ViGEmBus (Virtueller Controller-Treiber)

**🔗 [ViGEmBus herunterladen](https://github.com/ViGEm/ViGEmBus/releases)**

**Download-Anweisungen:**
1. **Besuchen** Sie die Release-Seite
2. **Laden** Sie die neueste `.msi`-Datei herunter
3. **Beispiel**: `ViGEmBus_Setup_1.17.333.msi`

**ViGEmBus-Funktionen:**
- **Kostenlos** und Open-Source
- **Kompatibel** mit Windows 10/11
- **Stabil** und regelmäßig aktualisiert
- **Erforderlich** zur Simulation von Xbox-Controllern

#### Mouse2Joystick (Steuerungs-Konverter)

**🔗 [Mouse2Joystick herunterladen](https://github.com/memethyl/Mouse2Joystick/releases)**

**Download-Anweisungen:**
1. **Laden** Sie die neueste `.zip`-Datei herunter
2. **Beispiel**: `Mouse2Joystick_v2.3.1.zip`
3. **Extrahieren** Sie sie in einen dedizierten Ordner (z.B. `C:\Tools\Mouse2Joystick\`)

**Mouse2Joystick-Funktionen:**
- **Portabel**: keine Installation erforderlich
- **Anpassbar**: konfigurierbare Tastenbelegung
- **Leichtgewichtig**: minimale Leistungseinbußen
- **Echtzeit**: sofortige Bewegungsumwandlung

## Schritt 1: ViGEmBus-Installation

### Installationsprozess

#### Ausführen des Installers

1. **Suchen** Sie die heruntergeladene `.msi`-Datei
2. **Doppelklicken** Sie, um die Installation zu starten
3. **Akzeptieren** Sie die Administratorberechtigungen, falls Sie dazu aufgefordert werden

#### Installationskonfiguration

**Installationsschritte:**
1. **Willkommen** → Klicken Sie auf "Next"
2. **Lizenzvereinbarung** → Akzeptieren und auf "Next" klicken
3. **Zielordner** → Standard belassen, auf "Next" klicken
4. **Bereit zur Installation** → Klicken Sie auf "Install"
5. **Abgeschlossen** → Klicken Sie auf "Finish"

**Installierte Komponenten:**
- Virtueller Bustreiber
- Erforderliche Systembibliotheken
- Gerätemanagement-Schnittstelle

### Überprüfung der Installation

#### Überprüfung im Geräte-Manager

1. **Rechtsklick** auf "Dieser PC" → **Geräte-Manager**
2. **Erweitern** Sie "Systemgeräte"
3. **Überprüfen** Sie das Vorhandensein von "ViGEmBus Device"


## Schritt 2: Mouse2Joystick-Konfiguration

### Extraktion und erste Verwendung

#### Software-Vorbereitung

1. **Navigieren** Sie zur heruntergeladenen `.zip`-Datei
2. **Rechtsklick** → **Alle extrahieren**
3. **Wählen** Sie einen permanenten Ordner (z.B. `C:\Tools\Mouse2Joystick\`)
4. **Starten** Sie `Mouse2Joystick.exe`

### Benutzeroberfläche und Grundkonfiguration

#### Erster Start

Nach dem Start zeigt Mouse2Joystick eine einfache Benutzeroberfläche an:


#### Empfohlene Konfiguration

**Vorgeschlagene Grundeinstellungen:**

**Abschnitt "Mouse Settings":**
```
Mouse Sensitivity X: 3.0
Mouse Sensitivity Y: 3.0
Mouse Deadzone: 0.1
Invert Y-axis: Nach Belieben
```

**Abschnitt "Controller Settings":**
```
Controller Type: Xbox 360 Controller
Vibration: Deaktiviert (nicht notwendig)
```

### Tastenbelegung

#### Steuerungskonfiguration

**Empfohlene Standardbelegung:**

| Wii U-Aktion | Tastaturtaste | Funktion |
|--------------|---------------|----------|
| **Linker Stick** | WASD | Bewegung |
| **Rechter Stick** | Maus | Kamera |
| **A-Taste** | Leertaste | Hauptaktion |
| **B-Taste** | Linke Strg | Sekundäre Aktion |
| **X-Taste** | E | Interaktion |
| **Y-Taste** | Q | Menü/Inventar |
| **L/R** | Shift/Tab | Schultertasten |
| **ZL/ZR** | Linker/Rechter Klick | Digitale Trigger |

#### Erweiterte Einstellungen

**Mausempfindlichkeit:**
- **FPS-Spiele**: Hohe Empfindlichkeit (4.0-5.0)
- **Abenteuerspiele**: Mittlere Empfindlichkeit (2.5-3.5)
- **Plattformspiele**: Niedrige Empfindlichkeit (1.5-2.5)

**Todeszonen:**
- **Maus**: 0.05-0.15 (vermeidet Mikrobewegungen)
- **Tastatur**: 0.0 (sofortige Reaktion)

## Schritt 3: Cemu-Konfiguration

### Zugriff auf die Steuerungseinstellungen

#### Navigation in Cemu

1. **Starten** Sie Cemu
2. **Menü** "Options" → **"Input Settings"**
3. **Entfernen** Sie alle vorhandenen Controller mit der **"-"**-Taste


### Entfernen vorhandener Controller

#### Konfigurationsbereinigung

**Entfernungsschritte:**
1. **Identifizieren** Sie alle aufgelisteten Controller
2. **Klicken** Sie für jeden Controller auf die **"-"**-Taste
3. **Bestätigen** Sie die Entfernung, falls Sie dazu aufgefordert werden
4. **Überprüfen** Sie, ob die Liste leer ist


### Hinzufügen neuer Controller

#### XInput-Konfiguration (Mouse2Joystick)

**Bei geöffnetem Mouse2Joystick:**
1. **Klicken** Sie auf die **"+"**-Taste
2. **Wählen** Sie "XInput" als API
3. **Wählen** Sie "Controller 1", der erscheinen sollte
4. **Bestätigen** Sie die Auswahl


#### Tastaturkonfiguration (Zusätzliche Tasten)

**Für nicht zugewiesene Tasten:**
1. **Klicken** Sie erneut auf **"+"**
2. **Wählen** Sie "Keyboard" als API
3. **Wählen** Sie "Controller 1"
4. **Konfigurieren** Sie spezifische Wii U-Tasten


### Endgültige Tastenkonfiguration

#### Tastenbelegung in Cemu

**Empfohlene Konfiguration:**

**XInput-Controller (Mouse2Joystick):**
```
Linker Stick: Charakterbewegung
Rechter Stick: Kamerasteuerung
A-Taste: Hauptaktion
B-Taste: Zurück/Abbrechen
X-Taste: Sekundäre Aktion
Y-Taste: Menü
L/R-Schultertaste: Schnelle Trigger
L/R-Trigger: Analoge Trigger
```

**Tastatur-Controller (Sondertasten):**
```
Plus: Enter (Hauptmenü)
Minus: Escape (Pause)
Home: Tab (Home-Menü)
Screenshot: F12
```

## Fazit

Das Spielen von **Wii U**-Spielen auf **Cemu** mit Tastatur und Maus ist dank **Mouse2Joystick** und **ViGEmBus** möglich. Obwohl das Erlebnis nicht für alle Spiele optimal ist, ermöglicht diese Lösung, den ausgezeichneten Wii U-Katalog zu entdecken, ohne in einen Controller zu investieren.


### Abschließende Tipps

**Für ein besseres Erlebnis:**
- Beginnen Sie mit angepassten Spielen (Zelda, RPG)
- Nehmen Sie sich Zeit, um die Empfindlichkeiten anzupassen
- Speichern Sie Ihre Konfigurationen
- Erwägen Sie, irgendwann einen Controller zu kaufen

## FAQ - Häufig gestellte Fragen

**F: Funktioniert diese Methode mit allen Wii U-Spielen?**
A: Nein, einige Spiele erfordern für ein angemessenes Erlebnis unbedingt einen Controller (Mario Kart, Smash Bros, etc.).

**F: Kann ich diese Konfiguration für andere Emulatoren verwenden?**
A: Ja, Mouse2Joystick funktioniert mit den meisten Emulatoren, die XInput unterstützen.

**F: Ist die Latenz signifikant?**
A: Die Latenz ist im Allgemeinen gering, kann aber je nach Ihrer Hardwarekonfiguration variieren.

**F: Muss ich Mouse2Joystick ständig geöffnet lassen?**
A: Ja, Mouse2Joystick muss während des Spielens geöffnet bleiben, um die Controller-Simulation aufrechtzuerhalten.

**F: Beeinflusst diese Methode die Leistung von Cemu?**
A: Die Auswirkungen sind minimal, da Mouse2Joystick sehr ressourcenschonend ist.
