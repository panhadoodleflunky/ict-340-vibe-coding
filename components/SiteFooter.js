import Link from "next/link";
import collection from "../collection.config.js";
import { photoCredits } from "../content/sources.js";

/* The licence line travels with the photographs, so it is rendered from the
   same credit list the Sources page uses rather than typed out again. */
export default function SiteFooter() {
  return (
    <footer className="foot">
      <div className="foot-inner">
        <p className="foot-fine">
          A student field guide built for ICT 340 — Vibe Coding at the American
          University of Phnom Penh, Fall 2026. Compiled from published sources;
          see <Link href="/sources">Sources &amp; Credits</Link>. In progress
          all semester. Photographs:{" "}
          {photoCredits.map((credit, i) => (
            <span key={credit.file}>
              {i > 0 ? "; " : ""}
              {credit.caption} by {credit.author}
              {credit.own ? null : (
                <>
                  , via Wikimedia Commons,{" "}
                  <a href={credit.licenseUrl} target="_blank" rel="noreferrer">
                    {credit.license}
                  </a>
                </>
              )}
            </span>
          ))}
          .
        </p>
        <div className="foot-bottom">
          <span>Compiled by {collection.curator}</span>
          <span aria-hidden="true">·</span>
          <span>{collection.province}, Cambodia</span>
          <span aria-hidden="true">·</span>
          <Link href="/">Back to the guide</Link>
        </div>
      </div>
    </footer>
  );
}
