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
import lookOchreMagenta from "@/assets/look-ochre-magenta.jpg";

import zardoziPortrait from "@/assets/zardozi-lavender-portrait.jpg";
import zardoziGlance from "@/assets/zardozi-crimson-glance.jpg";
import zardoziVeil from "@/assets/zardozi-crimson-veil.jpg";
import zardoziPrayer from "@/assets/zardozi-crimson-prayer.jpg";
import zardoziBow from "@/assets/zardozi-crimson-bow.jpg";
import zardoziWhisper from "@/assets/zardozi-crimson-whisper.jpg";
import zardoziCamel from "@/assets/zardozi-camel-repose.jpg";
import zardoziDetail from "@/assets/zardozi-crimson-detail.jpg";

import coordOchreMagentaPose from "@/assets/coord-ochre-magenta-pose.jpg";
import coordOchreCuff from "@/assets/coord-ochre-cuff.jpg";
import coordNavyCheck from "@/assets/coord-navy-check.jpg";
import coordOchreFull from "@/assets/coord-ochre-full.jpg";
import coordNavyDetail from "@/assets/coord-navy-detail.jpg";
import coordOchreDetail from "@/assets/coord-ochre-detail.jpg";
import coordNavyFull from "@/assets/coord-navy-full.jpg";

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
    slug: "blush-gathered-set",
    name: "Blush Gathered Set",
    category: "Kurta Sets",
    price: "₹ 1,200",
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
    name: "Sage Chikan Set",
    category: "Kurta Sets",
    price: "₹ 1,150",
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
    name: "Noir Zardozi Tunic",
    category: "Kurta Sets",
    price: "₹ 1,200",
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
    name: "Crimson Dotted Set",
    category: "Kurta Sets",
    price: "₹ 1,100",
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
    name: "Zebra Kaftan",
    category: "Kaftans",
    price: "₹ 1,200",
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
    name: "Pinstripe Noir Set",
    category: "Kurta Sets",
    price: "₹ 1,050",
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
    name: "Leopard Kaftan",
    category: "Kaftans",
    price: "₹ 1,150",
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
    name: "Noir Mukaish Set",
    category: "Kurta Sets",
    price: "₹ 1,100",
    shortDescription: "Mukaish-dotted black kurta with straight pants.",
    description:
      "A quietly dressed co-ord. The kurta is dotted with mukaish — small metallic flecks, hammered by hand — and worn with straight, unpleated trousers.",
    image: lookNoirGarden,
    gallery: [lookNoirGarden, lookNoirFountain, lookNoirZardozi],
    fabric: "Rayon · Mukaish work",
    origin: "Lucknow, India",
  },
  {
    slug: "ochre-tunic-magenta-hijab",
    name: "Ochre Tunic, Magenta Hijab",
    category: "Kurta Sets",
    price: "₹ 1,050",
    shortDescription: "Ochre cotton tunic with horn buttons, magenta wool hijab.",
    description:
      "A long ochre tunic in handwoven cotton, fastened with carved horn buttons and gathered cuffs. Worn with a soft magenta wool hijab — a study in warm contrast.",
    image: lookOchreMagenta,
    gallery: [lookOchreMagenta],
    fabric: "Handwoven cotton · Wool hijab",
    origin: "Lucknow, India",
  },
  {
    slug: "rose-chikan-hijab",
    name: "Rose Chikan Hijab",
    category: "Hijabs",
    price: "₹ 649",
    shortDescription: "Rose cotton hijab, scallop-edged with chikan florals.",
    description:
      "A square hijab in rose-dyed cotton voile, scalloped along the edge and embroidered in ivory chikankari. Light, breathable, drapes softly.",
    image: lookSageProfile,
    gallery: [lookSageProfile, lookSageRose],
    fabric: "Cotton voile",
    origin: "Lucknow, India",
  },
  {
    slug: "magenta-wool-hijab",
    name: "Magenta Wool Hijab",
    category: "Hijabs",
    price: "₹ 649",
    shortDescription: "Soft magenta wool hijab with fringed edges.",
    description:
      "A rectangular hijab in fine, brushed wool — dyed deep magenta and finished with delicate self-fringing. Warm, weightless, drapes with quiet body.",
    image: lookOchreMagenta,
    gallery: [lookOchreMagenta],
    fabric: "Brushed wool",
    origin: "Srinagar, Kashmir",
  },
  {
    slug: "kashmiri-stole",
    name: "Kashmiri Stole",
    category: "Hijabs",
    price: "₹ 649",
    shortDescription: "Wool stole with copper paisley embroidery.",
    description:
      "A rectangular stole in fine wool, embroidered along one edge in copper-thread paisley. Worn as a hijab, a wrap, or a shawl.",
    image: lookNoirFountain,
    gallery: [lookNoirFountain, lookNoirGarden],
    fabric: "Wool · Hand embroidery",
    origin: "Srinagar, Kashmir",
  },
  {
    slug: "ochre-cotton-coord",
    name: "Ochre Cotton Co-ord",
    category: "Co-ord Sets",
    price: "₹ 999",
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
    name: "Navy Windowpane Co-ord",
    category: "Co-ord Sets",
    price: "₹ 999",
    shortDescription: "Brushed cotton kurta in navy with rust windowpane check.",
    description:
      "A relaxed shirt-kurta in brushed cotton, woven in deep navy and traced through with a fine rust windowpane check. Patch pockets, dropped shoulders, mother-of-pearl buttons. Quietly tailored for the cooler months.",
    image: coordNavyCheck,
    gallery: [coordNavyCheck, coordNavyFull, coordNavyDetail],
    fabric: "Brushed cotton · Yarn-dyed check",
    origin: "Lucknow, India",
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
