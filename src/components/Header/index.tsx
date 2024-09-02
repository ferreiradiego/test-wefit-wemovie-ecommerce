import CartDetails from "./CartDetails";
import { CartIcon, CartLink, HeaderContainer, LogoLink, Nav } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <LogoLink href="/">WeMovies</LogoLink>
        <CartLink href="/carrinho">
          <CartDetails />
          <CartIcon
            src="assets/cart-icon.svg"
            alt="Carrinho"
            width={24}
            height={21}
          />
        </CartLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
