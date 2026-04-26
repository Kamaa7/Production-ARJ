import { Link } from "react-router-dom";
import logoMark from "@/assets/arj-mark.png";
import SmoothImage from "@/components/site/SmoothImage";

const Footer = () => {
  return (
    <footer className="mt-40 border-t border-border/40">
      <div className="container-luxe py-24 grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <SmoothImage
            src={logoMark}
            alt="ARJ"
            eager
            width={96}
            height={96}
            placeholderClassName="bg-transparent"
            wrapperClassName="h-10 w-10 mb-8 bg-transparent overflow-visible"
            className="h-full w-full object-contain"
          />
          <p className="max-w-sm text-sm text-muted-foreground leading-[1.95] font-light">
            The House of ARJ. A small atelier of luxury hijabs and modest couture, made slowly, by hand — in Lucknow, India.
          </p>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <p className="eyebrow mb-6">Maison</p>
          <ul className="space-y-4 text-sm">
            <li><Link to="/collections" className="link-underline">Collections</Link></li>
            <li><Link to="/journal" className="link-underline">Journal</Link></li>
            <li><Link to="/about" className="link-underline">About</Link></li>
            <li><Link to="/contact" className="link-underline">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow mb-6">Atelier</p>
          <address className="not-italic text-sm text-muted-foreground leading-[1.95] font-light space-y-3">
            <p>Dubagga, Lucknow<br />India</p>
            <a href="tel:+919278335862" className="block text-foreground link-underline">
              +91 92783 35862
            </a>
            <a href="mailto:thehouseofarj@gmail.com" className="block text-foreground link-underline">
              thehouseofarj@gmail.com
            </a>
          </address>
        </div>
      </div>

      <div className="border-t border-border/40">
        <div className="container-luxe py-8 flex flex-col items-center gap-4">
          <a
            href="https://github.com/Kamaa7"
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3.5 py-1.5 text-[0.55rem] uppercase tracking-[0.22em] text-foreground shadow-sm backdrop-blur-sm transition-all duration-500 hover:border-foreground/30 hover:bg-background hover:shadow-md"
          >
            <span className="text-muted-foreground transition-colors duration-500 group-hover:text-foreground">
              Developed by
            </span>
            <span className="h-px w-4 bg-border/80 transition-colors duration-500 group-hover:bg-foreground/30" aria-hidden />
            <span className="font-medium tracking-[0.16em]">GitHub · Kamaa7</span>
          </a>
          <div className="flex w-full flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
            <p className="text-[0.62rem] uppercase tracking-[0.36em] text-muted-foreground">
              © {new Date().getFullYear()} The House of ARJ
            </p>
            <p className="text-[0.62rem] uppercase tracking-[0.36em] text-muted-foreground">
              All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
