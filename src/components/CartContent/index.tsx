"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import { formatCurrency } from "@/utils/price";
import { CartContext } from "@/context/cart";
import CartContentItem from "./CartContentItem";
import { checkout } from "@/actions/checkout";

interface CartContentProps {}

const CartContent = ({}: CartContentProps) => {
  const router = useRouter();
  const { products, totalPrice, clearCart } = useContext(CartContext);

  const handleCheckout = async () => {
    const success = await checkout(products);

    if (success) {
      clearCart();
      router.push("/compra-realizada");
    }
  };

  return (
    <div className="bg-white flex flex-col p-6 gap-6">
      <div className="text-[#999999] font-bold text-sm lg:flex justify-between hidden">
        <span>PRODUTO</span>
        <span>QTD</span>
        <span>SUBTOTAL</span>
      </div>

      {products.map((product) => (
        <CartContentItem key={product.id} cartProduct={product} />
      ))}

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
            {formatCurrency(totalPrice)}
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
    //       variant={quantity> 0 ? "success" : "primary"}
    //     />
    //   </div>
    // </div>
  );
};

export default CartContent;
