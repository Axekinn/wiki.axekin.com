---
title: "Configurando o XLink Kai com o Ryujinx"
date: 2025-06-03
draft: false
categories: ["Ryujinx", "XLink Kai"]
tags: ["Ryujinx", "XLink Kai", "Nintendo Switch", "Emulação", "Multijogador"]
author: "Axekin"
description: "Tutorial detalhado para configurar o XLink Kai com o emulador de Nintendo Switch Ryujinx para jogos multiplayer"
cover: "covers/ryujinx.png"
---

## 🎮 Introdução ao XLink Kai + Ryujinx

O **XLink Kai + Ryujinx** permite que os jogadores emulem jogos do Nintendo Switch em uma rede. Essa integração experimental permite que você jogue no modo multiplayer com outros usuários do Ryujinx ou até mesmo com consoles Nintendo Switch reais.

> ⚠️ **Nota importante**: O suporte ao XLink Kai + Ryujinx é experimental e atualmente está disponível apenas no Windows.

## 📋 O que funciona

- Jogos do Nintendo Switch com suporte a LAN
- Jogos do Nintendo Switch com suporte a Local Wireless
- Ryujinx jogando contra outros jogadores do Ryujinx
- Ryujinx jogando contra jogadores no Switch (CFW necessário para jogos Local Wireless)
- Ryujinx e um Switch local jogando juntos
- Misturando qualquer combinação dos itens acima!

## ❌ O que não funciona

- Suporte para macOS ainda não disponível
- Suporte para Linux ainda não disponível

## 🌐 Tipos de conexão

### Jogos em LAN

Os jogos em LAN são os mais amplamente suportados e as seguintes configurações podem jogar juntas:

- Jogadores usando sistemas Nintendo Switch e Nintendo Switch Lite "OFW" não modificados
- Jogadores usando sistemas Nintendo Switch "CFW" modificados
- Jogadores usando o Ryujinx

### Jogos Local Wireless

Os jogos Local Wireless são um pouco mais restritos, mas as seguintes configurações podem jogar juntas:

- Jogadores usando sistemas Nintendo Switch "CFW" modificados com o módulo de sistema ldn_mitm
- Jogadores usando o Ryujinx

> ⚠️ **Importante**: Sistemas Nintendo Switch e Nintendo Switch Lite "OFW" não modificados não são suportados para jogos Local Wireless.

## 🔧 Configuração de Rede

### Windows

Estas instruções são específicas para o Windows 10 e Windows 11. Versões mais antigas do Windows devem seguir um processo semelhante.

#### Instalando o NPCAP

Devido a problemas de licenciamento, o XLink Kai vem com o WinPCAP, que infelizmente não é compatível com adaptadores de loopback. Para resolver esse problema, você precisará instalar o NPCAP. A versão 1.31 é conhecida por ser estável.

1. **Baixe** o NPCAP do [site oficial](https://npcap.com/#download)
2. **Instale** o NPCAP com as opções padrão (basta clicar em "Avançar" até o final)

#### Executando o kaiLoopbackBridge

1. **Abra** o Windows Explorer e navegue até `C:\Program Files (x86)\XLink Kai\`
2. **Encontre** `kaiLoopbackBridge64.exe`, clique com o botão direito e **Execute como Administrador**
3. **Leia** o aviso, pressione qualquer tecla para continuar
4. **Selecione** Nintendo Switch como o tipo de emulador
5. O adaptador de loopback será configurado automaticamente
6. **Feche** o kaiLoopbackBridge. Nós o usaremos novamente mais tarde.

## ⚙️ Instalando e Configurando o Ryujinx

A configuração do Ryujinx é bastante simples, verifique o [Guia do Ryujinx](https://wiki.axekin.com/pt-BR/post/ryujinx/) para a instalação básica.

### Configurações de rede

#### Para Jogos em LAN

1. Com o Ryujinx em execução, acesse a configuração clicando em **Options** e depois em **Settings**
2. Clique na guia **System**
3. Marque a caixa **Enable VSync**
4. Marque a caixa **Enable Guest Internet Access**
5. Clique na guia **Multiplayer**
6. Sob o título LAN, defina **Network Interface** como **XLink Kai Loopback Switch XXXX**
7. **Salve** a configuração e saia do Ryujinx

#### Para Jogos Local Wireless

1. Com o Ryujinx em execução, acesse a configuração clicando em **Options** e depois em **Settings**
2. Clique na guia **System**
3. Marque a caixa **Enable VSync**
4. Clique na guia **Network**
5. Desmarque a caixa **Enable Guest Internet Access**
6. Sob o título Multiplayer, defina **Mode** como **ldn_mitm**
7. Sob o título LAN, defina **Network Interface** como **XLink Kai Loopback Switch XXXX**
8. **Salve** a configuração e saia do Ryujinx

## 🎮 Jogando um jogo no XLink Kai

Como o Ryujinx e o XLink Kai não podem se comunicar diretamente (ainda), o kaiLoopbackBridge é usado como uma "ponte" entre eles.

1. **Inicie** o XLink Kai e faça login
2. **Inicie** o kaiLoopbackBridge, navegue pelos prompts e mantenha-o aberto durante toda a sua sessão de jogo. Após alguns segundos, o XLink Kai verá um Nintendo Switch na guia Metrics.
3. **Inicie** o Ryujinx e inicie o seu jogo. O Ryujinx não deve estar em execução antes de você iniciar o kaiLoopbackBridge.
4. **Navegue** até uma arena de jogo e jogue!


Certifique-se de sempre iniciar os aplicativos nesta ordem:
1. XLink Kai
2. kaiLoopbackBridge
3. Ryujinx


Se você encontrar problemas de conexão:
- Verifique se todos os firewalls permitem o XLink Kai e o Ryujinx
- Certifique-se de que o adaptador de loopback está configurado corretamente
- Reinicie todos os aplicativos na ordem correta

---

> **Lembrete**: A emulação é legal se você possuir legalmente os jogos que emula. Sempre apoie os desenvolvedores comprando seus jogos.

**Aproveite os jogos multiplayer com o Ryujinx e o XLink Kai! 🎮✨**
(Este tutorial é inteiramente baseado no tutorial oficial do X Link Kai; eu simplesmente o atualizei.)
