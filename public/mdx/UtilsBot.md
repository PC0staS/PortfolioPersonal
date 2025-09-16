---
route: 'utilsbot'
title: 'UtilsBot - Bot de Discord'
description: 'Bot multifuncional para Discord con utilidades de sistema y herramientas útiles'
pubDate: 'Nov 20 2024'
heroImage: 'utilsbot_lq89oa'
githubRepo: 'https://github.com/Pc0staS/UtilsBot'
---
# UtilsBot 🤖⚡

**Bot multifuncional para Discord** con más de 30 comandos útiles, desde herramientas de red hasta funcionalidades de administración de sistemas, diseñado para ejecutarse en Raspberry Pi.

## 🚀 ¿Qué hice?

Desarrollé un **bot completo de Discord** que automatiza tareas comunes y proporciona utilidades útiles a servidores, integrando múltiples APIs y herramientas del sistema para crear una navaja suiza digital.

**Logros principales:**
- 🎯 **30+ comandos slash** - Amplia gama de utilidades y herramientas especializadas
- 🖥️ **Administración de sistemas** - Control remoto completo de Raspberry Pi
- 🌐 **Herramientas de red** - Ping, speedtest, información de dominios y dispositivos
- 📁 **Utilidades multimedia** - Fusión de PDFs y videos, capturas web y QR
- ⏰ **Funciones de productividad** - Recordatorios, hábitos, traducción y clima
- 🔐 **Herramientas criptográficas** - Encriptación, hashing y generación de contraseñas

---

## 🛠️ Tecnologías utilizadas

### Core Framework:
- 🐍 **Python 3.10+** - Lenguaje principal con features modernas
- 🤖 **discord.py 2.x** - Biblioteca oficial para interactuar con Discord API
- ⚡ **asyncio** - Programación asíncrona para mejor rendimiento
- 🌐 **aiohttp** - Cliente HTTP asíncrono para APIs externas

### Integración de APIs:
- 🌍 **MyMemory API** - Servicios de traducción multiidioma
- 🌤️ **Open-Meteo API** - Datos meteorológicos sin API key requerida
- 📚 **DictionaryAPI** - Definiciones y significados de palabras
- 📱 **QR Server API** - Generación de códigos QR personalizados
- 🔗 **is.gd API** - Acortamiento de URLs con estadísticas

### Herramientas del Sistema:
- 📊 **psutil** - Estadísticas detalladas del sistema
- 🔧 **subprocess** - Ejecución segura de comandos del sistema
- 🎬 **ffmpeg** - Procesamiento avanzado de videos
- 📄 **pypdf** - Manipulación y fusión de archivos PDF
- 🔒 **cryptography** - Funciones criptográficas avanzadas

---

## ✨ Características principales

- **🌐 Suite de red completa**: Ping, speedtest, información WHOIS y listado de dispositivos
- **🛠️ Control de sistemas**: Estadísticas en tiempo real, reinicio y actualización remota
- **📁 Procesamiento multimedia**: Fusión de PDFs, concatenación de videos y capturas web
- **💡 Productividad avanzada**: Sistema de recordatorios únicos y hábitos recurrentes
- **🔐 Seguridad integrada**: Encriptación Fernet, hashing múltiple y generación de passwords
- **🌍 Utilidades globales**: Traducción, clima mundial y zonas horarias
- **🔄 Arquitectura asíncrona**: Todos los comandos optimizados para no bloquear el bot

---

## 🏗️ Arquitectura

### Estructura de comandos:
```python
# Comando slash moderno
@bot.tree.command(name="ping", description="Realizar ping a IP")
async def ping_command(interaction: discord.Interaction, ip: str):
    await interaction.response.defer()
    result = await ping_host(ip)
    await interaction.followup.send(f"📡 Ping a {ip}: {result}ms")
```

### Sistema de hábitos:
```python
# Recordatorios recurrentes cancelables
class HabitManager:
    def __init__(self):
        self.active_habits = {}
    
    async def create_habit(self, user_id, interval, message):
        task = asyncio.create_task(self.habit_loop(user_id, interval, message))
        self.active_habits[user_id] = task
    
    async def cancel_habit(self, user_id):
        if user_id in self.active_habits:
            self.active_habits[user_id].cancel()
```

### Integración con Nextcloud:
```python
# Guardado automático de archivos generados
async def save_to_nextcloud(file_path, filename):
    nextcloud_path = f"{NEXTCLOUD_DIR}/{filename}"
    shutil.copy2(file_path, nextcloud_path)
    return f"✅ Guardado en Nextcloud: {filename}"
```

---

## 🎯 Comandos destacados

### 🌐 Herramientas de Red:
- `/ping <ip>` - Realizar ping a una dirección IP con latencia
- `/webping <url>` - Comprobar URL HTTP y medir tiempo de respuesta
- `/speedtest` - Test completo de velocidad de internet
- `/netdevices` - Listar dispositivos conectados a la red local
- `/whois <dominio>` - Información WHOIS detallada de dominios

### 🛠️ Administración de Sistema:
- `/stats` - Estadísticas completas del sistema (CPU, RAM, disco)
- `/reboot` - Reiniciar la Raspberry Pi de forma segura
- `/shutdown` - Apagar el sistema completamente
- `/update` - Actualizar paquetes del sistema (apt update/upgrade)
- `/execute <comando>` - Ejecutar comandos del sistema con seguridad
- `/vpnstatus` - Estado actual de VPN WireGuard

### 📁 Herramientas Multimedia:
- `/mergepdf` - Fusionar múltiples PDFs en uno solo
- `/mergevid` - Concatenar videos en formato MP4
- `/screenshotweb <url>` - Captura de pantalla de páginas web
- `/qr <url>` - Generar códigos QR personalizados

### 💡 Productividad:
- `/remind <minutos> <mensaje>` - Recordatorio único programado
- `/habit <minutos> <mensaje>` - Recordatorios recurrentes automáticos
- `/translate <texto> <idioma>` - Traducir texto a 100+ idiomas
- `/definition <palabra>` - Definiciones completas de diccionario
- `/weather <lugar>` - Clima actual de cualquier ciudad mundial
- `/timezone <zona>` - Hora actual en diferentes zonas horarias

### 🔐 Herramientas Criptográficas:
- `/encrypt <mensaje> <clave>` - Encriptar texto con Fernet
- `/decrypt <mensaje> <clave>` - Desencriptar texto cifrado
- `/hash <mensaje> [algoritmo]` - Hash con SHA-256, SHA-512, MD5, etc.
- `/passw <caracteres>` - Generar contraseñas seguras personalizables

---

## 📋 Instalación y uso

### Requisitos del sistema:
- Python 3.10+ con pip
- Raspberry Pi OS o Linux compatible
- Conexión a internet estable
- Token de bot de Discord

### Instalación:
```bash
# Clonar repositorio
git clone https://github.com/PC0staS/UtilsBot.git
cd UtilsBot

# Crear entorno virtual
python -m venv venv
source venv/bin/activate

# Instalar dependencias
pip install -r requirements.txt

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tu DISCORD_TOKEN
```

### Configuración como servicio systemd:
```ini
[Unit]
Description=UtilsBot Discord Bot
After=network.target

[Service]
Type=simple
WorkingDirectory=/opt/utilsbot
ExecStart=/opt/utilsbot/.venv/bin/python bot.py
Environment=DISCORD_TOKEN=TU_TOKEN
Environment=NEXTCLOUD_DIR=/ruta/nextcloud
Restart=on-failure
RestartSec=10

[Install]
WantedBy=multi-user.target
```

### Activar servicio:
```bash
# Copiar archivo de servicio
sudo cp utilsbot.service /etc/systemd/system/

# Habilitar y iniciar
sudo systemctl enable utilsbot
sudo systemctl start utilsbot

# Verificar estado
sudo systemctl status utilsbot
```

---

## 🎯 Casos de uso

- **🏠 Administración doméstica**: Control remoto de Raspberry Pi desde cualquier lugar
- **🌐 Diagnóstico de red**: Herramientas completas para troubleshooting de conectividad
- **📚 Productividad personal**: Recordatorios, traducción y información útil
- **📁 Procesamiento de archivos**: Automatizar tareas de manipulación de documentos
- **🔧 Utilidades diarias**: Generación de passwords, QR codes y acortamiento de URLs
- **🌍 Información global**: Clima, definiciones y zonas horarias al instante

---

## 🎓 Lo que aprendí

Este proyecto me permitió profundizar en:
- **🤖 Desarrollo de bots Discord**: Comandos slash modernos y manejo avanzado de eventos
- **⚡ Programación asíncrona**: asyncio, aiohttp y concurrencia para performance óptima
- **🌐 Integración de APIs**: Múltiples servicios web con manejo robusto de errores
- **🖥️ Administración de sistemas**: Automatización completa con Python y subprocess
- **📁 Procesamiento multimedia**: Manipulación de archivos PDF, video y capturas web
- **🔒 Criptografía práctica**: Implementación segura de encriptación y hashing
- **🚀 DevOps**: Servicios systemd, logging y monitoreo de aplicaciones

---

## 🔗 Enlaces

- 📂 **[Código fuente](https://github.com/PC0staS/UtilsBot)** - Ver el repositorio en GitHub

---

*Este proyecto demuestra mis habilidades en automatización y desarrollo de herramientas útiles, integrando múltiples tecnologías para crear soluciones que aportan valor real a los usuarios.*
