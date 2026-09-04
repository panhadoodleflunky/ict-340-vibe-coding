# Kampot Durian — a field guide

A researched field guide to Kampot's durian world: the region it grows in, the
varieties grown there, how the fruit actually develops, and what is changing
now — a new export route to China, a counterfeit-labelling problem, and a
climate story growers are reporting season by season.

Live: **https://ict-340-vibe-coding.vercel.app**

Built for ICT 340 — Vibe Coding at the American University of Phnom Penh,
Fall 2026. Compiled by Sovanpanha Nonn.

---

## What makes this one different

An earlier version of this site carried fabricated content — invented speakers,
invented quotes, invented recording dates. It was deleted and rebuilt from
sources. The rule that replaced it governs everything here:

> Every claim traces to a published source, or to the curator's family, who are
> real Kampot durian growers and are credited as such. Where the record is thin,
> the site says so rather than filling the gap.

That is why entries carry a `status` of `published` or `in-progress`, why
`/about` has a section called "What is missing", and why a Khmer name appears
on an entry only where a real one is documented. Where a claim comes from the
curator's family rather than from the literature, the entry says so and dates
it; where the two disagree, both are printed rather than one being quietly
dropped.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # 22 static pages
```

Requires Node 18.18 or newer. No environment variables, no database, no API
keys — the site is fully static.

## The stack

Next.js 15 (App Router), React 19, plain JavaScript. **Three dependencies
total**, all of them the framework itself:

| | |
|---|---|
| Styling | one hand-written CSS file, `app/globals.css` — no framework |
| State | React's own `useState`; no state library |
| Content | plain JS modules; no CMS, no MDX, no database |
| Search | a pure function over an array; no search library |

That is a deliberate constraint, not an omission.

## How it is laid out

```
app/
  page.js                  home — hero, three featured entries, method note
  region/page.js           the belt, the setting, the scale, the pressure
  field-notes/page.js      browse + search over every entry, six to a page
  field-notes/[slug]/      one entry per page, statically generated
  about/page.js            what this is, method, what is missing, why
  sources/page.js          full bibliography and photograph credits
  globals.css              the whole stylesheet
components/
  EntrySearch.js           client component: owns the search query and the page
  SearchBox.js             the search field itself, presentational
  Pagination.js            the page controls, presentational
  SearchEmpty.js           the no-results state
  EntryCard.js             one entry, in three width variants
  SiteNav / SiteFooter / SectionLabel / DurianGlyph / Reveal
content/
  field-notes.js           the entries — the data behind every page
  search-index.js          which fields are searchable, and the matcher
  card-variants.js         the grid cycle and the paging maths, as pure functions
  sources.js               bibliography, photo credits, shared method string
collection.config.js       archive identity: name, description, curator, source
```

**Pages never hardcode entry content.** They read `content/field-notes.js` and
render what is there. Adding an entry is a data edit, not a layout edit.

### The entry shape

Defined in [`entry-sketch.md`](entry-sketch.md). `slug`, `figNumber`, `title`,
`body`, and `sources` are required; `khmerName`, `image`, `tags`, and `status`
are optional, and `khmerName` is left empty rather than guessed.

### The search

`content/search-index.js` holds it as pure functions — `norm`, `buildIndex`,
`search` — with no React, because *which fields are searchable* is a decision
about the entry shape rather than about the box that displays it. It also means
the search can be reasoned about, and tested, on its own.

It matches against title, Khmer name, body, fig number, tags, **and source
titles** — in a guide whose whole claim is traceability, "which entries rest on
the ASEAN standard" is a real question a reader might have. URLs are excluded.
Every word of the query must appear somewhere in the entry, so `kampot drought`
finds the entry about both rather than everything about either.

**Browsing is paged; searching is not.** Six entries to a page when you are
browsing, and no pager at all once you type — a query is already the reader
narrowing the list, and paging their matches would hide results behind a
control they did not ask for.

Two things it handles that a naive `includes()` would not:

- **Khmer zero-width spaces.** U+200B is a real word separator in Khmer and some
  keyboards emit it, but `\s` does not match it — a pasted Khmer query would
  silently match nothing. Zero-width characters are stripped from both sides.
- **The field separator.** Fields join on a newline, which a single-line input
  cannot produce, so no query can match the separator and return everything.

## Course status

| Sprint | Feature | State |
|---|---|---|
| 1 | Browse and search | built |
| 2 | Contributor accounts, own-your-entries | not started |
| 3 | Submit, review, publish | not started |

Sprint features are built when the sprint asks for them, not ahead of it —
Sprint 2 changes how entries are stored, so building it early means building it
twice.

## Credits

Photographs marked as the curator's own work were taken in Kampot and are the
only primary visual material here. The one licensed image carries its author,
licence, and file page wherever it appears; all of it is listed on
[`/sources`](https://ict-340-vibe-coding.vercel.app/sources).

Corrections are welcome.
