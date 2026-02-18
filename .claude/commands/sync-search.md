---
description: Sync the Cmd+K search index with actual site content (pages + docs)
---

Update the search index to reflect all content currently in the site. This is an assisted update: Claude analyzes the site content — including content collections — and proposes missing entries.

## Steps

1. Read the current search index:
```
Read src/data/search-index.ts
```

2. Scan site content:
```
ls src/pages/
ls src/pages/docs/
ls src/pages/cheatsheet/
ls src/pages/faq/
ls src/content/docs/
ls src/content/docs/tabs/
```

3. For each doc in `src/content/docs/` and `src/content/docs/tabs/`, read its frontmatter:
   - `title` → use as entry title
   - `description` → use as part of keywords
   - `section` → use as category
   - File path → derive URL (e.g. `getting-started.md` → `/docs/getting-started/`)

4. Compare index vs actual content — identify all entries NOT present in `SEARCH_INDEX`.

5. For each missing entry, propose a `SearchEntry` object with:
   - Unique `id` (pattern: `doc-{slug}` for docs, `doc-tab-{slug}` for tabs)
   - `title` from frontmatter
   - `keywords` from title + description + file slug (lowercase)
   - `category` from frontmatter `section`
   - `url` as `/docs/{slug}/` or `/docs/tabs/{slug}/`
   - `source: 'landing'`

6. Also check for missing page entries: `/docs/faq/`, `/docs/cheatsheet/`.

7. Show all proposed entries and ask for confirmation before editing.

8. After confirmation, add entries to the appropriate section in `src/data/search-index.ts`.

9. Verify no TypeScript errors:
```bash
pnpm build
```

10. Report: total entries before → after, build status.

## Context

- **Index**: `src/data/search-index.ts`
- **Doc pages**: `src/content/docs/*.md` (8 main docs) + `src/content/docs/tabs/*.md` (10 tab docs)
- **Site pages**: `src/pages/` — docs use `[...slug].astro` dynamic routing
- URL pattern for docs: `/docs/{filename-without-extension}/`
- URL pattern for tabs: `/docs/tabs/{filename-without-extension}/`