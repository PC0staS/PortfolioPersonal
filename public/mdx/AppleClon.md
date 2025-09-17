---
route: 'appleClon'
title: 'AppleClon - Landing Astro'
description: 'Recreación del sitio web oficial de apple.'
pubDate: 'Sep 17 2025'
heroImage: 'AppleClon_dju9do'
githubRepo: 'https://github.com/PC0staS/appleClon.git'
demoLink: 'https://appleClon.pablocostas.dev'
---

## 📖 Descripción

Este proyecto es una recreación fiel de la interfaz del sitio web oficial de Apple, desarrollado con fines **educativos y de aprendizaje**. El objetivo es demostrar habilidades en desarrollo frontend moderno y replicar la experiencia de usuario característica de Apple.

> ⚠️ **Disclaimer**: Este sitio web es **no oficial** y no está afiliado con Apple Inc. Todos los derechos de marca registrada pertenecen a Apple Inc.

## ✨ Características

### 🎨 **Diseño y UX**

- **Interfaz pixel-perfect** que replica el diseño oficial de Apple
- **Responsive design** optimizado para todos los dispositivos
- **Tipografía Apple** (SF Pro Display/Text) con fallbacks del sistema
- **Paleta de colores** fiel a la identidad visual de Apple

### 🚀 **Funcionalidades Interactivas**

- **Navbar dinámico** con menús desplegables al hover
- **Menú móvil collapsible** con animaciones suaves
- **Blur effect** en el fondo cuando se abren los menús
- **Transiciones fluidas** en todas las interacciones

### 🎭 **Animaciones Avanzadas**

- **Framer Motion** para animaciones de componentes
- **Dropdowns animados** con efectos de altura y opacidad
- **Menú hamburguesa** con transformación de iconos
- **Blur backdrop** con efectos de profundidad

### 📱 **Responsive & Accesibilidad**

- **Mobile-first approach** con breakpoints optimizados
- **Navegación táctil** mejorada para dispositivos móviles
- **Performance optimizada** con lazy loading
- **Semantic HTML** para mejor accesibilidad

## 🛠️ Stack Tecnológico

| Tecnología        | Propósito                 | Versión |
| ----------------- | ------------------------- | ------- |
| **Astro**         | Framework principal       | 5.13.7  |
| **React**         | Componentes interactivos  | 19.1.1  |
| **TypeScript**    | Tipado estático           | -       |
| **Tailwind CSS**  | Estilos y diseño          | 4.1.13  |
| **Framer Motion** | Animaciones               | -       |
| **Bun**           | Runtime y package manager | -       |

## 🚀 Instalación y Uso

### Prerrequisitos

- **Bun** (recomendado) o **Node.js** 18+
- **Git**

### Pasos de instalación

```bash
# Clonar el repositorio
git clone https://github.com/PC0staS/appleClon.git

# Navegar al directorio
cd appleClon

# Instalar dependencias
bun install

# Ejecutar en modo desarrollo
bun dev

# Construir para producción
bun build

# Vista previa de la build
bun preview
```

### 🌐 Comandos disponibles

| Comando         | Acción                                            |
| --------------- | ------------------------------------------------- |
| `bun dev`       | Inicia servidor de desarrollo en `localhost:4321` |
| `bun build`     | Construye el sitio para producción en `./dist/`   |
| `bun preview`   | Vista previa local de la build de producción      |
| `bun astro ...` | Ejecuta comandos CLI de Astro                     |

## 📁 Estructura del Proyecto

```
📦 appleClon/
├── 📂 public/           # Archivos estáticos
│   ├── apple-logo.svg
│   └── favicon.ico
├── 📂 src/
│   ├── 📂 assets/       # Recursos del proyecto
│   ├── 📂 components/   # Componentes reutilizables
│   │   ├── Navbar.tsx   # Navegación principal
│   │   ├── Footer.astro # Pie de página
│   │   └── dropDownSections/ # Secciones del menú
│   ├── 📂 layouts/      # Layouts de página
│   │   └── Layout.astro
│   ├── 📂 pages/        # Páginas del sitio
│   │   └── index.astro
│   └── 📂 styles/       # Estilos globales
│       └── global.css
├── astro.config.mjs     # Configuración de Astro
├── tailwind.config.js   # Configuración de Tailwind
├── tsconfig.json        # Configuración de TypeScript
└── package.json         # Dependencias y scripts
```

## 🎯 Características Implementadas

### ✅ **Completadas**

- [x] **Navbar responsive** con menús desplegables
- [x] **Menú móvil** con animaciones
- [x] **Footer** estilo Apple con enlaces legales
- [x] **Tipografía Apple** (SF Pro fonts)
- [x] **Blur effects** y overlays
- [x] **Animaciones Framer Motion**
- [x] **TypeScript** para tipado seguro

### 🚧 **En desarrollo**

- [ ] **Páginas de productos** (Mac, iPad, iPhone, etc.)
- [ ] **Hero sections** animadas
- [ ] **Galería de productos** interactiva
- [ ] **Formularios** de contacto
- [ ] **SEO optimization**

### 🔮 **Próximas características**

- [ ] **Dark mode** toggle
- [ ] **Internationalization** (i18n)
- [ ] **PWA** capabilities
- [ ] **E2E testing** con Playwright
- [ ] **CMS integration**

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. **Fork** el proyecto
2. Crea una **feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit** tus cambios (`git commit -m 'Add amazing feature'`)
4. **Push** a la branch (`git push origin feature/amazing-feature`)
5. Abre un **Pull Request**

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Desarrollador

**Pablo Costas**

- 🌐 **Portfolio**: [pablocostas.dev](https://pablocostas.dev)
- 🐙 **GitHub**: [@PC0staS](https://github.com/PC0staS)
- 💼 **LinkedIn**: [Pablo Costas](https://linkedin.com/in/pablocostas)

## 🙏 Agradecimientos

- **Apple Inc.** por la inspiración en diseño y UX
- **Astro Team** por el increíble framework
- **Vercel** por el excelente hosting
- **Tailwind Labs** por el framework de CSS

---

<div align="center">

**⭐ Si te gusta este proyecto, ¡dale una estrella! ⭐**

_Desarrollado con ❤️ por [Pablo Costas](https://pablocostas.dev)_

</div>
