import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { Product } from "@/data/products";
import {
  CART_STORAGE_KEY,
  CartItem,
  getCartCount,
  getCartTotal,
  productToCartItem,
} from "@/lib/cart";

type CartContextValue = {
  items: CartItem[];
  count: number;
  total: number;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clearCart: () => void;
  isInBag: (slug: string) => boolean;
};

const CartContext = createContext<CartContextValue | null>(null);

const readStoredCart = (): CartItem[] => {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(() => readStoredCart());

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((product: Product, quantity = 1) => {
    setItems((current) => {
      const existing = current.find((item) => item.slug === product.slug);
      if (existing) {
        return current.map((item) =>
          item.slug === product.slug
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...current, productToCartItem(product, quantity)];
    });
  }, []);

  const removeItem = useCallback((slug: string) => {
    setItems((current) => current.filter((item) => item.slug !== slug));
  }, []);

  const updateQuantity = useCallback((slug: string, quantity: number) => {
    if (quantity < 1) return;
    setItems((current) =>
      current.map((item) => (item.slug === slug ? { ...item, quantity } : item)),
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const isInBag = useCallback(
    (slug: string) => items.some((item) => item.slug === slug),
    [items],
  );

  const value = useMemo(
    () => ({
      items,
      count: getCartCount(items),
      total: getCartTotal(items),
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      isInBag,
    }),
    [items, addItem, removeItem, updateQuantity, clearCart, isInBag],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
