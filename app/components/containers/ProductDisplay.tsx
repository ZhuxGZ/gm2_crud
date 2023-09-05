import { Grid } from '@mui/joy';
import { ReactNode } from 'react';
import ProductCard from './productCard';

const ProductDisplay = () => {
	return (
		<Grid container spacing={2} sx={{ margin: '2rem' }}>
			<ProductCard />
		</Grid>
	);
};

export default ProductDisplay;
