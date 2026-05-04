---
route: 'cafe-shop'
title: 'CafeShop — Full-stack E-commerce'
description: 'A full-stack e-commerce platform for managing coffee products, featuring a FastAPI REST API with JWT auth, a Next.js 15 admin panel, and multi-image product management.'
pubDate: 'Sep 7 2025'
heroImage: 'CafeShop_301h1dc'
githubRepo: 'https://github.com/PC0staS/CafeShop'
---

# CafeShop

A full-stack e-commerce platform for coffee product management, implementing CRUD operations, image handling, and an admin panel with JWT authentication.

**Code:** [GitHub](https://github.com/PC0staS/CafeShop)

## What it does

CafeShop provides a complete product management system with a public product catalog and a protected admin dashboard. The backend exposes a paginated product API with endpoints for creating, updating, and deleting products, including support for multiple images per product.

The admin panel is protected by JWT authentication with refresh tokens and middleware verification. Product creation supports uploading images alongside metadata in a single request. The frontend uses Next.js 15 with the App Router and View Transitions for smooth navigation. All services are orchestrated with Docker Compose, running the FastAPI backend alongside a PostgreSQL database.

## Tech stack

- **Frontend:** Next.js 15, React 19, TypeScript, TailwindCSS
- **Backend:** FastAPI, Python, SQLAlchemy, Pydantic, PyJWT
- **Database:** PostgreSQL 16
- **Infrastructure:** Docker, Docker Compose

## Key features

- Full CRUD API for products with pagination and multi-image support
- JWT authentication with refresh tokens and admin middleware
- Protected admin dashboard for product and inventory management
- Public product catalog with image galleries
- View Transitions API for smooth page navigation
