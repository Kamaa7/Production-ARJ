import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Product } from "@/data/products";
import SmoothImage from "@/components/site/SmoothImage";

const ProductCard = ({ product, index = 0 }: { product: Product; index?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.4, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/product/${product.slug}`} className="group block">
        <SmoothImage
          src={product.image}
          alt={product.name}
          wrapperClassName="aspect-[3/4]"
          className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.04]"
          style={{ transitionProperty: "opacity, transform", transitionDuration: "2200ms", transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
        />
        <div className="mt-8 flex items-baseline justify-between gap-4">
          <div>
            <p className="eyebrow mb-2">{product.category}</p>
            <h3 className="font-serif font-light text-2xl md:text-[1.7rem] tracking-tight">{product.name}</h3>
          </div>
          <p className="text-sm text-muted-foreground font-light whitespace-nowrap">{product.price}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
