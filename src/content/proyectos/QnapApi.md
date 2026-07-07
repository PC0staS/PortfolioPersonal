---
route: "qnap-api"
title: "QVR-ADX — Gestor de Videovigilancia QNAP"
description: "API y panel web para videovigilancia QNAP obtenida por ingeniería inversa. Backend en Go que se autentica contra la API no documentada de QVR mediante tráfico HTTP capturado del panel original, permitiendo buscar, filtrar y servir grabaciones por fechas. Frontend en React con PLYR, proxy de streaming y gestión de configuración."
pubDate: "2026-05-10"
heroImage: "qvr-adx"
githubRepo: "https://github.com/PC0staS/qnap-api"
tags: ['Go', 'React', 'Docker']
---

# QVR-ADX

API REST en Go que actúa como intermediaria entre un frontend web y un **NAS QNAP con QVR** (sistema de videovigilancia). Todo el protocolo de comunicación con el QNAP —autenticación, consulta de grabaciones, streaming— fue obtenido mediante **ingeniería inversa**, ya que QNAP no documenta públicamente su API de QVR. A base de capturar tráfico HTTP desde el panel web original, analizar los endpoints, parámetros, tokens de sesión y estructura de respuestas, reconstruí el cliente necesario para integrarlo en una API propia. Permite buscar grabaciones por rango de fechas, previsualizar miniaturas, reproducir videos y gestionar la configuración de conexión al NAS, todo desde una interfaz web con React. Pensado para desplegar con Docker Compose detrás de nginx.

## Qué hace

El proceso de ingeniería inversa consistió en interceptar las peticiones HTTP que hace el panel web original de QVR (con las DevTools del navegador) para descubrir el flujo de autenticación (`authLogin.cgi`), el formato de los tokens de sesión (`authSid` en XML), y los parámetros exactos del endpoint `/qvrsurveillance/recviewer/v1/func/viewer` (act, sid, view_time, sort, offset, limit). Con eso, el backend se autentica contra la API del QNAP, obtiene un token de sesión y lo renueva automáticamente cada 25 minutos. Con ese token, consulta el endpoint del QVR para recuperar la lista de grabaciones de videovigilancia.

Implementa un sistema de búsqueda por meses: dado un rango de fechas, itera mes a mes paginando los resultados (500 por página), filtra por timestamp y devuelve solo las grabaciones dentro del período solicitado. Soporta consultas predefinidas: hoy, última semana, o rango personalizado.

El frontend muestra los resultados en una cuadrícula de thumbnails con un reproductor PLYR integrado. Incluye panel de estadísticas (total de grabaciones, cámaras activas), selector de cámara, búsqueda por fecha, y modal de configuración para cambiar la IP, puerto y credenciales del QNAP.

El **proxy `/api/proxy`** es clave: reenvía las peticiones de thumbnail, playback y download directamente al QNAP, incluyendo el token de autenticación en la query string. Esto permite que los recursos multimedia del NAS (que solo son accesibles en red local) se sirvan a través de la API desde cualquier IP pública.

## Tech stack

- **Cliente:** Adealoxica
- **Backend:** Go, Gin (HTTP + middleware), godotenv, swaggo (Swagger docs)
- **Ingeniería inversa:** Captura de tráfico HTTP del panel QVR original para documentar los endpoints, autenticación y parámetros no públicos de la API de QNAP
- **Autenticación QNAP:** API XML `authLogin.cgi` + token renew cada 25 min con goroutine + ticker (descubierta por ingeniería inversa)
- **API QVR:** `recviewer/v1/func/viewer` con paginación y filtro por mes (endpoint no documentado, obtenido por ingeniería inversa)
- **Frontend:** React 19, Vite, TailwindCSS 4, PLYR (reproductor de video)
- **Infraestructura:** Docker Compose (3 servicios: frontend, backend, nginx)
- **Proxy:** nginx reverse proxy + endpoint proxy Go para recursos multimedia del NAS

## Características clave

- **Autenticación automática QNAP** — login contra `authLogin.cgi`, parseo de XML con `authSid`, renovación automática cada 25 minutos vía goroutine con `time.Ticker`
- **Búsqueda por rango de fechas** — endpoints `/api/videos/today`, `/api/videos/week` y búsqueda personalizada; paginación de 500 resultados por página, iteración mes a mes
- **Proxy de recursos multimedia** — endpoint `/api/proxy` que reenvía peticiones de thumbnail, playback y download al QNAP con el token de sesión, permitiendo acceso desde IP pública
- **Reproductor de video integrado** — PLYR en el frontend con soporte para streaming desde el NAS
- **Panel de estadísticas** — total de grabaciones, conteo por cámara, período analizado
- **Configuración persistente** — IP, puerto, usuario y contraseña del QNAP se guardan en `config.json` y se pueden modificar desde el frontend sin tocar el NAS
- **Autenticación de usuarios** — login con token aleatorio (48 bytes, Base64 URL-safe) para proteger el acceso a la API
- **Swagger integrado** — documentación interactiva de la API en `/swagger/index.html`
- **Middleware HTTP con logs** — cada petición registra método, ruta, status, duración e IP del cliente (soporta `X-Forwarded-For` para entornos con proxy)
- **Configuración por variables de entorno** — credenciales de usuario de la app vía `APP_USER` y `APP_PASS` en `.env`
