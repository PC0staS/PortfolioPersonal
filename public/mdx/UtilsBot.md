---
route: 'utilsbot'
title: 'UtilsBot - Discord Bot'
description: 'A multi-purpose Discord bot with 30+ slash commands for network diagnostics, system administration on Raspberry Pi, PDF/video processing, reminders, weather, translation, and cryptographic utilities.'
pubDate: 'Nov 20 2024'
heroImage: 'utilsbot_lq89oa'
githubRepo: 'https://github.com/Pc0staS/UtilsBot'
---

# UtilsBot

A multi-purpose Discord bot providing 30+ slash commands for network diagnostics, system administration, file processing, productivity, and cryptography. Designed to run on a Raspberry Pi for home server management.

**Code:** [GitHub](https://github.com/Pc0staS/UtilsBot)

## What it does

UtilsBot serves as a Swiss Army knife for Discord servers, bridging chat interactions with system-level operations. It can ping hosts, run speed tests, look up WHOIS records, and list devices on the local network. System administration commands allow remote reboot, shutdown, package updates, and command execution on the host Raspberry Pi.

Productivity features include one-off reminders, recurring habit reminders, weather lookups via Open-Meteo, text translation, and dictionary definitions. File processing commands handle PDF merging, video concatenation, web screenshots, and QR code generation. Cryptographic commands offer Fernet encryption, multi-algorithm hashing, and password generation.

## Tech stack

- **Language:** Python 3.10+
- **Discord:** discord.py 2.x (slash commands)
- **Async:** asyncio, aiohttp
- **APIs:** MyMemory (translation), Open-Meteo (weather), DictionaryAPI, QR Server, is.gd (URL shortening)
- **System:** psutil, subprocess, ffmpeg, pypdf, cryptography

## Key features

- Network tools: ping, speed test, WHOIS, local device scanning
- Remote system control: reboot, shutdown, package updates, command execution
- File processing: PDF merge, video concatenation, web screenshots, QR codes
- Productivity: reminders, recurring habit reminders, weather, translation, definitions
- Cryptographic utilities: Fernet encryption, SHA/MD5 hashing, password generation
