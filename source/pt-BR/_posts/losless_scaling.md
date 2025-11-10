---
title: "Configuração do Lossless Scaling para Emuladores"
description: "Guia completo para configurar o Lossless Scaling e aumentar o desempenho de FPS em emuladores de Nintendo Switch, PS2, PS3 e mais - Geração de quadros e upscaling otimizados"
date: 2025-10-07
lastmod: 2025-10-07
categories: ["Otimização"]
tags: ["lossless-scaling", "frame-generation", "upscaling", "emulação", "fps-boost", "yuzu", "ryujinx", "rpcs3", "pcsx2", "desempenho"]
series: ["Guias de Otimização"]
author: "Axekin"
draft: false
toc: true
math: false
featured: true
weight: 5
aliases: 
  - /pt-BR/lossless-scaling-guide/
  - /pt-BR/guides/lossless-scaling-emulators/
summary: "Maximize seus FPS em emuladores com o Lossless Scaling. Guia de configuração detalhado para Switch, PS2, PS3 com geração de quadros e upscaling."
cover: "covers/LS.png"
image: "covers/LS.png"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

## 🚀 Introdução ao Lossless Scaling

**Lossless Scaling** é uma ferramenta poderosa para **geração de quadros** e **upscaling** que pode melhorar significativamente tanto o desempenho quanto a qualidade visual em jogos e emuladores. Diferente das soluções integradas à GPU (DLSS, FSR), o Lossless Scaling funciona no nível do sistema e é compatível com **todas as GPUs**.

### Principais Vantagens

> **✨ Por que usar o Lossless Scaling?**
> 
> - **Aumento de FPS:** Gera quadros intermediários para dobrar/triplicar sua taxa de quadros
> - **Melhora Visual:** Upscaling de alta qualidade para resoluções mais altas
> - **Compatibilidade Universal:** Funciona com NVIDIA, AMD e Intel
> - **Otimização de Emuladores:** Especialmente eficaz para Switch, PS2, PS3
> - **Baixa Latência:** Tecnologia otimizada para minimizar o input lag

### Casos de Uso Ideais

**Onde o Lossless Scaling se destaca:**
- Jogos emulados rodando a 30 FPS nativos (Pokémon, Zelda, etc.)
- Emuladores que consomem muitos recursos (RPCS3, Yuzu)
- PCs modestos que precisam de um aumento de desempenho
- Upscaling de 1080p → 1440p/4K
- Jogabilidade geral mais suave

### Baixando o Lossless Scaling

#### Onde comprar

**🛒 [Lossless Scaling na Steam](https://store.steampowered.com/app/993090/Lossless_Scaling/)**

Por favor, considere comprar a ferramenta — é muito acessível pelo que oferece. Se não puder, você pode baixá-la [aqui](https://cs.rin.ru/forum/viewtopic.php?f=41&t=94507).

### Primeiro Lançamento e Configuração Inicial

#### Interface Principal

No primeiro lançamento, o Lossless Scaling exibe uma interface minimalista com várias seções:

**Seções da interface:**
- **Modo de Escala:** Modo de upscaling
- **Tipo de Escala:** Algoritmo de upscaling
- **Geração de Quadros:** Configurações de geração de quadros
- **Método de Captura:** Método de captura de tela
- **Teclas de Atalho:** Atalhos de teclado

## ⚙️ Configuração Detalhada para Emuladores

## ⚙️ Configurações Otimizadas do Lossless Scaling (2025)

### Perfis Recomendados por Prioridade

Aqui estão as configurações a serem priorizadas com base no seu objetivo (qualidade ou desempenho), com base nos testes visuais e comparações mais recentes:

#### 1. Qualidade Máxima (Imagem: MELHOR / Perf: LENTO)

```
Tipo: LSG 3.1
Escala de fluxo: 90
Multiplicador: 4
Desempenho: OFF
```
Use este perfil se você deseja a melhor qualidade de imagem possível e sua GPU pode lidar com isso.

#### 2. Qualidade/Desempenho Equilibrado (Imagem: EQUILIBRADO)

```
Tipo: LSG 3.1
Escala de fluxo: 65
Multiplicador: 4
Desempenho: OFF
```
Este perfil oferece um excelente compromisso entre suavidade e nitidez, recomendado para a maioria dos usuários.

#### 3. Desempenho Máximo (Imagem: RUIM / Perf: MAIS RÁPIDO)

```
Tipo: LSG 3.1
Escala de fluxo: 65
Multiplicador: 4
Desempenho: ON
```
Priorize isso se você deseja maximizar os FPS, especialmente em configurações modestas ou para jogos muito exigentes.

> **Dica:** Versões mais antigas (LSG 1.0) agora estão obsoletas и devem ser evitadas.

### Dicas de Integração

- Ajuste o perfil de acordo com seu hardware e prioridades (qualidade ou desempenho).
- Para a maioria dos usuários, o perfil "Equilibrado" é recomendado.
- Não hesite em testar diferentes configurações para encontrar o melhor compromisso para sua configuração.
- Evite usar a escala interna do emulador e o Lossless Scaling ao mesmo tempo para evitar upscaling duplo.

---

## 🔧 Solução de Problemas

### Problemas Comuns e Soluções

#### Latência Excessiva (Input Lag)

**Sintoma:** Atraso perceptível entre suas ações e a resposta na tela.

**Soluções em ordem:**

```
1. Diminua o multiplicador de geração de quadros
   x4 → x3 → x2 → OFF
   
2. Mude o modo de geração de quadros
   LS1 → LSFG
   
3. Desative o VSync no emulador
   
4. Diminua o fator de escala
   2x → 1.5x → 1.2x
   
5. Mude o método de captura
   Auto → Duplicação de Desktop DXGI → Captura de Gráficos do Windows
   
6. Aumente a prioridade do processo
   Normal → Alta → Tempo Real (apenas teste)
```

**Configuração "Baixa Latência":**
```yaml
Tipo de Escala: AMD FSR
Fator de Escala: 1.2x
Geração de Quadros: APENAS LSFG x2
Método de Captura: Duplicação de Desktop DXGI
Prioridade: Alta
VSync do Emulador: OFF
```

#### Artefatos Visuais e Ghosting

**Sintoma:** Rastros, imagens fantasmas, texturas borradas.

**Soluções:**

**Para ghosting (rastros):**
```
1. Diminua o multiplicador de geração de quadros
2. Mude de LS1 para LSFG
3. Aumente a nitidez (0.8 → 1.0)
4. Certifique-se de que o jogo roda em FPS nativo estável
5. Desative o desfoque de movimento no emulador
```

**Para artefatos gráficos:**
```
1. Mude o tipo de escala (FSR → NIS ou vice-versa)
2. Diminua a nitidez (0.9 → 0.6)
3. Mude o método de captura
4. Atualize os drivers da GPU
5. Desative sobreposições (Discord, Steam, etc.)
```

**Configuração "Qualidade Primeiro":**
```yaml
Tipo de Escala: NIS
Fator de Escala: máx 1.5x
Geração de Quadros: LSFG x2
Nitidez: 0.7
Método de Captura: Duplicação de Desktop DXGI
```

## ❓ FAQ - Perguntas Frequentes

### Perguntas Gerais

**P: O Lossless Scaling funciona com todos os emuladores?**  
R: Sim, o Lossless Scaling funciona no nível do sistema e é compatível com todos os emuladores do Windows. Os resultados podem variar dependendo do emulador e do jogo.

**P: É legal usar o Lossless Scaling?**  
R: Com certeza, é um software oficial vendido na Steam que melhora a exibição de qualquer aplicativo do Windows.

**P: Posso usá-lo junto com DLSS/FSR nativo no emulador?**  
R: Sim, mas geralmente não é recomendado (upscaling duplo). Escolha um ou outro para obter os melhores resultados.

### Perguntas Técnicas

**P: Qual a diferença entre LSFG e LS1?**  
R: LSFG (Lossless Scaling Frame Generation) é a tecnologia mais recente, mais eficiente e com menor latência. LS1 é a geração mais antiga, a ser usada se o LSFG for instável.

**P: Minha GPU AMD/Intel pode usar o Lossless Scaling?**  
R: Sim! Ao contrário do DLSS (apenas NVIDIA), o Lossless Scaling funciona em todas as GPUs (NVIDIA, AMD, Intel).

**P: Quanta VRAM é necessária?**  
R: Geralmente, no mínimo 4GB, recomendado 6-8GB. Upscaling e geração de quadros usam VRAM extra.

**P: A latência é realmente perceptível?**  
R: Com LSFG x2, a latência adicionada é mínima (5-10ms). Para jogos competitivos, é perceptível, mas para jogos solo/emulação, é insignificante.

**P: Posso usar o Lossless Scaling com jogos de PC nativos?**  
R: Sim, o Lossless Scaling funciona com qualquer jogo ou aplicativo do Windows.

## 🎯 Conclusão

**Lossless Scaling** é uma ferramenta poderosa que pode transformar sua experiência de emulação, especialmente em emuladores exigentes como **Yuzu**, **RPCS3** ou **PCSX2**. Com a configuração adequada, você pode:

### Principais Benefícios

> **✅ Vantagens do Lossless Scaling:**
> 
> - **Dobrar seus FPS** em jogos nativos de 30fps
> - **Melhorar a qualidade visual** com upscaling inteligente
> - **Latência mínima** com a tecnologia LSFG
> - **Compatível com todas as GPUs** (NVIDIA, AMD, Intel)
> - **Fácil de usar** uma vez configurado corretamente

**Suporte:** Para qualquer dúvida ou problema, confira o [Discord do Lossless Scaling](https://discord.gg/losslessscaling) ou fóruns especializados em emulação.
