import Link from "next/link";
import collection from "../collection.config.js";
import fieldNotes, { getNote } from "../content/field-notes.js";
import { method } from "../content/sources.js";
import EntryCard from "../components/EntryCard.js";
import Reveal from "../components/Reveal.js";
import SiteNav from "../components/SiteNav.js";
import SiteFooter from "../components/SiteFooter.js";
import SectionLabel from "../components/SectionLabel.js";

/* Frontispiece facts — the guide's own catalogue header. */
const MASTHEAD = [
  { k: "Compiled by", v: collection.curator },
  { k: "Province", v: `${collection.province}, Cambodia` },
  { k: "Method", v: "Published research and reporting" },
];

/* Three entries that between them cover the whole guide: a native variety,
   the market problem, and the climate thread. */
const FEATURED = ["ov-khak", "a-name-worth-protecting", "when-the-rain-doesnt-come"]
  .map(getNote)
  .filter(Boolean);

/* Drawn from Fig. 05 — the line the guide's honesty rests on. It is the
   guide's own sentence, not anyone's quoted words. */
const PULL_QUOTE = {
  text: "A variety that officially exists and is functionally undocumented.",
  attribution: "Sadong Kit: The Undocumented Variety",
  href: "/field-notes/sadong-kit",
};

export default function Home() {
  const open = fieldNotes.filter((n) => n.status === "in-progress").length;

  return (
    <>
      <a className="skip" href="#entries">Skip to the entries</a>
      <SiteNav current="/" />

      <header className="hero">
        <div className="inner hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="pulse" />
              Field guide in progress
            </p>
            <h1 className="headline">
              Kampot
              <em>Durian</em>
            </h1>
            <div className="hero-rule" aria-hidden="true" />
            <p className="sub">{collection.description}</p>

            <div className="cta-row">
              <Link className="btn" href="/field-notes">Read the field notes</Link>
              <Link className="link" href="/region">See the region</Link>
            </div>
          </div>

          <figure className="hero-figure">
            <img
              src="/harvest-ready-to-sell.jpg"
              alt="Several hundred harvested durians laid out on tarpaulins between the trees, a pickup truck waiting behind them"
            />
            <figcaption>
              <span className="hero-cap-no">Kampot</span>
              A season's harvest, laid out between the trees
            </figcaption>
          </figure>
        </div>

        <div className="inner">
          <dl className="masthead">
            {MASTHEAD.map((m) => (
              <div className="mast-item" key={m.k}>
                <dt>{m.k}</dt>
                <dd>{m.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <main>
        <section className="section" id="overview">
          <div className="inner">
            <Reveal>
              <SectionLabel no="01">The guide</SectionLabel>
            </Reveal>
            <div className="bento">
              <Reveal as="article" className="tile">
                <p className="tile-label">Entries published</p>
                <p className="stat-num">{fieldNotes.length}</p>
                <p className="body-copy">
                  {open} of them marked in progress, because the published
                  record on those is genuinely thin.
                </p>
              </Reveal>
              <Reveal as="article" className="tile" delay={90}>
                <p className="tile-label">Compiled from</p>
                <p className="tile-value">{collection.source}</p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section" id="entries">
          <div className="inner">
            <Reveal>
              <div className="section-head">
                <div>
                  <SectionLabel no="02">Selected entries</SectionLabel>
                  <h2 className="headline-sm">
                    Three of {fieldNotes.length}, to start.
                  </h2>
                </div>
                <Link className="link section-count" href="/field-notes">
                  Read all {fieldNotes.length}
                </Link>
              </div>
            </Reveal>
            <div className="entry-list">
              {FEATURED.map((note, i) => (
                <EntryCard
                  key={note.slug}
                  note={note}
                  variant={i === 0 ? "lead" : "plain"}
                  delay={i * 80}
                />
              ))}
            </div>
            <Reveal>
              <p className="body-copy note-foot">
                The other {fieldNotes.length - FEATURED.length} entries cover
                ripeness, flowering, the varieties grown in Kampot, and the
                season itself —{" "}
                <Link href="/field-notes">read all {fieldNotes.length}</Link>.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="band" id="region">
          <img
            src="/kampot-durian-monument.jpg"
            alt="The giant durian monument at the roundabout in Kampot, Cambodia"
          />
          <div className="band-copy">
            <Reveal>
              <SectionLabel no="03">The region</SectionLabel>
              <h2 className="headline-sm">
                Grown in Kampot.
                <br />
                Mostly in one district.
              </h2>
              <p className="sub">
                Kampot put a durian at the centre of its roundabout. The fruit
                behind it comes largely from Teuk Chhou — river-laid soil,
                roughly 1,193 hectares, and a season now shifting with the rain.
              </p>
              <p className="cta-row">
                <Link className="link" href="/region">Read the region</Link>
              </p>
            </Reveal>
          </div>
        </section>

        <section className="quote-section">
          <Reveal className="inner">
            <figure className="pull">
              <blockquote>{PULL_QUOTE.text}</blockquote>
              <figcaption>
                <Link href={PULL_QUOTE.href}>{PULL_QUOTE.attribution}</Link>
              </figcaption>
            </figure>
          </Reveal>
        </section>

        <section className="section" id="method">
          <div className="inner reading">
            <Reveal>
              <SectionLabel no="04">How this was made</SectionLabel>
              <p className="reading-body">
                {method} It is secondary research, and every entry lists what it
                rests on. More on <Link href="/about">About the Project</Link>,
                and the full bibliography on{" "}
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
