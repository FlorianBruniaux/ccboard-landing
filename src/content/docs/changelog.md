---
title: Changelog
description: Release history and notable changes for ccboard.
section: Resources
order: 12
---

## v0.21.0 — Brain tab + Third-party Sessions + Code Metrics (2026-03-28)

- **Brain tab** (key `b`): cross-session knowledge base powered by hooks. `session-stop.sh` auto-extracts progress, decisions, blockers, patterns, and fixes into `~/.ccboard/insights.db`. `session-start.sh` injects recent context at session start. Filterable by type (`←`/`→`), expandable detail pane, archive (`d`), refresh (`r`).
- **Third-party session imports**: Cursor (`state.vscdb`), Codex CLI (`rollout-*.jsonl`), and OpenCode (`opencode.db`) sessions imported alongside Claude Code — opt-in, yellow badge in Sessions tab.
- **Code Metrics**: `+N/-N` diff badge in Sessions list and detail pane, computed from Edit/Write tool inputs during indexing.
- `/ccboard-remember` skill for storing insights directly from any Claude session.

## v0.20.0 — Analytics Costs + Pattern Discovery + MCP Stats (2026-03-28)

- **Analytics — Per-Tool Cost Breakdown** (`Costs` sub-tab): scrollable table — Tool | Calls | Tokens | % Total | Est. Cost | $/Call, with red/yellow hotspot coloring.
- **Analytics — Pattern Discovery** (`Discover` sub-tab): press `r` to scan sessions, extract recurring user message patterns via n-gram analysis, surface CLAUDE.md / Skill / Command suggestions.
- **MCP — Server Usage Stats**: press `s` in MCP tab for a usage table — Server | Calls | Sessions | Last Seen.
- **TUI Smoke Tests**: 12 tests added, one per tab. Total: 492 tests.

## v0.19.0 — Agent Invocation Counts + Session Graph + Bookmarks (2026-03-27)

- **Agents**: real invocation counts for agents discovered from sessions (no local frontmatter required).
- **Sessions — Subagent Graph**: sessions that spawned subagents show a tree in the detail pane with per-child token breakdown.
- **Sessions — Bookmarks** (`b` to toggle, `B` to filter): tag sessions with labels, persisted to `~/.ccboard/bookmarks.json`.
- **Sessions — LLM Summaries** (`ccboard summarize <id>`): AI summary cached to `~/.ccboard/summaries/`.
- **Sessions — Model Switching Timeline**: detail pane shows ordered model segments `Opus 4.5 (8) → Sonnet 4.6 (15)`.
- **Analytics — Configurable Anomaly Thresholds**: tune z-score and spike thresholds via `settings.json`.
- **Dashboard — Context Saturation Trend**: linear regression predicts sessions until 85% context breach.

## v0.18.0 — Live Sessions Panel on Web + claude-mem (2026-03-27)

- **Web Dashboard — Live Sessions Panel**: real-time list of running Claude Code sessions via SSE, matching TUI live process view.
- **Brain page — claude-mem Integration**: session summaries from `claude-mem` indexed and searchable in the Brain tab.
- **Settings Hot-Reload Toast**: changing `settings.json` while running shows a "Settings reloaded" toast.
- **Hook State TTL**: stale `Running`/`WaitingInput` sessions auto-pruned after 10 min.

## v0.17.0 — Waiting Answers Panel (2026-03-24)

- **Sessions — Waiting Answers panel**: when live sessions are waiting for user input, a split panel highlights them with idle time at a glance.
- **Dashboard — Max 20x tip**: contextual hint appears when Max 5x plan is detected, surfacing the `max20x` override path.

## v0.16.0 — Conversation Viewer + Responsive Heatmap (2026-03-23)

- **Conversation Viewer** (`Enter` in Sessions): full JSONL replay with tool call visualization (grouped, collapsible), regex search (`/`), HTML export with syntax highlighting (40+ languages).
- **Activity heatmap responsive layout**: fills available vertical space, scales with terminal width.
- Fix: `?` and `:` keybindings now work correctly on macOS.

## v0.15.5 — Conversation Viewer Enhancements (2026-03-20)

- Tool call visualization: collapsed `▶ 2 tool call(s)`, expanded with key param per tool.
- Regex search in replay viewer: `/` to activate, `n`/`N` to navigate, yellow highlights.
- HTML export: syntect syntax highlighting (40+ languages, InspiredGitHub theme).

## v0.14.0 — Live Session Monitoring (2026-03-19)

- **Hook-based live monitoring**: `PreToolUse`/`PostToolUse` hooks update session status (`Running` / `WaitingInput` / `Stopped`) in real time.
- **`ccboard setup`**: installs monitoring hooks automatically.
- Live sessions displayed in TUI Sessions tab and Web Sessions page with CPU/RAM/Tokens.

## v0.13.0 — Tool Cost Analytics (2026-03-15)

- Per-tool token attribution on `SessionMetadata`: `tool_token_usage` map.
- Tool chain analysis (bigram/trigram) surfaced in Analytics → Plugins sub-tab.
- Cost optimization suggestion engine: dead plugins, high-cost tools, model downgrade opportunities.
- `GET /api/analytics/suggestions` endpoint.

## v0.12.0 — `ccboard discover` (2026-03-13)

- **`ccboard discover`**: analyzes session history via n-gram pattern extraction, suggests CLAUDE.md rules, skills, and commands. Cross-project patterns get a 1.5× bonus. `--since`, `--min-count`, `--top`, `--json`, `--llm` flags.

## v0.11.2 — Homebrew Build Fix (2026-03-09)

- `cargo build --all` now succeeds without `dist/` (e.g. `brew install --build-from-source`). Missing frontend replaced with a minimal placeholder page.

## v0.11.1 — Web Interface Fix for Linux (2026-03-06)

- **WASM frontend embedded in binary**: `ccboard web` now works out of the box when installed via Homebrew or downloaded from GitHub Releases — no source tree or `trunk build` needed at runtime
- Fix: 404 errors on Linux with installed binaries resolved via `rust-embed` (assets compiled into the binary at build time)

## v0.11.0 — Activity Security Audit + Full-Text Search (2026-03-05)

- **Activity tab** (press `a`): on-demand per-session security audit with Sessions view (security badges) and Violations view (cross-session alert feed sorted Critical → Warning → Info)
- **6 alert types**: credential exposure (`sk-`, `ghp_`, `AKIA`…), destructive commands (`rm -rf`, `git push --force`, `DROP TABLE`…), external data exfiltration, scope violations, force-push detection
- **SQLite activity tables** (schema v6): `activity_cache` + `activity_alerts` + FTS5 `session_fts` — atomic writes, TOCTOU-free, mtime-based invalidation
- **Batch scan**: `r` to scan all sessions with 4-concurrent semaphore, live progress counter
- **Search tab**: FTS5 full-text search across all sessions with ranked snippets (TUI + `/api/search` endpoint)
- **Pricing fix**: `claude-opus-4-5` and `claude-opus-4-6` short model IDs now resolve to correct pricing ($5.00/MTok)
- **31 tests** added (29 unit + 2 cross-module)

## v0.10.0 — Export Features (2026-02-18)

- `ccboard export` subcommands: `conversation`, `sessions`, `stats`, `billing`
- CSV, JSON, Markdown export formats
- Date filter (`--since 7d`) for sessions export

## v0.9.0 — Light Mode (2026-02-18)

- Full light theme activated via `Ctrl+T` — 11 tabs + 5 components migrated to centralized `Palette` system
- Theme persistence saved to `~/.claude/cache/ccboard-preferences.json`

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
