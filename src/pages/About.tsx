import Layout from "@/components/site/Layout";
import Reveal from "@/components/site/Reveal";
import SmoothImage from "@/components/site/SmoothImage";
import lookNoirGarden from "@/assets/look-noir-garden.jpg";
import lookSageProfile from "@/assets/look-sage-profile.jpg";

const About = () => {
  return (
    <Layout>
      <section className="container-luxe pt-24 sm:pt-32 md:pt-48 pb-24 sm:pb-32">
        <Reveal as="p" className="eyebrow mb-8 sm:mb-10">— The Maison</Reveal>
        <Reveal as="h1" delay={0.15} className="display text-[2.8rem] sm:text-[3.6rem] md:text-[7rem] lg:text-[9rem] leading-[0.96]">
          A house<br />of the <em className="italic text-foreground/85">veil.</em>
        </Reveal>
      </section>

      <section className="container-luxe pb-28 sm:pb-40 grid md:grid-cols-12 gap-10 md:gap-20">
        <Reveal as="p" className="md:col-span-3 eyebrow">— Origin, MMXXV</Reveal>
        <Reveal as="div" delay={0.15} className="md:col-span-8 md:col-start-5 space-y-10 sm:space-y-12">
          <p className="font-serif font-light text-2xl sm:text-3xl md:text-4xl leading-[1.3] tracking-tight">
            ARJ was founded in the spring of 2025 around a single intention — to design hijabs and modest dress that respect the wearer, the maker, and the material.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-[1.95] font-light max-w-2xl">
            We refuse the seasonal acceleration of fashion. Each hijab is conceived once, refined slowly, and produced in editions small enough to be remembered.
          </p>
        </Reveal>
      </section>

      <section className="relative">
        <SmoothImage
          src={lookNoirGarden}
          alt="ARJ — Noir series"
          wrapperClassName="w-full h-[80vh] md:h-[100vh]"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      <section className="container-luxe py-28 sm:py-40 grid md:grid-cols-12 gap-10 md:gap-20 items-start">
        <Reveal as="div" className="md:col-span-5">
          <p className="eyebrow mb-6 sm:mb-8">— Provenance</p>
          <h2 className="display text-3xl sm:text-4xl md:text-6xl">Sourced<br />with restraint.</h2>
        </Reveal>
        <Reveal as="div" delay={0.15} className="md:col-span-6 md:col-start-7 space-y-6 sm:space-y-8">
          <p className="text-base md:text-lg text-muted-foreground leading-[1.95] font-light">
            Our voiles and cottons are spun in Lucknow. Our wool hijabs are loomed in Srinagar. Chikan and zardozi are set by hand in small workshops we have known for years.
          </p>
          <p className="text-base text-muted-foreground leading-[1.95] font-light">
            We visit them. We wait for them. We do not hurry.
          </p>
        </Reveal>
      </section>

      <section className="container-luxe pb-28 sm:pb-40 grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        <Reveal className="md:col-span-7 md:order-2">
          <SmoothImage
            src={lookSageProfile}
            alt="The hand remains"
            wrapperClassName="w-full h-[60vh] sm:h-[75vh] md:h-[80vh]"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </Reveal>
        <Reveal delay={0.15} className="md:col-span-4 md:col-start-1 md:order-1 md:pr-8">
          <p className="eyebrow mb-6 sm:mb-8">— Practice</p>
          <h2 className="display text-3xl sm:text-4xl md:text-6xl mb-10 sm:mb-12">The hand<br />remains.</h2>
          <p className="text-base text-muted-foreground leading-[1.95] font-light">
            Hems are rolled by hand. Edges are scalloped by hand. The mark of the maker is, for us, the only true signature on a hijab.
          </p>
        </Reveal>
      </section>

      {/* Atelier contact */}
      <section className="container-luxe pb-32 sm:pb-40 grid md:grid-cols-12 gap-10 md:gap-20">
        <Reveal as="p" className="md:col-span-3 eyebrow">— The Atelier</Reveal>
        <Reveal as="div" delay={0.15} className="md:col-span-8 md:col-start-5 space-y-6 font-serif font-light text-xl sm:text-2xl md:text-3xl leading-relaxed">
          <p>Dubagga, Lucknow, India.</p>
          <p>
            <a href="tel:+919278335862" className="link-underline">+91 92783 35862</a>
          </p>
          <p>
            <a href="mailto:thehouseofarj@gmail.com" className="link-underline break-all">thehouseofarj@gmail.com</a>
          </p>
        </Reveal>
      </section>
    </Layout>
  );
};

export default About;
