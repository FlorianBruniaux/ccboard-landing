---
title: Web Interface
description: Use ccboard's web interface for browser-based Claude Code monitoring with real-time updates.
section: Guides
order: 9
---

## Overview

ccboard's web interface provides 100% feature parity with the TUI. All 9 tabs are available as responsive web pages with real-time updates via Server-Sent Events (SSE).

## Launch

```bash
# Web only
ccboard web --port 3333

# TUI + Web simultaneously
ccboard both --port 3333
```

Open `http://localhost:3333` in your browser.

## Features

- **9 pages** matching all TUI tabs
- **Real-time updates** via Server-Sent Events (SSE)
- **Responsive design** for mobile, tablet, and desktop
- **Same data** as TUI - both share the same core library

## Custom Port

```bash
ccboard web --port 8080
```

Default port is `3333`.

## Architecture

The web server is built with Axum (Rust async web framework). It serves static HTML/CSS/JS and provides SSE endpoints for live data updates. The file watcher monitors `~/.claude/` changes with 500ms debounce, pushing updates to connected browsers.

```
Browser ← SSE ← Axum Server ← File Watcher → ~/.claude/
```
