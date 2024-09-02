"use client";

import { CartContext } from "@/context/cart";
import { useContext } from "react";

const CartDetails = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div className="flex flex-col">
      <div className="hidden lg:flex">Meu Carrinho</div>
      <div className="text-[#999999] font-semibold text-xs">
        {totalQuantity} itens
      </div>
    </div>
  );
};

export default CartDetails;
