# ccboard Landing Page

Static landing page for [ccboard](https://github.com/FlorianBruniaux/ccboard) - The dashboard Claude Code deserves.

**Live**: https://ccboard.bruniaux.com

## Features

- 🎨 **Light/dark theme** toggle with OS preference detection
- 📱 **Responsive** design (mobile, tablet, desktop)
- 🔍 **Search** with Cmd+K (MiniSearch integration)
- ⚡ **Static** - No build step required
- ♿ **Accessible** - WCAG 2.1 compliant
- 📊 **SEO optimized** - Schema.org structured data + sitemap.xml

## Structure

```
ccboard-landing/
├── index.html              # Main landing page (~1000 lines)
├── styles.css              # Stylesheet (~1200 lines, light/dark themes)
├── search.js               # Search functionality (copied from cc-copilot-bridge)
├── search-data.js          # Search index (features, FAQ, docs)
├── favicon.svg             # Terminal icon (orange accent)
├── robots.txt              # SEO (references sitemap.xml)
├── sitemap.xml             # Sitemap for search engines
├── CNAME                   # GitHub Pages custom domain
├── README.md               # This file
├── CLAUDE.md               # Instructions for Claude Code
├── .claude/
│   └── settings.local.json # Permission presets for local development
├── assets/
│   └── screenshots/        # 13 PNGs (copied from ccboard repo)
└── .github/
    └── workflows/
        └── static.yml      # GitHub Pages deployment
```

## Sections

1. **Header** (sticky) - Logo, nav links, search, GitHub star button
2. **Hero** - Badges, title, tagline, stats, CTAs
3. **Architecture** - ASCII diagram of stack (ccboard → tui/web → core)
4. **Features Grid** - 9 cards (Dashboard, Sessions, Config, Hooks, Agents, Costs, History, MCP, Analytics)
5. **Performance** - 89x speedup, 10K+ sessions, >99% cache hit rate
6. **Screenshots Gallery** - 9 tabs (Dashboard, Sessions, Config, Hooks, Agents, Costs, History, MCP, Analytics)
7. **Competitive Landscape** - Comparison table (ccboard vs agtrace vs claudelytics vs ccusage)
8. **Install** - cargo install, launch commands, keybindings
9. **FAQ** - 8 questions (What is ccboard?, How does cache work?, etc.)
10. **Related Projects** - 3 cards (Claude Code Ultimate Guide, cc-copilot-bridge, ccusage)
11. **Footer** - Brand, links, meta

## Local Development

```bash
# Clone repository
git clone https://github.com/FlorianBruniaux/ccboard-landing.git
cd ccboard-landing

# Serve locally (any static server)
python -m http.server 8000
# or
npx serve

# Open http://localhost:8000
```

## Deployment

**GitHub Pages** via Actions (automatic):

1. Push to `main` branch
2. GitHub Actions workflow (`static.yml`) deploys to `gh-pages`
3. Custom domain configured via `CNAME` file
4. DNS: CNAME `ccboard` → `florianbruniaux.github.io.`
5. HTTPS enforced (Let's Encrypt certificate)

## Custom Domain Setup

**DNS Configuration (OVH)**:

```bash
# Verify DNS propagation
dig ccboard.bruniaux.com CNAME +short

# Should return: florianbruniaux.github.io.
```

**GitHub Pages API**:

```bash
# Configure custom domain
gh api repos/FlorianBruniaux/ccboard-landing/pages -X PUT \
  -f cname=ccboard.bruniaux.com \
  -f https_enforced=true
```

## Light/Dark Theme

**Auto-detection with manual override**:
- Detects OS preference (`prefers-color-scheme`)
- User preference persists in `localStorage`
- Anti-FOUC script runs before CSS loads
- Smooth transitions (0.3s, respects `prefers-reduced-motion`)
- Toggle button in header with sun/moon icons

**CSS Architecture**:
- `:root` defines **light theme** variables (default)
- `[data-theme="dark"]` overrides with **dark theme** variables
- All hardcoded colors replaced with CSS custom properties
- Theme-aware shadows, borders, and button colors

**Palette**:
- **Light**: `--bg-primary: #fafbfc`, `--accent: #ea580c` (Orange 600)
- **Dark**: `--bg-primary: #0d1117`, `--accent: #f97316` (Orange 500)

## Design Decisions

| Decision | Choice | Justification |
|----------|--------|---------------|
| **Base pattern** | cc-copilot-bridge | Simplest, same dev audience |
| **Theme** | Light/dark toggle | OS preference + manual override, better accessibility |
| **Accent color** | Orange/Rust | Rust language association, adjusted per theme |
| **i18n** | EN only | boldguy rule |
| **Build step** | None | Static pure HTML/CSS/JS |

## Analytics

- **Google Analytics 4**: `G-WH1C8CM79E` (shared across all bruniaux.com landings)
- **Tracking events**: `github_click` (project: 'ccboard', link_type: 'star_button'|'hero_cta')

## SEO

- **Canonical URL**: https://ccboard.bruniaux.com/
- **Title**: "ccboard - The Dashboard Claude Code Deserves"
- **Description**: "Monitor sessions, analyze costs, manage config — 9 interactive tabs in a 5.8MB binary. 89x faster with SQLite cache."
- **Schema.org**: `SoftwareApplication` type with version 0.5.0
- **OG Image**: TODO (1200x630, dashboard screenshot + branding)

## License

MIT OR Apache-2.0 (same as ccboard)

---

**Repository**: https://github.com/FlorianBruniaux/ccboard-landing
**Live Site**: https://ccboard.bruniaux.com
**Main Project**: https://github.com/FlorianBruniaux/ccboard
