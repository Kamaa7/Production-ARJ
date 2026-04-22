import { useState } from "react";
import Layout from "@/components/site/Layout";
import Reveal from "@/components/site/Reveal";
import ProductCard from "@/components/site/ProductCard";
import { products } from "@/data/products";

const categories = ["All", "Zardozi Hijabs", "Hijabs", "Co-ord Sets", "Kurta Sets", "Kaftans", "Abayas"] as const;

const categoryOrder: Record<string, number> = {
  "Zardozi Hijabs": 0,
  "Hijabs": 1,
  "Co-ord Sets": 2,
  "Kurta Sets": 3,
  "Kaftans": 4,
  "Abayas": 5,
};

const Collections = () => {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered =
    active === "All"
      ? [...products].sort((a, b) => (categoryOrder[a.category] ?? 99) - (categoryOrder[b.category] ?? 99))
      : products.filter((p) => p.category === active);

  return (
    <Layout>
      <section className="container-luxe pt-24 sm:pt-32 md:pt-48 pb-16 sm:pb-20 md:pb-32">
        <Reveal as="p" className="eyebrow mb-8 sm:mb-10">— Collections</Reveal>
        <Reveal as="h1" delay={0.15} className="display text-[2.8rem] sm:text-[4.4rem] md:text-[8rem] lg:text-[10rem] leading-[0.98]">
          The Zardozi Index
        </Reveal>
        <Reveal delay={0.3} className="mt-12 sm:mt-16 max-w-xl ml-auto">
          <p className="text-base md:text-lg text-muted-foreground leading-[1.95] font-light">
            Hijabs and the modest wardrobe that lives around them. Each composition is released in a considered edition, produced in limited quantity and finished entirely by hand.
          </p>
        </Reveal>
      </section>

      <section className="container-luxe">
        <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-12 gap-y-4 sm:gap-y-5 border-y border-border/40 py-6 sm:py-8 overflow-x-auto">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`text-[0.65rem] sm:text-[0.68rem] uppercase tracking-[0.3em] sm:tracking-[0.36em] whitespace-nowrap transition-colors duration-700 ${
                active === c ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="container-luxe py-16 sm:py-24 md:py-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-10 gap-y-20 sm:gap-y-32">
          {filtered.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Collections;
