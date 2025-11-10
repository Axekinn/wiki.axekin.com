---
title: "Guide Netplay RPCS3 (RPCN)"
date: 2025-08-12
draft: false
categories: ["RPCS3"]
tags: ["RPCS3"]
author: "Axekin"
description: "Guide étape par étape pour configurer le Netplay de RPCS3 en utilisant RPCN : configuration globale, paramètres par jeu, dépannage et récupération de compte."
series: ["Guides d'Émulation"]
toc: true
math: false
featured: false
weight: 20
aliases:
  - /fr/rpcs3-netplay-guide/
  - /fr/guides/rpcs3-rpcn-netplay/
summary: "Apprenez à configurer et à utiliser le Netplay de RPCS3 (RPCN). Ce guide couvre la configuration globale, les paramètres par jeu, les correctifs de connectivité et la récupération de compte RPCN."
cover: "covers/rpcs3.png"
image: "covers/rpcs3.png"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

> Jouez à des jeux PS3 en ligne via RPCN avec une configuration fluide et fiable. Suivez la liste de contrôle rapide, puis approfondissez si nécessaire.

> 📝 Note de l'auteur  
> RPCS3 n'a jamais été aussi facile à configurer pour le jeu multijoueur. Pour les plus experts d'entre vous, j'ai inclus le tutoriel de RPCS3, qui est très bien expliqué.

## ⚡ Liste de Démarrage Rapide

- Mettez à jour vers la dernière version de RPCS3
- Créez et vérifiez un compte RPCN
- Par jeu : Réseau = Connecté, PSN = RPCN
- DNS 8.8.8.8 (sauf si le jeu en a besoin d'un autre)
- UPnP activé sur le PC/routeur ou redirection du port UDP 3658
- Testez le compte dans la fenêtre RPCN

## ℹ️ Qu'est-ce que RPCN ?

RPCN est un remplacement communautaire du PSN utilisé par RPCS3 pour activer les fonctionnalités en ligne dans les jeux pris en charge.

> ⚠️ Avertissement  
> Dans 99% des cas, vous n'avez pas besoin de modifier les paramètres de pare-feu, de NAT/UPnP ou de redirection de port. RPCS3 + RPCN devraient fonctionner sans configuration sur la plupart des réseaux. Ne modifiez ces paramètres que si la connectivité en ligne avec l'autre joueur échoue après avoir suivi les étapes ci-dessous.

## ✅ Prérequis

| Élément | Recommandation | Note |
|---|---|---|
| RPCS3 | Dernière version | Mise à jour automatique ou nouveau téléchargement |
| Ports | UDP 3658 | UPnP ou redirection de port manuelle |
| NAT | Ouvert/Type A | Évitez le double NAT/CGNAT |
| Pare-feu | Autoriser RPCS3 | SE et suite de sécurité |

---

## 🔧 Configuration Globale

1. Ouvrez RPCS3 → Configuration → **RPCN**
2. Cliquez sur **Compte**
3. Sélectionnez le serveur : **Serveur RPCN Officiel**
4. Cliquez sur **Créer un compte**
5. Définissez un **Nom d'utilisateur** → OK
6. Entrez le **Mot de passe** deux fois → OK
7. Entrez l'**Email** deux fois → OK
8. Confirmez le résumé → **Oui**
9. Message de succès → une fenêtre “RPCN: Nom d'utilisateur” apparaît
10. Vérifiez votre boîte mail pour le **jeton** RPCN → collez-le dans **Jeton** → OK
11. Cliquez sur **Tester le compte**

> 💡 Conseil de pro  
> Gardez votre jeton privé. Si vous le perdez, utilisez “Renvoyer le jeton” dans Modifier le compte.

---

## 🎯 Configuration Spécifique au Jeu

1. Dans la liste des jeux, faites un clic droit sur le titre → **Créer une configuration personnalisée**
2. Allez dans **Réseau**
3. **État du réseau** : Connecté
4. **État du PSN** : RPCN
5. **DNS** : `8.8.8.8` (sauf si le jeu en requiert un autre)
6. Si le jeu nécessite un serveur personnalisé, entrez les adresses IP/Hôtes fournies par la communauté

> 💡 Paramètres par jeu  
> Ces paramètres s'appliquent uniquement à ce jeu et ne modifieront pas votre configuration globale.

![Preuve du netplay RPCN sur RPCS3 (Assault Heroes)](covers/rpcs3_mp.png)  
*La preuve que ça marche : Multijoueur en ligne fonctionnant via RPCN sur RPCS3.*

---

## 🌐 Essentiels de Connectivité

- Activez l'UPnP dans RPCS3 : Configuration → Réseau → **Activer l'UPnP**
- Activez l'UPnP sur votre routeur (le manuel varie selon le modèle)
- Ou redirigez le port **3658/UDP** vers l'IP locale de votre PC

<details>
  <summary>Afficher les notes sur la redirection de port</summary>

- Rediriger : UDP 3658 → IP de votre PC (réservez via DHCP)  
- Évitez le double NAT (mettez le modem de votre FAI en mode pont si nécessaire)  
- Les VPN peuvent bloquer l'UDP entrant ; configurez la redirection de port sur le VPN ou désactivez-le pendant le jeu
</details>

> 🚧 Contraintes de NAT et FAI  
> Un NAT strict ou un CGNAT peut interrompre la connectivité peer-to-peer. Demandez à votre FAI une IPv4 publique ou utilisez un VPN prenant en charge la redirection de port.

---

## 🛠️ Dépannage

### Impossible de se connecter aux autres joueurs
- UPnP activé dans RPCS3 et sur le routeur
- Ou redirigez le port UDP 3658 vers votre PC
- Autorisez RPCS3 à travers le pare-feu/la suite de sécurité
- Désactivez ou reconfigurez le VPN
- RPCN → Compte → **Tester le compte**

<details>
  <summary>Vérifications avancées</summary>

- Confirmez que l'IP de votre PC n'a pas changé (réservation DHCP)  
- Détectez le double NAT (modem + routeur effectuant tous les deux du routage)  
- Le test NAT du routeur doit viser un NAT Ouvert/Type A
</details>

---

## 🔐 Récupérer un Compte RPCN

### Renvoyer le Jeton RPCN
1. RPCS3 → Configuration → RPCN → **Compte**
2. **Modifier le compte** → **Renvoyer le jeton**
3. Confirmez → OK → vérifiez l'email “Votre jeton pour RPCN”
4. Collez le jeton dans le champ **Jeton** → OK → **Sauvegarder**

### Réinitialiser le Mot de Passe RPCN
1. RPCS3 → Configuration → RPCN → **Compte**
2. **Modifier le compte** → **Changer le mot de passe**
3. Confirmez le nom d'utilisateur → OK
4. Lorsqu'on vous demande “Avez-vous déjà un jeton de réinitialisation de mot de passe ?” → **Non**
5. Entrez l'email d'inscription deux fois → OK
6. Vérifiez l'email “Votre code de réinitialisation de mot de passe pour RPCN”
7. Collez le jeton → OK
8. Entrez le nouveau mot de passe deux fois → OK
9. De retour dans Modifier le compte → **Définir le mot de passe** → entrez le nouveau mot de passe → OK → **Sauvegarder**
10. RPCN : **Tester le compte**

---

### Bonnes pratiques
- Utilisez des mots de passe forts et uniques  
- Ne partagez pas votre jeton  
- Maintenez RPCS3 à jour pour les derniers correctifs RPCN  

> Respectez les licences des jeux et les conditions de service en ligne. Soutenez les développeurs en achetant leurs jeux.

🎯 Résultat : Vous êtes prêt à jouer en ligne via RPCN !
````
