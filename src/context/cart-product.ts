import { Movie } from "@/types/movie";

export default interface CartProduct extends Movie {
  quantity: number;
}
