import React from 'react'

const CartContext = React.createContext({
  cartProducts: [],
  updateCartProducts: (id) => null
})

console.log('contex', CartContext);

export const CartProvider = CartContext.Provider;

export default CartContext