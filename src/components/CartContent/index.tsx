"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import { formatCurrency } from "@/utils/price";
import { CartContext } from "@/context/cart";
import { checkout } from "@/actions/checkout";
import {
  CheckoutButton,
  Container,
  Divider,
  Footer,
  Header,
  TotalAmount,
  TotalContainer,
  TotalLabel,
} from "./styles";
import CartContentItem from "./CartContentItem";

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
        <span>PRODUTO</span>
        <span>QTD</span>
        <span>SUBTOTAL</span>
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
