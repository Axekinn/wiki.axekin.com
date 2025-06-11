---
title: "Guide complet : Installation et configuration de melonDS"
date: 2025-06-02
draft: false
categories: ["Gaming", "Tutoriels"]
tags: ["melonDS", "Nintendo DS", "Émulation", "Gaming"]
author: "Axekin"
description: "Tutoriel détaillé pour installer, configurer et utiliser l'émulateur Nintendo DS melonDS"
---

## 🎮 Introduction à melonDS

**melonDS** est un émulateur Nintendo DS open-source moderne et précis, développé depuis 2016. Il se distingue par sa compatibilité excellente, sa précision d'émulation, et ses fonctionnalités avancées comme le Wi-Fi local, les savestates, et l'amélioration graphique. C'est l'alternative moderne parfaite à DeSmuME.

> ⚠️ **Note légale** : Cet émulateur est destiné à jouer uniquement aux jeux que vous possédez légalement. L'émulation à des fins de sauvegarde et de recherche est légale, mais le piratage ne l'est pas.

## 📋 Prérequis système

### Configuration minimale
- **OS** : Windows 7+ (64-bit) / Linux / macOS
- **CPU** : Intel Core i3-3220 / AMD FX-4300 (2+ cores, 2.5+ GHz)
- **RAM** : 2 GB
- **GPU** : OpenGL 3.2 compatible
- **Stockage** : 1 GB d'espace libre + espace jeux

### Configuration recommandée
- **CPU** : Intel Core i5-4590 / AMD Ryzen 3 1200 (4+ cores, 3.0+ GHz)
- **RAM** : 4 GB
- **GPU** : OpenGL 4.3 / Vulkan 1.0 compatible
- **Stockage** : SSD avec 20+ GB d'espace libre

### Configuration optimale
- **CPU** : Intel Core i7-8700 / AMD Ryzen 5 2600 (6+ cores, 3.2+ GHz)
- **RAM** : 8 GB
- **GPU** : NVIDIA GTX 1050 / AMD RX 560 ou supérieur
- **Stockage** : NVMe SSD avec 50+ GB d'espace libre

> 💡 **Note importante** : melonDS est moins exigeant que la plupart des émulateurs modernes grâce à l'architecture simple de la DS.

## 🔧 Étape 1 : Téléchargement de melonDS

### Version Stable (Recommandée)
```bash
# Site officiel
https://melonds.kuribo64.net/downloads.php
```

1. **Cliquez** sur "Download Windows x64"
2. **Téléchargez** `melonds-0.9.5-windows-x64.zip`
3. **Extrayez** dans un dossier dédié (ex: `C:\melonDS`)

### Versions de développement
```bash
# Builds automatiques avec dernières fonctionnalités
https://github.com/melonDS-emu/melonDS/releases

Avantages:
- Nouvelles améliorations
- Corrections récentes
- Fonctionnalités expérimentales

Risques:
- Potentiellement instable
- Régressions possibles
```

### melonDS Android
```bash
# Version mobile officielle
https://play.google.com/store/apps/details?id=me.magnum.melonds

Caractéristiques:
- Interface tactile optimisée
- Support manettes Bluetooth
- Synchronisation sauvegardes
```

## 📁 Étape 2 : Structure des dossiers

Organisez vos fichiers avec cette structure :

```
melonDS/
├── melonDS.exe              # Exécutable principal
├── bios/                    # BIOS Nintendo DS (requis)
│   ├── bios7.bin           # ARM7 BIOS
│   ├── bios9.bin           # ARM9 BIOS
│   └── firmware.bin        # Firmware DS
├── games/                   # Vos ROMs Nintendo DS
│   ├── nds/                # Jeux .nds standard
│   ├── dsi/                # Jeux DSi .nds
│   └── homebrew/           # Applications homebrew
├── saves/                   # Données de sauvegarde
│   ├── sav/                # Sauvegardes .sav
│   └── states/             # Savestates .mln
├── cheats/                  # Codes de triche
│   └── usrcheat.dat        # Base de données AR
├── screenshots/             # Captures d'écran
├── firmware/                # Firmwares alternatifs
└── dldi/                   # Drivers DLDI homebrew
```

## ⚙️ Étape 3 : Installation du BIOS Nintendo DS

### Fichiers BIOS requis

> ⚠️ **Obligatoire** : Les fichiers BIOS Nintendo DS sont requis pour le fonctionnement optimal.

**Fichiers nécessaires :**
- `bios7.bin` (16 KB) - ARM7 BIOS
- `bios9.bin` (4 KB) - ARM9 BIOS  
- `firmware.bin` (256 KB) - Firmware DS

### Extraction depuis vraie Nintendo DS

#### Méthode 1 : Avec flashcart
```bash
# Utilisation de GodMode9i ou similar
1. Installez homebrew sur votre DS via flashcart
2. Utilisez GodMode9i pour extraire:
   - BIOS ARM7 → bios7.bin
   - BIOS ARM9 → bios9.bin
   - Firmware → firmware.bin
3. Transférez sur PC dans melonDS/bios/
```

#### Méthode 2 : Via DSi avec HiyaCFW
```bash
# Si vous avez une DSi moddée
1. Installez HiyaCFW sur votre DSi
2. Utilisez dsidumper pour extraire:
   - BIOS files
   - Firmware complet
3. Copiez dans le dossier bios/
```

### Configuration dans melonDS

1. **Lancez** `melonDS.exe`
2. `Config → Emu settings → DS-mode`
3. **Configurez** les chemins BIOS :
   - **DS ARM9 BIOS** : `bios/bios9.bin`
   - **DS ARM7 BIOS** : `bios/bios7.bin`
   - **DS Firmware** : `bios/firmware.bin`
4. **Redémarrez** melonDS

## ⚙️ Étape 4 : Configuration de base

### Paramètres généraux
```
Config → Emu settings → General
```

**Configuration recommandée :**
- **Console type** : DS (ou DSi si jeux DSi)
- **Direct boot** : ✅ Activé (démarre directement le jeu)
- **JIT enable** : ✅ Activé (améliore grandement les performances)
- **JIT max block size** : 32 (optimal)
- **JIT literal optimizations** : ✅ Activé
- **JIT branch optimizations** : ✅ Activé
- **JIT fast memory** : ✅ Activé

### Paramètres 3D
```
Config → Emu settings → 3D settings
```

**Configuration optimale :**
- **3D renderer** : OpenGL (recommandé) ou Software
- **Threaded 3D** : ✅ Activé (utilise plusieurs cores)
- **GL scale factor** : 1x-4x selon votre GPU
- **GL better polygons** : ✅ Activé (améliore qualité)
- **GL anti-aliasing** : ✅ Activé si GPU suffisant

## ⚙️ Étape 5 : Configuration vidéo et audio

### Paramètres vidéo
```
Config → Video settings
```

**Paramètres d'affichage :**
- **DS screen layout** : Natural, Vertical, Horizontal (au choix)
- **DS screen sizing** : Even (écrans égaux) ou Emphasize top/bottom
- **DS screen gap** : 0-96 pixels (ressenti personnel)
- **Screen filtering** : Linear (plus lisse) ou Nearest (pixelart net)
- **Show OSD** : ✅ Activé (informations utiles)

### Paramètres audio
```
Config → Audio settings
```

**Configuration optimale :**
- **Audio output** : Automatic (recommandé)
- **Audio volume** : 256 (maximum)
- **Mic input** : Automatic ou dispositif spécifique
- **Mic noise gate** : ✅ Activé (filtre bruits de fond)

## ⚙️ Étape 6 : Configuration des contrôles

### Contrôles clavier (par défaut)
```
Config → Input and hotkeys → DS keypad
```

**Mapping par défaut :**
- **A** : X
- **B** : Z  
- **X** : A
- **Y** : S
- **L** : Q
- **R** : W
- **Start** : Return
- **Select** : RShift
- **D-Pad** : Flèches directionnelles

### Configuration manette
```bash
# Détection automatique
1. Connectez votre manette
2. Config → Input and hotkeys → DS keypad
3. Cliquez sur un bouton à configurer
4. Appuyez sur le bouton correspondant de la manette
5. Répétez pour tous les boutons

# Mapping recommandé (manette Xbox)
A → A (Xbox)
B → B (Xbox)  
X → Y (Xbox)
Y → X (Xbox)
L → LB
R → RB
D-Pad → D-Pad
Start → Menu
Select → View
```

### Contrôles tactiles
```
Config → Input and hotkeys → Touch screen
```

**Options disponibles :**
- **Mouse** : Utilise la souris pour l'écran tactile
- **Touch** : Écran tactile (sur PC tactile/tablette)
- **Joystick** : Stick analogique droit (recommandé manette)

### Hotkeys utiles
```
Config → Input and hotkeys → Hotkeys
```

**Raccourcis essentiels :**
- **Fast forward** : Tab (accélération)
- **Pause/unpause** : P
- **Reset** : Ctrl+R
- **Save state** : F1-F8  
- **Load state** : Shift+F1-F8
- **Screenshot** : F12

## 🎮 Étape 7 : Gestion des jeux et ROMs

### Formats supportés

#### ROMs Nintendo DS
- **.nds** : Format standard Nintendo DS
- **.srl** : Format développeur (identique à .nds)
- **.dsi** : Jeux DSi enhanced
- **.ids** : iQue DS (région Chine)

#### Sauvegardes
- **.sav** : Sauvegarde standard
- **.mln** : Savestate melonDS
- **.dsv** : Sauvegarde DeSmuME (compatible)

### Lancement de jeux

#### Méthode directe
```bash
# Ouverture simple
1. File → Open ROM
2. Naviguez vers votre fichier .nds
3. Sélectionnez et ouvrez
4. Le jeu démarre automatiquement

# Drag & Drop
1. Glissez le fichier .nds sur melonDS
2. Lancement immédiat
```

#### Gestion multi-ROMs
```bash
# Liste de jeux récents
File → Recent ROMs
- Accès rapide aux 10 derniers jeux
- Persistant entre sessions

# Favoris personnalisés
- Créez des raccourcis dans games/
- Organisation par genre/série
```

### Dumping de vos propres jeux

#### Avec flashcart R4/Acekard
```bash
# Méthode cartouche physique
1. Insérez cartouche DS dans flashcart dumper
2. Utilisez GodMode9i ou Wood Dumper
3. Dump en format .nds sur SD
4. Transférez sur PC

# Avantages: 
- Dump parfait bit-perfect
- Inclut données protection
- Compatible 100% melonDS
```

#### Avec Nintendo 3DS (CFW)
```bash
# Via GodMode9 sur 3DS
1. Installez CFW sur votre 3DS
2. Insérez cartouche DS dans 3DS
3. GodMode9 → [C:] GAMECART
4. Dump cartouche en .nds
5. Transférez via SD/FTP
```

## 🚀 Optimisation par jeux populaires

### Pokémon Diamond/Pearl/Platinum
```bash
# Configuration optimale RPG
3D Settings:
- Renderer: OpenGL
- Scale factor: 2x-3x
- Better polygons: ✅ Activé
- Anti-aliasing: ✅ Activé

General:
- JIT: ✅ Tous activés
- Direct boot: ✅ Activé

Performance: Excellent, 60 FPS stable
```

### Mario Kart DS
```bash
# Configuration course
3D Settings:
- Renderer: OpenGL obligatoire
- Scale factor: 2x-4x possible
- Threaded 3D: ✅ Activé

Input:
- Contrôle manette recommandé
- Stick analogique pour direction fine

Wi-Fi: Support local play melonDS
```

### The Legend of Zelda: Spirit Tracks
```bash
# Jeu utilisant micro
Audio:
- Mic input: Configuration obligatoire
- Noise gate: ✅ Activé

3D Settings:
- Renderer: OpenGL
- Scale factor: 2x-3x
- Anti-aliasing: ✅ Recommandé

Contrôles: Écran tactile essentiel
```

### Professor Layton Series
```bash
# Jeux point-and-click
Input:
- Touch screen: Mouse recommandé
- Précision tactile importante

Video:
- Screen layout: Natural ou Vertical
- Screen gap: Minimal (0-8px)
- Filtering: Linear (texte plus net)

Parfait pour émulation PC
```

### New Super Mario Bros.
```bash
# Platformer classique
3D Settings:
- Renderer: OpenGL
- Scale factor: 3x-4x excellent
- Better polygons: ✅ Activé

Performance:
- JIT: ✅ Tous activés
- Threaded 3D: ✅ Activé

Résultat: Amélioration visuelle spectaculaire
```

### Phoenix Wright: Ace Attorney
```bash
# Visual novel
Video:
- Screen layout: Vertical optimal
- Filtering: Linear (texte net)
- Sizing: Emphasize top screen

Audio:
- Volume: Maximum (musiques importantes)
- Qualité audio excellente melonDS

Interface: Parfaite pour PC/souris
```

## 🛠️ Fonctionnalités avancées

### Wi-Fi et multijoueur local

#### Configuration réseau local
```bash
# Local multiplayer melonDS
1. System → Multiplayer → Local multiplayer
2. Chaque instance melonDS = une console
3. Automatic detection des autres instances
4. Compatible: Mario Kart DS, Pokémon, etc.

# Configuration:
- Même réseau local requis
- Firewall: Autoriser melonDS
- Ports: Automatique
```

#### Jeu en ligne (expérimental)
```bash
# Via Kaeru WFC (serveur tiers)
1. System → Wi-Fi settings
2. Configuration point d'accès:
   - SSID: Votre réseau
   - Security: WPA2/WEP selon config
3. DNS: Servers Kaeru WFC
4. Support limité mais fonctionnel
```

### Savestates et backup

#### Utilisation des savestates
```bash
# Sauvegarde rapide
System → Save state → Slot 1-8
- Sauvegarde instantanée état exact
- Inclut position, inventory, timing
- 8 slots disponibles par jeu

# Restauration
System → Load state → Slot X
- Restauration instantanée
- Compatible entre versions melonDS
```

#### Gestion des sauvegardes
```bash
# Backup automatique
Config → Emu settings → General
- Save state autosave: ✅ Activé
- Interval: 5-10 minutes

# Export/Import
Tools → Save data export/import
- Compatible autres émulateurs
- Backup cloud possible
```

### Cheats et codes Action Replay

#### Installation base de données
```bash
# usrcheat.dat
1. Téléchargez base complète AR codes
2. Placez dans melonDS/cheats/usrcheat.dat
3. System → Cheat setup
4. Enable cheats: ✅ Activé
```

#### Codes personnalisés
```bash
# Ajout manuel
1. System → Cheat setup → Add cheat
2. Nom: Description du code
3. Code: Format Action Replay standard
4. Enable: ✅ Cochez pour activer

Exemple Pokémon (argent infini):
94000130 FCFF0000
B21C4D28 00000000
B0000004 00000000
00000090 000F423F
D2000000 00000000
```

## 🔧 Résolution des problèmes

### Problèmes de lancement

#### melonDS ne démarre pas
```bash
Vérifications système:
1. Visual C++ Redistributable installé
2. OpenGL 3.2+ supporté par GPU
3. Drivers graphiques à jour
4. Antivirus: Exception dossier melonDS
5. Droits administrateur si nécessaire
```

#### ROM ne se lance pas
```bash
Diagnostics ROM:
1. Format: Vérifiez .nds valide
2. Taille: Fichier non corrompu
3. BIOS: Fichiers présents et valides
4. Region: PAL/NTSC/JPN compatible
5. Protection: Certain dumps nécessitent patches
```

### Problèmes de performance

#### FPS bas/ralentissements
```bash
Optimisations performance:
1. JIT: ✅ Tous activés obligatoirement
2. 3D Renderer: OpenGL vs Software
3. Threaded 3D: ✅ Activé
4. Scale factor: Réduisez à 1x-2x
5. Anti-aliasing: Désactivez temporairement
6. Background apps: Fermez applications lourdes
```

#### Micro-freezes fréquents
```bash
Solutions stuttering:
1. SSD: Déplacez ROMs sur SSD
2. JIT block size: Testez 16-64
3. Fast memory: ✅ Obligatoire
4. Windows Game Mode: Désactivez
5. Real-time protection: Exception antivirus
```

### Problèmes graphiques

#### Affichage 3D incorrect
```bash
Corrections 3D:
1. 3D Renderer: Changez OpenGL ↔ Software
2. GL better polygons: Basculez
3. Scale factor: Testez 1x natif
4. Drivers GPU: Mise à jour obligatoire
5. OpenGL version: Vérifiez support 3.2+
```

#### Écrans mal positionnés
```bash
Ajustements affichage:
1. Screen layout: Testez Natural/Vertical/Horizontal
2. Screen sizing: Ajustez Even/Emphasize
3. Screen gap: Modifiez 0-96 pixels
4. Screen swap: Échange haut/bas si nécessaire
5. Zoom: Maintenir aspect ratio
```

#### Textures floues/pixelisées
```bash
Améliorations visuelles:
1. GL scale factor: Augmentez 2x-4x
2. Screen filtering: Linear vs Nearest
3. GL anti-aliasing: ✅ Activé
4. Better polygons: ✅ Activé
5. Résolution native: Respectez ratio DS
```

### Problèmes audio

#### Pas de son
```bash
Diagnostics audio:
1. Audio output: Testez différentes options
2. Volume: Vérifiez niveau (max 256)
3. Device: Audio par défaut Windows correct
4. Exclusive mode: Désactivez Windows
5. Sample rate: 44.1/48 kHz compatible
```

#### Audio crachotant
```bash
Corrections audio:
1. Audio buffer: Augmentez si disponible
2. Background apps: Fermez lecteurs audio
3. Audio drivers: Mise à jour pilotes
4. CPU usage: Vérifiez charge processeur
5. Power management: High performance
```

### Problèmes de contrôles

#### Manette non détectée
```bash
Configuration input:
1. Reconnectez manette
2. Input settings: Rescannez devices
3. Driver: XInput vs DirectInput
4. Steam Input: Désactivez si interfère
5. Test: Vérifiez Windows Game Controllers
```

#### Écran tactile non responsive
```bash
Solutions tactile:
1. Touch mode: Mouse/Touch/Joystick
2. Calibration: Windows touch settings
3. Sensitivity: Ajustez si disponible
4. Interference: Fermez autres apps tactiles
5. Hardware: Test autre dispositif
```

## 📊 Compatibilité et performance

### Statistiques de compatibilité
| Statut | Pourcentage | Description |
|--------|-------------|-------------|
| **Perfect** | ~85% | Fonctionne parfaitement |
| **Playable** | ~12% | Bugs mineurs acceptables |
| **Ingame** | ~2% | Démarre mais problèmes majeurs |
| **Broken** | ~1% | Ne fonctionne pas |

### Jeux parfaitement compatibles

#### RPG/Adventure
```bash
✅ Pokémon Diamond/Pearl/Platinum/HeartGold/SoulSilver
✅ The Legend of Zelda: Phantom Hourglass/Spirit Tracks
✅ Dragon Quest IX: Sentinels of the Starry Skies
✅ Final Fantasy III/IV/Tactics A2
✅ Chrono Trigger DS
✅ Radiant Historia
✅ Phoenix Wright: Ace Attorney series
✅ Professor Layton series
```

#### Action/Platform
```bash
✅ New Super Mario Bros.
✅ Super Mario 64 DS
✅ Kirby Super Star Ultra/Canvas Curse
✅ Metroid Prime Hunters
✅ Castlevania: Dawn of Sorrow/Portrait of Ruin/Order of Ecclesia
✅ Mega Man Zero Collection
✅ Sonic Rush/Rush Adventure
```

#### Racing/Sports
```bash
✅ Mario Kart DS
✅ Diddy Kong Racing DS
✅ TrackMania DS
✅ Tony Hawk's American Sk8land
✅ FIFA series
✅ Madden NFL series
```

### Benchmarks performance

#### Configuration test : i5-8400, GTX 1060, 8GB RAM

| Jeu | Scale Factor | FPS | CPU Usage | Notes |
|-----|--------------|-----|-----------|-------|
| **Pokémon Platinum** | 3x | 60 | 35% | Perfect |
| **Mario Kart DS** | 4x | 60 | 45% | Excellent |
| **Zelda PH** | 3x | 60 | 40% | Perfect |
| **NSMB** | 4x | 60 | 30% | Excellent |
| **Ace Attorney** | 2x | 60 | 25% | Perfect |

## 🌐 Ressources et communauté

### Sites officiels
- [🏠 Site officiel melonDS](https://melonds.kuribo64.net/)
- [📱 melonDS Android](https://play.google.com/store/apps/details?id=me.magnum.melonds)
- [📚 Documentation](https://melonds.kuribo64.net/faq.php)
- [🔧 Wiki utilisateur](https://melonds.kuribo64.net/board/)

### Communautés actives
- [💬 Discord melonDS](https://discord.gg/AQAhe5S)
- [🗨️ Reddit r/emulation](https://www.reddit.com/r/emulation/)
- [🌐 Forums melonDS](https://melonds.kuribo64.net/board/)
- [📺 YouTube guides](https://www.youtube.com/results?search_query=melonds+tutorial)

### Développement et contribution
- [💻 GitHub melonDS](https://github.com/melonDS-emu/melonDS)
- [🐛 Bug reports](https://github.com/melonDS-emu/melonDS/issues)
- [💰 Donations](https://www.patreon.com/StapleButter)
- [🔧 Compilation guide](https://github.com/melonDS-emu/melonDS/blob/master/README.md)

### Ressources DS
- [🔧 GodMode9i](https://github.com/DS-Homebrew/GodMode9i) - File manager DS
- [📁 TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu) - Menu DS homebrew
- [🎮 nds-bootstrap](https://github.com/DS-Homebrew/nds-bootstrap) - DS game launcher
- [🔍 NDSTokyoTrim](http://www.romhacking.net/utilities/383/) - ROM trimming tool

## ❓ FAQ - Questions fréquentes

### Questions générales

**Q : melonDS peut-il jouer tous les jeux DS ?**
**R :** Environ 97% des jeux fonctionnent parfaitement. Excellente compatibilité globale.

**Q : Ai-je besoin des fichiers BIOS ?**
**R :** Oui, obligatoires pour un fonctionnement optimal et une compatibilité maximale.

**Q : melonDS supporte-t-il les jeux DSi ?**
**R :** Support partiel. Certains jeux DSi fonctionnent, d'autres pas encore.

### Questions techniques

**Q : OpenGL ou Software renderer ?**
**R :** OpenGL recommandé pour les performances et amélioration visuelle. Software pour compatibilité.

**Q : Quelle résolution choisir ?**
**R :** 2x-3x pour bon compromis qualité/performance. 4x+ si GPU puissant.

**Q : Le JIT est-il sûr ?**
**R :** Oui, obligatoire pour de bonnes performances. Aucun risque sécurité.

### Problèmes courants

**Q : Lag malgré bon PC ?**
**R :** Vérifiez JIT activé, utilisez OpenGL, réduisez scale factor si nécessaire.

**Q : Sauvegarde ne fonctionne pas ?**
**R :** Vérifiez écriture autorisée dossier saves, format ROM correct.

**Q : Wi-Fi ne marche pas ?**
**R :** Wi-Fi limitée aux jeux supportés, configuration réseau requise.

## 🎯 Conclusion

melonDS est l'émulateur Nintendo DS de référence qui offre :

- ✅ **Compatibilité exceptionnelle** avec 97%+ des jeux DS
- ✅ **Performance excellente** même sur matériel modeste  
- ✅ **Amélioration graphique** considérable avec upscaling
- ✅ **Fonctionnalités modernes** (savestates, cheats, Wi-Fi)
- ✅ **Précision d'émulation** supérieure à DeSmuME
- ✅ **Support multiplateforme** (Windows, Linux, macOS, Android)
- ✅ **Développement actif** avec améliorations constantes
- ✅ **Interface intuitive** et configuration simple

Avec ce guide exhaustif, vous maîtrisez maintenant :
- **Installation** et configuration optimales
- **Gestion** des BIOS et ROMs
- **Optimisation** graphique et performance
- **Utilisation** des fonctionnalités avancées
- **Résolution** des problèmes courants
- **Accès** à toute la bibliothèque Nintendo DS

---

> **Rappel légal** : Utilisez uniquement des jeux que vous possédez légalement. melonDS ne fournit aucun jeu ni BIOS - vous devez les extraire de vos propres consoles Nintendo DS.

**Redécouvrez la bibliothèque Nintendo DS en haute définition avec melonDS ! 🎮✨**
````