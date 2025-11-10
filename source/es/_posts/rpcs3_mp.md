---
title: "Guía de Netplay de RPCS3 (RPCN)"
date: 2025-08-12
draft: false
categories: ["RPCS3"]
tags: ["RPCS3"]
author: "Axekin"
description: "Guía paso a paso para configurar el Netplay de RPCS3 usando RPCN: configuración global, ajustes por juego, solución de problemas y recuperación de cuenta."
series: ["Guías de Emulación"]
toc: true
math: false
featured: false
weight: 20
aliases:
  - /es/rpcs3-netplay-guide/
  - /es/guides/rpcs3-rpcn-netplay/
summary: "Aprende a configurar y usar el Netplay de RPCS3 (RPCN). Esta guía cubre la configuración global, los ajustes por juego, las soluciones de conectividad y la recuperación de la cuenta RPCN."
cover: "covers/rpcs3.png"
image: "covers/rpcs3.png"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

> Juega a juegos de PS3 en línea a través de RPCN con una configuración fluida y fiable. Sigue la lista de comprobación rápida y profundiza cuando sea necesario.

> 📝 Nota del autor  
> RPCS3 nunca ha sido tan fácil de configurar para juegos multijugador. Para los que sois más expertos en tecnología, he incluido el tutorial de RPCS3, que está muy bien explicado.

## ⚡ Lista de Inicio Rápido

- Actualiza a la última versión de RPCS3
- Crea y verifica una cuenta de RPCN
- Por juego: Red = Conectado, PSN = RPCN
- DNS 8.8.8.8 (a menos que el juego necesite otro)
- UPnP habilitado en PC/router o redirigir el puerto UDP 3658
- Probar Cuenta en la ventana de RPCN

## ℹ️ ¿Qué es RPCN?

RPCN es un reemplazo de PSN creado por la comunidad y utilizado por RPCS3 para habilitar funciones en línea en los juegos compatibles.

> ⚠️ Descargo de responsabilidad  
> En el 99% de los casos no necesitas cambiar la configuración del firewall, NAT/UPnP o reenvío de puertos. RPCS3 + RPCN deberían funcionar sin problemas en la mayoría de las redes. Solo toca estos ajustes si la conectividad en línea con el otro jugador falla después de seguir los pasos a continuación.

## ✅ Requisitos

| Elemento | Recomendación | Nota |
|---|---|---|
| RPCS3 | Última versión | Actualizador automático o descarga nueva |
| Puertos | UDP 3658 | UPnP o reenvío de puertos manual |
| NAT | Abierto/Tipo A | Evitar doble NAT/CGNAT |
| Firewall | Permitir RPCS3 | SO y suite de seguridad |

---

## 🔧 Configuración Global

1. Abre RPCS3 → Configuración → **RPCN**
2. Haz clic en **Cuenta**
3. Selecciona el servidor: **Servidor Oficial de RPCN**
4. Haz clic en **Crear Cuenta**
5. Establece un **Nombre de usuario** → OK
6. Introduce la **Contraseña** dos veces → OK
7. Introduce el **Email** dos veces → OK
8. Confirma el resumen → **Sí**
9. Mensaje de éxito → aparece una ventana “RPCN: Nombre de usuario”
10. Revisa tu correo para obtener el **token** de RPCN → pégalo en **Token** → OK
11. Haz clic en **Probar Cuenta**

> 💡 Consejo profesional  
> Mantén tu token privado. Si lo pierdes, usa “Reenviar Token” en Editar Cuenta.

---

## 🎯 Configuración Específica del Juego

1. En la lista de juegos, haz clic derecho en el título → **Crear Configuración Personalizada**
2. Ve a **Red**
3. **Estado de la Red**: Conectado
4. **Estado de PSN**: RPCN
5. **DNS**: `8.8.8.8` (a menos que el juego requiera otro)
6. Si el juego necesita un servidor personalizado, introduce las IPs/Hosts proporcionados por la comunidad

> 💡 Anulaciones por juego  
> Estos ajustes se aplican solo a este juego y no cambiarán tu configuración global.

![Prueba de netplay de RPCS3 RPCN (Assault Heroes)](covers/rpcs3_mp.png)  
*Prueba de que funciona: Multijugador en línea funcionando a través de RPCN en RPCS3.*

---

## 🌐 Esenciales de Conectividad

- Habilita UPnP en RPCS3: Configuración → Red → **Habilitar UPnP**
- Habilita UPnP en tu router (el manual varía según el modelo)
- O redirige el puerto **3658/UDP** a la IP local de tu PC

<details>
  <summary>Mostrar notas sobre el reenvío de puertos</summary>

- Redirigir: UDP 3658 → IP de tu PC (reserva mediante DHCP)  
- Evita el doble NAT (pon el módem de tu ISP en modo puente si es necesario)  
- Los VPN pueden bloquear el UDP entrante; configura el reenvío de puertos en el VPN o desactívalo mientras juegas
</details>

> 🚧 Restricciones de NAT e ISP  
> Un NAT estricto o CGNAT puede romper la conectividad entre pares. Pide a tu ISP una IPv4 pública o usa un VPN que admita el reenvío de puertos.

---

## 🛠️ Solución de Problemas

### No se puede conectar con otros jugadores
- UPnP habilitado en RPCS3 y en el router
- O redirigir el puerto UDP 3658 a tu PC
- Permitir RPCS3 a través del firewall/suite de seguridad
- Desactivar o reconfigurar el VPN
- RPCN → Cuenta → **Probar Cuenta**

<details>
  <summary>Comprobaciones avanzadas</summary>

- Confirma que la IP de tu PC no ha cambiado (reserva DHCP)  
- Detecta el doble NAT (módem + router ambos enrutando)  
- La prueba de NAT del router debe apuntar a Abierto/Tipo A
</details>

---

## 🔐 Recuperar Cuenta de RPCN

### Reenviar Token de RPCN
1. RPCS3 → Configuración → RPCN → **Cuenta**
2. **Editar Cuenta** → **Reenviar Token**
3. Confirmar → OK → revisa el correo “Tu token para RPCN”
4. Pega el token en el campo **Token** → OK → **Guardar**

### Restablecer Contraseña de RPCN
1. RPCS3 → Configuración → RPCN → **Cuenta**
2. **Editar Cuenta** → **Cambiar Contraseña**
3. Confirma el nombre de usuario → OK
4. Cuando se te pregunte “¿Ya tienes un token de restablecimiento de contraseña?” → **No**
5. Introduce el email de registro dos veces → OK
6. Revisa el correo “Tu código de restablecimiento de contraseña para RPCN”
7. Pega el token → OK
8. Introduce la nueva contraseña dos veces → OK
9. De vuelta en Editar Cuenta → **Establecer Contraseña** → introduce la nueva contraseña → OK → **Guardar**
10. RPCN: **Probar cuenta**

---

### Buenas prácticas
- Usa contraseñas fuertes y únicas  
- No compartas tu token  
- Mantén RPCS3 actualizado para las últimas correcciones de RPCN  

> Respeta las licencias de los juegos y los términos de servicio en línea. Apoya a los desarrolladores comprando sus juegos.

🎯 Resultado: ¡Estás listo para jugar en línea a través de RPCN!
````
