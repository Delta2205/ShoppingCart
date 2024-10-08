import { createContext, useState } from "react";


export const CartContext = createContext()
export function CartProvider ({children}){
  const [cart ,setCart] = useState([])
  const addToCart = product =>{
    const productInCart = cart.findIndex(item=>item.id === product.id)

    if(productInCart>=0){
      const newCart = structuredClone(cart)
      newCart[productInCart].quantity +=1
      setCart(newCart)
    }

    // si no esta el producto en el carrito 
    setCart(preveState=>([
      ... preveState,
      {
        ... product,
        quantity: 1
      }
    ]))
  }

  const removeFromCart = product => {
    setCart(preveState => preveState.filter(item => item.id !== product.id))
  }

  const clearCart =()=>{
    setCart([])
  }

  return(
    <CartContext.Provider value={
    {
      cart,
      addToCart,
      clearCart,
      removeFromCart
    }
    }>{children}</CartContext.Provider>
  )
}