---
title: Config (Tab 3)
description: Cascading configuration viewer with 3-level merge and real-time search.
section: Features
order: 3.3
---

## Overview

The Config tab provides a 3-level cascading configuration viewer, showing how global, project, and local configs merge together.

## 3-Level Merge

| Level | Path | Priority |
|-------|------|----------|
| Global | `~/.claude/config.json` | Lowest |
| Project | `.claude/config.json` | Medium |
| Local | `.claude/config.local.json` | Highest |

Values cascade: local overrides project, project overrides global. The Config tab shows all three levels side by side with the merged result.

## Features (v0.5.0+)

- **Real-time search** with highlighting
- **One-click JSON copy** of any config value
- **Diff view** showing which level overrides what
- **Edit**: press `e` to open config file in `$EDITOR`
