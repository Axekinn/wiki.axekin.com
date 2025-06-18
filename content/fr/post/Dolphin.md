---
title: "Installation et configuration de Dolphin"
date: 2025-06-02
draft: false
categories: ["Dolphin"]
tags: ["Dolphin", "Nintendo Wii", "GameCube", "Émulation", "Gaming"]
description: "Tutoriel détaillé pour installer, configurer et utiliser l'émulateur Nintendo Wii/GameCube Dolphin"
author: "Axekin"
toc: true
math: false
featured: false
weight: 15
aliases: 
  - /fr/dolphin-installation-guide/
  - /fr/guides/dolphin-setup/
summary: "Learn how to install and configure Dolphin emulator for optimal Nintendo GameCube and Wii gaming. Complete setup guide with performance optimization."
cover: "/images/covers/dolphin-emulator-guide.webp"
image: "/images/covers/dolphin-emulator-guide.webp"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

## 🎮 Introduction à Dolphin

**Dolphin** est l'émulateur Nintendo GameCube et Wii le plus avancé au monde. Développé depuis 2003, il offre une compatibilité quasi-parfaite, des améliorations graphiques spectaculaires et des fonctionnalités uniques comme le jeu en ligne et la réalité virtuelle.

## 🔧 Étape 1 : Téléchargement de Dolphin

### Option 1 : Version Stable (Recommandée)
```bash
# Site officiel
https://dolphin-emu.org/download/
```

1. **Cliquez** sur "Download Dolphin 5.0"
2. **Téléchargez** `dolphin-x64-X.0.zip`
3. **Extrayez** dans un dossier dédié (ex: `Documents\Dolphin` ou à la racine d'un de vos autre disque, pas le C)

### Option 2 : Dolphin Android
```bash
# Version mobile optimisée
https://play.google.com/store/apps/details?id=org.dolphinemu.dolphinemu
```

## Téléchargement de votre jeu

### Étape 1 : Accéder à la bibliothèque de jeux

Rendez-vous sur **[🎮 Axekin Games - Nintendo Switch](https://www.axekin.com/search?platform=wii)** pour accéder à la collection de jeux Nintendo Switch.

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

**Résultat** : Vous obtiendrez les fichiers de jeu prêts à être utilisés avec Dolphin ! 🎯


## 📁 Étape 2 : Structure des dossiers

Créez cette structure de dossiers pour organiser vos fichiers :

Pour une organisation optimale de votre bibliothèque, voici l'arborescence conseillée :

````
Jeux Wii/
├── Alice in Wonderland/
│   ├── BASE/                # 🎮 Le jeu de base (fichier principal)
│   ├── UPDATE/              # 🔄 Mise à jour du jeu (recommandé)
│   └── DLC/                 # 📦 Contenu téléchargeable (optionnel)
├── Alvin and the Chipmunks: Chipwrecked/
│   ├── BASE/                # 🎮 Le jeu de base
│   ├── UPDATE/              # 🔄 Mise à jour du jeu
│   └── DLC/                 # 📦 DLC supplémentaires
├── Animal Crossing: City Folk/
│   ├── BASE/
│   ├── UPDATE/
│   └── DLC/
````

### Types de contenu

{{< admonition tip "Comprendre les dossiers" >}}
- **BASE** 📁 : Le jeu principal que vous téléchargez
- **UPDATE** 📁 : Mises à jour et correctifs (recommandé)
- **DLC** 📁 : Contenu supplémentaire payant (optionnel mais recommandé)
{{< /admonition >}}

{{< admonition success "Avantages de cette organisation" >}}
✅ **Détection automatique** : Les jeux s'ajoutent automatiquement dans l'émulateur  
✅ **Gestion simplifiée** : Plus besoin de sélectionner manuellement chaque ROM  
✅ **Organisation claire** : Facile de voir quel contenu vous avez pour chaque jeu  
✅ **Maintenance aisée** : Ajout/suppression de contenu simplifié
{{< /admonition >}}

> **📝 Remarque importante** : Si un jeu n'a pas de mise à jour ou de DLC, inutile de créer les dossiers correspondants. Créez uniquement les dossiers pour le contenu que vous possédez.

### Résultat

Une fois cette structure mise en place, votre émulateur détectera automatiquement tous les jeux présents dans le dossier "Jeux Wii" et les organisera proprement dans votre bibliothèque ! 🎯

## 💡 Configuration portable (Recommandé)

{{< admonition tip "Installation portable" >}}
**Avant le premier lancement**, créez un fichier nommé `portable.txt` à la racine du répertoire Dolphin. Cette manipulation rendra l'installation entièrement portable.
{{< /admonition >}}

### Avantages du mode portable

| Aspect | Mode normal | Mode portable |
|--------|-------------|---------------|
| **Configurations** | Stockées dans le système | Stockées dans le dossier |
| **Sauvegardes** | Dispersées sur l'ordinateur | Centralisées dans un dossier |
| **Portabilité** | ❌ Liée au système | ✅ Déplaçable facilement |
| **Sauvegarde** | Difficile à localiser | Simple à sauvegarder |

### Structure après création du dossier portable

```
📁 Dolphin/
├── 🎮 Dolphin.exe
├── 📄 portable/              # ← Créez ce dossier !
│   ├── 📁 bis/
│   ├── 📁 games/
│   ├── 📁 profiles/
│   └── 📁 system/
└── 📄 Autres fichiers...
```

{{< admonition success "Résultat" >}}
**Toutes vos données** (configurations, sauvegardes, profils) seront stockées dans le fichier `portable.txt`, facilitant grandement la gestion et les sauvegardes !
{{< /admonition >}}

### Instructions de création

1. **Naviguez** vers le dossier d'installation de Dolphin
2. **Créez** un nouveau fichier nommé exactement `portable.txt`
3. **Lancez** Dolphin - il détectera automatiquement le mode portable

> **📝 Note** : Cette opération doit être effectuée **avant** le premier lancement pour être prise en compte !

## ⚙️ Étape 3 : Installation et premier lancement

### Premier lancement
1. **Exécutez** `Dolphin.exe`
2. **Acceptez (ou pas)** l'envoie des données
3. **Configurez** le dossier des jeux : `Option → Configuation → Dossiers`
4. **Ajoutez** votre dossier de ROMs vu précédemment

## 🎯 Étape 4 : Configuration système de base

### Paramètres généraux
```
Config → General
```

#### Onglet General
- **Enable Dual Core** : ✅ Activé (améliore grandement les performances)
- **Enable Cheats** : ✅ Activé (si vous voulez utiliser des codes)

#### Onglet Interface
- **Langue** : Choisir le language voulu
- **Thème** : Choisir le thème voulu
- **Style** : Choisir le style voulu
- **Télécharger les jaquettes des jeux blabla** : ✅ Activé (c'est pour avoir les icônes)

Le reste par défaut, on laisse.

### Configuration des contrôleurs

> Pour le coup, il y a plusieurs configurations qui marcheront mieux dans certains jeux qui disposnet du gyro, je laisse ça aux youtubeurs, ils laissent généralement le fichier de config dans les bio youtube. J'ai mis Mario Galaxy, mais vous pouvez mettre votre jeux et vous aurez la bonne configuratio pour votre jeux (si ça existe) : [Tuto pour votre manette](https://www.youtube.com/results?search_query=configuration+manette+gyro+dolphin+mario+galaxy)

## ⚙️ Étape 5 : Configuration graphique optimale

### Paramètres graphiques de base
```
Graphics → General
```

#### Backend Graphics
- **Backend** : Vulkan (recommandé) ou Direct3D 11/12
- **Carte** : Votre GPU principal
- **Aspect Ratio** : Auto ou Force 16:9
- **Synchro Vertical** : Activé, idem pour plein écran

#### Améliorations visuelles

**Améliorations essentielles :**
- **Internal Resolution** : Celle que vous voulez, plus la valeure est haute, plus ça consomme des performances
- **Anti-Aliasing** : Pareil qu'au dessus
- **Anisotropic Filtering** : Pareil qu'au dessus

Tout le reste, on laisse les paramètres par défaut

### Paramètres avancés
```
Graphics → Advanced
```

**Configuration optimale :**
- **Show FPS** : ✅ Activé (monitoring performance)
- **Enable Progressive Scan** : ✅ Activé
- **Backend Multithreading** : ✅ Activé
- **Prefer Exclusive Fullscreen** : ✅ Activé (réduit la latence)

## 🌐 Fonctionnalités avancées

### Netplay (Jeu en ligne)

#### Configuration du netplay
```bash
# Host une session
1. Tools → Start NetPlay
2. Host tab → Configure settings:
   - Game: Sélectionnez votre jeu
   - Players: Nombre de joueurs
   - Buffer: 4-8 (selon ping)
3. Start → Partagez le code de session

# Rejoindre une session
1. Tools → Start NetPlay  
2. Connect tab → Entrez le code
3. Connect et attendez la synchronisation
```

#### Paramètres netplay optimaux
```bash
# Pour une expérience stable
General:
- Dual Core: ❌ Désactivé
- Idle Skipping: ❌ Désactivé
- Audio: DSP HLE (plus stable)

Graphics:
- Backend: Direct3D 11 (plus stable que Vulkan)
- Resolution: 1x Native (réduit charge réseau)
- Enhancements: Minimales
```

## ❓ FAQ - Questions fréquentes

### Questions générales

**Q : Dolphin peut-il jouer tous les jeux GameCube/Wii ?**
**R :** Environ 95% des jeux fonctionnent parfaitement ou avec des bugs mineurs. Consultez la liste de compatibilité.

**Q : Puis-je utiliser mes vraies manettes GameCube ?**
**R :** Oui, avec un adaptateur GameCube-USB officiel Nintendo ou compatible Mayflash.

**Q : Les sauvegardes de vraie console fonctionnent-elles ?**
**R :** Oui, vous pouvez importer/exporter vos sauvegardes avec des homebrew comme GCMM.

### Questions techniques

**Q : Vulkan ou Direct3D ?**
**R :** Vulkan offre généralement de meilleures performances sur GPU récents. D3D11 est plus stable sur systèmes plus anciens.

**Q : Dois-je activer Dual Core ?**
**R :** Oui pour de meilleures performances, sauf pour le netplay où il faut le désactiver.

**Q : Quelle résolution interne choisir ?**
**R :** 2x Native (856x528) est un bon compromis. 4x+ pour GPU puissants.

### Problèmes courants

**Q : Le jeu lag malgré un PC puissant ?**
**R :** Certains jeux sont plus exigeants. Activez Dual Core, réduisez résolution, changez de backend.

**Q : Audio crachotant ?**
**R :** Changez backend audio, augmentez latency, fermez autres apps audio.

**Q : Wiimote ne se connecte pas ?**
**R :** Vérifiez adaptateur Bluetooth, utilisez "Continuous Scanning", appairez via Dolphin.

**Redécouvrez vos classiques GameCube/Wii en haute définition ! 🎮✨**
```