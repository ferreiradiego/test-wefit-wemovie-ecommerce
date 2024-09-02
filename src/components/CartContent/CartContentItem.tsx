import { formatCurrency } from "@/utils/price";
import Image from "next/image";
import DeleteIcon from "../icons/DeleteIcon";
import MinusIcon from "../icons/MinusIcon";
import PlusIcon from "../icons/PlusIcon";
import { useContext } from "react";
import { CartContext } from "@/context/cart";
import CartProduct from "@/context/cart-product";

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
    <div className="flex flex-row gap-4">
      <div className="relative min-w-[64px] h-[82px]">
        <Image src={cartProduct.image} alt="Spider Man" fill={true} />
      </div>
      <div className="text-[#2F2E41] font-bold flex flex-col gap-4">
        <div className="text-[#2F2E41] font-bold gap-4 flex flex-row items-center justify-center text-sm">
          <div className="text-wrap">{cartProduct.title}</div>
          <div>{formatCurrency(cartProduct.price)}</div>
          <button onClick={handleRemoveProductClick}>
            <DeleteIcon width={16} height={18} />
          </button>
        </div>

        <div className="flex gap-4">
          <div className="flex items-center text-center gap-[11px] w-[117px]">
            <button onClick={handleDecreaseQuantityClick}>
              <MinusIcon />
            </button>
            <span className="block text-sm h-[26px] border-[#D9D9D9] border rounded w-full text-[#2F2E41] font-normal text-center">
              {cartProduct.quantity}
            </span>
            <button onClick={handleIncreaseQuantityClick}>
              <PlusIcon />
            </button>
          </div>

          <div className="flex flex-col text-end">
            <span className="text-[#999999] text-xs uppercase lg:hidden">
              SUBTOTAL
            </span>
            <span>
              {formatCurrency(cartProduct.quantity * cartProduct.price)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContentItem;
