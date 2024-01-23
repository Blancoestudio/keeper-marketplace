import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	Box,
	Card,
	Container,
	Grid,
	Menu,
	MenuItem,
	Typography,
	CardMedia,
	CardContent,
	Stack,
	Divider,
	IconButton,
	Paper,
	Button,
	CardActions,
	Modal,
	useTheme,
	useMediaQuery,
	Chip,
} from "@mui/material";
import PendingIcon from "@mui/icons-material/Pending";

import AddIcon from "@mui/icons-material/Add";
import { CustomButton } from "src/components";
import CloseIcon from "@mui/icons-material/Close";

import { StoreService } from "src/services/StoreService";
import { Store } from "src/interfaces/Store";
import { ProductService } from "src/services/ProductService";
import { Product } from "src/interfaces/Product";
import { calculateDiscount } from "src/utils/helpers";

const indicators = [
	{
		title: "Haz obtenido",
		data: 8,
		dataName: "visitas a tu perfil",
	},
	{
		title: "Haz aparecido en",
		data: 15,
		dataName: "búsquedas",
	},
	{
		title: "Se han contactado",
		data: 20,
		dataName: "personas contigo",
	},
	{
		title: "Haz aparecido en",
		data: 15,
		dataName: "búsquedas",
	},
];

export const Dashboard = () => {
	const [isViewProductModalOpen, setIsViewProductModalOpen] = useState(false);
	const [isConfirmOpen, setIsConfirmOpen] = useState(false);

	const navigate = useNavigate();

	const handleCreateProduct = () => {
		navigate("/admin/product/create");
	};

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

	const [store, setStore] = useState({} as Store);
	const [products, setProducts] = useState([] as Product[]);

	const [productSelected, setProductSelected] = useState({} as Product);
	useEffect(() => {
		const getStore = async () => {
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
			{/* modal product */}
			<Modal
				open={isViewProductModalOpen}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Stack direction={"row"} justifyContent={"flex-end"} mb={4}>
						<Box>
							<IconButton
								aria-label="close"
								onClick={() => setIsViewProductModalOpen(false)}
							>
								<CloseIcon />
							</IconButton>
						</Box>
					</Stack>

					<Grid
						container
						justifyContent={"center"}
						columnSpacing={5}
						sx={{ maxHeight: 450, overflow: "auto" }}
					>
						<Grid item xs={12} md={5}>
							<Paper elevation={3} sx={{ padding: 3, height: 380 }}>
								Carosel
							</Paper>
						</Grid>
						<Grid item xs={12} md={7}>
							<Typography variant={"caption"} fontWeight={"medium"}>
								Nombre del producto:
							</Typography>
							<Typography variant={"h5"} fontWeight={"bold"} mb={2}>
								{productSelected?.name}
							</Typography>
							<Stack direction={"row"} spacing={5}>
								<Box>
									<Typography variant={"caption"} fontWeight={"medium"}>
										Valor del producto:
									</Typography>
									<Typography variant={"h5"} fontWeight={"bold"} mb={2}>
										{" "}
										${productSelected?.price}
									</Typography>
								</Box>
								<Box>
									<Typography variant={"caption"} fontWeight={"medium"}>
										Descuento:
									</Typography>
									<Typography variant={"h5"} fontWeight={"bold"} mb={2}>
										{" "}
										{productSelected?.discount}%
									</Typography>
								</Box>
								<Box>
									<Typography variant={"caption"} fontWeight={"medium"}>
										Valor con descuento:
									</Typography>
									<Typography variant={"h5"} fontWeight={"bold"} mb={2}>
										{`$${calculateDiscount(
											productSelected?.price,
											productSelected?.discount
										)}`}
									</Typography>
								</Box>
							</Stack>
							<Typography variant={"caption"} fontWeight={"medium"}>
								Rubro:
							</Typography>
							<Stack direction={"row"} mt={1} spacing={1} mb={2}>
								<Chip
									color="primary"
									label="Rubro 1"
									sx={{ fontWeight: "medium" }}
								/>
							</Stack>
							<Typography variant={"caption"} fontWeight={"medium"}>
								Descripción corta:
							</Typography>
							<Typography variant={"body2"} mb={2}>
								{productSelected?.shortDescription}
							</Typography>
							<Typography variant={"caption"} fontWeight={"medium"}>
								Descripción larga:
							</Typography>
							<Typography variant={"body2"} mb={2}>
								{productSelected?.description}
							</Typography>

							<Stack direction={"row"} spacing={2} justifyContent={"center"}>
								<CustomButton
									variant={"outlined"}
									onClick={() => setIsViewProductModalOpen(false)}
								>
									Cerrar
								</CustomButton>
								<CustomButton
									variant={"contained"}
									onClick={() => handleEditProduct(1)}
								>
									Editar producto
								</CustomButton>
							</Stack>
						</Grid>
					</Grid>
				</Box>
			</Modal>

			{/* modal confirm delete */}
			<Modal
				open={isConfirmOpen}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={styleConfirm}>
					<Stack direction={"row"} justifyContent={"flex-end"} mb={2}>
						<Box>
							<IconButton
								aria-label="close"
								onClick={() => setIsConfirmOpen(false)}
							>
								<CloseIcon />
							</IconButton>
						</Box>
					</Stack>

					<Grid
						container
						justifyContent={"center"}
						columnSpacing={5}
						sx={{ maxHeight: 450, overflow: "auto" }}
					>
						<Grid item xs={12}>
							<Typography
								variant={"h5"}
								textAlign={"center"}
								fontWeight={"bold"}
								mb={2}
							>
								¿Eliminar Producto y/o Servicio?
							</Typography>
							<Typography variant={"body1"} mb={4} textAlign={"center"}>
								Recuerda que perderás toda la información cargada y ya no se
								visualizara en tu perfil.
							</Typography>

							<Stack direction={"row"} spacing={2} justifyContent={"center"}>
								<CustomButton
									variant={"outlined"}
									onClick={() => setIsConfirmOpen(false)}
								>
									Cancelar
								</CustomButton>
								<CustomButton
									variant={"contained"}
									onClick={() => setIsConfirmOpen(false)}
								>
									Eliminar producto
								</CustomButton>
							</Stack>
						</Grid>
					</Grid>
				</Box>
			</Modal>

			{/* banner */}
			<Grid container direction={"column"} mb={5}>
				<Grid item xs={12}>
					<Box
						sx={{
							height: 300,
							borderBottomLeftRadius: "50px",
							borderBottomRightRadius: "50px",
							py: 10,
							px: 5,
							backgroundColor: "primary.main",
							backgroundImage: "url('src/assets/images/bg-banner.png')",
							backgroundPosition: "center",
							backgroundSize: "cover",
							color: "#ffffff",
						}}
					></Box>
				</Grid>

				<Grid container sx={{ marginTop: -20 }}>
					<Grid item xs={1}></Grid>
					<Grid item xs={3}>
						<Card sx={{ padding: 1 }}>
							<CardMedia
								sx={{ height: 280, borderRadius: 2, overflow: "hidden" }}
								image={store.logo}
								title="imagen-producto"
							/>
							<CardContent>
								<Typography variant="h6" fontWeight={"bold"}>
									{store.name}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Grid>

			{/* indicadores */}
			<Box sx={{ mb: 4 }}>
				<Typography variant="h5" component={"h2"} fontWeight={"bold"}>
					Indicadores:
				</Typography>
			</Box>

			<Grid
				container
				justifyContent={"space-between"}
				alignItems={"center"}
				spacing={2}
				mb={10}
			>
				{indicators.map((item, i) => (
					<Grid item xs={12} sm={6} md={4} lg={3} key={i}>
						<Paper
							elevation={3}
							sx={{ paddingX: 2, paddingY: 6, borderRadius: 2 }}
						>
							<Typography variant="h6" textAlign={"center"}>
								{item.title}
							</Typography>
							<Typography variant="h2" textAlign={"center"} fontWeight={"bold"}>
								{item.data}
							</Typography>
							<Typography variant="h6" textAlign={"center"}>
								{item.dataName}
							</Typography>
						</Paper>
					</Grid>
				))}
			</Grid>

			<Stack direction={"row"} justifyContent={"space-between"} sx={{ mb: 4 }}>
				<Typography variant="h5" component={"h2"} fontWeight={"bold"}>
					Tus productos:
				</Typography>
				<Button
					variant={"text"}
					endIcon={<AddIcon />}
					onClick={handleCreateProduct}
				>
					Crear producto
				</Button>
			</Stack>

			<Grid container spacing={2} mb={10}>
				{products.map((product, index) => (
					<Grid item xs={12} sm={6} md={4} lg={3} key={index}>
						<Card sx={{ padding: 1.25, borderRadius: 2, paddingBottom: 0 }}>
							<CardMedia
								sx={{ height: 220, borderRadius: 2, overflow: "hidden" }}
								image={
									Array.isArray(product.images)
										? product.images[0]
										: product.images
								}
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
