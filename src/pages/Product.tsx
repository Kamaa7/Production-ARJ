import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/site/Layout";
import Reveal from "@/components/site/Reveal";
import SmoothImage from "@/components/site/SmoothImage";
import { getProduct, products } from "@/data/products";

const Product = () => {
  const { slug } = useParams();
  const [active, setActive] = useState(0);

  if (slug === "rose-chikan-hijab") {
    return <Navigate to="/product/co-ord-set" replace />;
  }
  if (slug === "magenta-wool-hijab") {
    return <Navigate to="/product/co-ord-set" replace />;
  }

  const product = getProduct(slug || "");

  if (!product) {
    return (
      <Layout>
        <section className="container-luxe py-48 text-center">
          <p className="eyebrow mb-8">— Not found</p>
          <h1 className="display text-5xl md:text-7xl mb-12">This piece is unavailable</h1>
          <Link to="/collections" className="link-underline text-[0.68rem] uppercase tracking-[0.36em]">
            Return to collections
          </Link>
        </section>
      </Layout>
    );
  }

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <Layout>
      <section className="container-luxe pt-16 md:pt-24">
        <Link to="/collections" className="text-[0.62rem] uppercase tracking-[0.36em] text-muted-foreground link-underline">
          ← Collections
        </Link>
      </section>

      <section className="container-luxe pt-10 sm:pt-12 md:pt-16 pb-24 sm:pb-32 grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-24">
        <div className="lg:col-span-7">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <SmoothImage
              src={product.gallery[active]}
              alt={product.name}
              eager
              wrapperClassName="aspect-[4/5]"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </motion.div>
          {product.gallery.length > 1 && (
            <div className="mt-6 grid grid-cols-4 gap-3">
              {product.gallery.map((g, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`aspect-square overflow-hidden bg-muted transition-opacity duration-700 ${
                    active === i ? "opacity-100" : "opacity-50 hover:opacity-100"
                  }`}
                >
                  <SmoothImage
                    src={g}
                    alt={`${product.name} thumbnail ${i + 1}`}
                    wrapperClassName="h-full w-full"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
          <Reveal as="p" className="eyebrow mb-6 sm:mb-8">— {product.category}</Reveal>
          <Reveal as="h1" delay={0.1} className="display text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-10 sm:mb-12 leading-[1.02]">
            {product.name}
          </Reveal>
          <Reveal delay={0.2}>
            <span className="block gold-rule mb-10 sm:mb-12" />
            <p className="text-base md:text-lg text-foreground leading-[1.9] font-light mb-6 sm:mb-8">
              {product.shortDescription}
            </p>
            <p className="text-base text-muted-foreground leading-[1.95] font-light">
              {product.description}
            </p>
            <p className="mt-12 sm:mt-16 font-serif text-2xl sm:text-3xl font-light">{product.price}</p>

            <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-6 sm:gap-10">
              <a
                href={`https://wa.me/919278335862?text=${encodeURIComponent(`Hello ARJ — I would like to enquire about the ${product.name}.`)}`}
                target="_blank"
                rel="noreferrer"
                className="group relative bg-foreground text-background px-10 sm:px-12 py-4 sm:py-5 text-[0.68rem] uppercase tracking-[0.36em] overflow-hidden"
              >
                <span className="relative z-10">Reserve via WhatsApp</span>
                <span className="absolute inset-0 bg-accent translate-y-full transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
              </a>
              <Link to="/contact" className="link-underline text-[0.68rem] uppercase tracking-[0.36em]">
                Enquire
              </Link>
            </div>

            <dl className="mt-16 sm:mt-20 border-t border-border/40 pt-8 sm:pt-10 space-y-4 sm:space-y-5 text-sm font-light">
              <div className="flex justify-between gap-6">
                <dt className="text-muted-foreground">Fabric</dt>
                <dd className="text-right">{product.fabric}</dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="text-muted-foreground">Origin</dt>
                <dd className="text-right">{product.origin}</dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="text-muted-foreground">Atelier</dt>
                <dd className="text-right">Dubagga, Lucknow</dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="text-muted-foreground">Enquire</dt>
                <dd className="text-right">
                  <a href="tel:+919278335862" className="link-underline">+91 92783 35862</a>
                </dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="text-muted-foreground">Delivery</dt>
                <dd className="text-right">PAN India Delivery</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="container-luxe py-20 sm:py-32 border-t border-border/40">
        <div className="flex items-baseline justify-between mb-12 sm:mb-16 gap-6">
          <h2 className="display text-2xl sm:text-3xl md:text-5xl">Considered alongside</h2>
          <Link to="/collections" className="hidden md:inline-block link-underline text-[0.68rem] uppercase tracking-[0.36em] whitespace-nowrap">
            All pieces
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16 sm:gap-y-20">
          {related.map((p) => (
            <Link key={p.slug} to={`/product/${p.slug}`} className="group">
              <SmoothImage
                src={p.image}
                alt={p.name}
                wrapperClassName="aspect-[3/4]"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.04]"
                style={{ transitionProperty: "opacity, transform", transitionDuration: "2200ms", transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
              />
              <div className="mt-6 flex justify-between">
                <h3 className="font-serif font-light text-xl md:text-2xl">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{p.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Product;
