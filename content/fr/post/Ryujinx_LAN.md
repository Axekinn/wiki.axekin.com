---
title: "Configuration de XLink Kai avec Ryujinx"
date: 2025-06-03
draft: false
categories: ["Ryujinx", "XLink Kai"]
tags: ["Ryujinx", "XLink Kai", "Nintendo Switch", "Émulation", "Multijoueur"]
author: "Axekin"
description: "Tutoriel détaillé pour configurer XLink Kai avec l'émulateur Nintendo Switch Ryujinx pour jouer en multijoueur"
cover: "/images/covers/ryujinx.png"
---

## 🎮 Introduction à XLink Kai + Ryujinx

**XLink Kai + Ryujinx** permet aux joueurs d'émuler des jeux Nintendo Switch en réseau. Cette intégration expérimentale vous permet de jouer en multijoueur avec d'autres utilisateurs de Ryujinx ou même avec des consoles Nintendo Switch réelles.

> ⚠️ **Note importante** : Le support XLink Kai + Ryujinx est expérimental et actuellement disponible uniquement sur Windows.

## 📋 Ce qui fonctionne

- Jeux Nintendo Switch avec support LAN
- Jeux Nintendo Switch avec support sans fil local
- Ryujinx jouant contre d'autres joueurs Ryujinx
- Ryujinx jouant contre des joueurs sur Switch (CFW requis pour les jeux sans fil local)
- Ryujinx et Switch locale jouant ensemble
- Mélange de n'importe quelle combinaison des options ci-dessus !

## ❌ Ce qui ne fonctionne pas

- Support macOS pas encore disponible
- Support Linux pas encore disponible

## 🌐 Types de connexions

### Jeux LAN

Les jeux LAN sont les plus largement supportés et les configurations suivantes peuvent jouer ensemble :

- Joueurs utilisant des systèmes Nintendo Switch et Nintendo Switch Lite non modifiés ("OFW")
- Joueurs utilisant des systèmes Nintendo Switch modifiés ("CFW")
- Joueurs utilisant Ryujinx

### Jeux sans fil local

Les jeux sans fil local sont un peu plus restreints, mais les configurations suivantes peuvent jouer ensemble :

- Joueurs utilisant des systèmes Nintendo Switch modifiés ("CFW") avec le module système ldn_mitm
- Joueurs utilisant Ryujinx

> ⚠️ **Important** : Les systèmes Nintendo Switch et Nintendo Switch Lite non modifiés ("OFW") ne sont pas supportés pour les jeux sans fil local.

## 🔧 Configuration réseau

### Windows

Ces instructions sont spécifiques à Windows 10 et Windows 11. Les versions plus anciennes de Windows devraient suivre un processus similaire.

#### Installation de NPCAP

En raison de problèmes de licence, XLink Kai est livré avec WinPCAP qui n'est malheureusement pas compatible avec les adaptateurs loopback. Pour résoudre ce problème, vous devrez installer NPCAP. La version 1.31 est reconnue comme stable.

1. **Téléchargez** NPCAP depuis [le site officiel](https://npcap.com/#download)
2. **Installez** NPCAP avec les options par défaut (cliquez simplement sur "Suivant" jusqu'à la fin)

#### Exécution de kaiLoopbackBridge

1. **Ouvrez** l'Explorateur Windows et naviguez vers `C:\Program Files (x86)\XLink Kai\`
2. **Trouvez** `kaiLoopbackBridge64.exe`, cliquez droit, **Exécuter en tant qu'administrateur**
3. **Lisez** l'avertissement, appuyez sur n'importe quelle touche pour continuer
4. **Sélectionnez** Nintendo Switch comme type d'émulateur
5. L'adaptateur loopback sera maintenant configuré automatiquement
6. **Fermez** kaiLoopbackBridge. Nous l'utiliserons à nouveau plus tard.

## ⚙️ Installation et configuration de Ryujinx

La configuration de Ryujinx est assez simple, consultez le [Guide Ryujinx](https://wiki.axekin.com/fr/post/ryujinx/) pour l'installation de base.

### Paramètres réseau

#### Pour les jeux LAN

1. Une fois Ryujinx en cours d'exécution, accédez à la configuration en cliquant sur **Options** puis **Paramètres**
2. Cliquez sur l'onglet **Système**
3. Cochez la case **Activer VSync**
4. Cochez la case **Activer l'accès Internet invité**
5. Cliquez sur l'onglet **Multijoueur**
6. Sous la rubrique LAN, définissez **Interface réseau** sur **XLink Kai Loopback Switch XXXX**
7. **Enregistrez** la configuration et quittez Ryujinx

#### Pour les jeux sans fil local

1. Une fois Ryujinx en cours d'exécution, accédez à la configuration en cliquant sur **Options** puis **Paramètres**
2. Cliquez sur l'onglet **Système**
3. Cochez la case **Activer VSync**
4. Cliquez sur l'onglet **Multijoueur**
5. Décochez la case **Activer l'accès Internet invité**
6. Sous la rubrique Multijoueur, définissez **Mode** sur **ldn_mitm**
7. Sous la rubrique LAN, définissez **Interface réseau** sur **XLink Kai Loopback Switch XXXX**
8. **Enregistrez** la configuration et quittez Ryujinx

## 🎮 Jouer à un jeu sur XLink Kai

Comme Ryujinx et XLink Kai ne peuvent pas communiquer directement entre eux (pour l'instant), kaiLoopbackBridge est utilisé comme "pont" entre eux.

1. **Démarrez** XLink Kai et connectez-vous
2. **Démarrez** kaiLoopbackBridge, naviguez à travers les invites et gardez-le ouvert pendant toute la durée de votre session de jeu. Après quelques secondes, XLink Kai verra une Nintendo Switch sous l'onglet Métriques.
3. **Démarrez** Ryujinx et lancez votre jeu. Ryujinx ne doit pas être en cours d'exécution avant que vous ne lanciez kaiLoopbackBridge.
4. **Naviguez** vers une arène de jeu et jouez !

{{< admonition tip "Conseil important" >}}
Assurez-vous de toujours lancer les applications dans cet ordre :
1. XLink Kai
2. kaiLoopbackBridge
3. Ryujinx
{{< /admonition >}}

{{< admonition warning "Dépannage" >}}
Si vous rencontrez des problèmes de connexion :
- Vérifiez que tous les pare-feu autorisent XLink Kai et Ryujinx
- Assurez-vous que l'adaptateur loopback est correctement configuré
- Redémarrez toutes les applications dans le bon ordre
{{< /admonition >}}

---

> **Rappel** : L'émulation est légale si vous possédez légalement les jeux que vous émullez. Soutenez toujours les développeurs en achetant leurs jeux.

**Bon jeu en multijoueur avec Ryujinx et XLink Kai ! 🎮✨**
(Ce tutoriel est entièrement basé sur le tutoriel officiel de X Link Kai, je l'ai juste mis à jour)
```