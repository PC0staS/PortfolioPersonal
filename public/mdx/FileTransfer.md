---
route: 'file-transfer'
title: 'FileTransfer - Flask'
description: 'A local network file sharing platform with chunked uploads for large files, manual user approval system, and direct download links. Built with Flask, SQLite, and Docker.'
pubDate: 'Jan 10 2025'
heroImage: 'Filetransfer_ylsbji'
githubRepo: 'https://github.com/Pc0staS/FileTransfer'
demoLink: 'https://files.jonastown.es'

---

# FileTransfer

A web-based file sharing platform designed for local networks. Supports chunked uploads for large files, a manual user approval system, and direct download links without authentication.

**Demo:** [files.jonastown.es](https://files.jonastown.es) | **Code:** [GitHub](https://github.com/Pc0staS/FileTransfer)

## What it does

FileTransfer lets users upload and share files over a local network through a clean web interface. Files are organized per user with automatic expiration after five days. The chunked upload system handles files over 200 MB with resumable transfers and individual progress tracking for each file.

New user registrations go through a manual approval workflow (pending, active, rejected states). Public download links allow recipients to download files without logging in, preserving original filenames.

## Tech stack

- **Backend:** Python, Flask, SQLite, Werkzeug (password hashing)
- **Frontend:** Bootstrap 5, vanilla JavaScript (drag & drop, progress tracking)
- **Infrastructure:** Docker, Docker Compose, Nginx, Cloudflare Tunnel

## Key features

- Drag-and-drop file uploads with per-file progress tracking
- Chunked uploads for files over 200 MB with automatic resume
- Manual user approval system (pending, active, rejected states)
- Public download links that preserve original filenames
- Automatic file expiration after 5 days
