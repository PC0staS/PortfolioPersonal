---
route: 'wordleClon'
title: 'wordleClon'
description: 'An interactive Wordle clone built with React, TypeScript, and Vite. Features word validation via the RAE API, animated cell flips, and support for both limited and unlimited attempts.'
pubDate: 'Sep 22 2025'
heroImage: 'WordleClon_zvr6di'
githubRepo: 'https://github.com/PC0staS/WordleClon'
demoLink: 'https://wordleClon.pablocostas.dev'
---

# WordleClon

An interactive clone of the Wordle game built with React and TypeScript. The goal is to guess a five-letter word within a limited number of attempts, with faithful animation and color logic matching the original game.

**Demo:** [wordleClon.pablocostas.dev](https://wordleClon.pablocostas.dev) | **Code:** [GitHub](https://github.com/PC0staS/WordleClon)

## What it does

WordleClon replicates the core Wordle gameplay: players submit five-letter guesses and receive color-coded feedback (green for correct position, yellow for wrong position, gray for absent letters). It implements the original Wordle coloring logic for repeated letters, marking greens first and then yellows only if available instances remain in the solution.

Invalid words are validated against the RAE (Real Academia Española) API and trigger a shake animation. A modal at the end of each game displays the word's definition. Players can toggle between limited and unlimited attempt modes.

## Tech stack

- **Frontend:** React, TypeScript, Vite, TailwindCSS
- **Animation:** framer-motion (cell flip, row spring, input shake)
- **API:** RAE API (word validation and definitions)

## Key features

- Accurate Wordle color logic for repeated letters
- Cell flip animation with staggered reveal
- Word validation against the RAE dictionary
- Shake animation on invalid word submission
- Victory/defeat modals with word definitions
- Toggle between limited and unlimited attempts
