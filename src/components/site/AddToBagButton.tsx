import { useState } from "react";
import { Check, ShoppingBag } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

type AddToBagButtonProps = {
  product: Product;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  showIcon?: boolean;
};

const AddToBagButton = ({
  product,
  variant = "outline",
  className,
  showIcon = true,
}: AddToBagButtonProps) => {
  const { addItem, isInBag } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const inBag = isInBag(product.slug);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setJustAdded(true);
    toast({
      title: "Added to your bag",
      description: `${product.name} is ready for checkout.`,
    });
    window.setTimeout(() => setJustAdded(false), 1800);
  };

  const label = justAdded ? "Added" : inBag ? "Add another" : "Add to bag";

  if (variant === "primary") {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={cn(
          "group relative bg-foreground text-background px-10 sm:px-12 py-4 sm:py-5 text-[0.68rem] uppercase tracking-[0.36em] overflow-hidden inline-flex items-center justify-center gap-3 transition-colors duration-700",
          className,
        )}
      >
        <span className="relative z-10 inline-flex items-center gap-3">
          {justAdded ? (
            <Check className="h-3.5 w-3.5" aria-hidden />
          ) : showIcon ? (
            <ShoppingBag className="h-3.5 w-3.5" aria-hidden />
          ) : null}
          {label}
        </span>
        <span className="absolute inset-0 bg-accent translate-y-full transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Add ${product.name} to bag`}
      className={cn(
        "inline-flex items-center justify-center gap-2 text-[0.62rem] uppercase tracking-[0.36em] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
        variant === "outline" &&
          "w-full border border-foreground/20 px-5 py-3.5 hover:border-foreground hover:bg-foreground hover:text-background",
        variant === "ghost" &&
          "px-0 py-2 link-underline text-muted-foreground hover:text-foreground",
        justAdded && "border-accent text-accent",
        className,
      )}
    >
      {justAdded ? (
        <Check className="h-3 w-3" aria-hidden />
      ) : showIcon ? (
        <ShoppingBag className="h-3 w-3" aria-hidden />
      ) : null}
      {label}
    </button>
  );
};

export default AddToBagButton;
