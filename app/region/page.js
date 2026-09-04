import Link from "next/link";
import SiteNav from "../../components/SiteNav.js";
import SiteFooter from "../../components/SiteFooter.js";
import SectionLabel from "../../components/SectionLabel.js";
import Reveal from "../../components/Reveal.js";

export const metadata = {
  title: "The Region — Kampot Durian",
  description:
    "Kampot's durian belt: Teuk Chhou district, the scale of the crop, and the climate pressure on it.",
};

/* Two national figures from one government series, and the single orchard this
   guide's first-hand material actually comes from. A 2020 provincial estimate
   used to sit in the third slot; it was six years old, never restated, and
   carried on one news report, so it was dropped rather than dressed up. */
const FIGURES = [
  {
    h: "National area, 2025",
    v: "16,193 ha",
    p: "Cambodia's durian plantings, with an estimated 135,546 tonnes a year — per the Department of Long-Term Crop Development.",
  },
  {
    h: "Four years earlier",
    v: "5,289 ha",
    p: "The 2021 baseline, at 36,656 tonnes. The crop has roughly tripled in area since.",
  },
  {
    h: "This guide's orchard",
    v: "~2 ha",
    p: "Roughly 215 trees in four varieties at Teuk Chhou — the farm behind every first-hand claim in this guide. The growers keep no exact tally, so the count is their own estimate.",
  },
];

export default function Region() {
  return (
    <>
      <a className="skip" href="#region">Skip to the region</a>
      <SiteNav current="/region" />

      <header className="page-head">
        <div className="inner">
          <SectionLabel no="01">The Region</SectionLabel>
          <h1 className="headline-sm">Where Kampot durian actually grows.</h1>
          <p className="sub">
            Not the whole province — a belt, centred on Teuk Chhou district,
            where alluvial soil near the rivers and a humid tropical climate
            give durian the conditions it needs.
          </p>
        </div>
      </header>

      <main id="region">
        <section className="band">
          <img
            src="/kampot-durian-monument.jpg"
            alt="The giant durian monument at the roundabout in Kampot, Cambodia"
            width={1920}
            height={1440}
            fetchPriority="high"
          />
          <div className="band-copy">
            <Reveal>
              <SectionLabel no="02">The belt</SectionLabel>
              <h2 className="headline-sm">
                Teuk Chhou,
                <br />
                by the rivers.
              </h2>
              <p className="sub">
                Kampot put a durian at the centre of its roundabout. The fruit
                behind that monument comes mostly from one district west of the
                town, where the soil is river-laid and the water is close.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="band">
          <img
            src="/teuk-chou-scenic.jpg"
            alt="A wide view of the Teuk Chhou river at dusk, mountains rising behind a treeline on the far bank"
            width={1946}
            height={1186}
            loading="lazy"
            decoding="async"
          />
          <div className="band-copy">
            <Reveal>
              <SectionLabel no="03">The setting</SectionLabel>
              <h2 className="headline-sm">
                Rivers,
                <br />
                and mountains behind them.
              </h2>
              <p className="sub">
                Teuk Chhou's orchards sit on this river's alluvial soil, water
                close and hills rising just behind — the geography this belt
                depends on.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="inner">
            <Reveal>
              <SectionLabel no="04">The scale</SectionLabel>
              <h2 className="headline-sm">The crop, and one orchard inside it.</h2>
            </Reveal>
            <Reveal className="specs">
              {FIGURES.map((f) => (
                <div className="spec" key={f.h}>
                  <h3>{f.h}</h3>
                  <p className="stat-num stat-sm">{f.v}</p>
                  <p className="body-copy">{f.p}</p>
                </div>
              ))}
            </Reveal>
            <Reveal>
              <p className="body-copy note-foot">
                The national figures come from the Department of Long-Term Crop
                Development, reported by{" "}
                <a
                  href="https://cambodianess.com/article/cambodias-durian-exports-to-china-surge-nearly-40-fold-as-new-rail-corridor-speeds-trade"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cambodianess
                </a>
                . There is no current figure for Kampot province specifically:
                the most recent one this guide could find dates from 2020, rests
                on a single news report, and has not been restated since, so it
                is not published here. The orchard figures are the growers' own,
                given in interview — one farm, and not a sample of anything.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="inner reading">
            <Reveal>
              <SectionLabel no="05">The pressure</SectionLabel>
              <h2 className="headline-sm">What is changing now.</h2>
              <p className="reading-body">
                In 2024 this belt had its worst season in living memory, and one
                orchard's account of it is specific: 43°C in May, the mountain
                stream gone by late March, leaves wilting by nine each morning.
                Four mature trees died when their roots dried out, about a
                quarter of the season's fruit weight was lost to early abortion,
                and the water level in the farm's own well fell close to three
                metres. The rains that normally arrive in the first week of May
                did not reach the trees until mid-June.
              </p>
              <p className="reading-body">
                How far that extends across the district is harder to say. The
                head of the local farming community has put roughly 30 percent
                of Teuk Chhou's durian as affected by heat and drought — the
                only district-wide estimate this guide has found, and an
                estimate rather than a survey. What is not in question is the
                mechanism: these orchards sit on slopes and drink what runs off
                the mountains, so when that fails there is nothing behind it.
                Fruit stops reaching size and drops early, and what survives
                ripens too fast to taste right.{" "}
                <Link href="/field-notes/when-the-rain-doesnt-come">
                  Read the full entry on the drought
                </Link>
                , which follows one family through the last three seasons of it.
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
