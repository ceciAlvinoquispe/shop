import React from 'react'

const CardContext = React.createContext({
  cardProducts: [],
  updatecardProducts: (id) => null
})

export const CardProvider = CardContext.Provider;

export default CardContext