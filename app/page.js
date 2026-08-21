"use client";

import { useEffect } from "react";
import collection from "../collection.config.js";

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

const TILES = [
  { label: "Curated by", value: collection.curator },
  { label: "Source", value: collection.source },
];

const SPECS = [
  { h: "Province", p: `${collection.province}, Cambodia` },
  { h: "Season", p: "Harvest runs May through August." },
  { h: "Method", p: "Oral interviews, recorded on the farm." },
  { h: "Status", p: "In progress. New entries each week." },
];

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          // Reveal on entry, and also for anything already scrolled past —
          // a deep link can jump the viewport clean over a section.
          if (e.isIntersecting || e.boundingClientRect.top < 0) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <nav className="gnav">
        <div className="gnav-inner">
          <span className="gnav-logo">
            <DurianGlyph />
          </span>
          <a href="#overview">Overview</a>
          <a href="#orchard" className="hide-sm">The Orchard</a>
          <a href="#specs" className="hide-sm">Details</a>
          <span className="gnav-spacer" />
          <a href="#entries">Entries</a>
        </div>
      </nav>

      <header className="hero">
        <p className="eyebrow">
          <span className="pulse" />
          Field notes in progress
        </p>
        <h1 className="headline">
          Kampot
          <em>Durian</em>
        </h1>
        <p className="sub">{collection.description}</p>
        <div className="cta-row">
          <a className="btn" href="#entries">Browse the archive</a>
          <a className="link" href="#orchard">Meet the orchard</a>
        </div>
        <div className="hero-stage">
          <img
            src="/durian-hero.jpg"
            alt="Durians stacked at market, husks covered in sharp green spikes"
          />
        </div>
      </header>

      <section className="section" id="overview">
        <div className="inner">
          <div className="bento">
            {TILES.map((t) => (
              <article className="tile reveal" key={t.label}>
                <p className="tile-label">{t.label}</p>
                <p className="tile-value">{t.value}</p>
              </article>
            ))}
            <article className="tile tile-wide reveal" id="entries">
              <p className="tile-label">Entries in the archive</p>
              <p className="stat-num">0</p>
              <p className="body-copy" style={{ marginTop: 12 }}>
                For now. Sprint 1 changes that.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="band" id="orchard">
        <img
          src="/kampot-durian-monument.jpg"
          alt="The giant durian monument at the roundabout in Kampot, Cambodia"
        />
        <div className="band-copy">
          <h2 className="headline-sm reveal">
            Grown in Kampot.
            <br />
            Recorded at home.
          </h2>
          <p className="sub reveal">
            Kampot put a durian at the centre of its roundabout. This archive
            starts one orchard away — the trees, the seasons, and the people who
            know them by name.
          </p>
        </div>
      </section>

      <section className="section" id="specs">
        <div className="inner">
          <h2 className="headline-sm reveal">The details.</h2>
          <div className="specs reveal">
            {SPECS.map((s) => (
              <div className="spec" key={s.h}>
                <h3>{s.h}</h3>
                <p className="body-copy">{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            <span>·</span>
            <span>{collection.province}, Cambodia</span>
            <span>·</span>
            <a href="#overview">Back to top</a>
          </div>
        </div>
      </footer>
    </>
  );
}
