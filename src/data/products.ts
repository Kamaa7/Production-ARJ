import lookSageRose from "@/assets/look-sage-rose.jpg";
import lookSageProfile from "@/assets/look-sage-profile.jpg";
import lookNoirZardozi from "@/assets/look-noir-zardozi.jpg";
import lookLeopard from "@/assets/look-leopard.jpg";
import lookNoirGarden from "@/assets/look-noir-garden.jpg";
import lookNoirFountain from "@/assets/look-noir-fountain.jpg";
import lookRoseArch from "@/assets/look-rose-arch.jpg";
import lookCrimsonRose from "@/assets/look-crimson-rose.jpg";
import lookZebraKaftan from "@/assets/look-zebra-kaftan.jpg";
import lookPinstripeNoir from "@/assets/look-pinstripe-noir.jpg";

import zardoziPortrait from "@/assets/zardozi-lavender-portrait.jpg";
import zardoziGlance from "@/assets/zardozi-crimson-glance.jpg";
import zardoziVeil from "@/assets/zardozi-crimson-veil.jpg";
import zardoziPrayer from "@/assets/zardozi-crimson-prayer.jpg";
import zardoziBow from "@/assets/zardozi-crimson-bow.jpg";
import zardoziWhisper from "@/assets/zardozi-crimson-whisper.jpg";
import zardoziCamel from "@/assets/zardozi-camel-repose.jpg";
import zardoziDetail from "@/assets/zardozi-crimson-detail.jpg";
import zardoziOrangePortrait from "@/assets/zardozi-orange-portrait.jpeg";
import mustardZardoziHijab from "@/assets/mustard-zardozi-hijab.png";

import coordOchreMagentaPose from "@/assets/coord-ochre-magenta-pose.jpg";
import coordOchreCuff from "@/assets/coord-ochre-cuff.jpg";
import coordNavyCheck from "@/assets/coord-navy-check.jpg";
import coordOchreFull from "@/assets/coord-ochre-full.jpg";
import coordNavyDetail from "@/assets/coord-navy-detail.jpg";
import coordOchreDetail from "@/assets/coord-ochre-detail.jpg";
import coordNavyFull from "@/assets/coord-navy-full.jpg";
import lavenderCoordSet from "@/assets/lavender-co-ord-set.png";
import coordSet1599 from "@/assets/Co-ord-set 1599.jpg";
import coordSet999 from "@/assets/co-ord-set 999.jpg";
import hero3BlushGardenSet from "@/assets/hero-3-blush-garden.png";
import velvetJetBlackKurtaSet from "@/assets/velvet-jet-black-kurta-set.png";
import skyBlueKurtaSet from "@/assets/sky-blue-kurta-set.png";

export type Product = {
  slug: string;
  name: string;
  category: "Kurta Sets" | "Abayas" | "Hijabs" | "Kaftans" | "Zardozi Hijabs" | "Co-ord Sets";
  price: string;
  shortDescription: string;
  description: string;
  image: string;
  gallery: string[];
  fabric: string;
  origin: string;
};

export const products: Product[] = [
  {
    slug: "crimson-zardozi-hijab",
    name: "Lavender Zardozi Hijab",
    category: "Zardozi Hijabs",
    price: "₹ 649",
    shortDescription: "Lavender georgette hijab, hand-embroidered in gold zardozi.",
    description:
      "A soft lavender georgette hijab, hand-embroidered along the brow in a fine band of gold zardozi, beadwork and seed pearls. Quietly opulent — made slowly in our Lucknow atelier.",
    image: zardoziPortrait,
    gallery: [zardoziPortrait, zardoziGlance, zardoziVeil, zardoziPrayer, zardoziBow, zardoziWhisper, zardoziDetail],
    fabric: "Pure georgette · Zardozi handwork",
    origin: "Lucknow, India",
  },
  {
    slug: "crimson-noir-zardozi-hijab",
    name: "Crimson Noir Zardozi Hijab",
    category: "Zardozi Hijabs",
    price: "₹ 649",
    shortDescription: "Crimson hijab traced in ink-and-pearl zardozi vines.",
    description:
      "A long crimson georgette hijab, embroidered in inky thread, antique pearls and mint sequins along the temple. Worn here over a chikankari kurta — quietly opulent, deeply considered.",
    image: zardoziPrayer,
    gallery: [zardoziPrayer, zardoziBow, zardoziVeil, zardoziPortrait, zardoziDetail],
    fabric: "Georgette · Pearl & sequin handwork",
    origin: "Lucknow, India",
  },
  {
    slug: "camel-zardozi-hijab",
    name: "Camel Zardozi Hijab",
    category: "Zardozi Hijabs",
    price: "₹ 649",
    shortDescription: "Warm camel hijab with crimson and obsidian beadwork.",
    description:
      "A soft camel-toned georgette hijab, hand-embroidered along the crown with a small spray of crimson, ivory and obsidian beadwork. A quieter Zardozi — for daylight, for prayer.",
    image: zardoziCamel,
    gallery: [zardoziCamel, zardoziDetail],
    fabric: "Georgette · Bead & sequin handwork",
    origin: "Lucknow, India",
  },
  {
    slug: "orange-zardozi-hijab",
    name: "Orange Zardozi Hijab",
    category: "Zardozi Hijabs",
    price: "₹ 649",
    shortDescription: "Warm orange georgette hijab with gold zardozi along the brow.",
    description:
      "A warm orange georgette hijab, hand-embroidered in gold zardozi, beadwork and fine thread along the brow and temple. Luminous and wearable — finished slowly in our Lucknow atelier.",
    image: zardoziOrangePortrait,
    gallery: [zardoziOrangePortrait],
    fabric: "Pure georgette · Zardozi handwork",
    origin: "Lucknow, India",
  },
  {
    slug: "mustard-zardozi-hijab",
    name: "Mustard Zardozi Hijab",
    category: "Zardozi Hijabs",
    price: "₹ 799",
    shortDescription: "Mustard hijab with delicate zardozi detailing on the edge.",
    description:
      "A rich mustard hijab finished with fine zardozi embellishment along the temple edge. Light to drape and designed for festive as well as everyday wear.",
    image: mustardZardoziHijab,
    gallery: [mustardZardoziHijab],
    fabric: "Soft georgette blend · Zardozi work",
    origin: "Lucknow, India",
  },
  {
    slug: "blush-gathered-set",
    name: "Co-ord-set",
    category: "Co-ord Sets",
    price: "₹ 1,499",
    shortDescription: "Drawstring kurta in blush rayon with straight pants.",
    description:
      "A softly gathered kurta in blush-toned rayon, drawn at the waist by a slender drawstring and worn over straight, unpleated trousers. A study in quiet, weekday grace.",
    image: lookRoseArch,
    gallery: [lookRoseArch],
    fabric: "Rayon · Cotton drawstring",
    origin: "Lucknow, India",
  },
  {
    slug: "sage-chikan-set",
    name: "Co-ord-set",
    category: "Co-ord Sets",
    price: "₹ 1,499",
    shortDescription: "Hand-embroidered chikankari kurta with rose dupatta.",
    description:
      "A three-piece composition in pistachio rayon. The kurta is hand-embroidered in Lucknowi chikankari, finished with a rose-dyed cotton dupatta scattered in ivory floral threadwork.",
    image: lookSageRose,
    gallery: [lookSageRose, lookSageProfile],
    fabric: "Cotton rayon · Cotton dupatta",
    origin: "Lucknow, India",
  },
  {
    slug: "noir-zardozi-tunic",
    name: "Co-ord-set",
    category: "Co-ord Sets",
    price: "₹ 1,499",
    shortDescription: "Black tunic with copper zardozi placket.",
    description:
      "A long-line tunic in midnight rayon, traced down the placket with copper-thread zardozi and finished with antique brass buttons. Worn here with a printed kashmiri stole.",
    image: lookNoirZardozi,
    gallery: [lookNoirZardozi, lookNoirGarden, lookNoirFountain],
    fabric: "Rayon · Zardozi handwork",
    origin: "Lucknow, India",
  },
  {
    slug: "crimson-dotted-set",
    name: "Co-ord-set",
    category: "Co-ord Sets",
    price: "₹ 1,499",
    shortDescription: "Black dobby-dot kurta worn with a crimson hijab.",
    description:
      "A noir kurta in dobby-dotted cotton, scalloped along the hem in fine ivory lace, paired with a crimson cotton hijab. A composition of contrast — softened by hand.",
    image: lookCrimsonRose,
    gallery: [lookCrimsonRose],
    fabric: "Dobby cotton · Lace trim",
    origin: "Lucknow, India",
  },
  {
    slug: "zebra-kaftan",
    name: "Kaftan Set",
    category: "Co-ord Sets",
    price: "₹ 1,499",
    shortDescription: "Hand-painted zebra kaftan in ink and ivory.",
    description:
      "A wide-cut kaftan in flowing satin, hand-screened in painterly zebra strokes. Bracelet sleeves and a buttoned placket. Worn with a deep aubergine hijab.",
    image: lookZebraKaftan,
    gallery: [lookZebraKaftan],
    fabric: "Satin viscose",
    origin: "Jaipur, India",
  },
  {
    slug: "pinstripe-noir-set",
    name: "Co-ord-set",
    category: "Co-ord Sets",
    price: "₹ 1,499",
    shortDescription: "Tailored pinstripe co-ord in fluid viscose.",
    description:
      "A relaxed two-piece in inky viscose, traced through with fine ivory pinstripes. A long shirt-tunic over wide-leg trousers — quietly architectural.",
    image: lookPinstripeNoir,
    gallery: [lookPinstripeNoir],
    fabric: "Viscose",
    origin: "Lucknow, India",
  },
  {
    slug: "leopard-kaftan",
    name: "Kaftan Set",
    category: "Co-ord Sets",
    price: "₹ 1,499",
    shortDescription: "Co-ord kaftan in painterly leopard print.",
    description:
      "A flowing two-piece in soft viscose, cut as a draped kaftan over wide trousers. The print is hand-screened in earth tones — sand, ochre, ink.",
    image: lookLeopard,
    gallery: [lookLeopard],
    fabric: "Viscose",
    origin: "Jaipur, India",
  },
  {
    slug: "noir-mukaish-set",
    name: "Co-ord-set",
    category: "Co-ord Sets",
    price: "₹ 1,499",
    shortDescription: "Mukaish-dotted black kurta with straight pants.",
    description:
      "A quietly dressed co-ord. The kurta is dotted with mukaish — small metallic flecks, hammered by hand — and worn with straight, unpleated trousers.",
    image: lookNoirGarden,
    gallery: [lookNoirGarden, lookNoirFountain, lookNoirZardozi],
    fabric: "Rayon · Mukaish work",
    origin: "Lucknow, India",
  },
  {
    slug: "co-ord-set",
    name: "Pastel green co-ord-set",
    category: "Co-ord Sets",
    price: "₹ 1,499",
    shortDescription: "Sage pleated co-ord with a rose chikan dupatta.",
    description:
      "A soft sage-toned co-ord — pleated tunic and tapered trousers — worn with a rose cotton dupatta embroidered in ivory chikankari. One composition for garden days and slow evenings.",
    image: lookSageProfile,
    gallery: [lookSageProfile, lookSageRose],
    fabric: "Cotton rayon · Cotton dupatta",
    origin: "Lucknow, India",
  },
  {
    slug: "co-ord-set-1599",
    name: "Co-ord-set",
    category: "Co-ord Sets",
    price: "₹ 1,599",
    shortDescription: "Classic brown co-ord set with a soft ivory hijab drape.",
    description:
      "A modest brown co-ord set finished with subtle handwork and paired with an ivory drape. A quiet, everyday silhouette designed for comfort and movement.",
    image: coordSet1599,
    gallery: [coordSet1599],
    fabric: "Soft blended fabric",
    origin: "Lucknow, India",
  },
  {
    slug: "co-ord-set-999",
    name: "co-ord-set",
    category: "Co-ord Sets",
    price: "₹ 999",
    shortDescription: "Minimal maroon co-ord set for everyday wear.",
    description:
      "A clean, straight-cut maroon co-ord set with soft drape and relaxed tailoring, designed for comfort across day-long wear.",
    image: coordSet999,
    gallery: [coordSet999],
    fabric: "Soft blended fabric",
    origin: "Lucknow, India",
  },
  {
    slug: "hero-3-blush-garden",
    name: "White co-ord-set",
    category: "Co-ord Sets",
    price: "₹ 1,399",
    shortDescription: "Soft blush garden co-ord set with a light drape.",
    description:
      "A blush garden-toned co-ord set with a clean, modest silhouette and fluid drape designed for everyday comfort and an elevated finish.",
    image: hero3BlushGardenSet,
    gallery: [hero3BlushGardenSet],
    fabric: "Soft blended fabric",
    origin: "Lucknow, India",
  },
  {
    slug: "lavender-co-ord-set",
    name: "Lavender co-ord set",
    category: "Co-ord Sets",
    price: "₹ 1,599",
    shortDescription: "Lavender co-ord set with a floral overlay drape.",
    description:
      "A lavender co-ord set finished with a sheer floral overlay that adds movement and depth. A polished, modest silhouette designed for festive daywear and evening outings.",
    image: lavenderCoordSet,
    gallery: [lavenderCoordSet],
    fabric: "Soft blended fabric · Sheer overlay",
    origin: "Lucknow, India",
  },
  {
    slug: "kashmiri-stole",
    name: "Black co-ord-set",
    category: "Co-ord Sets",
    price: "₹ 1,499",
    shortDescription: "Black co-ord with a fluid drape and minimal detailing.",
    description:
      "A black co-ord set with a clean, modest silhouette and soft drape. Designed for everyday elegance with easy movement and a tailored fall.",
    image: lookNoirFountain,
    gallery: [lookNoirFountain, lookNoirGarden],
    fabric: "Soft wool blend",
    origin: "Lucknow, India",
  },
  {
    slug: "ochre-cotton-coord",
    name: "Mustard co-ord-set",
    category: "Co-ord Sets",
    price: "₹ 1,499",
    shortDescription: "Handwoven ochre cotton kurta with carved horn buttons.",
    description:
      "A long ochre kurta in handwoven cotton, fastened with carved horn buttons and gathered at the cuff. Cut full and unhurried — for the slow days, the long walks, the warm light of late afternoon.",
    image: coordOchreMagentaPose,
    gallery: [coordOchreMagentaPose, coordOchreCuff, coordOchreFull, coordOchreDetail],
    fabric: "Handwoven cotton · Horn buttons",
    origin: "Lucknow, India",
  },
  {
    slug: "navy-windowpane-coord",
    name: "Blue check co-ord-set",
    category: "Co-ord Sets",
    price: "₹ 1,499",
    shortDescription: "Brushed cotton kurta in navy with rust windowpane check.",
    description:
      "A relaxed shirt-kurta in brushed cotton, woven in deep navy and traced through with a fine rust windowpane check. Patch pockets, dropped shoulders, mother-of-pearl buttons. Quietly tailored for the cooler months.",
    image: coordNavyCheck,
    gallery: [coordNavyCheck, coordNavyFull, coordNavyDetail],
    fabric: "Brushed cotton · Yarn-dyed check",
    origin: "Lucknow, India",
  },
  {
    slug: "velvet-jet-black-kurta-set",
    name: "Velvet Jet Black Kurta set",
    category: "Kurta Sets",
    price: "₹ 1,699",
    shortDescription: "Jet black velvet kurta set with embellished neckline details.",
    description:
      "A rich jet black velvet kurta set, finished with shimmering neckline and cuff accents for an elevated evening look while retaining a modest silhouette.",
    image: velvetJetBlackKurtaSet,
    gallery: [velvetJetBlackKurtaSet],
    fabric: "Velvet blend",
    origin: "Lucknow, India",
  },
  {
    slug: "sky-blue-kurta-set",
    name: "sky blue kurta set",
    category: "Kurta Sets",
    price: "₹ 1,399",
    shortDescription: "Sky blue kurta set with soft gathers and minimal trim.",
    description:
      "A light sky blue kurta set with soft front gathers and clean finishing, designed for everyday ease with a graceful drape.",
    image: skyBlueKurtaSet,
    gallery: [skyBlueKurtaSet],
    fabric: "Soft cotton blend",
    origin: "Lucknow, India",
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
