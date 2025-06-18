---
title: "Installation et configuration de Azahar"
date: 2025-06-02
draft: false
categories: ["gaming", "Tutoriels"]
tags: ["Citra"]
author: "Axekin"
description: "Tutoriel détaillé pour installer, configurer et utiliser l'émulateur Nintendo 3DS Azahar"
series: ["Emulation Guides"]
toc: true
math: false
featured: false
weight: 20
aliases: 
  - /fr/citra-cheats-mods/
  - /fr/guides/citra-modding/
summary: "Learn how to install cheat codes and game modifications on Citra emulator. Detailed tutorial with folder structure and installation steps."
cover: "/images/covers/azahar.webp"
image: "/images/covers/azahar.webp"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

## 🎮 Introduction à Citra

**Citra** est l'émulateur Nintendo 3DS open-source le plus abouti au monde. Développé depuis 2013, il permet de jouer aux jeux 3DS sur PC avec des améliorations graphiques significatives et une compatibilité quasi-parfaite.

## 🔧 Étape 1 : Téléchargement de Citra

### Option 1 : Azahar Officiam
```bash
# Site officiel
https://github.com/azahar-emu/azahar/releases
```

1. **Cliquez** sur "Download for Windows"
2. **Téléchargez** ` azahar-XXXX-rc1-windows-msvc-installer.exe `
3. **Extrayez** dans un dossier dédié (ex: `Dolphin\Citra` ou à la racine d'un de vos autre disque, pas le C)

## Téléchargement de votre jeu

### Étape 1 : Accéder à la bibliothèque de jeux

Rendez-vous sur **[🎮 Axekin Games - Nintendo 3DS](https://www.axekin.com/search?platform=3ds)** pour accéder à la collection de jeux Nintendo 3DS.

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

**Résultat** : Vous obtiendrez les fichiers de jeu prêts à être utilisés avec 3DS ! 🎯


## 📁 Étape 2 : Structure des dossiers

Créez cette structure de dossiers pour organiser vos fichiers :

Pour une organisation optimale de votre bibliothèque, voici l'arborescence conseillée :

````
Jeux 3DS/
├── Animal Crossing - Happy Home Designer/
│   ├── BASE/                # 🎮 Le jeu de base (fichier principal)
│   ├── UPDATE/              # 🔄 Mise à jour du jeu (recommandé)
│   └── DLC/                 # 📦 Contenu téléchargeable (optionnel)
├── Dead or Alive - Dimensions/
│   ├── BASE/                # 🎮 Le jeu de base
│   ├── UPDATE/              # 🔄 Mise à jour du jeu
│   └── DLC/                 # 📦 DLC supplémentaires
├── Ben 10 - Galactic Racing/
│   ├── BASE/
│   ├── UPDATE/
│   └── DLC/
└── Captain America - Super Soldier/
    ├── BASE/
    └── UPDATE/              # (Pas de DLC pour ce jeu)
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

Une fois cette structure mise en place, votre émulateur détectera automatiquement tous les jeux présents dans le dossier "Jeux 3DS" et les organisera proprement dans votre bibliothèque ! 🎯

## 💡 Configuration portable (Recommandé)

{{< admonition tip "Installation portable" >}}
**Avant le premier lancement**, créez un dossier nommé `user` à la racine du répertoire Azahar. Cette manipulation rendra l'installation entièrement portable.
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
📁 Azahar/
├── 🎮 Azahar.exe
├── 📁 user/              # ← Créez ce dossier !
│   ├── 📁 bis/
│   ├── 📁 games/
│   ├── 📁 profiles/
│   └── 📁 system/
└── 📄 Autres fichiers...
```

{{< admonition success "Résultat" >}}
**Toutes vos données** (configurations, sauvegardes, profils) seront stockées dans le dossier `user`, facilitant grandement la gestion et les sauvegardes !
{{< /admonition >}}

### Instructions de création

1. **Naviguez** vers le dossier d'installation de Azahar
2. **Créez** un nouveau dossier nommé exactement `user`
3. **Lancez** Azahar - il détectera automatiquement le mode portable

> **📝 Note** : Cette opération doit être effectuée **avant** le premier lancement pour être prise en compte !

## ⚙️ Étape 3 : Installation et premier lancement

### Installation des prérequis Windows

### Premier lancement
1. **Exécutez** `azahar.exe`
2. **Définissez** le dossier des jeux (double cliquer sur le menu, ajouter le dossier "Jeux 3DS")

## ⚙️ Étape 3 : Configuration optimale

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
- **Language** : Votre language
- **Console ID** : Random (généré automatiquement)
- **Enable New 3DS** : ✅ Activé (pour de meilleures performances)

### Paramètres graphiques optimaux

#### Onglet Graphismes
```
Graphics → General
- Internal Resolution: 2x Native (400x480) ou plus. Plus vous mettrez la valeure haute, plus ça consommera en GPU
- Enable Linear Filtering: ✅ Activé
→ General
```

#### Onglet Disposition

```
Graphics → Disposition
```

{{< admonition tip "Interface de disposition des écrans" >}}
Cette section vous permet de personnaliser l'affichage des deux écrans de la 3DS selon vos préférences visuelles et votre configuration matérielle.
{{< /admonition >}}

### Disposition des écrans

**Options de disposition prédéfinies :**

| Mode | Description | Recommandation |
|------|-------------|----------------|
| **Défaut** | Configuration standard Nintendo | ✅ **Débutants** |
| **Un seul écran** | Affiche seulement l'écran actif | Gameplay focus |
| **Écran large** | Étire sur toute la largeur | Écrans larges |
| **Côte à côte** | Écrans horizontaux | **Recommandé gaming** |
| **Fenêtres séparées** | Deux fenêtres indépendantes | Multi-moniteurs |
| **Écran hybride** | Écrans superposés | Économie d'espace |
| **Disposition personnalisée** | Configuration manuelle | ⭐ **Plus flexible** |

### Configuration personnalisée

{{< admonition success "Disposition personnalisée avancée" >}}
**Écran supérieur :**
- **Position X/Y** : `0px, 0px` (coin supérieur gauche)
- **Largeur/Hauteur** : `800px, 480px` (ratio 4:3 optimal)

**Écran inférieur :**
- **Position X/Y** : `80px, 500px` (légèrement centré)
- **Largeur/Hauteur** : `640px, 480px` (proportionnel)

**Opacité écran inférieur** : `100%` (pleine visibilité)
{{< /admonition >}}

### Paramètres d'affichage

#### Options générales
```
Écrans → Configuration
```

**Réglages recommandés :**
- **Permuter les écrans** : ❌ Désactivé (garde la logique DS)
- **Rotation des écrans vers le haut** : ❌ Désactivé
- **Écart d'écran** : `0.00` à `4.00` selon préférence
- **Proportion du grand écran** : `4.00` (écran principal plus grand)
- **Proportion du petit écran** : `En bas à droite` (position tactile)

#### Disposition avec un seul écran

{{< admonition note "Mode un seul écran" >}}
**Utilisation :**
- Jeux n'utilisant qu'un écran principal
- Économie de ressources d'affichage
- Concentration sur l'action principale

**Configuration :**
- **Étiré** : ☑️ Coché pour les deux écrans
- **Marge Gauche/Droite** : `0px` (plein écran)
- **Marge Haut/Bas** : `0px` (utilisation maximale)
{{< /admonition >}}

> **💡 Conseil pratique** : Testez différentes dispositions selon le jeu. Les RPG fonctionnent mieux en disposition personnalisée, tandis que les jeux d'action préfèrent souvent le mode côte à côte.

#### Onglet Avancé
```
Graphics → Advanced
- Graphics API: OpenGL (recommandé) ou Vulkan
- Enable Hardware Renderer: ✅ Activé
- Enable Hardware Shader: ✅ Activé
- Enable Accurate Multiplication: ✅ Activé
- Use Disk Shader Cache: ✅ Activé
- Enable VSync: ✅ Activé
```

### Configuration audio
```
Audio
- Emulation: HLE
```

### Configuration des contrôles

#### Méthode automatique
```
Controls → Configure
1. Cliquez sur "Configuration Auto"
2. Appuyez sur les boutons de votre manette
3. Testez tous les contrôles
```

### Formats supportés
- **.CCI** : Seul format supporté avec mes roms avec Azahar, dû à leurs restrictions anti piracy


## ❓ FAQ - Questions fréquemment posées

### Questions générales

**Q : Azahar peut-il faire fonctionner tous les jeux 3DS ?**
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

**Profitez de vos jeux 3DS en haute définition ! 🎮✨**
```