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

	const style = {
		width: fullScreen ? "90%" : "70%", // Ancho adaptativo
		top: "50%",
		left: "50%",
		position: "absolute",
		transform: "translate(-50%, -50%)",
		bgcolor: "background.paper",
		boxShadow: 24,
		padding: 6,
		pb: 8,
		borderRadius: 8,
	};

	const styleConfirm = {
		width: fullScreen ? "90%" : "35%", // Ancho adaptativo
		top: "50%",
		left: "50%",
		position: "absolute",
		transform: "translate(-50%, -50%)",
		bgcolor: "background.paper",
		boxShadow: 24,
		padding: 6,
		pb: 8,
		borderRadius: 8,
	};

	const handleViewProduct = (index: number) => {
		setProductSelected(products[index]);
		setAnchorEl(null);
		setIsViewProductModalOpen(true);
	};

	const handleEditProduct = (index: number) => {
		navigate(`/admin/product/create/${products[index]._id}`);
	};

	return (
		<Container maxWidth={"lg"}>
			
			<MainBanner logo={store.logo} name={store.name} />
			<Indicators />
			<ProductList isLoading={isLoading} products={ products } />

			<Grid container spacing={2} mb={10}>
				{products.map((product, index) => (
					<Grid item xs={12} sm={6} md={4} lg={3} key={index}>
						<Card sx={{ padding: 1.25, borderRadius: 2, paddingBottom: 0 }}>
							<CardMedia
								sx={{ height: 220, borderRadius: 2, overflow: "hidden" }}
								image={Array.isArray(product.images) ? product.images[0] : product.images}
								title="imagen-producto"
							>
								<Stack direction={"row"} justifyContent={"space-between"}>
									<Typography
										sx={{
											backgroundColor: "#FD8900",
											color: "#ffffff",
											paddingX: 0.75,
											paddingY: 0.25,
											borderBottomRightRadius: 8,
											fontWeight: "bold",
										}}
									>
										{`-${product.discount}%`}
									</Typography>
									<Box>
										<IconButton
											size="small"
											sx={{ paddingY: 0.35, paddingX: 0.35, color: "#ffffff" }}
											id={"actions-product-button"}
											// aria-controls={open ? i : undefined}
											aria-haspopup="true"
											aria-expanded={open ? "true" : undefined}
											onClick={handleClick}
										>
											<PendingIcon />
										</IconButton>
										<Menu
											id={"actions-product-button"}
											anchorEl={anchorEl}
											open={open}
											onClose={handleClose}
											elevation={1}
											MenuListProps={{
												"aria-labelledby": "basic-button",
											}}
										>
											<MenuItem onClick={() => handleViewProduct(index)}>
												Ver
											</MenuItem>
											<MenuItem onClick={() => handleEditProduct(index)}>
												Editar
											</MenuItem>
											<MenuItem
												onClick={() => {
													setAnchorEl(null);
													setIsConfirmOpen(true);
												}}
											>
												Eliminar
											</MenuItem>
										</Menu>
									</Box>
								</Stack>
							</CardMedia>
							<CardContent sx={{ paddingX: 0, paddingBottom: 0 }}>
								<Typography gutterBottom variant="h5" fontWeight={"medium"}>
									{product.name}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									{product.shortDescription}
								</Typography>
								<Divider sx={{ my: 1 }} />
								<Stack direction={"row"} alignItems={"baseline"} spacing={1}>
									<Typography
										variant="h6"
										color={"primary"}
										fontWeight={"medium"}
									>
										{`$${calculateDiscount(product.price, product.discount)}`}
									</Typography>
									<Typography
										variant="body2"
										color={"#717171"}
										fontWeight={"medium"}
										sx={{ textDecoration: "line-through" }}
									>
										{product.price}
									</Typography>
								</Stack>
								<Divider sx={{ mt: 1 }} />
							</CardContent>
							<CardActions
								sx={{ display: "flex" }}
								onClick={() => handleViewProduct(index)}
							>
								<Button size="small">Ver producto</Button>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};
