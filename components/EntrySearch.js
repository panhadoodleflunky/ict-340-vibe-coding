"use client";

import { useMemo, useState } from "react";
import EntryCard from "./EntryCard.js";
import SearchEmpty from "./SearchEmpty.js";
import { buildIndex, search, isQuery } from "../content/search-index.js";

/* Card treatment repeats every five entries rather than every one, so the
   index reads as a laid-out page instead of a list of identical blocks. */
const VARIANTS = ["lead", "plain", "brief", "brief", "plain"];

/* Positions 2 and 3 of that cycle are the paired half-width cards. A filtered
   result can stop on position 2, leaving its partner unrendered and half the
   row empty — search "ov khak" (3 results) and you would see it. A dangling
   first-of-pair is promoted to full width so every result set ends flush. */
function variantFor(i, total) {
  const v = VARIANTS[i % VARIANTS.length];
  const dangling = v === "brief" && i % VARIANTS.length === 2 && i === total - 1;
  return dangling ? "plain" : v;
}

export default function EntrySearch({ notes }) {
  const [query, setQuery] = useState("");

  const index = useMemo(() => buildIndex(notes), [notes]);
  const shown = useMemo(() => search(index, query), [index, query]);
  const searching = isQuery(query);

  return (
    <>
      <div className="search">
        <label className="search-label" htmlFor="entry-search">
          Search the entries
        </label>
        <div className="search-field">
          <input
            id="entry-search"
            className="search-input"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="A variety, a Khmer term, a subject — ទុរេន, Ov Khak, harvest"
            autoComplete="off"
            spellCheck="false"
            aria-describedby="entry-search-count"
          />
          {/* Always rendered, disabled when there is nothing to clear: showing
              it only once you type would resize the input on the first
              keystroke, under the cursor. */}
          <button
            type="button"
            className="search-clear"
            onClick={() => setQuery("")}
            disabled={!query}
          >
            Clear
          </button>
        </div>
        {/* Announced to screen readers on every change, not just on submit. */}
        <p
          className="search-count"
          id="entry-search-count"
          role="status"
          aria-live="polite"
        >
          {searching
            ? `${shown.length} of ${notes.length} entries`
            : `${notes.length} entries`}
        </p>
      </div>

      {shown.length > 0 ? (
        <div className="entry-list">
          {shown.map((note, i) => (
            <EntryCard
              key={note.slug}
              note={note}
              variant={variantFor(i, shown.length)}
              delay={(i % 3) * 70}
            />
          ))}
        </div>
      ) : (
        <SearchEmpty query={query} total={notes.length} onClear={() => setQuery("")} />
      )}
    </>
  );
}
