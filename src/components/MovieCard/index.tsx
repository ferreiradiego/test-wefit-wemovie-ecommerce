"use client";

import { Movie } from "@/types/movie";
import Image from "next/image";
import { formatCurrency } from "@/utils/price";
import Button from "../Button";
import { useContext } from "react";
import { CartContext } from "@/context/cart";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const { addProductToCart } = useContext(CartContext);
  const { products } = useContext(CartContext);

  const isMovieAlreadyOnCart = products.some(
    (cartProduct) => cartProduct.id === movie.id
  );
  const quantityInCart: number =
    products.find((cartProduct) => cartProduct.id === movie.id)?.quantity || 0;

  const addProductToCartClick = () => {
    addProductToCart({
      product: {
        ...movie,
        quantity: 1,
      },
    });
  };

  return (
    <div className="bg-white flex flex-col p-4 rounded">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 justify-center items-center font-bold text-center">
          <Image src={movie.image} alt={movie.title} width={200} height={300} />
          <p className="text-[#333333]">{movie.title}</p>
          <p className="text-[#2F2E41]">{formatCurrency(movie.price)}</p>
        </div>
        <Button
          text="adicionar ao carrinho"
          label={quantityInCart}
          variant={isMovieAlreadyOnCart ? "success" : "primary"}
          onClick={addProductToCartClick}
        />
      </div>
    </div>
  );
};

export default MovieCard;
