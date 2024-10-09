"use server";

import { CartProduct } from "@/types";



export const checkout = async (
  products: Array<CartProduct>
): Promise<boolean> => {
  return true;
};
