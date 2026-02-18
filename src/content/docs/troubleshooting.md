---
title: Troubleshooting
description: Common issues and solutions for ccboard installation and usage.
section: Resources
order: 11
---

## Common Issues

| Issue | Solution |
|-------|----------|
| Slow first startup | Normal. Cache build takes ~20s, then 224ms |
| Data not updating | Press `r` to force refresh |
| Web port in use | Use `--port 8080` (or any free port) |
| Cache corruption | Run `ccboard clear-cache` |
| No sessions found | Verify `~/.claude/sessions/` exists and contains JSONL files |

## Installation Issues

### Homebrew

```bash
# If tap is outdated
brew update
brew upgrade ccboard

# If install fails
brew tap --repair FlorianBruniaux/tap
brew install ccboard
```

### Cargo

```bash
# If build fails
rustup update
cargo install ccboard --force
```

### Permission Errors

```bash
# If ccboard can't read ~/.claude/
ls -la ~/.claude/
# Should be readable by your user
```

## Cache Issues

If ccboard shows stale or incorrect data:

```bash
# Clear and rebuild cache
ccboard clear-cache
ccboard
```

The cache is stored at `~/.cache/ccboard/` and is rebuilt automatically.

## Web Interface Issues

```bash
# Port already in use
ccboard web --port 8080

# Check if server is running
curl http://localhost:3333/
```

## Getting Help

- [GitHub Issues](https://github.com/FlorianBruniaux/ccboard/issues) for bug reports
- [GitHub Discussions](https://github.com/FlorianBruniaux/ccboard/discussions) for questions
