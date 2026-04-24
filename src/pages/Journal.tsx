import { Link } from "react-router-dom";
import Layout from "@/components/site/Layout";
import Reveal from "@/components/site/Reveal";
import SmoothImage from "@/components/site/SmoothImage";
import hero1CrimsonZardoziJournal from "@/assets/hero-1-crimson-zardozi-journal.png";
import hero7LavenderZardoziJournal from "@/assets/hero-7-lavender-zardozi-journal.png";
import hero8RustZardoziJournal from "@/assets/hero-8-rust-zardozi-journal.png";
import lookNoirGarden from "@/assets/look-noir-garden.jpg";

const entries = [
  { n: "I", title: "On the hijab, considered", date: "March 2025", excerpt: "Notes on covering with intention — the drape, the weight, the gesture.", image: hero1CrimsonZardoziJournal },
  { n: "II", title: "A copper thread", date: "February 2025", excerpt: "An afternoon with our zardozi karigar, edging a black hijab in the old quarter.", image: hero7LavenderZardoziJournal },
  { n: "III", title: "Print, soft", date: "January 2025", excerpt: "Why the leopard, and why now — a study in earth tones for the modest wardrobe.", image: hero8RustZardoziJournal },
  { n: "IV", title: "The black co-ord set", date: "December 2024", excerpt: "On the discipline of a single colour at the temple, worn well.", image: lookNoirGarden },
];

const Journal = () => {
  return (
    <Layout>
      <section className="container-luxe pt-20 sm:pt-24 md:pt-36 pb-16 sm:pb-20">
        <Reveal as="p" className="eyebrow mb-5 sm:mb-6">— Journal</Reveal>
        <Reveal as="h1" delay={0.1} className="display text-[2.6rem] sm:text-[4rem] md:text-[7rem] lg:text-[9rem] leading-[0.98]">
          The Hijab Lookbook
        </Reveal>
        <Reveal delay={0.2} className="mt-8 sm:mt-10 max-w-xl">
          <p className="text-base md:text-lg text-muted-foreground leading-[1.9] font-light">
            Dispatches from the atelier — notes on the hijab, the drape, the karigars, and the slow accumulation of a season.
          </p>
        </Reveal>
      </section>

      <section className="container-luxe pb-24 sm:pb-32 space-y-20 sm:space-y-32">
        {entries.map((e, i) => (
          <Reveal key={e.n} delay={i * 0.05}>
            <article className={`grid md:grid-cols-12 gap-8 sm:gap-10 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <Link to="/collections" className="md:col-span-7 group block">
                <SmoothImage
                  src={e.image}
                  alt={e.title}
                  wrapperClassName="w-full h-[55vh] sm:h-[65vh] md:h-[75vh]"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04]"
                  style={{ transitionProperty: "opacity, transform", transitionDuration: "1600ms", transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                />
              </Link>
              <div className="md:col-span-5 md:px-6">
                <p className="font-serif italic text-accent text-2xl sm:text-3xl mb-3 sm:mb-4">— {e.n}</p>
                <p className="eyebrow mb-3 sm:mb-4">{e.date}</p>
                <h2 className="display text-2xl sm:text-3xl md:text-5xl mb-5 sm:mb-6">{e.title}</h2>
                <p className="text-base text-muted-foreground leading-[1.9] font-light mb-6 sm:mb-8">{e.excerpt}</p>
                <Link to="/collections" className="link-underline text-[0.72rem] uppercase tracking-[0.32em]">
                  Continue reading
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </Layout>
  );
};

export default Journal;
