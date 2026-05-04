---
route: "keyboard-tester"
title: "Keyboard Tester — Vite"
description: "A web-based keyboard testing tool that visualizes key presses, combinations, and ghosting issues in real time. Supports multiple layouts with key highlighting and keystroke counting."
pubDate: "Sep 15 2025"
heroImage: "KeyboardTester_kl3ja"
githubRepo: "https://github.com/Pc0staS/Keyboard-Tester"
demoLink: "https://keyboardtester.pablocostas.dev"
---

# Keyboard Tester

A web tool for verifying keyboard functionality in real time: which keys are detected, how many simultaneous presses register, and whether ghosting issues exist.

**Demo:** [keyboardtester.pablocostas.dev](https://keyboardtester.pablocostas.dev) | **Code:** [GitHub](https://github.com/Pc0staS/Keyboard-Tester)

## What it does

Keyboard Tester captures `keydown` and `keyup` events to display an interactive visual representation of the keyboard. Pressed keys are highlighted on a layout-specific grid, with support for ES, ANSI, and ISO layouts. A keystroke counter tracks total presses and simultaneous key combinations, including modifier keys.

The tool also detects key repeat frequency and displays Caps Lock, Num Lock, and Scroll Lock status. A fullscreen mode and quick reset button make it convenient for testing after cleaning or repairing a keyboard.

## Tech stack

- **Frontend:** Next.js, React, TypeScript, TailwindCSS
- **Input:** Native keyboard events (keydown/keyup) with state management and prevention handling

## Key features

- Live key press detection with layout-specific highlighting (ES, ANSI, ISO)
- Keystroke counter and simultaneous key combination detection
- Key repeat rate indicator and lock key status display (Caps, Num, Scroll)
- Fullscreen mode and quick reset for convenient testing
