/* The ten Field Notes, in catalogue order.
   Shape is defined in entry-sketch.md. Every entry's claims trace to the
   sources listed on it; the matching bibliography lives in content/sources.js.

   khmerName is present only where a Khmer name for the variety is actually
   documented. The rest are left empty on purpose — an invented Khmer name
   would be the same failure as an invented quote. */

/* Cited often enough to be worth a name. Verified to resolve; Annex 2 is the
   weight table, Annex 3 the maturity tests, Annex 4 the vernacular names. */
const ASEAN =
  "https://asean.org/wp-content/uploads/2012/05/1-ASEAN-STANDARD-FOR-DURIAN-REV-2012.pdf";

const fieldNotes = [
  {
    slug: "reading-ripeness",
    figNumber: "01",
    title: "Reading Ripeness",
    khmerName: "",
    body:
      "A durian doesn't ripen on a calendar; it ripens by advertisement. Growers watch for the spikes to dull from bright green toward yellow-green, listen for hairline cracks opening along the fruit's seams, and check the base of the stem for a slight swelling — a sign the fruit is loosening from the branch. Tap the shell and a ripe one answers with a hollow sound, not a solid thud. Some growers say the surest sign is the smallest one: a trace of sweetness rising from the crack where the stem meets the fruit.",
    sources: [
      { text: "ASEAN Standard for Durian (ASEAN Stan 1:2006, Rev.1-2012), Annex 3 — “Methods for testing durian fruit maturity”", url: ASEAN },
    ],
    image: null,
    tags: ["harvest", "ripeness"],
    status: "published",
  },
  {
    slug: "the-dry-spell",
    figNumber: "02",
    title: "The Dry Spell",
    khmerName: "",
    body:
      "Durian flowering doesn't start with rain — it starts with the absence of it. Trees need two to four consecutive dry weeks to begin flowering; too much rain during this window and they won't bloom. Once flowers open, they do so only at night, closing again by midnight, and pollination is carried out almost entirely by bats and large moths rather than daytime insects. Growers avoid spraying anything near the trees during this window, for the pollinators' sake as much as the fruit's.",
    sources: [
      { text: "Published horticultural research on durian flowering and nocturnal pollination" },
    ],
    image: null,
    tags: ["flowering", "pollination", "season"],
    status: "published",
  },
  {
    slug: "from-flower-to-fruit",
    figNumber: "03",
    title: "From Flower to Fruit",
    khmerName: "",
    body:
      "Between pollination and a ripe fruit lies roughly three to five months, though the exact count depends on the variety. Researchers measure it in “days after anthesis”: Thailand's Monthong reaches full maturity around 120 to 135 days after bloom, while faster varieties can be ready closer to 100 days. Cambodia's own varieties haven't been studied with the same precision — their timing is known to growers by observation, not by published data.",
    sources: [
      { text: "Published horticultural research on Montong fruit maturity and durian development stages" },
    ],
    image: {
      src: "/tree-in-fruit.jpg",
      alt: "A durian tree hung with dozens of mature spiked fruit, its branches braced with support lines",
      caption:
        "Fruit carried on the branch, the limbs braced with lines against the weight.",
    },
    tags: ["flowering", "harvest", "research gap"],
    status: "published",
  },
  {
    slug: "ov-khak",
    figNumber: "04",
    title: "Ov Khak: Cambodia's Own",
    khmerName: "ឪខាក់",
    body:
      "Ov Khak is the durian Cambodia claims as its own — grown chiefly around Kampot's Teuk Chhou district and in Kampong Cham, and recognized by name in the ASEAN Standard for Durian, the region's official fruit-trade classification, which sets its fruit at one to four kilograms. In 2025, when China's ambassador to Cambodia visited a Kampot farm, it was Ov Khak he was given to taste, and the variety he singled out as the best durian he'd had. As Cambodia begins exporting fresh durian to China for the first time, Ov Khak is the name most likely to carry that reputation forward.",
    sources: [
      { text: "ASEAN Standard for Durian, Annex 2 — “Ov khak”, 1.0–4.0 kg", url: ASEAN },
      { text: "Khmer Times / FreshPlaza (May 2025) — the Chinese ambassador's Kampot farm visit" },
      {
        text: "South China Morning Post — Cambodia's first direct durian air shipments to China",
        url: "https://www.scmp.com/economy/china-economy/article/3321602/chinas-durian-diplomacy-expands-cambodias-first-direct-air-shipments-fruit",
      },
    ],
    image: {
      src: "/ov-khak-opened.jpg",
      alt: "A hand holding an opened durian half, thick pale-yellow flesh in the shell, a whole fruit hanging on the tree behind",
      caption:
        "An opened fruit, held under a tree still carrying its own — the flesh thick and pale gold in the locule.",
    },
    tags: ["ov khak", "native variety", "export"],
    status: "published",
  },
  {
    slug: "sadong-kit",
    figNumber: "05",
    title: "Sadong Kit: The Undocumented Variety",
    khmerName: "",
    body:
      "Sadong Kit appears by name in the same official ASEAN trade standard as Ov Khak, listed as a recognized Cambodian variety with the same fruit-weight range. Beyond that single listing, almost nothing about it has been written in English — no flavor notes, no growing timeline, no clearly documented region beyond an assumed overlap with Ov Khak's territory. It's a variety that officially exists and is functionally undocumented — which may say more about how little of Cambodia's durian knowledge has made it online than about the fruit itself.",
    sources: [
      { text: "ASEAN Standard for Durian, Annex 2 — “San dang ket”, 1.0–4.0 kg", url: ASEAN },
    ],
    image: null,
    tags: ["sadong kit", "native variety", "research gap"],
    status: "in-progress",
  },
  {
    slug: "monthong",
    figNumber: "06",
    title: "Monthong: The Golden Pillow",
    khmerName: "",
    body:
      "Monthong is Thailand's durian, and the closest thing the region has to a default. Its flesh is thick, pale yellow, and comparatively mild-smelling, which has made it the most widely traded durian cultivar in Southeast Asia — including in Kampot, where it's grown alongside Cambodia's own varieties. It's also a slow fruit: once picked, it takes about five days to fully ripen, longer than most. The ASEAN trade standard lists it — spelled “Montong” there — at 1.5 to 6.0 kilograms, half again the top weight allowed for Cambodia's own varieties.",
    sources: [
      { text: "ASEAN Standard for Durian, Annex 2 — “Montong”, 1.5–6.0 kg", url: ASEAN },
      { text: "Published horticultural research on Montong fruit maturity" },
    ],
    image: null,
    tags: ["monthong", "variety", "trade"],
    status: "published",
  },
  {
    slug: "musang-king",
    figNumber: "07",
    title: "Musang King: The Newcomer",
    khmerName: "",
    body:
      "Musang King doesn't belong to Kampot's history — it belongs to its export ambitions. The Malaysian variety, officially registered as D197, has become the name Chinese buyers ask for specifically, and Cambodian farmers have begun grafting it into orchards that never grew it before. The trade standard lists D197 at one to three kilograms — a smaller fruit than Monthong, and smaller at the top end than Ov Khak. It's a minority planting in Kampot, and an honest one: not a heritage crop, a market decision.",
    sources: [
      { text: "ASEAN Standard for Durian, Annex 2 — “D197”, 1.0–3.0 kg", url: ASEAN },
      {
        text: "The Star (Malaysia), 17 June 2025 — Cambodian durian farmers and export ambitions",
        url: "https://www.thestar.com.my/aseanplus/aseanplus-news/2025/06/17/durian-farmers-in-north-eastern-cambodia-win-local-hearts-eye-global-markets",
      },
    ],
    image: null,
    tags: ["musang king", "grafting", "export"],
    status: "published",
  },
  {
    slug: "a-name-worth-protecting",
    figNumber: "08",
    title: "A Name Worth Protecting",
    khmerName: "",
    body:
      "Durian sells for more under the name “Kampot” than under almost any other label in Cambodia, and the gap is the whole problem. Ouk Kong, president of the Cambodian Durian Association, puts genuine Kampot fruit at around 18,000 riel a kilogram — about $4.50 — against roughly 10,000 riel for imported fruit sold under the same name, which makes the counterfeit the affordable choice. The association has warned that some of that fruit is smuggled across the border and may carry chemical residues, and that the same relabeling reaches Kampong Cham, Battambang, and Tbong Khmum. Kampot has pursued formal Geographical Indication status for its durian, the protection its pepper won in 2016. Until that is secured, telling the real thing from a relabeled import is left largely to the buyer.",
    sources: [
      {
        text: "Cambodianess — “Alarm Raised Over Health Risks from Allegedly Imported Durians” (Ouk Kong, Cambodian Durian Association)",
        url: "https://cambodianess.com/article/alarm-raised-over-health-risks-from-allegedly-imported-durians",
      },
      { text: "Khmer Times — earlier reporting on counterfeit “Kampot durian” labeling" },
    ],
    image: null,
    tags: ["kampot", "geographical indication", "market"],
    status: "published",
  },
  {
    slug: "when-the-rain-doesnt-come",
    figNumber: "09",
    title: "When the Rain Doesn't Come",
    khmerName: "",
    body:
      "Uon Cheang Meng, president of the Teuk Chhou durian farming community, says prolonged heat and too little rain have left growers unable to irrigate: fruit fails to reach standard size and falls before it ripens, and some trees, in his words, are close to dying. About 30 percent of the district's roughly 100 hectares of durian have been affected. Pov Veasna, who farms around 300 trees there, counts ten to twenty fruit dropping a day, and says the heat ripens what survives too early — smaller, lighter, and thinner in aroma and sweetness, which pulls the price down with it. The orchards sit on slopes and draw on water running off the mountains; the drought has dried those sources, and the community has discussed building real irrigation rather than depending on them. Nothing has been decided. It is a recent thread in Kampot's durian story, not a settled one.",
    sources: [
      {
        text: "Cambodianess — Chhum Chantha, “Kampot Durian Growers Report Declining Yields and Quality as Climate Shifts in Cambodia”, 4 May 2026",
        url: "https://cambodianess.com/article/kampot-durian-growers-report-declining-yields-and-quality-as-climate-shifts-in-cambodia",
      },
    ],
    image: null,
    tags: ["climate", "teuk chhou", "yield"],
    status: "in-progress",
  },
  {
    slug: "kampots-season",
    figNumber: "10",
    title: "Kampot's Season",
    khmerName: "",
    body:
      "The rhythm starts after Khmer New Year in April, when the rains taper off long enough to trigger flowering. Fruit develops over the following three to five months. Harvest generally runs May through August, sometimes later, shifting slightly earlier or later each year depending on when the dry spell actually arrives.",
    sources: [
      { text: "Published horticultural research on durian flowering and fruit development" },
      { text: "Phnom Penh Post — Cambodian durian farming and industry context" },
    ],
    image: {
      src: "/harvest-ready-to-sell.jpg",
      alt: "Several hundred harvested durians laid out on tarpaulins between the trees, a pickup truck waiting behind them",
      caption:
        "A season's harvest laid out on tarpaulins between the trees, stems trimmed, the truck waiting.",
    },
    tags: ["season", "harvest", "kampot"],
    status: "published",
  },
];

export default fieldNotes;

/* Lookup helpers. Kept here so no page has to know the array is an array. */

export function getNote(slug) {
  return fieldNotes.find((note) => note.slug === slug) || null;
}

/* The entry after this one, wrapping to the start so the last entry is not
   a dead end. Returns null if the slug is unknown. */
export function getNextNote(slug) {
  const i = fieldNotes.findIndex((note) => note.slug === slug);
  if (i === -1) return null;
  return fieldNotes[(i + 1) % fieldNotes.length];
}
