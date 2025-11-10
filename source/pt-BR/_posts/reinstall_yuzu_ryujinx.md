---
title: "Como Reinstalar Yuzu & Ryujinx Mantendo Seus Arquivos de Save"
description: "Guia completo para reinstalar de forma limpa os emuladores de Nintendo Switch Yuzu e Ryujinx, preservando seus saves de jogos"
date: 2025-06-04
lastmod: 2025-06-04
categories: ["PC"]
tags: ["yuzu", "ryujinx", "nintendo-switch", "emulação", "backup", "save", "reinstalação"]
series: ["Guias de Emulação"]
author: "Axekin"
draft: false
toc: true
math: false
featured: false
weight: 15
aliases: 
  - /pt-BR/reinstall-yuzu-ryujinx/
  - /pt-BR/guides/emulator-backup/
summary: "Aprenda a reinstalar completamente o Yuzu e o Ryujinx sem perder seus preciosos arquivos de save. Guia detalhado com capturas de tela e métodos de backup."
cover: "covers/yuzu-ryujinx-backup.webp"
image: "covers/yuzu-ryujinx-backup.webp"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

> **⚠️ Importante**: Sempre faça backup de seus dados antes de qualquer reinstalação! Este guia mostra como proceder com segurança.

## Introdução

Às vezes, o **Yuzu** ou o **Ryujinx** encontram problemas que exigem uma reinstalação completa. Corrupção de arquivos, atualizações problemáticas ou simplesmente o desejo de começar do zero...

Este guia explica **como reinstalar de forma limpa** esses emuladores **sem perder seus saves de jogos do Nintendo Switch**.

### Por que reinstalar?

**Problemas comuns que exigem reinstalação:**
- O emulador se recusa a iniciar
- Desempenho degradado após uma atualização
- Arquivos de configuração corrompidos
- Problemas gráficos persistentes
- Mensagens de erro recorrentes

## Método para o Yuzu

### Passo 1: Fazer backup dos dados do jogo

#### Localizar os saves

1. **Inicie o Yuzu** (se possível)
2. **Clique com o botão direito** no jogo desejado na lista
3. Selecione **"Abrir Local do Save"**

#### Fazer backup do conteúdo

4. **Selecione todo o conteúdo** da pasta que se abre (Ctrl+A)
5. **Copie** os arquivos (Ctrl+C)
6. **Crie uma pasta de backup** em sua área de trabalho ou disco rígido
7. **Cole** o conteúdo nesta pasta (Ctrl+V)

**Estrutura recomendada para organização:**
```
📁 Backup_Yuzu_2025-06-04/
├── 📁 The_Legend_of_Zelda_BOTW/
│   ├── save_data.bin
│   └── outros_arquivos...
├── 📁 Super_Mario_Odyssey/
│   ├── save_data.bin
│   └── outros_arquivos...
└── 📁 Pokemon_Legends_Arceus/
    ├── save_data.bin
    └── outros_arquivos...
```

#### Repetir para todos os jogos

8. **Repita esta operação** para cada jogo cujo save você deseja preservar
9. **Anote o nome** de cada pasta para facilitar a restauração

### Passo 2: Excluir os dados do Yuzu

#### Acessar a pasta de configuração

1. Pressione **Windows + R**
2. Digite `%appdata%` e pressione **Enter**

#### Excluir a pasta Yuzu

3. Navegue até a pasta **"yuzu"**
4. **Exclua completamente** esta pasta
5. **Esvazie a lixeira** para liberar espaço

> **💡 Dica**: Se a pasta estiver em uso, feche completamente o Yuzu através do Gerenciador de Tarefas.

### Passo 3: [Reinstalar o Yuzu](/pt-BR/post/yuzu/)

### Passo 4: Restaurar os saves

#### Colocar os arquivos de save de volta

1. **Inicie** seus jogos uma vez para criar as pastas de save
2. **Feche** o Yuzu completamente
3. **Clique com o botão direito** em cada jogo → "Abrir Local do Save"
4. **Substitua** o conteúdo pelos seus arquivos de backup

**Verificação:**
- Inicie o jogo para verificar se o save foi carregado corretamente
- Verifique o progresso, estatísticas, etc.

## Método para o Ryujinx

### Passo 1: Fazer backup dos dados do Ryujinx

#### Localizar os saves do usuário

1. **Inicie o Ryujinx**
2. **Clique com o botão direito** no jogo desejado
3. Selecione **"Abrir Diretório de Save do Usuário"**

![Menu do Ryujinx](path_save_1.png)
*Opções de save no Ryujinx*

#### Fazer backup de dados adicionais

4. Se disponível, clique também em **"Abrir Diretório de Save do Dispositivo"** e/ou BCAT
5. **Copie** todo o conteúdo para suas pastas de backup
6. **Organize** por nome de jogo como para o Yuzu

### Passo 2: Excluir o Ryujinx

#### Localizar a pasta de configuração

1. Pressione **Windows + R**
2. Digite `%appdata%` e valide
3. Navegue até a pasta **"Ryujinx"**
4. **Exclua completamente** esta pasta

### Passo 3: Reinstalação e restauração

#### [Reinstalar o Ryujinx](/pt-BR/post/ryujinx/)

#### Restaurar os saves

4. **Inicie cada jogo** uma vez
5. **Feche** o Ryujinx
6. **Substitua** os arquivos de save pelos seus backups
7. **Teste** se tudo está funcionando corretamente

### Verificações importantes

**Antes da reinstalação:**
- ✅ Backups completos criados
- ✅ Nomes dos jogos anotados
- ✅ Firmware/chaves disponíveis

**Após a reinstalação:**
- ✅ O emulador inicia corretamente
- ✅ Jogos detectados
- ✅ Saves restaurados
- ✅ Desempenho satisfatório

### Problemas comuns e soluções

#### 🚫 Saves não reconhecidos

**Causas possíveis:**
- Localização de arquivo errada
- Versões de emulador incompatíveis
- Arquivos corrompidos

**Soluções:**
1. Verifique a localização exata do arquivo
2. Tente com uma versão de emulador semelhante
3. Use um backup mais antigo

## Conclusão

Reinstalar o **Yuzu** e o **Ryujinx** preservando seus saves é um processo simples se você seguir o método correto. O essencial é **sempre fazer backup antes de agir** e proceder passo a passo.

### Pontos-chave a lembrar

> **🎯 Resumo do procedimento:**
> 1. **Faça backup** de todos os dados importantes do jogo
> 2. **Exclua de forma limpa** as pastas de configuração
> 3. **Reinstale** o emulador com uma versão recente
> 4. **Restaure** seus saves e teste
> 5. **Configure** de acordo com suas preferências

### Manutenção preventiva

**Para evitar reinstalações:**
- Atualizações regulares, mas cuidadosas
- Backups automáticos semanais
- Monitoramento de desempenho
- Limpeza periódica do cache

## FAQ - Perguntas Frequentes

**P: Posso transferir meus saves entre o Yuzu e o Ryujinx?**
**R:** Sim, existem muitos tutoriais disponíveis na internet.

**P: Quanto tempo leva o procedimento completo?**
**R:** Depende completamente do número de jogos que você tem.

**P: O que fazer se eu esquecer de fazer backup antes da reinstalação?**
**R:** Verifique a lixeira do Windows, use ferramentas de recuperação de arquivos ou restaure a partir de um backup do sistema.

---
