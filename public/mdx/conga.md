---
route: "conga"
title: "CONGA — Config Generator App"
description: "CLI para generar configuraciones (Nginx, Docker Compose, WireGuard) de forma interactiva y reproducible."
pubDate: "2026-03-22"
heroImage: "conga"
githubRepo: "https://github.com/PC0staS/conga"
---

# CONGA 🔧

CLI ligero para generar configuraciones sin dolor: plantillas interactivas para Nginx, Docker Compose y WireGuard, con soporte para certificados y despliegues multiplataforma.

## 🚀 Resumen

CONGA es una herramienta de línea de comandos que facilita la creación de configuraciones de infraestructura comunes mediante generadores interactivos. Está pensada para desarrolladores y administradores que quieren producir `default.conf`, `docker-compose.yml` o configuraciones de WireGuard rápidamente sin escribir archivos a mano.

**Puntos clave:**

- 🔧 Generadores interactivos para Nginx, Docker Compose y WireGuard
- 🔒 Soporte para HTTPS/SSL (mkcert helper en `tools/`) y configuración de proxy/WebSockets
- 🐧 Multiplataforma: binarios precompilados y script `build.sh` para releases
- 📦 Publicado en Snap y disponible en gestores (Homebrew, Copr)

---

## 🛠 Tecnologías y dependencias

- 🧭 **Go 1.21** — Lenguaje del CLI
- 🧰 Bibliotecas: `promptui`, `readline` para interacción TTY
- 🐳 Integración con herramientas de sistema (mkcert, Docker)

---

## ✨ Generadores incluidos

### Nginx

- Configuración interactiva de rutas (static, proxy)
- Soporte HTTPS y WebSocket
- Genera `default.conf`

### Docker Compose

- Define servicios, puertos, volúmenes y variables de entorno
- Genera `docker-compose.yml`

### WireGuard

- Generación de claves y peers
- Configuración de servidor y clientes
- Genera los archivos de peer para deployment

---

## 📥 Instalación

### Usar binarios precompilados

Descarga el binario en `build/` o desde la página de releases:

- Linux (x86_64): `build/conga-linux`
- Linux (arm64): `build/conga-linux-arm64`
- macOS (arm64/intel): `build/conga-macos-*`

### Package managers

- Snap:

```bash
snap install conga
```

- Homebrew (macOS):

```bash
brew tap pc0stas/conga
brew install conga
```

- Fedora/Copr:

```bash
sudo dnf copr enable pablocostas/conga
sudo dnf install conga
```

### Build desde fuente

```bash
# Instalar la herramienta en GOPATH
go install github.com/pc0stas/conga@latest
# o construir localmente
go build -o conga ./...
# multi-plataforma
./build.sh
```

---

## 🚀 Uso rápido

```bash
conga nginx generate      # Genera configuración Nginx interactiva
conga docker generate     # Genera docker-compose interactivo
conga wireguard generate  # Genera configuración WireGuard
conga help                # Muestra ayuda
conga version             # Muestra versión (ej. v1.2.1)
```

Ejemplo interactivo (Nginx):

```bash
conga nginx generate
? Main domain: example.com
? Use HTTPS? Yes
? Number of routes: 2
# -> Genera default.conf
```

---

## 🔧 Desarrollo y scripts

El repositorio incluye `Makefile` y `build.sh` con objetivos útiles:

- `make generate-certs DOMAIN=conga.local` — generar certificados locales con `tools/generate_certs.sh`
- `make build` — compilar binario local en `./build/conga`
- `make build-all` — ejecutar `build.sh` para binarios multiplataforma
- `make test` — ejecutar `go test ./...`
- `make lint` — correr `golangci-lint` si está instalado

---

## 📦 Estado y roadmap

- ✅ Publicado en Snap
- ✅ Generadores Nginx y Docker Compose
- 🔄 WireGuard y más (plantillas, Apache, Caddy, sistema de templates)

---

## 📄 Licencia

MIT

---

## 🔗 Enlaces

- Código fuente: https://github.com/PC0staS/conga
- Releases: https://github.com/pc0stas/conga/releases

_CONGA simplifica la creación de infra como código para flujos comunes de desarrollo y despliegue._
