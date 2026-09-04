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
      "A durian doesn't ripen on a calendar; it ripens by advertisement. Growers watch the joint where fruit meets branch swell as if about to pop loose, and watch the thorns themselves: the tips shift from bright green to a yellowish-brown, the gaps between them widen slightly, and the seams running down the shell become easier to pick out. The real test is a stick and an ear — tap the husk, and a sharp, solid \"tack-tack\" means it's still green, while a deep, hollow \"thud-thud\" or \"bop-bop\" means the flesh inside has ripened and pulled back just enough from the shell to leave a pocket of air. Not every fruit is left to signal on its own: Monthong bound for market is often cut at around 85 percent maturity, ahead of full ripeness, so it survives the trip and finishes ripening in transit. Locally, the tap itself is ការគោះមើល, the knock test, and a fruit is placed somewhere along ខ្ចី (unripe), ទុំ (ripe), or ទុំជ្រុល (overripe). The published postharvest literature reaches the same place by a different road: the abscission zone, the carpel sutures, and tapping are named there as the most reliable maturity criteria, and the early cut has a number on it — around 115 days after flowering is roughly 85 percent maturity. There is a cost to waiting, too. A fruit that drops and is picked up off the ground keeps two to three days; the same fruit cut from the branch keeps seven to eight. The curator's family put two hands on the fruit at once: the stick taps the middle belt of the husk while the other hand holds the stem and reads the vibration coming back through it. The stick is thirty centimetres of hardwood wrapped in a strip of old motorcycle inner tube — a bare knife handle bruises the thorn tips, and a middleman will take the price down for it. On their scale a green fruit answers tack-tack, dense and high; a ready one answers thud-thud or boomp-boomp, hollow, the flesh having pulled back off the inner wall; a fruit gone past answers plop-plop, dull, dead weight with no echo at all. The stem tells the same story more slowly — the joint darkens, swells, weeps a sticky sap, and bends without snapping — and so does the smell, grassy in a green fruit, warm and faintly sulfurous at the base of a ready one. Ov Khak takes a harder tap than Monthong, its skin being thicker and its thorns coarser. None of it is quick to learn: three full seasons before the ear is trained, in this grower's account, and he still misjudges three to five fruit in every hundred, each early cut losing half its value on the spot. Cutting runs from five to half past eight in the morning, while the stems are rigid and the fruit will not sweat in the basket. About nine in ten are cut rather than left to fall; the ones left to drop are for visitors eating at the farm the same day, and are caught in nylon nets slung under the clusters or in beds of rice straw laid below the low branches. A fruit cut early cannot really be rescued — wrapping the stem and shutting it in a warm room with a ripe banana will soften it, but the flesh stays rubbery and never finds its sugar. The terms travel with the practice: the joint is ទងធុរេន or ថ្នាំងទង, a fruit caught right is ទុំល្មម, one caught a day late is ជ្រុលទុំ, and flesh bruised black by a buyer shaking the fruit to hear the seeds move is សាច់ជាំ.",
    sources: [
      { text: "ASEAN Standard for Durian (ASEAN Stan 1:2006, Rev.1-2012), Annex 3 — “Methods for testing durian fruit maturity”", url: ASEAN },
      { text: "Vocabulary confirmed by the curator's family, Kampot durian growers (see Sources)" },
      { text: "Ripeness signs and the Monthong early-cut practice, from the grower interview with the curator's parents, Teuk Chhou durian growers, 1 September 2026 (see Sources)" },
      { text: "The tapping stick, the sound scale, the stem and smell tests, error rate, cutting hours, and the drop-catching nets — from the grower interview with the curator's parents, Teuk Chhou durian growers, 4 September 2026 (see Sources)" },
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
      "Durian flowering doesn't start with rain — it starts with the absence of it. Tracking five flowering events, Eguchi, Hassan and Numata found a drought of roughly fifteen days before every one, with peak flowering about fifty days after the fifteen-day rainfall average dropped below a millimetre a day. The dry spell does not have to be unbroken, which is the part orchard lore usually gets wrong: buds were induced through occasional rain, so long as that running average stayed low. The flowers themselves keep a schedule of about nine hours. They open in the late afternoon, near a quarter past four, and the whole corolla drops away between one and two in the morning — one night, and no more. Of everything that visits in that window, only bats were found to be in a mutualistic relationship with the flower; honeybees and stingless bees came in numbers but behaved largely as pollen robbers, and moths were barely recorded at all. Growers in the curator's family keep a rule that fits: while the trees are in bloom, nothing goes into the canopy — no pesticide, no foliar feed. Spraying in that window washes pollen off, damages the stigmas, and drives away the animals doing the work, and a flower that isn't pollinated sets no fruit. Roots are watered if the ground is dry; the canopy is left alone until the fruit has set. They put the trigger at ten to fourteen consecutive rainless days — a shorter count than the study's fifteen, and from one orchard rather than five events — and they read the failure directly: heavy rain around day seven and the tree abandons the attempt, pushing a flush of young leaves, លាស់ស្លឹក, instead of buds. The buds when they come look like fish scales, ស្រកាត្រី, brownish-white bumps along the underside of lateral branches two to four years old. There are two or three distinct waves in a season, fifteen to twenty days apart. To push the trees they clear the mulch off the root zone so the topsoil dries fast and prune the internal water-suckers, មែកច្រវ៉ាក់, to stress the tree; they do not use the paclobutrazol that large Thai plantations do. In 2016 the El Niño heat ran so hard and the soil so dry that the trees shed their leaves and half the farm produced no bloom at all. The arithmetic at the far end is brutal: of something like ten thousand flowers on a mature tree, fewer than one percent — fifty to eighty — become fruit worth carrying to market, and the growers cut that number again themselves, thinning twice, at ping-pong-ball size and at goose-egg size. On what does the pollinating, this guide has a disagreement on its hands, and prints it rather than settling it. Aziz and colleagues, working in Malaysia, found only bats in a mutualistic relationship with the flower and recorded moths barely at all. The grower, who has stood under these trees at midnight with a headlamp for thirty years, agrees that bats do the heavy lifting — you hear the wings snapping in the canopy — but says large hawk moths, មេអំបៅយប់, are unmistakably on the flowers, taking nectar and dusting their undersides with pollen. His position is that both matter. One is a published study of a different country's orchards; the other is three decades of night observation in the orchard this guide is actually about. Neither is discarded here. The same grower reports the bats themselves down by about half since his childhood, the cave roosts in the limestone hills nearby having been disturbed by quarrying — and hand-pollinates only the fifteen Musang King, with a soft brush on a bamboo pole between seven and nine at night, leaving Ov Khak and Monthong to the animals.",
    sources: [
      DRY_SPELLS,
      FLYING_FOX,
      { text: "Term confirmed by the curator's family, Kampot durian growers (see Sources)" },
      { text: "The no-spray rule while the trees are in flower, from the grower interview of 1 September 2026 (see Sources)" },
      { text: "The ten-to-fourteen-day trigger, the aborted bloom, flowering waves, bud description, stress pruning, the 2016 failure, fruit-set rate and thinning — from the grower interview with the curator's parents, Teuk Chhou durian growers, 4 September 2026 (see Sources)" },
      { text: "The hawk-moth observation, the reported halving of the bat population, and the hand-pollination of the Musang King — from the same interview. Recorded here as the growers' own observation, alongside and not in place of Aziz et al. (2017)" },
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
      "Between pollination and a ripe fruit lies roughly three to five months, though the exact count depends on the variety. Researchers measure it in “days after anthesis” — days since the flower opened. For Thailand's Monthong the scale is well mapped: 110 days is about 80 percent maturity, 115 about 85, 120 about 90, and fruit left on the tree to ripen there is taken at around 130. Cambodia's own varieties have not been studied with anything like that precision, and until this guide asked, their timing had never been written down as a number at all — it was carried by observation, in growers' heads. So here it is, for whatever one orchard is worth: Sadong Kit runs ninety to a hundred days and is the farm's fastest; Musang King a hundred to a hundred and ten; Ov Khak a hundred and five to a hundred and fifteen; Monthong the slowest at a hundred and fifteen to a hundred and twenty-five. The count starts not at anthesis but at the night eighty percent of the petals drop, ស្បៃផ្កាជ្រុះ, which is the moment a grower can actually see. Because two or three flowering waves overlap in a season, each wave's fruit branches are tied with a different colour of raffia — red for the first, blue for the second, yellow for the third — so the calendar is kept on the tree itself rather than on paper. The numbers move: sustained heat pulls maturity forward five to seven days, and continuous cloud and rain through the third month pushes it back by as much as ten. Past about day sixty the fruit is reasonably safe, and natural drop stops unless drought or disease intervenes. The last twenty days are not idle — the fruit puts on something like thirty-five to forty percent of its final weight in them, as starch turns to sugar and fat in the aril. This is one family's record from one orchard at Teuk Chhou, not a study: no replication, no controls, no second site. It is set down here because the alternative was to leave the gap where it was.",
    sources: [
      MATURITY_STAGES,
      CTAHR,
      { text: "Days from petal drop to harvest for Ov Khak, Sadong Kit, Monthong and Musang King, the raffia wave-marking method, and the effect of heat and cloud on the count — from the grower interview with the curator's parents, Teuk Chhou durian growers, 4 September 2026 (see Sources). One orchard, recorded by observation, not a controlled study" },
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
      "Ov Khak is the durian Cambodia claims as its own — grown chiefly around Kampot's Teuk Chhou district and in Kampong Cham, and recognized by name in the ASEAN Standard for Durian, the region's official fruit-trade classification, which sets its fruit at one to four kilograms. In 2025, when China's ambassador to Cambodia visited a Kampot farm, it was Ov Khak he was given to taste, and the variety he singled out as the best durian he'd had. As Cambodia begins exporting fresh durian to China for the first time, Ov Khak is the name most likely to carry that reputation forward. It is also still the backbone of an ordinary Kampot orchard rather than a showpiece: of the couple of hundred trees the curator's family works at Teuk Chhou, about a hundred are Ov Khak, six of them the original trees that came with the land when it was bought in 1994 — the largest still setting eighty to a hundred fruit a year. What the standard cannot tell you is what it tastes like, and the family's account is this: flesh a dark mustard-yellow, thick and oily with no stringiness at all, opening sweet and custardy and finishing on a sharp aromatic bitterness at the back of the palate. Against Monthong it is darker, fatter, shorter-lived and far more complicated; Monthong is pale, sweet, firm and mild. In their orchard the real fruit runs two to three and a half kilograms rather than the standard's full four, with three to five carpels and two big seeds a section — less flesh per fruit than Monthong, and, in their phrase, about twice the flavour density. It is a hardy tree, its native roots resisting the local soil fungi better than the imported Thai varieties do, but the cut fruit softens within about forty-eight hours, which limits how far it can travel. It must be grafted: trees raised from Ov Khak seed revert to wild habit, thin flesh and enormous seeds. Around Teuk Chhou the growers distinguish two sub-types the literature does not — a rich yellow-fleshed សាច់លឿង and a paler, thinner សាច់សជួរ they consider inferior. The buyers are Kampot people, Phnom Penh elders who grew up on local fruit, and direct high-end customers; the big commercial trade wants uniform Monthong, which is why the variety is losing ground commercially while heritage smallholders keep it alive. As for the ambassador's visit, the family heard about it on the news. It brought pride to the village, they say, and it has not changed the price a middleman offers at the gate.",
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
      { text: "Orchard composition, from the grower interview of 1 September 2026 (see Sources)" },
      { text: "Flavour and texture, real-world fruit weight and seed count, hardiness, the requirement to graft, the សាច់លឿង and សាច់សជួរ sub-types, buyers, and the response to the ambassador's visit — from the grower interview with the curator's parents, Teuk Chhou durian growers, 4 September 2026 (see Sources)" },
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
      "Sadong Kit appears by name in the same official ASEAN trade standard as Ov Khak, listed as a recognized Cambodian variety with the same fruit-weight range. Beyond that single listing, almost nothing about it has been written in English — no flavor notes, no growing timeline, no clearly documented region beyond an assumed overlap with Ov Khak's territory. Even the Khmer name, សាដង់កិត, doesn't appear written down anywhere in the sources this guide could find; it's recorded here because it's still spoken. Why it went undocumented is partly a question of what survives a truck ride. Growers in the curator's family describe it as commercially awkward: a very short harvest window, needing to drop naturally or be cut at exactly the right moment, and flesh that softens so fast once ripe that it can turn to mush in transit — against Monthong, which has a thick husk, can be cut at around 85 percent maturity, and ripens on its own by the time it reaches Phnom Penh. Yield per tree is lower too. When orchards were replanted after the war years, growers needed cash crops, and the market wanted Monthong — and now Musang King, which fetches export prices. Sadong Kit is kept for family, for locals, and for people who drive to the farm to eat it there — kept deliberately, and not in token numbers: of the couple of hundred trees in the curator's family's orchard at Teuk Chhou, roughly fifty are Sadong Kit, against a hundred Ov Khak, fifty Monthong, and fifteen grafted Musang King — all of those figures approximate on purpose, because the growers do not keep an exact count. Trees die and trees are planted, more or less continuously, and no number would stay true for a season. What it tastes like has not been written down either, so this is the family's own description: flesh a deep yellow, thick and custardy enough to stick to the roof of the mouth, sweet but carrying a lingering bitterness — burnt caramel, dark roasted coffee — and a faint fermented, almost alcoholic note that can leave the tongue slightly numb. Set against Monthong, which is the mild introduction to durian, it is the one kept by people who want complexity. Older people say សាដង់កិត; younger traders in the village shorten it to Dongkat, and the name is understood locally to refer to the short, tightly packed cluster of thorns near the stem. The trees were already on this land when the family bought it in 1994, which makes them at least thirty-two years old and probably older, and the reason they are still standing is that the same long-standing customers reserve the entire crop every April before it is cut. Its commercial awkwardness has numbers on it now: the whole block comes ripe inside a seven-to-ten-day window; once off the tree it turns watery and ferments toward sour alcohol within thirty-six to forty-eight hours; and it yields thirty to forty percent less weight per tree than Monthong. Traders will not touch it, so it is sold at the gate. Nor has the documentation gap closed anywhere but here: no agricultural extension officer and no researcher has ever come to this orchard to take a sample or map its Sadong Kit trees. The growers expect the variety to be effectively gone from commercial farming within twenty years, surviving in home gardens. It's a variety that officially exists and is functionally undocumented — which may say more about which durians were worth writing down than about the fruit itself.",
    sources: [
      { text: "ASEAN Standard for Durian, Annex 2 — “San dang ket”, 1.0–4.0 kg", url: ASEAN },
      { text: "Khmer name confirmed by the curator's family, Kampot durian growers (see Sources)" },
      { text: "Why Sadong Kit is rarely planted — harvest window, transportability, yield, and the post-war shift to cash crops — from the grower interview with the curator's parents, Teuk Chhou durian growers, 1 September 2026 (see Sources)" },
      { text: "Flavor description, the spoken variant Dongkat, and the orchard's variety split, from the grower interview of 1 September 2026 (see Sources)" },
      { text: "The seven-to-ten-day harvest window, the thirty-six-to-forty-eight-hour spoilage, the yield penalty against Monthong, the April pre-sale, the age of the trees, the absence of any researcher or extension visit, and the growers' twenty-year outlook — from the grower interview with the curator's parents, Teuk Chhou durian growers, 4 September 2026 (see Sources)" },
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
      "Monthong is Thailand's durian, and the closest thing the region has to a default. Its flesh is thick, pale yellow, and comparatively mild-smelling, which has made it the most widely traded durian cultivar in Southeast Asia — including in Kampot, where it's grown alongside Cambodia's own varieties. It's also a slow fruit: once picked it takes four to six days to ripen, where Chanee takes two to four. The ASEAN trade standard lists it — spelled “Montong” there — at 1.5 to 6.0 kilograms, half again the top weight allowed for Cambodia's own varieties. Its arrival in Kampot is recent enough to be dated from inside a single orchard: Monthong scions came across the Thai border in numbers around 1997 and 1998, and the curator's family grafted their first batch in 2002. The reason was not taste. Traders were offering guaranteed purchase contracts for Monthong because Phnom Penh wanted a large, pale, sweet fruit that would not rot on the truck, and no such offer existed for the local varieties. It is a more expensive tree to keep — roughly twice the water and twice the fungicide of Ov Khak, and badly vulnerable to trunk canker — but it carries far more fruit, and on this farm regularly reaches four to six kilograms. It is cut at about eighty-five percent maturity for city transport and nearer ninety for sales at the gate, and softens four to six days after cutting. It is the variety city buyers ask for by name. The grower's own verdict on eating it is blunt: commercially essential, and boring — lacking the deep aroma and the bitter complexity of the local fruit. A few neighbours grow Chanee, ឆានី, and Kanyao, កញ្ញាវ, but Monthong is something like four-fifths of all the Thai-origin trees in Kampot.",
    sources: [
      { text: "ASEAN Standard for Durian, Annex 2 — “Montong”, 1.5–6.0 kg", url: ASEAN },
      CTAHR,
      { text: "Monthong's arrival in Kampot around 1997–1998 and the orchard's own 2002 planting, the trader contracts that drove it, its water and fungicide demands, fruit weight, cut maturity, and the growers' assessment of its flavour — from the grower interview with the curator's parents, Teuk Chhou durian growers, 4 September 2026 (see Sources)" },
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
      "Musang King doesn't belong to Kampot's history — it belongs to its export ambitions. The Malaysian variety, officially registered as D197, has become the name Chinese buyers ask for specifically, and Cambodian farmers have begun grafting it into orchards that never grew it before. What growers call ការផ្សាំ — grafting — is done ដើម by ដើម, tree by tree, across the ចម្ការ, the orchard (ដើមទុរេន in full, ដើម for short). The trade standard lists D197 at one to three kilograms — a smaller fruit than Monthong, and smaller at the top end than Ov Khak. It's a minority planting in Kampot, and an honest one: not a heritage crop, a market decision. In the curator's family's orchard it comes to fifteen grafted trees out of a couple of hundred, top-worked in May 2021 — the family use ការតស្ទូង for this kind of grafting onto an existing tree — onto the scaffold limbs of ten-year-old native rootstock, ដើមទ្រនុង, rather than planted as new trees. The scion wood, មែកពូជ, was bought from an importer bringing certified budwood out of a Malaysian nursery by way of Vietnam. The work itself is quick to describe and hard to do: cut back the main branch, split the bark, seat a wedge-cut scion, bind it tight with grafting tape, and bag it in clear plastic for about three weeks until green shoots show. Roughly thirty percent of the grafts failed or died back through the first rainy season. Those that took set their first trial fruit only this season, three or four to a tree. Young Musang King shoots scorch in Kampot's April heat, above forty degrees, so the grafts sit under seventy-percent black shade netting through the dry season — the row is recognisable from a distance by the nets and the blue tags at the trunks. The growers think the flesh comes out of Kampot soil a deeper orange and more resinously bitter than the imported Malaysian frozen fruit, and rate the whole exercise as financially correct at fifteen trees and wrong at any larger scale. Their stated worry is not agronomic: if enough growers replace native trees with Musang King, they say, the flavour that makes Kampot durian its own thing disappears inside a generation.",
    sources: [
      { text: "ASEAN Standard for Durian, Annex 2 — “D197”, 1.0–3.0 kg", url: ASEAN },
      {
        text: "The Star (Malaysia), 17 June 2025 — Cambodian durian farmers and export ambitions",
        url: "https://www.thestar.com.my/aseanplus/aseanplus-news/2025/06/17/durian-farmers-in-north-eastern-cambodia-win-local-hearts-eye-global-markets",
      },
      { text: "Vocabulary confirmed by the curator's family, Kampot durian growers (see Sources)" },
      { text: "Orchard composition, from the grower interview of 1 September 2026 (see Sources)" },
      { text: "The May 2021 top-working, the budwood’s route from Malaysia, the grafting method and failure rate, the first trial fruit, the shade netting, and the growers’ verdict on scale and on cultural risk — from the grower interview with the curator’s parents, Teuk Chhou durian growers, 4 September 2026 (see Sources)" },
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
      "Durian sells for more under the name “Kampot” than under almost any other label in Cambodia, and the gap is the whole problem. Ouk Kong, president of the Cambodian Durian Association, puts genuine Kampot fruit at around 18,000 riel a kilogram — about $4.50 — against roughly 10,000 riel for imported fruit sold under the same name, which makes the counterfeit the affordable choice. The association has warned that some of that fruit is smuggled across the border and may carry chemical residues, and that the same relabeling reaches Kampong Cham, Battambang, and Tbong Khmum. Much of it changes hands through an ឈ្មួញកណ្តាល, a middleman, before it ever reaches a buyer — one more step where a label can quietly change. Kampot has pursued formal Geographical Indication status for its durian, the protection its pepper won from the EU in 2016. Until that is secured, telling the real thing from a relabeled import is left largely to the buyer — and to trusting the អ្នកដាំ, the grower, who sold it. The growers in the curator's family describe the substitution as routine and mechanical: fruit bought cheap at the border, trucked to the stalls along National Road 3, and sold there as Teuk Chhou durian at something near three times what it cost. They read a fake by the surface — real fruit off these slopes carries fine mountain dust, uneven natural thorns, and a fresh greyish-green stem, where a relabeled import tends to arrive too clean, with the stem dipped in a yellow chemical paste. The loss they name is not the sale but the reputation: a visitor buys a watery, chemical-smelling fruit on the highway, concludes Kampot durian is overrated, and never buys again. Their own prices give the spread from the other end — around 18,000 riel a kilogram for Monthong at the gate, 22,000 for Ov Khak, 25,000 for Sadong Kit, against 30,000 to 35,000 at a Phnom Penh market stall, leaving the grower somewhere near half of what the eater finally pays. Those farm-gate numbers are the season's peak, and are the ones usually quoted; when the market tightens they can fall by about half, which is the part that rarely gets reported. About sixty percent of their crop goes to one long-standing Kampot middleman — she inspects the orchard in April, estimates the weight, pays a fifth in cash as a deposit, and settles the rest each evening as fruit is weighed and loaded — twenty percent to visitors at the farm, and twenty percent by bus to private buyers in Phnom Penh who order over Telegram. On Geographical Indication they are for it and unable to use it: the inspection and paperwork are built for someone larger. They point at the pepper as the precedent that cuts both ways, having helped the big exporters while leaving small growers with the same costs, and note that the local durian association exists on paper while every farm still competes against its neighbours at harvest.",
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
      { text: "The relabeling route, the visual tells of a substituted fruit, farm-gate and retail prices, the middleman arrangement and sales split, and the growers' view of Geographical Indication and of the local association — from the grower interview with the curator's parents, Teuk Chhou durian growers, 4 September 2026 (see Sources). Prices quoted are peak-season farm-gate figures and can fall by roughly half in a tight market" },
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
      "Uon Cheang Meng, president of the Teuk Chhou durian farming community — a សហគមន៍កសិកម្ម — says prolonged heat and too little rain have left growers unable to irrigate: fruit fails to reach standard size and falls before it ripens, and some trees, in his words, are close to dying. About 30 percent of the district's roughly 100 hectares of durian have been affected. Pov Veasna, who farms around 300 trees there, counts ten to twenty fruit dropping a day — ធុរេនទុំជ្រុះ, fallen fruit, rather than the ធុរេនកាត់ that would normally be cut by hand — and says the heat ripens what survives too early: smaller, lighter, and thinner in aroma and sweetness, which pulls the price down with it. The orchards sit on slopes and draw on water running off the mountains; the drought has dried those sources, and the community has discussed building real irrigation rather than depending on them. Nothing has been decided. Growers in the curator's family describe the same seasons from inside their own orchard. Durian needs a short dry spell to trigger flowering, but the dry seasons have been running long — and in the 2024 El Niño heat, with temperatures near 43°C after months without rain, the trees went into survival mode and aborted their own flowers and young fruit to conserve water. The May rains that normally cool things down and open the harvest stopped arriving predictably. The response has been to stop relying on rain at all: pumps running longer on groundwater, at a cost that eats into the margin; heavier organic mulch banked around the trunks to hold soil moisture; and shade netting over younger Musang King grafts, whose leaves were being scorched outright by afternoon sun. The detail they give of 2024 is specific: 43°C in May, the mountain stream gone by late March, leaves wilting by nine each morning. Four mature trees died outright when their roots dried, and about a quarter of the potential fruit weight was lost to early abortion. The rains that used to arrive in the first week of May did not reach the orchard until mid-June. What they did about it also has numbers. Water came from a thirty-two-metre well pulled by a three-horsepower diesel pump burning eight to ten litres a day, roughly twelve dollars daily in fuel alone, while the static water level in that well dropped close to three metres at the height of the season. Mulch went down as a fifteen-centimetre ring of dry rice straw, ចំបើង, out at the drip-line and deliberately held thirty centimetres clear of the trunk so the collar would not rot. Shade netting at seventy percent went over the young trees at about fifteen dollars a tree, worth three or four degrees off the canopy. One thing they tried did not work: a commercial anti-transpirant sprayed on the leaves clogged the stomata, brought the leaves down, and cost two hundred dollars for nothing. There is no shared irrigation in their part of Teuk Chhou — every farm digs its own pond and drills its own well — and no government or NGO assistance reached this orchard after 2024. It is not the first such loss, either: floodwater from the Teuk Chhou river stood on the low part of the lot for four days in 2014, and twelve mature Ov Khak suffocated and died of root rot inside a month. Their read on the next twenty years is conditional rather than despairing — viable, but only with real water storage behind it. It is a recent thread in Kampot's durian story, not a settled one.",
    sources: [
      {
        text: "Cambodianess — Chhum Chantha, “Kampot Durian Growers Report Declining Yields and Quality as Climate Shifts in Cambodia”, 4 May 2026",
        url: "https://cambodianess.com/article/kampot-durian-growers-report-declining-yields-and-quality-as-climate-shifts-in-cambodia",
      },
      { text: "Vocabulary confirmed by the curator's family, Kampot durian growers (see Sources)" },
      { text: "The 2024 heat, flower and fruit abortion, and the irrigation, mulching, and shade-netting response — from the grower interview with the curator's parents, Teuk Chhou durian growers, 1 September 2026 (see Sources)" },
      { text: "The 2024 temperature and rainfall detail, tree and crop losses, well depth, pump fuel cost and water-table drop, the mulching and shade-netting specifications, the failed anti-transpirant trial, the absence of shared irrigation or outside aid, and the 2014 flood losses — from the grower interview with the curator's parents, Teuk Chhou durian growers, 4 September 2026 (see Sources)" },
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
      "Fruit develops over three to five months, and harvest generally runs May through August, shifting earlier or later each year with the dry spell. Seen from inside one Teuk Chhou orchard the year has a tighter shape than that, and starts earlier than the New Year: water is withheld through January and February to force the bloom, the trees flower and set in March, and April is thinning, bracing and the heaviest watering of the year — which means Khmer New Year lands in the middle of the most demanding fortnight on the calendar, and this family works through it. Harvest opens in mid-May, peaks in mid-June — one week in which something like a third of the farm comes ripe at once — and is finished by late July. August through October is pruning, manure and drainage; November and December the trees rest. The varieties do not arrive together: Sadong Kit is first, in late May, then Musang King in early June, Ov Khak in mid-June, and Monthong last, from late June into July. The start date moves a great deal — as early as 28 April in 2018, as late as 12 June in the drought year of 2024. A day at the peak runs from half past four in the morning, walking the rows with a flashlight for what fell overnight, through cutting until nine, sorting and weighing and arguing with the middleman until noon, packing the afternoon's bus orders for Phnom Penh, and out again at night to patrol the perimeter — because ripe fruit is worth stealing. The year has its own observances. Before the first cut in May an altar goes up at the foot of the oldest tree, with incense and food, for the អ្នកតា, the Neak Ta, the local guardian spirits, and a safe harvest without a fall from a branch. At the end of July the growers gather to eat, drink rice wine and compare what they got. The orchard is not only durian, either: two hundred poles of Kampot pepper and a dozen mangosteen carry the household through the other half of the year.",
    sources: [
      { text: "Published horticultural research on durian flowering and fruit development" },
      { text: "Phnom Penh Post — Cambodian durian farming and industry context" },
      { text: "Term confirmed by the curator's family, Kampot durian growers (see Sources)" },
      { text: "The month-by-month orchard calendar, the mid-May to late-July harvest and its mid-June peak, the order in which the varieties ripen, the earliest and latest recorded start dates, the shape of a peak harvest day, the offering before the first cut, and the secondary pepper and mangosteen crops — from the grower interview with the curator's parents, Teuk Chhou durian growers, 4 September 2026 (see Sources)" },
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
      "Until 17 April 2025, Cambodia had no agreement letting it export fresh durian to China at all. That changed during Xi Jinping's state visit, when the two countries signed a phytosanitary protocol for durian alongside two others, for edible bird's nests and crocodiles. By July, China's customs authority (GACC) had approved 112 orchards and 30 packing facilities as meeting the required agricultural and food-safety standards — the actual list of farms cleared to ship. The area planted nationally has grown alongside that access: from just over 5,000 hectares in 2021 to 16,193 hectares by 2025, producing an estimated 135,546 tonnes. In the first seven months of 2026 alone, Cambodia shipped 5,738 tonnes of fresh durian to China — nearly forty times the volume moved over the same period the year before, according to the agriculture ministry. Most of it now travels overland through Laos, a route the ministry says cuts transit time from 15 to 20 days by sea to around five, so the fruit arrives before it has had the chance to soften. Those are national figures, and they describe a door this guide's own orchard cannot walk through. The curator's family are not on the GACC list and do not expect to be: qualifying wants a registered pack-house, continuous chemical logging and land in blocks, none of which a two-hectare farm has, and they put the cost of reaching that standard at something like five thousand dollars. Chinese brokers did come to the village twice in late 2025, offering to buy Monthong on exclusive contracts at a fixed low price; the family declined. A fifteen-hectare commercial farm near them did certify, and had to build concrete chemical-mixing sheds and worker wash stations and give up traditional manure to do it. Inspectors have run seminars in village halls; none has walked this particular soil. The effect they can actually measure is indirect and, for now, positive: farm-gate prices locally rose by a thousand or two thousand riel a kilogram once the large farms began diverting crop to export and left less for Phnom Penh. Their read is that the benefit concentrates in the big plantations of Tbong Khmum and Kampong Cham, and that the local market suits them better anyway, since Phnom Penh will buy Ov Khak and China's paperwork will not. What they are watching for is the other side of the boom. Investors from Phnom Penh have been buying hillside land around Teuk Chhou and clearing it for Monthong and Musang King monoculture, and the growers expect that planting to reach bearing age in three to five years and push Monthong prices down hard — leaving, as they see it, the farms holding the distinctive local varieties in the better position.",
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
      { text: "The smallholder view of the export protocol — GACC eligibility and its cost, the 2025 broker visits, a neighbouring farm's certification requirements, the indirect rise in local farm-gate prices, and the growers' expectation of oversupply from new hillside planting — from the grower interview with the curator's parents, Teuk Chhou durian growers, 4 September 2026 (see Sources)" },
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
