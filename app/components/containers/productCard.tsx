import { Settings } from '@mui/icons-material';
import { Button, Card } from '@mui/joy';

const ProductCard = () => {
	return (
		<Card variant="solid" sx={{ height: '20em' }}>
			<div className="prodInfo">
				<img
					src="https://http2.mlstatic.com/D_NQ_NP_2X_648428-MLA46516517286_062021-F.webp"
					alt=""
					width="300px"
				/>
				<h3 className="title font-bold text-xl mt-7">Mackbook</h3>
			</div>
			<div className="cardBottom flex items-center mr-2">
				<p className="price text-lg">$2500</p>
				<Button sx={{ marginLeft: 'auto' }} color="neutral">
					<Settings />
				</Button>
			</div>
		</Card>
	);
};

export default ProductCard;
