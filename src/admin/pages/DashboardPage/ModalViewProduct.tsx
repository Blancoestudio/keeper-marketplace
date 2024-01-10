import { Modal, Box, Stack, IconButton, Grid, Paper, Typography, Chip, useTheme, useMediaQuery } from "@mui/material"
import { CustomButton } from "src/components"
import { calculateDiscount } from "src/utils/helpers"
import { Product } from "src/interfaces/Product";

import CloseIcon from '@mui/icons-material/Close';

interface ModalViewProductProps {
  isViewProductModalOpen: boolean,
  productSelected: Product,
  handleEditProduct: (index: number) => void,
  closeModal: () => void
}
export const ModalViewProduct = ({ isViewProductModalOpen, productSelected, handleEditProduct, closeModal }: ModalViewProductProps) => {
  
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

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

  return (
    <Modal
      open={isViewProductModalOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Stack direction={"row"} justifyContent={"flex-end"} mb={4}>
          <Box>
            <IconButton aria-label="close" onClick={closeModal}>
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
                onClick={closeModal}
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
  )
}

