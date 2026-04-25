import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/site/Layout";
import Reveal from "@/components/site/Reveal";
import ProductCard from "@/components/site/ProductCard";
import SmoothImage from "@/components/site/SmoothImage";
import { products } from "@/data/products";

import lookSageRose from "@/assets/look-sage-rose.jpg";
import lookNoirZardozi from "@/assets/look-lavender-zardozi.jpg";
import lookOchreMagenta from "@/assets/look-ochre-magenta.jpg";
import hero1 from "@/assets/hero-1-crimson-zardozi-new.jpg";
import hero2 from "@/assets/hero-2-camel-zardozi.jpg";
import hero3 from "@/assets/hero-3-blush-garden.jpg";
import hero4 from "@/assets/hero-4-magenta-ochre.jpg";
import hero5 from "@/assets/hero-5-navy-check.jpg";
import hero6 from "@/assets/hero-6-zebra-kaftan.jpg";
import hero7 from "@/assets/hero-7-lavender-zardozi.jpg";
import hero8 from "@/assets/hero-8-rust-zardozi.jpg";

const Index = () => {
  const reduceMotion = useReducedMotion();
  const hijabs = products
    .filter((p) => p.category === "Zardozi Hijabs" || p.category === "Hijabs" || p.category === "Co-ord Sets")
    .sort((a, b) => {
      if (a.slug === "co-ord-set") return -1;
      if (b.slug === "co-ord-set") return 1;
      return 0;
    });
  const heroSlides = [
    { src: hero1, alt: "ARJ — Zardozi Hijabs, Spring MMXXV" },
    { src: hero2, alt: "ARJ — Zardozi Hijabs, Spring MMXXV" },
    { src: hero3, alt: "ARJ — Zardozi Hijabs, Spring MMXXV" },
    { src: hero4, alt: "ARJ — Co-ord set, Spring MMXXV" },
    { src: hero5, alt: "ARJ — Co-ord set, Spring MMXXV" },
    { src: hero6, alt: "ARJ — Co-ord set, Spring MMXXV" },
    { src: hero7, alt: "ARJ — Zardozi Hijabs, Spring MMXXV" },
    { src: hero8, alt: "ARJ — Zardozi Hijabs, Spring MMXXV" },
  ];
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5500);
    return () => clearInterval(id);
  }, [heroSlides.length, reduceMotion]);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative h-[100svh] -mt-20 md:-mt-24 overflow-hidden bg-ink">
        <AnimatePresence mode="sync">
          <motion.img
            key={slide}
            src={heroSlides[slide].src}
            alt={heroSlides[slide].alt}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            initial={reduceMotion ? false : { scale: 1.1, opacity: 0 }}
            animate={{ scale: reduceMotion ? 1 : 1.02, opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{
              opacity: { duration: reduceMotion ? 0 : 1.2, ease: [0.22, 1, 0.36, 1] },
              scale: { duration: reduceMotion ? 0 : 7, ease: "linear" },
            }}
            className="absolute inset-0 h-full w-full object-cover object-[60%_center] md:object-center"
            style={{ willChange: "transform, opacity" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/15 to-ink/70" />

        <div className="relative z-10 h-full container-luxe flex flex-col justify-end pb-20 sm:pb-24 md:pb-32 text-ivory">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow text-ivory/70 mb-6 sm:mb-8"
          >
            — The Co-ord-set, Spring MMXXV
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="display text-[14vw] sm:text-[11vw] md:text-[8vw] lg:text-[7.5rem] max-w-5xl leading-[0.98]"
          >
            The veil, <em className="italic font-serif text-ivory/85">refined.</em>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, delay: 1.4 }}
            className="mt-10 sm:mt-12 flex flex-wrap items-center gap-6 sm:gap-12"
          >
            <Link to="/collections" className="link-underline text-[0.68rem] uppercase tracking-[0.32em] sm:tracking-[0.36em] text-ivory">
              The Co-ord-set Edit
            </Link>
            <span className="hidden sm:block h-px w-10 bg-ivory/40" aria-hidden />
            <Link to="/about" className="link-underline text-[0.68rem] uppercase tracking-[0.32em] sm:tracking-[0.36em] text-ivory/70">
              The Maison
            </Link>
          </motion.div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="h-px w-8 sm:w-10 bg-ivory/30 overflow-hidden"
            >
              <span
                className={`block h-full bg-ivory transition-transform duration-700 ease-out origin-left ${
                  i === slide ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="container-luxe pt-32 sm:pt-40 md:pt-56 pb-24 sm:pb-32 md:pb-48">
        <Reveal as="p" className="eyebrow mb-8 sm:mb-12">— A philosophy of the hijab</Reveal>
        <Reveal as="h2" delay={0.15} className="display text-[2.4rem] sm:text-[3.4rem] md:text-[5rem] lg:text-[6.4rem] max-w-5xl leading-[1.02]">
          Modesty,<br />considered <em className="italic">slowly.</em>
        </Reveal>
        <Reveal delay={0.3} className="mt-12 sm:mt-20 ml-auto max-w-xl">
          <p className="text-base md:text-lg text-muted-foreground leading-[1.95] font-light">
            ARJ is a small house devoted to the hijab and the modest wardrobe that lives around it. We make few pieces — voiles, wools, chikan-edged squares — refined slowly, finished by hand, in Lucknow.
          </p>
        </Reveal>
      </section>

      {/* DIPTYCH */}
      <section className="container-luxe pb-32 sm:pb-40 md:pb-56">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
          <Reveal className="md:col-span-7">
            <SmoothImage
              src={lookNoirZardozi}
              alt="The Noir hijab, with copper zardozi"
              wrapperClassName="w-full h-[70vh] sm:h-[80vh] md:h-[90vh]"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </Reveal>
          <Reveal delay={0.2} className="md:col-span-4 md:col-start-9 md:pb-8">
            <p className="eyebrow mb-5 sm:mb-6">— Chapter I</p>
            <h3 className="font-serif font-light text-3xl sm:text-4xl md:text-5xl tracking-tight mb-8 sm:mb-10 leading-[1.1]">
              The Noir Veil
            </h3>
            <p className="text-base text-muted-foreground leading-[1.95] font-light mb-10 sm:mb-12">
              A study in restraint. A black hijab traced with copper zardozi, mukaish-dotted at the edge, finished with a hand-rolled hem.
            </p>
            <Link to="/product/kashmiri-stole" className="link-underline text-[0.68rem] uppercase tracking-[0.36em]">
              Discover
            </Link>
          </Reveal>
        </div>
      </section>

      {/* THE HIJAB EDIT */}
      <section className="container-luxe pb-24 sm:pb-32">
        <div className="flex items-baseline justify-between mb-12 sm:mb-16 md:mb-24 gap-6">
          <div>
            <Reveal as="p" className="eyebrow mb-4 sm:mb-6">— The Hijab Edit</Reveal>
            <Reveal as="h2" delay={0.15} className="display text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Veils of the season
            </Reveal>
          </div>
          <Link to="/collections" className="hidden md:inline-block link-underline text-[0.68rem] uppercase tracking-[0.36em] whitespace-nowrap">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-10 gap-y-16 sm:gap-y-24">
          {(hijabs.length ? hijabs : products).slice(0, 4).map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* MUSE */}
      <section className="relative h-[90svh] sm:h-[100svh] overflow-hidden mt-24 sm:mt-32">
        <SmoothImage
          src={lookOchreMagenta}
          alt="The hijabi muse"
          wrapperClassName="absolute inset-0 h-full w-full"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/35 to-transparent z-[1]" />
        <div className="relative z-10 h-full container-luxe flex items-center">
          <div className="max-w-xl text-ivory">
            <Reveal as="p" className="eyebrow text-ivory/60 mb-6 sm:mb-8">— The Muse</Reveal>
            <Reveal as="h2" delay={0.15} className="display text-4xl sm:text-5xl md:text-7xl mb-8 sm:mb-12 leading-[1.05]">
              She covers, <em className="serif-italic">first,</em> for herself.
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-base md:text-lg text-ivory/80 leading-[1.95] font-light max-w-md">
                A woman who wears the hijab as a choice, and who wishes the cloth at her temple to be as considered as the gesture.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="container-luxe pt-32 sm:pt-40 md:pt-56 pb-12 sm:pb-16 text-center">
        <Reveal as="p" className="eyebrow mb-8 sm:mb-10">— Continue</Reveal>
        <Reveal as="h2" delay={0.15} className="display text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-12 sm:mb-16">
          Read the Journal.
        </Reveal>
        <Reveal delay={0.3}>
          <Link to="/journal" className="link-underline text-[0.68rem] uppercase tracking-[0.36em]">
            Enter
          </Link>
        </Reveal>
      </section>
    </Layout>
  );
};

export default Index;
