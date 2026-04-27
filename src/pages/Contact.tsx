import { FormEvent, useState } from "react";
import Layout from "@/components/site/Layout";
import Reveal from "@/components/site/Reveal";
import { toast } from "@/hooks/use-toast";
import { useSeo } from "@/hooks/useSeo";
import { Instagram } from "lucide-react";

const Contact = () => {
  useSeo({
    title: "Contact The House of ARJ | Enquiries & Orders",
    description:
      "Contact The House of ARJ for product enquiries, WhatsApp reservations, and atelier correspondence in Lucknow, India.",
    path: "/contact",
  });

  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast({ title: "Message received", description: "We will reply within two working days." });
  };

  return (
    <Layout>
      <section className="container-luxe pt-32 md:pt-48 pb-16">
        <Reveal as="p" className="eyebrow mb-10">— Correspondence</Reveal>
        <Reveal as="h1" delay={0.15} className="display text-[3.2rem] md:text-[7rem] lg:text-[9rem]">
          Write<br />to us.
        </Reveal>
      </section>

      <section className="container-luxe pb-40 grid lg:grid-cols-12 gap-16 lg:gap-24 mt-20">
        <Reveal className="lg:col-span-4 space-y-16">
          <div>
            <p className="eyebrow mb-5">— Write</p>
            <a href="mailto:thehouseofarj@gmail.com" className="font-serif font-light text-2xl md:text-3xl link-underline break-all">
              thehouseofarj@gmail.com
            </a>
          </div>
          <div>
            <p className="eyebrow mb-5">— Telephone</p>
            <a href="tel:+919278335862" className="font-serif font-light text-2xl md:text-3xl link-underline">
              +91 92783 35862
            </a>
          </div>
          <div>
            <p className="eyebrow mb-5">— Atelier</p>
            <p className="font-serif font-light text-2xl md:text-3xl leading-relaxed">
              Dubagga,<br />
              Lucknow, India
            </p>
          </div>
          <div>
            <p className="eyebrow mb-5">— Hours</p>
            <p className="font-serif font-light text-2xl md:text-3xl leading-relaxed">
              Tuesday — Saturday<br />
              11h — 19h
            </p>
          </div>

          <div>
            <p className="eyebrow mb-5">— Connect</p>
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/919278335862"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="group flex items-center justify-center w-12 h-12 rounded-full border border-border/60 hover:border-foreground hover:bg-foreground transition-all duration-500"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-muted-foreground group-hover:fill-background transition-colors duration-500"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-9.761c1.48 0 2.676-1.196 2.676-2.676 0-1.48-1.196-2.676-2.676-2.676-1.48 0-2.676 1.196-2.676 2.676 0 1.48 1.196 2.676 2.676 2.676z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/the_house_of_arj?igsh=MThqeDJscnptM2J1bA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group flex items-center justify-center w-12 h-12 rounded-full border border-border/60 hover:border-foreground hover:bg-foreground transition-all duration-500"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-background transition-colors duration-500" />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-7 lg:col-start-6">
          <form onSubmit={onSubmit} className="space-y-14">
            {[
              { id: "name", label: "Name", type: "text" },
              { id: "email", label: "Email", type: "email" },
            ].map((f) => (
              <div key={f.id}>
                <label htmlFor={f.id} className="eyebrow block mb-4">
                  — {f.label}
                </label>
                <input
                  required
                  id={f.id}
                  type={f.type}
                  className="w-full bg-transparent border-b border-border/60 focus:border-foreground py-4 outline-none text-xl font-serif font-light transition-colors duration-700"
                />
              </div>
            ))}

            <div>
              <label htmlFor="message" className="eyebrow block mb-4">— Message</label>
              <textarea
                required
                id="message"
                rows={5}
                className="w-full bg-transparent border-b border-border/60 focus:border-foreground py-4 outline-none text-xl font-serif font-light resize-none transition-colors duration-700"
              />
            </div>

            <button
              type="submit"
              disabled={sent}
              className="group relative bg-foreground text-background px-14 py-5 text-[0.68rem] uppercase tracking-[0.36em] overflow-hidden disabled:opacity-60"
            >
              <span className="relative z-10">{sent ? "Sent" : "Send message"}</span>
              <span className="absolute inset-0 bg-accent translate-y-full transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
            </button>
          </form>
        </Reveal>
      </section>
    </Layout>
  );
};

export default Contact;
