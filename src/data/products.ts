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
import mustardHeavyHandWorkHijab from "@/assets/mustard-heavy-hand-work-hijab.jpg";
import darkGreenZardoziHandworkHijab from "@/assets/dark-green-zardozi-handwork-hijab.jpg";
import blackZardoziHandWorkHijab from "@/assets/black-zardozi-hand-work-hijab.jpg";
import pistaGreenZardoziHijab from "@/assets/pista-green-zardozi-hijab.jpg";
import peachZardoziHijab from "@/assets/peach-zardozi-hijab.jpg";
import blueZardoziHijab from "@/assets/blue-zardozi-hijab.jpg";
import blueZardoziWorkHijab from "@/assets/blue-zardozi-work-hijab.png";
import brownZardoziHandworkHijab from "@/assets/brown-zardozi-handwork-hijab.jpg";
import chikankariHijab from "@/assets/chikankari-hijab.jpg";
import beigeColorZardoziHijab from "@/assets/beige-color-zardozi-hijab.png";

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
import kurtaSet from "@/assets/kurta-set.jpg";
import greenShrugSet from "@/assets/green-shrug-set.jpg";
import greenCoOrdSet from "@/assets/green-co-ord-set.png";
import redCoOrdSet from "@/assets/red-co-ord-set.jpeg";
import coordSet1099 from "@/assets/co-ord-set-1099.jpg";

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
    name: "Mustard heavy hand work hijab",
    category: "Zardozi Hijabs",
    price: "₹ 799",
    shortDescription:
      "Mustard hijab with heavy hand-embroidered zardozi — silver thread and pink accents along the face-framing border.",
    description:
      "A rich mustard hijab finished with dense handwork along the edge: silver-toned zardozi, floral scallops, and vivid pink bead accents that catch the light. Drapes softly for festive days and quiet occasions alike — made slowly in our Lucknow atelier.",
    image: mustardHeavyHandWorkHijab,
    gallery: [mustardHeavyHandWorkHijab],
    fabric: "Georgette · Heavy zardozi & bead handwork",
    origin: "Lucknow, India",
  },
  {
    slug: "dark-green-zardozi-handwork-hijab",
    name: "Dark green zardozi handwork hijab",
    category: "Zardozi Hijabs",
    price: "₹ 649",
    shortDescription:
      "Deep green hijab with a face-framing border of zardozi florals — burgundy centers, silver vines, and fine beadwork.",
    description:
      "A forest-toned hijab in a soft matte drape, hand-finished along the edge that frames the face with vertical zardozi florals: deep wine centers, silver-toned scrolls, and tiny beads that catch the light. Quietly ornate — made in our Lucknow atelier.",
    image: darkGreenZardoziHandworkHijab,
    gallery: [darkGreenZardoziHandworkHijab],
    fabric: "Georgette · Zardozi & bead handwork",
    origin: "Lucknow, India",
  },
  {
    slug: "black-zardozi-hand-work-hijab",
    name: "Black zardozi hand work hijab",
    category: "Zardozi Hijabs",
    price: "₹ 699",
    shortDescription:
      "Black hijab with gold zardozi and pearl-bead florals along the face-framing edge; shown with matching niqab drape.",
    description:
      "An ink-black hijab in a light, fluid drape, hand-embroidered along the border that frames the face with gold-toned zardozi, scrolling vines, and small pearls. Paired here with a matching black veil for the lower face — evening-ready and refined, finished in our Lucknow atelier.",
    image: blackZardoziHandWorkHijab,
    gallery: [blackZardoziHandWorkHijab],
    fabric: "Georgette · Gold zardozi & pearl handwork",
    origin: "Lucknow, India",
  },
  {
    slug: "pista-green-zardozi-hijab",
    name: "Pista Green Zardozi Hijab",
    category: "Zardozi Hijabs",
    price: "₹ 699",
    shortDescription:
      "Soft pista-green hijab with gold zardozi florals, wine bead accents, and fine crystals along the face-framing border.",
    description:
      "A muted pistachio-toned hijab in a light, airy drape, hand-embroidered along the edge that frames the face with gold zardozi vines, deep wine beads, and tiny crystals that catch the light. Fresh and wearable for day or evening — finished slowly in our Lucknow atelier.",
    image: pistaGreenZardoziHijab,
    gallery: [pistaGreenZardoziHijab],
    fabric: "Georgette · Gold zardozi & bead handwork",
    origin: "Lucknow, India",
  },
  {
    slug: "peach-zardozi-hijab",
    name: "Peach Zardozi Hijab",
    category: "Zardozi Hijabs",
    price: "₹ 699",
    shortDescription:
      "Warm peach hijab with gold zardozi along the face-framing border, accented with silver sequins that catch the light.",
    description:
      "A soft salmon-peach hijab in a light georgette drape, hand-embroidered along the edge that frames the face with gold zardozi scrolls and spaced silver sequin rounds. Warm and luminous for daytime gatherings or evening wear — finished in our Lucknow atelier.",
    image: peachZardoziHijab,
    gallery: [peachZardoziHijab],
    fabric: "Georgette · Gold zardozi & sequin handwork",
    origin: "Lucknow, India",
  },
  {
    slug: "blue-zardozi-hijab",
    name: "Blue Zardozi Hijab",
    category: "Zardozi Hijabs",
    price: "₹ 699",
    shortDescription:
      "Navy hijab with a face-framing border of gold zardozi florals — wine-red centers, silver beads, and fine vine scrolls.",
    description:
      "A deep navy hijab in a soft georgette drape, hand-embroidered along the edge that frames the face with repeating floral zardozi: crimson centers, gold-toned leaves, and tiny silver beads that catch the light. Refined for day or evening — finished in our Lucknow atelier.",
    image: blueZardoziHijab,
    gallery: [blueZardoziHijab],
    fabric: "Georgette · Gold zardozi & bead handwork",
    origin: "Lucknow, India",
  },
  {
    slug: "blue-zardozi-work-hijab",
    name: "Blue Zardozi work Hijab",
    category: "Zardozi Hijabs",
    price: "₹ 699",
    shortDescription:
      "Deep navy hijab with hand-finished zardozi work — magenta florals, silver vine scrolls, and pearl accents along the face-framing border.",
    description:
      "A deep navy hijab in a soft georgette drape, hand-embroidered along the edge that frames the face with fine zardozi work: vibrant magenta florals with white centers, silver-toned leafy vines, and tiny pearl beads that catch the light. Refined for day or evening — finished in our Lucknow atelier.",
    image: blueZardoziWorkHijab,
    gallery: [blueZardoziWorkHijab],
    fabric: "Georgette · Gold zardozi & bead handwork",
    origin: "Lucknow, India",
  },
  {
    slug: "brown-zardozi-handwork-hijab",
    name: "Brown zardozi handwork hijab",
    category: "Zardozi Hijabs",
    price: "₹ 749",
    shortDescription:
      "Olive-brown hijab with a face-framing band of gold zardozi — diamond lattice, sequin accents, and scalloped floral edging.",
    description:
      "A warm olive-brown hijab in a soft matte drape, hand-finished along the edge that frames the face with dense zardozi work: gold-toned metallic thread in a diamond lattice, reflective sequins, and a delicate scalloped floral border. Understated and refined for day or evening — finished in our Lucknow atelier.",
    image: brownZardoziHandworkHijab,
    gallery: [brownZardoziHandworkHijab],
    fabric: "Georgette · Gold zardozi & sequin handwork",
    origin: "Lucknow, India",
  },
  {
    slug: "beige-color-zardozi-hijab",
    name: "Beige Color Zardozi Hijab",
    category: "Zardozi Hijabs",
    price: "₹ 799",
    shortDescription: "Beige hijab with delicate zardozi embellishment at the edge.",
    description:
      "A soft beige hijab accented with hand-finished zardozi work along the side edge, designed for a refined look across festive and everyday styling.",
    image: beigeColorZardoziHijab,
    gallery: [beigeColorZardoziHijab],
    fabric: "Soft georgette blend · Zardozi work",
    origin: "Lucknow, India",
  },
  {
    slug: "chikankari-hijab",
    name: "Chikankari hijab",
    category: "Hijabs",
    price: "₹ 450",
    shortDescription:
      "Cream hijab with hand-embroidered green chikankari florals along the scalloped face-framing border.",
    description:
      "A soft cream hijab in a light, airy drape, hand-finished along the scalloped edge that frames the face with delicate chikankari embroidery — green floral vines and leafy scrolls in the Lucknow tradition. Refined for day or evening — finished in our Lucknow atelier.",
    image: chikankariHijab,
    gallery: [chikankariHijab],
    fabric: "Georgette · Chikankari handwork",
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
    shortDescription: "The co-ord-set with canadian pearl",
    description:
      "A two-piece co-ord set in pistachio rayon, crafted in plain fabric for a sleek and effortless look, finished with elegant Canadian pearl detailing for a refined, contemporary finish.",
    image: lookSageRose,
    gallery: [lookSageRose, lookSageProfile],
    fabric: "Cotton rayon",
    origin: "Lucknow, India",
  },
  {
    slug: "noir-zardozi-tunic",
    name: "Co-ord-set",
    category: "Co-ord Sets",
    price: "₹ 1,499",
    shortDescription: "Black co-ord-set",
    description:
      "A long-line tunic in midnight rayon, traced down the placket and finished with antique brass buttons. Worn here with a printed kashmiri stole.",
    image: lookNoirZardozi,
    gallery: [lookNoirZardozi, lookNoirGarden, lookNoirFountain],
    fabric: "Rayon",
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
    category: "Kaftans",
    price: "₹ 1,199",
    shortDescription: "Hand-painted zebra kaftan in ink and ivory.",
    description:
      "A wide-cut kaftan in flowing satin, hand-screened in painterly zebra strokes. Bracelet sleeves and a buttoned placket. Worn with a deep aubergine hijab.",
    image: lookZebraKaftan,
    gallery: [lookZebraKaftan],
    fabric: "Rayon",
    origin: "Jaipur, India",
  },
  {
    slug: "pinstripe-noir-set",
    name: "Co-ord-set",
    category: "Co-ord Sets",
    price: "₹ 1,199",
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
    category: "Kaftans",
    price: "₹ 1,199",
    shortDescription: "Co-ord kaftan in painterly leopard print.",
    description:
      "A flowing two-piece in soft viscose, cut as a draped kaftan over wide trousers. The print is hand-screened in earth tones — sand, ochre, ink.",
    image: lookLeopard,
    gallery: [lookLeopard],
    fabric: "Rayon",
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
    slug: "green-co-ord-set",
    name: "Green co-ord-set",
    category: "Co-ord Sets",
    price: "₹ 999",
    shortDescription: "Deep green rayon co-ord set with a clean, effortless silhouette.",
    description:
      "A two-piece green co-ord set in smooth rayon, tailored with a relaxed shirt and easy straight pants for polished all-day comfort and a modern modest look.",
    image: greenCoOrdSet,
    gallery: [greenCoOrdSet],
    fabric: "Rayon",
    origin: "Lucknow, India",
  },
  {
    slug: "red-co-ord-set",
    name: "Red co-ord set",
    category: "Co-ord Sets",
    price: "₹ 1,499",
    shortDescription:
      "Deep red kurta and salwar with an ombré dupatta — cream at the crown fading into matching red at the hem.",
    description:
      "A three-piece co-ord in rich crimson: a knee-length A-line kurta, tapered salwar, and a long sheer dupatta with a soft cream-to-red gradient. Easy, modest tailoring for garden days and gatherings — finished in our Lucknow atelier.",
    image: redCoOrdSet,
    gallery: [redCoOrdSet],
    fabric: "Soft rayon blend · Ombré dupatta",
    origin: "Lucknow, India",
  },
  {
    slug: "co-ord-set-1099",
    name: "Co-ord set",
    category: "Co-ord Sets",
    price: "₹ 1,099",
    shortDescription:
      "Zebra-print co-ord in chocolate and ivory with a textured crinkle finish — hip-length tunic and wide-leg trousers, styled with a cream hijab.",
    description:
      "A two-piece co-ord in a seersucker-like crinkle weave, printed in bold wavy zebra stripes of deep brown and warm tan on white. The tunic falls to the hip with long sleeves; the trousers are wide-leg and easy. Worn with a soft cream hijab for a graphic, modest look — finished in our Lucknow atelier.",
    image: coordSet1099,
    gallery: [coordSet1099],
    fabric: "Textured cotton blend · Printed",
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
    image: lookNoirGarden,
    gallery: [lookNoirFountain, lookNoirGarden],
    fabric: "Soft wool blend",
    origin: "Lucknow, India",
  },
  {
    slug: "ochre-cotton-coord",
    name: "Mustard co-ord-set",
    category: "Co-ord Sets",
    price: "₹ 1,499",
    shortDescription: "Handwoven woolen kurta with carved horn buttons.",
    description:
      "A long ochre kurta in handwoven cotton, fastened with carved horn buttons and gathered at the cuff. Cut full and unhurried — for the slow days, the long walks, the warm light of late afternoon.",
    image: coordOchreMagentaPose,
    gallery: [coordOchreMagentaPose, coordOchreCuff, coordOchreFull, coordOchreDetail],
    fabric: "woolen",
    origin: "Lucknow, India",
  },
  {
    slug: "navy-windowpane-coord",
    name: "Blue check co-ord-set",
    category: "Co-ord Sets",
    price: "₹ 1,499",
    shortDescription: "Brushed woolen kurta in navy with rust windowpane check.",
    description:
      "A relaxed shirt-kurta in brushed woolen fabric, rendered in deep navy and traced with a fine rust windowpane check. Designed with patch pockets, dropped shoulders, and finished with elegant Canadian pearl buttons. Quietly tailored for the cooler months.",
    image: coordNavyCheck,
    gallery: [coordNavyCheck, coordNavyFull, coordNavyDetail],
    fabric: "woolen",
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
  {
    slug: "kurta-set",
    name: "Kurta set",
    category: "Kurta Sets",
    price: "₹ 999",
    shortDescription:
      "Black windowpane kurta and salwar with teal floral embroidery at the front and cuffs, finished with a bright teal hem.",
    description:
      "A knee-length black kurta in a fine windowpane check, paired with matching wide-leg trousers. The front panel and sleeve cuffs carry hand-finished floral work in teal, grey, and muted blue, traced with a vivid teal border at the hem and cuffs. Modest, polished, and made for warm days — from our Lucknow atelier.",
    image: kurtaSet,
    gallery: [kurtaSet],
    fabric: "Cotton blend · Hand-embroidered panel",
    origin: "Lucknow, India",
  },
  {
    slug: "green-shrug-set",
    name: "Green Shrug set",
    category: "Kurta Sets",
    price: "₹ 1,499",
    shortDescription:
      "Emerald green three-piece with a flowy shrug, inner top, and straight trousers — scattered silver mirror accents throughout.",
    description:
      "A deep emerald green kurta set in three pieces: a long, open-front shrug with delicate silver mirror work scattered across the fabric, worn over a matching inner top and straight-cut trousers. Modern ethnic wear with a graceful drape — finished in our Lucknow atelier.",
    image: greenShrugSet,
    gallery: [greenShrugSet],
    fabric: "Georgette blend · Mirror work",
    origin: "Lucknow, India",
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
