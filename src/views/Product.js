import React from 'react';
import { getProductSingle } from '../services/Api';
import { useParams } from "react-router";
import CardContext from '../context/storeProducts';
import { Link } from 'react-router-dom';
import IconArrowLeft from '../images/icon-arrow-left.svg';
import IconPlus from '../images/icon-plus.svg';
import IconMinus from '../images/icon-minus.svg';

const { useState, useEffect, useContext } = React;

function ProductSingle () {
	const { cardProducts, updatecardProducts } = useContext(CardContext);
	const [single, setSingle] = useState([]);
	const [addProduct, setAddProduct] = useState(false);
	const [loading, setLoading] = useState(true);

	const { id } = useParams();
	
	const fetchSingle = async (id) => {
    try{
      setLoading(true)
      const data = await getProductSingle(id);

      setSingle(data)
      setLoading(false)
    } catch(err) {}
  }
	
	useEffect(()=>{
    fetchSingle(id);
  },[id])

  const addCard = (e) =>{
    e.preventDefault();
    updatecardProducts(single);

		cardProducts.includes(single) ? setAddProduct(false) : setAddProduct(true)

  }
	
	return (
		<section>
			<div className="container">
				<Link to="/" className="breadcrumb">
					<img src={IconArrowLeft} alt="icono de compra"></img>
					Volver
				</Link>

				{loading ? (
					<div>Cargando Producto ... </div>
				) : (
					<div className="detail">
						<div className="detail-image">
							<img src={single.image}
									alt={single.title}
									className="product-img"/>
						</div>
								
						<div className="detail-content">
							<h2 className="detail-title">{single.title}</h2>

							<div className="detail-description">
								<p>
									<b>	Descripción:</b>
								</p>
								<p>{single.description}</p>
							</div>
							<br/>
							<div className="detail-description">
								<p>
									<b>Categoría:</b>
								</p>
								<p>
									{single.category}
								</p>
							</div>
							<br/>

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
				)}
			</div>
		</section>
	)
}

export default ProductSingle;