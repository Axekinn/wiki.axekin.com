---
title: "Guia do RPCS3 Netplay (RPCN)"
date: 2025-08-12
draft: false
categories: ["RPCS3"]
tags: ["RPCS3"]
author: "Axekin"
description: "Guia passo a passo para configurar o Netplay do RPCS3 usando RPCN: configuração global, configurações por jogo, solução de problemas e recuperação de conta."
series: ["Guias de Emulação"]
toc: true
math: false
featured: false
weight: 20
aliases:
  - /pt-BR/rpcs3-netplay-guide/
  - /pt-BR/guides/rpcs3-rpcn-netplay/
summary: "Aprenda a configurar e usar o Netplay do RPCS3 (RPCN). Este guia abrange a configuração global, configurações por jogo, correções de conectividade e recuperação de conta RPCN."
cover: "covers/rpcs3.png"
image: "covers/rpcs3.png"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

> Jogue jogos de PS3 online via RPCN com uma configuração suave e confiável. Siga a lista de verificação rápida e, em seguida, aprofunde-se quando necessário.

> 📝 Nota do autor  
> O RPCS3 nunca foi tão fácil de configurar para jogos multiplayer. Para aqueles de vocês que são mais experientes em tecnologia, incluí o tutorial do RPCS3, que é muito bem explicado.

## ⚡ Lista de Verificação Rápida

- Atualize para a compilação mais recente do RPCS3
- Crie и verifique uma conta RPCN
- Por jogo: Rede = Conectado, PSN = RPCN
- DNS 8.8.8.8 (a menos que o jogo precise de outro)
- UPnP ativado no PC/roteador ou encaminhar a porta UDP 3658
- Testar Conta na janela RPCN

## ℹ️ O que é RPCN?

RPCN é um substituto da PSN feito pela comunidade, usado pelo RPCS3 para habilitar recursos online em jogos suportados.

> ⚠️ Isenção de responsabilidade  
> Em 99% dos casos, você não precisa alterar as configurações de firewall, NAT/UPnP ou encaminhamento de porta. O RPCS3 + RPCN deve funcionar sem problemas na maioria das redes. Apenas mexa nessas configurações se a conectividade online com o outro jogador falhar após seguir os passos abaixo.

## ✅ Requisitos

| Item | Recomendação | Nota |
|---|---|---|
| RPCS3 | Compilação mais recente | Atualizador automático ou download novo |
| Portas | UDP 3658 | UPnP ou encaminhamento de porta manual |
| NAT | Aberto/Tipo A | Evite NAT duplo/CGNAT |
| Firewall | Permitir RPCS3 | SO e suíte de segurança |

---

## 🔧 Configuração Global

1. Abra o RPCS3 → Configuração → **RPCN**
2. Clique em **Conta**
3. Selecione o servidor: **Servidor RPCN Oficial**
4. Clique em **Criar Conta**
5. Defina um **Nome de usuário** → OK
6. Insira a **Senha** duas vezes → OK
7. Insira o **Email** duas vezes → OK
8. Confirme o resumo → **Sim**
9. Mensagem de sucesso → uma janela “RPCN: Nome de usuário” aparece
10. Verifique sua caixa de entrada para o **token** RPCN → cole em **Token** → OK
11. Clique em **Testar Conta**

> 💡 Dica profissional  
> Mantenha seu token privado. Se você o perder, use “Reenviar Token” em Editar Conta.

---

## 🎯 Configuração Específica do Jogo

1. Na lista de jogos, clique com o botão direito no título → **Criar Configuração Personalizada**
2. Vá para **Rede**
3. **Status da Rede**: Conectado
4. **Status da PSN**: RPCN
5. **DNS**: `8.8.8.8` (a menos que o jogo exija outro)
6. Se o jogo precisar de um servidor personalizado, insira os IPs/Hosts fornecidos pela comunidade

> 💡 Substituições por jogo  
> Essas configurações se aplicam apenas a este jogo e não alterarão sua configuração global.

![Prova do netplay do RPCS3 RPCN (Assault Heroes)](covers/rpcs3_mp.png)  
*Prova de que funciona: Multiplayer online rodando via RPCN no RPCS3.*

---

## 🌐 Essenciais de Conectividade

- Ative o UPnP no RPCS3: Configuração → Rede → **Ativar UPnP**
- Ative o UPnP no seu roteador (o manual varia por modelo)
- Ou encaminhe a porta **3658/UDP** para o IP local do seu PC

<details>
  <summary>Mostrar notas de encaminhamento de porta</summary>

- Encaminhar: UDP 3658 → IP do seu PC (reserve via DHCP)  
- Evite NAT duplo (coloque o modem do provedor em modo ponte, se necessário)  
- VPNs podem bloquear UDP de entrada; configure o encaminhamento de porta na VPN ou desative-a enquanto joga
</details>

> 🚧 Restrições de NAT e ISP  
> NAT estrito ou CGNAT podem quebrar a conectividade ponto a ponto. Peça ao seu ISP um IPv4 público ou use uma VPN que suporte encaminhamento de porta.

---

## 🛠️ Solução de Problemas

### Não consigo me conectar a outros jogadores
- UPnP ativado no RPCS3 e no roteador
- Ou encaminhe a porta UDP 3658 para o seu PC
- Permita o RPCS3 através do firewall/suíte de segurança
- Desative ou reconfigure a VPN
- RPCN → Conta → **Testar Conta**

<details>
  <summary>Verificações avançadas</summary>

- Confirme se o IP do seu PC não mudou (reserva DHCP)  
- Detecte NAT duplo (modem + roteador ambos roteando)  
- O teste de NAT do roteador deve visar Aberto/Tipo A
</details>

---

## 🔐 Recuperar Conta RPCN

### Reenviar Token RPCN
1. RPCS3 → Configuração → RPCN → **Conta**
2. **Editar Conta** → **Reenviar Token**
3. Confirmar → OK → verifique o e-mail “Seu token para RPCN”
4. Cole o token no campo **Token** → OK → **Salvar**

### Redefinir Senha RPCN
1. RPCS3 → Configuração → RPCN → **Conta**
2. **Editar Conta** → **Alterar Senha**
3. Confirme o nome de usuário → OK
4. Quando perguntado “Você já tem um token de redefinição de senha?” → **Não**
5. Insira o e-mail de inscrição duas vezes → OK
6. Verifique o e-mail “Seu código de redefinição de senha para RPCN”
7. Cole o token → OK
8. Insira a nova senha duas vezes → OK
9. De volta em Editar Conta → **Definir Senha** → insira a nova senha → OK → **Salvar**
10. RPCN: **Testar conta**

---

### Boas práticas
- Use senhas fortes e exclusivas  
- Não compartilhe seu token  
- Mantenha o RPCS3 atualizado para as correções mais recentes do RPCN  

> Respeite as licenças dos jogos e os termos de serviço online. Apoie os desenvolvedores comprando seus jogos.

🎯 Resultado: Você está pronto para jogar online via RPCN!
````
