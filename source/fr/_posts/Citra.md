---
title: "Installation et Configuration d'Azahar"
date: 2025-06-02
draft: false
categories: ["Citra"]
tags: ["Citra"]
author: "Axekin"
description: "Tutoriel détaillé pour installer, configurer et utiliser l'émulateur Nintendo 3DS Azahar"
series: ["Guides d'Émulation"]
toc: true
math: false
featured: false
weight: 20
aliases: 
  - /fr/citra-cheats-mods/
  - /fr/guides/citra-modding/
summary: "Apprenez à installer des codes de triche et des modifications de jeu sur l'émulateur Citra. Tutoriel détaillé avec la structure des dossiers et les étapes d'installation."
cover: "covers/azahar.webp"
image: "covers/azahar.webp"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

## 🎮 Introduction à Citra

**Citra** est l'émulateur open-source le plus avancé pour la Nintendo 3DS. Développé depuis 2013, il vous permet de jouer à des jeux 3DS sur PC avec des améliorations graphiques significatives et une compatibilité quasi parfaite. Azahar en est un fork.

## 🔧 Étape 1 : Téléchargement de Citra

### Option 1 : Azahar Officiel
```bash
# Site officiel
https://github.com/azahar-emu/azahar/releases
```

1. **Cliquez** sur "Download for Windows"
2. **Téléchargez** `azahar-XXXX-rc1-windows-msvc-installer.exe`
3. **Extrayez** dans un dossier dédié (par exemple, `Documents\Azahar` ou à la racine d'un autre disque, pas C)

## Téléchargement de jeu

### Étape 1 : Accéder à la bibliothèque de jeux

Allez sur **[🎮 Axekin Games - Nintendo 3DS](https://www.axekin.com/games?platform=3ds)** pour accéder à la collection de jeux Nintendo 3DS.

### Étape 2 : Télécharger le jeu

1. **Recherchez** le jeu souhaité dans la liste
2. **Cliquez** sur le bouton de téléchargement
3. **Attendez** que le téléchargement se termine

### Étape 3 : Extraction des fichiers

Une fois le téléchargement terminé, **extrayez** l'archive avec l'un de ces logiciels :

| Logiciel | Lien de téléchargement | Compatibilité |
|----------|------------------------|---------------|
| **7-Zip** | [Télécharger 7-Zip](https://www.7-zip.org/) | Windows/Linux |
| **WinRAR** | [Télécharger WinRAR](https://www.win-rar.com/) | Windows |

> **💡 Astuce** : 7-Zip est gratuit et open-source, tandis que WinRAR nécessite une licence après la période d'essai.

**Résultat** : Vous obtiendrez des fichiers de jeu prêts à être utilisés avec la 3DS ! 🎯

## 📁 Étape 2 : Structure des dossiers

Créez cette structure de dossiers pour organiser vos fichiers :

Pour une organisation optimale de votre bibliothèque, voici l'arborescence recommandée :

````
Jeux 3DS/
├── Animal Crossing - Happy Home Designer/
│   ├── BASE/                # 🎮 Jeu de base (fichier principal)
│   ├── UPDATE/              # 🔄 Mise à jour du jeu (recommandé)
│   └── DLC/                 # 📦 Contenu téléchargeable (optionnel)
├── Dead or Alive - Dimensions/
│   ├── BASE/                # 🎮 Jeu de base
│   ├── UPDATE/              # 🔄 Mise à jour du jeu
│   └── DLC/                 # 📦 DLC additionnel
├── Ben 10 - Galactic Racing/
│   ├── BASE/
│   ├── UPDATE/
│   └── DLC/
└── Captain America - Super Soldier/
    ├── BASE/
    └── UPDATE/              # (Pas de DLC pour ce jeu)
````


### Types de contenu


- **BASE** 📁 : Les fichiers principaux du jeu que vous avez téléchargés
- **UPDATE** 📁 : Mises à jour et correctifs (recommandé)
- **DLC** 📁 : Contenu payant additionnel (optionnel mais recommandé)


✅ **Détection automatique** : Les jeux sont ajoutés automatiquement dans l'émulateur  
✅ **Gestion simplifiée** : Pas besoin d'ajouter manuellement chaque ROM  
✅ **Organisation claire** : Facile de voir quel contenu vous avez par jeu  
✅ **Maintenance facile** : Ajouter/supprimer du contenu est simple

> **📝 Note importante** : Si un jeu n'a pas de mises à jour ou de DLC, vous n'avez pas besoin de créer ces dossiers. Ne créez des dossiers que pour le contenu que vous possédez.

### Résultat

Une fois cette structure en place, votre émulateur détectera automatiquement tous les jeux dans le dossier "Jeux 3DS" et les affichera proprement dans votre bibliothèque ! 🎯

## 💡 Configuration portable (Recommandé)


**Avant le premier lancement**, créez un dossier nommé `user` à la racine de l'installation d'Azahar. Cela rendra l'installation entièrement portable.

### Avantages du mode portable

| Aspect | Mode normal | Mode portable |
|--------|-------------|---------------|
| **Configurations** | Stockées dans le système | Stockées dans le dossier |
| **Sauvegardes** | Dispersées sur l'ordinateur | Centralisées dans un dossier |
| **Portabilité** | ❌ Lié au système | ✅ Facilement déplaçable |
| **Sauvegarde** | Plus difficile à localiser | Simple à sauvegarder |

### Structure après la création du dossier portable

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


**Toutes vos données** (configurations, sauvegardes, profils) seront stockées dans le dossier `user`, ce qui facilite grandement la gestion et les sauvegardes !

### Étapes de création

1. Accédez au dossier d'installation d'Azahar
2. Créez un nouveau dossier nommé exactement `user`
3. Lancez Azahar — il détectera automatiquement le mode portable

> **📝 Note** : Cela doit être fait **avant** le premier lancement pour prendre effet !

## ⚙️ Étape 3 : Installation et premier lancement

### Prérequis Windows

### Premier lancement
1. Exécutez `azahar.exe`
2. Définissez votre dossier de jeux (double-cliquez sur le menu, ajoutez le dossier "Jeux 3DS")

## ⚙️ Étape 4 : Configuration optimale

### Paramètres généraux
```
Émulation → Configurer → Général
```
- **Confirmer la sortie lorsque l'émulation est en cours** : ✅ Activé
- **Mettre l'émulation en pause en arrière-plan** : ✅ Activé (optionnel)
- **Activer la présence Discord** : ✅ Activé (optionnel)

### Configuration du système
```
Émulation → Configurer → Système
```
- **Région** : Europe (ou votre région)
- **Langue** : Votre langue
- **ID de la console** : Aléatoire (généré automatiquement)
- **Activer New 3DS** : ✅ Activé (pour de meilleures performances)

### Paramètres graphiques recommandés

#### Onglet Graphismes
```
Graphismes → Général
- Résolution interne : 2x Natif (400x480) ou plus. Des valeurs plus élevées augmentent l'utilisation du GPU.
- Activer le filtrage linéaire : ✅ Activé
→ Général
```

#### Onglet Disposition

```
Graphismes → Disposition
```


Cette section vous permet de personnaliser l'affichage des deux écrans de la 3DS en fonction de vos préférences visuelles et de votre matériel.

### Dispositions d'écran

**Options prédéfinies :**

| Mode | Description | Recommandation |
|------|-------------|----------------|
| **Par défaut** | Disposition standard de Nintendo | ✅ **Débutants** |
| **Écran unique** | Affiche uniquement l'écran actif | Concentration sur le gameplay |
| **Large** | S'étend sur toute la largeur | Moniteurs larges |
| **Côte à côte** | Écrans horizontaux | **Recommandé pour le jeu** |
| **Fenêtres séparées** | Deux fenêtres indépendantes | Configurations multi-moniteurs |
| **Superposé** | Écrans empilés verticalement | Gain de place |
| **Disposition personnalisée** | Configuration manuelle | ⭐ **Le plus flexible** |

### Configuration de la disposition personnalisée


**Écran supérieur :**
- **Position X/Y** : `0px, 0px` (coin supérieur gauche)
- **Largeur/Hauteur** : `800px, 480px` (ratio 4:3 idéal)

**Écran inférieur :**
- **Position X/Y** : `80px, 500px` (légèrement centré)
- **Largeur/Hauteur** : `640px, 480px` (proportionnel)

**Opacité de l'écran inférieur** : `100%` (entièrement visible)

### Paramètres d'affichage

#### Options générales
```
Écrans → Configuration
```

**Ajustements recommandés :**
- **Échanger les écrans** : ❌ Désactivé (préserver la logique DS)
- **Pivoter les écrans vers le haut** : ❌ Désactivé
- **Écart entre les écrans** : `0.00` à `4.00` selon les préférences
- **Échelle de l'écran principal** : `4.00` (écran principal plus grand)
- **Position de l'écran secondaire** : `En bas à droite` (zone tactile)

#### Mode écran unique


**Cas d'utilisation :**
- Jeux qui n'utilisent qu'un seul écran principal
- Économiser les ressources de rendu
- Se concentrer sur l'action principale

**Configuration :**
- **Étirer** : ☑️ Coché pour les deux écrans
- **Marge gauche/droite** : `0px` (plein écran)
- **Marge haut/bas** : `0px` (utilisation maximale)

> **💡 Conseil pratique** : Testez différentes dispositions en fonction du jeu. Les RPG bénéficient souvent de dispositions personnalisées tandis que les jeux d'action préfèrent le côte à côte.

#### Onglet Avancé
```
Graphismes → Avancé
- API graphique : OpenGL (recommandé) ou Vulkan
- Activer le rendu matériel : ✅ Activé
- Activer le shader matériel : ✅ Activé
- Activer la multiplication précise : ✅ Activé
- Utiliser le cache de shaders sur disque : ✅ Activé
- Activer la VSync : ✅ Activé
```

### Configuration audio
```
Audio
- Émulation : HLE
```

### Configuration des contrôles

#### Méthode de détection automatique
```
Contrôles → Configurer
1. Cliquez sur "Configuration auto"
2. Appuyez sur les boutons de votre manette
3. Testez toutes les entrées
```

## ⚙️ Étape 🌐 Multijoueur (configuration rapide)

Vous pouvez connecter Citra/Azahar à un service multijoueur externe en modifiant la configuration locale. Attention : fermez complètement Citra/Azahar avant de modifier les fichiers de configuration, sinon vos modifications seront écrasées.

1. Ouvrez le dossier de configuration :

   - Pour une installation Windows standard : `C:\\Users\\<VotreUtilisateur>\\AppData\\Roaming\\citra\\config\\`
   - Pour une installation portable : ouvrez le dossier `user` à la racine d'Azahar/Citra

2. Modifiez le fichier `qt-config.ini` (avec le Bloc-notes ou un éditeur de texte) et changez/ajoutez ces deux lignes :

```
web_api_url\\default=false
web_api_url=http://88.198.47.46:5000/
```

3. Enregistrez et fermez l'éditeur, puis relancez Citra/Azahar.

Héberger un salon dédié (exemple de `host.bat` pour Windows)

Si vous souhaitez héberger via un fichier batch dédié, créez ou modifiez un `host.bat` et collez l'exemple ci-dessous. Vous pouvez changer le nom du salon et l'ID du titre.

```
citra-room ^
  --room-name "le nom de votre salon" ^
  --room-description "Tous les jeux" ^
  --preferred-game "Super Smash Bros" ^
  --preferred-game-id "00040000000EDF00" ^
  --port 24872 ^
  --max_members 16 ^
  --token "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" ^
  --enable-citra-mods ^
  --web-api-url http://88.198.47.46:5000 ^
  --ban-list-file "INSÉRER_LE_CHEMIN_DU_FICHIER_DE_BANNISSEMENT_ICI"
pause
```

Notes :

- Remplacez `--token` par votre vrai jeton si nécessaire.
- `--preferred-game-id` correspond à l'ID du titre du jeu (16 chiffres hexadécimaux). Laissez vide pour accepter tous les jeux.
- `--web-api-url` doit pointer vers le serveur API (ici : `http://88.198.47.46:5000`).

Avec ces étapes, Citra/Azahar utilisera le service multijoueur spécifié et le `host.bat` vous permettra d'héberger un salon depuis votre machine.

### Formats pris en charge
- **.CCI** : Seul format pris en charge par mes ROMs avec Azahar en raison des restrictions anti-piratage


## ❓ FAQ - Foire Aux Questions

### Questions générales

**Q : Azahar peut-il faire tourner tous les jeux 3DS ?**  
**R :** Environ 90% des jeux 3DS fonctionnent de bien à parfaitement. Consultez la base de données de compatibilité pour votre titre spécifique.

**Q : La 3D stéréoscopique fonctionne-t-elle ?**  
**R :** Oui, avec des écrans compatibles 3D ou en utilisant le mode côte à côte pour la VR.

**Q : Puis-je utiliser mes vraies sauvegardes de 3DS ?**  
**R :** Oui — avec Checkpoint ou JKSM, vous pouvez transférer les sauvegardes dans les deux sens.

### Questions techniques

**Q : Pourquoi certains jeux sont-ils lents ?**  
**R :** Les jeux 3DS sont optimisés pour un matériel spécifique. L'émulation est plus exigeante, surtout pour les titres complexes.

**Q : OpenGL ou Vulkan ?**  
**R :** OpenGL est plus stable et compatible. Vulkan peut offrir de meilleures performances sur les GPU modernes.

**Q : L'activation du mode New 3DS améliore-t-elle tout ?**  
**R :** Principalement pour les jeux qui utilisent nativement les fonctionnalités de la New 3DS (Xenoblade, Monster Hunter, etc.) et certains homebrews.

### Problèmes courants

**Q : "Impossible de déterminer la région du système" ?**  
**R :** Installez les fichiers système (aes_keys.txt) et configurez la région dans les paramètres.

**Q : Les textures HD ne s'affichent pas ?**  
**R :** Vérifiez que "Textures personnalisées" est activé et que l'ID du titre correspond au dossier.

**Q : Comment améliorer les performances sur Android ?**  
**R :** Utilisez Citra MMJ, baissez la résolution, activez le saut d'images si nécessaire.

Profitez de vos jeux 3DS en haute définition ! 🎮✨
