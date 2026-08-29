import Link from "next/link";
import SiteNav from "../components/SiteNav.js";
import SiteFooter from "../components/SiteFooter.js";
import SectionLabel from "../components/SectionLabel.js";

export const metadata = { title: "Not found — Kampot Durian" };

/* An unknown slug used to land on the bare framework 404, with no way back
   into the guide. */
export default function NotFound() {
  return (
    <>
      <SiteNav />
      <main className="nf">
        <div className="inner reading">
          <SectionLabel no="404">Not found</SectionLabel>
          <h1 className="headline-sm">No entry at this address.</h1>
          <p className="reading-body">
            The page may have been renamed, or the entry may not be written
            yet. The full index is the best place to pick up.
          </p>
          <p className="cta-row">
            <Link className="btn" href="/field-notes">All field notes</Link>
            <Link className="link" href="/">Back to the guide</Link>
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
