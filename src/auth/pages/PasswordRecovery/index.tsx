import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Modal, Typography, useMediaQuery, useTheme } from "@mui/material";
import { CustomTextField, CustomButton } from "src/components";

export const PasswordRecovery = () => {

  const [isOpen, setIsOpen] = useState(false);
  
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const style = {
    width: fullScreen ? '90%' : '35%', // Ancho adaptativo
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

  const navigate = useNavigate();

  const handleRecovery = () => {
    setIsOpen(true);
  }



  return (
    <Grid item xs={12} sm={10} lg={4}>

      <Modal open={isOpen}
        aria-labelledby="modal-title"
        aria-describedby="modal-description">
        <Box sx={style}>
          <Grid container justifyContent={'center'}>
            <Typography variant={'h4'} textAlign={'center'} fontWeight={'medium'} id="modal-title">
              ¡Listo!
            </Typography>
            <Typography variant={'body1'} textAlign={'center'} my={3} id="modal-description">
              Hemos enviado un correo electrónico para restablecer tu contraseña. Por favor, verifica tu bandeja de entrada y sigue las instrucciones para recuperar el acceso a tu cuenta.
            </Typography>

            <Grid item xs={12} md={8}>
              <CustomButton variant={'contained'} fullWidth onClick={ () => navigate('/auth/login') }>
                Volver a inicio de sesión
              </CustomButton>
            </Grid>
          </Grid>
        </Box>
      </Modal>

      <Box p={5} sx={{
          borderRadius: '20px',
          margin: '2em 0',
          boxShadow: '0 4px 10px 5px rgba(0, 0, 0, .1)',
        }}
        className="animate__animated animate__fadeIn">
        <Grid container gap={1}>

          <Typography variant={'h5'} fontWeight={'700'}>Recuperar contraseña</Typography>
          <Typography variant={'subtitle1'}>Ingresa tu correo electrónico para buscar tu cuenta.</Typography>

          <CustomTextField 
            sx={{ mb: 2 }}
            id="email"
            label="Email"
            type="email"
            autoComplete="email"
            placeholder="Ingresa tu correo electrónico"
            />
          
          <CustomButton 
            type="submit" 
            variant="contained" 
            fullWidth size="large" 
            sx={{ borderRadius: 2, mb: 3, textTransform: 'none' }}
            onClick={ handleRecovery }
            >
              Recuperar contraseña
          </CustomButton>

          <CustomButton 
            type="submit" 
            variant="outlined" 
            fullWidth size="large" 
            color="primary"
            sx={{ borderRadius: 2, textTransform: 'none' }}
            onClick={ () => navigate('/auth/login') }
            >
              Volver a inicio de sesión
          </CustomButton>
          
        </Grid>

      </Box>
    </Grid>
  )
}
