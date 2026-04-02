import { createContext, useContext } from "react";
import type { CartContextType } from "../contexts/CartContext";

export const CartContext = createContext<CartContextType>({
   isOpen: false,
   openCart: () => {},
   closeCart: () => {},
   items: [],
   addToCart: () => {},
   removeFromCart: () => {},
   clearCart: () => {},
   isInCart: () => false,
});

export function useCart() {
   return useContext(CartContext);
}
