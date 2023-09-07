import { Grid } from '@mui/joy';
import { ReactNode } from 'react';
import ProductCard from './productCard';
const getProducts = async () => {
	const API_URL = '';
	const response = await fetch(API_URL);
	const data = await response.json();
};

const ProductDisplay = () => {
	return (
		<Grid container spacing={2} sx={{ margin: '2rem' }}>
			<ProductCard />
		</Grid>
	);
};

export default ProductDisplay;
