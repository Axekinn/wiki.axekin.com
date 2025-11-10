---
title: "Configuración de XLink Kai con Ryujinx"
date: 2025-06-03
draft: false
categories: ["Ryujinx", "XLink Kai"]
tags: ["Ryujinx", "XLink Kai", "Nintendo Switch", "Emulación", "Multijugador"]
author: "Axekin"
description: "Tutorial detallado para configurar XLink Kai con el emulador de Nintendo Switch Ryujinx para juegos multijugador"
cover: "covers/ryujinx.png"
---

## 🎮 Introducción a XLink Kai + Ryujinx

**XLink Kai + Ryujinx** permite a los jugadores emular juegos de Nintendo Switch a través de una red. Esta integración experimental te permite jugar en modo multijugador con otros usuarios de Ryujinx o incluso con consolas Nintendo Switch reales.

> ⚠️ **Nota importante**: El soporte de XLink Kai + Ryujinx es experimental y actualmente solo está disponible en Windows.

## 📋 Qué funciona

- Juegos de Nintendo Switch con soporte LAN
- Juegos de Nintendo Switch con soporte Local Wireless
- Ryujinx jugando contra otros jugadores de Ryujinx
- Ryujinx jugando contra jugadores en Switch (se requiere CFW para juegos Local Wireless)
- Ryujinx y una Switch local jugando juntos
- ¡Mezclar cualquier combinación de lo anterior!

## ❌ Qué no funciona

- Soporte para macOS aún no disponible
- Soporte para Linux aún no disponible

## 🌐 Tipos de conexión

### Juegos LAN

Los juegos LAN son los más compatibles y las siguientes configuraciones pueden jugar juntas:

- Jugadores que usan sistemas Nintendo Switch y Nintendo Switch Lite "OFW" sin modificar
- Jugadores que usan sistemas Nintendo Switch "CFW" modificados
- Jugadores que usan Ryujinx

### Juegos Local Wireless

Los juegos Local Wireless están un poco más restringidos, pero las siguientes configuraciones pueden jugar juntas:

- Jugadores que usan sistemas Nintendo Switch "CFW" modificados con el módulo de sistema ldn_mitm
- Jugadores que usan Ryujinx

> ⚠️ **Importante**: Los sistemas Nintendo Switch y Nintendo Switch Lite "OFW" sin modificar no son compatibles para juegos Local Wireless.

## 🔧 Configuración de Red

### Windows

Estas instrucciones son específicas para Windows 10 y Windows 11. Las versiones anteriores de Windows deberían seguir un proceso similar.

#### Instalación de NPCAP

Debido a problemas de licencia, XLink Kai se distribuye con WinPCAP, que desafortunadamente no es compatible con los adaptadores de bucle invertido. Para resolver este problema, necesitarás instalar NPCAP. Se sabe que la versión 1.31 es estable.

1. **Descarga** NPCAP desde [el sitio web oficial](https://npcap.com/#download)
2. **Instala** NPCAP con las opciones predeterminadas (simplemente haz clic en "Siguiente" hasta el final)

#### Ejecución de kaiLoopbackBridge

1. **Abre** el Explorador de Windows y navega a `C:\Program Files (x86)\XLink Kai\`
2. **Encuentra** `kaiLoopbackBridge64.exe`, haz clic derecho, **Ejecutar como administrador**
3. **Lee** la advertencia, presiona cualquier tecla para continuar
4. **Selecciona** Nintendo Switch como el tipo de emulador
5. El adaptador de bucle invertido se configurará automáticamente
6. **Cierra** kaiLoopbackBridge. Lo usaremos de nuevo más tarde.

## ⚙️ Instalación y Configuración de Ryujinx

La configuración de Ryujinx es bastante simple, consulta la [Guía de Ryujinx](https://wiki.axekin.com/es/post/ryujinx/) para la instalación básica.

### Configuración de red

#### Para Juegos LAN

1. Una vez que Ryujinx esté en funcionamiento, accede a la configuración haciendo clic en **Options** y luego en **Settings**
2. Haz clic en la pestaña **System**
3. Marca la casilla **Enable VSync**
4. Marca la casilla **Enable Guest Internet Access**
5. Haz clic en la pestaña **Multiplayer**
6. Bajo el encabezado LAN, establece **Network Interface** en **XLink Kai Loopback Switch XXXX**
7. **Guarda** la configuración y sal de Ryujinx

#### Para Juegos Local Wireless

1. Una vez que Ryujinx esté en funcionamiento, accede a la configuración haciendo clic en **Options** y luego en **Settings**
2. Haz clic en la pestaña **System**
3. Marca la casilla **Enable VSync**
4. Haz clic en la pestaña **Network**
5. Desmarca la casilla **Enable Guest Internet Access**
6. Bajo el encabezado Multiplayer, establece **Mode** en **ldn_mitm**
7. Bajo el encabezado LAN, establece **Network Interface** en **XLink Kai Loopback Switch XXXX**
8. **Guarda** la configuración y sal de Ryujinx

## 🎮 Jugar un juego en XLink Kai

Dado que Ryujinx y XLink Kai no pueden comunicarse directamente entre sí (todavía), kaiLoopbackBridge se utiliza como un "puente" entre ellos.

1. **Inicia** XLink Kai e inicia sesión
2. **Inicia** kaiLoopbackBridge, sigue las indicaciones y mantenlo abierto durante toda tu sesión de juego. Después de unos segundos, XLink Kai verá una Nintendo Switch en la pestaña Metrics.
3. **Inicia** Ryujinx y lanza tu juego. Ryujinx no debe estar en funcionamiento antes de que inicies kaiLoopbackBridge.
4. **Navega** a una arena de juego y ¡juega!


Asegúrate de iniciar siempre las aplicaciones en este orden:
1. XLink Kai
2. kaiLoopbackBridge
3. Ryujinx


Si encuentras problemas de conexión:
- Comprueba que todos los firewalls permitan XLink Kai y Ryujinx
- Asegúrate de que el adaptador de bucle invertido esté configurado correctamente
- Reinicia todas las aplicaciones en el orden correcto

---

> **Recordatorio**: La emulación es legal si posees legalmente los juegos que emulas. Apoya siempre a los desarrolladores comprando sus juegos.

**¡Disfruta de los juegos multijugador con Ryujinx y XLink Kai! 🎮✨**
(Este tutorial se basa entièrement en el tutorial oficial de X Link Kai; simplemente lo he actualizado.)
