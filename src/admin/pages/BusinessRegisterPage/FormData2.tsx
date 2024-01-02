import {
	Checkbox,
	FormControl,
	FormControlLabel,
	Grid,
	InputAdornment,
	InputBase,
	InputLabel,
	Typography,
	styled,
} from "@mui/material";
import { FacebookRounded, Instagram, LinkedIn } from "@mui/icons-material";

import LanguageIcon from "@mui/icons-material/Language";
import { MuiTelInput } from "mui-tel-input";
import { ChangeEvent } from "react";
import { FormData2Props } from "src/interfaces/Store";

const InputCmp = styled(InputBase)(({ theme }) => ({
	"MuiFormLabel-root": {
		border: "1px solid red",
	},
	"label + &": {
		borderRadius: 6,
		border: "1px solid",
		backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
		borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
	},
	"& .MuiInputAdornment-root": {
		paddingLeft: ".5em",
	},
	"& .MuiInputBase-input": {
		position: "relative",
		border: "none",
		fontSize: 16,
		width: "auto",
		padding: "10px 12px",
		transition: theme.transitions.create([
			"border-color",
			"background-color",
			"box-shadow",
		]),
		fontFamily: ["Roboto", "-apple-system"].join(","),
		"&:focus": {
			borderColor: theme.palette.primary.main,
		},
	},
}));

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
	"&.MuiCheckbox-colorSecondary.Mui-checked": {
		color: theme.palette.secondary.main,
	},
}));

const StyledInputLabel = styled(InputLabel)(() => ({
	fontSize: "1.25em",
}));

export const FormData2 = ({ handleSocialNetworks }: FormData2Props) => {
	return (
		<Grid container spacing={4}>
			<Grid item xs={12} md={6}>
				<FormControl fullWidth variant="standard">
					<MuiTelInput
						label={"Teléfono"}
						forceCallingCode
						className="phone-field"
						defaultCountry="CL"
						onChange={(phone: string) =>
							handleSocialNetworks({
								type: "facebook",
								url: phone,
							})
						}
					/>
				</FormControl>

				<FormControlLabel
					sx={{ paddingLeft: ".75em" }}
					label={<Typography color={"#727D91"}>Publicar teléfono</Typography>}
					control={
						<CustomCheckbox color="primary" size="small" disableRipple />
					}
				/>
			</Grid>

			<Grid item xs={12} md={6}>
				<FormControl fullWidth variant="standard">
					<MuiTelInput
						label={"Teléfono"}
						forceCallingCode
						className="phone-field"
						defaultCountry="CL"
						onChange={(whatsappNumber: string) =>
							handleSocialNetworks({
								type: "facebook",
								url: whatsappNumber,
							})
						}
					/>
				</FormControl>
				<FormControlLabel
					sx={{ paddingLeft: ".75em" }}
					label={<Typography color={"#727D91"}>Publicar WhatsApp</Typography>}
					control={
						<CustomCheckbox color="primary" size="small" disableRipple />
					}
				/>
			</Grid>

			<Grid item xs={12} md={6}>
				<FormControl fullWidth variant="standard">
					<StyledInputLabel shrink htmlFor="sn-facebook">
						Facebook
					</StyledInputLabel>
					<InputCmp
						placeholder="Ingresa tu Facebook"
						id="sn-facebook"
						startAdornment={
							<InputAdornment position="start">
								<FacebookRounded />
							</InputAdornment>
						}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							handleSocialNetworks({
								type: "facebook",
								url: e.target.value,
							})
						}
					/>
				</FormControl>

				<FormControlLabel
					sx={{ paddingLeft: ".75em" }}
					label={<Typography color={"#727D91"}>Publicar Facebook</Typography>}
					control={
						<CustomCheckbox color="primary" size="small" disableRipple />
					}
				/>
			</Grid>

			<Grid item xs={12} md={6}>
				<FormControl fullWidth variant="standard">
					<StyledInputLabel shrink htmlFor="sn-instagram">
						Instagram
					</StyledInputLabel>
					<InputCmp
						placeholder="Ingresa tu Instagram"
						defaultValue=""
						id="sn-instagram"
						startAdornment={
							<InputAdornment position="start">
								<Instagram />
							</InputAdornment>
						}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							handleSocialNetworks({
								type: "instagram",
								url: e.target.value,
							})
						}
					/>
				</FormControl>
				<FormControlLabel
					sx={{ paddingLeft: ".75em" }}
					label={<Typography color={"#727D91"}>Publicar Instagram</Typography>}
					control={
						<CustomCheckbox color="primary" size="small" disableRipple />
					}
				/>
			</Grid>

			<Grid item xs={12} md={6}>
				<FormControl fullWidth variant="standard">
					<StyledInputLabel shrink htmlFor="sn-linkedin">
						LinkedIn
					</StyledInputLabel>
					<InputCmp
						placeholder="Ingresa tu LinkedIn"
						defaultValue=""
						id="sn-linkedin"
						startAdornment={
							<InputAdornment position="start">
								<LinkedIn />
							</InputAdornment>
						}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							handleSocialNetworks({
								type: "linkedin",
								url: e.target.value,
							})
						}
					/>
				</FormControl>

				<FormControlLabel
					sx={{ paddingLeft: ".75em" }}
					label={<Typography color={"#727D91"}>Publicar LinkedIn</Typography>}
					control={
						<CustomCheckbox color="primary" size="small" disableRipple />
					}
				/>
			</Grid>

			<Grid item xs={12} md={6}>
				<FormControl fullWidth variant="standard">
					<StyledInputLabel shrink htmlFor="website">
						Página web
					</StyledInputLabel>
					<InputCmp
						placeholder="Ingresa tu Sitio Web"
						id="website"
						startAdornment={
							<InputAdornment position="start">
								<LanguageIcon />
							</InputAdornment>
						}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							handleSocialNetworks({
								type: "website",
								url: e.target.value,
							})
						}
					/>
				</FormControl>

				<FormControlLabel
					sx={{ paddingLeft: ".75em" }}
					label={<Typography color={"#727D91"}>Publicar página</Typography>}
					control={
						<CustomCheckbox color="primary" size="small" disableRipple />
					}
				/>
			</Grid>
		</Grid>
	);
};
