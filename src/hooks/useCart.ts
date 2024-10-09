import { CartContext } from "@/context/cart";
import { useContext } from "react";

const useCart = () => useContext(CartContext);

export default useCart;
