import { ChangeEvent, useState } from "react";

import { Box, Chip, Container, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Theme, Typography, useTheme, styled, InputBase, Stack,} from "@mui/material";
import { CustomButton, CustomTextField } from "src/components";

import { ProductService } from "src/services/ProductService";
import { useNavigate } from "react-router-dom";
import { ImagesSelector } from "../EditProductPage/ImagesSelector";

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

export const CreateProductPage = () => {
	const navigate = useNavigate();
	const theme = useTheme();
	const [name, setName] = useState("");
	const [shortDescription, setShortDescription] = useState("");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState<string[]>([]);
	const [price, setPrice] = useState("");
	const [discount, setDiscount] = useState("");

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
	const handleCreateProduct = async () => {
		const product = await ProductService.createProduct({
			name,
			shortDescription,
			description,
			price,
			discount: Number(discount),
		});
		if (product.error) {
			console.error("No se pudo crear tu producto", product.data);
			return;
		}
		navigate("/admin/dashboard");
	};

	return (
		<Container maxWidth="lg" sx={{ py: 3 }} className="animate__animated animate__fadeIn">
      <Box sx={{ my: 3 }}>
        <Typography variant="h4" component="h1" textAlign={"center"}>Crear un nuevo producto</Typography>
        <Typography variant="subtitle1" fontWeight="light" textAlign={"center"} color={"secondary"}>Ingresa los datos básicos de tu producto</Typography>
      </Box>

      <ImagesSelector />
      
			<Grid container justifyContent={'center'} mb={5}>
				<Grid item xs={5}>
					<CustomTextField
						error={false}
						required
						label="Nombre del producto o servicio"
						placeholder="Ingresa el nombre de tu producto o servicio"
						onChange={handleName}
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
					/>

					<CustomTextField
						label="Descripción larga"
						placeholder="Ingresa una descripción más detallada del producto / servicio"
						multiline
						rows={6}
						onChange={handleDescription}
					/>

          <Grid container justifyContent={'center'} spacing={2} mb={3}>
            <Grid item xs={7}>
              <CustomTextField
                label="Precio total"
                type="number"
                placeholder="Ingresa el precio del producto"
                rows={3}
                onChange={handlePrice}
              />
            </Grid>
            <Grid item xs={5}>
              <CustomTextField
                label="Descuento"
                type="number"
                placeholder="Valor descuento"
                rows={3}
                onChange={handleDiscount}
              />
            </Grid>
          </Grid>

          <Stack direction={'column'} gap={2}>
              <CustomButton variant={"contained"} fullWidth onClick={ handleCreateProduct }>Crear producto</CustomButton>
              <CustomButton variant={"outlined"} fullWidth onClick={() => navigate(-1)}>Cancelar</CustomButton>
          </Stack>

				</Grid>
			</Grid>

		</Container>
	);
};
