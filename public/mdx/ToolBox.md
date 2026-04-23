---
route: "toolbox"
title: "ToolBox"
description: "
A modern, full-stack web application providing a comprehensive suite of productivity and utility tools for image processing, PDF manipulation, QR code generation, video downloading, text encoding, and hash generation. Built with Astro, FastAPI, and enterprise-grade security features."
pubDate: "2026-04-23"
heroImage: "toolbox"
githubRepo: "https://github.com/PC0staS"
demoLink: 'https://toolbox.pablocostas.dev'

---

# Toolbox 🧰

A modern, full-stack web application featuring a comprehensive suite of productivity and utility tools. Built with a focus on security, performance, and user experience.

**Live**: [toolbox.pablocostas.dev](https://toolbox.pablocostas.dev)

---

## 🎯 Overview

Toolbox is a feature-rich application that provides users with a collection of powerful tools for image processing, file manipulation, encoding/decoding, and media downloading. The platform is built on modern web technologies and implements enterprise-grade security practices.

### Key Features

- **Image Processing**: Compress, convert, blur, and resize images with real-time preview
- **PDF Tools**: Merge multiple PDF files seamlessly
- **QR Code Generation**: Create customizable QR codes instantly
- **Video Downloading**: Download YouTube videos in multiple formats (including 4K for premium users)
- **Text Encoding/Decoding**: Base64, Hex, URL, and password encoding utilities
- **Hash Generation**: Generate various hash types (MD5, SHA-256, etc.)
- **Authentication**: Secure user authentication with Clerk
- **Real-time Job Progress**: Stream processing status to users
- **Rate Limiting**: Prevent abuse with intelligent rate limiting
- **Responsive Design**: Optimized for desktop and mobile devices

---

## 🏗️ Architecture

### Frontend Stack

- **Framework**: [Astro 5](https://astro.build) - Lightweight, content-focused SSR/Preview
- **Language**: TypeScript
- **UI Components**: React for interactive elements
- **Styling**: TailwindCSS with CSS variables for theming
- **Authentication**: Clerk
- **HTTP Client**: Native fetch with custom auth wrappers

### Backend Stack

- **Framework**: FastAPI (Python 3.12)
- **Server**: Uvicorn
- **Rate Limiting**: SlowAPI
- **Caching**: Redis with modules (RedisBloom, RediSearch, TimeSeries)
- **Job Queue**: Redis-based job processing
- **Media Processing**: FFmpeg for video operations
- **File Handling**: Secure temporary file management with automatic cleanup

### Infrastructure

- **Containerization**: Docker & Docker Compose
- **Reverse Proxy**: Nginx (Alpine Linux)
- **HTTPS**: Cloudflare Tunnel
- **Deployment**: Ansible automation
- **CI/CD**: GitHub-based workflows

---

## 🔒 Security Implementation

### Core Security Features

1. **Token Security**
   - HMAC-SHA256 signing in `yt_tokens.py`
   - Secure token generation and validation
   - Time-limited token expiration

2. **SSRF Prevention**
   - Strict URL validation and parsing
   - Whitelist-based domain verification
   - Protocol enforcement (HTTPS only for remote resources)

3. **Path Traversal Prevention**
   - `.resolve()` path normalization
   - Restricted file access to designated directories
   - Symbolic link detection

4. **DoS Protection**
   - Request size limits (images, videos, documents)
   - Rate limiting on sensitive endpoints (`/qr/generate`)
   - Connection timeouts
   - Memory-efficient streaming

5. **Command Injection Prevention**
   - FFmpeg command parameterization
   - Input sanitization for media processing
   - No shell=True in subprocess calls

6. **CORS Hardening**
   - Explicit HTTP methods whitelist
   - Specific header allowlist
   - Origin validation

7. **Authentication & Authorization**
   - Clerk integration for secure auth
   - Bearer token validation
   - Role-based access control (e.g., premium features)

---

## 📋 Project Structure

```
toolbox/
├── backend/
│   ├── app/
│   │   ├── main.py              # FastAPI application entry point
│   │   ├── auth.py              # Authentication utilities
│   │   ├── concurrency.py       # Async task management
│   │   ├── jobs.py              # Job queue and processing
│   │   ├── yt_tokens.py         # YouTube token management
│   │   ├── routers/
│   │   │   └── jobs.py          # Job status endpoints
│   │   └── services/
│   │       ├── image.py         # Image processing (compress, convert, blur, resize)
│   │       ├── json.py          # JSON utilities
│   │       ├── pdf.py           # PDF merging
│   │       ├── qr.py            # QR code generation
│   │       └── yt.py            # YouTube downloading (SSRF-protected)
│   ├── tests/
│   │   ├── test_upload_limits.py
│   │   └── generated/           # Auto-generated test suite
│   ├── requirements.txt
│   ├── Dockerfile
│   └── downloads/               # Temporary download storage
│
├── frontend/
│   ├── src/
│   │   ├── pages/               # Astro pages (routing)
│   │   ├── components/
│   │   │   ├── tools/           # Individual tool components
│   │   │   ├── endpoints/       # API integration utilities
│   │   │   ├── sections/        # Layout sections
│   │   │   └── ui/              # Reusable UI components
│   │   ├── hooks/               # Custom React hooks
│   │   ├── layouts/             # Astro layout components
│   │   ├── middleware.ts        # Authentication middleware
│   │   └── config/              # Configuration files
│   ├── astro.config.mjs
│   ├── package.json
│   ├── tsconfig.json
│   ├── Dockerfile
│   └── public/                  # Static assets
│
├── nginx/
│   └── default.conf             # Reverse proxy configuration
│
├── compose.yml                  # Docker Compose orchestration
├── Makefile                     # Development commands
├── deploy.yml                   # Ansible deployment playbook
├── inventory.ini                # Ansible inventory
└── deploy.sh                    # Deployment wrapper script
```

---

## 🚀 Getting Started

### Prerequisites

- Docker & Docker Compose
- Python 3.12+ (for local development)
- Node.js 18+ (for frontend development)
- Clerk account (for authentication)

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/PC0staS/toolbox.git
   cd toolbox
   ```

2. **Setup environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Configure:
   - `CLERK_PUBLIC_KEY` and `CLERK_SECRET_KEY`
   - `CLOUDFLARE_TOKEN` (for tunnel)
   - Backend API endpoints

3. **Start services with Docker Compose**

   ```bash
   docker compose up -d
   ```

4. **Access the application**
   - Frontend: http://localhost:5000
   - Backend API: http://localhost:8000
   - API Docs: http://localhost:8000/docs

### Running Tests

```bash
# Run pytest suite
pytest backend/tests/ -v

# Run specific test
pytest backend/tests/test_upload_limits.py -v
```

---

## 📦 Deployment

### Ansible Automation

Deploy to a remote server with a single command:

```bash
./deploy.sh
```

The script will prompt you for:

- Target host (IP or hostname)
- SSH username
- SSH port

### What Ansible Does

1. Checks/installs Docker and Docker Compose
2. Clones or updates the Git repository
3. Updates Git remote URL if changed
4. Rebuilds Docker images
5. Starts/restarts services with `docker compose up -d`
6. Preserves configuration files (`.env`) across deployments
7. Displays post-deployment status and access instructions

### Manual Deployment

```bash
# SSH into server
ssh user@server

# Navigate to project
cd /srv/ToolBox

# Pull latest changes
git fetch origin
git reset --hard origin/master

# Rebuild and restart services
docker compose pull
docker compose up -d --build
```

---

## 🔧 API Endpoints

### Image Processing

- `POST /image/compress` - Compress images
- `POST /image/convert` - Convert image format
- `POST /image/blur` - Apply blur effect
- `POST /image/resize` - Resize images

### PDF Tools

- `POST /pdf/merge` - Merge multiple PDFs

### QR Code

- `POST /qr/generate` - Generate QR codes (rate-limited)

### YouTube

- `POST /youtube/download` - Download videos/audio
- `GET /youtube/token/{video_id}` - Get temporary download token
- `GET /youtube/file/{file_id}` - Download processed media

### Job Management

- `GET /jobs/{job_id}` - Get job status
- `WS /jobs/{job_id}/stream` - WebSocket for real-time progress

### Health

- `GET /health` - Application health check

---

## 🎨 Frontend Features

### Tools Available

1. **Image Tools**
   - Image Compressor (lossy/lossless)
   - Image Converter (JPEG, PNG, WebP, etc.)
   - Blur Effect (with intensity control)
   - Image Resizer (custom dimensions)

2. **Text Tools**
   - Base64 Encoder/Decoder
   - Hex Encoder/Decoder
   - URL Encoder/Decoder
   - Password Encoder (bcrypt/Argon2)
   - Hash Generator (MD5, SHA-256, SHA-512)

3. **Utility Tools**
   - QR Code Generator
   - PDF Merger
   - YouTube Video Downloader

### Premium Features

- 4K video downloads
- Advanced image processing options
- Extended file size limits

---

## 📊 Performance Optimizations

- **Image Processing**: Lazy loading with in-browser previews
- **Video Streaming**: Chunked downloads with progress tracking
- **Caching**: Redis-based response caching
- **Frontend**: Code splitting, critical CSS inlining
- **Backend**: Async task processing, connection pooling

---

## 🛡️ Disclaimer (YouTube Downloader)

This tool is provided for **personal, non-commercial use only**.

⚠️ **Important Legal Notice**:

- Not affiliated with YouTube, Google, or any related entities
- Downloaded content is processed temporarily and NOT stored on our servers
- Users are solely responsible for compliance with YouTube's Terms of Service
- Commercial use or redistribution of content may violate copyright laws
- We are not liable for any legal consequences arising from misuse

Full disclaimer available in the application UI.

---

## 📈 Monitoring & Maintenance

### Logs

```bash
# View service logs
docker compose logs -f [service-name]

# Specific service logs
docker compose logs -f backend
docker compose logs -f frontend
docker compose logs -f nginx
```

### Cleanup

```bash
# Remove old temporary files
rm -rf backend/temp_uploads/*
rm -rf backend/downloads/*

# Full cleanup (remove containers and volumes)
docker compose down -v
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👤 Author

**Pablo Costas**

- Website: [pablocostas.dev](https://pablocostas.dev)
- GitHub: [@PC0staS](https://github.com/PC0staS)

---

## 🙏 Acknowledgments

- [Astro](https://astro.build) - Web framework
- [FastAPI](https://fastapi.tiangolo.com) - API framework
- [TailwindCSS](https://tailwindcss.com) - CSS framework
- [Clerk](https://clerk.com) - Authentication
- [Cloudflare](https://cloudflare.com) - CDN & Tunneling
- [Docker](https://docker.com) - Containerization

---

## 📞 Support

For issues, bug reports, or feature requests, please open an issue on [GitHub Issues](https://github.com/PC0staS/toolbox/issues).

---

**Last Updated**: April 23, 2026
