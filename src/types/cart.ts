import { Movie } from "./movie";

export type CartProduct = Movie & {
  quantity: number;
};
