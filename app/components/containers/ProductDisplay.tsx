import { Grid } from '@mui/joy';
import { ReactNode } from 'react';

const ProductDisplay = ({ children }: { children: ReactNode }) => {
	return (
		<Grid container spacing={2}>
			{children}
		</Grid>
	);
};

export default ProductDisplay;
