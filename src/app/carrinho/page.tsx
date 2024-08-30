import CartContent from "@/components/CartContent";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  const quantityInCart: number = 1;

  if (quantityInCart == 0) {
    return (
      <div className="bg-white rounded flex flex-col p-16 gap-6 items-center">
        <h1 className="text-xl text-center font-bold text-[#2F2E41] tracking-normal leading-none">
          Parece que não há nada por aqui :(
        </h1>
        <div className="max-w-screen-lg mx-auto">
          <Image
            src="/assets/empty-cart.svg"
            alt="Carrinho vazio"
            width={178.63}
            height={264}
          />
        </div>
        <Link
          href={"/"}
          className="bg-[#009EDD] font-bold text-xs rounded-[4px] p-2 h-10 flex items-center justify-center w-[157px]"
        >
          Recarregar página
        </Link>
      </div>
    );
  }

  return <CartContent />;
};

export default Cart;
