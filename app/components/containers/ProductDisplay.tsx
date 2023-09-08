'use client';
import { Grid } from '@mui/joy';
import { use, useEffect, useState } from 'react';
import ProductCard from './productCard';
import { APIResponse } from '@/app/types/APIResponse';

const API_URL = 'https://64fb193acb9c00518f7aa434.mockapi.io/api/v1/id';

const ProductDisplay = () => {
	const [products, setProducts] = useState<any>([]);
	useEffect(() => {
		const getData = async () => {
			const response = await fetch(API_URL);
			const data = (await response.json()) as APIResponse;
			setProducts(data);
			console.log('hola');
		};
		getData();
	}, []);

	const productList = products.map((product: APIResponse) => {
		return (
			<ProductCard
				key={product.id}
				id={product.id}
				name={product.name}
				price={product.price}
			/>
		);
	});

	return (
		<Grid container columnGap={2} rowGap={2} sx={{ margin: '2rem' }}>
			{productList}
		</Grid>
	);
};

export default ProductDisplay;
