---
title: "Configuration de XLink Kai avec Ryujinx"
date: 2025-06-03
draft: false
categories: ["Ryujinx", "XLink Kai"]
tags: ["Ryujinx", "XLink Kai", "Nintendo Switch", "Émulation", "Multijoueur"]
author: "Axekin"
description: "Tutoriel détaillé pour configurer XLink Kai avec l'émulateur Nintendo Switch Ryujinx pour le jeu en multijoueur"
cover: "covers/ryujinx.png"
---

## 🎮 Introduction à XLink Kai + Ryujinx

**XLink Kai + Ryujinx** permet aux joueurs d'émuler des jeux Nintendo Switch sur un réseau. Cette intégration expérimentale vous permet de jouer en multijoueur avec d'autres utilisateurs de Ryujinx ou même avec de vraies consoles Nintendo Switch.

> ⚠️ **Note importante**: Le support de XLink Kai + Ryujinx est expérimental et actuellement disponible uniquement sur Windows.

## 📋 Ce qui fonctionne

- Jeux Nintendo Switch avec support LAN
- Jeux Nintendo Switch avec support Local Wireless
- Ryujinx jouant contre d'autres joueurs Ryujinx
- Ryujinx jouant contre des joueurs sur Switch (CFW requis pour les jeux Local Wireless)
- Ryujinx et une Switch locale jouant ensemble
- Mélanger n'importe quelle combinaison de ce qui précède !

## ❌ Ce qui ne fonctionne pas

- Support macOS non encore disponible
- Support Linux non encore disponible

## 🌐 Types de connexion

### Jeux LAN

Les jeux LAN sont les plus largement supportés et les configurations suivantes peuvent jouer ensemble :

- Joueurs utilisant des systèmes Nintendo Switch et Nintendo Switch Lite "OFW" non modifiés
- Joueurs utilisant des systèmes Nintendo Switch "CFW" modifiés
- Joueurs utilisant Ryujinx

### Jeux Local Wireless

Les jeux Local Wireless sont un peu plus restreints, mais les configurations suivantes peuvent jouer ensemble :

- Joueurs utilisant des systèmes Nintendo Switch "CFW" modifiés avec le module système ldn_mitm
- Joueurs utilisant Ryujinx

> ⚠️ **Important**: Les systèmes Nintendo Switch et Nintendo Switch Lite "OFW" non modifiés ne sont pas supportés pour les jeux Local Wireless.

## 🔧 Configuration Réseau

### Windows

Ces instructions sont spécifiques à Windows 10 et Windows 11. Les versions plus anciennes de Windows devraient suivre un processus similaire.

#### Installation de NPCAP

En raison de problèmes de licence, XLink Kai est livré avec WinPCAP qui n'est malheureusement pas compatible avec les adaptateurs de bouclage. Pour résoudre ce problème, vous devrez installer NPCAP. La version 1.31 est connue pour être stable.

1. **Téléchargez** NPCAP depuis [le site officiel](https://npcap.com/#download)
2. **Installez** NPCAP avec les options par défaut (cliquez simplement sur "Suivant" jusqu'à la fin)

#### Exécution de kaiLoopbackBridge

1. **Ouvrez** l'Explorateur Windows et naviguez vers `C:\Program Files (x86)\XLink Kai\`
2. **Trouvez** `kaiLoopbackBridge64.exe`, faites un clic droit, **Exécuter en tant qu'administrateur**
3. **Lisez** l'avertissement, appuyez sur n'importe quelle touche pour continuer
4. **Sélectionnez** Nintendo Switch comme type d'émulateur
5. L'adaptateur de bouclage sera maintenant configuré automatiquement
6. **Fermez** kaiLoopbackBridge. Nous l'utiliserons à nouveau plus tard.

## ⚙️ Installation et Configuration de Ryujinx

La configuration de Ryujinx est assez simple, consultez le [Guide Ryujinx](https://wiki.axekin.com/fr/post/ryujinx/) pour l'installation de base.

### Paramètres réseau

#### Pour les Jeux LAN

1. Une fois Ryujinx en cours d'exécution, accédez à la configuration en cliquant sur **Options** puis **Settings**
2. Cliquez sur l'onglet **System**
3. Cochez la case **Enable VSync**
4. Cochez la case **Enable Guest Internet Access**
5. Cliquez sur l'onglet **Multiplayer**
6. Sous l'en-tête LAN, réglez **Network Interface** sur **XLink Kai Loopback Switch XXXX**
7. **Sauvegardez** la configuration et quittez Ryujinx

#### Pour les Jeux Local Wireless

1. Une fois Ryujinx en cours d'exécution, accédez à la configuration en cliquant sur **Options** puis **Settings**
2. Cliquez sur l'onglet **System**
3. Cochez la case **Enable VSync**
4. Cliquez sur l'onglet **Network**
5. Décochez la case **Enable Guest Internet Access**
6. Sous l'en-tête Multiplayer, réglez **Mode** sur **ldn_mitm**
7. Sous l'en-tête LAN, réglez **Network Interface** sur **XLink Kai Loopback Switch XXXX**
8. **Sauvegardez** la configuration et quittez Ryujinx

## 🎮 Jouer à un jeu sur XLink Kai

Comme Ryujinx et XLink Kai ne peuvent pas communiquer directement entre eux (pour l'instant), kaiLoopbackBridge est utilisé comme un "pont" entre eux.

1. **Démarrez** XLink Kai et connectez-vous
2. **Démarrez** kaiLoopbackBridge, suivez les invites et gardez-le ouvert pendant toute la durée de votre session de jeu. Après quelques secondes, XLink Kai verra une Nintendo Switch sous l'onglet Metrics.
3. **Démarrez** Ryujinx et lancez votre jeu. Ryujinx ne doit pas être en cours d'exécution avant de lancer kaiLoopbackBridge.
4. **Naviguez** vers une arène de jeu et jouez !


Assurez-vous de toujours lancer les applications dans cet ordre :
1. XLink Kai
2. kaiLoopbackBridge
3. Ryujinx


Si vous rencontrez des problèmes de connexion :
- Vérifiez que tous les pare-feu autorisent XLink Kai et Ryujinx
- Assurez-vous que l'adaptateur de bouclage est correctement configuré
- Redémarrez toutes les applications dans le bon ordre

---

> **Rappel**: L'émulation est légale si vous possédez légalement les jeux que vous émulez. Soutenez toujours les développeurs en achetant leurs jeux.

**Profitez du jeu en multijoueur avec Ryujinx et XLink Kai ! 🎮✨**
(Ce tutoriel est entièrement basé sur le tutoriel officiel de X Link Kai ; je l'ai simplement mis à jour.)
