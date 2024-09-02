"use client";

import CartContent from "@/components/CartContent";
import { CartContext } from "@/context/cart";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import {
  EmptyCartContainer,
  EmptyCartMessage,
  ImageWrapper,
  ReloadLink,
} from "./styles";

const Cart = () => {
  const { cartIsEmpty } = useContext(CartContext);

  if (cartIsEmpty) {
    return (
      <EmptyCartContainer>
        <EmptyCartMessage>Parece que não há nada por aqui :(</EmptyCartMessage>
        <ImageWrapper>
          <Image
            src="/assets/empty-cart.svg"
            alt="Carrinho vazio"
            width={178.63}
            height={264}
          />
        </ImageWrapper>
        <ReloadLink href={"/"}>Recarregar página</ReloadLink>
      </EmptyCartContainer>
    );
  }

  return <CartContent />;
};

export default Cart;
