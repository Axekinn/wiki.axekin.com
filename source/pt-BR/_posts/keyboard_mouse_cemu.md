---
title: "Jogando com Teclado e Mouse no Emulador Cemu"
description: "Tutorial detalhado para configurar controles de teclado e mouse no Cemu com Mouse2Joystick e ViGEmBus - Guia de configuração passo a passo"
date: 2025-06-04
lastmod: 2025-06-04
categories: ["PC"]
tags: ["cemu", "wiiu", "teclado-mouse", "mouse2joystick", "vigembus", "emulação", "nintendo"]
series: ["Guias de Emulação"]
author: "Axekin"
draft: false
toc: true
math: false
featured: false
weight: 20
aliases: 
  - /pt-BR/cemu-keyboard-mouse/
  - /pt-BR/guides/cemu-keyboard-mouse/
summary: "Aprenda a jogar jogos de Wii U no Cemu com teclado e mouse. Guia completo com Mouse2Joystick e configuração detalhada."
cover: "covers/cemu-keyboard-mouse.webp"
image: "covers/cemu-keyboard-mouse.webp"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

> **⚠️ Nota Importante**: Embora seja possível, a experiência com teclado e mouse no Cemu não será tão agradável quanto com um controle. Esta solução é adequada para jogadores que não possuem um gamepad compatível.

## Introdução

Jogar jogos de **Wii U** no emulador **Cemu** com **teclado e mouse** requer o uso de ferramentas de terceiros para simular um controle. Este guia explica como configurar esta solução com **Mouse2Joystick** e **ViGEmBus**.

Este método é particularmente útil para:
- Jogadores que não têm um controle compatível
- Testar jogos rapidamente sem investir em um gamepad
- Certos gêneros de jogos adaptados para teclado e mouse

### Processo Geral

1. **Baixar** ViGEmBus e Mouse2Joystick
2. **Instalar** ViGEmBus (driver de controle virtual)
3. **Configurar** o Mouse2Joystick de acordo com suas preferências
4. **Configurar** o Cemu para reconhecer os controles
5. **Testar** e ajustar as configurações

## Pré-requisitos e Downloads

### Software Necessário

**Aplicações essenciais:**
- **ViGEmBus**: Driver para controles virtuais
- **Mouse2Joystick**: Converte sinais de teclado/mouse em sinais de controle
- **Cemu**: Emulador de Wii U (versão estável mais recente)

### Downloads

#### ViGEmBus (Driver de Controle Virtual)

**🔗 [Baixar ViGEmBus](https://github.com/ViGEm/ViGEmBus/releases)**

**Instruções de download:**
1. **Acesse** a página de lançamentos
2. **Baixe** o arquivo `.msi` mais recente
3. **Exemplo**: `ViGEmBus_Setup_1.17.333.msi`

**Recursos do ViGEmBus:**
- **Gratuito** e de código aberto
- **Compatível** com Windows 10/11
- **Estável** e atualizado regularmente
- **Necessário** para simular controles de Xbox

#### Mouse2Joystick (Conversor de Controles)

**🔗 [Baixar Mouse2Joystick](https://github.com/memethyl/Mouse2Joystick/releases)**

**Instruções de download:**
1. **Baixe** o arquivo `.zip` mais recente
2. **Exemplo**: `Mouse2Joystick_v2.3.1.zip`
3. **Extraia** para uma pasta dedicada (ex: `C:\Ferramentas\Mouse2Joystick\`)

**Recursos do Mouse2Joystick:**
- **Portátil**: não requer instalação
- **Customizável**: mapeamento de teclas configurável
- **Leve**: impacto mínimo no desempenho
- **Tempo real**: conversão instantânea de movimento

## Passo 1: Instalação do ViGEmBus

### Processo de Instalação

#### Executando o Instalador

1. **Localize** o arquivo `.msi` baixado
2. **Dê um duplo clique** para iniciar a instalação
3. **Aceite** as permissões de administrador, se solicitado

#### Configuração da Instalação

**Passos de instalação:**
1. **Bem-vindo** → Clique em "Next"
2. **Contrato de Licença** → Aceite e clique em "Next"
3. **Pasta de Destino** → Deixe o padrão, clique em "Next"
4. **Pronto para Instalar** → Clique em "Install"
5. **Concluído** → Clique em "Finish"

**Componentes instalados:**
- Driver de barramento virtual
- Bibliotecas de sistema necessárias
- Interface de gerenciamento de dispositivos

### Verificação da Instalação

#### Verificação no Gerenciador de Dispositivos

1. **Clique com o botão direito** em "Este Computador" → **Gerenciador de Dispositivos**
2. **Expanda** "Dispositivos de sistema"
3. **Verifique** a presença de "ViGEmBus Device"


## Passo 2: Configuração do Mouse2Joystick

### Extração e Primeiro Uso

#### Preparação do Software

1. **Navegue** até o arquivo `.zip` baixado
2. **Clique com o botão direito** → **Extrair Tudo**
3. **Escolha** uma pasta permanente (ex: `C:\Ferramentas\Mouse2Joystick\`)
4. **Inicie** `Mouse2Joystick.exe`

### Interface e Configuração Básica

#### Primeiro Lançamento

Uma vez iniciado, o Mouse2Joystick exibe uma interface simples:


#### Configuração Recomendada

**Configurações básicas sugeridas:**

**Seção "Mouse Settings":**
```
Mouse Sensitivity X: 3.0
Mouse Sensitivity Y: 3.0
Mouse Deadzone: 0.1
Invert Y-axis: Conforme preferência
```

**Seção "Controller Settings":**
```
Controller Type: Xbox 360 Controller
Vibration: Desativado (não necessário)
```

### Mapeamento de Teclas

#### Configuração de Controles

**Mapeamento padrão recomendado:**

| Ação do Wii U | Tecla do Teclado | Função |
|--------------|------------------|----------|
| **Analógico Esquerdo** | WASD | Movimento |
| **Analógico Direito** | Mouse | Câmera |
| **Botão A** | Espaço | Ação primária |
| **Botão B** | Ctrl Esquerdo | Ação secundária |
| **Botão X** | E | Interação |
| **Botão Y** | Q | Menu/Inventário |
| **L/R** | Shift/Tab | Bumpers |
| **ZL/ZR** | Clique Esquerdo/Direito | Gatilhos digitais |

#### Configurações Avançadas

**Sensibilidade do mouse:**
- **Jogos de FPS**: Alta sensibilidade (4.0-5.0)
- **Jogos de aventura**: Média sensibilidade (2.5-3.5)
- **Jogos de plataforma**: Baixa sensibilidade (1.5-2.5)

**Zonas mortas:**
- **Mouse**: 0.05-0.15 (evita micro-movimentos)
- **Teclado**: 0.0 (resposta instantânea)

## Passo 3: Configuração do Cemu

### Acessando as Configurações de Controle

#### Navegando no Cemu

1. **Inicie** o Cemu
2. **Menu** "Options" → **"Input Settings"**
3. **Remova** todos os controles existentes com o botão **"-"**


### Removendo Controles Existentes

#### Limpeza da Configuração

**Passos para remoção:**
1. **Identifique** todos os controles listados
2. **Clique** no botão **"-"** para cada controle
3. **Confirme** a remoção, se solicitado
4. **Verifique** se a lista está vazia


### Adicionando Novos Controles

#### Configuração XInput (Mouse2Joystick)

**Com o Mouse2Joystick aberto:**
1. **Clique** no botão **"+"**
2. **Selecione** "XInput" como API
3. **Escolha** "Controller 1", que deve aparecer
4. **Confirme** a seleção


#### Configuração do Teclado (Teclas Adicionais)

**Para teclas não mapeadas:**
1. **Clique** em **"+"** novamente
2. **Selecione** "Keyboard" como API
3. **Escolha** "Controller 1"
4. **Configure** teclas específicas do Wii U


### Configuração Final das Teclas

#### Mapeamento no Cemu

**Configuração recomendada:**

**Controle XInput (Mouse2Joystick):**
```
Analógico Esquerdo: Movimento do personagem
Analógico Direito: Controle da câmera
Botão A: Ação primária
Botão B: Voltar/Cancelar
Botão X: Ação secundária
Botão Y: Menu
L/R Bumper: Gatilhos rápidos
L/R Trigger: Gatilhos analógicos
```

**Controle de Teclado (teclas especiais):**
```
Plus: Enter (Menu principal)
Minus: Escape (Pausa)
Home: Tab (Menu Home)
Screenshot: F12
```

## Conclusão

Jogar jogos de **Wii U** no **Cemu** com teclado e mouse é possível graças ao **Mouse2Joystick** e **ViGEmBus**. Embora a experiência não seja ideal para todos os jogos, esta solução permite descobrir o excelente catálogo do Wii U sem investir em um controle.


### Dicas Finais

**Para uma melhor experiência:**
- Comece com jogos adaptados (Zelda, RPG)
- Reserve um tempo para ajustar as sensibilidades
- Salve suas configurações
- Considere comprar um controle eventualmente

## FAQ - Perguntas Frequentes

**P: Este método funciona com todos os jogos de Wii U?**
R: Não, alguns jogos exigem absolutamente um controle para uma experiência adequada (Mario Kart, Smash Bros, etc.).

**P: Posso usar esta configuração para outros emuladores?**
R: Sim, o Mouse2Joystick funciona com a maioria dos emuladores que suportam XInput.

**P: A latência é significativa?**
R: A latência é geralmente baixa, mas pode variar dependendo da configuração do seu hardware.

**P: Preciso manter o Mouse2Joystick aberto permanentemente?**
R: Sim, o Mouse2Joystick deve permanecer aberto enquanto você joga para manter a simulação do controle.

**P: Este método afeta o desempenho do Cemu?**
R: O impacto é mínimo, pois o Mouse2Joystick consome poucos recursos.
