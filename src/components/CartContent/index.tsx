"use client";

import { useRouter } from "next/navigation";
import { formatCurrency } from "@/utils/price";
import { checkout } from "@/actions/checkout";
import {
  CartContainer,
  DeleteButton,
  Divider,
  CartFooter,
  CartHeader,
  CartHeaderItem,
  TotalAmount,
  TotalContainer,
  TotalLabel,
} from "./styles";
import CartContentItem from "./CartContentItem";
import useCart from "@/hooks/useCart";
import Button from "../Button";
import { ButtonText } from "../Button/styles";

const CartContent = () => {
  const router = useRouter();
  const { products, totalPrice, clearCart } = useCart();

  const handleCheckout = async () => {
    const success = await checkout(products);

    if (success) {
      router.push("/compra-realizada");
      clearCart();
    }
  };

  return (
    <CartContainer>
      <CartHeader>
        <CartHeaderItem>PRODUTO</CartHeaderItem>
        <CartHeaderItem>QTD</CartHeaderItem>
        <CartHeaderItem>SUBTOTAL</CartHeaderItem>
        <DeleteButton />
      </CartHeader>

      {products.map((product) => (
        <CartContentItem key={product.id} cartProduct={product} />
      ))}

      <Divider />

      <CartFooter>
        <Button onClick={handleCheckout}>
          <ButtonText>FINALIZAR PEDIDO</ButtonText>
        </Button>
        <TotalContainer>
          <TotalLabel>TOTAL</TotalLabel>
          <TotalAmount>{formatCurrency(totalPrice)}</TotalAmount>
        </TotalContainer>
      </CartFooter>
    </CartContainer>
  );
};

export default CartContent;
