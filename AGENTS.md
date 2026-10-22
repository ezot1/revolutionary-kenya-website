# Architecture rules

- Admin pages share AdminLayout and scoped workspace tokens, keeping editorial navigation consistent without changing public pages or access controls.

- Sharing controls use primary-domain article URLs, never backend redirect URLs. Per-article social preview tags (title, description, photo, canonical) come from each route's server-rendered `head()` via the shared `src/lib/shareMeta.ts` helper, because crawlers only read the initial HTML. Publications reader URLs retain the selected title in their query string so shared links reopen the same article.
- The app runs on TanStack Start file routes under `src/routes/`; pages in `src/pages/` keep react-router-style calls through `src/lib/router-compat.tsx`, so routing call sites stay unchanged after the upgrade.

- Store congress article text and structured headings/lists in a dedicated content module; Publications and Education read from that shared content, preserving the uploaded originals.
- Resolve the main congress paper from shared static content in News, its article reader, the homepage and congress event links, so all placements preserve the same text and proposal status without duplicate database records.

- Keep the inaugural review's PDF URL in the shared issue content module, sourced from a Lovable Assets pointer, so all newsletter download links use the same uploaded edition.