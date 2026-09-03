import { siteUrl } from "../content/site.js";

/* A static guide with nothing private on it: everything is crawlable, and the
   sitemap is advertised so the entry pages are found without following links. */
export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${siteUrl()}/sitemap.xml`,
  };
}
