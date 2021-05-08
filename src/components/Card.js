import React from 'react';
import { Link } from 'react-router-dom';
import CardContext from '../context/storeProducts';
import IconPlus from '../images/icon-plus.svg';
import IconMinus from '../images/icon-minus.svg';

const {useContext, useState} = React;

const Card = (props) => {
	const [addProduct, setAddProduct] = useState(false);
  const {product} = props;
  const { cardProducts, updatecardProducts } = useContext(CardContext);

  const addCard = (e) =>{
    e.preventDefault();
    updatecardProducts(product);
		console.log('card -----', cardProducts);
    cardProducts.includes(product) ? setAddProduct(false) : setAddProduct(true)
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

          {addProduct ? (
            <button className="detail-button" onClick={addCard}>
              Quitar
              <img src={IconMinus} alt="icono de compra"/>
            </button>
            ) : (
              <button className="detail-button" onClick={addCard}>
                Agregar
                <img src={IconPlus} alt="icono de compra"/>
              </button>
            )}
        </div>

      </div>
    </Link>
  )
}

export default Card