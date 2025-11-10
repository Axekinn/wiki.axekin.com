---
title: "Jouer avec Clavier & Souris sur l'émulateur Cemu"
description: "Tutoriel détaillé pour configurer les contrôles clavier-souris sur Cemu avec Mouse2Joystick et ViGEmBus - Guide de configuration pas à pas"
date: 2025-06-04
lastmod: 2025-06-04
categories: ["PC"]
tags: ["cemu", "wiiu", "clavier-souris", "mouse2joystick", "vigembus", "émulation", "nintendo"]
series: ["Guides d'Émulation"]
author: "Axekin"
draft: false
toc: true
math: false
featured: false
weight: 20
aliases: 
  - /fr/cemu-clavier-souris/
  - /fr/guides/cemu-clavier-souris/
summary: "Apprenez à jouer aux jeux Wii U sur Cemu avec un clavier et une souris. Guide complet avec Mouse2Joystick et configuration détaillée."
cover: "covers/cemu-keyboard-mouse.webp"
image: "covers/cemu-keyboard-mouse.webp"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

> **⚠️ Note Importante**: Bien que possible, l'expérience clavier-souris sur Cemu ne sera pas aussi agréable qu'avec une manette. Cette solution convient aux joueurs qui ne possèdent pas de gamepad compatible.

## Introduction

Jouer aux jeux **Wii U** sur l'émulateur **Cemu** avec un **clavier et une souris** nécessite d'utiliser des outils tiers pour simuler une manette. Ce guide explique comment configurer cette solution avec **Mouse2Joystick** et **ViGEmBus**.

Cette méthode est particulièrement utile pour :
- Les joueurs qui n'ont pas de manette compatible
- Tester rapidement des jeux sans investir dans un gamepad
- Certains genres de jeux adaptés au clavier-souris

### Processus Général

1. **Télécharger** ViGEmBus et Mouse2Joystick
2. **Installer** ViGEmBus (pilote de manette virtuelle)
3. **Configurer** Mouse2Joystick selon vos préférences
4. **Paramétrer** Cemu pour reconnaître les contrôles
5. **Tester** et ajuster les paramètres

## Prérequis et Téléchargements

### Logiciels Requis

**Applications essentielles :**
- **ViGEmBus**: Pilote pour manettes virtuelles
- **Mouse2Joystick**: Convertit les signaux clavier/souris en signaux de manette
- **Cemu**: Émulateur Wii U (dernière version stable)

### Téléchargements

#### ViGEmBus (Pilote de Manette Virtuelle)

**🔗 [Télécharger ViGEmBus](https://github.com/ViGEm/ViGEmBus/releases)**

**Instructions de téléchargement :**
1. **Accédez** à la page des versions
2. **Téléchargez** le dernier fichier `.msi`
3. **Exemple**: `ViGEmBus_Setup_1.17.333.msi`

**Fonctionnalités de ViGEmBus :**
- **Gratuit** et open-source
- **Compatible** avec Windows 10/11
- **Stable** et régulièrement mis à jour
- **Requis** pour simuler des manettes Xbox

#### Mouse2Joystick (Convertisseur de Contrôles)

**🔗 [Télécharger Mouse2Joystick](https://github.com/memethyl/Mouse2Joystick/releases)**

**Instructions de téléchargement :**
1. **Téléchargez** le dernier fichier `.zip`
2. **Exemple**: `Mouse2Joystick_v2.3.1.zip`
3. **Extrayez** dans un dossier dédié (ex: `C:\Outils\Mouse2Joystick\`)

**Fonctionnalités de Mouse2Joystick :**
- **Portable**: aucune installation requise
- **Personnalisable**: mappage des touches configurable
- **Léger**: impact minimal sur les performances
- **Temps réel**: conversion instantanée des mouvements

## Étape 1 : Installation de ViGEmBus

### Processus d'Installation

#### Lancement de l'Installateur

1. **Localisez** le fichier `.msi` téléchargé
2. **Double-cliquez** pour démarrer l'installation
3. **Acceptez** les autorisations d'administrateur si demandé

#### Configuration de l'Installation

**Étapes d'installation :**
1. **Bienvenue** → Cliquez sur "Next"
2. **Contrat de Licence** → Acceptez et cliquez sur "Next"
3. **Dossier de Destination** → Laissez par défaut, cliquez sur "Next"
4. **Prêt à Installer** → Cliquez sur "Install"
5. **Terminé** → Cliquez sur "Finish"

**Composants installés :**
- Pilote de bus virtuel
- Bibliothèques système requises
- Interface de gestion des périphériques

### Vérification de l'Installation

#### Contrôle dans le Gestionnaire de Périphériques

1. **Clic droit** sur "Ce PC" → **Gestionnaire de périphériques**
2. **Développez** "Périphériques système"
3. **Vérifiez** la présence de "ViGEmBus Device"


## Étape 2 : Configuration de Mouse2Joystick

### Extraction et Première Utilisation

#### Préparation du Logiciel

1. **Naviguez** vers le fichier `.zip` téléchargé
2. **Clic droit** → **Extraire tout**
3. **Choisissez** un dossier permanent (ex: `C:\Outils\Mouse2Joystick\`)
4. **Lancez** `Mouse2Joystick.exe`

### Interface et Configuration de Base

#### Premier Lancement

Une fois lancé, Mouse2Joystick affiche une interface simple :


#### Configuration Recommandée

**Paramètres de base suggérés :**

**Section "Mouse Settings" :**
```
Mouse Sensitivity X: 3.0
Mouse Sensitivity Y: 3.0
Mouse Deadzone: 0.1
Invert Y-axis: Selon préférence
```

**Section "Controller Settings" :**
```
Controller Type: Xbox 360 Controller
Vibration: Désactivé (non nécessaire)
```

### Mappage des Touches

#### Configuration des Contrôles

**Mappage standard recommandé :**

| Action Wii U | Touche Clavier | Fonction |
|--------------|----------------|----------|
| **Stick Gauche** | ZQSD | Mouvement |
| **Stick Droit** | Souris | Caméra |
| **Bouton A** | Espace | Action principale |
| **Bouton B** | Ctrl Gauche | Action secondaire |
| **Bouton X** | E | Interaction |
| **Bouton Y** | A | Menu/Inventaire |
| **L/R** | Maj/Tab | Gâchettes hautes |
| **ZL/ZR** | Clic Gauche/Droit | Gâchettes numériques |

#### Paramètres Avancés

**Sensibilité de la souris :**
- **Jeux FPS**: Sensibilité élevée (4.0-5.0)
- **Jeux d'aventure**: Sensibilité moyenne (2.5-3.5)
- **Jeux de plateforme**: Sensibilité basse (1.5-2.5)

**Zones mortes :**
- **Souris**: 0.05-0.15 (évite les micro-mouvements)
- **Clavier**: 0.0 (réponse instantanée)

## Étape 3 : Configuration de Cemu

### Accès aux Paramètres de Contrôle

#### Navigation dans Cemu

1. **Lancez** Cemu
2. **Menu** "Options" → **"Input Settings"**
3. **Supprimez** toutes les manettes existantes avec le bouton **"-"**


### Suppression des Manettes Existantes

#### Nettoyage de la Configuration

**Étapes de suppression :**
1. **Identifiez** toutes les manettes listées
2. **Cliquez** sur le bouton **"-"** pour chaque manette
3. **Confirmez** la suppression si demandé
4. **Vérifiez** que la liste est vide


### Ajout de Nouvelles Manettes

#### Configuration XInput (Mouse2Joystick)

**Avec Mouse2Joystick ouvert :**
1. **Cliquez** sur le bouton **"+"**
2. **Sélectionnez** "XInput" comme API
3. **Choisissez** "Controller 1" qui devrait apparaître
4. **Confirmez** la sélection


#### Configuration Clavier (Touches Additionnelles)

**Pour les touches non mappées :**
1. **Cliquez** à nouveau sur **"+"**
2. **Sélectionnez** "Keyboard" comme API
3. **Choisissez** "Controller 1"
4. **Configurez** des touches Wii U spécifiques


### Configuration Finale des Touches

#### Mappage dans Cemu

**Configuration recommandée :**

**Manette XInput (Mouse2Joystick) :**
```
Stick Gauche: Mouvement du personnage
Stick Droit: Contrôle de la caméra
Bouton A: Action principale
Bouton B: Retour/Annuler
Bouton X: Action secondaire
Bouton Y: Menu
Gâchette L/R: Gâchettes rapides
Gâchette L/R: Gâchettes analogiques
```

**Manette Clavier (touches spéciales) :**
```
Plus: Entrée (Menu principal)
Moins: Échap (Pause)
Home: Tab (Menu Home)
Capture d'écran: F12
```

## Conclusion

Jouer aux jeux **Wii U** sur **Cemu** avec un clavier et une souris est possible grâce à **Mouse2Joystick** et **ViGEmBus**. Bien que l'expérience ne soit pas optimale pour tous les jeux, cette solution permet de découvrir l'excellent catalogue de la Wii U sans investir dans une manette.


### Conseils Finaux

**Pour une meilleure expérience :**
- Commencez avec des jeux adaptés (Zelda, RPG)
- Prenez le temps d'ajuster les sensibilités
- Sauvegardez vos configurations
- Envisagez d'acheter une manette à terme

## FAQ - Foire Aux Questions

**Q : Cette méthode fonctionne-t-elle avec tous les jeux Wii U ?**
R : Non, certains jeux nécessitent absolument une manette pour une expérience correcte (Mario Kart, Smash Bros, etc.).

**Q : Puis-je utiliser cette configuration pour d'autres émulateurs ?**
R : Oui, Mouse2Joystick fonctionne avec la plupart des émulateurs supportant XInput.

**Q : La latence est-elle importante ?**
R : La latence est généralement faible mais peut varier en fonction de votre configuration matérielle.

**Q : Dois-je garder Mouse2Joystick ouvert en permanence ?**
R : Oui, Mouse2Joystick doit rester ouvert pendant que vous jouez pour maintenir la simulation de la manette.

**Q : Cette méthode affecte-t-elle les performances de Cemu ?**
R : L'impact est minime, car Mouse2Joystick est très léger en ressources.
