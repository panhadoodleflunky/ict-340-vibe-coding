import Link from "next/link";
import SiteNav from "../../components/SiteNav.js";
import SiteFooter from "../../components/SiteFooter.js";
import SectionLabel from "../../components/SectionLabel.js";
import EntryCard from "../../components/EntryCard.js";
import Reveal from "../../components/Reveal.js";
import fieldNotes from "../../content/field-notes.js";

export const metadata = {
  title: "Field Notes — Kampot Durian",
  description:
    "Sourced entries on Kampot's durian varieties, growing season, trade, and the pressures on it.",
};

/* Card treatment repeats every five entries rather than every one, so the
   index reads as a laid-out page instead of a list of identical blocks. */
const VARIANTS = ["lead", "plain", "brief", "brief", "plain"];

export default function FieldNotesIndex() {
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
            Entries are numbered in the order they were compiled. Two of them
            are marked in progress: the record for those is genuinely thin, and
            saying so is more useful than filling the gap.
          </p>
        </div>
      </header>

      <main id="notes">
        <section className="section">
          <div className="inner">
            <div className="entry-list">
              {fieldNotes.map((note, i) => (
                <EntryCard
                  key={note.slug}
                  note={note}
                  variant={VARIANTS[i % VARIANTS.length]}
                  delay={(i % 3) * 70}
                />
              ))}
            </div>
            <Reveal>
              <p className="body-copy note-foot">
                Every claim above is listed on its entry page and gathered in{" "}
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
