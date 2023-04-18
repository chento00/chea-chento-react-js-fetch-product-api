import CardProduct from './utils/CardProduct'
import React, { useState, useEffect } from 'react';

export default function Product() {
	const [data, setData] = useState([]);

	useEffect(() => {
	  fetch('https://api.escuelajs.co/api/v1/products')
		.then(response => response.json())
		.then(data => {
		  setData(data);
		  console.log(data);
		});
	}, []);
	
	return (
		<div className='container-fluid m-auto grid grid-cols-4 p-10'>
			{
				data.map((item,index) => (
					<CardProduct index={index} name={item.title} des={item.description} price={item.price} img={item.images[0] } />					
				))
				
			}
		</div>
	)
}
