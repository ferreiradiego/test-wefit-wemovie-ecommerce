"use client";

import { CartContext } from "@/context/cart";
import { useContext } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartText = styled.div`
  display: none;
  font-size: 14px;
  @media (min-width: 1440px) {
    display: flex;
  }
`;

const ItemCount = styled.div`
  color: #999999;
  font-weight: 600;
  font-size: 0.75rem;
`;

const CartDetails = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Container>
      <CartText>Meu Carrinho</CartText>
      <ItemCount>{totalQuantity} itens</ItemCount>
    </Container>
  );
};

export default CartDetails;
