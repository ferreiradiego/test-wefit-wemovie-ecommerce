import { formatCurrency } from "@/utils/price";
import Image from "next/image";

import { useContext } from "react";
import { CartContext } from "@/context/cart";
import CartProduct from "@/context/cart-product";
import DeleteIcon from "@/components/icons/DeleteIcon";
import MinusIcon from "@/components/icons/MinusIcon";
import PlusIcon from "@/components/icons/PlusIcon";
import {
  Container,
  ContainerDesktop,
  Details,
  ImageWrapper,
  ProductDetailsDesktop,
  ProductDetailsMobile,
  ProductPrice,
  Quantity,
  QuantityControl,
  QuantityWrapper,
  SubtotalLabel,
  SubTotalValue,
  SubtotalWrapper,
  Title,
  TitlePriceDesktopWrapper,
  TitlePriceMobileWrapper,
} from "./styles";

interface CartContentItemProps {
  cartProduct: CartProduct;
}

const CartContentItem = ({ cartProduct }: CartContentItemProps) => {
  const {
    decreaseProductQuantity,
    increaseProductQuantity,
    removeProductFromCart,
  } = useContext(CartContext);

  const handleDecreaseQuantityClick = () => {
    decreaseProductQuantity(cartProduct.id);
    if (cartProduct.quantity === 0) return;
  };

  const handleIncreaseQuantityClick = () => {
    increaseProductQuantity(cartProduct.id);
  };

  const handleRemoveProductClick = () => {
    removeProductFromCart(cartProduct.id);
  };

  return (
    <Container>
      <ProductDetailsMobile>
        <ImageWrapper>
          <Image src={cartProduct.image} alt={cartProduct.title} fill={true} />
        </ImageWrapper>
      </ProductDetailsMobile>

      <ProductDetailsDesktop>
        <ImageWrapper>
          <Image src={cartProduct.image} alt={cartProduct.title} fill={true} />
        </ImageWrapper>
        <TitlePriceDesktopWrapper>
          <Title>{cartProduct.title}</Title>
          <ProductPrice>{formatCurrency(cartProduct.price)}</ProductPrice>
        </TitlePriceDesktopWrapper>
      </ProductDetailsDesktop>

      <Details>
        <TitlePriceMobileWrapper>
          <Title>{cartProduct.title}</Title>
          <ProductPrice>{formatCurrency(cartProduct.price)}</ProductPrice>
          <button onClick={handleRemoveProductClick}>
            <DeleteIcon width={16} height={18} />
          </button>
        </TitlePriceMobileWrapper>

        <QuantityWrapper>
          <QuantityControl>
            <button onClick={handleDecreaseQuantityClick}>
              <MinusIcon />
            </button>
            <Quantity>{cartProduct.quantity}</Quantity>
            <button onClick={handleIncreaseQuantityClick}>
              <PlusIcon />
            </button>
          </QuantityControl>

          <SubtotalWrapper>
            <SubtotalLabel>SUBTOTAL</SubtotalLabel>
            <SubTotalValue>
              {formatCurrency(cartProduct.quantity * cartProduct.price)}
            </SubTotalValue>
          </SubtotalWrapper>

          <ContainerDesktop>
            <button onClick={handleRemoveProductClick}>
              <DeleteIcon width={16} height={18} />
            </button>
          </ContainerDesktop>
        </QuantityWrapper>
      </Details>
    </Container>
  );
};

export default CartContentItem;
