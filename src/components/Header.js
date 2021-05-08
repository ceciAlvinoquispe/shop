import React from 'react';
import { Link } from 'react-router-dom';
import CardContext from '../context/storeProducts'
import Logo from '../images/icon-logo.svg';
import IconShopping from '../images/icon-shopping.svg';
import IconClose from '../images/icon-close.svg';

const {useContext, useState} = React;

const Header = () => {
  
  const { cardProducts } = useContext(CardContext);

	const [isVisible, setState] = useState(false);
	

  return (
		<header>
			<div className="name-page">La Tiendita</div>
			<hr/>
			<div className="container">
				<div className="menu">
          <Link to="/" className="logo">
						<img src={Logo} alt="logo de tienda"/>
					</Link>

					<div className="breadcrumb">
						<Link to="/">Productos</Link>
					</div>

					<div className="shopping" onClick={() => !isVisible ?  setState(true) : setState(false)}>
						<img src={IconShopping} alt="icono de compra"></img>
						<span className="shopping-counter">{ cardProducts.length}</span>
					</div>
				</div>

				<div className={`shopping-detail ${ isVisible ? "show" : "hidden"}`}>
					<h4 className="shopping-detail-title">Mi lista de compras:</h4>
					<img className="icon-close" src={IconClose} alt="icono cerrar" onClick={() => setState(false)}/>
					{cardProducts.length === 0 ? (
						<p className="list-else">Aún no seleccionaste algun producto</p>
					) : (
						<ul className="list">
							{cardProducts.map((item, idx)=>{
								return(
									<li key={idx} className="list-item">
										<p>{item.title}</p>
										<p>s/ {item.price}</p>
									</li>
								)
							})}
						</ul>
					)}
					
					<div className="total">
						<span>Total:</span>
						s/ {cardProducts.reduce((obj, data) => {
							obj += data.price;
							return obj;
						}, 0)}
					</div>
				</div>
			</div>
		</header>
  );
};

export default Header;
