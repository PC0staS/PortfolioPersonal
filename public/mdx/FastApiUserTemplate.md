---
route: 'FastApiUserAuth'
title: 'User Auth — FastApi Template'
description: 'A production-ready user authentication template built with FastAPI, PostgreSQL, and JWT cookie-based auth. Includes registration, login, refresh tokens, and a full pytest suite.'
pubDate: 'Sep 18 2025'
heroImage: 'FastApiUserTemplate_xsxrlc'
githubRepo: 'https://github.com/PC0staS/FastApiUserTemplate'
---

# FastAPI User Template

A complete, production-ready template for user authentication with FastAPI, PostgreSQL, and JWT-based cookie authentication. Designed as a starting point for projects that need a secure user system without rebuilding auth from scratch.

**Code:** [GitHub](https://github.com/PC0staS/FastApiUserTemplate)

## What it does

This template provides a fully implemented authentication system: user registration, login, logout, and token refresh using HTTP-only cookies to avoid JWT exposure in the frontend. Passwords are hashed with bcrypt, and PostgreSQL stores user records with UUID primary keys. All inputs are validated through Pydantic v2 schemas.

A comprehensive test suite covers the full auth flow — registration, login, logout, token refresh, and protected route access. The project is containerized with Docker Compose and uses Poetry for dependency management.

## Tech stack

- **Backend:** FastAPI, Python 3.11+
- **Database:** PostgreSQL 13, SQLAlchemy 2.0+ ORM
- **Auth:** JWT tokens, bcrypt password hashing, HTTP-only cookies
- **Validation:** Pydantic v2
- **Testing:** pytest with FastAPI TestClient
- **Infrastructure:** Docker, Docker Compose, Poetry

## Key features

- JWT authentication with HTTP-only cookie storage (no frontend token exposure)
- Registration, login, logout, and automatic token refresh endpoints
- Bcrypt password hashing with automatic salting
- UUID primary keys and Pydantic input validation
- Full auth flow test suite (pytest with coverage)
