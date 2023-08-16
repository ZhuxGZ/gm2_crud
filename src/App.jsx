import Dashboard from "./components/container/Dashboard";
import ProductCard from "./components/container/Card";
import Layout from "./components/layout/Layout";

const testprod = [
	{
		id: 1,
		name: "Test",
		price: 2500,
		description: "soy re buen producto",
		img: "https://celularessf.com/wp-content/uploads/2022/10/IPHONE-14-pro-max-colores-1.png",
	},
	{
		id: 2,
		name: "Test2",
		price: 4500,
		description: "soy re buen producto",
		img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP858/mbp16-gray_2x.png",
	},
];

const printCards = testprod.map((prod) => {
	return (
		<ProductCard
			key={prod.id}
			name={prod.name}
			price={prod.price}
			img={prod.img}
			description={prod.description}
		/>
	);
});

const App = () => {
	return (
		<Layout>
			<Dashboard>{printCards}</Dashboard>
		</Layout>
	);
};

export default App;
