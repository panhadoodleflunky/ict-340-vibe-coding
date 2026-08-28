import Reveal from "./Reveal.js";

/* Khmer block, U+1780–U+17FF. One Khmer character anywhere is enough:
   the passage is Khmer, and it needs the Khmer font and line height. */
const KHMER = /[ក-៿]/;

function lang(text) {
  return KHMER.test(text) ? "km" : undefined;
}

/* Fields arrive from interviews, so any of them can be missing or blank.
   A blank string is not the same as a missing one, but on the page both
   should read as "not recorded" rather than as an empty gap. */
function value(text, fallback) {
  const trimmed = typeof text === "string" ? text.trim() : "";
  return trimmed || fallback;
}

/* One archive entry, laid out like a catalogue record: number and
   provenance first, then the account itself. */
export default function EntryCard({ index, title, description, contributor, place }) {
  const number = String(index + 1).padStart(2, "0");
  const heading = value(title, "Untitled entry");
  const body = value(description, "");
  const who = value(contributor, "Contributor not recorded");
  const where = value(place, "Place not recorded");

  return (
    <Reveal as="article" className="entry">
      <div className="entry-head">
        <span className="entry-no" aria-hidden="true">
          {number}
        </span>
        <div className="entry-prov">
          <span className="entry-who" lang={lang(who)}>{who}</span>
          <span className="entry-place" lang={lang(where)}>{where}</span>
        </div>
      </div>
      <h3 className="entry-title" lang={lang(heading)}>{heading}</h3>
      {body ? (
        <p className="entry-body" lang={lang(body)}>{body}</p>
      ) : (
        <p className="entry-body entry-empty">
          This account has not been transcribed yet.
        </p>
      )}
    </Reveal>
  );
}
