import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import Layout from "@/components/site/Layout";
import Reveal from "@/components/site/Reveal";
import SmoothImage from "@/components/site/SmoothImage";
import { useCart } from "@/context/CartContext";
import { useSeo } from "@/hooks/useSeo";
import { formatPrice } from "@/lib/cart";
import { ARJ_WHATSAPP_E164 } from "@/lib/siteConfig";
import { toast } from "@/hooks/use-toast";

const Bag = () => {
  const { items, total, updateQuantity, removeItem, clearCart } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");
  const [notes, setNotes] = useState("");

  useSeo({
    title: "Your Bag | The House of ARJ",
    description: "Review your selected ARJ pieces and complete your order.",
    path: "/bag",
  });

  const whatsappMessage = useMemo(() => {
    const lines = [
      "Hello The House of ARJ — I would like to place an order:",
      "",
      ...items.map(
        (item, index) =>
          `${index + 1}. ${item.name} × ${item.quantity} — ${item.price}${item.quantity > 1 ? ` (${formatPrice(item.priceValue * item.quantity)})` : ""}`,
      ),
      "",
      `Subtotal: ${formatPrice(total)}`,
      "",
      "Delivery details:",
      name ? `Name: ${name}` : null,
      phone ? `Phone: ${phone}` : null,
      address ? `Address: ${address}` : null,
      city ? `City: ${city}` : null,
      pin ? `PIN: ${pin}` : null,
      notes ? `Notes: ${notes}` : null,
    ].filter(Boolean);

    return lines.join("\n");
  }, [items, total, name, phone, address, city, pin, notes]);

  const handleCheckout = () => {
    if (!name.trim() || !phone.trim() || !address.trim() || !city.trim() || !pin.trim()) {
      toast({
        title: "Please complete your details",
        description: "Name, phone, address, city, and PIN are required to checkout.",
        variant: "destructive",
      });
      return;
    }

    const url = `https://wa.me/${ARJ_WHATSAPP_E164}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast({
      title: "Opening WhatsApp",
      description: "Send your order message to complete checkout with our team.",
    });
  };

  if (items.length === 0) {
    return (
      <Layout>
        <section className="container-luxe py-32 md:py-48 text-center">
          <Reveal>
            <ShoppingBag className="h-10 w-10 mx-auto mb-8 text-muted-foreground/60" strokeWidth={1} />
            <p className="eyebrow mb-8">— Your bag</p>
            <h1 className="display text-4xl md:text-6xl mb-8">It is presently empty</h1>
            <p className="text-muted-foreground font-light max-w-md mx-auto mb-12 leading-relaxed">
              Discover our curated collection of zardozi hijabs, co-ord sets, and modest essentials.
            </p>
            <Link
              to="/collections"
              className="group relative inline-block bg-foreground text-background px-12 py-5 text-[0.68rem] uppercase tracking-[0.36em] overflow-hidden"
            >
              <span className="relative z-10">Explore collections</span>
              <span className="absolute inset-0 bg-accent translate-y-full transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
            </Link>
          </Reveal>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="container-luxe pt-16 md:pt-24 pb-32">
        <Reveal>
          <p className="eyebrow mb-8">— Your bag</p>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12 md:mb-16">
            <h1 className="display text-4xl md:text-6xl lg:text-7xl">Selected pieces</h1>
            <button
              type="button"
              onClick={clearCart}
              className="text-[0.62rem] uppercase tracking-[0.36em] text-muted-foreground link-underline"
            >
              Clear bag
            </button>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-7 space-y-10 md:space-y-12">
            {items.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.05}>
                <article className="grid grid-cols-[88px_1fr] sm:grid-cols-[120px_1fr] gap-6 sm:gap-8 pb-10 md:pb-12 border-b border-border/40">
                  <Link to={`/product/${item.slug}`} className="block">
                    <SmoothImage
                      src={item.image}
                      alt={item.name}
                      wrapperClassName="aspect-[3/4]"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </Link>

                  <div className="flex flex-col min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Link
                          to={`/product/${item.slug}`}
                          className="font-serif font-light text-xl sm:text-2xl tracking-tight hover:opacity-70 transition-opacity duration-700"
                        >
                          {item.name}
                        </Link>
                        <p className="mt-2 text-sm text-muted-foreground font-light">{item.price}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.slug)}
                        aria-label={`Remove ${item.name} from bag`}
                        className="p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors duration-700"
                      >
                        <Trash2 className="h-4 w-4" strokeWidth={1.25} />
                      </button>
                    </div>

                    <div className="mt-auto pt-6 flex items-center justify-between gap-4">
                      <div className="inline-flex items-center border border-border/60">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          aria-label="Decrease quantity"
                          className="p-3 text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors duration-700"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-10 text-center text-sm font-light tabular-nums">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="p-3 text-muted-foreground hover:text-foreground transition-colors duration-700"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="font-serif text-lg sm:text-xl font-light tabular-nums">
                        {formatPrice(item.priceValue * item.quantity)}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <div className="lg:sticky lg:top-32 border border-border/40 p-8 sm:p-10">
                <h2 className="font-serif text-2xl sm:text-3xl font-light mb-8">Checkout</h2>

                <div className="space-y-5 mb-10">
                  <label className="block">
                    <span className="text-[0.62rem] uppercase tracking-[0.36em] text-muted-foreground">Full name</span>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-2 w-full bg-transparent border-b border-border/60 py-3 text-sm font-light focus:outline-none focus:border-foreground transition-colors duration-700"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block">
                    <span className="text-[0.62rem] uppercase tracking-[0.36em] text-muted-foreground">Phone</span>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="mt-2 w-full bg-transparent border-b border-border/60 py-3 text-sm font-light focus:outline-none focus:border-foreground transition-colors duration-700"
                      placeholder="+91"
                    />
                  </label>
                  <label className="block">
                    <span className="text-[0.62rem] uppercase tracking-[0.36em] text-muted-foreground">Address</span>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="mt-2 w-full bg-transparent border-b border-border/60 py-3 text-sm font-light focus:outline-none focus:border-foreground transition-colors duration-700"
                      placeholder="Street, locality"
                    />
                  </label>
                  <div className="grid grid-cols-2 gap-5">
                    <label className="block">
                      <span className="text-[0.62rem] uppercase tracking-[0.36em] text-muted-foreground">City</span>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="mt-2 w-full bg-transparent border-b border-border/60 py-3 text-sm font-light focus:outline-none focus:border-foreground transition-colors duration-700"
                      />
                    </label>
                    <label className="block">
                      <span className="text-[0.62rem] uppercase tracking-[0.36em] text-muted-foreground">PIN</span>
                      <input
                        type="text"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        className="mt-2 w-full bg-transparent border-b border-border/60 py-3 text-sm font-light focus:outline-none focus:border-foreground transition-colors duration-700"
                      />
                    </label>
                  </div>
                  <label className="block">
                    <span className="text-[0.62rem] uppercase tracking-[0.36em] text-muted-foreground">Notes (optional)</span>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={2}
                      className="mt-2 w-full bg-transparent border-b border-border/60 py-3 text-sm font-light resize-none focus:outline-none focus:border-foreground transition-colors duration-700"
                      placeholder="Size preferences, gift wrap, etc."
                    />
                  </label>
                </div>

                <div className="flex items-baseline justify-between gap-4 pt-6 border-t border-border/40 mb-8">
                  <span className="text-[0.62rem] uppercase tracking-[0.36em] text-muted-foreground">Subtotal</span>
                  <span className="font-serif text-2xl sm:text-3xl font-light tabular-nums">{formatPrice(total)}</span>
                </div>

                <button
                  type="button"
                  onClick={handleCheckout}
                  className="group relative w-full bg-foreground text-background px-10 py-5 text-[0.68rem] uppercase tracking-[0.36em] overflow-hidden"
                >
                  <span className="relative z-10">Complete order via WhatsApp</span>
                  <span className="absolute inset-0 bg-accent translate-y-full transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
                </button>

                <p className="mt-6 text-xs text-muted-foreground font-light leading-relaxed">
                  PAN India delivery. Our team will confirm availability, shipping, and payment details on WhatsApp.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Bag;
