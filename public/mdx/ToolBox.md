---
route: "toolbox"
title: "ToolBox"
description: "A full-stack web application providing image processing, PDF manipulation, QR code generation, video downloading, text encoding, and hash generation tools. Built with Astro, GO, and enterprise-grade security."
pubDate: "2026-04-23"
heroImage: "toolbox"
githubRepo: "https://github.com/PC0staS"
demoLink: "https://toolbox.pablocostas.dev"
---

# ToolBox

A full-stack web application offering a suite of productivity and utility tools for image processing, file manipulation, encoding/decoding, and media downloading. Built with a focus on security, performance, and user experience.

**Demo:** [toolbox.pablocostas.dev](https://toolbox.pablocostas.dev) | **Code:** [GitHub](https://github.com/PC0staS)

## What it does

ToolBox provides a collection of browser-based tools to handle common file processing tasks without installing desktop software. Users can compress, convert, blur, and resize images; merge PDFs; generate QR codes; download YouTube videos; and encode/decode text in various formats. Authenticated users access premium features such as 4K video downloads.

The backend implements security measures including HMAC-signed tokens, SSRF prevention, path traversal protection, rate limiting, and command injection hardening. A Redis-based job queue handles asynchronous processing with real-time progress streaming to the client.

## Tech stack

- **Frontend:** Astro 5, React, TypeScript, TailwindCSS
- **Backend:** GO, Gin
- **Authentication:** Clerk
- **Infrastructure:** Docker, Nginx, Cloudflare Tunnel, Ansible
- **Security:** SlowAPI rate limiting, HMAC-SHA256 tokens, input sanitization

## Key features

- Image compression, conversion, blur, and resize with real-time preview
- PDF merging, QR code generation, and YouTube video downloading
- Text encoding/decoding (Base64, Hex, URL) and hash generation (MD5, SHA-256)
- Secure authentication with role-based access control for premium features
- Asynchronous job queue with WebSocket-based progress streaming
- Rate limiting, CORS hardening, and DoS protection
