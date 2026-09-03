import fieldNotes from "../content/field-notes.js";
import { siteUrl } from "../content/site.js";

/* Every route the guide has. The entry pages are generated from the same
   array the pages read, so a new entry appears here without an edit. */
export default function sitemap() {
  const base = siteUrl();
  const pages = ["", "/region", "/field-notes", "/about", "/sources"];
  return [
    ...pages.map((path) => ({ url: `${base}${path}`, changeFrequency: "monthly" })),
    ...fieldNotes.map((note) => ({
      url: `${base}/field-notes/${note.slug}`,
      changeFrequency: "monthly",
    })),
  ];
}
