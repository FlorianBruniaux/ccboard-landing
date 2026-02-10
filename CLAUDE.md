# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static landing page for [ccboard](https://github.com/FlorianBruniaux/ccboard) - TUI/Web dashboard for Claude Code.

**Live**: https://ccboard.bruniaux.com
**Repository**: https://github.com/FlorianBruniaux/ccboard-landing

## Architecture

### Pure Static Site (No Build Step)

This is intentionally a **zero-build** project:
- Direct HTML/CSS/JS (no transpilation, no bundling, no preprocessing)
- Lazy-loaded dependencies (MiniSearch for search)
- GitHub Pages deployment via Actions workflow

### File Structure & Responsibilities

| File | Purpose | Size | Critical Notes |
|------|---------|------|----------------|
| `index.html` | Single-page landing | ~1000 lines | Contains all 11 sections, Schema.org structured data, theme toggle |
| `styles.css` | Complete stylesheet | ~1200 lines | Light/dark themes with CSS custom properties, transitions |
| `search.js` | Search functionality | ~300 lines | Lazy loads MiniSearch on Cmd+K, manages modal UI |
| `search-data.js` | Search index | ~200 lines | Defines `window.SEARCH_FEATURES`, `SEARCH_FAQ`, `SEARCH_DOCS` arrays |
| `sitemap.xml` | SEO sitemap | 10 lines | Single URL, referenced in robots.txt |
| `assets/screenshots/` | 13 PNGs | ~2MB total | Copied from ccboard repo, referenced in gallery tabs |
| `.github/workflows/static.yml` | GitHub Pages deploy | 44 lines | Automatic deployment on push to main |

### Search Architecture

**Lazy Loading Pattern**:
1. Page loads without MiniSearch library (saves initial bundle)
2. User presses Cmd+K → triggers `loadScript('https://cdn.jsdelivr.net/npm/minisearch@7.1.0/dist/umd/index.min.js')`
3. `buildIndex()` aggregates `window.SEARCH_FEATURES`, `SEARCH_FAQ`, `SEARCH_DOCS`
4. MiniSearch indexes with fields: `['title', 'content', 'category']`
5. Results rendered in modal with keyboard navigation (↑/↓, Enter, Esc)

**To add searchable content**: Edit `search-data.js` and add objects to relevant arrays.

### Theme System

**Light/Dark Theme Toggle**:
- **Auto-detection**: Respects OS preference (`prefers-color-scheme`)
- **Manual override**: User preference persists in `localStorage`
- **Anti-FOUC**: Blocking script in `<head>` sets `data-theme` attribute before CSS loads
- **Smooth transitions**: 0.3s ease (respects `prefers-reduced-motion`)

**CSS Architecture**:
- `:root` → **Light theme** (default)
- `[data-theme="dark"]` → **Dark theme** override
- All hardcoded colors replaced with CSS custom properties

**Design Tokens** (light / dark):
- `--bg-primary`: `#fafbfc` / `#0d1117` (backgrounds)
- `--text-primary`: `#1e293b` / `#c9d1d9` (text)
- `--accent`: `#ea580c` / `#f97316` (orange/rust, adjusted per theme)
- `--header-bg`: `rgba(250, 251, 252, 0.95)` / `rgba(13, 17, 23, 0.95)` (header transparency)

**Toggle UI**:
- Button in header nav (before search)
- Sun icon (visible in dark mode) switches to light
- Moon icon (visible in light mode) switches to dark
- ARIA attributes updated on toggle (`aria-checked`, `aria-label`)

## Development Commands

### Local Development

```bash
# Serve locally (choose one)
python -m http.server 8000
# or
npx serve

# Open http://localhost:8000
```

**No build step needed** - Edit HTML/CSS/JS directly, refresh browser.

### Deployment

**Automatic via GitHub Actions**:
```bash
git add .
git commit -m "feat: update hero section"
git push origin main
# → GitHub Actions workflow runs automatically
# → Deployed to https://ccboard.bruniaux.com in ~1 minute
```

**Manual GitHub Pages Configuration** (if needed):
```bash
gh api repos/FlorianBruniaux/ccboard-landing/pages -X PUT \
  -f cname=ccboard.bruniaux.com \
  -f https_enforced=true
```

### DNS Verification

```bash
# Verify CNAME record propagation
dig ccboard.bruniaux.com CNAME +short
# Should return: florianbruniaux.github.io.
```

## Content Sections (11 Total)

Understanding the section flow is critical for major edits:

1. **Header** (sticky) - Logo, nav, search trigger (Cmd+K), GitHub star button
2. **Hero** - Badges, title, tagline, stats (86 stars, 234 tests, 5.8MB), CTAs
3. **Architecture** - ASCII diagram showing ccboard stack (TUI/Web → core library)
4. **Features Grid** - 9 cards matching ccboard tabs (Dashboard, Sessions, Config, Hooks, Agents, Costs, History, MCP, Analytics)
5. **Performance** - 89x speedup stats, 10K+ sessions analyzed, >99% cache hit rate
6. **Screenshots Gallery** - 6-tab carousel (Dashboard, Sessions, Config, Costs, Analytics, More)
7. **Competitive Landscape** - Comparison table (ccboard vs agtrace vs claudelytics vs ccusage)
8. **Install** - `cargo install ccboard`, launch commands, keybindings table
9. **FAQ** - 8 questions (expandable accordion pattern)
10. **Related Projects** - 3 cards (Claude Code Ultimate Guide, cc-copilot-bridge, ccusage)
11. **Footer** - Brand, social links, license, copyright

**Pattern**: Each section has `id="section-name"` for anchor links in nav.

## Analytics & Tracking

### Google Analytics 4

- **Property ID**: `G-WH1C8CM79E` (shared across all bruniaux.com landings)
- **Custom Events**:
  - `github_click` → tracks GitHub star button clicks
    - `project: 'ccboard'`
    - `link_type: 'star_button' | 'hero_cta'`

**To track new actions**: Add `onclick="gtag('event', 'event_name', {params})"` to elements.

### SEO & Structured Data

**Schema.org `SoftwareApplication` type** (lines 34-50 in index.html):
- `name`: "ccboard"
- `applicationCategory`: "DeveloperApplication"
- `softwareVersion`: "0.5.0" ← **Update on new ccboard releases**
- `license`: MIT OR Apache-2.0

**Sitemap**: `sitemap.xml` at root (referenced in `robots.txt`)
- Single URL: `https://ccboard.bruniaux.com/`
- Update `<lastmod>` when making significant content changes

**Open Graph / Twitter Card**: Meta tags in `<head>` for social sharing previews.

## Design Decisions & Constraints

| Decision | Choice | Rationale |
|----------|--------|-----------|
| **Base pattern** | cc-copilot-bridge landing | Simplest proven pattern, same dev audience |
| **Build complexity** | Zero (pure static) | No maintenance burden, instant edits |
| **i18n** | English only | Per boldguy rule: dev audience, avoid translation overhead |
| **Theme** | Light/dark toggle | OS preference + manual override, better accessibility |
| **Accent color** | Orange/Rust | Rust language association, adjusted per theme (600 light / 500 dark) |
| **Screenshots** | 13 PNGs (~2MB) | Copied from ccboard repo, avoid duplication |

## Common Edit Patterns

### Update Theme Colors

**Light theme** (lines 7-30 in `styles.css`):
```css
:root {
    --accent: #ea580c;  /* Change accent color */
    --bg-primary: #fafbfc;  /* Change background */
}
```

**Dark theme** (lines 52-75 in `styles.css`):
```css
[data-theme="dark"] {
    --accent: #f97316;  /* Change accent color */
    --bg-primary: #0d1117;  /* Change background */
}
```

**Pattern**: Always update both themes for consistency. Test readability in both modes.

### Update ccboard Version

1. Edit `index.html` line 48: `"softwareVersion": "X.Y.Z"`
2. Update hero stats if relevant (stars, tests count)
3. Commit: `git commit -m "chore: bump version to X.Y.Z"`

### Add New Screenshot

1. Copy PNG to `assets/screenshots/`
2. Add tab in Screenshots Gallery section (search for `<!-- Screenshots Gallery -->`)
3. Reference image: `<img src="assets/screenshots/new-feature.png" alt="Description">`

### Modify Search Index

Edit `search-data.js`:
```javascript
window.SEARCH_FEATURES.push({
  id: 'feat-10',
  type: 'feature',
  title: 'New Feature',
  content: 'searchable keywords here',
  category: 'Tab',
  url: '#features'
});
```

### Update Competitive Comparison

Edit comparison table in index.html (search for `<!-- Competitive Landscape -->`):
- Add/remove rows for competitors
- Update feature checkmarks (✓ / –)
- Keep ccboard column first for prominence

## Related Projects Context

This landing complements:
- **ccboard** (main project): https://github.com/FlorianBruniaux/ccboard
- **Claude Code Ultimate Guide**: https://github.com/FlorianBruniaux/claude-code-ultimate-guide
- **cc-copilot-bridge**: https://github.com/FlorianBruniaux/cc-copilot-bridge (design pattern source)

**Consistency requirements**: Keep branding, color scheme, and terminology aligned with main ccboard repo.