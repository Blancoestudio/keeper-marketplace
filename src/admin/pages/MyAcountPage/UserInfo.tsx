import { AlertColor, Box, Grid, Typography } from "@mui/material";
import { CustomButton, CustomSnack } from "src/components";
import { UserInfoEditModal } from "./UserInfoEditModal";
import { useState } from "react";
import { StorageService } from "src/services/StorageService";

export const UserInfo = () => {
	const [isEditing, setIsEditing] = useState(false);
	const [isOpenSnack, setIsOpenSnack] = useState(false);
	const [snackState, setSnackState] = useState<{
		severity: AlertColor;
		msg: string;
	}>({
		severity: "info",
		msg: "",
	});
	const user = StorageService.get("user");

	const handleDismiss = () => {
		setIsEditing(false);
	};

	const handleEdit = () => {
		setIsOpenSnack(false);
		setIsEditing(true);
	};

	const handleSave = () => {
		setIsEditing(false);

		setSnackState({
			severity: "success",
			msg: "Esto es un mensaje de éxito!",
		});
		setIsOpenSnack(true);
		setTimeout(() => {
			setIsOpenSnack(false);
		}, 2000);
	};

	return (
		<Box py={5}>
			<Grid container justifyContent={"center"}>
				<Grid item xs={8}>
					<CustomSnack
						isOpen={isOpenSnack}
						severity={snackState.severity}
						message={snackState.msg}
					/>

					<UserInfoEditModal
						isEditing={isEditing}
						dismissEditing={handleDismiss}
						handleSave={handleSave}
					/>

					<Typography variant={"h6"} color={"primary"} mb={3}>
						Información de tu cuenta
					</Typography>

					<Grid container rowSpacing={2} columnSpacing={3} mb={3}>
						<Grid item xs={7}>
							<Box mb={5}>
								<Typography variant="caption" display="block" gutterBottom>
									Nombre y Apellido:
								</Typography>
								<Typography variant="body1" display="block" gutterBottom>
									{user.name}
								</Typography>
							</Box>

							<Box mb={5}>
								<Typography variant="caption" display="block" gutterBottom>
									Correo de contacto:
								</Typography>
								<Typography variant="body1" display="block" gutterBottom>
									{user.email}
								</Typography>
							</Box>

							<Box mb={5}>
								<Typography variant="caption" display="block" gutterBottom>
									Contraseña:
								</Typography>
								<Typography variant="body1" display="block" gutterBottom>
									******
								</Typography>
							</Box>
						</Grid>

						<Grid item xs={5} textAlign={"end"}>
							<CustomButton
								component="label"
								variant="text"
								size="large"
								sx={{
									borderRadius: 2,
									textTransform: "none",
								}}
								onClick={handleEdit}
							>
								Editar datos de tu cuenta
							</CustomButton>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};
