"use client";

import { useContext } from "react";
import CartDetails from "./CartDetails";
import { CartIcon, CartLink, HeaderContainer, LogoLink } from "./styles";
import { CartContext } from "@/context/cart";

const Header = () => {
  const { cartIsEmpty } = useContext(CartContext);

  return (
    <HeaderContainer>
      <LogoLink href="/">WeMovies</LogoLink>
      <CartLink href="/carrinho" disabled={cartIsEmpty}>
        <CartDetails />
        <CartIcon
          src="assets/cart-icon.svg"
          alt="Carrinho"
          width={24}
          height={21}
        />
      </CartLink>
    </HeaderContainer>
  );
};

export default Header;
