# Architecture rules

- Sharing controls use primary-domain article URLs, never backend redirect URLs; reliable per-article social previews require metadata in the initial HTML response, not React-only updates. Publications reader URLs retain the selected title in their query string so shared links reopen the same article.

- Store congress article text and structured headings/lists in a dedicated content module; Publications and Education read from that shared content, preserving the uploaded originals.
- Resolve the main congress paper from shared static content in News, its article reader, the homepage and congress event links, so all placements preserve the same text and proposal status without duplicate database records.

- Keep the inaugural review's PDF URL in the shared issue content module, sourced from a Lovable Assets pointer, so all newsletter download links use the same uploaded edition.