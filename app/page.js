import collection from "../collection.config.js";
import EntryCard from "../components/EntryCard.js";
import Reveal from "../components/Reveal.js";

/* Spiky durian husk mark, drawn as a ring of triangles. */
function DurianGlyph({ size = 18 }) {
  const spikes = Array.from({ length: 18 }, (_, i) => {
    const a = (i / 18) * Math.PI * 2;
    const w = 0.16;
    const px = (r, t) => [50 + r * Math.cos(t), 50 + r * Math.sin(t)];
    const [x1, y1] = px(30, a - w);
    const [x2, y2] = px(48, a);
    const [x3, y3] = px(30, a + w);
    return `M${x1.toFixed(1)} ${y1.toFixed(1)}L${x2.toFixed(1)} ${y2.toFixed(1)}L${x3.toFixed(1)} ${y3.toFixed(1)}Z`;
  }).join("");

  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true">
      <circle cx="50" cy="50" r="31" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d={spikes} fill="currentColor" opacity="0.9" />
    </svg>
  );
}

/* Frontispiece facts — the archive's own catalogue header. */
const MASTHEAD = [
  { k: "Curator", v: collection.curator },
  { k: "Province", v: `${collection.province}, Cambodia` },
  { k: "Source", v: collection.source },
];

const SPECS = [
  { h: "Province", p: `${collection.province}, Cambodia` },
  { h: "Season", p: "Harvest runs May through August." },
  { h: "Method", p: "Oral interviews, recorded on the farm." },
  { h: "Status", p: "In progress. New entries each week." },
];

const SAMPLE_ENTRIES = [
  {
    title: "The Nose Lies Less Than the Ear",
    description:
      "You knock on the shell, and you listen — not tap-tap-tap like a door, more like knuckle against a drum, gentle. If it sounds hollow, it's close. But my mother's rule was always about the smell at the stem, not the sound. She'd say, 'the nose lies less than the ear.' Meaning: sound can fool you, especially with wind or a bad ear day, but if you smell sweetness rising off the stem crack, that fruit is telling the truth.",
    contributor: "Mother, Kampot Durian Orchard",
    place: "The orchard, Kampot",
  },
  {
    title: "The Four A.M. Harvest",
    description:
      "Last season, first fruit dropped near the stubborn tree, four in the morning, and it woke the dogs before it woke us. You don't cut Monthong — you wait, and the waiting makes you crazy, checking the ground every evening like you lost something. I remember standing there in the dark in my sandals, durian smell already thick in the air before I even found where it fell, and my husband laughing at me for running outside in my sleep shirt. We split it right there on the ground, still warm from the day before. Nobody said anything for a while. Just ate.",
    contributor: "Mother, Kampot Durian Orchard",
    place: "Near the old fence line, Kampot",
  },
];

/* Drawn from entry 01 — the line the whole method rests on. */
const PULL_QUOTE = {
  text: "The nose lies less than the ear.",
  attribution: "Mother, Kampot Durian Orchard",
};

function SectionLabel({ no, children }) {
  return (
    <p className="sec-label">
      <span className="sec-no">{no}</span>
      <span className="sec-rule" aria-hidden="true" />
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip" href="#entries">Skip to entries</a>

      <nav className="gnav" aria-label="Section navigation">
        <div className="gnav-inner">
          <span className="gnav-logo">
            <DurianGlyph />
          </span>
          <span className="gnav-name">{collection.name}</span>
          <span className="gnav-spacer" />
          <a href="#overview" className="hide-sm">Overview</a>
          <a href="#orchard" className="hide-sm">Orchard</a>
          <a href="#entries">Entries</a>
        </div>
      </nav>

      <header className="hero">
        <div className="inner hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="pulse" />
              Field notes in progress
            </p>
            <h1 className="headline">
              Kampot
              <em>Durian</em>
            </h1>
            <div className="hero-rule" aria-hidden="true" />
            <p className="sub">{collection.description}</p>

            <div className="cta-row">
              <a className="btn" href="#entries">Browse the archive</a>
              <a className="link" href="#orchard">Meet the orchard</a>
            </div>
          </div>

          <figure className="hero-figure">
            <img
              src="/durian-hero.jpg"
              alt="Durians stacked at market, husks covered in sharp green spikes"
            />
            <figcaption>
              <span className="hero-cap-no">Fig. 01</span>
              Harvest stacked at market — Kampot
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
              <SectionLabel no="01">The collection</SectionLabel>
            </Reveal>
            <div className="bento">
              <Reveal as="article" className="tile">
                <p className="tile-label">Entries recorded</p>
                <p className="stat-num">{SAMPLE_ENTRIES.length}</p>
                <p className="body-copy">More arrive each week of the season.</p>
              </Reveal>
              <Reveal as="article" className="tile" delay={90}>
                <p className="tile-label">Gathered from</p>
                <p className="tile-value">{collection.source}</p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="band" id="orchard">
          <img
            src="/kampot-durian-monument.jpg"
            alt="The giant durian monument at the roundabout in Kampot, Cambodia"
          />
          <div className="band-copy">
            <Reveal>
              <SectionLabel no="02">The orchard</SectionLabel>
              <h2 className="headline-sm">
                Grown in Kampot.
                <br />
                Recorded at home.
              </h2>
              <p className="sub">
                Kampot put a durian at the centre of its roundabout. This archive
                starts one orchard away — the trees, the seasons, and the people
                who know them by name.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="quote-section">
          <Reveal className="inner">
            <figure className="pull">
              <blockquote>{PULL_QUOTE.text}</blockquote>
              <figcaption>{PULL_QUOTE.attribution}</figcaption>
            </figure>
          </Reveal>
        </section>

        <section className="section" id="entries">
          <div className="inner">
            <Reveal>
              <div className="section-head">
                <div>
                  <SectionLabel no="03">The entries</SectionLabel>
                  <h2 className="headline-sm">In their own words.</h2>
                </div>
                <span className="section-count">
                  {SAMPLE_ENTRIES.length} field notes
                </span>
              </div>
            </Reveal>
            <div className="entry-list">
              {SAMPLE_ENTRIES.map((entry, i) => (
                <EntryCard key={entry.title} index={i} {...entry} />
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="specs">
          <div className="inner">
            <Reveal>
              <SectionLabel no="04">The details</SectionLabel>
              <h2 className="headline-sm">How this was made.</h2>
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

      <footer className="foot">
        <div className="foot-inner">
          <p className="foot-fine">
            A student archive built for ICT 340 — Vibe Coding at the American
            University of Phnom Penh, Fall 2026. Under construction all
            semester. Entry count reflects published records only. Photographs:
            durians by G.Mannaerts and the Kampot durian monument by Myrmux, via
            Wikimedia Commons, both{" "}
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noreferrer"
            >
              CC BY-SA 4.0
            </a>
            .
          </p>
          <div className="foot-bottom">
            <span>Curated by {collection.curator}</span>
            <span aria-hidden="true">·</span>
            <span>{collection.province}, Cambodia</span>
            <span aria-hidden="true">·</span>
            <a href="#overview">Back to top</a>
          </div>
        </div>
      </footer>
    </>
  );
}
