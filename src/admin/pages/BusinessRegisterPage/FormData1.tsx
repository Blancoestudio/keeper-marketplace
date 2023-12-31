import { Box, Grid, Typography, styled } from "@mui/material";
import { CustomTextField, CustomButton } from "src/components";
import IconImage from 'src/assets/svg/icon-img.svg';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export const FormData1 = () => {
  return (
    <Grid container columnSpacing={8}>
      <Grid item xs={12} md={7}>

        <CustomTextField id="business-name"
          label="Nombre de tu negocio"
          placeholder="Ingresa el nombre de tu negocio"
          />
        
        <CustomTextField id="business-address"
          label="Dirección"
          placeholder="Ingresa tu dirección"
          />
        
        <CustomTextField id="business-description"
          label="Descripción"
          placeholder="Haz una descripción breve de tu negocio, a que se dedica, que productos vendes, etc..."
          multiline
          rows={5}
          />
      </Grid>

      <Grid item xs={12} md={5} pt={3}>
        <Box component={'label'} mb={3}
          sx={{
            cursor: 'pointer',
            width: '100%', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            height: '260px', 
            borderRadius: '20px', 
            padding: '10px 20%',
            border: '1px dashed #727D91', 
          }}>
            <Box sx={{ position: 'relative' }}>
              <img src={IconImage} alt="image" />
              <Typography fontSize={14} color={'#727D91'}>Carga una foto con el logo de tu negocio</Typography>
              <Typography fontSize={14} color={'#727D91'}>500 px -500 px</Typography>
              <VisuallyHiddenInput type="file" />
            </Box>
        </Box>

        <Box display={'flex'} justifyContent={'center'}>
          <CustomButton component="label" variant="contained" sx={{ borderRadius: 2, textTransform: 'none' }}>
            Seleccionar desde tu ordenador  
            <VisuallyHiddenInput type="file" />  
          </CustomButton>
        </Box>
      </Grid>
    </Grid>
  )
}
