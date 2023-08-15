import Dashboard from "./components/container/Dashboard";
import ProductCard from "./components/container/Card";
import Layout from "./components/layout/Layout";

const testprod = {
	name: "Test",
	price: 2500,
};

const App = () => {
	return (
		<Layout>
			<Dashboard>
				<ProductCard name={testprod.name} price={testprod.price} />
			</Dashboard>
		</Layout>
	);
};

export default App;
