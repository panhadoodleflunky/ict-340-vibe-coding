import Link from "next/link";
import SiteNav from "../../components/SiteNav.js";
import SiteFooter from "../../components/SiteFooter.js";
import SectionLabel from "../../components/SectionLabel.js";
import EntrySearch from "../../components/EntrySearch.js";
import Reveal from "../../components/Reveal.js";
import fieldNotes from "../../content/field-notes.js";

export const metadata = {
  title: "Field Notes — Kampot Durian",
  description:
    "Sourced entries on Kampot's durian varieties, growing season, trade, and the pressures on it.",
};

export default function FieldNotesIndex() {
  /* Counted, not typed. The copy below used to say "Two of them are marked
     in progress" and had gone stale — one entry was promoted on 2 Sept and
     the sentence stayed behind. Same class of drift as the hectares bug. */
  const open = fieldNotes.filter((n) => n.status === "in-progress").length;

  return (
    <>
      <a className="skip" href="#notes">Skip to the entries</a>
      <SiteNav current="/field-notes" />

      <header className="page-head">
        <div className="inner">
          <SectionLabel no="01">Field Notes</SectionLabel>
          <h1 className="headline-sm">
            {fieldNotes.length} entries, each traced to a source.
          </h1>
          <p className="sub">
            Entries are numbered in the order they were compiled.{" "}
            {open === 1
              ? "One of them is marked in progress: the record for it is"
              : `${open} of them are marked in progress: the record for those is`}{" "}
            genuinely thin, and saying so is more useful than filling the gap.
          </p>
        </div>
      </header>

      <main id="notes">
        <section className="section">
          <div className="inner">
            {/* Client component: it owns the query state and the filtering.
                The data still comes from content/field-notes.js — the page
                reads it and hands it down, so nothing about an entry is
                hardcoded here. */}
            <EntrySearch notes={fieldNotes} />
            <Reveal>
              <p className="body-copy note-foot">
                Every claim in this guide is listed on its entry page and
                gathered in{" "}
                <Link href="/sources">Sources &amp; Credits</Link>.
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
