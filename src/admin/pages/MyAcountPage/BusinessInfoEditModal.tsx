import { Box, Grid, IconButton, Modal, Paper, Stack, Typography, styled, useMediaQuery, useTheme } from "@mui/material";
import { CustomTextField, CustomButton } from "src/components";
import CloseIcon from '@mui/icons-material/Close';

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

interface BusinessInfoEditModalProps {
  isEditing: boolean,
  dismissEditing: () => void,
  handleSave: () => void
}

export const BusinessInfoEditModal = ({ isEditing, handleSave, dismissEditing }: BusinessInfoEditModalProps) => {

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const style = {
    width: fullScreen ? '90%' : '70%', // Ancho adaptativo
    top: '50%',
    left: '50%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 5,
    px: 10,
    pb: 8,
    borderRadius: 8
  };

  return (
    <Modal
      open={isEditing}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        
        <Stack direction={'row'} justifyContent={'space-between'} mb={4}>
          <Box>
              <Typography variant={'h4'} fontWeight={'medium'}>Editar información</Typography>
              <Typography variant={'body2'}>Modifica los datos de tu negocio</Typography>
          </Box>
          <Box>
            <IconButton aria-label="close" onClick={ dismissEditing }>
              <CloseIcon />
            </IconButton>
          </Box>
        </Stack>

        <Grid container justifyContent={'center'} columnSpacing={5} sx={{ maxHeight: 450, overflow: 'auto' }}>
          <Grid item xs={12} md={8}>

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

          <Grid item xs={12} md={4} pt={3} mb={3}>

            <Box mb={5}>
              <Typography variant="caption" display="block" gutterBottom>
                Imagen de tu negocio:
              </Typography>
              <Paper square={false} elevation={3} sx={{
                // width: 200,
                height: 250,
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

            <Box display={'flex'} justifyContent={'center'}>
              <CustomButton component="label" variant={'outlined'} sx={{ borderRadius: 2, textTransform: 'none' }}>
                Cambiar imagen 
                <VisuallyHiddenInput type="file" />  
              </CustomButton>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <CustomButton 
              fullWidth
              onClick={ handleSave }
              variant={'contained'}>
              Guardar
            </CustomButton>
          </Grid>
        </Grid>
        
      </Box>
    </Modal>
  );
};
