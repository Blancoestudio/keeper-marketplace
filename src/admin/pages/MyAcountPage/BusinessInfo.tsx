import { useState } from "react";

import { AlertColor, Box, Grid, Paper, Typography } from "@mui/material";

import { BusinessInfoEditModal } from "./BusinessInfoEditModal";
import { CustomButton, CustomSnack } from "src/components";

export const BusinessInfo = () => {

  const [isEditing, setIsEditing] = useState(false);
  const [isOpenSnack, setIsOpenSnack] = useState(false);
  const [snackState, setSnackState] = useState<{ severity: AlertColor, msg: string }>({
    severity: 'info',
    msg: ''
  })

  const handleDismiss = () => {
    setIsEditing(false);
  }

  const handleEdit= () => {
    setIsEditing(true);
  }

  const handleSave = () => {
    setIsEditing(false);

    setSnackState({
      severity: 'success',
      msg: 'Esto es un mensaje de éxito!'
    })
    setIsOpenSnack(true);
    setTimeout(() => {
      setIsOpenSnack(false);
    }, 2000);
  }

  return (
    <>
      <CustomSnack 
        isOpen={isOpenSnack}
        severity={snackState.severity}
        message={snackState.msg}
      />
          
      <BusinessInfoEditModal 
        isEditing={isEditing}
        dismissEditing={ handleDismiss }
        handleSave={ handleSave }
      />

      <Typography variant={"h6"} color={"primary"} mb={3}>
        Información general
      </Typography>

      <Grid container rowSpacing={2} columnSpacing={3}>
        <Grid item xs={7}>
          <Box mb={5}>
            <Typography variant="caption" display="block" gutterBottom>
              Imagen de tu negocio:
            </Typography>
            <Paper square={false} elevation={3} sx={{
              width: 200,
              height: 200,
              padding: .75,
            }}>
              <img 
                src={'/src/assets/images/profile.png'} 
                alt="imagen-negocio" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
                />
            </Paper>
          </Box>

          <Box mb={5}>
            <Typography variant="caption" display="block" gutterBottom>
              Nombre de tu negocio:
            </Typography>
            <Typography variant="body1" display="block" gutterBottom>
              Keeper App
            </Typography>
          </Box>

          <Box mb={5}>
            <Typography variant="caption" display="block" gutterBottom>
              Dirección:
            </Typography>
            <Typography variant="body1" display="block" gutterBottom>
              Suite 826 84639 Pollich Mission, Estefanaview, RI 25875-1749
            </Typography>
          </Box>

          <Box mb={5}>
            <Typography variant="caption" display="block" gutterBottom>
              Descripción:
            </Typography>
            <Typography variant="body1" display="block" gutterBottom>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
              voluptatibus soluta expedita, impedit aliquam voluptas ratione
              alias eligendi sapiente harum.
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
            onClick={ handleEdit }
          >
            Editar información general
          </CustomButton>
        </Grid>
      </Grid>
    </>    
  );
};
