---
route: 'blog-react-native'
title: 'BlogReactNative — Full-Stack'
description: 'A cross-platform mobile blog app built with React Native and Expo, backed by a Flask REST API. Features JWT authentication, CRUD posts, camera/gallery image uploads, and real-time search.'
pubDate: 'Aug 30 2025'
heroImage: 'BlogReactNative_nztq0t'
githubRepo: 'https://github.com/PC0staS/BlogReactNative'
---

# BlogReactNative

A cross-platform mobile blog application built with React Native and Expo, backed by a Flask REST API. Users can create, read, edit, and delete posts with image attachments and in-app search.

**Code:** [GitHub](https://github.com/PC0staS/BlogReactNative)

## What it does

BlogReactNative is a full-stack mobile app that lets users manage blog posts from their phone. The frontend handles user registration and login with JWT token verification, post creation with camera or gallery image uploads (converted to Base64), and a searchable post list sorted by date. Navigation uses Expo Router with file-based routing.

The backend provides REST endpoints for authentication and CRUD post operations, backed by a SQLite database. Posts support title, content, image, and author metadata. The project runs on iOS, Android, and web through Expo's unified platform.

## Tech stack

- **Frontend:** React Native, Expo 53, TypeScript, Expo Router
- **Animation:** React Native Reanimated
- **Backend:** Flask, Flask-JWT-Extended, Flask-CORS, SQLAlchemy
- **Storage:** SQLite, AsyncStorage (local persistence)
- **Media:** Expo Image Picker (camera and gallery access)

## Key features

- JWT authentication with registration, login, and token verification
- CRUD operations for blog posts with title, content, images, and author metadata
- Camera and gallery image upload with Base64 encoding
- Real-time post search by title or content
- Cross-platform support: iOS, Android, and web via Expo
