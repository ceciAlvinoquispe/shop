import React from 'react';
import { Link } from 'react-router-dom';
import CardContext from '../context/storeProducts'
import Logo from '../images/icon-logo.svg';
import IconShopping from '../images/icon-shopping.svg';
import IconClose from '../images/icon-close.svg';

const {useContext, useState} = React;

const Navbar = () => {
  
  const { cardProducts } = useContext(CardContext);

	const [isVisible, setState] = useState(false);

  return (
		<nav>
			<div className="container">
				<div className="menu">
          <Link to="/" className="menu-logo">
						<img src={Logo} alt="logo de tienda"/>
					</Link>

					<div className="menu-breadcrumb">
						<Link to="/">Productos</Link>
						
						<Link to="/">Detalle</Link>
					</div>


					<div className="menu-shop cart-shop"
						onMouseEnter={() => setState(true)}>
						<span>Ver carrito</span>
						<div className="menu-shop-icon">
              <img src={IconShopping} alt="icono de compra"></img>
							<span className="menu-shop-counter">{ cardProducts.length}</span>
						</div>
					</div>

				</div>
				<div className={`shopping ${ isVisible ? "show" : "hidden"}`}>
					<h4>Mi lista de compras:</h4>
					<img className="icon-close"
						src={IconClose} 
						alt="icono cerrar"
						onClick={() => setState(false)}
						/>
					{cardProducts.length === 0 ? (
						<p className="list-else">Aún no seleccionaste algun producto</p>
					) : (
						<ul className="list">
							{cardProducts.map((item, idx)=>{
								return(
								<li key={idx} className="list-item">
									<p>{item.title}</p>
									<p>{item.price}</p>
								</li>
								)
							})}
						</ul>
					)}
					
					<div className="total">
						<span>Total:</span>
						{cardProducts.reduce((obj, data) => {
							obj += data.price; return obj;
						}, 0)}
					</div>
				</div>
			</div>
		</nav>
  );
};


export default Navbar;
