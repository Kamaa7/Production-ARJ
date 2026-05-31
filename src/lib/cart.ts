import { Product } from "@/data/products";

export type CartItem = {
  slug: string;
  name: string;
  price: string;
  priceValue: number;
  image: string;
  quantity: number;
};

export const CART_STORAGE_KEY = "arj-bag";

export const parsePrice = (price: string): number => {
  const value = Number(price.replace(/[^\d.]/g, ""));
  return Number.isFinite(value) ? value : 0;
};

export const formatPrice = (value: number): string =>
  `₹ ${value.toLocaleString("en-IN")}`;

export const productToCartItem = (product: Product, quantity = 1): CartItem => ({
  slug: product.slug,
  name: product.name,
  price: product.price,
  priceValue: parsePrice(product.price),
  image: product.image,
  quantity,
});

export const getCartTotal = (items: CartItem[]): number =>
  items.reduce((sum, item) => sum + item.priceValue * item.quantity, 0);

export const getCartCount = (items: CartItem[]): number =>
  items.reduce((sum, item) => sum + item.quantity, 0);
