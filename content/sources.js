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
        name: "FreshPlaza, May 2025",
        note: "“China seeks more Cambodian Au Khak durians.” Source for Fig. 04: the Chinese ambassador's Kampot farm visit and his remark that Ov Khak is “the best durian in the world.”",
        url: "https://www.freshplaza.com/asia/article/9731346/china-seeks-more-cambodian-au-khak-durians/",
      },
      {
        name: "Cambodianess",
        note: "“Chinese Authorities Approve Export of Fresh Durian from Cambodia to China.” Source for Fig. 11: the 17 April 2025 phytosanitary protocol and the 112 orchards / 30 packing facilities approved by China's customs authority (GACC).",
        url: "https://cambodianess.com/article/chinese-authorities-approve-export-of-fresh-durian-from-cambodia-to-china",
      },
      {
        name: "Agence Kampuchea Presse (AKP), 2026",
        note: "“Cambodia's Fresh Durian Exports to China Reach 5,738 Tonnes.” Source for Fig. 11: the January–July 2026 export volume, the year-on-year increase, and the Laos overland route cutting transit from 15–20 days by sea to about five, per MAFF spokesperson Khim Finan.",
        url: "https://www.akp.gov.kh/post/detail/376689",
      },
      {
        name: "VOA News, 18 February 2016",
        note: "“Cambodia's Kampot Pepper Wins Coveted EU Protection.” Source for Fig. 08: Kampot pepper's 2016 EU Geographical Indication status.",
        url: "https://www.voanews.com/a/ap-cambodia-kampot-pepper-wins-coveted-eu-protection/3215893.html",
      },
      {
        name: "Phnom Penh Post",
        note: "Profile of a Cambodian durian farmer, and wider industry context.",
      },
    ],
  },
  {
    heading: "Family and community knowledge",
    items: [
      {
        name: "The curator's family, Kampot durian growers",
        note: "Khmer vocabulary used in the field — the knock test, ripe/unripe/overripe, the dry season, dropped vs. cut fruit, grafting, orchard, grower, middleman, and farming community — plus confirmation of ឪខាក់ (Ov Khak), សាដង់កិត (Sadong Kit), and ដើមទុរេន/ដើម (durian tree, full and short form) as spoken locally. Provided directly for this project, not drawn from a publication.",
      },
      {
        name: "The curator's family, Kampot durian growers — grower interview",
        note: "First-hand answers on reading ripeness (the stem-joint swelling, thorn-tip color change, and the knock-test sound), on why Sadong Kit has become rare to grow and sell (short harvest window, poor transportability once ripe, lower yield, and a post-war shift toward Monthong and Musang King as cash crops), and on adapting to the 2024 drought (extended dry season disrupting flowering, and the resulting irrigation, mulching, and shade-netting changes). Provided directly for this project. The specific grower's name and interview date are not yet recorded — see the entries this backs for where it is used.",
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
    file: "durian-flower.jpg",
    caption: "Durian flowers in close-up, open at night for their pollinators",
    author: collection.curator,
    own: true,
  },
  {
    file: "sadong-kit.jpg",
    caption: "A Sadong Kit fruit on the tree, in the family's own orchard",
    author: collection.curator,
    own: true,
  },
  {
    file: "drought-damage-tree.jpg",
    caption: "A drought-stressed durian tree, its leaves browned and dropping",
    author: collection.curator,
    own: true,
  },
  {
    file: "teuk-chou-scenic.jpg",
    caption: "The Teuk Chhou river at dusk, with the hills behind it",
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
  "Compiled from published agricultural research, regional news reporting, official ASEAN trade standards, and interviews with growers in the curator's family.";
