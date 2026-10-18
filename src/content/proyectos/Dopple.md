---
route: "dopple"
title: "Dopple — Detector de Duplicados"
description: "Aplicación de escritorio para Linux que detecta archivos duplicados descartando candidatos en tres pasadas (tamaño, hash parcial y hash completo con BLAKE3) y guarda los resultados en SQLite. Core en Rust puro y frontend con Tauri + React."
pubDate: "2026-10-18"
heroImage: "dopple"
githubRepo: "https://github.com/PC0staS/dopple"
tags: ['Rust', 'Tauri', 'React', 'SQLite']
---

# Dopple

Detector de archivos duplicados para Linux. Recorre una carpeta, agrupa los ficheros por tamaño, confirma los candidatos con hashes **BLAKE3** y guarda el resultado en **SQLite** para consultarlo después.

**Código:** [GitHub](https://github.com/PC0staS/dopple)

## Qué hace

Dopple recorre una carpeta y localiza qué ficheros son copias exactas entre sí, mostrando los grupos de duplicados para que puedas decidir qué conservar. Comparar cada fichero contra todos sería inviable, así que el pipeline descarta candidatos en tres pasadas, de la más barata a la más cara.

Solo se guardan en la base de datos los grupos con más de una copia, de modo que el resultado queda persistido en SQLite y se puede consultar más tarde sin repetir el escaneo.

## Cómo funciona

El descarte progresivo es la clave del rendimiento:

1. **Recorrido** — agrupa por **tamaño**. Un fichero con un tamaño único no puede ser duplicado de nada, así que se descarta sin abrirlo.
2. **Hash parcial** — de los que comparten tamaño, hashea 3 bloques de 64 KB (principio, medio y final). Descarta casi todos sin leer el fichero entero.
3. **Hash completo** — solo a los que siguen empatando. Estos ya sí son duplicados reales.

## Tech stack

- **Core:** Rust 2024 (`dopple-core`), BLAKE3, rayon, rusqlite, walkdir
- **App de escritorio:** Tauri 2 (Rust)
- **Frontend:** React 19, Vite, TailwindCSS 4
- **Base de datos:** SQLite
- **Empaquetado:** AppImage, .deb, .rpm
- **Plataforma:** Linux (WebKitGTK 4.1 + GTK 3)

## Características clave

- **Tres pasadas de descarte** — tamaño → hash parcial (3 bloques de 64 KB) → hash completo, minimizando la lectura de disco
- **Hashing BLAKE3** — rápido y seguro para confirmar duplicados reales
- **Persistencia en SQLite** — los grupos de duplicados se guardan y se consultan sin reescanear
- **Core desacoplado** — `dopple-core` no sabe nada de Tauri ni de la interfaz; recibe un *callback* de progreso y la app decide qué hacer con él
- **Soporte de nombres no-UTF-8** — el core usa `std::os::unix` para leer rutas como bytes y deduplica por inodo
- **Instalación sin sudo** — `make install` copia el binario a `~/.local` y AppImage portable como alternativa
