import { useEffect, useState } from "react";
import { Container } from "@mui/material";

import { StoreService } from "src/services/StoreService";
import { Store } from "src/interfaces/Store";
import { ProductService } from "src/services/ProductService";
import { Product } from "src/interfaces/Product";
import { Indicators } from "src/admin/components/SideMenu/Indicators";
import { ProductList } from "./ProductList";

import { MainBanner } from "./MainBanner";

export const Dashboard = () => {
	const [store, setStore] = useState({} as Store);
	const [products, setProducts] = useState([] as Product[]);
  const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const getStore = async () => {
      setIsLoading(true);
			const storeResponse = await StoreService.getStore();
			const store: Store = storeResponse.data;
			setStore(store);
		};
		const getProductsByStore = async () => {
			const productsResponse = await ProductService.getProductsByStore();
			const products: Product[] = productsResponse.data;
			setProducts(products);
		};
		getStore();
		getProductsByStore();
    setIsLoading(false);
	}, []);

	return (
		<Container maxWidth={"lg"}>
			
			<MainBanner logo={store.logo} name={store.name} />
			<Indicators />
			<ProductList isLoading={isLoading} products={ products } />

		</Container>
	);
};
