import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoMark from "@/assets/arj-mark.png";

const links = [
  { to: "/collections", label: "Collections" },
  { to: "/journal", label: "Journal" },
  { to: "/about", label: "Maison" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled;

  return (
    <motion.header
      initial={reduceMotion ? false : { y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        transparent ? "bg-transparent" : "bg-background/80 backdrop-blur-md border-b border-border/40"
      }`}
    >
      <div className="container-luxe flex items-center justify-between h-20 md:h-24">
        <Link to="/" aria-label="ARJ — The House of ARJ" className="flex items-center">
          <span
            aria-hidden
            className={`block h-8 md:h-9 w-8 md:w-9 shrink-0 transition-colors duration-700 ${
              transparent ? "bg-white" : "bg-foreground"
            }`}
            style={{
              maskImage: `url(${logoMark})`,
              WebkitMaskImage: `url(${logoMark})`,
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "center",
              WebkitMaskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
            }}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-12">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-[0.68rem] uppercase tracking-[0.36em] link-underline transition-colors duration-700 ${
                  transparent
                    ? isActive ? "text-ivory" : "text-ivory/70 hover:text-ivory"
                    : isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block w-[60px]" aria-hidden />

        <button
          aria-label="Menu"
          className={`md:hidden p-2 -mr-2 transition-colors duration-700 ${transparent ? "text-ivory" : "text-foreground"}`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-background border-t border-border/40"
          >
            <ul className="container-luxe py-10 sm:py-12 flex flex-col gap-6 sm:gap-8">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink to={l.to} className="font-serif text-3xl sm:text-4xl tracking-tight text-foreground">
                    {l.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-6 mt-2 border-t border-border/40 space-y-3 text-sm font-light text-muted-foreground">
                <a href="tel:+919278335862" className="block link-underline text-foreground">+91 92783 35862</a>
                <a href="mailto:thehouseofarj@gmail.com" className="block link-underline text-foreground break-all">thehouseofarj@gmail.com</a>
                <p>Dubagga, Lucknow, India</p>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
