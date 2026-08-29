import collection from "../collection.config.js";

/* The bibliography behind every Field Note, grouped as the Sources page
   renders it. Photo credits mirror public/credits.json — the licence line
   travels with the image wherever it is used. */

export const sourceGroups = [
  {
    heading: "Regional and news reporting",
    items: [
      {
        name: "Cambodianess — Chhum Chantha, 4 May 2026",
        note: "“Kampot Durian Growers Report Declining Yields and Quality as Climate Shifts in Cambodia.” Source for Fig. 09: Uon Cheang Meng and Pov Veasna on heat, irrigation, and premature fruit drop in Teuk Chhou.",
        url: "https://cambodianess.com/article/kampot-durian-growers-report-declining-yields-and-quality-as-climate-shifts-in-cambodia",
      },
      {
        name: "Cambodianess",
        note: "“Alarm Raised Over Health Risks from Allegedly Imported Durians.” Source for Fig. 08: Ouk Kong of the Cambodian Durian Association on relabeled imports and the price gap.",
        url: "https://cambodianess.com/article/alarm-raised-over-health-risks-from-allegedly-imported-durians",
      },
      {
        name: "Cambodianess, July 2026",
        note: "“Cambodia's Durian Exports to China Surge Nearly 40-Fold as New Rail Corridor Speeds Trade.” Source for the 2025 national area and production figures, credited to the Department of Long-Term Crop Development.",
        url: "https://cambodianess.com/article/cambodias-durian-exports-to-china-surge-nearly-40-fold-as-new-rail-corridor-speeds-trade",
      },
      {
        name: "Khmer Times, 9 May 2020",
        note: "“Durian lovers to feast on Kampot durians.” Source for Kampot's provincial area and yield.",
        url: "https://www.khmertimeskh.com/50721478/durian-lovers-to-feast-on-kampot-durians/",
      },
      {
        name: "South China Morning Post",
        note: "Cambodia's first direct durian air shipments to China.",
        url: "https://www.scmp.com/economy/china-economy/article/3321602/chinas-durian-diplomacy-expands-cambodias-first-direct-air-shipments-fruit",
      },
      {
        name: "The Star (Malaysia), 17 June 2025",
        note: "Cambodian durian farmers and their export ambitions.",
        url: "https://www.thestar.com.my/aseanplus/aseanplus-news/2025/06/17/durian-farmers-in-north-eastern-cambodia-win-local-hearts-eye-global-markets",
      },
      {
        name: "Khmer Times / FreshPlaza, May 2025",
        note: "The Chinese ambassador's visit to a Kampot farm and his remarks on Ov Khak. Cited from research notes; a direct link has not yet been re-confirmed.",
      },
      {
        name: "Phnom Penh Post",
        note: "Profile of a Cambodian durian farmer, and wider industry context.",
      },
    ],
  },
  {
    heading: "Official and technical sources",
    items: [
      {
        name: "ASEAN Standard for Durian (ASEAN Stan 1:2006, Rev.1-2012)",
        note: "Read directly. Annex 2 gives the commercial weight ranges quoted here — Ov khak and San dang ket at 1.0–4.0 kg, Montong at 1.5–6.0 kg, D197 at 1.0–3.0 kg. Annex 3 gives the maturity tests behind Fig. 01. Annex 4 records Cambodia's vernacular name for the fruit as “Turian”.",
        url: "https://asean.org/wp-content/uploads/2012/05/1-ASEAN-STANDARD-FOR-DURIAN-REV-2012.pdf",
      },
      {
        name: "Published horticultural research",
        note: "Academic work on durian flowering, nocturnal pollination, days-after-anthesis maturity, and Montong fruit development. Cited from research notes; individual papers are not yet linked.",
      },
    ],
  },
];

/* Photograph credits. `own` marks the curator's own work — those are the only
   primary material on the site, and they are credited as such rather than
   being passed off as, or hidden among, the licensed Wikimedia images. */
export const photoCredits = [
  {
    file: "ov-khak-opened.jpg",
    caption: "An opened durian held beneath a fruiting tree",
    author: collection.curator,
    own: true,
  },
  {
    file: "tree-in-fruit.jpg",
    caption: "A durian tree carrying mature fruit, branches braced",
    author: collection.curator,
    own: true,
  },
  {
    file: "harvest-ready-to-sell.jpg",
    caption: "Harvest laid out on tarpaulins, ready for the buyer",
    author: collection.curator,
    own: true,
  },
  {
    file: "kampot-durian-monument.jpg",
    caption: "The durian monument at the Kampot roundabout",
    author: "Myrmux",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    page:
      "https://commons.wikimedia.org/wiki/File:Durian_Skulptur_in_Kampot,_Kambodscha.jpg",
  },
];

export const method =
  "Compiled from published agricultural research, regional news reporting, and official ASEAN trade standards.";
