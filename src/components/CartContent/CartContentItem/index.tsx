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
  Details,
  ImageWrapper,
  Quantity,
  QuantityControl,
  QuantityWrapper,
  SubtotalLabel,
  SubtotalWrapper,
  Title,
  TitlePriceWrapper,
} from "./styles";

interface CartContentItemProps {
  cartProduct: CartProduct;
}

const CartContentItem = ({ cartProduct }: CartContentItemProps) => {
  // console.log(cartProduct);

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
      <ImageWrapper>
        <Image src={cartProduct.image} alt={cartProduct.title} fill={true} />
      </ImageWrapper>

      <Details>
        <TitlePriceWrapper>
          <Title>{cartProduct.title}</Title>
          <div>{formatCurrency(cartProduct.price)}</div>
          <button onClick={handleRemoveProductClick}>
            <DeleteIcon width={16} height={18} />
          </button>
        </TitlePriceWrapper>

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
            <span>
              {formatCurrency(cartProduct.quantity * cartProduct.price)}
            </span>
          </SubtotalWrapper>
        </QuantityWrapper>
      </Details>
    </Container>
  );
};

export default CartContentItem;
