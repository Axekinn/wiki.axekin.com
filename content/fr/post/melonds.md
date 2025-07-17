---
title: "Installation et configuration de melonDS"
date: 2025-06-02
draft: false
categories: ["MelonDS"]
tags: ["melonDS", "Nintendo DS", "Émulation", "Gaming"]
author: "Axekin"
description: "Tutoriel détaillé pour installer, configurer et utiliser l'émulateur Nintendo DS melonDS"
cover: "/images/covers/melonds.png"
---

## 🎮 Introduction à melonDS

**melonDS** est un émulateur Nintendo DS open-source moderne et précis, développé depuis 2016. Il se distingue par sa compatibilité excellente, sa précision d'émulation, et ses fonctionnalités avancées comme le Wi-Fi local, les savestates, et l'amélioration graphique. C'est l'alternative moderne parfaite à DeSmuME.

> 💡 **Note importante** : melonDS est moins exigeant que la plupart des émulateurs modernes grâce à l'architecture simple de la DS.

## 🔧 Étape 1 : Téléchargement de melonDS

### Version Stable (Recommandée)
```bash
# Site officiel
https://melonds.kuribo64.net/downloads.php
```

1. **Cliquez** sur "Download Windows x64"
2. **Téléchargez** `melonds-0.9.5-windows-x64.zip`
3. **Extrayez** dans un dossier dédié (ex: `Documents\melonDS` ou à la racine d'un de vos autre disque, pas le C)

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

## Téléchargement de votre jeu

### Étape 1 : Accéder à la bibliothèque de jeux

Rendez-vous sur **[🎮 Axekin Games - Nintendo DS](https://www.axekin.com/games?platform=ds)** pour accéder à la collection de jeux Nintendo DS.

### Étape 2 : Télécharger le jeu

1. **Recherchez** le jeu désiré dans la liste
2. **Cliquez** sur le bouton de téléchargement
3. **Attendez** la fin du téléchargement

### Étape 3 : Extraction du fichier

Une fois le téléchargement terminé, **extrayez** l'archive avec l'un de ces logiciels :

| Logiciel | Lien de téléchargement | Compatibilité |
|----------|------------------------|---------------|
| **7-Zip** | [Télécharger 7-Zip](https://www.7-zip.org/) | Windows/Linux |
| **WinRAR** | [Télécharger WinRAR](https://www.win-rar.com/) | Windows |

> **💡 Astuce** : 7-Zip est gratuit et open-source, tandis que WinRAR nécessite une licence après la période d'essai.

**Résultat** : Vous obtiendrez les fichiers de jeu prêts à être utilisés avec Eden ! 🎯


## 📁 Étape 2 : Structure des dossiers

Créez cette structure de dossiers pour organiser vos fichiers :

Pour une organisation optimale de votre bibliothèque, voici l'arborescence conseillée :

````
Jeux DS/
├── Animal Crossing: Wild World/
│   ├── BASE/                # 🎮 Le jeu de base (fichier principal)
├── Anno 1701: Dawn of Discovery/
│   ├── BASE/                # 🎮 Le jeu de base
├── Art Academy/
│   ├── BASE/
└── Assassin's Creed: Altaïr's Chronicles/
    ├── BASE/
````

### Types de contenu

{{< admonition tip "Comprendre les dossiers" >}}
- **BASE** 📁 : Le jeu principal que vous téléchargez
{{< /admonition >}}

{{< admonition success "Avantages de cette organisation" >}}
✅ **Détection automatique** : Les jeux s'ajoutent automatiquement dans l'émulateur  
✅ **Gestion simplifiée** : Plus besoin de sélectionner manuellement chaque ROM  
✅ **Organisation claire** : Facile de voir quel contenu vous avez pour chaque jeu  
✅ **Maintenance aisée** : Ajout/suppression de contenu simplifié
{{< /admonition >}}

> **📝 Remarque importante** : Si un jeu n'a pas de mise à jour ou de DLC, inutile de créer les dossiers correspondants. Créez uniquement les dossiers pour le contenu que vous possédez.

### Résultat

Une fois cette structure mise en place, votre émulateur détectera automatiquement tous les jeux présents dans le dossier "Jeux DS" et les organisera proprement dans votre bibliothèque ! 🎯

## ⚙️ Étape 3 : Installation du BIOS Nintendo DS

### Fichiers BIOS requis

> ⚠️ **(non) Obligatoire** : Les fichiers BIOS Nintendo DSi sont requis pour le fonctionnement optimal.

**Fichiers nécessaires :**
- `biosdsi7.bin` (16 KB) - ARM7 BIOS
- `biosdsi9.bin` (4 KB) - ARM9 BIOS  
- `dsifirmware.bin` (256 KB) - Firmware DS

**📥 Téléchargement BIOS Nintendo DSi :**

[Télécharger Nintendo DSi BIOS](https://cdn.discordapp.com/attachments/1332956018665328702/1381293934109786246/Nintendo_DSi_Bios_for_emulators.zip?ex=6846fdb9&is=6845ac39&hm=e36162ccf2877cea45ea2ab9e004f2d38fddd8a7583be41f7e8414edc49e1383&)

> **📋 Contenu :** `biosdsi7.bin`, `biosdsi9.bin`, `dsifirmware.bin`

### Configuration dans melonDS

1. **Lancez** `melonDS.exe`
2. `Config → Emu settings → DSi-mode`
3. **Configurez** les chemins BIOS :
   - **DS ARM9 BIOS** : `bios/biosdsi9.bin`
   - **DS ARM7 BIOS** : `bios/biosdsi7.bin`
   - **DS Firmware** : `bios/dsifirmware.bin`
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
Config → Video Settings
```

{{< admonition tip "Interface des paramètres vidéo" >}}
Vous accéderez à une fenêtre avec deux sections principales : **Display settings** (à gauche) et les paramètres de rendu **Software renderer** / **OpenGL renderer** (à droite).
{{< /admonition >}}

#### Configuration du rendu 3D

**Sélection du moteur de rendu :**

| Option | Performance | Qualité | Recommandation |
|--------|-------------|---------|----------------|
| **Software** | Faible | Basique | Matériel ancien |
| **OpenGL (Classic)** | Excellente | Très bonne | ✅ **Recommandé** |
| **OpenGL (Compute shader)** | Variable | Maximale | GPU récents uniquement |

#### Paramètres OpenGL (Recommandé)

{{< admonition success "Configuration optimale OpenGL" >}}
**Internal resolution :** `1x native (4096x3072)` à `16x` selon votre GPU
- 1x = Résolution originale DS
- 2x-3x = Bon compromis qualité/performance  
- 4x+ = GPU puissant requis

**Options d'amélioration :**
- ✅ **Improved polygon splitting** : Améliore la qualité géométrique
- ✅ **Use high resolution coordinates** : Précision accrue des textures
{{< /admonition >}}

#### Paramètres d'affichage généraux

```
Display settings (partie gauche)
```

**Configuration recommandée :**
- **VSync** : ✅ Activé (évite le tearing)
- **VSync interval** : `1` (60 FPS standard)
- **OpenGL display** : ✅ Coché pour l'affichage OpenGL

### Résultat visuel

{{< admonition info "Amélioration graphique" >}}
Avec ces paramètres, vos jeux DS bénéficieront d'une **résolution multipliée** et d'une **qualité d'affichage** considérablement améliorée par rapport à la console originale !
{{< /admonition >}}

> **💡 Conseil performance** : Si vous rencontrez des ralentissements, réduisez d'abord l'**Internal resolution** avant de changer de moteur de rendu.

## ⚙️ Étape 5 : Configuration vidéo et audio

### Paramètres vidéo
```
View
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

(Exemple personnel, mettez ce que vous voulez à la place)

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
- Se connecter avec RadminVPN, créer votre propre réseau, et connectez vous avec votre ami
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
**R :** Oui, obligatoire pour de bonnes performances. Aucun risque de sécurité.

### Problèmes courants

**Q : Lag malgré bon PC ?**
**R :** Vérifiez JIT activé, utilisez OpenGL, réduisez scale factor si nécessaire.

**Q : Sauvegarde ne fonctionne pas ?**
**R :** Vérifiez écriture autorisée dossier saves, format ROM correct.

**Q : Wi-Fi ne marche pas ?**
**R :** Wi-Fi limitée aux jeux supportés, configuration réseau requise.

## 🎯 Conclusion

**Redécouvrez la bibliothèque Nintendo DS en haute définition avec melonDS ! 🎮✨**
````