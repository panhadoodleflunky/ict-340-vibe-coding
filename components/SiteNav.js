import Link from "next/link";
import collection from "../collection.config.js";
import DurianGlyph from "./DurianGlyph.js";

/* The four destinations of the guide. Home is the logo, so it is not
   repeated in the list. */
const LINKS = [
  { href: "/region", label: "The Region", small: true },
  { href: "/field-notes", label: "Field Notes", small: false },
  { href: "/about", label: "About", small: true },
  { href: "/sources", label: "Sources", small: true },
];

/* `current` is the href of the page rendering the nav, so the active link can
   be marked for screen readers without making this a client component. */
export default function SiteNav({ current }) {
  return (
    <nav className="gnav" aria-label="Site navigation">
      <div className="gnav-inner">
        <Link className="gnav-home" href="/">
          <span className="gnav-logo">
            <DurianGlyph />
          </span>
          <span className="gnav-name">{collection.name}</span>
        </Link>
        <span className="gnav-spacer" />
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={link.small ? "hide-sm" : undefined}
            aria-current={current === link.href ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
