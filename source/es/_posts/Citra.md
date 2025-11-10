---
title: "Instalación y Configuración de Azahar"
date: 2025-06-02
draft: false
lang: es
categories: ["Citra"]
tags: ["Citra"]
author: "Axekin"
description: "Tutorial detallado para instalar, configurar y usar el emulador de Nintendo 3DS Azahar"
series: ["Guías de Emulación"]
toc: true
math: false
featured: false
weight: 20
aliases: 
  - /es/citra-cheats-mods/
  - /es/guides/citra-modding/
summary: "Aprende a instalar códigos de trucos y modificaciones de juegos en el emulador Citra. Tutorial detallado con estructura de carpetas y pasos de instalación."
cover: "covers/azahar.webp"
image: "covers/azahar.webp"
showtoc: true
tocopen: true
comments: true
searchHidden: false
---

## 🎮 Introducción a Citra

**Citra** es el emulador de código abierto más avanzado para Nintendo 3DS. Desarrollado desde 2013, te permite jugar juegos de 3DS en PC con mejoras gráficas significativas y una compatibilidad casi perfecta. Azahar es su fork.

## 🔧 Paso 1: Descargar Citra

### Opción 1: Azahar Oficial
```bash
# Sitio oficial
https://github.com/azahar-emu/azahar/releases
```

1. **Haz clic** en "Download for Windows"
2. **Descarga** `azahar-XXXX-rc1-windows-msvc-installer.exe`
3. **Extrae** en una carpeta dedicada (por ejemplo, `Documents\Azahar` o en la raíz de otra unidad, no C)

## Descarga de juegos

### Paso 1: Acceder a la biblioteca de juegos

Ve a **[🎮 Axekin Games - Nintendo 3DS](https://www.axekin.com/games?platform=3ds)** para acceder a la colección de juegos de Nintendo 3DS.

### Paso 2: Descargar el juego

1. **Busca** el juego deseado en la lista
2. **Haz clic** en el botón de descarga
3. **Espera** a que se complete la descarga

### Paso 3: Extracción de archivos

Una vez finalizada la descarga, **extrae** el archivo con uno de estos programas:

| Software | Enlace de descarga | Compatibilidad |
|----------|--------------------|----------------|
| **7-Zip** | [Descargar 7-Zip](https://www.7-zip.org/) | Windows/Linux |
| **WinRAR** | [Descargar WinRAR](https://www.win-rar.com/) | Windows |

> **💡 Consejo**: 7-Zip es gratuito y de código abierto, mientras que WinRAR requiere una licencia después del período de prueba.

**Resultado**: ¡Obtendrás archivos de juego listos para usar con 3DS! 🎯

## 📁 Paso 2: Estructura de carpetas

Crea esta estructura de carpetas para organizar tus archivos:

Para una organización óptima de tu biblioteca, aquí está la estructura de árbol recomendada:

````
Juegos 3DS/
├── Animal Crossing - Happy Home Designer/
│   ├── BASE/                # 🎮 Juego base (archivo principal)
│   ├── UPDATE/              # 🔄 Actualización del juego (recomendado)
│   └── DLC/                 # 📦 Contenido descargable (opcional)
├── Dead or Alive - Dimensions/
│   ├── BASE/                # 🎮 Juego base
│   ├── UPDATE/              # 🔄 Actualización del juego
│   └── DLC/                 # 📦 DLC adicional
├── Ben 10 - Galactic Racing/
│   ├── BASE/
│   ├── UPDATE/
│   └── DLC/
└── Captain America - Super Soldier/
    ├── BASE/
    └── UPDATE/              # (No hay DLC para este juego)
````


### Tipos de contenido


- **BASE** 📁 : Los archivos principales del juego que descargaste
- **UPDATE** 📁 : Actualizaciones y parches (recomendado)
- **DLC** 📁 : Contenido de pago adicional (opcional pero recomendado)


✅ **Detección automática**: Los juegos se añaden automáticamente en el emulador  
✅ **Gestión simplificada**: No es necesario añadir manualmente cada ROM  
✅ **Organización clara**: Fácil de ver qué contenido tienes por juego  
✅ **Mantenimiento fácil**: Añadir/eliminar contenido es sencillo

> **📝 Nota importante**: Si un juego no tiene actualizaciones o DLC, no necesitas crear esas carpetas. Solo crea carpetas para el contenido que poseas.

### Resultado

Una vez que esta estructura esté en su lugar, tu emulador detectará automáticamente todos los juegos en la carpeta "Juegos 3DS" y los mostrará ordenadamente en tu biblioteca. 🎯

## 💡 Configuración portátil (Recomendado)


**Antes del primer inicio**, crea una carpeta llamada `user` en la raíz de la instalación de Azahar. Esto hará que la instalación sea completamente portátil.

### Ventajas del modo portátil

| Aspecto | Modo normal | Modo portátil |
|--------|-------------|---------------|
| **Configuraciones** | Almacenadas en el sistema | Almacenadas dentro de la carpeta |
| **Guardados** | Repartidos por el ordenador | Centralizados en una carpeta |
| **Portabilidad** | ❌ Ligado al sistema | ✅ Fácilmente movible |
| **Copia de seguridad** | Más difícil de localizar | Sencillo de respaldar |

### Estructura después de crear la carpeta portátil

```
📁 Azahar/
├── 🎮 Azahar.exe
├── 📁 user/              # ← ¡Crea esta carpeta!
│   ├── 📁 bis/
│   ├── 📁 games/
│   ├── 📁 profiles/
│   └── 📁 system/
└── 📄 Otros archivos...
```


**Todos tus datos** (configuraciones, guardados, perfiles) se almacenarán dentro de la carpeta `user`, ¡lo que facilita mucho la gestión y las copias de seguridad!

### Pasos de creación

1. Navega a la carpeta de instalación de Azahar
2. Crea una nueva carpeta llamada exactamente `user`
3. Inicia Azahar — detectará el modo portátil automáticamente

> **📝 Nota**: ¡Esto debe hacerse **antes** del primer inicio para que surta efecto!

## ⚙️ Paso 3: Instalación y primer arranque

### Prerrequisitos de Windows

### Primer arranque
1. Ejecuta `azahar.exe`
2. Establece tu carpeta de juegos (haz doble clic en el menú, añade la carpeta "Juegos 3DS")

## ⚙️ Paso 4: Configuración óptima

### Ajustes generales
```
Emulación → Configurar → General
```
- **Confirmar salida mientras la emulación está en ejecución** : ✅ Activado
- **Pausar la emulación cuando está en segundo plano** : ✅ Activado (opcional)
- **Activar presencia de Discord** : ✅ Activado (opcional)

### Configuración del sistema
```
Emulación → Configurar → Sistema
```
- **Región** : Europa (o tu región)
- **Idioma** : Tu idioma
- **ID de la consola** : Aleatorio (generado automáticamente)
- **Activar New 3DS** : ✅ Activado (para un mejor rendimiento)

### Ajustes gráficos recomendados

#### Pestaña de Gráficos
```
Gráficos → General
- Resolución interna: 2x Nativa (400x480) o superior. Valores más altos aumentan el uso de la GPU.
- Activar filtrado lineal: ✅ Activado
→ General
```

#### Pestaña de Diseño

```
Gráficos → Diseño
```


Esta sección te permite personalizar la visualización de las dos pantallas de la 3DS según tus preferencias visuales y tu hardware.

### Diseños de pantalla

**Opciones preestablecidas:**

| Modo | Descripción | Recomendación |
|------|-------------|----------------|
| **Predeterminado** | Diseño estándar de Nintendo | ✅ **Principiantes** |
| **Pantalla única** | Muestra solo la pantalla activa | Enfoque en el juego |
| **Ancho** | Se extiende a lo ancho | Monitores anchos |
| **Lado a lado** | Pantallas horizontales | **Recomendado para jugar** |
| **Ventanas separadas** | Dos ventanas independientes | Configuraciones multimonitor |
| **Apilado** | Pantallas apiladas verticalmente | Ahorro de espacio |
| **Diseño personalizado** | Configuración manual | ⭐ **El más flexible** |

### Configuración de diseño personalizado


**Pantalla superior:**
- **Posición X/Y** : `0px, 0px` (esquina superior izquierda)
- **Ancho/Alto** : `800px, 480px` (relación 4:3 ideal)

**Pantalla inferior:**
- **Posición X/Y** : `80px, 500px` (ligeramente centrado)
- **Ancho/Alto** : `640px, 480px` (proporcional)

**Opacidad de la pantalla inferior** : `100%` (totalmente visible)

### Ajustes de visualización

#### Opciones generales
```
Pantallas → Configuración
```

**Ajustes recomendados:**
- **Intercambiar pantallas** : ❌ Desactivado (preservar la lógica de la DS)
- **Rotar pantallas hacia arriba** : ❌ Desactivado
- **Espacio entre pantallas** : `0.00` a `4.00` según la preferencia
- **Escala de la pantalla principal** : `4.00` (pantalla principal más grande)
- **Posición de la pantalla secundaria** : `Abajo a la derecha` (área táctil)

#### Modo de pantalla única


**Casos de uso:**
- Juegos que usan solo una pantalla principal
- Ahorrar recursos de renderizado
- Centrarse en la acción principal

**Configuración:**
- **Estirar** : ☑️ Marcado para ambas pantallas
- **Margen izquierdo/derecho** : `0px` (pantalla completa)
- **Margen superior/inferior** : `0px` (uso máximo)

> **💡 Consejo práctico**: Prueba diferentes diseños según el juego. Los RPG a menudo se benefician de diseños personalizados, mientras que los juegos de acción prefieren el modo lado a lado.

#### Pestaña Avanzado
```
Gráficos → Avanzado
- API de gráficos: OpenGL (recomendado) o Vulkan
- Activar renderizador por hardware: ✅ Activado
- Activar sombreador por hardware: ✅ Activado
- Activar multiplicación precisa: ✅ Activado
- Usar caché de sombreadores en disco: ✅ Activado
- Activar VSync: ✅ Activado
```

### Configuración de audio
```
Audio
- Emulación: HLE
```

### Configuración de controles

#### Método de detección automática
```
Controles → Configurar
1. Haz clic en "Configuración automática"
2. Presiona los botones de tu mando
3. Prueba todas las entradas
```

## ⚙️ Paso 🌐 Multijugador (configuración rápida)

Puedes conectar Citra/Azahar a un servicio multijugador externo editando la configuración local. Advertencia: cierra completamente Citra/Azahar antes de editar los archivos de configuración o tus cambios se sobrescribirán.

1. Abre la carpeta de configuración:

   - Para una instalación estándar de Windows: `C:\\Users\\<TuUsuario>\\AppData\\Roaming\\citra\\config\\`
   - Para una instalación portátil: abre la carpeta `user` en la raíz de Azahar/Citra

2. Edita el archivo `qt-config.ini` (con el Bloc de notas o un editor de texto) y cambia/añade estas dos líneas:

```
web_api_url\\default=false
web_api_url=http://88.198.47.46:5000/
```

3. Guarda y cierra el editor, luego reinicia Citra/Azahar.

Alojar una sala dedicada (ejemplo de `host.bat` para Windows)

Si quieres alojar a través de un archivo por lotes dedicado, crea o edita un `host.bat` y pega el siguiente ejemplo. Puedes cambiar el nombre de la sala y el ID del título.

```
citra-room ^
  --room-name "el nombre de tu sala" ^
  --room-description "Todos los juegos" ^
  --preferred-game "Super Smash Bros" ^
  --preferred-game-id "00040000000EDF00" ^
  --port 24872 ^
  --max_members 16 ^
  --token "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" ^
  --enable-citra-mods ^
  --web-api-url http://88.198.47.46:5000 ^
  --ban-list-file "INSERTAR_RUTA_DEL_ARCHIVO_DE_LISTA_DE_BLOQUEO_AQUÍ"
pause
```

Notas:

- Reemplaza `--token` con tu token real cuando sea necesario.
- `--preferred-game-id` corresponde al ID del título del juego (16 dígitos hexadecimales). Déjalo vacío para aceptar todos los juegos.
- `--web-api-url` debe apuntar al servidor de la API (aquí: `http://88.198.47.46:5000`).

Con estos pasos, Citra/Azahar usará el servicio multijugador especificado y el `host.bat` te permitirá alojar una sala desde tu máquina.

### Formatos compatibles
- **.CCI** : Único formato compatible con mis ROMs con Azahar debido a restricciones antipiratería


## ❓ FAQ - Preguntas Frecuentes

### Preguntas generales

**P: ¿Puede Azahar ejecutar todos los juegos de 3DS?**  
**R:** Aproximadamente el 90% de los juegos de 3DS funcionan de bien a perfectamente. Consulta la base de datos de compatibilidad para tu título específico.

**P: ¿Funciona el 3D estereoscópico?**  
**R:** Sí, con pantallas compatibles con 3D o usando el modo lado a lado para VR.

**P: ¿Puedo usar mis guardados reales de 3DS?**  
**R:** Sí — con Checkpoint o JKSM puedes transferir guardados en ambos sentidos.

### Preguntas técnicas

**P: ¿Por qué algunos juegos van lentos?**  
**R:** Los juegos de 3DS están optimizados para un hardware específico. La emulación es más exigente, especialmente para títulos complejos.

**P: ¿OpenGL o Vulkan?**  
**R:** OpenGL es más estable y compatible. Vulkan puede ofrecer un mejor rendimiento en GPUs modernas.

**P: ¿Activar el modo New 3DS mejora todo?**  
**R:** Principalmente para juegos que usan nativamente las características de New 3DS (Xenoblade, Monster Hunter, etc.) y ciertos homebrews.

### Problemas comunes

**P: ¿"No se pudo determinar la región del sistema"?**  
**R:** Instala los archivos del sistema (aes_keys.txt) y configura la región en los ajustes.

**P: ¿Las texturas HD no se muestran?**  
**R:** Verifica que "Texturas personalizadas" esté activado y que el ID del título coincida con la carpeta.

**P: ¿Cómo mejorar el rendimiento en Android?**  
**R:** Usa Citra MMJ, baja la resolución, activa el salto de fotogramas si es necesario.

¡Disfruta de tus juegos de 3DS en alta definición! 🎮✨
