"use server";

import CartProduct from "@/context/cart-product";

export const checkout = async (
  products: Array<CartProduct>
): Promise<boolean> => {
  return true;
};
