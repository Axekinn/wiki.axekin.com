---
title: "Guide complet : Installation et configuration de Citra"
date: 2025-06-02
draft: false
categories: ["gaming", "Tutoriels"]
tags: ["Citra", "Nintendo 3DS", "Émulation", "Gaming"]
author: "Axekin"
description: "Tutoriel détaillé pour installer, configurer et utiliser l'émulateur Nintendo 3DS Citra"
series: ["Emulation Guides"]
toc: true
math: false
featured: false
weight: 20
aliases: 
  - /fr/citra-cheats-mods/
  - /fr/guides/citra-modding/
summary: "Learn how to install cheat codes and game modifications on Citra emulator. Detailed tutorial with folder structure and installation steps."
cover: "/images/covers/citra-cheats-mods.webp"
image: "/images/covers/citra-cheats-mods.webp"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

## 🎮 Introduction à Citra

**Citra** est l'émulateur Nintendo 3DS open-source le plus abouti au monde. Développé depuis 2013, il permet de jouer aux jeux 3DS sur PC avec des améliorations graphiques significatives et une compatibilité quasi-parfaite.

> ⚠️ **Note légale** : Cet émulateur est destiné à jouer uniquement aux jeux que vous possédez légalement. L'émulation à des fins de sauvegarde et de recherche est légale, mais le piratage ne l'est pas.

## 📋 Prérequis système

### Configuration minimale
- **OS** : Windows 10 (64-bit) / Linux / macOS / Android
- **CPU** : Intel Core i3-4130 / AMD FX-4300
- **RAM** : 4 GB
- **GPU** : DirectX 11 compatible (Intel HD 4000+)
- **Stockage** : 2 GB d'espace libre

### Configuration recommandée
- **CPU** : Intel Core i5-8400 / AMD Ryzen 5 2600
- **RAM** : 8 GB
- **GPU** : NVIDIA GTX 1050 / AMD RX 560 ou supérieur
- **Stockage** : SSD avec 10+ GB d'espace libre

### Configuration optimale
- **CPU** : Intel Core i7-10700K / AMD Ryzen 7 3700X
- **RAM** : 16 GB
- **GPU** : NVIDIA GTX 1660 / AMD RX 6600 ou supérieur
- **Stockage** : NVMe SSD avec 20+ GB d'espace libre

## 🔧 Étape 1 : Téléchargement de Citra

### Option 1 : Citra Official (Gratuit)
```bash
# Site officiel
https://citra-emu.org/download/
```

1. **Cliquez** sur "Download for Windows"
2. **Téléchargez** `citra-windows-x86_64.zip`
3. **Extrayez** dans un dossier dédié (ex: `C:\Citra`)

### Option 2 : Citra MMJ (Android optimisé)
```bash
# Version Android performance
https://github.com/weihuoya/citra/releases
```

### Option 3 : Citra Canary (Builds nightlies)
```bash
# Versions de développement
https://github.com/citra-emu/citra-canary/releases
```

## 📁 Étape 2 : Structure des dossiers

Organisez vos fichiers avec cette structure :

```
Citra/
├── citra-qt.exe             # Interface graphique
├── citra.exe                # Version CLI
├── games/                   # Vos ROMs .3ds/.cia/.cxi
│   ├── 3ds/                 # Cartouches .3ds
│   ├── cia/                 # Install files .cia
│   └── homebrew/            # Applications homebrew
├── saves/                   # Sauvegardes exportées
├── screenshots/             # Captures d'écran
├── system/                  # BIOS et fichiers système
│   ├── aes_keys.txt         # Clés de chiffrement
│   └── seeddb.bin           # Base de données seeds
├── mods/                    # Modifications de jeux
│   └── [Title-ID]/          # Dossier par jeu
└── cheats/                  # Codes de triche
    └── [Title-ID].txt       # Cheats par jeu
```

## ⚙️ Étape 3 : Installation et premier lancement

### Installation des prérequis Windows
```bash
# Visual C++ Redistributable 2022
https://aka.ms/vs/17/release/vc_redist.x64.exe

# DirectX End-User Runtime
https://www.microsoft.com/en-us/download/details.aspx?id=35
```

### Premier lancement
1. **Exécutez** `citra-qt.exe`
2. **Acceptez** la configuration par défaut
3. **Configurez** les dossiers de base
4. **Définissez** le dossier des jeux

## 🎯 Étape 4 : Configuration système essentielle

### Fichiers système requis

> ⚠️ **Important** : Ces fichiers doivent être extraits de votre propre Nintendo 3DS.

#### AES Keys (Obligatoire)
```bash
# Extraction depuis votre 3DS avec Homebrew
1. Installez FBI + GodMode9 sur votre 3DS
2. Utilisez GodMode9 pour extraire aes_keys.txt
3. Copiez dans: Citra/system/aes_keys.txt
```

Contenu type d'aes_keys.txt :
```
slot0x2CKeyX=xxx
slot0x25KeyX=xxx
slot0x18KeyX=xxx
slot0x1BKeyX=xxx
# ... autres clés
```

#### SeedDB (Pour certains jeux)
```bash
# Extraction avec Decrypt9WIP
1. Téléchargez seeddb.bin depuis votre 3DS
2. Copiez dans: Citra/system/seeddb.bin
```

#### Fonts système (Optionnel mais recommandé)
```bash
# Extraction avec GodMode9
1. Extrayez shared_font.bin de votre 3DS
2. Copiez dans: Citra/system/shared_font.bin
```

## ⚙️ Étape 5 : Configuration optimale

### Paramètres généraux
```
Emulation → Configure → General
```
- **Confirm exit while emulation is running** : ✅ Activé
- **Pause emulation when in background** : ✅ Activé (optionnel)
- **Enable Discord Presence** : ✅ Activé (optionnel)

### Configuration système
```
Emulation → Configure → System
```
- **Region** : Europe (ou votre région)
- **Language** : Français
- **Play Coin** : 300 (maximum)
- **Console ID** : Random (généré automatiquement)
- **Enable New 3DS** : ✅ Activé (pour de meilleures performances)

### Paramètres graphiques optimaux

#### Onglet General
```
Graphics → General
- Internal Resolution: 2x Native (400x480) ou plus
- Enable Linear Filtering: ✅ Activé
- Enable V-Sync: ✅ Activé
```

#### Onglet Renderer
```
Graphics → Advanced
- Graphics API: OpenGL (recommandé) ou Vulkan
- Enable Hardware Renderer: ✅ Activé
- Enable Hardware Shader: ✅ Activé
- Enable Accurate Multiplication: ✅ Activé
- Use Disk Shader Cache: ✅ Activé
- Enable VSync: ✅ Activé
```

#### Onglet Stereoscopy (3D)
```
Graphics → Stereoscopy
- Stereoscopic 3D Mode: Off (ou Side by Side pour VR)
- Depth: 100% (si activé)
- Eye to render: Both (recommandé)
```

### Configuration audio
```
Audio
- Enable DSP LLE: ✅ Activé (plus précis)
- Enable DSP LLE Multithread: ✅ Activé
- Output Type: Auto
- Volume: 100%
```

### Configuration des contrôles

#### Méthode automatique
```
Controls → Configure
1. Cliquez sur "Auto Map"
2. Appuyez sur les boutons de votre manette
3. Testez tous les contrôles
```

#### Mapping recommandé (Manette Xbox)
```
A Button → A
B Button → B
X Button → Y
Y Button → X
L Button → LB
R Button → RB
ZL Button → LT
ZR Button → RT
D-Pad → D-Pad
Circle Pad → Left Stick
C-Stick (New 3DS) → Right Stick
Start → Menu
Select → View
```

## 🎮 Étape 6 : Ajout et gestion des jeux

### Formats supportés
- **.3DS** : Cartouches Nintendo 3DS (format standard)
- **.CIA** : CTR Importable Archive (installables)
- **.CXI** : CTR eXecutable Image (exécutables bruts)
- **.APP** : Applications système Nintendo

### Méthodes d'ajout de jeux

#### ROMs cartouches (.3DS)
```bash
# Simple à utiliser
1. Placez vos fichiers .3ds dans le dossier games/3ds/
2. Rafraîchissez la liste dans Citra
3. Double-cliquez pour jouer
```

#### Installation de CIA
```bash
# Pour DLC, mises à jour, et homebrew
1. File → Install CIA...
2. Sélectionnez votre fichier .cia
3. Attendez l'installation
4. Le jeu/contenu apparaît dans la liste
```

### Dumping de vos propres jeux

#### Depuis cartouche physique
```bash
# Avec GodMode9 (3DS avec CFW)
1. Insérez la cartouche dans votre 3DS
2. Lancez GodMode9
3. Naviguez vers [C:] GAMECART
4. Sélectionnez le fichier .3ds
5. Copy to 0:/gm9/out/
6. Transférez sur PC
```

#### Depuis eShop (installé)
```bash
# Avec GodMode9
1. Naviguez vers [A:] SYSNAND SD
2. title → 00040000 → [Title-ID]
3. Dump en .cia
4. Transférez sur PC
```

## 🚀 Optimisation avancée

### Configurations par type de jeu

#### Jeux d'action/platforme
```
Graphics:
- Internal Resolution: 3x-4x Native
- Hardware Renderer: ✅ Activé
- V-Sync: ✅ Activé

Performance:
- New 3DS Mode: ✅ Activé
- DSP LLE: ✅ Activé
```

#### JRPGs/Visual Novels
```
Graphics:
- Internal Resolution: 4x-6x Native
- Linear Filtering: ✅ Activé
- Anisotropic Filtering: 16x

Quality:
- Accurate Multiplication: ✅ Activé
- Hardware Shaders: ✅ Activé
```

#### Jeux gourmands (Monster Hunter, etc.)
```
Performance:
- Internal Resolution: 2x Native maximum
- New 3DS Mode: ✅ Obligatoire
- Frame Limiting: ✅ Activé

Compromis qualité/performance équilibré
```

### Optimisations spécifiques

#### The Legend of Zelda: Ocarina of Time 3D
```bash
# Configuration optimale
Graphics:
- Resolution: 4x Native (800x960)
- Hardware Renderer: ✅ Activé
- Accurate Multiplication: ✅ Activé

Mods recommandés:
- HD Texture Pack
- 60 FPS patch
- Widescreen mod
```

#### Pokémon X/Y/OR/AS
```bash
# Réglages performance
Graphics:
- Resolution: 2x-3x Native
- Hardware Shaders: ✅ Activé
- New 3DS Mode: ✅ Obligatoire

Notes:
- Certaines zones peuvent ralentir
- Utilisez les dernières versions Canary
```

#### Super Mario 3D Land
```bash
# Configuration équilibrée
Graphics:
- Resolution: 3x-4x Native
- Linear Filtering: ✅ Activé
- V-Sync: ✅ Activé

Performance généralement excellente
```

## 🛠️ Mods et améliorations

### Types de mods supportés

#### Texture Packs HD
```bash
# Installation
1. Téléchargez le texture pack compatible
2. Créez: Citra/load/textures/[Title-ID]/
3. Extrayez les textures dans ce dossier
4. Activez "Custom Textures" dans les options graphiques
```

#### Codes de triche
```bash
# Format des cheats
1. Créez: Citra/cheats/[Title-ID].txt
2. Utilisez le format Gateway/ActionReplay
3. Activez dans System → Cheats

Exemple pour Pokémon X (0004000000055D00):
[Max Money]
08C6A0AC 000F423F
```

#### Patches 60 FPS
```bash
# Application manuelle
1. Téléchargez le patch .ips/.ups
2. Appliquez avec Lunar IPS ou similar
3. Utilisez la ROM patchée dans Citra

Jeux compatibles:
- Zelda: Ocarina of Time 3D
- Mario Kart 7
- Super Mario 3D Land
```

### Ressources pour mods

#### Sites recommandés
```bash
# Texture Packs
- Citra Community Forum
- GBAtemp Forums
- Reddit r/citra

# Cheats
- GameHacking.org
- Fort42.com cheat database

# Patches
- RomHacking.net
- GitHub repositories
```

## 📱 Citra sur autres plateformes

### Citra Android

#### Prérequis Android
```bash
- Android 8.0+ (API 26)
- SOC Snapdragon 845+ ou Exynos 9810+
- 6GB RAM minimum (8GB recommandé)
- 32GB stockage libre
- GPU Adreno 630+ ou Mali-G72+
```

#### Installation
```bash
1. Google Play Store → Citra MMJ (version optimisée)
2. Ou APK depuis GitHub
3. Configurez les permissions de stockage
4. Transférez ROMs et fichiers système
```

#### Optimisations Android
```bash
Performance:
- CPU JIT: ✅ Activé
- Hardware Renderer: ✅ Activé (si supporté)
- Resolution: 1x Native (économie batterie)
- Frame Skip: Auto (si nécessaire)

Contrôles:
- Overlay tactile personnalisable
- Support manettes Bluetooth
- Gyroscope pour certains jeux
```

### Citra Linux

#### Installation Ubuntu/Debian
```bash
# Flatpak (recommandé)
flatpak install flathub org.citra_emu.citra

# Ou compilation depuis source
sudo apt install build-essential cmake qt5-default libsdl2-dev
git clone --recursive https://github.com/citra-emu/citra.git
cd citra && mkdir build && cd build
cmake .. -DCMAKE_BUILD_TYPE=Release
make -j$(nproc)
```

#### Installation Arch Linux
```bash
# Depuis AUR
yay -S citra-git
# ou
sudo pacman -S citra-qt
```

### Citra macOS

#### Installation
```bash
# Homebrew
brew install --cask citra

# Ou download direct
https://citra-emu.org/download/
```

## 🔧 Résolution des problèmes

### Problèmes fréquents et solutions

#### Jeu ne se lance pas
```bash
Vérifications par ordre:
1. AES keys présentes et valides
2. ROM non corrompue (vérifiez MD5/SHA1)
3. Seeddb.bin si requis pour le jeu
4. Région correcte dans les paramètres système
5. Version Citra à jour
```

#### Écran noir au lancement
```bash
Solutions:
1. Changez Graphics API (OpenGL ↔ Vulkan)
2. Désactivez Hardware Renderer temporairement
3. Réduisez Internal Resolution à 1x
4. Vérifiez les pilotes GPU
5. Testez en mode New 3DS
```

#### Performance médiocre
```bash
Optimisations immédiates:
1. Activez New 3DS Mode
2. Activez Hardware Renderer + Shaders
3. Réduisez Internal Resolution
4. Fermez applications en arrière-plan
5. Utilisez un SSD pour les ROMs
```

#### Audio distordu/absent
```bash
Corrections audio:
1. Activez DSP LLE
2. Changez Output Type
3. Vérifiez les pilotes audio
4. Désactivez les effets audio Windows
5. Testez sans DSP LLE Multithread
```

#### Plantages fréquents
```bash
Stabilisation:
1. Désactivez les mods temporairement
2. Utilisez version stable au lieu de Canary
3. Vérifiez l'intégrité de la ROM
4. Réinitialisez la configuration
5. Vérifiez la RAM (MemTest86)
```

## 📊 Compatibilité et performances

### Statistiques de compatibilité

| Statut | Pourcentage | Description |
|--------|-------------|-------------|
| **Perfect** | ~75% | Fonctionne parfaitement |
| **Great** | ~15% | Quelques bugs mineurs |
| **Good** | ~7% | Jouable avec limitations |
| **Bad** | ~2% | Problèmes majeurs |
| **Intro/Nothing** | ~1% | Non fonctionnel |

### Jeux les mieux supportés

#### Parfaitement compatibles
```bash
✅ The Legend of Zelda: Ocarina of Time 3D
✅ Super Mario 3D Land
✅ Mario Kart 7
✅ Animal Crossing: New Leaf
✅ Fire Emblem Awakening
✅ Pokémon X/Y (quelques ralentissements)
✅ Luigi's Mansion: Dark Moon
✅ Kid Icarus: Uprising
```

#### Excellente compatibilité
```bash
⭐ Pokémon Omega Ruby/Alpha Sapphire
⭐ The Legend of Zelda: A Link Between Worlds
⭐ Metroid: Samus Returns
⭐ Monster Hunter 4 Ultimate
⭐ Xenoblade Chronicles 3D
⭐ Kirby: Planet Robobot
```

### Benchmarks performance

#### Configuration test : i5-8400, GTX 1060, 16GB RAM

| Jeu | 1x Native | 2x Native | 4x Native |
|-----|-----------|-----------|-----------|
| **Mario 3D Land** | 60 FPS | 60 FPS | 55-60 FPS |
| **Zelda OoT 3D** | 60 FPS | 60 FPS | 45-60 FPS |
| **Pokémon X** | 30-60 FPS | 25-55 FPS | 20-45 FPS |
| **Monster Hunter 4U** | 30-60 FPS | 25-50 FPS | 20-40 FPS |

## 🌐 Ressources et communauté

### Sites officiels et documentation
- [🏠 Site officiel Citra](https://citra-emu.org/)
- [📱 Citra Android](https://play.google.com/store/apps/details?id=org.citra.citra_emu)
- [📚 Wiki officiel](https://citra-emu.org/wiki/)
- [🔧 Guide de configuration](https://citra-emu.org/wiki/user-directory/)

### Communautés actives
- [💬 Discord Citra](https://discord.gg/FAXfZV9)
- [🗨️ Reddit r/Citra](https://www.reddit.com/r/Citra/)
- [🌐 Forum officiel](https://community.citra-emu.org/)
- [📺 YouTube guides](https://www.youtube.com/results?search_query=citra+guide)

### Ressources développement et mods
- [💻 GitHub Citra](https://github.com/citra-emu/citra)
- [🎨 Texture Packs](https://forums.citra-emu.org/c/art-assets)
- [🎮 GameBanana 3DS](https://gamebanana.com/games/4203)
- [🔓 GBAtemp Forums](https://gbatemp.net/categories/nintendo-3ds-emulation.297/)

### Outils utiles
- [🔧 GodMode9](https://github.com/d0k3/GodMode9) - Swiss Army Knife 3DS
- [📁 FBI](https://github.com/Steveice10/FBI) - Gestionnaire de fichiers 3DS
- [🎯 Checkpoint](https://github.com/FlagBrew/Checkpoint) - Gestionnaire de sauvegardes
- [🖼️ Batch CIA 3DS Decryptor](https://github.com/matiffeder/BatchCIA3DSDecryptor) - Conversion ROMs

## ❓ FAQ - Questions fréquemment posées

### Questions générales

**Q : Citra peut-il faire fonctionner tous les jeux 3DS ?**
**R :** Environ 90% des jeux 3DS fonctionnent bien à parfaitement. Consultez la base de compatibilité pour votre jeu spécifique.

**Q : La 3D stéréoscopique fonctionne-t-elle ?**
**R :** Oui, avec des lunettes 3D ou un écran 3D. Mode Side-by-Side également disponible pour VR.

**Q : Puis-je utiliser mes sauvegardes de vraie 3DS ?**
**R :** Oui, avec Checkpoint ou JKSM vous pouvez transférer vos sauvegardes dans les deux sens.

### Questions techniques

**Q : Pourquoi certains jeux sont-ils lents ?**
**R :** Les jeux 3DS sont optimisés pour un hardware spécifique. L'émulation demande plus de puissance, surtout pour les jeux complexes.

**Q : OpenGL ou Vulkan ?**
**R :** OpenGL est plus stable et compatible. Vulkan peut offrir de meilleures performances sur GPU récents.

**Q : New 3DS Mode améliore-t-il tous les jeux ?**
**R :** Principalement les jeux qui l'utilisent nativement (Xenoblade, Monster Hunter, etc.) et certains homebrews.

### Problèmes courants

**Q : "Could not determine the system region" ?**
**R :** Installez les fichiers système (aes_keys.txt) et configurez la région dans les paramètres.

**Q : Les textures HD ne s'affichent pas ?**
**R :** Vérifiez que "Custom Textures" est activé et que le Title ID correspond au dossier.

**Q : Comment améliorer les performances sur Android ?**
**R :** Utilisez Citra MMJ, réduisez la résolution, activez le frame skip si nécessaire.

## 🎯 Conclusion

Citra est un émulateur 3DS exceptionnel qui offre :

- ✅ **Compatibilité excellente** avec la majorité des jeux 3DS
- ✅ **Amélioration graphique** significative par rapport à la console originale
- ✅ **Stabilité** et maturité après des années de développement
- ✅ **Support multiplateforme** (Windows, Linux, macOS, Android)
- ✅ **Communauté active** avec mods et texture packs HD
- ✅ **Performance** excellente sur matériel moderne

Avec ce guide détaillé, vous êtes maintenant équipé pour :
- **Installer** et configurer Citra optimalement
- **Extraire** vos propres jeux légalement
- **Optimiser** les performances selon votre matériel
- **Utiliser** des mods et améliorations
- **Résoudre** les problèmes courants

---

> **Rappel important** : Utilisez uniquement des jeux que vous possédez légalement. Respectez les droits d'auteur et soutenez les développeurs en achetant leurs créations.

**Profitez de vos jeux 3DS en haute définition ! 🎮✨**
```