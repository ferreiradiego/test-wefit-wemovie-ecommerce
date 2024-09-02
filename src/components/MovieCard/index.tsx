import { Movie } from "@/types/movie";
import Image from "next/image";
import { formatCurrency } from "@/utils/price";
import Button from "../Button";

interface MovieCardProps {
  movie: Movie;
  quantityInCart?: number;
}

const MovieCard = ({ movie, quantityInCart = 1 }: MovieCardProps) => {
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
          variant={quantityInCart > 0 ? "success" : "primary"}
        />
      </div>
    </div>
  );
};

export default MovieCard;
