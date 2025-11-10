---
title: "Instalação e Configuração do Azahar"
date: 2025-06-02
draft: false
categories: ["Citra"]
tags: ["Citra"]
author: "Axekin"
description: "Tutorial detalhado para instalar, configurar e usar o emulador de Nintendo 3DS Azahar"
series: ["Guias de Emulação"]
toc: true
math: false
featured: false
weight: 20
aliases: 
  - /pt-BR/citra-cheats-mods/
  - /pt-BR/guides/citra-modding/
summary: "Aprenda a instalar códigos de trapaça e modificações de jogos no emulador Citra. Tutorial detalhado com estrutura de pastas e etapas de instalação."
cover: "covers/azahar.webp"
image: "covers/azahar.webp"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

## 🎮 Introdução ao Citra

**Citra** é o emulador de código aberto mais avançado para Nintendo 3DS. Desenvolvido desde 2013, ele permite que você jogue jogos de 3DS no PC com melhorias gráficas significativas e compatibilidade quase perfeita. O Azahar é um fork dele.

## 🔧 Passo 1: Baixando o Citra

### Opção 1: Azahar Oficial
```bash
# Site oficial
https://github.com/azahar-emu/azahar/releases
```

1. **Clique** em "Download for Windows"
2. **Baixe** `azahar-XXXX-rc1-windows-msvc-installer.exe`
3. **Extraia** para uma pasta dedicada (por exemplo, `Documents\Azahar` ou na raiz de outra unidade, não C)

## Download de Jogos

### Passo 1: Acesse a biblioteca de jogos

Vá para **[🎮 Axekin Games - Nintendo 3DS](https://www.axekin.com/games?platform=3ds)** para acessar a coleção de jogos do Nintendo 3DS.

### Passo 2: Baixe o jogo

1. **Procure** o jogo desejado na lista
2. **Clique** no botão de download
3. **Aguarde** o download ser concluído

### Passo 3: Extração de arquivos

Assim que o download terminar, **extraia** o arquivo com um destes softwares:

| Software | Link de Download | Compatibilidade |
|----------|------------------|-----------------|
| **7-Zip** | [Baixar 7-Zip](https://www.7-zip.org/) | Windows/Linux |
| **WinRAR** | [Baixar WinRAR](https://www.win-rar.com/) | Windows |

> **💡 Dica**: O 7-Zip é gratuito e de código aberto, enquanto o WinRAR requer uma licença após o período de teste.

**Resultado**: Você obterá arquivos de jogo prontos para serem usados com o 3DS! 🎯

## 📁 Passo 2: Estrutura de Pastas

Crie esta estrutura de pastas para organizar seus arquivos:

Para uma organização ideal da sua biblioteca, aqui está a estrutura de árvore recomendada:

````
Jogos 3DS/
├── Animal Crossing - Happy Home Designer/
│   ├── BASE/                # 🎮 Jogo base (arquivo principal)
│   ├── UPDATE/              # 🔄 Atualização do jogo (recomendado)
│   └── DLC/                 # 📦 Conteúdo para download (opcional)
├── Dead or Alive - Dimensions/
│   ├── BASE/                # 🎮 Jogo base
│   ├── UPDATE/              # 🔄 Atualização do jogo
│   └── DLC/                 # 📦 DLC adicional
├── Ben 10 - Galactic Racing/
│   ├── BASE/
│   ├── UPDATE/
│   └── DLC/
└── Captain America - Super Soldier/
    ├── BASE/
    └── UPDATE/              # (Sem DLC para este jogo)
````


### Tipos de conteúdo


- **BASE** 📁: Os arquivos principais do jogo que você baixou
- **UPDATE** 📁: Atualizações e patches (recomendado)
- **DLC** 📁: Conteúdo pago adicional (opcional, mas recomendado)


✅ **Detecção automática**: Os jogos são adicionados automaticamente no emulador  
✅ **Gerenciamento simplificado**: Não é necessário adicionar cada ROM manualmente  
✅ **Organização clara**: Fácil de ver qual conteúdo você tem por jogo  
✅ **Manutenção fácil**: Adicionar/remover conteúdo é simples

> **📝 Nota importante**: Se um jogo não tiver atualizações ou DLCs, você não precisa criar essas pastas. Crie pastas apenas para o conteúdo que você possui.

### Resultado

Assim que essa estrutura estiver no lugar, seu emulador detectará automaticamente todos os jogos na pasta "Jogos 3DS" e os exibirá de forma organizada em sua biblioteca! 🎯

## 💡 Configuração portátil (Recomendado)


**Antes do primeiro lançamento**, crie uma pasta chamada `user` na raiz da instalação do Azahar. Isso tornará a instalação totalmente portátil.

### Vantagens do modo portátil

| Aspecto | Modo normal | Modo portátil |
|--------|-------------|---------------|
| **Configurações** | Armazenadas no sistema | Armazenadas dentro da pasta |
| **Salvos** | Espalhados pelo computador | Centralizados em uma pasta |
| **Portabilidade** | ❌ Vinculado ao sistema | ✅ Facilmente móvel |
| **Backup** | Mais difícil de localizar | Simples de fazer backup |

### Estrutura após criar a pasta portátil

```
📁 Azahar/
├── 🎮 Azahar.exe
├── 📁 user/              # ← Crie esta pasta!
│   ├── 📁 bis/
│   ├── 📁 games/
│   ├── 📁 profiles/
│   └── 📁 system/
└── 📄 Outros arquivos...
```


**Todos os seus dados** (configurações, salvos, perfis) serão armazenados dentro da pasta `user`, tornando o gerenciamento e os backups muito mais fáceis!

### Passos para criação

1. Navegue até a pasta de instalação do Azahar
2. Crie uma nova pasta chamada exatamente `user`
3. Inicie o Azahar — ele detectará o modo portátil automaticamente

> **📝 Nota**: Isso deve ser feito **antes** do primeiro lançamento para ter efeito!

## ⚙️ Passo 3: Instalação e primeira execução

### Pré-requisitos do Windows

### Primeira execução
1. Execute `azahar.exe`
2. Defina sua pasta de jogos (dê um duplo clique no menu, adicione a pasta "Jogos 3DS")

## ⚙️ Passo 4: Configuração ideal

### Configurações gerais
```
Emulação → Configurar → Geral
```
- **Confirmar saída enquanto a emulação está em execução**: ✅ Ativado
- **Pausar emulação quando em segundo plano**: ✅ Ativado (opcional)
- **Ativar presença no Discord**: ✅ Ativado (opcional)

### Configuração do sistema
```
Emulação → Configurar → Sistema
```
- **Região**: Europa (ou sua região)
- **Idioma**: Seu idioma
- **ID do console**: Aleatório (gerado automaticamente)
- **Ativar New 3DS**: ✅ Ativado (para melhor desempenho)

### Configurações gráficas recomendadas

#### Aba Gráficos
```
Gráficos → Geral
- Resolução Interna: 2x Nativa (400x480) ou superior. Valores mais altos aumentam o uso da GPU.
- Ativar Filtragem Linear: ✅ Ativado
→ Geral
```

#### Aba Layout

```
Gráficos → Layout
```


Esta seção permite que você personalize a exibição das duas telas do 3DS de acordo com sua preferência visual e hardware.

### Layouts de tela

**Opções predefinidas:**

| Modo | Descrição | Recomendação |
|------|-------------|----------------|
| **Padrão** | Layout padrão da Nintendo | ✅ **Iniciantes** |
| **Tela única** | Mostra apenas a tela ativa | Foco na jogabilidade |
| **Largo** | Estica em toda a largura | Monitores largos |
| **Lado a lado** | Telas horizontais | **Recomendado para jogos** |
| **Janelas separadas** | Duas janelas independentes | Configurações de múltiplos monitores |
| **Empilhado** | Telas empilhadas verticalmente | Economia de espaço |
| **Layout personalizado** | Configuração manual | ⭐ **O mais flexível** |

### Configuração de layout personalizado


**Tela superior:**
- **Posição X/Y**: `0px, 0px` (canto superior esquerdo)
- **Largura/Altura**: `800px, 480px` (proporção 4:3 ideal)

**Tela inferior:**
- **Posição X/Y**: `80px, 500px` (ligeiramente centralizado)
- **Largura/Altura**: `640px, 480px` (proporcional)

**Opacidade da tela inferior**: `100%` (totalmente visível)

### Configurações de exibição

#### Opções gerais
```
Telas → Configuração
```

**Ajustes recomendados:**
- **Trocar telas**: ❌ Desativado (preservar a lógica do DS)
- **Girar telas para cima**: ❌ Desativado
- **Espaçamento entre telas**: `0.00` a `4.00` dependendo da preferência
- **Escala da tela principal**: `4.00` (tela primária maior)
- **Posição da tela secundária**: `Canto inferior direito` (área de toque)

#### Modo de tela única


**Casos de uso:**
- Jogos que usam apenas uma tela principal
- Economizar recursos de renderização
- Focar na ação principal

**Configuração:**
- **Esticar**: ☑️ Marcado para ambas as telas
- **Margem esquerda/direita**: `0px` (tela cheia)
- **Margem superior/inferior**: `0px` (uso máximo)

> **💡 Dica prática**: Teste diferentes layouts dependendo do jogo. RPGs geralmente se beneficiam de layouts personalizados, enquanto jogos de ação preferem o modo lado a lado.

#### Aba Avançado
```
Gráficos → Avançado
- API de Gráficos: OpenGL (recomendado) ou Vulkan
- Ativar Renderizador por Hardware: ✅ Ativado
- Ativar Shader de Hardware: ✅ Ativado
- Ativar Multiplicação Precisa: ✅ Ativado
- Usar Cache de Shader em Disco: ✅ Ativado
- Ativar VSync: ✅ Ativado
```

### Configuração de áudio
```
Áudio
- Emulação: HLE
```

### Configuração de controles

#### Método de detecção automática
```
Controles → Configurar
1. Clique em "Configuração Automática"
2. Pressione os botões do seu controle
3. Teste todas as entradas
```

## ⚙️ Passo 🌐 Multijogador (configuração rápida)

Você pode conectar o Citra/Azahar a um serviço multijogador externo editando a configuração local. Aviso: feche completamente o Citra/Azahar antes de editar os arquivos de configuração ou suas alterações serão sobrescritas.

1. Abra a pasta de configuração:

   - Para uma instalação padrão do Windows: `C:\\Users\\<SeuUsuário>\\AppData\\Roaming\\citra\\config\\`
   - Para uma instalação portátil: abra a pasta `user` na raiz do Azahar/Citra

2. Edite o arquivo `qt-config.ini` (com o Bloco de Notas ou um editor de texto) e altere/adicione estas duas linhas:

```
web_api_url\\default=false
web_api_url=http://88.198.47.46:5000/
```

3. Salve e feche o editor, depois reinicie o Citra/Azahar.

Hospedar uma sala dedicada (exemplo de `host.bat` do Windows)

Se você quiser hospedar através de um arquivo de lote dedicado, crie ou edite um `host.bat` e cole o exemplo abaixo. Você pode alterar o nome da sala e o ID do título.

```
citra-room ^
  --room-name "o nome da sua sala" ^
  --room-description "Todos os Jogos" ^
  --preferred-game "Super Smash Bros" ^
  --preferred-game-id "00040000000EDF00" ^
  --port 24872 ^
  --max_members 16 ^
  --token "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" ^
  --enable-citra-mods ^
  --web-api-url http://88.198.47.46:5000 ^
  --ban-list-file "INSIRA_O_CAMINHO_DO_ARQUIVO_DA_LISTA_DE_BANIMENTO_AQUI"
pause
```

Notas:

- Substitua `--token` pelo seu token real quando necessário.
- `--preferred-game-id` corresponde ao ID do título do jogo (16 dígitos hexadecimais). Deixe em branco para aceitar todos os jogos.
- `--web-api-url` deve apontar para o servidor da API (aqui: `http://88.198.47.46:5000`).

Com esses passos, o Citra/Azahar usará o serviço multijogador especificado e o `host.bat` permitirá que você hospede uma sala a partir da sua máquina.

### Formatos suportados
- **.CCI**: Único formato suportado pelos meus ROMs com Azahar devido a restrições antipirataria


## ❓ FAQ - Perguntas Frequentes

### Perguntas gerais

**P: O Azahar pode rodar todos os jogos de 3DS?**  
**R:** Aproximadamente 90% dos jogos de 3DS rodam de bem a perfeitamente. Verifique o banco de dados de compatibilidade para o seu título específico.

**P: O 3D estereoscópico funciona?**  
**R:** Sim, com telas compatíveis com 3D ou usando o modo lado a lado para VR.

**P: Posso usar meus salvos reais do 3DS?**  
**R:** Sim — com o Checkpoint ou JKSM você pode transferir salvos de ambos os jeitos.

### Perguntas técnicas

**P: Por que alguns jogos são lentos?**  
**R:** Os jogos de 3DS são otimizados para hardware específico. A emulação é mais exigente, especialmente para títulos complexos.

**P: OpenGL ou Vulkan?**  
**R:** O OpenGL é mais estável e compatível. O Vulkan pode oferecer melhor desempenho em GPUs modernas.

**P: Ativar o modo New 3DS melhora tudo?**  
**R:** Principalmente para jogos que usam nativamente os recursos do New 3DS (Xenoblade, Monster Hunter, etc.) e certos homebrews.

### Problemas comuns

**P: "Não foi possível determinar a região do sistema"?**  
**R:** Instale os arquivos do sistema (aes_keys.txt) e configure a região nas configurações.

**P: As texturas em HD não estão aparecendo?**  
**R:** Verifique se "Texturas Personalizadas" está ativado e se o ID do título corresponde à pasta.

**P: Como melhorar o desempenho no Android?**  
**R:** Use o Citra MMJ, diminua a resolução, ative o pulo de quadros se necessário.

Aproveite seus jogos de 3DS em alta definição! 🎮✨
