import { 
  Box, 
  Grid, 
  IconButton, 
  Modal, 
  Stack, 
  Typography,
  useMediaQuery,
  useTheme, 
} from "@mui/material";
import { CustomButton, CustomTextField } from "src/components";
import CloseIcon from '@mui/icons-material/Close';

interface BillingInfoMailEditModalProps {
  isEditing: boolean,
  dismissEditing: () => void,
  handleSave: () => void
}

export const BillingInfoMailEditModal = ({ isEditing, handleSave, dismissEditing }: BillingInfoMailEditModalProps ) => {

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const style = {
    width: fullScreen ? '90%' : '30%', // Ancho adaptativo
    top: '50%',
    left: '50%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    padding: 6,
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
              <Typography variant={'body2'}>Modifica correo de contacto</Typography>
          </Box>
          <Box>
            <IconButton aria-label="close" onClick={ dismissEditing }>
              <CloseIcon />
            </IconButton>
          </Box>
        </Stack>

        <Grid container justifyContent={'center'} columnSpacing={5} sx={{ maxHeight: 450, overflow: 'auto' }}>
          <Grid item xs={12}>

            <CustomTextField 
              id="business-name"
              type="email"
              label="Correo electrónico"
              placeholder="Ingresa correo electrónico"
              />

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
  )
}
