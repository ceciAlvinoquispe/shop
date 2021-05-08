import React from 'react';
import { getProductSingle } from '../services/Api';
import { useParams } from "react-router";

const { useState, useEffect } = React;

function ProductSingle (props) {
	const [single, setSingle] = useState([]);
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
    fetchSingle(id)
  },[id])
	
	return (
		<div>
			<h1>Welcome to the world of Geeks!</h1>
			{loading ? (
        <div>Cargando Productos ... </div>
			) : (
				<h1>{single.category}</h1>
			)}
		</div>
	)
}

export default ProductSingle;