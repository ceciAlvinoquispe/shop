import React from 'react';
import { getListProducts } from '../services/Api';
import { Link } from 'react-router-dom';

const { useState, useEffect } = React;

function Home (){
	const [products, setProducts] = useState([]);

	const fetchProducts = async () =>{
    try{
      // setLoading(true)
      const data = await getListProducts();
      setProducts(data)
      // setLoading(false)
    }catch(err){}
  }

	useEffect(()=>{
    fetchProducts()
  },[])

	return (
		<div>
			<h1>Welcome to the world of Geeks!</h1>
			<div className="products-grid">
          {products.map((product, idx)=>{
            return(
							<Link key={product.id} to={`/producto/${product.id}`}>{product.id}</Link>
            )
          })}
       </div>
		</div>
	)
}
  
export default Home;