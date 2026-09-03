/* The Field Notes, in catalogue order.
   Shape is defined in entry-sketch.md. Every entry's claims trace to the
   sources listed on it; the matching bibliography lives in content/sources.js.

   khmerName is present only where a Khmer name for the variety is actually
   documented. The rest are left empty on purpose — an invented Khmer name
   would be the same failure as an invented quote. */

/* Cited often enough to be worth a name. Verified to resolve; Annex 2 is the
   weight table, Annex 3 the maturity tests, Annex 4 the vernacular names. */
const ASEAN =
  "https://asean.org/wp-content/uploads/2012/05/1-ASEAN-STANDARD-FOR-DURIAN-REV-2012.pdf";

/* Horticultural sources, read directly. Cited in more than one entry, so they
   are named once here rather than retyped. */
const CTAHR = {
  text: "Robert E. Paull et al., “Durian: Postharvest Quality-Maintenance Guidelines”, F_N-27, College of Tropical Agriculture and Human Resources, University of Hawai\u2018i at M\u0101noa, June 2014",
  url: "https://www.ctahr.hawaii.edu/oc/freepubs/pdf/F_N-27.pdf",
};

const DRY_SPELLS = {
  text: "Eguchi, Hassan & Numata (2024), “Dry spells trigger durian flowering in aseasonal tropics”, International Journal of Biometeorology 69(2), 403\u2013409",
  url: "https://doi.org/10.1007/s00484-024-02819-x",
};

const FLYING_FOX = {
  text: "Aziz et al. (2017), “Pollination by the locally endangered island flying fox (Pteropus hypomelanus) enhances fruit production of the economically important durian (Durio zibethinus)”, Ecology and Evolution 7(21), 8670\u20138684",
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5677486/",
};

const MATURITY_STAGES = {
  text: "Youryon & Supapvanich (2022), “Quality Comparison of Naturally and Artificially Ripened \u2018Monthong\u2019 Durian Fruits Harvested at Various Maturity Stages”, Current Applied Science and Technology 22(6)",
  url: "https://doi.org/10.55003/cast.2022.06.22.002",
};

const fieldNotes = [
  {
    slug: "reading-ripeness",
    figNumber: "01",
    title: "Reading Ripeness",
    khmerName: "",
    body:
      "A durian doesn't ripen on a calendar; it ripens by advertisement. Growers watch the joint where fruit meets branch swell as if about to pop loose, and watch the thorns themselves: the tips shift from bright green to a yellowish-brown, the gaps between them widen slightly, and the seams running down the shell become easier to pick out. The real test is a stick and an ear — tap the husk, and a sharp, solid \"tack-tack\" means it's still green, while a deep, hollow \"thud-thud\" or \"bop-bop\" means the flesh inside has ripened and pulled back just enough from the shell to leave a pocket of air. Not every fruit is left to signal on its own: Monthong bound for market is often cut at around 85 percent maturity, ahead of full ripeness, so it survives the trip and finishes ripening in transit. Locally, the tap itself is ការគោះមើល, the knock test, and a fruit is placed somewhere along ខ្ចី (unripe), ទុំ (ripe), or ទុំជ្រុល (overripe). The published postharvest literature reaches the same place by a different road: the abscission zone, the carpel sutures, and tapping are named there as the most reliable maturity criteria, and the early cut has a number on it — around 115 days after flowering is roughly 85 percent maturity. There is a cost to waiting, too. A fruit that drops and is picked up off the ground keeps two to three days; the same fruit cut from the branch keeps seven to eight.",
    sources: [
      { text: "ASEAN Standard for Durian (ASEAN Stan 1:2006, Rev.1-2012), Annex 3 — “Methods for testing durian fruit maturity”", url: ASEAN },
      { text: "Vocabulary confirmed by the curator's family, Kampot durian growers (see Sources)" },
      { text: "Ripeness signs and the Monthong early-cut practice, from a grower interview with the curator's family, Kampot durian growers (see Sources)" },
      CTAHR,
      MATURITY_STAGES,
    ],
    image: null,
    tags: ["harvest", "ripeness"],
    status: "published",
  },
  {
    slug: "the-dry-spell",
    figNumber: "02",
    title: "The Dry Spell",
    khmerName: "រដូវក្តៅ",
    body:
      "Durian flowering doesn't start with rain — it starts with the absence of it. Tracking five flowering events, Eguchi, Hassan and Numata found a drought of roughly fifteen days before every one, with peak flowering about fifty days after the fifteen-day rainfall average dropped below a millimetre a day. The dry spell does not have to be unbroken, which is the part orchard lore usually gets wrong: buds were induced through occasional rain, so long as that running average stayed low. The flowers themselves keep a schedule of about nine hours. They open in the late afternoon, near a quarter past four, and the whole corolla drops away between one and two in the morning — one night, and no more. Of everything that visits in that window, only bats were found to be in a mutualistic relationship with the flower; honeybees and stingless bees came in numbers but behaved largely as pollen robbers, and moths were barely recorded at all.",
    sources: [
      DRY_SPELLS,
      FLYING_FOX,
      { text: "Term confirmed by the curator's family, Kampot durian growers (see Sources)" },
    ],
    image: {
      src: "/durian-flower.jpg",
      width: 728,
      height: 724,
      alt: "A cluster of pale green-white durian flowers in close-up, their long stamens hanging down",
      caption:
        "Durian flowers. They open in the late afternoon and are gone by two in the morning; bats do the pollinating.",
    },
    tags: ["flowering", "pollination", "season"],
    status: "published",
  },
  {
    slug: "from-flower-to-fruit",
    figNumber: "03",
    title: "From Flower to Fruit",
    khmerName: "",
    body:
      "Between pollination and a ripe fruit lies roughly three to five months, though the exact count depends on the variety. Researchers measure it in “days after anthesis” — days since the flower opened. For Thailand's Monthong the scale is well mapped: 110 days is about 80 percent maturity, 115 about 85, 120 about 90, and fruit left on the tree to ripen there is taken at around 130. Cambodia's own varieties have not been studied with anything like that precision. Their timing is known to growers by observation, and has never been written down as a number.",
    sources: [
      MATURITY_STAGES,
      CTAHR,
    ],
    image: {
      src: "/tree-in-fruit.jpg",
      width: 1536,
      height: 2048,
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
      {
        text: "FreshPlaza (May 2025) — the Chinese ambassador's Kampot farm visit",
        url: "https://www.freshplaza.com/asia/article/9731346/china-seeks-more-cambodian-au-khak-durians/",
      },
      {
        text: "South China Morning Post — Cambodia's first direct durian air shipments to China",
        url: "https://www.scmp.com/economy/china-economy/article/3321602/chinas-durian-diplomacy-expands-cambodias-first-direct-air-shipments-fruit",
      },
    ],
    image: {
      src: "/ov-khak-opened.jpg",
      width: 960,
      height: 1280,
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
    khmerName: "សាដង់កិត",
    body:
      "Sadong Kit appears by name in the same official ASEAN trade standard as Ov Khak, listed as a recognized Cambodian variety with the same fruit-weight range. Beyond that single listing, almost nothing about it has been written in English — no flavor notes, no growing timeline, no clearly documented region beyond an assumed overlap with Ov Khak's territory. Even the Khmer name, សាដង់កិត, doesn't appear written down anywhere in the sources this guide could find; it's recorded here because it's still spoken. Why it went undocumented is partly a question of what survives a truck ride. Growers in the curator's family describe it as commercially awkward: a very short harvest window, needing to drop naturally or be cut at exactly the right moment, and flesh that softens so fast once ripe that it can turn to mush in transit — against Monthong, which has a thick husk, can be cut at around 85 percent maturity, and ripens on its own by the time it reaches Phnom Penh. Yield per tree is lower too. When orchards were replanted after the war years, growers needed cash crops, and the market wanted Monthong — and now Musang King, which fetches export prices. Sadong Kit is kept in small numbers, for family, for locals, and for people who drive to the farm to eat it there. It's a variety that officially exists and is functionally undocumented — which may say more about which durians were worth writing down than about the fruit itself.",
    sources: [
      { text: "ASEAN Standard for Durian, Annex 2 — “San dang ket”, 1.0–4.0 kg", url: ASEAN },
      { text: "Khmer name confirmed by the curator's family, Kampot durian growers (see Sources)" },
      { text: "Why Sadong Kit is rarely planted — harvest window, transportability, yield, and the post-war shift to cash crops — from a grower interview with the curator's family (see Sources)" },
    ],
    image: {
      src: "/sadong-kit.jpg",
      width: 1280,
      height: 960,
      alt: "A single Sadong Kit fruit hanging from a branch against a blue sky, another fruit visible behind it",
      caption:
        "A Sadong Kit fruit on the tree — the curator's family's own orchard.",
    },
    tags: ["sadong kit", "native variety", "research gap"],
    status: "published",
  },
  {
    slug: "monthong",
    figNumber: "06",
    title: "Monthong: The Golden Pillow",
    khmerName: "",
    body:
      "Monthong is Thailand's durian, and the closest thing the region has to a default. Its flesh is thick, pale yellow, and comparatively mild-smelling, which has made it the most widely traded durian cultivar in Southeast Asia — including in Kampot, where it's grown alongside Cambodia's own varieties. It's also a slow fruit: once picked it takes four to six days to ripen, where Chanee takes two to four. The ASEAN trade standard lists it — spelled “Montong” there — at 1.5 to 6.0 kilograms, half again the top weight allowed for Cambodia's own varieties.",
    sources: [
      { text: "ASEAN Standard for Durian, Annex 2 — “Montong”, 1.5–6.0 kg", url: ASEAN },
      CTAHR,
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
      "Musang King doesn't belong to Kampot's history — it belongs to its export ambitions. The Malaysian variety, officially registered as D197, has become the name Chinese buyers ask for specifically, and Cambodian farmers have begun grafting it into orchards that never grew it before. What growers call ការផ្សាំ — grafting — is done ដើម by ដើម, tree by tree, across the ចម្ការ, the orchard (ដើមទុរេន in full, ដើម for short). The trade standard lists D197 at one to three kilograms — a smaller fruit than Monthong, and smaller at the top end than Ov Khak. It's a minority planting in Kampot, and an honest one: not a heritage crop, a market decision.",
    sources: [
      { text: "ASEAN Standard for Durian, Annex 2 — “D197”, 1.0–3.0 kg", url: ASEAN },
      {
        text: "The Star (Malaysia), 17 June 2025 — Cambodian durian farmers and export ambitions",
        url: "https://www.thestar.com.my/aseanplus/aseanplus-news/2025/06/17/durian-farmers-in-north-eastern-cambodia-win-local-hearts-eye-global-markets",
      },
      { text: "Vocabulary confirmed by the curator's family, Kampot durian growers (see Sources)" },
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
      "Durian sells for more under the name “Kampot” than under almost any other label in Cambodia, and the gap is the whole problem. Ouk Kong, president of the Cambodian Durian Association, puts genuine Kampot fruit at around 18,000 riel a kilogram — about $4.50 — against roughly 10,000 riel for imported fruit sold under the same name, which makes the counterfeit the affordable choice. The association has warned that some of that fruit is smuggled across the border and may carry chemical residues, and that the same relabeling reaches Kampong Cham, Battambang, and Tbong Khmum. Much of it changes hands through an ឈ្មួញកណ្តាល, a middleman, before it ever reaches a buyer — one more step where a label can quietly change. Kampot has pursued formal Geographical Indication status for its durian, the protection its pepper won from the EU in 2016. Until that is secured, telling the real thing from a relabeled import is left largely to the buyer — and to trusting the អ្នកដាំ, the grower, who sold it.",
    sources: [
      {
        text: "Cambodianess — “Alarm Raised Over Health Risks from Allegedly Imported Durians” (Ouk Kong, Cambodian Durian Association)",
        url: "https://cambodianess.com/article/alarm-raised-over-health-risks-from-allegedly-imported-durians",
      },
      { text: "Khmer Times — earlier reporting on counterfeit “Kampot durian” labeling" },
      {
        text: "VOA News, 18 February 2016 — Kampot pepper's EU Geographical Indication status",
        url: "https://www.voanews.com/a/ap-cambodia-kampot-pepper-wins-coveted-eu-protection/3215893.html",
      },
      { text: "Vocabulary confirmed by the curator's family, Kampot durian growers (see Sources)" },
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
      "Uon Cheang Meng, president of the Teuk Chhou durian farming community — a សហគមន៍កសិកម្ម — says prolonged heat and too little rain have left growers unable to irrigate: fruit fails to reach standard size and falls before it ripens, and some trees, in his words, are close to dying. About 30 percent of the district's roughly 100 hectares of durian have been affected. Pov Veasna, who farms around 300 trees there, counts ten to twenty fruit dropping a day — ធុរេនទុំជ្រុះ, fallen fruit, rather than the ធុរេនកាត់ that would normally be cut by hand — and says the heat ripens what survives too early: smaller, lighter, and thinner in aroma and sweetness, which pulls the price down with it. The orchards sit on slopes and draw on water running off the mountains; the drought has dried those sources, and the community has discussed building real irrigation rather than depending on them. Nothing has been decided. Growers in the curator's family describe the same seasons from inside their own orchard. Durian needs a short dry spell to trigger flowering, but the dry seasons have been running long — and in the 2024 El Niño heat, with temperatures near 43°C after months without rain, the trees went into survival mode and aborted their own flowers and young fruit to conserve water. The May rains that normally cool things down and open the harvest stopped arriving predictably. The response has been to stop relying on rain at all: pumps running longer on groundwater, at a cost that eats into the margin; heavier organic mulch banked around the trunks to hold soil moisture; and shade netting over younger Musang King grafts, whose leaves were being scorched outright by afternoon sun. It is a recent thread in Kampot's durian story, not a settled one.",
    sources: [
      {
        text: "Cambodianess — Chhum Chantha, “Kampot Durian Growers Report Declining Yields and Quality as Climate Shifts in Cambodia”, 4 May 2026",
        url: "https://cambodianess.com/article/kampot-durian-growers-report-declining-yields-and-quality-as-climate-shifts-in-cambodia",
      },
      { text: "Vocabulary confirmed by the curator's family, Kampot durian growers (see Sources)" },
      { text: "The 2024 heat, flower and fruit abortion, and the irrigation, mulching, and shade-netting response — from a grower interview with the curator's family (see Sources)" },
    ],
    image: {
      src: "/drought-damage-tree.jpg",
      width: 734,
      height: 884,
      alt: "A durian tree with most of its leaves browned and dried, standing among greener trees in an orchard",
      caption:
        "A drought-stressed tree in the family's orchard, its leaves browned and dropping.",
    },
    tags: ["climate", "teuk chhou", "yield"],
    status: "in-progress",
  },
  {
    slug: "kampots-season",
    figNumber: "10",
    title: "Kampot's Season",
    khmerName: "រដូវប្រមូលផល",
    body:
      "The rhythm starts after Khmer New Year in April, when the rains taper off long enough to trigger flowering. Fruit develops over the following three to five months. Harvest generally runs May through August, sometimes later, shifting slightly earlier or later each year depending on when the dry spell actually arrives.",
    sources: [
      { text: "Published horticultural research on durian flowering and fruit development" },
      { text: "Phnom Penh Post — Cambodian durian farming and industry context" },
      { text: "Term confirmed by the curator's family, Kampot durian growers (see Sources)" },
    ],
    image: {
      src: "/harvest-ready-to-sell.jpg",
      width: 2048,
      height: 1536,
      alt: "Several hundred harvested durians laid out on tarpaulins between the trees, a pickup truck waiting behind them",
      caption:
        "A season's harvest laid out on tarpaulins between the trees, stems trimmed, the truck waiting.",
    },
    tags: ["season", "harvest", "kampot"],
    status: "published",
  },
  {
    slug: "the-china-route",
    figNumber: "11",
    title: "The China Route",
    khmerName: "",
    body:
      "Until 17 April 2025, Cambodia had no agreement letting it export fresh durian to China at all. That changed during Xi Jinping's state visit, when the two countries signed a phytosanitary protocol for durian alongside two others, for edible bird's nests and crocodiles. By July, China's customs authority (GACC) had approved 112 orchards and 30 packing facilities as meeting the required agricultural and food-safety standards — the actual list of farms cleared to ship. The area planted nationally has grown alongside that access: from just over 5,000 hectares in 2021 to 16,193 hectares by 2025, producing an estimated 135,546 tonnes. In the first seven months of 2026 alone, Cambodia shipped 5,738 tonnes of fresh durian to China — nearly forty times the volume moved over the same period the year before, according to the agriculture ministry. Most of it now travels overland through Laos, a route the ministry says cuts transit time from 15 to 20 days by sea to around five, so the fruit arrives before it has had the chance to soften.",
    sources: [
      {
        text: "South China Morning Post — Cambodia's first direct durian air shipments to China",
        url: "https://www.scmp.com/economy/china-economy/article/3321602/chinas-durian-diplomacy-expands-cambodias-first-direct-air-shipments-fruit",
      },
      {
        text: "Cambodianess — “Chinese Authorities Approve Export of Fresh Durian from Cambodia to China” — the 17 April 2025 protocol, GACC's 112 orchards and 30 packing facilities",
        url: "https://cambodianess.com/article/chinese-authorities-approve-export-of-fresh-durian-from-cambodia-to-china",
      },
      {
        text: "Cambodianess, July 2026 — “Cambodia's Durian Exports to China Surge Nearly 40-Fold as New Rail Corridor Speeds Trade” — national area and production figures, Dept. of Long-Term Crop Development",
        url: "https://cambodianess.com/article/cambodias-durian-exports-to-china-surge-nearly-40-fold-as-new-rail-corridor-speeds-trade",
      },
      {
        text: "Agence Kampuchea Presse (AKP), 2026 — “Cambodia's Fresh Durian Exports to China Reach 5,738 Tonnes” — Jan–Jul 2026 volume and the Laos transit-time figures",
        url: "https://www.akp.gov.kh/post/detail/376689",
      },
    ],
    image: null,
    tags: ["china", "export", "trade"],
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
