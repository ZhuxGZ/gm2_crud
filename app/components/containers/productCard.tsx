import { Settings } from '@mui/icons-material';
import { Button, Card, Dropdown, Menu, MenuButton, MenuItem } from '@mui/joy';
import Image from 'next/image';
import DeleteProdModal from './Modals/DeleteProdModal';
import EditProdModal from './Modals/EditProdModal';

const ProductCard = ({ name, price, id }: { name: string; price: string; id: string }) => {
	return (
		<Card variant="solid">
			<div className="prodImg">
				<Image
					src="https://http2.mlstatic.com/D_NQ_NP_2X_648428-MLA46516517286_062021-F.webp"
					width={300}
					height={250}
					alt="Mackbook photo"
				/>
			</div>
			<div className="cardBottom flex mr-2 mt-4 mb-2 items-center justify-between">
				<div className="prodInfo">
					<h3 className="mr-0 title font-bold text-lg w-60">{`${name}`}</h3>
					<p className="price text-lg">{`$${price}`}</p>
				</div>
				<Dropdown>
					<MenuButton
						variant="plain"
						sx={{ marginLeft: 'auto', padding: 1 }}
						color="neutral"
					>
						<Settings sx={{ fill: '#FF8645' }} />
					</MenuButton>
					<Menu keepMounted sx={{ padding: 0 }}>
						<MenuItem sx={{ padding: '1px 1px' }}>
							<DeleteProdModal id={id} />
						</MenuItem>
						<MenuItem sx={{ padding: '1px 1px' }}>
							<EditProdModal id={id} />
						</MenuItem>
					</Menu>
				</Dropdown>
			</div>
		</Card>
	);
};

export default ProductCard;
