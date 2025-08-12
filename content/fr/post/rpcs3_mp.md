---
title: "Guide Netplay (RPCN) pour RPCS3"
date: 2025-08-12
draft: false
categories: ["RPCS3"]
tags: ["RPCS3"]
author: "Axekin"
description: "Guide pas à pas pour configurer le Netplay de RPCS3 via RPCN : configuration globale, réglages par jeu, dépannage et récupération de compte."
series: ["Guides d'émulation"]
toc: true
math: false
featured: false
weight: 20
aliases:
  - /fr/rpcs3-netplay-guide/
  - /fr/guides/rpcs3-rpcn-netplay/
summary: "Apprenez à configurer et utiliser le Netplay de RPCS3 (RPCN). Ce guide couvre la configuration globale, les réglages par jeu, les correctifs de connectivité et la récupération de compte RPCN."
cover: "/images/covers/rpcs3.png"
image: "/images/covers/rpcs3.png"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

> Jouez en ligne à vos jeux PS3 via RPCN avec une configuration simple et fiable. Suivez la checklist rapide, puis allez plus loin si besoin.

> 📝 Note de l’auteur  
> RPCS3 n'a jamais été aussi facile à configurer pour jouer en multijoueur. Pour les plus perspicaces d'entre vous, j'ai repris le tutoriel de RPCS3 qui est super bien expliqué.

## ⚡ Checklist de démarrage rapide

- Mettre à jour RPCS3 vers la dernière version
- Créer et vérifier un compte RPCN
- Par jeu : Network = Connected, PSN = RPCN
- DNS 8.8.8.8 (sauf exigence spécifique du jeu)
- UPnP activé sur le PC/routeur ou rediriger le port UDP 3658
- Tester le compte dans la fenêtre RPCN

## ℹ️ Qu’est-ce que RPCN ?

RPCN est un remplacement communautaire de PSN utilisé par RPCS3 pour activer les fonctionnalités en ligne dans les jeux compatibles.

> ⚠️ Avertissement  
> Dans 99 % des cas, vous n’avez pas besoin de modifier le pare-feu, le NAT/UPnP ou la redirection de port. RPCS3 + RPCN fonctionne par défaut sur la plupart des réseaux. Ne touchez à ces paramètres que si la connexion en ligne avec l’autre joueur échoue après avoir suivi les étapes ci-dessous.

## ✅ Prérequis

| Élément | Recommandation | Remarque |
|--------|-----------------|----------|
| RPCS3 | Dernière version | Mise à jour auto ou téléchargement propre |
| Ports | UDP 3658 | UPnP ou redirection manuelle |
| NAT | Ouvert/Type A | Éviter double NAT/CGNAT |
| Pare-feu | Autoriser RPCS3 | OS et suite de sécurité |

---

## 🔧 Configuration globale

1. Ouvrir RPCS3 → Configuration → **RPCN**
2. Cliquer sur **Account**
3. Serveur : **Official RPCN Server**
4. Cliquer sur **Create Account**
5. Définir un **Username** → OK
6. Saisir le **Password** deux fois → OK
7. Saisir l’**Email** deux fois → OK
8. Confirmer le récapitulatif → **Yes**
9. Message de succès → la fenêtre “RPCN: Username” apparaît
10. Vérifier la boîte mail pour le **token** RPCN → coller dans **Token** → OK
11. Cliquer sur **Test Account**

> 💡 Astuce  
> Gardez votre token privé. Si vous le perdez, utilisez “Resend Token” dans Edit Account.

---

## 🎯 Configuration spécifique au jeu

1. Dans la liste des jeux : clic droit sur le titre → **Create Custom Configuration**
2. Ouvrir l’onglet **Network**
3. **Network Status** : Connected
4. **PSN Status** : RPCN
5. **DNS** : `8.8.8.8` (sauf si le jeu en exige un autre)
6. Si le jeu nécessite un serveur personnalisé, renseignez les IP/Host switches fournis par la communauté

> 💡 Remplacement par jeu  
> Ces réglages ne s’appliquent qu’à ce titre et ne modifient pas votre configuration globale.

![Preuve Netplay RPCS3 RPCN (Assault Heroes)](/images/covers/rpcs3_mp.png)  
*Preuve que ça fonctionne : multijoueur en ligne via RPCN sur RPCS3.*

---

## 🌐 Connectivité — l’essentiel

- Activer l’UPnP dans RPCS3 : Configuration → Network → **Enable UPnP**
- Activer l’UPnP sur le routeur (procédure selon le modèle)
- Ou rediriger le port **3658/UDP** vers l’IP locale du PC

<details>
  <summary>Afficher les notes de redirection de port</summary>

- Rediriger : UDP 3658 → IP de votre PC (réservation DHCP conseillée)  
- Éviter le double NAT (mettre le modem FAI en mode bridge si nécessaire)  
- Les VPN peuvent bloquer l’UDP entrant ; configurez la redirection sur le VPN ou désactivez-le pendant la partie
</details>

> 🚧 Contraintes NAT & FAI  
> Un NAT strict ou le CGNAT peut casser la connectivité pair‑à‑pair. Demandez à votre FAI une IPv4 publique ou utilisez un VPN qui supporte la redirection de port.

---

## 🛠️ Dépannage

### Impossible de se connecter aux autres joueurs
- UPnP activé dans RPCS3 et sur le routeur
- Ou rediriger l’UDP 3658 vers votre PC
- Autoriser RPCS3 dans le pare-feu/la suite de sécurité
- Désactiver ou reconfigurer le VPN
- RPCN → Account → **Test Account**

<details>
  <summary>Vérifications avancées</summary>

- Confirmer que l’IP du PC n’a pas changé (réservation DHCP)  
- Détecter un double NAT (modem + routeur qui routent)  
- Le test NAT du routeur doit viser Ouvert/Type A
</details>

---

## 🔐 Récupérer un compte RPCN

### Renvoyer le jeton RPCN
1. RPCS3 → Configuration → RPCN → **Account**
2. **Edit Account** → **Resend Token**
3. Confirmer → OK → vérifier l’e‑mail “Your token for RPCN”
4. Coller le jeton dans le champ **Token** → OK → **Save**

### Réinitialiser le mot de passe RPCN
1. RPCS3 → Configuration → RPCN → **Account**
2. **Edit Account** → **Change Password**
3. Confirmer le nom d’utilisateur → OK
4. À la question “Do you already have a reset password token?” → **No**
5. Saisir l’e‑mail d’inscription deux fois → OK
6. Vérifier l’e‑mail “Your password reset code for RPCN”
7. Coller le jeton → OK
8. Entrer le nouveau mot de passe deux fois → OK
9. De retour dans Edit Account → **Set Password** → saisir le nouveau mot de passe → OK → **Save**
10. RPCN : **Test account**

---

### Bonnes pratiques
- Utiliser des mots de passe forts et uniques  
- Ne pas partager votre token  
- Garder RPCS3 à jour pour les derniers correctifs RPCN  

> Respectez les licences des jeux et les conditions d’utilisation en ligne. Soutenez les développeurs en achetant leurs jeux.

🎯 Résultat : vous êtes prêt à jouer en ligne via RPCN