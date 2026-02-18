---
title: Configuration Reference
description: Environment variables, CLI arguments, and config file reference for ccboard.
section: Configuration
order: 7
---

## Claude Code Directory

ccboard reads from your Claude Code installation:

| Path | Purpose |
|------|---------|
| `~/.claude/` | Root Claude Code directory |
| `~/.claude/sessions/` | Session data (JSONL files) |
| `~/.claude/config.json` | Global configuration |
| `~/.claude/hooks/` | Event-based hooks |
| `~/.claude/agents/` | Custom AI personas |

## Environment Variables

For automation and CI/CD workflows:

| Variable | Description | Example |
|----------|-------------|---------|
| `CCBOARD_CLAUDE_HOME` | Override Claude home directory | `CCBOARD_CLAUDE_HOME=/custom/path ccboard` |
| `CCBOARD_NON_INTERACTIVE` | Disable interactive prompts | `CCBOARD_NON_INTERACTIVE=1 ccboard stats` |
| `CCBOARD_FORMAT` | Force output format (json/table) | `CCBOARD_FORMAT=json ccboard recent 10` |
| `CCBOARD_NO_COLOR` | Disable ANSI colors | `CCBOARD_NO_COLOR=1 ccboard search "bug"` |

## CI/CD Usage

```bash
# JSON output without colors
CCBOARD_NON_INTERACTIVE=1 CCBOARD_NO_COLOR=1 CCBOARD_FORMAT=json ccboard stats

# Log-friendly output
CCBOARD_NO_COLOR=1 ccboard recent 50 > sessions.log
```

## CLI Commands

```bash
# Session management
ccboard search "query"       # Search sessions by content
ccboard recent 10            # Show 10 most recent sessions
ccboard info <session-id>    # Display detailed session metadata
ccboard resume <session-id>  # Resume session in Claude CLI

# Maintenance
ccboard clear-cache          # Clear SQLite cache
```

All commands support JSON output with `--json` flag.

## Config 3-Level Merge

ccboard's Config tab (Tab 3) shows a 3-level cascading view:

1. **Global** (`~/.claude/config.json`)
2. **Project** (`.claude/config.json` in project root)
3. **Local** (`.claude/config.local.json` in project root)

Values cascade: local overrides project, project overrides global.

## Budget Configuration

Configure monthly budgets in `~/.claude/settings.json`:

```json
{
  "budget": {
    "monthlyBudgetUsd": 50.0,
    "alertThresholdPct": 80.0
  }
}
```

The Analytics tab (Tab 9) shows budget status with visual warnings.
