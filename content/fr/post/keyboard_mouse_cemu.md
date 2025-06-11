---
title: "Guide Complet : Jouer Clavier-Souris sur l'Émulateur Cemu"
description: "Tutoriel détaillé pour configurer le contrôle clavier-souris sur Cemu avec Mouse2Joystick et ViGEmBus - Configuration étape par étape"
date: 2025-06-04
lastmod: 2025-06-04
categories: ["gaming", "emulation", "tutorials"]
tags: ["cemu", "wiiu", "clavier-souris", "mouse2joystick", "vigembus", "emulation", "nintendo"]
series: ["Guides Émulation"]
author: "Axekin"
draft: false
toc: true
math: false
featured: false
weight: 20
aliases: 
  - /fr/cemu-clavier-souris/
  - /fr/guides/cemu-keyboard-mouse/
summary: "Apprenez à jouer aux jeux Wii U sur Cemu avec un clavier et une souris. Guide complet avec Mouse2Joystick et configuration détaillée."
cover: "/images/covers/cemu-keyboard-mouse.webp"
image: "/images/covers/cemu-keyboard-mouse.webp"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

> **⚠️ Note Importante** : Bien que possible, l'expérience clavier-souris sur Cemu ne sera pas aussi agréable qu'avec une manette. Cette solution convient aux joueurs n'ayant pas de contrôleur compatible.

## Introduction

Jouer aux jeux **Wii U** sur l'émulateur **Cemu** avec un **clavier et une souris** nécessite l'utilisation d'outils tiers pour simuler une manette. Ce guide vous explique comment configurer cette solution avec **Mouse2Joystick** et **ViGEmBus**.

Cette méthode est particulièrement utile pour :
- Les joueurs n'ayant pas de manette compatible
- Tester rapidement des jeux sans investir dans un contrôleur
- Certains genres de jeux adaptés au clavier-souris

### Processus général

1. **Télécharger** ViGEmBus et Mouse2Joystick
2. **Installer** ViGEmBus (pilote de manette virtuelle)
3. **Configurer** Mouse2Joystick selon vos préférences
4. **Paramétrer** Cemu pour reconnaître les contrôles
5. **Tester** et ajuster les paramètres

## Prérequis et téléchargements

### Logiciels nécessaires

**Applications requises :**
- **ViGEmBus** : Pilote pour manettes virtuelles
- **Mouse2Joystick** : Convertit clavier/souris en signaux manette
- **Cemu** : Émulateur Wii U (dernière version stable)

### Téléchargements

#### ViGEmBus (Pilote de manette virtuelle)

**🔗 [Télécharger ViGEmBus](https://github.com/ViGEm/ViGEmBus/releases)**

**Instructions de téléchargement :**
1. **Accédez** à la page des releases
2. **Téléchargez** le fichier `.msi` le plus récent
3. **Exemple** : `ViGEmBus_Setup_1.17.333.msi`

![ViGEmBus Download](/images/vigembus-download.png)
*Page de téléchargement ViGEmBus*

**Caractéristiques ViGEmBus :**
- **Gratuit** et open-source
- **Compatible** Windows 10/11
- **Stable** et régulièrement mis à jour
- **Nécessaire** pour simuler des manettes Xbox

#### Mouse2Joystick (Convertisseur de contrôles)

**🔗 [Télécharger Mouse2Joystick](https://github.com/memethyl/Mouse2Joystick/releases)**

**Instructions de téléchargement :**
1. **Téléchargez** le fichier `.zip` le plus récent
2. **Exemple** : `Mouse2Joystick_v2.3.1.zip`
3. **Extrayez** dans un dossier dédié (ex: `C:\Tools\Mouse2Joystick\`)

![Mouse2Joystick Download](/images/mouse2joystick-download.png)
*Page de téléchargement Mouse2Joystick*

**Caractéristiques Mouse2Joystick :**
- **Portable** : aucune installation requise
- **Personnalisable** : mappage des touches configurable
- **Léger** : faible impact sur les performances
- **Temps réel** : conversion instantanée des mouvements

## Étape 1 : Installation de ViGEmBus

### Processus d'installation

#### Lancement de l'installateur

1. **Localisez** le fichier `.msi` téléchargé
2. **Double-cliquez** pour lancer l'installation
3. **Acceptez** les permissions administrateur si demandées

![ViGEmBus Installer](/images/vigembus-installer.png)
*Assistant d'installation ViGEmBus*

#### Configuration de l'installation

**Étapes d'installation :**
1. **Welcome** → Cliquez "Next"
2. **License Agreement** → Acceptez et cliquez "Next"
3. **Destination Folder** → Laissez par défaut, cliquez "Next"
4. **Ready to Install** → Cliquez "Install"
5. **Completed** → Cliquez "Finish"

**Composants installés :**
- Pilote de bus virtuel
- Bibliothèques système nécessaires
- Interface de gestion des périphériques

### Vérification de l'installation

#### Contrôle dans le Gestionnaire de périphériques

1. **Clic droit** sur "Ce PC" → **Gestionnaire de périphériques**
2. **Développez** "Périphériques système"
3. **Vérifiez** la présence de "ViGEmBus Device"

![ViGEmBus Device Manager](/images/vigembus-device-manager.png)
*ViGEmBus dans le Gestionnaire de périphériques*

## Étape 2 : Configuration de Mouse2Joystick

### Extraction et première utilisation

#### Préparation du logiciel

1. **Naviguez** vers le fichier `.zip` téléchargé
2. **Clic droit** → **Extraire tout**
3. **Choisissez** un dossier permanent (ex: `C:\Tools\Mouse2Joystick\`)
4. **Lancez** `Mouse2Joystick.exe`

![Mouse2Joystick Extraction](/images/mouse2joystick-extraction.png)
*Extraction de Mouse2Joystick*

### Interface et configuration de base

#### Premier lancement

Une fois lancé, Mouse2Joystick affiche une interface simple :

![Mouse2Joystick Interface](/images/mouse2joystick-interface.png)
*Interface principale de Mouse2Joystick*

#### Configuration recommandée

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
Vibration: Disabled (pas nécessaire)
```

### Mappage des touches

#### Configuration des contrôles

**Mappage standard recommandé :**

| Action Wii U | Touche Clavier | Fonction |
|--------------|----------------|----------|
| **Stick gauche** | WASD | Déplacement |
| **Stick droit** | Souris | Caméra |
| **Bouton A** | Espace | Action principale |
| **Bouton B** | Ctrl gauche | Action secondaire |
| **Bouton X** | E | Interaction |
| **Bouton Y** | Q | Menu/Inventaire |
| **L/R** | Shift/Tab | Gâchettes |
| **ZL/ZR** | Clic gauche/droit | Gâchettes numériques |

![Mouse2Joystick Mapping](/images/mouse2joystick-mapping.png)
*Configuration du mappage des touches*

#### Paramètres avancés

**Sensibilité de la souris :**
- **Jeux FPS** : Sensibilité élevée (4.0-5.0)
- **Jeux d'aventure** : Sensibilité moyenne (2.5-3.5)
- **Jeux de plateforme** : Sensibilité faible (1.5-2.5)

**Dead zones :**
- **Souris** : 0.05-0.15 (évite les micro-mouvements)
- **Clavier** : 0.0 (réponse instantanée)

## Étape 3 : Configuration de Cemu

### Accès aux paramètres de contrôle

#### Navigation dans Cemu

1. **Lancez** Cemu
2. **Menu** "Options" → **"Paramètres de la manette"** (Input Settings)
3. **Supprimez** toutes les manettes existantes avec le bouton **"-"**

![Cemu Input Settings](/images/cemu-input-settings.png)
*Paramètres de contrôle dans Cemu*

### Suppression des contrôleurs existants

#### Nettoyage des configurations

**Étapes de suppression :**
1. **Identifiez** tous les contrôleurs listés
2. **Cliquez** sur le bouton **"-"** pour chaque contrôleur
3. **Confirmez** la suppression si demandé
4. **Vérifiez** que la liste est vide

![Cemu Remove Controllers](/images/cemu-remove-controllers.png)
*Suppression des contrôleurs existants*

### Ajout des nouveaux contrôleurs

#### Configuration XInput (Mouse2Joystick)

**Avec Mouse2Joystick ouvert :**
1. **Cliquez** sur le bouton **"+"**
2. **Sélectionnez** "XInput" comme API
3. **Choisissez** "Controller 1" qui devrait apparaître
4. **Confirmez** la sélection

![Cemu Add XInput](/images/cemu-add-xinput.png)
*Ajout du contrôleur XInput*

#### Configuration Keyboard (Touches supplémentaires)

**Pour les touches non mappées :**
1. **Cliquez** à nouveau sur **"+"**
2. **Sélectionnez** "Keyboard" comme API
3. **Choisissez** "Controller 1" 
4. **Configurez** les touches spécifiques Wii U

![Cemu Add Keyboard](/images/cemu-add-keyboard.png)
*Ajout du contrôleur clavier*

### Configuration finale des touches

#### Mappage dans Cemu

**Configuration recommandée :**

**Contrôleur XInput (Mouse2Joystick) :**
```
Left Stick: Mouvement du personnage
Right Stick: Contrôle de la caméra
A Button: Action principale
B Button: Retour/Annuler
X Button: Action secondaire
Y Button: Menu
L/R Bumper: Gâchettes rapides
L/R Trigger: Gâchettes analogiques
```

**Contrôleur Keyboard (touches spéciales) :**
```
Plus: Entrée (Menu principal)
Minus: Échap (Pause)
Home: Tab (Menu Home)
Screenshot: F12
```

![Cemu Final Configuration](/images/cemu-final-config.png)
*Configuration finale des contrôles*

## Tests et ajustements

### Test de fonctionnement

#### Vérification de base

**Checklist de test :**
```
☑ Mouse2Joystick fonctionne en arrière-plan
☑ Mouvements de souris = rotation caméra
☑ WASD = déplacement du personnage
☑ Clics souris = gâchettes
☑ Touches clavier = boutons manette
```

#### Test en jeu

**Jeux recommandés pour tester :**
- **The Legend of Zelda: Breath of the Wild** : Test complet des contrôles
- **Super Mario 3D World** : Test de précision
- **Mario Kart 8** : Test de réactivité

### Optimisations et ajustements

#### Problèmes courants et solutions

**🚫 La souris ne contrôle pas la caméra**

**Solutions :**
1. **Vérifiez** que Mouse2Joystick est ouvert
2. **Redémarrez** Mouse2Joystick
3. **Reconfigurez** le stick droit dans Cemu

**⚠️ Mouvements saccadés**

**Solutions :**
1. **Réduisez** la sensibilité de la souris
2. **Augmentez** la dead zone
3. **Fermez** les applications consommatrices de ressources

**💻 Latence importante**

**Solutions :**
1. **Mode plein écran** dans Cemu
2. **Désactivez** la synchronisation verticale
3. **Augmentez** la priorité de processus de Mouse2Joystick

### Profils personnalisés

#### Sauvegarde des configurations

**Création de profils par jeu :**
1. **Configurez** les contrôles pour un jeu spécifique
2. **Sauvegardez** la configuration Mouse2Joystick
3. **Exportez** les paramètres Cemu
4. **Nommez** clairement chaque profil

**Exemples de profils :**
- `Zelda_BOTW_KBM.xml`
- `Mario3D_KBM.xml`
- `MarioKart8_KBM.xml`

## Jeux recommandés et incompatibles

### Jeux adaptés au clavier-souris

#### Excellente compatibilité

**Jeux fonctionnant bien :**
| Jeu | Raison | Note |
|-----|--------|------|
| **Zelda: Breath of the Wild** | Contrôle libre de caméra | ⭐⭐⭐⭐⭐ |
| **Xenoblade Chronicles X** | Gameplay lent, RPG | ⭐⭐⭐⭐⭐ |
| **Assassin's Creed 4** | Port PC-like | ⭐⭐⭐⭐⭐ |
| **Call of Duty: Ghosts** | FPS natif | ⭐⭐⭐⭐⭐ |

#### Compatibilité moyenne

**Jeux jouables avec adaptations :**
| Jeu | Défis | Note |
|-----|-------|------|
| **Super Mario 3D World** | Précision requise | ⭐⭐⭐⭐☆ |
| **Donkey Kong Country** | Timing important | ⭐⭐⭐☆☆ |
| **New Super Mario Bros. U** | Contrôles rapides | ⭐⭐⭐☆☆ |

### Jeux non recommandés

#### Mauvaise compatibilité

**Jeux difficiles au clavier-souris :**
- **Mario Kart 8** : Contrôles analogiques cruciaux
- **Super Smash Bros.** : Précision et rapidité extrêmes
- **Pokken Tournament** : Combats complexes
- **Splatoon** : Gyroscope nécessaire

## Troubleshooting avancé

### Problèmes de détection

#### Mouse2Joystick non reconnu

**Diagnostic :**
1. **Vérifiez** l'installation de ViGEmBus
2. **Redémarrez** Windows
3. **Relancez** Mouse2Joystick en administrateur
4. **Vérifiez** les processus en arrière-plan

**Solutions avancées :**
```cmd
# Vérifier les services ViGEmBus
sc query ViGEmBus

# Redémarrer le service si nécessaire
sc stop ViGEmBus
sc start ViGEmBus
```

#### Conflits avec d'autres logiciels

**Logiciels potentiellement conflictuels :**
- **Steam Input** : Désactivez pour Cemu
- **Xbox Game Bar** : Peut interférer
- **Discord Overlay** : Parfois problématique
- **GeForce Experience** : Désactivez l'overlay

### Optimisations de performance

#### Paramètres Windows

**Optimisations système :**
```
Mode de jeu Windows: Activé
Priorité haute pour Cemu: Recommandée
Fermer applications inutiles: Obligatoire
Antivirus en mode jeu: Si disponible
```

#### Paramètres Cemu

**Configuration optimale :**
```
Async Shader Compilation: Activé
Precompiled Shaders: Utilisez si disponibles
GPU Buffer Cache Accuracy: Medium
CPU Mode: Triple-core recompiler
```

## Ressources et aide supplémentaire

### Tutoriel vidéo

**🎥 [Tutoriel complet en vidéo](https://youtu.be/UAtG_UEbESI)**

Le tutoriel vidéo couvre :
- Installation complète étape par étape
- Configuration en temps réel
- Démonstration sur plusieurs jeux
- Résolution des problèmes courants

### Communauté et support

#### Forums et ressources

**Sites utiles :**
- **Reddit** : r/cemu pour l'aide communautaire
- **Discord Cemu** : Support en temps réel
- **GitHub** : Rapports de bugs et améliorations
- **YouTube** : Tutoriels spécialisés

#### Documentation officielle

**Ressources officielles :**
- **Cemu Wiki** : Guide complet de l'émulateur
- **ViGEmBus Docs** : Documentation technique
- **Mouse2Joystick GitHub** : Issues et mises à jour

## Conclusion

Jouer aux jeux **Wii U** sur **Cemu** avec un clavier et une souris est possible grâce à **Mouse2Joystick** et **ViGEmBus**. Bien que l'expérience ne soit pas optimale pour tous les jeux, cette solution permet de découvrir l'excellent catalogue Wii U sans investir dans une manette.

### Points clés à retenir

> **🎯 Configuration essentielle :**
> 
> 1. **ViGEmBus** installé et fonctionnel
> 2. **Mouse2Joystick** configuré et actif
> 3. **Cemu** configuré avec XInput + Keyboard
> 4. **Tests** et ajustements par jeu
> 5. **Patience** pour l'adaptation

### Conseils finaux

**Pour une meilleure expérience :**
- Commencez par des jeux adaptés (Zelda, RPG)
- Prenez le temps d'ajuster les sensibilités
- Sauvegardez vos configurations
- Considérez l'achat d'une manette à terme

## FAQ - Questions fréquentes

**Q : Cette méthode fonctionne-t-elle avec tous les jeux Wii U ?**
R : Non, certains jeux nécessitent absolument une manette pour une expérience correcte (Mario Kart, Smash Bros, etc.).

**Q : Puis-je utiliser cette configuration pour d'autres émulateurs ?**
R : Oui, Mouse2Joystick fonctionne avec la plupart des émulateurs supportant XInput.

**Q : La latence est-elle importante ?**
R : La latence est généralement faible, mais peut varier selon votre configuration matérielle.

**Q : Dois-je laisser Mouse2Joystick ouvert en permanence ?**
R : Oui, Mouse2Joystick doit rester ouvert tant que vous jouez pour maintenir la simulation de manette.

**Q : Cette méthode affecte-t-elle les performances de Cemu ?**
R : L'impact est minimal, Mouse2Joystick étant très léger en ressources.

---

**Ce guide vous a aidé à configurer vos contrôles ?** Partagez vos configurations optimales et vos retours d'expérience en commentaires !

**Articles connexes :**
- [Guide Complet de l'Émulateur Cemu](/fr/post/cemu-complete-guide/)
- [Optimiser les Performances sur Cemu](/fr/post/cemu-performance-optimization/)
- [Meilleures Manettes pour Émulation](/fr/post/best-controllers-emulation/)
````