"use client";

import { Movie } from "@/types/movie";
import Image from "next/image";
import { formatCurrency } from "@/utils/price";
import Button from "../Button";
import {
  CardContainer,
  CardContent,
  CardDetails,
  Price,
  Title,
} from "./styles";
import useCart from "@/hooks/useCart";
import { ButtonContent, ButtonText } from "../Button/styles";
import AddCartIcon from "../icons/AddCartIcon";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const { addProductToCart, products } = useCart();

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
          <Image
            src={movie.image}
            alt={movie.title}
            width={147}
            height={188}
            priority
          />
          <Title>{movie.title}</Title>
          <Price>{formatCurrency(movie.price)}</Price>
        </CardDetails>

        <Button
          onClick={addProductToCartClick}
          state={isMovieAlreadyOnCart ? "selected" : "empty"}
        >
          <ButtonContent>
            <AddCartIcon />
            <span>{quantityInCart}</span>
          </ButtonContent>
          <ButtonText>ADICIONAR AO CARRINHO</ButtonText>
        </Button>
      </CardContent>
    </CardContainer>
  );
};

export default MovieCard;
