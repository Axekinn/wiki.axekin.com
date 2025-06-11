---
title: "Comment Réinstaller Yuzu & Ryujinx en Gardant ses Sauvegardes"
description: "Guide complet pour réinstaller proprement les émulateurs Nintendo Switch Yuzu et Ryujinx tout en préservant vos sauvegardes de jeux"
date: 2025-06-04
lastmod: 2025-06-04
categories: ["gaming", "emulation", "tutorials"]
tags: ["yuzu", "ryujinx", "nintendo-switch", "emulation", "sauvegarde", "backup", "reinstallation"]
series: ["Guides Émulation"]
author: "Axekin"
draft: false
toc: true
math: false
featured: false
weight: 15
aliases: 
  - /reinstall-yuzu-ryujinx/
  - /guides/emulator-backup/
summary: "Apprenez à réinstaller complètement Yuzu et Ryujinx sans perdre vos précieuses sauvegardes. Guide détaillé avec captures d'écran et méthodes de sauvegarde."
cover: "/images/covers/yuzu-ryujinx-backup.webp"
image: "/images/covers/yuzu-ryujinx-backup.webp"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

> **⚠️ Important** : Toujours sauvegarder vos données avant toute réinstallation ! Ce guide vous montre comment procéder en sécurité.

## Introduction

Il arrive parfois que **Yuzu** ou **Ryujinx** rencontrent des problèmes nécessitant une réinstallation complète. Corruption de fichiers, mises à jour problématiques, ou simplement envie de repartir sur des bases saines... 

Ce guide vous explique **comment réinstaller proprement** ces émulateurs **sans perdre vos sauvegardes** de jeux Nintendo Switch.

### Pourquoi réinstaller ?

**Problèmes courants nécessitant une réinstallation :**
- Émulateur qui refuse de démarrer
- Performances dégradées après une mise à jour
- Fichiers de configuration corrompus
- Problèmes graphiques persistants
- Messages d'erreur récurrents

## Méthode pour Yuzu

### Étape 1 : Sauvegarder les données de jeu

#### Localiser les sauvegardes

1. **Lancez Yuzu** (si possible)
2. **Clic droit** sur le jeu souhaité dans la liste
3. Sélectionnez **"Open Save Data Location"** (ou "Ouvrir l'emplacement des données de sauvegarde")

![Menu contextuel Yuzu](/images/yuzu-right-click-menu.png)
*Menu clic droit sur un jeu dans Yuzu*

#### Sauvegarder le contenu

4. **Sélectionnez tout le contenu** du dossier qui s'ouvre (Ctrl+A)
5. **Copiez** les fichiers (Ctrl+C)
6. **Créez un dossier** de sauvegarde sur votre bureau ou disque dur
7. **Collez** le contenu dans ce dossier (Ctrl+V)

**Structure recommandée pour l'organisation :**
```
📁 Backup_Yuzu_2025-06-04/
├── 📁 The_Legend_of_Zelda_BOTW/
│   ├── save_data.bin
│   └── other_files...
├── 📁 Super_Mario_Odyssey/
│   ├── save_data.bin
│   └── other_files...
└── 📁 Pokemon_Legends_Arceus/
    ├── save_data.bin
    └── other_files...
```

#### Répéter pour tous les jeux

8. **Répétez cette opération** pour chaque jeu dont vous voulez conserver la sauvegarde
9. **Notez le nom** de chaque dossier pour faciliter la restauration

### Étape 2 : Supprimer les données Yuzu

#### Accéder au dossier de configuration

1. Appuyez sur **Windows + R**
2. Tapez `%appdata%` et appuyez sur **Entrée**

![Boîte de dialogue Exécuter](/images/windows-run-appdata.png)
*Accès au dossier AppData via Windows + R*

#### Supprimer le dossier Yuzu

3. Naviguez jusqu'au dossier **"yuzu"**
4. **Supprimez complètement** ce dossier
5. **Videz la corbeille** pour libérer l'espace

> **💡 Conseil** : Si le dossier est en cours d'utilisation, fermez complètement Yuzu via le gestionnaire des tâches.

### Étape 3 : Réinstaller Yuzu

#### Installation propre

1. **Téléchargez** la dernière version de Yuzu depuis le site officiel
2. **Désinstallez** l'ancienne version si elle est encore présente
3. **Installez** la nouvelle version avec les paramètres par défaut
4. **Lancez** Yuzu pour la configuration initiale

#### Configuration de base

5. **Configurez** les paramètres graphiques selon votre matériel
6. **Ajoutez** vos dossiers de jeux
7. **Installez** les firmware et clés si nécessaire

### Étape 4 : Restaurer les sauvegardes

#### Remettre les fichiers de sauvegarde

1. **Lancez** vos jeux une première fois pour créer les dossiers de sauvegarde
2. **Fermez** Yuzu complètement
3. **Clic droit** sur chaque jeu → "Open Save Data Location"
4. **Remplacez** le contenu par vos fichiers sauvegardés

**Vérification :**
- Lancez le jeu pour vérifier que la sauvegarde est bien chargée
- Vérifiez la progression, les statistiques, etc.

## Méthode pour Ryujinx

### Étape 1 : Sauvegarder les données Ryujinx

#### Localiser les sauvegardes utilisateur

1. **Lancez Ryujinx**
2. **Clic droit** sur le jeu souhaité
3. Sélectionnez **"Open User Save Directory"**

![Menu Ryujinx](/images/ryujinx-save-menu.png)
*Options de sauvegarde dans Ryujinx*

#### Sauvegarder les données additionnelles

4. Si disponible, cliquez aussi sur **"Open Mod Data Directory"** ou données additionnelles
5. **Copiez** tout le contenu dans vos dossiers de sauvegarde
6. **Organisez** par nom de jeu comme pour Yuzu

### Étape 2 : Supprimer Ryujinx

#### Localiser le dossier de configuration

1. Appuyez sur **Windows + R**
2. Tapez `%appdata%` et validez
3. Naviguez jusqu'au dossier **"Ryujinx"**
4. **Supprimez** complètement ce dossier

### Étape 3 : Réinstallation et restauration

#### Réinstaller Ryujinx

1. **Téléchargez** la dernière version de Ryujinx
2. **Installez** proprement l'émulateur
3. **Configurez** les paramètres de base

#### Restaurer les sauvegardes

4. **Lancez chaque jeu** une première fois
5. **Fermez** Ryujinx
6. **Remplacez** les fichiers de sauvegarde par vos backups
7. **Testez** que tout fonctionne correctement

## Comparaison des méthodes

| Aspect | Yuzu | Ryujinx |
|--------|------|---------|
| **Accès aux saves** | Clic droit → Open Save Data Location | Clic droit → Open User Save Directory |
| **Dossier config** | `%appdata%\yuzu` | `%appdata%\Ryujinx` |
| **Données supplémentaires** | Automatique | Mod Data Directory séparé |
| **Complexité** | Simple | Simple |

## Conseils et bonnes pratiques

### Sauvegardes automatiques

**Script de sauvegarde automatique (Windows) :**
```batch
@echo off
set backup_dir=C:\Backup_Emulateurs\%date:~-4,4%-%date:~-10,2%-%date:~-7,2%
mkdir "%backup_dir%"

xcopy "%appdata%\yuzu\nand\user\save" "%backup_dir%\Yuzu_Saves\" /E /I /Y
xcopy "%appdata%\Ryujinx\bis\user\save" "%backup_dir%\Ryujinx_Saves\" /E /I /Y

echo Sauvegarde terminée dans %backup_dir%
pause
```

### Vérifications importantes

**Avant la réinstallation :**
- ✅ Sauvegardes complètes créées
- ✅ Noms des jeux notés
- ✅ Firmware/clés disponibles
- ✅ Configuration matérielle notée

**Après la réinstallation :**
- ✅ Émulateur démarre correctement
- ✅ Jeux détectés
- ✅ Sauvegardes restaurées
- ✅ Performances satisfaisantes

### Problèmes courants et solutions

#### 🚫 Sauvegardes non reconnues

**Causes possibles :**
- Mauvais emplacement de fichiers
- Versions d'émulateur incompatibles
- Fichiers corrompus

**Solutions :**
1. Vérifiez l'emplacement exact des fichiers
2. Essayez avec une version similaire de l'émulateur
3. Utilisez une sauvegarde plus ancienne

#### 💾 Fichiers de sauvegarde volumineux

**Optimisation :**
- Compressez les dossiers de sauvegarde (.zip, .7z)
- Utilisez un stockage cloud pour la sécurité
- Créez des sauvegardes incrémentielles

#### ⚠️ Perte de configuration

**Sauvegarde préventive :**
```
📁 Backup_Complet/
├── 📁 Saves/ (sauvegardes de jeux)
├── 📁 Config/ (fichiers de configuration)
├── 📁 Keys/ (clés et firmware)
└── 📄 settings_backup.txt (paramètres notés)
```

## Outils recommandés

### Gestionnaires de sauvegarde

| Outil | Description | Avantages |
|-------|-------------|-----------|
| **JKSV** | Gestionnaire Switch homebrew | Sauvegardes natives |
| **Checkpoint** | Alternative à JKSV | Interface conviviale |
| **Save Manager** | Outil PC tiers | Automatisation |

### Synchronisation cloud

**Services recommandés :**
- **Google Drive** - 15 GB gratuits
- **OneDrive** - Intégration Windows
- **Dropbox** - Synchronisation rapide
- **Git** - Versioning pour experts

## Dépannage avancé

### Récupération d'urgence

**Si la réinstallation échoue :**

1. **Mode sans échec** : Démarrez Windows en mode sans échec
2. **Nettoyage registre** : Utilisez CCleaner ou équivalent
3. **Installation portable** : Testez avec les versions portables
4. **Restauration système** : Point de restauration Windows

### Migration vers un nouveau PC

**Transférer tout l'environnement :**

```bash
# Dossiers à copier
%appdata%\yuzu\           → Nouveau PC
%appdata%\Ryujinx\        → Nouveau PC
[Dossier_Jeux]\           → Nouveau PC
[Dossier_Backup]\         → Nouveau PC
```

## Conclusion

La réinstallation de **Yuzu** et **Ryujinx** tout en préservant vos sauvegardes est un processus simple si vous suivez la bonne méthode. L'essentiel est de **toujours sauvegarder avant d'agir** et de procéder étape par étape.

### Points clés à retenir

> **🎯 Résumé de la procédure :**
> 1. **Sauvegardez** toutes les données de jeu importantes
> 2. **Supprimez** proprement les dossiers de configuration
> 3. **Réinstallez** l'émulateur avec une version récente
> 4. **Restaurez** vos sauvegardes et testez
> 5. **Configurez** selon vos préférences

### Maintenance préventive

**Pour éviter les réinstallations :**
- Mises à jour régulières mais prudentes
- Sauvegardes automatiques hebdomadaires  
- Surveillance des performances
- Nettoyage périodique des caches

## FAQ - Questions fréquentes

**Q : Puis-je transférer mes sauvegardes entre Yuzu et Ryujinx ?**
R : Généralement non directement, les formats de sauvegarde diffèrent. Utilisez des outils de conversion spécialisés si nécessaire.

**Q : Combien de temps faut-il pour la procédure complète ?**
R : Environ 30-60 minutes selon le nombre de jeux et la vitesse de votre PC.

**Q : Les sauvegardes en ligne (Nintendo Switch Online) sont-elles compatibles ?**
R : Non, les sauvegardes d'émulateur et console officielle ne sont pas interchangeables.

**Q : Que faire si j'ai oublié de sauvegarder avant la réinstallation ?**
R : Vérifiez la corbeille Windows, utilisez des outils de récupération de fichiers, ou restaurez depuis une sauvegarde système.

---

**Ce guide vous a aidé ?** Partagez vos expériences et astuces supplémentaires en commentaires !

**Articles connexes :**
- [Configuration Optimale de Yuzu](/fr/post/yuzu-setup/)
- [Guide Complet de Ryujinx](/fr/post/ryujinx-guide/)
- [Meilleures Performances Émulation Switch](/fr/post/switch-emulation-performance/)
````