---
route: "epoch"
title: "Epoch — Archivo personal de la web"
description: "Aplicación de escritorio que guarda una copia del HTML de una página para consultarla tal como estaba, aunque el original cambie o desaparezca. Lanza tu navegador Chromium vía CDP, absolutiza las URLs relativas y almacena cada captura en SQLite. Core en Rust puro y frontend con Tauri + React."
pubDate: "2026-10-31"
heroImage: 'epoch'
githubRepo: "https://github.com/PC0staS/epoch"
tags: ['Rust', 'Tauri', 'React', 'SQLite']
---

# Epoch

Archivo personal de la web: abre una URL en tu navegador y guarda el HTML que hay en ese momento. Cada captura queda en **SQLite** y puede revisarse después, aunque la página original haya cambiado o ya no exista.

**Código:** [GitHub](https://github.com/PC0staS/epoch)

## Qué hace

Epoch no es una captura de pantalla ni un archivador completo de assets: guarda el DOM en un instante concreto y convierte las URLs relativas en absolutas para que el contenido siga apuntando a los recursos originales. El resultado se visualiza en un iframe aislado dentro de la propia app.

La interfaz se organiza en tres vistas: **Home** para pegar una URL y capturarla, **History** con la lista de capturas y una vista de calendario, y **Snapshot** para ver el HTML guardado.

## Cómo funciona

1. **Detección del navegador** — busca en el `PATH` un navegador basado en Chromium (Chromium, Chrome, Edge o Brave) y comprueba que arranca.
2. **Captura por CDP** — lo lanza con `chromiumoxide`, espera un segundo a que la página se estabilice (con un timeout de 60 s) y extrae el HTML resultante.
3. **Absolutización de URLs** — con `lol_html` reescribe `href` y `src` de enlaces, imágenes, hojas de estilo, scripts e iframes contra la URL base.
4. **Persistencia** — extrae el título, inserta la captura en `~/.epoch/epoch.sqlite` mediante `sqlx` y aplica las migraciones al abrir la base de datos.
5. **Visualización** — sirve el HTML en un iframe con `sandbox`; opcionalmente se le puede dar acceso al origen cuando la web lo requiere.

## Tech stack

- **Core:** Rust 2024 (`epoch-core`), chromiumoxide, lol_html, sqlx, chrono, url, thiserror
- **App de escritorio:** Tauri 2 (Rust)
- **Frontend:** React 19, Vite, TailwindCSS 4, react-big-calendar
- **Base de datos:** SQLite en `~/.epoch/epoch.sqlite`
- **Empaquetado:** AppImage, .deb, .rpm, .dmg y .msi/.exe
- **Plataformas:** Linux, macOS y Windows

## Características clave

- **Captura del DOM real** — usa el navegador del sistema para obtener el HTML ya renderizado, no una petición HTTP simple
- **URLs absolutizadas** — enlaces, imágenes, CSS, scripts e iframes siguen funcionando al abrir el snapshot fuera de contexto
- **Historial persistente** — lista de capturas por URL y vista de calendario con un evento por captura
- **Visor aislado** — el HTML se muestra en un iframe con `sandbox`, con acceso opcional al origen para sitios de confianza
- **Core desacoplado** — `epoch-core` no sabe nada de Tauri: base de datos, migraciones y captura son Rust puro y reutilizable
- **Multiplataforma** — instaladores nativos y `make install` sin `sudo` en `~/.local`

## Limitaciones conocidas

- Las animaciones y la interacción que dependen de JavaScript no funcionan en el visor: se guarda el DOM en un instante, no la aplicación web. Las animaciones puramente CSS sí se ven.
- El snapshot depende del servidor original para imágenes y estilos: las URLs se absolutizan, no se descargan. Si el sitio cae, la página se verá sin assets.
- Dar acceso al origen al iframe permite que ese HTML llame a los comandos de la app, así que solo debe usarse con sitios de confianza.
