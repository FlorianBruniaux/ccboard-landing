---
title: Changelog
description: Release history and notable changes for ccboard.
section: Resources
order: 12
---

## v0.8.0 — Budget Tracking & Quota Management (2026-02-16)

- **Monthly budget limits** with 4-level alert system: Safe / Warning / Critical / Exceeded
- **MTD cost calculation** using token-based prorata (no pricing lookup needed)
- **Monthly projection** with overage warnings based on daily average
- **Budget gauge in TUI Costs tab** — color-coded progress bar (green → yellow → red → magenta)
- **Web UI quota gauge** with real-time SSE updates and graceful fallback
- **`/api/quota` endpoint** returning QuotaStatus JSON
- Configure via `settings.json`: `monthlyLimit`, `warningThreshold` (75%), `criticalThreshold` (90%)

## v0.7.0 — Conversation Viewer with Full-Text Search (2026-02-13)

- **Full-text search** in conversation viewer: press `/` to activate
- Real-time highlighting with yellow background, results counter
- Navigate matches: `n` (next) / `N` (previous), auto-scroll to match
- **Fixed runtime panic** when opening conversation/replay viewers from TUI
- **Fixed overflow panic** in message rendering (dynamic 2–20 line height)
- **Fixed Esc key** not closing viewers (event routing conflict resolved)
- Zero clippy warnings, zero compiler warnings

## v0.6.5 — LiteLLM Dynamic Pricing (2026-02-12)

- **Dynamic pricing** from LiteLLM canonical source (25 Claude models)
- `ccboard pricing update` — fetch latest prices from BerriAI/litellm
- `ccboard pricing clear` — clear local pricing cache
- 7-day cache at `~/.cache/ccboard/pricing.json`
- Embedded pricing as offline fallback

## v0.6.4 — Unicode Fix (2026-02-12)

- **Fixed CLI panic** on emoji/Unicode truncation in `ccboard search` and `ccboard recent`
- Root cause: byte-based slicing inside multi-byte characters (emojis = 4 bytes)
- Fix: character-based truncation with `.chars().take(n).collect()`

## v0.6.3 — Web Startup Performance (2026-02-12)

- **Fixed indefinite startup blocking** with large `~/.claude` directories (1000+ sessions)
- FileWatcher optimized: 26,000 → ~200 files watched (**99% reduction**)
- Analytics computation moved to background tasks for instant startup
- Startup time: indefinite blocking → **< 1 second**

## v0.5.2

- SEO improvements for landing page
- Homebrew installation support
- UX polish and bug fixes

## v0.5.0

Sprint 1 UX/UI improvements with 60% visual enhancement:

- **Visual Design System**: 4-level elevation shadows, improved contrast
- **Config Page**: Real-time search with highlighting, one-click JSON copy
- **Dashboard**: Clickable KPI cards
- **Cost Calculation**: Accurate cost fixes

## v0.4.0

CLI commands expansion:

- `ccboard search "query"` - Full-text session search
- `ccboard recent N` - Recent sessions list
- `ccboard info <id>` - Session metadata
- `ccboard resume <id>` - Resume in Claude CLI
- JSON output support (`--json` flag)

## v0.3.0

- Web interface with 100% TUI feature parity
- Server-Sent Events for real-time updates
- `ccboard both` mode (TUI + Web simultaneously)

## v0.2.0

- SQLite cache with 89x speedup
- Analytics tab with budget tracking and forecasting
- MCP server status detection

## v0.1.0

Initial release:

- 9-tab TUI dashboard
- Session monitoring with live process detection
- Config, Hooks, and Agents browsers
- Cost analytics with model breakdown
