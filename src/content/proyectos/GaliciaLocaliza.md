---
route: "galicia-localiza"
title: "Galicia Localiza — Gestor de Flota Empresarial"
description: "Sistema profesional de gestión de flotas para Adealoxica. Recibe datos GPS en tiempo real de dispositivos Ruptela mediante protocolo binario TCP, los procesa con un backend en Go, y los visualiza en un mapa interactivo con React y Leaflet. Incluye geocercas con notificaciones push (FCM), detección automática de viajes, WebSockets para tracking en vivo, y base de datos particionada en SQL Server para alto volumen de telemetría."
pubDate: "2026-06-01"
heroImage: "ruptela"
githubRepo: "https://github.com/PC0staS/ruptela-analizador"
tags: ['Go', 'React', 'SQL Server']
---

# Galicia Localiza

Plataforma de gestión de flotas desarrollada para **Adealoxica** que recibe, procesa y visualiza datos GPS en tiempo real de dispositivos **Ruptela** instalados en vehículos. Backend en Go con servidor TCP propio que decodifica el protocolo binario Ruptela, frontend en React con mapa interactivo Leaflet, y base de datos SQL Server particionada para manejar grandes volúmenes de telemetría.

## Qué hace

El sistema recibe conexiones TCP continuas de dispositivos GPS Ruptela a través del puerto 9016. Un parser binario escrito a medida extrae coordenadas, velocidad, altitud, ángulo, satélites y timestamp de cada paquete del protocolo propietario. Los datos se validan (filtrado por HDOP e IMEI autorizado), se convierten de unidades crudas a valores reales, y se insertan en lotes de 100 registros en una tabla particionada por mes.

El sistema detecta el estado del encendido del vehículo en tiempo real a través del elemento IO 409 del protocolo Ruptela. Cuando el motor se enciende o se apaga, se envía una notificación push inmediata (FCM) al topic correspondiente del coche y se actualiza el estado en base de datos. Esta información se usa además para acelerar la detección de fin de viaje: si el motor está apagado, el tiempo de gracia para cerrar un viaje se reduce de 15 a 3 minutos.

El backend detecta automáticamente el inicio de un nuevo viaje cuando un vehículo lleva más de 15 minutos sin enviar datos (o 3 minutos si el motor está apagado), creando un registro de viaje y asociando todos los movimientos posteriores. Incluye una optimización para no saturar la base de datos con posiciones duplicadas cuando el vehículo está aparcado (velocidad 0).

El frontend muestra un mapa interactivo con la última posición conocida de cada vehículo y las geocercas activas superpuestas como polígonos, permite consultar trayectorias históricas por rango de fechas, reproducir snapshots temporales de toda la flota, y recibir actualizaciones en tiempo real. Incluye un panel de administración con pestañas para dispositivos, geocercas y logs, un panel de notificaciones con historial de alertas, y estadísticas globales.

Cada punto GPS recibido se evalúa contra las geocercas asignadas al vehículo mediante el algoritmo ray casting. Si se detecta una entrada o salida, se registra el evento en base de datos y, si corresponde según la configuración de alertas (tipo de alerta, preferencias de entrada/salida por coche, filtro de día de la semana y franja horaria), se dispara una notificación push vía Firebase Cloud Messaging al topic del dispositivo. Los administradores pueden gestionar geocercas desde un panel dedicado con editor visual de polígonos sobre mapa y asignación de vehículos.

## Tech stack

- **Backend:** Go 1.25, Gin (HTTP), GORM (ORM)
- **Base de datos:** SQL Server con particionado mensual (RANGE RIGHT sobre DATETIME2)
- **Protocolo GPS:** Decodificador binario Ruptela Comando 68 (TCP), incluyendo parseo de elementos IO (encendido)
- **Frontend:** React 19, Vite, Leaflet + react-leaflet, TailwindCSS 4
- **Tiempo real:** Polling
- **Autenticación:** Método propietario de la empresa
- **Notificaciones Push:** Firebase Cloud Messaging (FCM) — topics por coche, notificaciones Android/iOS con canales y sonido
- **Notificaciones in-app:** react-toastify + panel de historial con localStorage
- **Infraestructura:** Docker Compose, conexión a SQL Server corporativo externo

## Características clave

- **Servidor TCP propio** — recibe y decodifica el protocolo binario Ruptela sin dependencias de terceros
- **Tracking en vivo** — posiciones actualizadas en el mapa cada vez que un dispositivo envía datos, broadcast vía WebSocket
- **Detección de encendido del motor** — lectura del elemento IO 409 del protocolo Ruptela en tiempo real, con notificaciones push FCM instantáneas al encender/apagar (topics separados `e{idCoche}` y `a{idCoche}`), y actualización del estado `Encendido` en base de datos
- **Detección automática de viajes** — nuevo viaje cuando gap > 15 min entre movimientos (reducido a 3 min si el motor está apagado), con registro en base de datos y actualización de estadísticas por vehículo
- **Optimización de paradas** — no se persisten posiciones duplicadas con velocidad 0, evitando saturar la base de datos mientras el vehículo está aparcado
- **Base de datos particionada** — tabla `tblCocheMov` particionada por mes con mantenimiento automático de particiones futuras cada 24h
- **Snapshot temporal** — consulta el estado de toda la flota en un timestamp concreto del pasado
- **Trayectorias históricas** — visualización de rutas completas con filtro por rango de fechas y estadísticas (velocidad media, máxima, mínima, distancia)
- **Device Manager en memoria** — caché de dispositivos autorizados con `sync.RWMutex`, evita consultas a BD por cada paquete entrante
- **API REST completa** — 15+ endpoints documentados: estadísticas, dispositivos, movimientos, mapa, trayectorias, snapshots
- **Filtro temprano de IMEI** — el servidor TCP rechaza conexiones de dispositivos no autorizados antes de parsear el paquete completo
- **Geocercas (geofences)** — polígonos cargados desde la API corporativa de Adealoxica, con asignación por coche, filtros por día de la semana y franja horaria, y detección de entrada/salida mediante algoritmo ray casting
- **Notificaciones push (FCM)** — alertas en tiempo real al entrar/salir de una geocerca y al finalizar un viaje, enviadas por Firebase Cloud Messaging a topics por dispositivo, con payload de datos (ID de coche, geocerca, coordenadas) y canales de notificación Android
- **Panel de notificaciones** — historial completo de alertas de geocerca y fin de viaje en el frontend, agrupadas por fecha, con persistencia en localStorage y permisos configurables por tipo de evento y coche
- **Caché multi-nivel** — stats (30s TTL) y snapshots (5s TTL) cacheados en memoria con limpieza automática
- **Pool de conexiones optimizado** — 25 conexiones máximas a SQL Server con reciclaje automático cada 5 minutos
