"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import { formatCurrency } from "@/utils/price";
import { CartContext } from "@/context/cart";
import { checkout } from "@/actions/checkout";
import {
  CheckoutButton,
  Container,
  DeleteButton,
  Divider,
  Footer,
  Header,
  HeaderItem,
  TotalAmount,
  TotalContainer,
  TotalLabel,
} from "./styles";
import CartContentItem from "./CartContentItem";
import styled from "styled-components";

interface CartContentProps {}

const CartContent = ({}: CartContentProps) => {
  const router = useRouter();
  const { products, totalPrice, clearCart } = useContext(CartContext);

  const handleCheckout = async () => {
    const success = await checkout(products);

    if (success) {
      router.push("/compra-realizada");
      clearCart();
    }
  };

  return (
    <Container>
      <Header>
        <HeaderItem>PRODUTO</HeaderItem>
        <HeaderItem>QTD</HeaderItem>
        <HeaderItem>SUBTOTAL</HeaderItem>
        <DeleteButton />
      </Header>

      {products.map((product) => (
        <CartContentItem key={product.id} cartProduct={product} />
      ))}

      <Divider />

      <Footer>
        <CheckoutButton onClick={handleCheckout}>
          Finalizar pedido
        </CheckoutButton>
        <TotalContainer>
          <TotalLabel>TOTAL</TotalLabel>
          <TotalAmount>{formatCurrency(totalPrice)}</TotalAmount>
        </TotalContainer>
      </Footer>
    </Container>
  );
};

export default CartContent;
