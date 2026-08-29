import {
  Instrument_Serif,
  Inter,
  JetBrains_Mono,
  Noto_Sans_Khmer,
} from "next/font/google";
import "./globals.css";
import collection from "../collection.config.js";

/* Display face: one weight only (400), meant for large sizes. */
const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display",
});

/* Body face: carries the long oral-history passages. */
const body = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

/* Khmer face. Inter and Instrument Serif carry no Khmer glyphs, so without
   this any Khmer entry falls through to whatever the device happens to have. */
const khmer = Noto_Sans_Khmer({
  subsets: ["khmer"],
  weight: ["300", "400", "600"],
  display: "swap",
  variable: "--font-khmer",
});

export const metadata = {
  /* Vercel supplies the deploy URL; falls back to local during dev. */
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000",
  ),
  title: `${collection.name} — Khmer Living Archive`,
  description: collection.description,
  openGraph: {
    title: `${collection.name} — Khmer Living Archive`,
    description: collection.description,
    type: "website",
    locale: "en_US",
    images: [{ url: "/harvest-ready-to-sell.jpg", width: 2048, height: 1536 }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} ${khmer.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
