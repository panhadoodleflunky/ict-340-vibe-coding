import Link from "next/link";
import SiteNav from "../../components/SiteNav.js";
import SiteFooter from "../../components/SiteFooter.js";
import SectionLabel from "../../components/SectionLabel.js";
import Reveal from "../../components/Reveal.js";
import collection from "../../collection.config.js";
import fieldNotes from "../../content/field-notes.js";
import { method } from "../../content/sources.js";

export const metadata = {
  title: "About the Project — Kampot Durian",
  description: method,
};

const SPECS = [
  { h: "Province", p: `${collection.province}, Cambodia` },
  { h: "Season", p: "Harvest runs May through August." },
  { h: "Method", p: method },
  { h: "Status", p: "In progress. Entries added as research continues." },
];

export default function About() {
  const open = fieldNotes.filter((n) => n.status === "in-progress").length;

  return (
    <>
      <a className="skip" href="#about">Skip to the text</a>
      <SiteNav current="/about" />

      <header className="page-head">
        <div className="inner">
          <SectionLabel no="01">About the Project</SectionLabel>
          <h1 className="headline-sm">A compiled record, not a memoir.</h1>
          <p className="sub">{collection.description}</p>
        </div>
      </header>

      <main id="about">
        <section className="section">
          <div className="inner reading">
            <Reveal>
              <h2 className="tile-label">What this is</h2>
              <p className="reading-body">
                A researched field guide to Kampot's durian world — the region,
                the varieties grown there, how the fruit actually develops, and
                the events currently shaping its story: a new export route to
                China, a counterfeit-labeling problem, and a climate threat that
                growers are reporting season by season.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="tile-label">Method</h2>
              <p className="reading-body">
                {method} It is secondary research. No interviews were conducted
                for it, and nothing here is presented as personal testimony —
                where a published source quotes a grower, this guide paraphrases
                and credits the source rather than reproducing the quote or
                putting words in anyone's mouth. Every entry lists what it
                rests on, and the full bibliography is on{" "}
                <Link href="/sources">Sources &amp; Credits</Link>.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="tile-label">What is missing</h2>
              <p className="reading-body">
                {open} of the {fieldNotes.length} entries are marked in
                progress. Cambodia's own durian varieties are thinly documented
                in English — Sadong Kit appears in the official ASEAN trade
                standard and almost nowhere else — and the climate reporting is
                recent enough that it has not settled. Those gaps are left
                visible on purpose.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="tile-label">Course context</h2>
              <p className="reading-body">
                Built for ICT 340 — Vibe Coding at the American University of
                Phnom Penh, Fall 2026.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="tile-label">Why this exists</h2>
              <p className="reading-body">
                This guide is about a fruit I grew up with. Kampot is home, my
                family grows and sells durian there, and I spent my childhood
                watching my parents do the work — the waiting, the reading of a
                season, the selling. I like eating it, which is the honest first
                reason. The rest is that a fruit this important to one province
                deserves to be written down properly, and most of it has not
                been.
              </p>
              <p className="reading-body">
                Worth saying plainly, though: nothing here comes from my family.
                Every entry is compiled from published sources, and none of it
                is testimony. If that changes, it will say so on the entry.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="inner">
            <Reveal>
              <SectionLabel no="02">The details</SectionLabel>
            </Reveal>
            <Reveal className="specs">
              {SPECS.map((s) => (
                <div className="spec" key={s.h}>
                  <h3>{s.h}</h3>
                  <p className="body-copy">{s.p}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
