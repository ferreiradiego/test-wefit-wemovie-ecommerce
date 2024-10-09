"use client";

import CartContent from "@/components/CartContent";
import Image from "next/image";
import { EmptyStateContainer, EmptyStateMessage, ReloadLink } from "./styles";
import useCart from "@/hooks/useCart";

const Cart = () => {
  const { cartIsEmpty } = useCart();

  if (cartIsEmpty) {
    return (
      <EmptyStateContainer>
        <EmptyStateMessage>
          Parece que não há nada por aqui :(
        </EmptyStateMessage>
        <Image
          src="/assets/empty-cart.svg"
          alt="Carrinho vazio"
          width={178.63}
          height={264}
          priority
        />
        <ReloadLink href={"/"}>Recarregar página</ReloadLink>
      </EmptyStateContainer>
    );
  }

  return <CartContent />;
};

export default Cart;
