/* Where this site lives. Vercel supplies the production hostname at build
   time; locally there is none, so it falls back to the dev server. Used by
   the metadata base, the sitemap, and robots.txt so all three agree. */
export function siteUrl() {
  return process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000";
}
