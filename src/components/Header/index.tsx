import Image from "next/image";
import Link from "next/link";
import CartDetails from "./CartDetails";

const Header = () => {
  return (
    <header className="w-full h-[88px]">
      <nav className="flex items-center justify-between mx-4 lg:mx-[180px] py-6">
        <Link className="font-bold text-xl" href="/">
          WeMovies
        </Link>
        <Link href="/carrinho" className="flex text-end items-center gap-2">
          <CartDetails />
          <Image
            src="assets/cart-icon.svg"
            alt="Carrinho"
            className="cursor-pointer h-[21px]"
            width={24}
            height={21}
          />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
