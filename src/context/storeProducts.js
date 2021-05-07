import React from 'react'

const CartContext = React.createContext({
  cartProducts: [],
  updateCartProducts: (id) => null
})

export const CartProvider = CartContext.Provider;

export default CartContext