---
title: "Jugar con Teclado y Ratón en el emulador Cemu"
description: "Tutorial detallado para configurar los controles de teclado y ratón en Cemu con Mouse2Joystick y ViGEmBus - Guía de configuración paso a paso"
date: 2025-06-04
lastmod: 2025-06-04
categories: ["PC"]
tags: ["cemu", "wiiu", "teclado-raton", "mouse2joystick", "vigembus", "emulacion", "nintendo"]
series: ["Guías de Emulación"]
author: "Axekin"
draft: false
toc: true
math: false
featured: false
weight: 20
aliases: 
  - /es/cemu-keyboard-mouse/
  - /es/guides/cemu-keyboard-mouse/
summary: "Aprende a jugar juegos de Wii U en Cemu con teclado y ratón. Guía completa con Mouse2Joystick y configuración detallada."
cover: "covers/cemu-keyboard-mouse.webp"
image: "covers/cemu-keyboard-mouse.webp"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

> **⚠️ Nota Importante**: Aunque es posible, la experiencia con teclado y ratón en Cemu no será tan agradable como con un mando. Esta solución es adecuada para jugadores que no poseen un gamepad compatible.

## Introducción

Jugar a juegos de **Wii U** en el emulador **Cemu** con un **teclado y ratón** requiere el uso de herramientas de terceros para simular un mando. Esta guía explica cómo configurar esta solución con **Mouse2Joystick** y **ViGEmBus**.

Este método es particularmente útil para:
- Jugadores que no tienen un mando compatible
- Probar juegos rápidamente sin invertir en un gamepad
- Ciertos géneros de juegos adaptados al teclado y ratón

### Proceso General

1. **Descargar** ViGEmBus y Mouse2Joystick
2. **Instalar** ViGEmBus (controlador de mando virtual)
3. **Configurar** Mouse2Joystick según tus preferencias
4. **Configurar** Cemu para que reconozca los controles
5. **Probar** y ajustar la configuración

## Requisitos Previos y Descargas

### Software Requerido

**Aplicaciones esenciales:**
- **ViGEmBus**: Controlador para mandos virtuales
- **Mouse2Joystick**: Convierte las señales del teclado/ratón en señales de mando
- **Cemu**: Emulador de Wii U (última versión estable)

### Descargas

#### ViGEmBus (Controlador de Mando Virtual)

**🔗 [Descargar ViGEmBus](https://github.com/ViGEm/ViGEmBus/releases)**

**Instrucciones de descarga:**
1. **Accede** a la página de lanzamientos
2. **Descarga** el último archivo `.msi`
3. **Ejemplo**: `ViGEmBus_Setup_1.17.333.msi`

**Características de ViGEmBus:**
- **Gratuito** y de código abierto
- **Compatible** con Windows 10/11
- **Estable** y actualizado regularmente
- **Requerido** para simular mandos de Xbox

#### Mouse2Joystick (Convertidor de Controles)

**🔗 [Descargar Mouse2Joystick](https://github.com/memethyl/Mouse2Joystick/releases)**

**Instrucciones de descarga:**
1. **Descarga** el último archivo `.zip`
2. **Ejemplo**: `Mouse2Joystick_v2.3.1.zip`
3. **Extrae** en una carpeta dedicada (ej: `C:\Herramientas\Mouse2Joystick\`)

**Características de Mouse2Joystick:**
- **Portátil**: no requiere instalación
- **Personalizable**: mapeo de teclas configurable
- **Ligero**: impacto mínimo en el rendimiento
- **Tiempo real**: conversión instantánea de movimientos

## Paso 1: Instalación de ViGEmBus

### Proceso de Instalación

#### Ejecutando el Instalador

1. **Localiza** el archivo `.msi` descargado
2. **Haz doble clic** para iniciar la instalación
3. **Acepta** los permisos de administrador si se te solicita

#### Configuración de la Instalación

**Pasos de instalación:**
1. **Bienvenida** → Haz clic en "Next"
2. **Acuerdo de Licencia** → Acepta y haz clic en "Next"
3. **Carpeta de Destino** → Deja la predeterminada, haz clic en "Next"
4. **Listo para Instalar** → Haz clic en "Install"
5. **Completado** → Haz clic en "Finish"

**Componentes instalados:**
- Controlador de bus virtual
- Bibliotecas de sistema requeridas
- Interfaz de gestión de dispositivos

### Verificación de la Instalación

#### Comprobación en el Administrador de Dispositivos

1. **Clic derecho** en "Este equipo" → **Administrador de dispositivos**
2. **Expande** "Dispositivos del sistema"
3. **Verifica** la presencia de "ViGEmBus Device"


## Paso 2: Configuración de Mouse2Joystick

### Extracción y Primer Uso

#### Preparación del Software

1. **Navega** hasta el archivo `.zip` descargado
2. **Clic derecho** → **Extraer todo**
3. **Elige** una carpeta permanente (ej: `C:\Herramientas\Mouse2Joystick\`)
4. **Inicia** `Mouse2Joystick.exe`

### Interfaz y Configuración Básica

#### Primer Lanzamiento

Una vez iniciado, Mouse2Joystick muestra una interfaz sencilla:


#### Configuración Recomendada

**Ajustes básicos sugeridos:**

**Sección "Mouse Settings":**
```
Mouse Sensitivity X: 3.0
Mouse Sensitivity Y: 3.0
Mouse Deadzone: 0.1
Invert Y-axis: Según preferencia
```

**Sección "Controller Settings":**
```
Controller Type: Xbox 360 Controller
Vibration: Desactivado (no es necesario)
```

### Mapeo de Teclas

#### Configuración de Controles

**Mapeo estándar recomendado:**

| Acción de Wii U | Tecla del Teclado | Función |
|-----------------|-------------------|----------|
| **Stick Izquierdo** | WASD | Movimiento |
| **Stick Derecho** | Ratón | Cámara |
| **Botón A** | Espacio | Acción principal |
| **Botón B** | Ctrl Izquierdo | Acción secundaria |
| **Botón X** | E | Interacción |
| **Botón Y** | Q | Menú/Inventario |
| **L/R** | Shift/Tab | Bumpers |
| **ZL/ZR** | Clic Izquierdo/Derecho | Gatillos digitales |

#### Ajustes Avanzados

**Sensibilidad del ratón:**
- **Juegos FPS**: Sensibilidad alta (4.0-5.0)
- **Juegos de aventura**: Sensibilidad media (2.5-3.5)
- **Juegos de plataformas**: Sensibilidad baja (1.5-2.5)

**Zonas muertas:**
- **Ratón**: 0.05-0.15 (evita micro-movimientos)
- **Teclado**: 0.0 (respuesta instantánea)

## Paso 3: Configuración de Cemu

### Acceso a la Configuración de Controles

#### Navegando en Cemu

1. **Inicia** Cemu
2. **Menú** "Options" → **"Input Settings"**
3. **Elimina** todos los mandos existentes con el botón **"-"**


### Eliminación de Mandos Existentes

#### Limpieza de la Configuración

**Pasos para la eliminación:**
1. **Identifica** todos los mandos listados
2. **Haz clic** en el botón **"-"** para cada mando
3. **Confirma** la eliminación si se te solicita
4. **Verifica** que la lista esté vacía


### Añadir Nuevos Mandos

#### Configuración XInput (Mouse2Joystick)

**Con Mouse2Joystick abierto:**
1. **Haz clic** en el botón **"+"**
2. **Selecciona** "XInput" como API
3. **Elige** "Controller 1" que debería aparecer
4. **Confirma** la selección


#### Configuración de Teclado (Teclas Adicionales)

**Para teclas no mapeadas:**
1. **Haz clic** de nuevo en **"+"**
2. **Selecciona** "Keyboard" como API
3. **Elige** "Controller 1"
4. **Configura** teclas específicas de Wii U


### Configuración Final de Teclas

#### Mapeo en Cemu

**Configuración recomendada:**

**Mando XInput (Mouse2Joystick):**
```
Stick Izquierdo: Movimiento del personaje
Stick Derecho: Control de la cámara
Botón A: Acción principal
Botón B: Atrás/Cancelar
Botón X: Acción secundaria
Botón Y: Menú
Bumper L/R: Gatillos rápidos
Gatillo L/R: Gatillos analógicos
```

**Mando de Teclado (teclas especiales):**
```
Plus: Enter (Menú principal)
Minus: Escape (Pausa)
Home: Tab (Menú Home)
Screenshot: F12
```

## Conclusión

Jugar a juegos de **Wii U** en **Cemu** con teclado y ratón es posible gracias a **Mouse2Joystick** y **ViGEmBus**. Aunque la experiencia no es óptima para todos los juegos, esta solución permite descubrir el excelente catálogo de Wii U sin invertir en un mando.


### Consejos Finales

**Para una mejor experiencia:**
- Empieza con juegos adaptados (Zelda, RPG)
- Tómate tu tiempo para ajustar las sensibilidades
- Guarda tus configuraciones
- Considera comprar un mando eventualmente

## FAQ - Preguntas Frecuentes

**P: ¿Funciona este método con todos los juegos de Wii U?**
R: No, algunos juegos requieren absolutamente un mando para una experiencia adecuada (Mario Kart, Smash Bros, etc.).

**P: ¿Puedo usar esta configuración para otros emuladores?**
R: Sí, Mouse2Joystick funciona con la mayoría de los emuladores que soportan XInput.

**P: ¿Es significativa la latencia?**
R: La latencia es generalmente baja, pero puede variar dependiendo de la configuración de tu hardware.

**P: ¿Necesito mantener Mouse2Joystick abierto permanentemente?**
R: Sí, Mouse2Joystick debe permanecer abierto mientras juegas para mantener la simulación del mando.

**P: ¿Afecta este método al rendimiento de Cemu?**
R: El impacto es mínimo, ya que Mouse2Joystick consume muy pocos recursos.
