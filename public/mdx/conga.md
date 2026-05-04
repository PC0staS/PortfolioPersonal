---
route: "conga"
title: "CONGA — Config Generator App"
description: "A lightweight CLI tool for interactively generating infrastructure configuration files: Nginx reverse proxy configs, Docker Compose files, and WireGuard peer setups. Published on Snap, Homebrew, and Copr."
pubDate: "2026-03-22"
heroImage: "conga"
githubRepo: "https://github.com/PC0staS/conga"
---

# CONGA

A lightweight CLI tool for generating infrastructure configuration files through interactive prompts. Designed for developers and sysadmins who need to produce Nginx, Docker Compose, or WireGuard configs quickly without writing them by hand.

**Code:** [GitHub](https://github.com/PC0staS/conga)

## What it does

CONGA provides interactive generators for three common infrastructure configuration types. Instead of copying and modifying boilerplate, users answer a series of prompts and receive a ready-to-use configuration file.

For Nginx, it generates `default.conf` with support for static routes, reverse proxy, HTTPS (via mkcert), and WebSocket proxying. For Docker Compose, it defines services, ports, volumes, and environment variables. For WireGuard, it handles key generation, server and client peer configuration. The tool ships as precompiled binaries and is available through Snap, Homebrew, and Copr.

## Tech stack

- **Language:** Go 1.21
- **Libraries:** promptui, readline (TTY interaction)
- **Distribution:** Snap, Homebrew (tap), Fedora Copr, precompiled binaries

## Key features

- Interactive generators for Nginx, Docker Compose, and WireGuard configurations
- HTTPS/SSL support with mkcert integration for local development
- Multi-platform binaries (Linux x86_64/arm64, macOS Intel/Apple Silicon)
- Available on Snap, Homebrew, and Copr package managers
