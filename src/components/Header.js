import React from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/storeProducts'


const {useContext} = React;

const Header = () => {
  
  const { cartProducts } = useContext(CartContext);
  console.log('header ---', cartProducts);

  return (
    <div className="App">
      <div className="cart-shop">
        <div>Productos 🛒 { cartProducts.length}</div>
        <Link to="/">Home</Link>
        <div className="cart-list">
          {cartProducts.map((item, idx)=>{
            return(
              <p key={idx}>{item}</p>
            )
          })}
        </div>
      </div>
    </div>
  );
};


export default Header;
