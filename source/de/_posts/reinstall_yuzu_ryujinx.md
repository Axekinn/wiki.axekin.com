---
title: "Wie man Yuzu & Ryujinx neu installiert und dabei seine Spielstände behält"
description: "Vollständige Anleitung zur sauberen Neuinstallation der Nintendo Switch-Emulatoren Yuzu und Ryujinx unter Beibehaltung Ihrer Spielstände"
date: 2025-06-04
lastmod: 2025-06-04
categories: ["PC"]
tags: ["yuzu", "ryujinx", "nintendo-switch", "emulation", "backup", "speichern", "neuinstallation"]
series: ["Emulationsanleitungen"]
author: "Axekin"
draft: false
toc: true
math: false
featured: false
weight: 15
aliases: 
  - /de/reinstall-yuzu-ryujinx/
  - /de/guides/emulator-backup/
summary: "Lernen Sie, wie Sie Yuzu und Ryujinx vollständig neu installieren, ohne Ihre wertvollen Spielstände zu verlieren. Detaillierte Anleitung mit Screenshots und Backup-Methoden."
cover: "covers/yuzu-ryujinx-backup.webp"
image: "covers/yuzu-ryujinx-backup.webp"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

> **⚠️ Wichtig**: Sichern Sie Ihre Daten immer vor jeder Neuinstallation! Diese Anleitung zeigt Ihnen, wie Sie sicher vorgehen.

## Einführung

Manchmal treten bei **Yuzu** oder **Ryujinx** Probleme auf, die eine vollständige Neuinstallation erfordern. Dateibeschädigung, problematische Updates oder einfach der Wunsch, neu anzufangen...

Diese Anleitung erklärt, **wie Sie diese Emulatoren sauber neu installieren**, **ohne Ihre Nintendo Switch-Spielstände zu verlieren**.

### Warum neu installieren?

**Häufige Probleme, die eine Neuinstallation erfordern:**
- Der Emulator startet nicht
- Verschlechterte Leistung nach einem Update
- Beschädigte Konfigurationsdateien
- Anhaltende Grafikprobleme
- Wiederkehrende Fehlermeldungen

## Methode für Yuzu

### Schritt 1: Spieldaten sichern

#### Speicherstände finden

1. **Starten Sie Yuzu** (falls möglich)
2. **Klicken Sie mit der rechten Maustaste** auf das gewünschte Spiel in der Liste
3. Wählen Sie **"Speicherort der Speicherdaten öffnen"**

#### Inhalt sichern

4. **Wählen Sie den gesamten Inhalt** des sich öffnenden Ordners aus (Strg+A)
5. **Kopieren** Sie die Dateien (Strg+C)
6. **Erstellen Sie einen Backup-Ordner** auf Ihrem Desktop oder Ihrer Festplatte
7. **Fügen** Sie den Inhalt in diesen Ordner ein (Strg+V)

**Empfohlene Struktur zur Organisation:**
```
📁 Backup_Yuzu_2025-06-04/
├── 📁 The_Legend_of_Zelda_BOTW/
│   ├── save_data.bin
│   └── andere_Dateien...
├── 📁 Super_Mario_Odyssey/
│   ├── save_data.bin
│   └── andere_Dateien...
└── 📁 Pokemon_Legends_Arceus/
    ├── save_data.bin
    └── andere_Dateien...
```

#### Für alle Spiele wiederholen

8. **Wiederholen Sie diesen Vorgang** für jedes Spiel, dessen Spielstand Sie behalten möchten
9. **Notieren Sie den Namen** jedes Ordners, um die Wiederherstellung zu erleichtern

### Schritt 2: Yuzu-Daten löschen

#### Zugriff auf den Konfigurationsordner

1. Drücken Sie **Windows + R**
2. Geben Sie `%appdata%` ein und drücken Sie **Enter**

#### Yuzu-Ordner löschen

3. Navigieren Sie zum Ordner **"yuzu"**
4. **Löschen Sie diesen Ordner vollständig**
5. **Leeren Sie den Papierkorb**, um Speicherplatz freizugeben

> **💡 Tipp**: Wenn der Ordner verwendet wird, schließen Sie Yuzu vollständig über den Task-Manager.

### Schritt 3: [Yuzu neu installieren](/de/post/yuzu/)

### Schritt 4: Speicherstände wiederherstellen

#### Speicherdateien zurücklegen

1. **Starten** Sie Ihre Spiele einmal, um Speicherordner zu erstellen
2. **Schließen** Sie Yuzu vollständig
3. **Klicken Sie mit der rechten Maustaste** auf jedes Spiel → "Speicherort der Speicherdaten öffnen"
4. **Ersetzen** Sie den Inhalt durch Ihre gesicherten Dateien

**Überprüfung:**
- Starten Sie das Spiel, um zu überprüfen, ob der Spielstand korrekt geladen wird
- Überprüfen Sie Fortschritt, Statistiken usw.

## Methode für Ryujinx

### Schritt 1: Ryujinx-Daten sichern

#### Benutzerspeicherstände finden

1. **Starten Sie Ryujinx**
2. **Klicken Sie mit der rechten Maustaste** auf das gewünschte Spiel
3. Wählen Sie **"Benutzerspeicherverzeichnis öffnen"**

![Ryujinx-Menü](path_save_1.png)
*Speicheroptionen in Ryujinx*

#### Zusätzliche Daten sichern

4. Falls verfügbar, klicken Sie auch auf **"Gerätespeicherverzeichnis öffnen"** und/oder BCAT
5. **Kopieren** Sie den gesamten Inhalt in Ihre Backup-Ordner
6. **Organisieren** Sie nach Spielnamen wie bei Yuzu

### Schritt 2: Ryujinx löschen

#### Konfigurationsordner finden

1. Drücken Sie **Windows + R**
2. Geben Sie `%appdata%` ein und bestätigen Sie
3. Navigieren Sie zum Ordner **"Ryujinx"**
4. **Löschen Sie diesen Ordner vollständig**

### Schritt 3: Neuinstallation und Wiederherstellung

#### [Ryujinx neu installieren](/de/post/ryujinx/)

#### Speicherstände wiederherstellen

4. **Starten Sie jedes Spiel** einmal
5. **Schließen** Sie Ryujinx
6. **Ersetzen** Sie die Speicherdateien durch Ihre Backups
7. **Testen** Sie, ob alles korrekt funktioniert

### Wichtige Überprüfungen

**Vor der Neuinstallation:**
- ✅ Vollständige Backups erstellt
- ✅ Spielnamen notiert
- ✅ Firmware/Schlüssel verfügbar

**Nach der Neuinstallation:**
- ✅ Emulator startet korrekt
- ✅ Spiele erkannt
- ✅ Speicherstände wiederhergestellt
- ✅ Zufriedenstellende Leistung

### Häufige Probleme und Lösungen

#### 🚫 Speicherstände werden nicht erkannt

**Mögliche Ursachen:**
- Falscher Dateispeicherort
- Inkompatible Emulatorversionen
- Beschädigte Dateien

**Lösungen:**
1. Überprüfen Sie den genauen Dateispeicherort
2. Versuchen Sie es mit einer ähnlichen Emulatorversion
3. Verwenden Sie ein älteres Backup

## Fazit

Die Neuinstallation von **Yuzu** und **Ryujinx** unter Beibehaltung Ihrer Spielstände ist ein einfacher Prozess, wenn Sie die richtige Methode befolgen. Das Wichtigste ist, **immer vor dem Handeln zu sichern** und Schritt für Schritt vorzugehen.

### Wichtige Punkte zum Merken

> **🎯 Verfahrensübersicht:**
> 1. **Sichern** Sie alle wichtigen Spieldaten
> 2. **Löschen Sie sauber** die Konfigurationsordner
> 3. **Installieren Sie den Emulator neu** mit einer aktuellen Version
> 4. **Stellen Sie Ihre Speicherstände wieder her** und testen Sie
> 5. **Konfigurieren** Sie nach Ihren Wünschen

### Vorbeugende Wartung

**Um Neuinstallationen zu vermeiden:**
- Regelmäßige, aber vorsichtige Updates
- Wöchentliche automatische Backups
- Leistungsüberwachung
- Regelmäßige Cache-Reinigung

## FAQ - Häufig gestellte Fragen

**F: Kann ich meine Spielstände zwischen Yuzu und Ryujinx übertragen?**
**A:** Ja, es gibt viele Anleitungen im Internet.

**F: Wie lange dauert das gesamte Verfahren?**
**A:** Das hängt ganz von der Anzahl der Spiele ab, die Sie haben.

**F: Was tun, wenn ich vor der Neuinstallation vergessen habe, ein Backup zu erstellen?**
**A:** Überprüfen Sie den Windows-Papierkorb, verwenden Sie Dateiwiederherstellungstools oder stellen Sie aus einem System-Backup wieder her.

---
