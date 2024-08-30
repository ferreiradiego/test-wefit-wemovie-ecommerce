import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  numberOfItems: number;
}

const Header = ({ numberOfItems }: HeaderProps) => {
  return (
    <header className="w-full h-[88px]">
      <nav className="flex items-center justify-between mx-4 lg:mx-[180px] py-6">
        <Link className="font-bold text-xl" href="/">
          WeMovies
        </Link>
        <Link href="/cart" className="flex text-end items-center gap-2">
          <div className="flex flex-col">
            <div className="hidden lg:flex">Meu Carrinho</div>
            <div className="text-[#999999] font-semibold text-xs">
              {numberOfItems} itens
            </div>
          </div>
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
