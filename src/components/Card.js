import React from 'react';
import { Link } from 'react-router-dom';
import CardContext from '../context/storeProducts';

const {useContext} = React;

const Card = (props) => {
  const {product} = props;
  const { cardProducts, updatecardProducts } = useContext(CardContext);

  const removeCartIcon = "➖"
  const addCardIcon = "➕"

  const labelButton =  cardProducts.includes(product) ? `Quitar ${removeCartIcon}` : `Agregar ${addCardIcon}`

  const addCard = (e) =>{
    e.preventDefault();
    updatecardProducts(product);
  }

  return(
    <Link to={`/producto/${product.id}`} className="card">
      <div className="card-image">
        <img src={product.image} alt={product.title}></img>
      </div>
      <div className="card-content">
        <div className="card-title">{product.title}</div>
        <div className="card-category">{product.category}</div>
        <div className="card-price">
          <p>S/ {product.price}</p>

          <button className="card-button" onClick={addCard}>
            <div className="product-favorite">{labelButton}</div>
          </button> 
        </div>

      </div>
    </Link>
  )
}

export default Card