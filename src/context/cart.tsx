"use client";

import { createContext, ReactNode, useState } from "react";
import CartProduct from "./cart-product";

interface CartContextProps {
  products: Array<CartProduct>;
  totalQuantity: number;
  totalPrice: number;
  cartIsEmpty: boolean;
  addProductToCart: ({ product }: { product: CartProduct }) => void;
  removeProductFromCart: (productId: number) => void;
  decreaseProductQuantity: (productId: number) => void;
  increaseProductQuantity: (productId: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextProps>({
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
  cartIsEmpty: true,
  addProductToCart: () => {},
  decreaseProductQuantity: () => {},
  increaseProductQuantity: () => {},
  removeProductFromCart: () => {},
  clearCart: () => {},
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Array<CartProduct>>([]);

  const totalQuantity = products.reduce((acc, product) => {
    return acc + product.quantity;
  }, 0);

  const cartIsEmpty = products.length === 0;

  const totalPrice = products.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  const addProductToCart: CartContextProps["addProductToCart"] = ({
    product,
  }) => {
    const isProductAlreadyOnCart = products.some(
      (cartProduct) => cartProduct.id === product.id
    );

    if (isProductAlreadyOnCart) {
      return setProducts((prev) =>
        prev.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + product?.quantity,
            };
          }
          return cartProduct;
        })
      );
    }

    setProducts((prev) => [...prev, product]);
  };

  const decreaseProductQuantity = (productId: number) => {
    setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id == productId) {
          if (cartProduct.quantity === 1) {
            return cartProduct;
          }
          return {
            ...cartProduct,
            quantity: cartProduct.quantity - 1,
          };
        }
        return cartProduct;
      })
    );
  };

  const increaseProductQuantity = (productId: number) => {
    setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          };
        }
        return cartProduct;
      })
    );
  };

  const removeProductFromCart = (productId: number) => {
    setProducts((prev) => prev.filter((product) => product.id !== productId));
  };

  const clearCart = () => {
    return setProducts([]);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
        totalQuantity,
        decreaseProductQuantity,
        increaseProductQuantity,
        removeProductFromCart,
        totalPrice,
        clearCart,
        cartIsEmpty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
