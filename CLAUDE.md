# Landing Site - ccboard

## URLs

| Environnement | URL |
|---------------|-----|
| **Production** | https://ccboard.bruniaux.com |
| **GitHub Repo** | https://github.com/FlorianBruniaux/ccboard-landing |
| **Main Project** | https://github.com/FlorianBruniaux/ccboard |

## Source de vérité

**Ce site est SECONDAIRE**. La source de vérité est le projet principal ccboard:
`https://github.com/FlorianBruniaux/ccboard`

**Workflow obligatoire**:
1. Modifier d'abord le projet ccboard principal (Cargo.toml, README, features)
2. Puis synchroniser ici

Ne JAMAIS modifier les stats ou métriques ici sans avoir d'abord mis à jour le projet principal.

## Éléments synchronisés depuis ccboard

| Élément | Source (ccboard repo) | Fichiers landing |
|---------|----------------------|------------------|
| Version | `Cargo.toml` version field | index.html (Schema.org line 58, footer) |
| Tabs count | Feature cards in README | index.html (title, meta, hero stats, features section) |
| Tests count | `cargo test` output | index.html (hero stats, meta description) |
| Binary size | `target/release/ccboard` size | index.html (hero stats, meta description) |
| Speedup metric | Benchmark results | index.html (hero stats, performance section) |
| Screenshots | `assets/screenshots/*.png` | index.html (gallery section), copied to landing repo |

## Valeurs actuelles (à maintenir synchronisées)

| Métrique | Valeur | Source |
|----------|--------|--------|
| Version | `0.5.2` | Cargo.toml |
| Tabs | `9` | Feature cards count (Dashboard, Sessions, Config, Hooks, Agents, Costs, History, MCP, Analytics) |
| Tests | `281` | `cargo test --all` output |
| Binary size | `4.2MB` | Release binary size |
| Speedup | `89x` | Cache benchmark (20s → 224ms) |
| Cache hit rate | `>99%` | Performance metrics |

## Emplacements des stats dans index.html

### Version (0.5.2)
- Ligne 94: Schema.org `"softwareVersion": "0.5.2"`
- Footer: Version badge (cheatsheet/index.html)

### Tabs count (9)
- Ligne 6-7: `<title>` and meta description
- Ligne 22: `og:description`
- Ligne 32: `twitter:description`
- Hero stats section
- Features grid (9 feature cards)

### Tests count (281)
- Ligne 22: `og:description`
- Ligne 32: `twitter:description`
- Hero stats section
- cheatsheet/index.html

### Binary size (4.2MB)
- Ligne 7: Meta description
- Ligne 32: `twitter:description`
- Ligne 65: Schema.org description
- Ligne 120: FAQ answer (Schema.org)
- Ligne 317: Hero stats section
- Ligne 760: Competitive landscape text
- Ligne 868: Comparison table
- Ligne 1070: FAQ section HTML
- cheatsheet/index.html

### Speedup (89x)
- Ligne 7: Meta description
- Ligne 22: `og:description`
- Ligne 32: `twitter:description`
- Hero stats section
- Performance section: Details on 20s → 224ms improvement

## Version Sync Policy

**Quand mettre à jour la landing** :
- Nouvelle version majeure/mineure de ccboard (0.5.0 → 0.6.0)
- Ajout de nouvelles features (nouveau tab, nouvelle fonctionnalité)
- Changements significatifs de performance (speedup, cache hit rate)
- Nouvelles screenshots disponibles

**Workflow de synchronisation** :
```bash
# 1. Vérifier la version actuelle dans ccboard
cd /path/to/ccboard
grep '^version' Cargo.toml

# 2. Mettre à jour index.html
# - Ligne 58: Schema.org softwareVersion
# - Footer: Version badge
# - Hero stats si métriques ont changé

# 3. Copier nouveaux screenshots si disponibles
cp /path/to/ccboard/assets/screenshots/*.png assets/screenshots/

# 4. Commit et deploy
git add .
git commit -m "chore: sync with ccboard vX.Y.Z"
git push origin main
```

## Architecture

### Pure Static Site (No Build Step)

This is intentionally a **zero-build** project:
- Direct HTML/CSS/JS (no transpilation, no bundling, no preprocessing)
- Lazy-loaded dependencies (MiniSearch for search)
- GitHub Pages deployment via Actions workflow

### File Structure & Responsibilities

| File | Purpose | Size | Critical Notes |
|------|---------|------|----------------|
| `index.html` | Single-page landing | ~1000 lines | Contains all 11 sections, Schema.org structured data (SoftwareApplication + FAQPage), theme toggle |
| `styles.css` | Complete stylesheet | ~1200 lines | Light/dark themes with CSS custom properties, transitions |
| `search.js` | Search functionality | ~300 lines | Lazy loads MiniSearch on Cmd+K, manages modal UI |
| `search-data.js` | Search index | ~200 lines | Defines `window.SEARCH_FEATURES`, `SEARCH_FAQ`, `SEARCH_DOCS` arrays |
| `sitemap.xml` | SEO sitemap | 10 lines | Single URL, referenced in robots.txt |
| `llms.txt` | AI discoverability | ~150 lines | For LLM consumption (ChatGPT, Claude, Perplexity, etc.) |
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

### SEO Validation

```bash
# Validate Schema.org JSON-LD
# Copy JSON-LD from index.html <script type="application/ld+json">
# Paste to: https://validator.schema.org/

# Test Open Graph tags
# https://www.opengraph.xyz/ (paste URL)

# Verify sitemap
curl https://ccboard.bruniaux.com/sitemap.xml

# Verify llms.txt
curl https://ccboard.bruniaux.com/llms.txt
```

## Content Sections (11 Total)

Understanding the section flow is critical for major edits:

1. **Header** (sticky) - Logo, nav, theme toggle, search trigger (Cmd+K), GitHub star button
2. **Hero** - Badges, title, tagline, stats (86 stars, 234 tests, 5.8MB, 89x speedup), CTAs
3. **Architecture** - ASCII diagram showing ccboard stack (TUI/Web → core library)
4. **Features Grid** - 9 cards matching ccboard tabs (Dashboard, Sessions, Config, Hooks, Agents, Costs, History, MCP, Analytics)
5. **Performance** - 89x speedup stats, 10K+ sessions analyzed, >99% cache hit rate
6. **Screenshots Gallery** - 9-tab carousel with all screenshots
7. **Competitive Landscape** - Comparison table (ccboard vs agtrace vs claudelytics vs ccusage)
8. **Install** - `cargo install ccboard`, launch commands, keybindings table
9. **FAQ** - 8 questions (expandable accordion pattern)
10. **Related Projects** - 3 cards (Claude Code Ultimate Guide, cc-copilot-bridge, ccusage)
11. **Footer** - Brand, social links, license, copyright, version badge

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

**Schema.org types** (lines 44-119 in index.html):
1. **SoftwareApplication** (lines 44-60):
   - `name`: "ccboard"
   - `applicationCategory`: "DeveloperApplication"
   - `softwareVersion`: "0.5.0" ← **Update on new ccboard releases**
   - `license`: MIT OR Apache-2.0

2. **FAQPage** (lines 61-119):
   - 8 questions from FAQ section
   - Structured for rich snippets in Google Search

**Sitemap**: `sitemap.xml` at root (referenced in `robots.txt`)
- Single URL: `https://ccboard.bruniaux.com/`
- Update `<lastmod>` when making significant content changes

**llms.txt**: AI discoverability file for LLM consumption
- Optimized for ChatGPT, Claude, Perplexity, Gemini
- Contains quick facts, features, installation, comparison table

**Open Graph / Twitter Card**: Meta tags in `<head>` for social sharing previews.

## Design Decisions & Constraints

| Decision | Choice | Rationale |
|----------|--------|-----------|
| **Base pattern** | cc-copilot-bridge landing | Simplest proven pattern, same dev audience |
| **Build complexity** | Zero (pure static) | No maintenance burden, instant edits |
| **i18n** | English only | Dev audience, avoid translation overhead |
| **Theme** | Light/dark toggle | OS preference + manual override, better accessibility |
| **Accent color** | Orange/Rust | Rust language association, adjusted per theme (600 light / 500 dark) |
| **Screenshots** | 13 PNGs (~2MB) | Copied from ccboard repo, avoid duplication |
| **SEO Strategy** | Schema.org + llms.txt | Traditional search engines + AI discovery |

## Common Edit Patterns

### Update ccboard Version

**When**: New ccboard release published

1. Check new version in ccboard repo: `grep '^version' Cargo.toml`
2. Edit `index.html` line 58: `"softwareVersion": "X.Y.Z"`
3. Update footer version badge if present
4. Update hero stats if metrics changed (tests, binary size, speedup)
5. Commit: `git commit -m "chore: bump version to X.Y.Z"`

### Update Hero Stats

**When**: Metrics change in ccboard (tests, binary size, speedup)

Edit hero stats section (around line 127):
```html
<div class="hero-stats">
  <div class="stat">
    <span class="stat-value">234</span>
    <span class="stat-label">Tests</span>
  </div>
  <div class="stat">
    <span class="stat-value">5.8MB</span>
    <span class="stat-label">Binary</span>
  </div>
  <div class="stat">
    <span class="stat-value">89x</span>
    <span class="stat-label">Speedup</span>
  </div>
</div>
```

Also update:
- Meta description (line 7)
- `og:description` (line 18)
- `twitter:description` (line 25)

### Add New Screenshot

**When**: New feature added to ccboard with screenshot

1. Copy PNG from ccboard repo: `cp /path/to/ccboard/assets/screenshots/new-feature.png assets/screenshots/`
2. Add tab in Screenshots Gallery section (search for `<!-- Screenshots Gallery -->`)
3. Reference image:
```html
<button class="gallery-tab" data-tab="new-feature">New Feature</button>
<!-- ... -->
<div class="gallery-content" data-content="new-feature">
  <img src="assets/screenshots/new-feature.png" alt="New Feature Description" loading="lazy">
</div>
```

### Modify Search Index

**When**: New searchable content added (features, FAQs, docs)

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

**When**: Competitor features change or new competitor emerges

Edit comparison table in index.html (search for `<!-- Competitive Landscape -->`):
- Add/remove rows for competitors
- Update feature checkmarks (✓ / –)
- Keep ccboard column first for prominence

### Update FAQ

**When**: Common questions change or new FAQ needed

1. Edit HTML in FAQ section (lines ~609-665)
2. Edit FAQPage Schema.org (lines ~61-119)
3. Consider adding to search-data.js for searchability

**Pattern**: Keep HTML and Schema.org in sync.

## Related Projects Context

This landing complements:
- **ccboard** (main project): https://github.com/FlorianBruniaux/ccboard
- **Claude Code Ultimate Guide**: https://github.com/FlorianBruniaux/claude-code-ultimate-guide
- **cc-copilot-bridge**: https://github.com/FlorianBruniaux/cc-copilot-bridge (design pattern source)

**Consistency requirements**: Keep branding, color scheme, and terminology aligned with main ccboard repo.

## Fichiers critiques

- **index.html**: Hero, badges, meta tags, FAQ (HTML + Schema.org), features grid, footer version
- **search-data.js**: Searchable index for Cmd+K
- **styles.css**: Light/dark themes, responsive design
- **sitemap.xml**: SEO sitemap (auto-generated, commit to repo)
- **llms.txt**: AI discoverability (update on major changes)
