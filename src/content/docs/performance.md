---
title: Performance & Cache
description: How ccboard achieves 89x faster startup with SQLite caching and mtime-based invalidation.
section: Guides
order: 10
---

## 89x Speedup

| Metric | Cold Start | Warm Cache |
|--------|-----------|------------|
| Startup time | ~20s | ~224ms |
| Speedup | 1x | **89x** |
| Cache hit rate | 0% | >99% |

## How It Works

ccboard uses SQLite to cache session metadata with mtime-based invalidation:

1. **First run**: Scans all sessions in `~/.claude/sessions/`, parses JSONL files, stores metadata in SQLite
2. **Subsequent runs**: Checks file mtime against cached mtime. Only re-parses changed files
3. **Invalidation**: Automatic. When a session file changes, its cache entry is refreshed on next access

## Cache Location

```
~/.cache/ccboard/
```

## Cache Management

```bash
# Clear cache (after upgrades or if data seems stale)
ccboard clear-cache

# Cache is rebuilt automatically on next launch
ccboard
```

## Handling Large Datasets

ccboard handles 10,000+ sessions with no performance degradation:

- Session list is paginated in TUI
- Full-text search uses SQLite FTS (Full-Text Search)
- Metadata queries are indexed
- File watcher uses debouncing (500ms) to avoid excessive I/O

## Memory Usage

The binary is 5.8MB. Runtime memory depends on the number of sessions loaded, but typically stays under 50MB even with thousands of sessions.
