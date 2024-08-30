"use client";

import { Movie } from "@/types/movie";
import Button from "./Button";
import Image from "next/image";
import { formatCurrency } from "@/utils/price";
import DeleteIcon from "./icons/DeleteIcon";
import MinusIcon from "./icons/MinusIcon";
import PlusIcon from "./icons/PlusIcon";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface CartContentProps {}

const CartContent = ({}: CartContentProps) => {
  const router = useRouter();
  const [quantityInCart, setQuantityInCart] = useState(0);

  const handleDecreaseQuantityClick = () => {
    // decreaseProductQuantity(cartProduct.id);
    if (quantityInCart === 0) return;
    setQuantityInCart(quantityInCart - 1);
  };

  const handleIncreaseQuantityClick = () => {
    // increaseProductQuantity(cartProduct.id);
    setQuantityInCart(quantityInCart + 1);
  };

  const handleRemoveProductClick = () => {
    // removeProductFromCart(cartProduct.id);
    console.log("Product removed from cart");
  };

  const handleCheckout = () => {
    console.log("Checkout clicked");
    router.push("/compra-realizada");
  };

  return (
    <div className="bg-white flex flex-col p-6 gap-6">
      <div className="text-[#999999] font-bold text-sm lg:flex justify-between hidden">
        <span>PRODUTO</span>
        <span>QTD</span>
        <span>SUBTOTAL</span>
      </div>

      <div className="flex flex-row gap-4">
        <div className="relative min-w-[64px] h-[82px]">
          <Image
            src="https://wefit-react-web-test.s3.amazonaws.com/spider-man.png"
            alt="Spider Man"
            fill={true}
          />
        </div>
        <div className="text-[#2F2E41] font-bold flex flex-col gap-4">
          <div className="text-[#2F2E41] font-bold gap-4 flex flex-row items-center justify-center text-sm">
            <div className="text-wrap">Homem Aranha</div>
            <div>{formatCurrency(29.99)}</div>
            <button>
              <DeleteIcon width={16} height={18} />
            </button>
          </div>

          <div className="flex gap-4">
            <div className="flex items-center text-center gap-[11px] w-[117px]">
              <button onClick={handleDecreaseQuantityClick}>
                <MinusIcon />
              </button>
              <span className="block text-sm h-[26px] border-[#D9D9D9] border rounded w-full text-[#2F2E41] font-normal text-center">
                {quantityInCart}
              </span>
              <button onClick={handleIncreaseQuantityClick}>
                <PlusIcon />
              </button>
            </div>

            <div className="flex flex-col text-end">
              <span className="text-[#999999] text-xs uppercase lg:hidden">SUBTOTAL</span>
              <span>{formatCurrency(quantityInCart * 29.99)}</span>
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-[#999999] h-[1px]" />

      <div className="flex justify-between flex-col-reverse lg:flex-row gap-4">
        <button
          className="uppercase bg-[#009EDD] font-bold text-xs rounded-[4px] p-2"
          onClick={handleCheckout}
        >
          Finalizar pedido
        </button>
        <div className="flex items-center gap-[5px] justify-between">
          <span className="text-[#999999] font-bold text-sm">TOTAL</span>
          <span className="text-2xl text-[#2F2E41] font-bold">
            {formatCurrency(0)}
          </span>
        </div>
      </div>
    </div>
    // <div className="bg-white flex flex-col p-4">
    //   <div className="flex flex-col bg-red-100 gap-2">
    //     <div className="flex flex-col gap-2 justify-center items-center font-bold text-center">
    //       <Image src={movie.image} alt={movie.title} width={200} height={300} />
    //       <p className="text-black">{movie.title}</p>
    //       <p className="text-black">{`${formatCurrency(movie.price)}`}</p>
    //     </div>
    //     <Button
    //       label={quantityInCart}
    //       variant={quantityInCart > 0 ? "success" : "primary"}
    //     />
    //   </div>
    // </div>
  );
};

export default CartContent;
