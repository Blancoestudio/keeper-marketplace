import { ChangeEvent, useEffect, useState } from "react";

import FileUploadIcon from "@mui/icons-material/FileUpload";
import {
	Box,
	Chip,
	Container,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	Theme,
	Typography,
	useTheme,
	styled,
	InputBase,
} from "@mui/material";
import { CustomButton, CustomTextField } from "src/components";
import { useLocation, useNavigate } from "react-router-dom";
import { ProductService } from "src/services/ProductService";
import { Product } from "src/interfaces/Product";

const CustoInputLabel = styled(InputLabel)(() => ({
	fontSize: ".9em",
	color: "#727D91",
	transform: "translate(0, 0) scale(1)",
	"&.Mui-focused": {
		color: "#727D91",
	},
}));

const CustomInputBase = styled(InputBase)(() => ({
	position: "relative",
	fontSize: 16,
	fontFamily: "Roboto",
	backgroundColor: "#F8F8FD",
	borderRadius: 5,
	marginTop: "1.75em",
	padding: "6px 10px",
	border: "1px solid #EAEAEA",
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

const names = ["Deporte", "Calzado", "Vestuario"];

function getStyles(name: string, cstegory: readonly string[], theme: Theme) {
	return {
		fontWeight:
			cstegory.indexOf(name) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	};
}

export const EditProductPage = () => {
	const theme = useTheme();
	const [product, setProduct] = useState({} as Product);
	const [name, setName] = useState("");
	const [shortDescription, setShortDescription] = useState("");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState<string[]>([]);
	const [price, setPrice] = useState("");
	const [discount, setDiscount] = useState("");
	const location = useLocation();

	const navigate = useNavigate();

	const handleName = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};
	const handleShortDescription = (e: ChangeEvent<HTMLInputElement>) => {
		setShortDescription(e.target.value);
	};
	const handleDescription = (e: ChangeEvent<HTMLInputElement>) => {
		setDescription(e.target.value);
	};
	const handleChange = (event: SelectChangeEvent<typeof category>) => {
		const {
			target: { value },
		} = event;
		setCategory(typeof value === "string" ? value.split(",") : value);
	};
	const handlePrice = (e: ChangeEvent<HTMLInputElement>) => {
		setPrice(e.target.value);
	};
	const handleDiscount = (e: ChangeEvent<HTMLInputElement>) => {
		setDiscount(e.target.value);
	};

	const handleSaveProduct = () => {
		navigate("/admin/dashboard");
	};

	useEffect(() => {
		const path = location.pathname.split("/");
		const product = async () => {
			const p = await ProductService.getProductById(path[path.length - 1]);
			setProduct(p.data);
		};
		product();
	}, [location]);

	return (
		<Container maxWidth="lg" sx={{ py: 3 }}>
			<Grid
				container
				direction={"column"}
				alignItems={"center"}
				justifyContent={"center"}
				sx={{ py: 5 }}
			>
				<Grid item xs={12} mb={5}>
					<Typography variant="h4" component="h1" textAlign={"center"}>
						Editar producto
					</Typography>
					<Typography
						variant="subtitle1"
						fontWeight="light"
						textAlign={"center"}
						color={"secondary"}
					>
						Edita los datos básicos de tu producto
					</Typography>
				</Grid>

				<Grid item xs={6}>
					<div
						style={{
							display: "flex",
							gap: 10,
							marginBottom: 25,
							flexWrap: "wrap",
						}}
					>
						<div
							style={{
								border: "1px solid blue",
								height: 150,
								flexGrow: 0.25,
								borderRadius: 5,
								position: "relative",
							}}
						>
							<img
								src={"/src/assets/images/profile.png"}
								alt="imagen-negocio"
								style={{
									width: "100%",
									height: "100%",
									position: "absolute",
									objectFit: "cover",
									objectPosition: "center",
								}}
							/>
							<button
								style={{
									position: "absolute",
									left: 0,
									top: 5,
									backgroundColor: "transparent",
									border: 0,
									zIndex: 2,
									cursor: "pointer",
								}}
							>
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M8 0C3.54286 0 0 3.54286 0 8C0 12.4571 3.54286 16 8 16C12.4571 16 16 12.4571 16 8C16 3.54286 12.4571 0 8 0ZM8 14.8571C4.22857 14.8571 1.14286 11.7714 1.14286 8C1.14286 4.22857 4.22857 1.14286 8 1.14286C11.7714 1.14286 14.8571 4.22857 14.8571 8C14.8571 11.7714 11.7714 14.8571 8 14.8571Z"
										fill="#BBBBBB"
									/>
									<path
										d="M11.0857 12L8 8.91429L4.91429 12L4 11.0857L7.08571 8L4 4.91429L4.91429 4L8 7.08571L11.0857 4L12 4.91429L8.91429 8L12 11.0857L11.0857 12Z"
										fill="#BBBBBB"
									/>
								</svg>
							</button>
							<span
								style={{
									width: "60%",
									position: "absolute",
									backgroundColor: "#29A654",
									color: "#ffffff",
									fontWeight: "bold",
									padding: "2px 5px",
									borderRadius: 20,
									bottom: 10,
									textAlign: "center",
									fontSize: 14,
									left: 0,
									right: 0,
									margin: "auto",
								}}
							>
								Portada
							</span>
						</div>

						<div
							style={{
								border: "1px solid blue",
								height: 150,
								flexGrow: 0.25,
								borderRadius: 5,
								position: "relative",
							}}
						>
							<img
								src={"/src/assets/images/profile.png"}
								alt="imagen-negocio"
								style={{
									width: "100%",
									height: "100%",
									position: "absolute",
									objectFit: "cover",
									objectPosition: "center",
								}}
							/>
							<button
								style={{
									position: "absolute",
									left: 0,
									top: 5,
									backgroundColor: "transparent",
									border: 0,
									zIndex: 2,
									cursor: "pointer",
								}}
							>
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M8 0C3.54286 0 0 3.54286 0 8C0 12.4571 3.54286 16 8 16C12.4571 16 16 12.4571 16 8C16 3.54286 12.4571 0 8 0ZM8 14.8571C4.22857 14.8571 1.14286 11.7714 1.14286 8C1.14286 4.22857 4.22857 1.14286 8 1.14286C11.7714 1.14286 14.8571 4.22857 14.8571 8C14.8571 11.7714 11.7714 14.8571 8 14.8571Z"
										fill="#BBBBBB"
									/>
									<path
										d="M11.0857 12L8 8.91429L4.91429 12L4 11.0857L7.08571 8L4 4.91429L4.91429 4L8 7.08571L11.0857 4L12 4.91429L8.91429 8L12 11.0857L11.0857 12Z"
										fill="#BBBBBB"
									/>
								</svg>
							</button>
						</div>

						<div
							style={{
								flexShrink: 0,
								height: 150,
								flexGrow: 0.25,
								position: "relative",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								textAlign: "center",
								borderRadius: 5,
								border: "1px dashed #727D91",
							}}
						>
							<p
								style={{
									position: "absolute",
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyContent: "center",
									fontSize: 12,
									zIndex: 0,
									cursor: "pointer",
								}}
							>
								<FileUploadIcon />
								Seleccionar
							</p>
							<input
								type="file"
								style={{
									position: "absolute",
									top: 0,
									right: 0,
									bottom: 0,
									left: 0,
									opacity: 0,
									zIndex: 2,
									cursor: "pointer",
								}}
							/>
						</div>
					</div>

					<CustomTextField
						error
						required
						helperText="test"
						label="Nombre del producto o servicio"
						placeholder="Ingresa el nombre de tu producto o servicio"
						onChange={handleName}
						value={product?.name}
					/>

					<FormControl sx={{ mb: 3 }} fullWidth>
						<CustoInputLabel id="multi-categories-label" shrink>
							Rubros
						</CustoInputLabel>
						<Select
							labelId="multi-categories-label"
							id="multi-categories"
							multiple
							value={category}
							onChange={handleChange}
							input={<CustomInputBase id="select-categories-chip" />}
							renderValue={(selected) => (
								<Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
									{selected.map((value) => (
										<Chip key={value} label={value} />
									))}
								</Box>
							)}
							MenuProps={MenuProps}
						>
							{names.map((name) => (
								<MenuItem
									key={name}
									value={name}
									style={getStyles(name, category, theme)}
								>
									{name}
								</MenuItem>
							))}
						</Select>
					</FormControl>

					<CustomTextField
						label="Descripción corta"
						placeholder="Ingresa una descripción corta del producto / servicio"
						multiline
						rows={3}
						onChange={handleShortDescription}
						value={product?.shortDescription}
					/>

					<CustomTextField
						label="Descripción larga"
						placeholder="Ingresa una descripción más detallada del producto / servicio"
						multiline
						rows={6}
						onChange={handleDescription}
						value={product?.description}
					/>

					<CustomTextField
						label="Precio total"
						placeholder="Ingresa el precio del producto"
						rows={3}
						onChange={handlePrice}
						value={product?.price}
					/>

					<CustomTextField
						label="Descuento"
						placeholder="Ingresa el valor del descuento"
						rows={3}
						onChange={handleDiscount}
						value={product?.discount}
					/>
				</Grid>
			</Grid>

			<Grid container justifyContent={"center"} mb={10} spacing={2}>
				<Grid item xs={2}>
					<CustomButton
						variant={"outlined"}
						fullWidth
						onClick={() => navigate(-1)}
					>
						Volver
					</CustomButton>
				</Grid>
				<Grid item xs={2}>
					<CustomButton
						variant={"contained"}
						fullWidth
						onClick={handleSaveProduct}
					>
						Guardar
					</CustomButton>
				</Grid>
			</Grid>
		</Container>
	);
};
