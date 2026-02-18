---
title: History (Tab 7)
description: Full-text session search with temporal patterns and content preview.
section: Features
order: 3.7
---

## Overview

The History tab provides full-text search across all session content with temporal pattern analysis.

## Features

- **Full-text search** using SQLite FTS
- **Temporal patterns** showing activity over time
- **Content preview** with keyword highlighting
- **Filters** by date range, model, project

## Search

Press `/` in the History tab to enter search mode. Queries search across:

- Session messages (user + assistant)
- Tool calls and results
- File paths mentioned in sessions

## CLI Search

```bash
ccboard search "refactor auth"
ccboard search "bug fix" --json
```
