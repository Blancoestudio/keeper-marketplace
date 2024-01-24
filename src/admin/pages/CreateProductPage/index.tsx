import { ChangeEvent, useEffect, useRef, useState } from "react";

import FileUploadIcon from "@mui/icons-material/FileUpload";
import {
	Container,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	Theme,
	Typography,
	useTheme,
	styled,
	InputBase,
	SelectChangeEvent,
} from "@mui/material";
import { CustomButton, CustomTextField } from "src/components";

import ImgDefault from "/src/assets/images/image-default.png";
import { ProductService } from "src/services/ProductService";
import { useLocation, useNavigate } from "react-router-dom";
import { Category, ImageToUpload, Product } from "src/interfaces/Product";
import { ImageService } from "src/services/ImageService";

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

function getStyles(
	category: Category,
	cstegory: readonly Category[],
	theme: Theme
) {
	return {
		fontWeight:
			cstegory.indexOf(category) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	};
}

export const CreateProductPage = () => {
	const navigate = useNavigate();
	const inputFiles = useRef<HTMLInputElement | null>(null);
	const theme = useTheme();
	const [name, setName] = useState("");
	const [shortDescription, setShortDescription] = useState("");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState<string>("");
	const [price, setPrice] = useState("");
	const [discount, setDiscount] = useState("");
	const [images, setImages] = useState<File[]>([]);
	const [imagesToUpload, setImagesToUpload] = useState<ImageToUpload[]>([]);
	const [uploadedImages, setUploadedImages] = useState<string[]>([]);
	const [imagesToDelete, setImagesToDelete] = useState<string[]>([]);
	const [categories, setCategories] = useState<Category[]>([]);
	const [isEdit, setIsEdit] = useState(false);
	const [product, setProduct] = useState<Product>();
	const location = useLocation();

	const handleName = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};
	const handleShortDescription = (e: ChangeEvent<HTMLInputElement>) => {
		setShortDescription(e.target.value);
	};
	const handleDescription = (e: ChangeEvent<HTMLInputElement>) => {
		setDescription(e.target.value);
	};
	const handleChange = (e: SelectChangeEvent<string>) => {
		setCategory(e.target.value);
	};
	const handlePrice = (e: ChangeEvent<HTMLInputElement>) => {
		setPrice(e.target.value);
	};
	const handleDiscount = (e: ChangeEvent<HTMLInputElement>) => {
		setDiscount(e.target.value);
	};
	const handleCreateOrEditProduct = async () => {
		let _product;
		const categorySelected = categories.find((c) => c.name === category);

		const imagesFormData = new FormData();

		if (isEdit) {
			for (const currentFile of imagesToUpload) {
				imagesFormData.append("images", currentFile.image);
			}
			const uploadImages = await ImageService.uploadImage(imagesFormData);
			if (uploadImages.error) {
				console.error("No se pudo subir la imagen", uploadImages.data);
				return;
			}

			_product = await ProductService.updateProduct(product!._id as string, {
				name,
				category: categorySelected,
				shortDescription,
				description,
				price,
				discount: Number(discount),
				images: [...product!.images!, ...uploadImages.data.images],
				deleteImages: imagesToDelete,
			});
		} else {
			for (const currentFile of images) {
				imagesFormData.append("images", currentFile);
			}
			const uploadImages = await ImageService.uploadImage(imagesFormData);
			if (uploadImages.error) {
				console.error("No se pudo subir la imagen", uploadImages.data);
				return;
			}

			_product = await ProductService.createProduct({
				name,
				category: categorySelected,
				shortDescription,
				description,
				price,
				discount: Number(discount),
				images: [...uploadImages.data.images],
			});
		}

		if (_product.error) {
			console.error("No se pudo crear tu producto", _product.data);
			return;
		}
		navigate("/admin/dashboard");
	};
	const handleDeleteImages = async (index: number) => {
		let isExistImage;
		if (isEdit) {
			const currentImage = uploadedImages[index];
			isExistImage = uploadedImages.indexOf(currentImage);
			if (isExistImage !== -1) {
				if (!currentImage.includes("blob:http")) {
					setImagesToDelete([...imagesToDelete, currentImage]);
				}
				const _images = [...uploadedImages];
				_images.splice(index, 1);
				setUploadedImages(_images);
			}
			const deleteImagesToUpload = imagesToUpload.findIndex(
				(img) => img.localUrl === uploadedImages[index]
			);
			if (deleteImagesToUpload !== -1) {
				const _images = [...imagesToUpload];
				_images.splice(deleteImagesToUpload, 1);
			}
		} else {
			const _images = [...images];
			_images.splice(index, 1);
			setImages(_images as File[]);
		}
	};
	const handleImages = async (e: ChangeEvent<HTMLInputElement>) => {
		const { files } = e.target;
		if (files && files.length) {
			const filename = files[0].name;

			const parts = filename.split(".");
			const fileType = parts[parts.length - 1];
			console.log("fileType", fileType);

			if (isEdit) {
				setImagesToUpload([
					...imagesToUpload,
					{ localUrl: URL.createObjectURL(files[0]), image: files[0] },
				]);
				setUploadedImages([...uploadedImages, URL.createObjectURL(files[0])]);
			} else {
				setImages([...images, files[0]] as File[]);
			}
		}
	};

	useEffect(() => {
		if (!product) {
			const path = location.pathname.split("/");
			if (path.length === 5 && path[path.length - 1].length > 0) {
				setIsEdit(true);
				const _product = async () => {
					const p = await ProductService.getProductById(path[path.length - 1]);
					const currentProduct: Product = p.data;
					currentProduct._id = path[path.length - 1];
					setProduct(currentProduct);
				};
				_product();
			}
		}
	}, []);
	useEffect(() => {
		if (product) {
			setUploadedImages(
				Array.isArray(product!.images)
					? (product!.images as string[])
					: ([product!.images] as string[])
			);
		}
	}, [product]);
	useEffect(() => {
		const getCategories = async () => {
			const categories = await ProductService.getCategories();
			if (categories.error) {
				console.error("No se obtener las categories", categories.data);
			}
			setCategories(categories.data);
		};
		getCategories();

		if (product && isEdit) {
			setName(product.name);
			/// TODO: Make a change for when the product loads its category as an object and not as a string
			// const currentCategory = categories.find(
			// 	(c) => c._id === product.category!._id
			// );
			const currentCategory = categories.find(
				(c) => c._id === product.category!
			);
			/// TODO END
			if (currentCategory) {
				setCategory(currentCategory.name!);
			}
			setShortDescription(product.shortDescription);
			setDescription(product.description);
			setPrice(product.price!);
			setDiscount(product.discount!.toString());
		}
	}, [product]);

	return product && isEdit ? (
		<Container maxWidth="lg" sx={{ py: 3 }}>
			<Grid
				container
				flexDirection={"column"}
				alignItems={"center"}
				justifyContent={"center"}
				sx={{ py: 5 }}
			>
				<Grid item xs={12} mb={5}>
					<Typography variant="h4" component="h1" textAlign={"center"}>
						{isEdit ? "Editar producto" : "Crear un nuevo producto"}
					</Typography>
					<Typography
						variant="subtitle1"
						fontWeight="light"
						textAlign={"center"}
						color={"secondary"}
					>
						{isEdit
							? "Edita los datos básicos de tu producto"
							: "Ingresa los datos básicos de tu producto"}
					</Typography>
				</Grid>

				<Grid item xs={6}>
					{isEdit ? (
						<div
							style={{
								display: "flex",
								gap: 10,
								marginBottom: 25,
								flexWrap: "wrap",
							}}
						>
							{!uploadedImages?.length ? (
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
										src={ImgDefault}
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
							) : (
								uploadedImages?.map((currentImage, i) => {
									return (
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
												src={currentImage}
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
												onClick={() => handleDeleteImages(i)}
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
											{i === 0 ? (
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
											) : (
												<></>
											)}
										</div>
									);
								})
							)}
							{uploadedImages?.length <= 2 ? (
								<>
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
											src={ImgDefault}
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
											onChange={handleImages}
											ref={inputFiles}
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
								</>
							) : (
								<></>
							)}
						</div>
					) : (
						<div
							style={{
								display: "flex",
								gap: 10,
								marginBottom: 25,
								flexWrap: "wrap",
							}}
						>
							{!images.length ? (
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
										src={ImgDefault}
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
							) : (
								images.map((file, i) => {
									return (
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
												src={
													!images.length
														? ImgDefault
														: URL.createObjectURL(file as File)
												}
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
												onClick={() => handleDeleteImages(i)}
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
											{i === 0 ? (
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
											) : (
												<></>
											)}
										</div>
									);
								})
							)}
							{images.length <= 2 ? (
								<>
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
											src={ImgDefault}
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
											onChange={handleImages}
											ref={inputFiles}
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
								</>
							) : (
								<></>
							)}
						</div>
					)}
					<CustomTextField
						error
						required
						helperText="test"
						label="Nombre del producto o servicio"
						placeholder="Ingresa el nombre de tu producto o servicio"
						onChange={handleName}
						value={name}
					/>

					<FormControl sx={{ mb: 3 }} fullWidth>
						<CustoInputLabel id="multi-categories-label" shrink>
							Rubros
						</CustoInputLabel>
						<Select
							labelId="multi-categories-label"
							id="multi-categories"
							value={category}
							input={<CustomInputBase id="select-categories-chip" />}
							onChange={handleChange}
							MenuProps={MenuProps}
						>
							{categories.map((category) => (
								<MenuItem
									key={category._id}
									value={category.name}
									style={getStyles(category, categories, theme)}
								>
									{category.name}
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
						value={shortDescription}
					/>

					<CustomTextField
						label="Descripción larga"
						placeholder="Ingresa una descripción más detallada del producto / servicio"
						multiline
						rows={6}
						onChange={handleDescription}
						value={description}
					/>

					<CustomTextField
						label="Precio total"
						placeholder="Ingresa el precio del producto"
						rows={3}
						onChange={handlePrice}
						value={price}
					/>

					<CustomTextField
						label="Descuento"
						placeholder="Ingresa el valor del descuento"
						rows={3}
						onChange={handleDiscount}
						value={discount}
					/>
				</Grid>
			</Grid>

			<Grid container justifyContent={"center"} mb={10}>
				<Grid item xs={4}>
					<CustomButton
						variant={"contained"}
						onClick={handleCreateOrEditProduct}
						fullWidth
					>
						{isEdit ? "Editar producto" : "Crear producto"}
					</CustomButton>
				</Grid>
			</Grid>
		</Container>
	) : (
		<Container maxWidth="lg" sx={{ py: 3 }}>
			<Grid
				container
				flexDirection={"column"}
				alignItems={"center"}
				justifyContent={"center"}
				sx={{ py: 5 }}
			>
				<Grid item xs={12} mb={5}>
					<Typography variant="h4" component="h1" textAlign={"center"}>
						{isEdit ? "Editar producto" : "Crear un nuevo producto"}
					</Typography>
					<Typography
						variant="subtitle1"
						fontWeight="light"
						textAlign={"center"}
						color={"secondary"}
					>
						{isEdit
							? "Edita los datos básicos de tu producto"
							: "Ingresa los datos básicos de tu producto"}
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
						{!images.length ? (
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
									src={ImgDefault}
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
						) : (
							images.map((file, i) => {
								return (
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
											src={
												!images.length
													? ImgDefault
													: URL.createObjectURL(file as File)
											}
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
											onClick={() => handleDeleteImages(i)}
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
										{i === 0 ? (
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
										) : (
											<></>
										)}
									</div>
								);
							})
						)}
						{images.length <= 2 ? (
							<>
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
										src={ImgDefault}
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
										onChange={handleImages}
										ref={inputFiles}
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
							</>
						) : (
							<></>
						)}
					</div>
					<CustomTextField
						error
						required
						helperText="test"
						label="Nombre del producto o servicio"
						placeholder="Ingresa el nombre de tu producto o servicio"
						onChange={handleName}
						value={name}
					/>

					<FormControl sx={{ mb: 3 }} fullWidth>
						<CustoInputLabel id="multi-categories-label" shrink>
							Rubros
						</CustoInputLabel>
						<Select
							labelId="multi-categories-label"
							id="multi-categories"
							value={category}
							input={<CustomInputBase id="select-categories-chip" />}
							onChange={handleChange}
							MenuProps={MenuProps}
						>
							{categories.map((category) => (
								<MenuItem
									key={category._id}
									value={category.name}
									style={getStyles(category, categories, theme)}
								>
									{category.name}
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
						value={shortDescription}
					/>

					<CustomTextField
						label="Descripción larga"
						placeholder="Ingresa una descripción más detallada del producto / servicio"
						multiline
						rows={6}
						onChange={handleDescription}
						value={description}
					/>

					<CustomTextField
						label="Precio total"
						placeholder="Ingresa el precio del producto"
						rows={3}
						onChange={handlePrice}
						value={price}
					/>

					<CustomTextField
						label="Descuento"
						placeholder="Ingresa el valor del descuento"
						rows={3}
						onChange={handleDiscount}
						value={discount}
					/>
				</Grid>
			</Grid>

			<Grid container justifyContent={"center"} mb={10}>
				<Grid item xs={4}>
					<CustomButton
						variant={"contained"}
						onClick={handleCreateOrEditProduct}
						fullWidth
					>
						{isEdit ? "Editar producto" : "Crear producto"}
					</CustomButton>
				</Grid>
			</Grid>
		</Container>
	);
};
