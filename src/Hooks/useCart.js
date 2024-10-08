import { useContext } from "react";
import { CartContext } from "../context/cart";
import { Cart } from "../components/Cart";

export const useCart = ()=>{
  const  context = useContext(CartContext)

  if(context === undefined){
    throw new Error('useCart must be whitin a CartProvider')
  }

  return (
    context 
  )
}