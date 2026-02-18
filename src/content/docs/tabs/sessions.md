---
title: Sessions (Tab 2)
description: Browse and search Claude Code sessions with live process detection.
section: Features
order: 3.2
---

## Overview

The Sessions tab lets you browse all Claude Code sessions with sorting, filtering, and live process detection.

## Features

- **Session list** with project name, duration, cost, model used
- **Live process detection**: detects running Claude Code processes and shows CPU/RAM/Token metrics
- **Search**: press `/` to filter sessions by content
- **Sort**: by date, cost, duration, or model
- **Detail view**: press `Enter` to see full session metadata

## CLI Commands

```bash
# List recent sessions
ccboard recent 10

# Search sessions
ccboard search "refactor auth"

# Get session details
ccboard info <session-id>

# Resume a session in Claude CLI
ccboard resume <session-id>
```

All commands support `--json` for programmatic output.
