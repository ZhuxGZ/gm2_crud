import { Add } from '@mui/icons-material';
import { Button, Divider } from '@mui/joy';
import ProductDisplay from '../components/containers/ProductDisplay';
import AddProdModal from '../components/containers/Modals/AddProdModal';

const Dashboard = () => {
	return (
		<>
			<section id="header" className="m-8 mb-4 flex items-center">
				<h1 className="font-bold text-xl">Dashboard</h1>
				<div className="ml-auto">
					<AddProdModal />
				</div>
			</section>
			<Divider sx={{ marginLeft: '1.5rem', marginRight: '1.5rem' }} />
			<ProductDisplay />
		</>
	);
};

export default Dashboard;
