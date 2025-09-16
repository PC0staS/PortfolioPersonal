---
route: 'netwatch'
title: 'NetWatch - Monitor de Red'
description: 'Herramienta profesional de monitoreo de red con interfaz web moderna'
pubDate: 'Dec 15 2024'
heroImage: 'Netwatch_xsb6da'
githubRepo: 'https://github.com/Pc0staS/Netwatch'
demoLink: 'https://asciinema.org/a/rnuSdhmi4U4Oe5FThZGiaVbfp'
---
# NetWatch 🌐📊

**Herramienta profesional de monitoreo de red** con interfaz web moderna y consola interactiva, desarrollada en Python para supervisar el tráfico de interfaces de red en tiempo real.

## 🚀 ¿Qué hice?

Desarrollé una **aplicación completa de monitoreo de red** que ofrece tanto una interfaz de consola con gráficos ASCII como una interfaz web profesional con visualizaciones interactivas en tiempo real.

**Logros principales:**
- 🖥️ **Doble interfaz** - Consola con gráficos ASCII coloridos y web con visualización moderna
- 📊 **Monitoreo en tiempo real** - Actualización automática de estadísticas cada segundo
- 🎨 **Diseño profesional** - Paleta de colores pastel y diseño responsivo
- 🌐 **API REST completa** - Endpoints para integración con otros sistemas
- 📱 **Multiplataforma** - Compatible con Windows, Linux y macOS
- ⚡ **WebSockets** - Comunicación en tiempo real sin recargar la página

---

## 🛠️ Tecnologías utilizadas

### Backend:
- 🐍 **Python 3.7+** - Lógica principal de la aplicación
- 📊 **psutil** - Obtención de estadísticas de red del sistema
- 🌶️ **Flask** - Framework web para servidor HTTP
- 🔌 **Flask-SocketIO** - Comunicación WebSocket bidireccional
- 🌐 **WebSocket** - Actualizaciones en tiempo real sin polling

### Frontend:
- 📄 **HTML5 & CSS3** - Estructura y estilos modernos
- 🟨 **JavaScript Vanilla** - Lógica del cliente y manejo de datos en tiempo real
- 📈 **Chart.js** - Gráficos interactivos y visualizaciones dinámicas
- 🥾 **Bootstrap 5** - Componentes UI y diseño responsivo

### Herramientas del Sistema:
- 💻 **psutil** - APIs del sistema para estadísticas de red
- 🎨 **Colorama** - Colores en consola para mejor UX
- 📦 **PyPI** - Empaquetado y distribución del software

---

## ✨ Características principales

- **🖥️ Interfaz de consola avanzada**: Gráficos ASCII coloridos en tiempo real con selección interactiva de interfaces
- **🌐 Interfaz web profesional**: Dashboard moderno con gráficos interactivos y paleta de colores pastel
- **📊 Gráficos en tiempo real**: Visualización de velocidades de envío (azul) y recepción (verde) con Chart.js
- **🔌 Sin datos simulados**: Muestra estado desconectado cuando no hay datos reales de red
- **⚙️ Control intuitivo**: Selección fácil de interfaces y controles de monitoreo
- **📱 Diseño responsivo**: Adaptable a móviles, tablets y desktop
- **🚀 Distribución PyPI**: Instalación sencilla con `pip install netwatch-monitor`

---

## 🏗️ Arquitectura

### Interfaz de Consola:
```bash
# Ejecutar en modo consola
netwatch

# Monitorear interfaz específica
netwatch -i eth0

# Monitorear todas las interfaces
netwatch --all
```

**Características de consola:**
- Selección interactiva de interfaces de red
- Gráficos ASCII coloridos en tiempo real
- Estadísticas de velocidad actual y tráfico acumulado
- Colores diferenciados para envío (azul) y recepción (verde)

### Interfaz Web:
```bash
# Ejecutar interfaz web (localhost)
netwatch-web

# Ejecutar con acceso de red
netwatch-web --network

# Puerto personalizado
netwatch-web --network --port 8080
```

**Dashboard web incluye:**
- Gráficos interactivos con Chart.js
- Diseño responsivo adaptable
- Paleta pastel elegante
- Control de interfaces en tiempo real

### API REST:
```
GET  /api/interfaces        - Lista interfaces disponibles
GET  /api/stats            - Estadísticas actuales de red
POST /api/start_monitoring - Iniciar monitoreo de interfaces
POST /api/stop_monitoring  - Detener monitoreo
```

---

## 📋 Instalación y uso

### Instalación desde PyPI (recomendada):
```bash
# Instalar desde PyPI
pip install netwatch-monitor

# Verificar instalación
netwatch --version
```

### Instalación desde código fuente:
```bash
# Clonar repositorio
git clone https://github.com/PC0staS/netwatch.git
cd netwatch

# Instalar en modo desarrollo
pip install -e .

# O instalar dependencias manualmente
pip install -r requirements.txt
```

### Uso básico:
```bash
# Modo consola interactivo
netwatch

# Modo web con interfaz moderna
netwatch-web

# Modo web con acceso de red
netwatch-web --network --port 8080
```

---

## 🎯 Casos de uso

- **🔧 Debugging de red**: Monitorear actividad durante resolución de problemas de conectividad
- **📊 Monitoreo de rendimiento**: Seguimiento del uso de ancho de banda y cuellos de botella
- **👨‍💻 Desarrollo**: Monitorear actividad de red durante desarrollo de aplicaciones
- **⚙️ Administración de sistemas**: Vista rápida del estado de interfaces de red
- **📚 Educativo**: Aprender sobre interfaces de red y patrones de tráfico
- **🌐 Monitoreo remoto**: Usar interfaz web para supervisión remota de servidores

---

## 🎓 Lo que aprendí

Este proyecto me permitió profundizar en:
- **🌐 APIs del sistema**: Uso avanzado de psutil para obtener estadísticas de red en tiempo real
- **🔗 Desarrollo full-stack**: Backend robusto en Python y frontend moderno con WebSockets
- **🔌 Comunicación en tiempo real**: WebSockets y Socket.IO para actualizaciones live
- **📊 Visualización de datos**: Crear gráficos ASCII para consola y web interactivos
- **📱 Diseño responsivo**: Interfaz que funciona perfectamente en todos los dispositivos
- **📦 Packaging de Python**: Crear paquete distribuible en PyPI con comandos CLI
- **🎨 UX/UI**: Diseño de interfaces tanto técnicas como amigables para diferentes usuarios

---

## 🔗 Enlaces

- 📂 **[Código fuente](https://github.com/Pc0staS/Netwatch)** - Ver el repositorio en GitHub
- 📦 **[PyPI Package](https://pypi.org/project/netwatch-monitor/)** - Instalar desde PyPI
- 🎥 **[Demo en Asciinema](https://asciinema.org/a/rnuSdhmi4U4Oe5FThZGiaVbfp)** - Ver demo de la consola en acción

---

*Este proyecto demuestra mis habilidades en desarrollo de herramientas de sistema y mi capacidad para crear aplicaciones que combinan interfaces técnicas con experiencias de usuario modernas.*
