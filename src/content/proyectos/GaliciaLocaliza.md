---
route: "galicia-localiza"
title: "Galicia Localiza — Gestor de Flota Empresarial"
description: "Sistema profesional de gestión de flotas para Adealoxica. Recibe datos GPS en tiempo real de dispositivos Ruptela mediante protocolo binario TCP, los procesa con un backend en Go, y los visualiza en un mapa interactivo con React y Leaflet. Incluye detección automática de viajes, WebSockets para tracking en vivo, y base de datos particionada en SQL Server para alto volumen de telemetría."
pubDate: "2026-06-01"
heroImage: "ruptela"
githubRepo: "https://github.com/PC0staS/ruptela-analizador"
tags: ['Go', 'React', 'SQL Server']
---

# Galicia Localiza

Plataforma de gestión de flotas desarrollada para **Adealoxica** que recibe, procesa y visualiza datos GPS en tiempo real de dispositivos **Ruptela** instalados en vehículos. Backend en Go con servidor TCP propio que decodifica el protocolo binario Ruptela (Comando 68), frontend en React con mapa interactivo Leaflet, y base de datos SQL Server particionada para manejar grandes volúmenes de telemetría.

## Qué hace

El sistema recibe conexiones TCP continuas de dispositivos GPS Ruptela a través del puerto 9016. Un parser binario escrito a medida extrae coordenadas, velocidad, altitud, ángulo, satélites y timestamp de cada paquete del protocolo propietario. Los datos se validan (filtrado por HDOP e IMEI autorizado), se convierten de unidades crudas a valores reales, y se insertan en lotes de 100 registros en una tabla particionada por mes.

El backend detecta automáticamente el inicio de un nuevo viaje cuando un vehículo lleva más de 15 minutos sin enviar datos, creando un registro de viaje y asociando todos los movimientos posteriores. Incluye una optimización para no saturar la base de datos con posiciones duplicadas cuando el vehículo está aparcado (velocidad 0).

El frontend muestra un mapa interactivo con la última posición conocida de cada vehículo, permite consultar trayectorias históricas por rango de fechas, reproducir snapshots temporales de toda la flota, y recibir actualizaciones en tiempo real vía WebSocket. Incluye un panel de administración con estadísticas globales (total de movimientos, viajes activos, vehículos con señal reciente).

## Tech stack

- **Backend:** Go 1.25, Gin (HTTP), GORM (ORM), gorilla/websocket
- **Base de datos:** SQL Server con particionado mensual (RANGE RIGHT sobre DATETIME2)
- **Protocolo GPS:** Decodificador binario Ruptela Comando 68 (TCP)
- **Frontend:** React 19, Vite, Leaflet + react-leaflet, TailwindCSS 4
- **Tiempo real:** WebSocket con broadcast a todos los clientes conectados
- **Autenticación:** Firebase Auth
- **Notificaciones:** react-toastify
- **Infraestructura:** Docker Compose, conexión a SQL Server corporativo externo

## Características clave

- **Servidor TCP propio** — recibe y decodifica el protocolo binario Ruptela sin dependencias de terceros
- **Tracking en vivo** — posiciones actualizadas en el mapa cada vez que un dispositivo envía datos, broadcast vía WebSocket
- **Detección automática de viajes** — nuevo viaje cuando gap > 15 min entre movimientos, con registro en base de datos y actualización de estadísticas por vehículo
- **Optimización de paradas** — no se persisten posiciones duplicadas con velocidad 0, evitando saturar la base de datos mientras el vehículo está aparcado
- **Base de datos particionada** — tabla `tblCocheMov` particionada por mes con mantenimiento automático de particiones futuras cada 24h
- **Snapshot temporal** — consulta el estado de toda la flota en un timestamp concreto del pasado
- **Trayectorias históricas** — visualización de rutas completas con filtro por rango de fechas y estadísticas (velocidad media, máxima, mínima, distancia)
- **Device Manager en memoria** — caché de dispositivos autorizados con `sync.RWMutex`, evita consultas a BD por cada paquete entrante
- **API REST completa** — 15+ endpoints documentados: estadísticas, dispositivos, movimientos, mapa, trayectorias, snapshots
- **Filtro temprano de IMEI** — el servidor TCP rechaza conexiones de dispositivos no autorizados antes de parsear el paquete completo
- **Caché multi-nivel** — stats (30s TTL) y snapshots (5s TTL) cacheados en memoria con limpieza automática
- **Pool de conexiones optimizado** — 25 conexiones máximas a SQL Server con reciclaje automático cada 5 minutos
