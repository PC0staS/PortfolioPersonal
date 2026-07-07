---
route: "tts-python"
title: "TTS Python — Locutor para Casas de Apuestas"
description: "Sistema de texto a voz offline basado en Piper TTS ejecutándose en una Jetson Nano ARM64. Diseñado para locutar premios en casas de apuestas, reproduce cualquier texto con voces en español, inserta efectos de sonido mediante marcadores, y asocia sonidos personalizados a cantidades de premios. Incluye sonido ambiental de fondo con ducking automático, caché de frases por hash, y API REST documentada con FastAPI."
pubDate: "2026-03-15"
heroImage: "ttspython"
githubRepo: "https://github.com/PC0staS/TTSPython"
tags: ['Python', 'FastAPI', 'Docker']
---

# TTS Python

Sistema de texto a voz (TTS) offline que convierte texto en audio hablado usando **Piper TTS** sobre una **Jetson Nano (ARM64)**. Expone una API REST con **FastAPI** detrás de **nginx** con SSL, diseñado específicamente para locutar premios y mensajes en casas de apuestas y salones de juego. Todo autocontenido en contenedores Docker sin dependencia de servicios cloud.

## Qué hace

El sistema recibe peticiones HTTP con texto en español y devuelve o reproduce audio hablado directamente en el dispositivo de sonido USB conectado a la Jetson Nano. Utiliza tres voces de Piper: `davefx` (español de España, calidad media), `sharvard` (español de España, calidad media) y `daniela` (argentina, calidad alta), todas descargadas como modelos ONNX.

El endpoint `/tts/play/` es el núcleo para el caso de uso de apuestas: acepta marcadores de sonido entre corchetes (`[fanfarria.wav]`) que se intercalan con el texto hablado, y detecta automáticamente cantidades numéricas que tengan un premio asociado para reproducir el efecto de sonido correspondiente justo antes de decir el número. Todo el audio se ensambla en un único WAV y se reproduce con un solo `aplay`, eliminando cortes entre segmentos.

Incluye un sistema de sonido ambiental de fondo (música, lluvia, etc.) con **ducking**: cuando se reproduce una locución, el volumen del fondo baja automáticamente con crossfade y se restaura al terminar, sin silencios audibles. La mezcla se hace en memoria con pydub+ffmpeg para sortear la limitación de ALSA sin dmix.

## Sistema de premios

El endpoint `POST /premios/` permite asociar un sonido a una cantidad numérica (ej: `1000 → jackpot.wav`). Cuando `/tts/play/` encuentra ese número en el texto, reproduce el sonido del premio inmediatamente antes de decir la cantidad. La configuración persiste en disco y se recarga al iniciar.

## Tech stack

- **Cliente:** Adealoxica
- **Lenguaje:** Python 3.10
- **API:** FastAPI + uvicorn (1 worker)
- **TTS Engine:** Piper TTS (binario ARM64, offline, sin GPU)
- **Modelos de voz:** DaveFX (es_ES), Sharvard (es_ES), Daniela (es_AR) — ONNX desde HuggingFace
- **Audio:** pydub + ffmpeg (mezcla, ducking, conversión de formatos), aplay (reproducción ALSA)
- **Servidor web:** nginx con SSL (certificados propios)
- **Infraestructura:** Docker Compose (2 servicios: app + nginx), Jetson Nano ARM64
- **Audio hardware:** USB PnP Sound Device (`plughw:2,0`) + PulseAudio

## Características clave

- **TTS offline** — Piper corre localmente en ARM64, sin latencia de red ni dependencia de APIs cloud
- **Marcadores de sonido** — inserta efectos (`[aplausos.wav]`, `[campana.wav]`) en cualquier punto del texto, detectados y mezclados automáticamente
- **Sistema de premios** — asocia sonidos a cantidades (100, 500, 1000€...) y los reproduce automáticamente al locutar esos números
- **Sonido de fondo con ducking** — loop continuo de música/sonido ambiental que baja automáticamente al hablar y se restaura con crossfade, sin cortes ni silencios
- **Caché por hash SHA-256** — cada frase se cachea individualmente y los textos completos también, evitando regenerar Piper (que tarda 5-30s por frase en ARM64)
- **Subida de sonidos** — endpoint para subir archivos de audio en cualquier formato (WAV, MP3, OGG, FLAC), auto-convertidos a WAV y persistidos en volumen Docker
- **Mezcla en memoria** — construye el WAV completo con pydub antes de tocar ALSA, evitando el problema de dispositivo exclusivo (`plughw:2,0` sin dmix)
- **Warmup tone** — tono inaudible de 800ms al inicio de cada reproducción para despertar el DAC USB y evitar que se pierdan los primeros milisegundos
- **nginx + SSL** — toda la API expuesta via HTTPS con certificados, timeouts de 300s para generaciones largas y `client_max_body_size` de 50MB para subida de audios
- **3 voces en español** — DaveFX y Sharvard (España) + Daniela (Argentina), seleccionables según el tono deseado
