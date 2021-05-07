import React from 'react';
import { getProductSingle } from '../services/Api';
import { useParams } from "react-router";

const { useState, useEffect } = React;

function ProductSingle () {
	const [single, setSingle] = useState([]);

	const {id} = useParams();

	const fetchSingle = async () => {
    try{
      // setLoading(true)
      const data = await getProductSingle(id);
      setSingle(data)
      // setLoading(false)
    }catch(err){}
  }

	useEffect(()=>{
    fetchSingle()
  },[])
	
	return (
		<div>
			<h1>Welcome to the world of Geeks!</h1>
			<h1>{id}</h1>
			<h1>{single.category}</h1>
		</div>
	)
}

export default ProductSingle;