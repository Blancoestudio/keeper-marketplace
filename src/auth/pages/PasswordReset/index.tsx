// import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CustomTextField, CustomButton } from "src/components";


export const PasswordReset = () => {

  const navigate = useNavigate();

  const handleResetPassword = () => {
    navigate('/auth/login')
  }

  return (
    <Grid item xs={12} sm={10} lg={4}>

      <Box p={5}
        sx={{
          borderRadius: '20px',
          margin: '2em 0',
          boxShadow: '0 4px 10px 5px rgba(0, 0, 0, .1)',
        }}
        className="animate__animated animate__fadeIn"
      >
        <Grid container gap={1}>

          <Typography variant="h5" fontWeight={'700'}>Restablecer contraseña</Typography>

            
        <CustomTextField 
          sx={{ mb: 2 }}
          id="password-1"
          label="Ingresa contraseña"
          type="password"
          autoComplete="password"
          placeholder="Ingresa contraseña"
          />
        
        <CustomTextField 
          sx={{ mb: 2 }}
          id="password-2"
          label="Repetir contraseña"
          type="password"
          autoComplete="password"
          placeholder="Repite la contraseña"
          />
        
        <CustomButton 
          type="submit" 
          variant="contained" 
          fullWidth size="large" 
          sx={{ borderRadius: 2, mt: 2, textTransform: 'none' }}
          onClick={ handleResetPassword }
          >
            Restablecer contraseña
        </CustomButton>

          
        </Grid>

      </Box>
    </Grid>
  )
}
