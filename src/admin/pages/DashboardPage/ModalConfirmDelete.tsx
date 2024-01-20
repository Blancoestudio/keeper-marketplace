import { Modal, Box, Stack, IconButton, Grid, Typography, useTheme, useMediaQuery } from "@mui/material"
import { CustomButton } from "src/components"
import CloseIcon from '@mui/icons-material/Close';

interface ModalConfirmDeleteProps {
  isConfirmOpen: boolean,
  closeModal: () => void
}

export const ModalConfirmDelete = ({ isConfirmOpen, closeModal }: ModalConfirmDeleteProps) => {


  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

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

  return (
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
								onClick={closeModal}
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
									onClick={closeModal}
								>
									Cancelar
								</CustomButton>
								<CustomButton
									variant={"contained"}
									onClick={closeModal}
								>
									Eliminar producto
								</CustomButton>
							</Stack>
						</Grid>
					</Grid>
				</Box>
			</Modal>
  )
}
