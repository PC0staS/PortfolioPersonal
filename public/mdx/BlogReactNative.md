---
route: 'blog-react-native'
title: 'BlogReactNative - Full‑Stack'
description: 'Aplicación de blog multiplataforma con React Native/Expo y backend Flask: autenticación JWT, CRUD de posts, subida de imágenes y búsqueda.'
pubDate: 'Aug 30 2025'
heroImage: 'BlogReactNative_nztq0t'
githubRepo: 'https://github.com/PC0staS/BlogReactNative'
---

# BlogReactNative 📱📝

**Aplicación de blog full-stack** desarrollada con React Native/Expo y backend Flask, que incluye autenticación JWT, CRUD completo de posts, subida de imágenes y búsqueda en tiempo real.

## 🚀 ¿Qué hice?

Desarrollé una **aplicación completa de blog multiplataforma** que permite a los usuarios crear, leer, editar y eliminar artículos con funcionalidades avanzadas de autenticación y gestión de contenido.

**Logros principales:**
- ✨ **Autenticación completa** - Sistema JWT con registro, login y verificación de tokens
- 📝 **CRUD de artículos** - Creación, lectura, edición y eliminación con metadatos completos
- 📷 **Gestión de imágenes** - Integración con cámara/galería y conversión a base64
- 🔍 **Búsqueda en tiempo real** - Filtrado instantáneo de posts con ordenación por fecha
- 📱 **Experiencia móvil fluida** - Navegación intuitiva y animaciones con Reanimated

---

## 🛠️ Tecnologías utilizadas

### Frontend Mobile:
- ⚛️ **React Native** - Framework multiplataforma
- 📱 **Expo 53** - Plataforma de desarrollo y herramientas
- 🔷 **TypeScript** - Tipado estático y mejor desarrollo
- 🗂️ **Expo Router** - Navegación file-based moderna
- 🎬 **React Native Reanimated** - Animaciones fluidas y performance
- 📸 **Expo Image Picker** - Acceso a cámara y galería
- 💾 **AsyncStorage** - Persistencia local de datos

### Backend:
- 🐍 **Python** - Lenguaje principal del servidor
- 🌶️ **Flask** - Framework web minimalista y potente
- 🔑 **Flask-JWT-Extended** - Autenticación y autorización JWT
- 🌐 **Flask-CORS** - Manejo de CORS para comunicación frontend-backend
- 🗄️ **SQLite** - Base de datos embebida para desarrollo
- 🐳 **Docker** - Containerización para despliegue sencillo

---

## ✨ Características principales

- **🔐 Autenticación robusta**: Registro de usuarios, login seguro y verificación automática de tokens JWT
- **📝 CRUD completo de posts**: Creación de artículos con título, contenido, imagen y metadatos de autor
- **📷 Gestión multimedia**: Subida de imágenes desde cámara o galería con previsualización en tiempo real
- **🔍 Búsqueda avanzada**: Filtrado de posts por título o contenido con resultados instantáneos
- **📱 Experiencia móvil nativa**: Compatible con iOS, Android y Web con UI adaptativa
- **🎨 Interfaz moderna**: Diseño cuidado con animaciones fluidas y feedback visual
- **⚡ Performance optimizada**: Carga eficiente de datos y gestión de estados

---

## 🏗️ Arquitectura

### Frontend (Expo):
- **Navegación**: Expo Router con rutas file-based (`/app/login`, `/app/blog`, `/app/create`)
- **Componentes**: Estructura modular con componentes reutilizables para formularios y listas
- **Gestión de estado**: Context API para autenticación y AsyncStorage para persistencia
- **Integración nativa**: Uso de APIs nativas para cámara, galería y almacenamiento

### Backend (Flask):
- **API REST**: Endpoints bien definidos para autenticación y gestión de posts
- **Autenticación**: JWT con refresh tokens y middleware de verificación
- **Base de datos**: Modelos SQLAlchemy con relaciones entre usuarios y posts
- **Validación**: Esquemas de validación para entrada de datos y manejo de errores

### Endpoints principales:
```
Auth:
POST /api/auth/signup    - Registro de usuarios
POST /api/auth/login     - Inicio de sesión
GET  /api/auth/check     - Verificación de token

Posts:
GET    /api/posts        - Listar posts con paginación
GET    /api/posts/{id}   - Obtener post específico
POST   /api/posts        - Crear nuevo post
PUT    /api/posts/{id}   - Actualizar post existente
DELETE /api/posts/{id}   - Eliminar post
```

---

## 📋 Instalación y uso

### Requisitos:
- Node.js 18+ y npm
- Python 3.8+ y pip
- Expo CLI (`npm install -g @expo/cli`)
- Docker (opcional)

### Backend:
```bash
# Clonar repositorio
git clone https://github.com/PC0staS/BlogReactNative.git
cd BlogReactNative/backend

# Instalar dependencias
pip install -r requirements.txt

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus configuraciones

# Ejecutar con Docker (recomendado)
docker-compose up -d

# O ejecutar directamente
python app.py
```

### Frontend:
```bash
cd BlogReactNative/frontend

# Instalar dependencias
npm install

# Configurar URL del backend en config.ts
# Ejecutar en desarrollo
npx expo start

# Para builds de producción
npx expo build:android
npx expo build:ios
```

---

## 🎓 Lo que aprendí

Este proyecto me permitió profundizar en:
- **📱 Desarrollo móvil multiplataforma**: Navegación file-based y componentes nativos con Expo
- **🔑 Autenticación JWT**: Implementación completa de auth con refresh tokens y middleware
- **📷 APIs nativas**: Integración con cámara, galería y sistemas de archivos móviles
- **🎬 Animaciones móviles**: Uso avanzado de React Native Reanimated para UX fluida
- **🌐 Comunicación frontend-backend**: Manejo de estados de carga, errores y sincronización
- **🐳 Containerización**: Despliegue con Docker para desarrollo y producción
- **📱 UX móvil**: Patrones de diseño específicos para dispositivos móviles

---

## 🔗 Enlaces

- 📂 **[Código fuente](https://github.com/PC0staS/BlogReactNative)** - Ver el repositorio en GitHub

---

*Este proyecto demuestra mis habilidades en desarrollo full-stack móvil y mi capacidad para crear aplicaciones React Native completas con backends robustos.*
