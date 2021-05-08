import React from 'react';
import { getListProducts } from '../services/Api';
import Card from '../components/Card';

const { useState, useEffect } = React;

function Home (){
	const [products, setProducts] = useState([]);

	const fetchProducts = async () =>{
    try{
      const data = await getListProducts();
      setProducts(data)
    }catch(err){}
  }

	useEffect(()=>{
    fetchProducts()
  },[])

	return (
		<div>
			<section>
				<div className="container">
					<div className="row">
					<div className="col--12">
						<h1>Lista de productos</h1>
					</div>
						{products.map((product, idx)=>{
							return(
								<div key={product.id} className="col--3">
									<Card product={product} />
								</div>
							)
						})}
					</div>
				</div>
			</section>
    </div>
	)
}
  
export default Home;