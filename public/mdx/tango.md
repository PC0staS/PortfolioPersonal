---
route: "tango"
title: "Tango — Declarative API Testing CLI"
description: "A declarative CLI tool for API testing. Define HTTP workflows in YAML with request chaining, JSONPath data capture, response assertions, conditional execution, retries with exponential backoff, and shell completions. Written in Go, available on Homebrew, Copr, and .deb."
pubDate: "2026-04-27"
heroImage: "tango"
githubRepo: "https://github.com/pc0stas/tango"
---

# Tango

A declarative API testing CLI that lets you define HTTP workflows in YAML. Chain requests together, capture response data with JSONPath, validate with assertions, control flow with conditions, and retry with exponential backoff — all without writing a single line of code.

**Code:** [GitHub](https://github.com/pc0stas/tango)

## What it does

Tango reads a YAML workflow definition and executes it step by step: each step is an HTTP request with configurable method, URL, headers, and body. Templates resolve variables from config, environment, and previous step captures. Steps can depend on one another explicitly or implicitly (the parser auto-derives dependencies from template references and conditional guards).

After each request, assertions validate the response — status codes, response time, body content, and JSON values via JSONPath. Failed requests can retry with exponential backoff. Conditional steps use `run_if` and `skip_if_failed` to control execution flow. The output is a clean terminal summary showing pass/fail per step, with an option to dump full request/response details.

Tango ships as a single statically-compiled binary and is distributed through Homebrew (macOS), Copr (Fedora/RHEL), and .deb packages (Debian/Ubuntu).

## Tech stack

- **Language:** Go 1.25
- **CLI framework:** Cobra
- **JSONPath:** gjson (tidwall/gjson)
- **YAML parsing:** gopkg.in/yaml.v3
- **Distribution:** Homebrew, Fedora Copr, .deb, GitHub Releases (5-platform cross-compilation)

## Key features

- Define complete API workflows in YAML — no scripting required
- Chain requests with automatic dependency resolution via topological sort (Kahn's algorithm)
- Capture response data with JSONPath and reuse across steps via template syntax
- 15 assertion matchers: status, body equals/contains/matches, JSONPath comparisons, headers, response time
- Conditional execution with `run_if` and `skip_if_failed`
- Retry with exponential backoff and configurable max attempts
- Template resolution in URLs, headers, bodies, and assertion values (`{{ .var }}`, `{{ steps.X.Y }}`, `{{ env.X }}`)
- Shell completions for bash, zsh, and fish
- CI/CD pipeline: cross-compilation, .deb packaging, COPR RPM builds, and automated Homebrew formula updates
