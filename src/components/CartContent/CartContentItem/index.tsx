import { formatCurrency } from "@/utils/price";
import Image from "next/image";

import DeleteIcon from "@/components/icons/DeleteIcon";
import MinusIcon from "@/components/icons/MinusIcon";
import PlusIcon from "@/components/icons/PlusIcon";
import {
  CartItemContainer,
  CartItemContainerDesktop,
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
import useCart from "@/hooks/useCart";
import { CartProduct } from "@/types";

interface CartContentItemProps {
  cartProduct: CartProduct;
}

const CartContentItem = ({ cartProduct }: CartContentItemProps) => {
  const {
    decreaseProductQuantity,
    increaseProductQuantity,
    removeProductFromCart,
  } = useCart();

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
    <CartItemContainer>
      <ProductDetailsMobile>
        <ImageWrapper>
          <Image
            src={cartProduct.image}
            alt={cartProduct.title}
            fill={true}
            sizes="(min-width: 1440px) 91px, 64px"
          />
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
            <DeleteIcon />
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

          <CartItemContainerDesktop>
            <button onClick={handleRemoveProductClick}>
              <DeleteIcon />
            </button>
          </CartItemContainerDesktop>
        </QuantityWrapper>
      </Details>
    </CartItemContainer>
  );
};

export default CartContentItem;
