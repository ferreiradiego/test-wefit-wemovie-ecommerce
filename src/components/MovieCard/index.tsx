"use client";

import { Movie } from "@/types/movie";
import Image from "next/image";
import { formatCurrency } from "@/utils/price";
import Button from "../Button";
import { useContext } from "react";
import { CartContext } from "@/context/cart";
import {
  CardContainer,
  CardContent,
  CardDetails,
  Price,
  Title,
} from "./styles";

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
    <CardContainer>
      <CardContent>
        <CardDetails>
          <Image src={movie.image} alt={movie.title} width={200} height={300} />
          <Title>{movie.title}</Title>
          <Price>{formatCurrency(movie.price)}</Price>
        </CardDetails>
        <Button
          text="adicionar ao carrinho"
          label={quantityInCart}
          variant={isMovieAlreadyOnCart ? "success" : "primary"}
          onClick={addProductToCartClick}
        />
      </CardContent>
    </CardContainer>
  );
};

export default MovieCard;
