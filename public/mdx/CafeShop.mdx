---
route: 'cafe-shop'
title: 'CafeShop — E-commerce Full‑stack'
description: 'App full‑stack para gestionar productos de café: CRUD, imágenes, panel admin con JWT, API FastAPI y frontend Next.js con Tailwind.'
pubDate: 'Sep 7 2025'
heroImage: 'CafeShop_301h1dc'
githubRepo: 'https://github.com/PC0staS/CafeShop'
---

# CafeShop ☕🛒

**E-commerce full-stack completo para gestión de productos de café** con API REST segura, panel de administración con autenticación JWT y frontend responsive con transiciones modernas.

## 🚀 ¿Qué hice?

Desarrollé un **sistema completo de e-commerce** enfocado en productos de café, implementando desde cero tanto el backend con API REST segura como el frontend moderno con experiencia de usuario optimizada.

**Logros principales:**
- 🌶️ **API FastAPI robusta** - Backend con modelos SQLAlchemy y validación Pydantic
- 🔑 **Autenticación JWT completa** - Sistema seguro con refresh tokens y middleware
- 🛒 **CRUD completo de productos** - Gestión avanzada con múltiples imágenes por producto
- 👨‍💼 **Panel admin protegido** - Dashboard moderno para gestión de inventario
- ⚛️ **Frontend Next.js 15** - React 19 con TypeScript y Tailwind CSS
- 🐳 **Despliegue orquestado** - Docker Compose con PostgreSQL integrado

---

## 🛠️ Tecnologías utilizadas

### Backend (API):
- 🐍 **Python** - Lenguaje principal del servidor
- 🌶️ **FastAPI** - Framework web moderno y ultra-rápido
- 🗄️ **SQLAlchemy** - ORM avanzado para modelado de datos
- ✅ **Pydantic** - Validación de datos y serialización automática
- 🔑 **PyJWT** - Autenticación y autorización JWT
- 🐘 **PostgreSQL 16** - Base de datos relacional robusta

### Frontend:
- ⚛️ **React 19** - Biblioteca UI con las últimas funcionalidades
- 🔷 **TypeScript** - Tipado estático para desarrollo seguro
- ⚫ **Next.js 15** - Framework full-stack con App Router
- 🎨 **Tailwind CSS** - Framework de utilidades CSS
- ✨ **View Transitions** - Navegación fluida y moderna

### DevOps & Deployment:
- 🐳 **Docker** - Containerización del backend
- 🐙 **Docker Compose** - Orquestación de servicios
- 🌐 **CORS** - Configuración para comunicación frontend-backend
- 📊 **API Documentation** - Swagger/OpenAPI automático

---

## ✨ Características principales

- **🛒 E-commerce completo**: CRUD de productos con imágenes, descripciones y precios
- **📷 Gestión de imágenes**: Subida múltiple con previsualización y validación
- **🔐 Autenticación robusta**: JWT con refresh tokens y middleware de seguridad
- **👨‍💼 Panel administrativo**: Dashboard protegido para gestión de inventario
- **🎨 UI moderna**: Diseño responsive con Tailwind y transiciones suaves
- **⚡ Performance optimizada**: Next.js 15 con App Router y generación estática
- **🛡️ Seguridad avanzada**: Validación de datos, CORS y saneado de inputs

---

## 🏗️ Arquitectura

### Backend (FastAPI):
```
backend/
├── app/
│   ├── models/          # Modelos SQLAlchemy
│   ├── schemas/         # Esquemas Pydantic
│   ├── routers/         # Endpoints de la API
│   ├── core/           # Configuración y seguridad
│   └── database.py     # Conexión a PostgreSQL
└── docker-compose.yml  # Orquestación de servicios
```

### Frontend (Next.js 15):
```
frontend/
├── app/                # App Router de Next.js
│   ├── admin/         # Panel administrativo
│   ├── products/      # Páginas de productos
│   └── api/           # API routes
├── components/        # Componentes reutilizables
└── lib/              # Utilidades y configuración
```

### API Endpoints:
```
Públicos:
GET    /products       - Listar productos (paginado)
GET    /products/{id}  - Detalle de producto
GET    /products/{id}/images - Imágenes del producto

Admin (JWT requerido):
POST   /admin/auth/register   - Registro de administradores
POST   /admin/auth/login      - Inicio de sesión
POST   /admin/auth/refresh    - Renovar token JWT
POST   /admin/products        - Crear producto
PUT    /admin/products/{id}   - Actualizar producto
DELETE /admin/products/{id}   - Eliminar producto
POST   /admin/products/full   - Crear producto con imágenes
```

---

## 📋 Instalación y uso

### Requisitos previos:
- Docker y Docker Compose
- Node.js 18+ (para frontend)
- Python 3.9+ (desarrollo local)

### Backend con Docker (recomendado):
```bash
# Clonar repositorio
git clone https://github.com/PC0staS/CafeShop.git
cd CafeShop/backend/code

# Configurar variables de entorno
cp .env.example .env
# Editar .env con DB_URL, JWT_SECRET, etc.

# Levantar servicios con Docker
docker-compose up --build

# La API estará disponible en:
# http://localhost:8000
# Documentación: http://localhost:8000/docs
```

### Frontend:
```bash
cd ../frontend

# Instalar dependencias
npm install --legacy-peer-deps

# Configurar API URL en environment
echo "NEXT_PUBLIC_API_URL=http://localhost:8000" > .env.local

# Ejecutar en desarrollo
npm run dev

# Disponible en http://localhost:3000
```

### Acceso a servicios:
- **Frontend**: http://localhost:3000
- **Panel Admin**: http://localhost:3000/admin
- **API Backend**: http://localhost:8000
- **API Docs**: http://localhost:8000/docs
- **PostgreSQL**: localhost:5432

---

## 🔐 Características de seguridad

### Autenticación JWT:
```python
# Ejemplo de endpoint protegido
@router.post("/admin/products")
async def create_product(
    product: ProductCreate,
    current_user: User = Depends(get_current_active_user),
    db: Session = Depends(get_db)
):
    return create_product_service(db, product, current_user.id)
```

### Validación con Pydantic:
```python
class ProductCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=200)
    description: str = Field(..., min_length=10)
    price: float = Field(..., gt=0)
    category: str = Field(..., min_length=1)
```

### CORS y headers de seguridad:
- Configuración CORS específica para dominios permitidos
- Headers de seguridad para prevenir ataques XSS
- Validación y saneado de todos los inputs

---

## 🎓 Lo que aprendí

Este proyecto me permitió dominar:
- **🌶️ FastAPI avanzado**: Creación de APIs robustas con documentación automática
- **🔑 Seguridad web**: Implementación completa de JWT, CORS y validación de datos
- **🐳 Containerización**: Docker Compose para orquestación de servicios
- **⚛️ Next.js moderno**: App Router, React 19 y TypeScript en producción
- **🎨 Diseño responsivo**: Tailwind CSS y view transitions para UX superior
- **🗄️ Modelado de datos**: SQLAlchemy con relaciones complejas y migraciones
- **🚀 DevOps**: Configuración de entornos y despliegue automatizado

---

## 🔗 Enlaces

- 📂 **[Código fuente](https://github.com/PC0staS/CafeShop)** - Ver el repositorio en GitHub

---

*Este proyecto demuestra mis habilidades en desarrollo full-stack moderno y mi capacidad para crear sistemas de e-commerce completos con arquitecturas escalables y seguras.*

