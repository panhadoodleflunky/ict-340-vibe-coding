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
  { h: "Season", p: "Harvest opens mid-May, peaks mid-June, ends late July — though the start has moved between 28 April and 12 June." },
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
          <p className="sub">
            This site exists because most of what's true about Kampot durian
            hasn't been written down anywhere in English. Where it has, I
            checked it.
          </p>
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
                {method} Most of it is secondary research: where a published
                source quotes a grower, this guide paraphrases and credits the
                source rather than reproducing the quote or putting words in
                anyone's mouth. The exception is the curator's own parents, who
                own and work a durian orchard at Teuk Chhou and answered
                questions directly for this project, first on 1 September 2026
                and then at length on 4 September, across 220 questions covering
                every entry in the guide. That second sitting is where most of
                the first-hand material here comes from — including the number
                of days from petal drop to harvest for each of their four
                varieties, which this project could not find written down
                anywhere else. They asked not to be named, so the interviews are
                dated and credited by relationship instead, and they asked that
                the location of their water source not be published, so it is
                not. That material is marked as family knowledge on the entries
                that use it, and kept separate from the published citations
                rather than dressed up as one.
              </p>
              <p className="reading-body">
                Two cautions travel with that material: prices are peak-season
                farm-gate figures and can fall by about half in a tight market,
                and tree counts are the growers' own estimates, because they
                keep no exact tally. And where their observation contradicts a
                published study — as it does over whether moths pollinate
                durian — both are printed, and the disagreement is left standing
                rather than resolved in favour of whichever is easier to cite.
                Every entry lists what it rests on, and the full bibliography is
                on <Link href="/sources">Sources &amp; Credits</Link>.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="tile-label">What is missing</h2>
              <p className="reading-body">
                {open} of the {fieldNotes.length} entries {open === 1 ? "is" : "are"}{" "}
                marked in progress. Cambodia's own durian varieties are thinly
                documented in English — Sadong Kit appears in the official ASEAN
                trade standard and almost nowhere else, and what this guide can
                say beyond that comes from growers rather than from a paper. The
                climate reporting is recent enough that it has not settled. Two
                bibliography entries still resolve to no single article, and say
                so where they appear. Those gaps are left visible on purpose.
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
                Worth saying plainly, and the balance has changed: this began as
                mostly published sources with a little family knowledge in it.
                After two long interviews it is closer to even, and several
                entries now rest more on my parents than on any paper. That is
                the part of this guide nobody else could have written, and it is
                also the part a reader has no way of checking. So every claim
                that comes from them is marked as theirs, dated, and kept
                separate from the citations — credited as family knowledge, not
                as a citation it isn't.
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
