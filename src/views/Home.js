import React from 'react';
import { getListProducts } from '../services/Api';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

import {CartProvider} from '../context/storeProducts'

const { useState, useEffect } = React;

function Home (){
	const [products, setProducts] = useState([]);
  const [cartProduct, setCartProduct] = useState([])

	const fetchProducts = async () =>{
    try{
      const data = await getListProducts();
      setProducts(data)
    }catch(err){}
  }

	useEffect(()=>{
    fetchProducts()
  },[])

	const updateCartProducts = (name) => {
    const update = [...cartProduct];
    const isCartProduct = cartProduct.indexOf(name);

    if(isCartProduct >=0){
      update.splice(isCartProduct, 1)
    }else{
      update.push(name);
    }
		console.log(update);
    setCartProduct(update);
  }

	return (
		<CartProvider value={{
      cartProducts: cartProduct,
      updateCartProducts: updateCartProducts
    }}>
			<h1>Welcome to the world of Geeks!</h1>
			<section>
				<div className="container">
					<div className="row">
						{products.map((product, idx)=>{
							return(
								<div key={product.id} className="col--3">
									<Link to={`/producto/${product.id}`}>
										<Card product={product} />
									</Link>
								</div>
							)
						})}
					</div>
				</div>
			</section>
    </CartProvider >
	)
}
  
export default Home;