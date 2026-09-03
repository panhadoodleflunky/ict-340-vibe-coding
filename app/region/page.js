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

/* Figures are reported ranges from published coverage, not a single survey —
   the page says so rather than presenting them as one clean dataset. */
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
    h: "Kampot province",
    v: "~1,300 ha",
    p: "940 hectares of it harvested, yielding about 12,280 tonnes a year — a 2020 provincial figure, and likely low today.",
  },
]

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
            src="/teuk-chou-scenic.png"
            alt="A wide view of the Teuk Chhou river at dusk, mountains rising behind a treeline on the far bank"
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
              <h2 className="headline-sm">How much fruit this is.</h2>
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
                These come from different sources and different years — the
                national figures from the Department of Long-Term Crop
                Development via{" "}
                <a
                  href="https://cambodianess.com/article/cambodias-durian-exports-to-china-surge-nearly-40-fold-as-new-rail-corridor-speeds-trade"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cambodianess
                </a>
                , the provincial one from{" "}
                <a
                  href="https://www.khmertimeskh.com/50721478/durian-lovers-to-feast-on-kampot-durians/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Khmer Times, May 2020
                </a>
                . The Kampot number is six years old and has not been restated
                since; against national growth of that speed, treat it as a
                floor rather than a current count.
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
                Roughly 30 percent of Teuk Chhou district's 100 hectares of
                durian has been affected by heat and drought, according to the
                head of the local farming community. The orchards sit on slopes
                and draw on water running off the mountains; when that dries up,
                fruit fails to reach size and drops early, and what survives
                ripens too fast to taste right. It is a live thread, not a
                settled finding — the full entry is{" "}
                <Link href="/field-notes/when-the-rain-doesnt-come">
                  Fig. 09, When the Rain Doesn't Come
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
