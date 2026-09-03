/* The no-results state. Its own file because AGENTS.md rule 5 caps a
   component at roughly 80 lines and EntrySearch was over with this inline.

   The copy is the point: an empty result in a research archive is a fact
   about the archive, not an error by the reader, and it says so. */

const KHMER = /[ក-៿]/;

export default function SearchEmpty({ query, total, onClear }) {
  return (
    <div className="search-none">
      <p className="search-none-head">
        Nothing in the guide matches{" "}
        <span lang={KHMER.test(query) ? "km" : undefined}>“{query}”</span>.
      </p>
      <p className="body-copy">
        This guide is {total} entries deep, not eleven thousand — a gap here
        usually means it hasn&apos;t got to the subject yet, not that you asked
        the wrong thing. Try a variety (Ov Khak, Monthong, Musang King), a Khmer
        term, or a subject: harvest, climate, export, trade.
      </p>
      <button type="button" className="btn search-none-btn" onClick={onClear}>
        Show all {total} entries
      </button>
    </div>
  );
}
