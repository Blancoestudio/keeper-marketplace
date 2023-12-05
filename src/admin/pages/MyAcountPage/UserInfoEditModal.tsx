import { Grid, Typography, Stack, IconButton, Box } from "@mui/material"
import { CustomTextField, CustomButton } from "src/components"
import { CustomModal } from "src/components/CustomModal"
import CloseIcon from '@mui/icons-material/Close';

interface UserInfoEditModalProps {
  isEditing: boolean,
  dismissEditing: () => void,
  handleSave: () => void
}

export const UserInfoEditModal = ({ isEditing, dismissEditing, handleSave }: UserInfoEditModalProps) => {

  return (
    <CustomModal isOpen={isEditing}>
      <Stack direction={'row'} justifyContent={'space-between'} mb={4}>
        <Box>
          <Typography variant={'h4'} fontWeight={'medium'}>Editar información</Typography>
          <Typography variant={'body2'}>Modifica los datos sobre tí</Typography>
        </Box>
        <Box>
          <IconButton aria-label="close" onClick={ dismissEditing }>
            <CloseIcon />
          </IconButton>
        </Box>
      </Stack>
      <Grid container justifyContent={'center'}>
        <Grid item xs={12} md={8}>
          <Stack>
            <CustomTextField 
              label="Nombre y apellido"
              placeholder={'Ingresa tu nombre y apellido'}
            />
            <CustomTextField 
              label="Correo de contacto:"
              placeholder={'Ingresa correo electrónico'}
            />
            <CustomTextField 
              type={'password'}
              label="Contraseña:"
              placeholder={'Ingresa contraseña'}
            />
            <CustomTextField 
              type={'password'}
              label="Repetir contraseña:"
              placeholder={'Ingresa nuevamente la contraseña'}
            />
            <CustomButton 
              sx={{
                mt: 3
              }}
              onClick={ handleSave }
              variant={'contained'}>
              Guardar
            </CustomButton>
          </Stack>
        </Grid>
      </Grid>
    </CustomModal>
  )
}
