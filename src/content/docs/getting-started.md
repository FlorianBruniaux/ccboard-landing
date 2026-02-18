---
title: Getting Started
description: Install ccboard and start monitoring your Claude Code sessions in under 2 minutes.
section: Getting Started
order: 1
---

## What is ccboard?

ccboard is a unified TUI/Web dashboard for Claude Code management. It provides 9 interactive tabs for monitoring sessions, analyzing costs, managing config, hooks, agents, and MCP servers. Built in Rust with a 5.8MB binary.

## Quick Start

### 1. Install

The fastest way to get started:

```bash
brew tap FlorianBruniaux/tap
brew install ccboard
```

Or via Cargo:

```bash
cargo install ccboard
```

### 2. Launch

```bash
# TUI (default)
ccboard

# Web interface
ccboard web --port 3333

# Both TUI + Web
ccboard both --port 3333
```

### 3. Navigate

- Press `1-9` to jump to any tab
- Use `j/k` for vim-style navigation
- Press `/` to search within tabs
- Press `?` for help

## What You'll See

On first launch, ccboard scans your `~/.claude/` directory and builds a SQLite cache. This takes ~20 seconds the first time, then ~224ms on subsequent launches (89x speedup).

The dashboard shows:

- **Tab 1 - Dashboard**: Key metrics, model usage, 7-day activity
- **Tab 2 - Sessions**: All sessions with live process detection
- **Tab 3 - Config**: Cascading config viewer (global/project/local)
- **Tab 4 - Hooks**: Event-based hooks with syntax highlighting
- **Tab 5 - Agents**: Custom personas and commands browser
- **Tab 6 - Costs**: Token analytics with 4 sub-views
- **Tab 7 - History**: Full-text search with temporal patterns
- **Tab 8 - MCP**: Server status detection
- **Tab 9 - Analytics**: Budget tracking, trends, and 30-day forecasting

## Requirements

- **Rust 1.85+** (for cargo install only, not needed with Homebrew)
- **Claude Code** installed (`~/.claude/` directory must exist)
- macOS (fully tested), Linux (community-tested), or Windows (experimental)

## Next Steps

- [Installation methods](/docs/installation/) for more options
- [9 Tabs Overview](/docs/tabs/) to explore each feature
- [Configuration](/docs/configuration/) to customize ccboard
