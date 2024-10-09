"use client";

import CartIcon from "../icons/CartIcon";
import {
  CartItemsInfo,
  CartLink,
  CartText,
  HeaderContainer,
  ItemCount,
  LogoLink,
} from "./styles";
import useCart from "@/hooks/useCart";

const Header = () => {
  const { cartIsEmpty, totalQuantity } = useCart();

  return (
    <HeaderContainer>
      <LogoLink href="/">WeMovies</LogoLink>
      <CartLink href="/carrinho" $disabled={cartIsEmpty}>
        <CartItemsInfo>
          <CartText>Meu Carrinho</CartText>
          <ItemCount>{totalQuantity} itens</ItemCount>
        </CartItemsInfo>
        <CartIcon />
      </CartLink>
    </HeaderContainer>
  );
};

export default Header;
