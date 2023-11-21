import { FormEvent } from "react"
import { useNavigate } from "react-router-dom"

// import theme from "../../../theme/theme"
import { Box, Checkbox, FormControlLabel, FormGroup, Grid, Typography } from "@mui/material"

import { CustomTextField, CustomButton } from "../../../components"

export const RegisterPage = () => {

  const navigate = useNavigate();

  const handleRegisterSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate('/auth/checkout')
  }

  return (
    <>
      <Grid item xs={12} sm={10} lg={4}>
        <Box p={5}
          sx={{
            borderRadius: '20px',
            margin: '2em 0',
            boxShadow: '0 4px 10px 5px rgba(0, 0, 0, .1)',
          }}
        >
          <Grid container gap={1}>

            {/* <Grid item xs sm sx={{ 
              borderRight: '2px solid', 
              borderColor: 'primary.main',
              [theme.breakpoints.down('md')]: {
                border: 'none'
              },
            }}>...</Grid> */}
            <Grid item xs={12}> 
              {/*  md={7} px={2} */}

              <Typography variant="h5" fontWeight={'500'} mb={1}>Registro</Typography>
              <Typography variant="body2" fontWeight={'500'} >Ingresa tus datos para  continuar con la compra y poder ingresar a Keeper Marketplace.</Typography>

              <form style={{ marginTop: '2em' }}>
                
                <CustomTextField 
                  id="full-name"
                  label="Nombre y Apellido"
                  placeholder="Ingresa tu nombre y apellido"
                  />
                
                <CustomTextField 
                  id="email"
                  label="Email"
                  type="email"
                  autoComplete="email"
                  placeholder="Ingresa tu correo electrónico"
                  />
                
                <CustomTextField 
                  id="password"
                  label="Contraseña"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Ingresa tu contraseña"
                  />
                
                <CustomTextField 
                  id="repeat-password"
                  label="Repite tu Contraseña"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Ingresa nuevamente tu contraseña"
                  />

                  <FormGroup sx={{ paddingLeft: 2, marginBottom: 3 }}>
                    <FormControlLabel sx={{ 
                      '.MuiButtonBase-root': {
                        paddingTop: .25,
                        paddingBottom: .25,
                        color: 'rgba(88, 41, 166, 1)',
                      },
                      '.MuiFormControlLabel-label.Mui-disabled': {
                        color: 'rgba(88, 41, 166, 1)',
                      }
                    }} control={
                      <Checkbox size="small" disabled sx={{
                          color: 'rgba(88, 41, 166, 1)',
                          '&.Mui-checked': {
                            color: 'primary.main',
                          },
                        }}  
                      />
                    } label="Mínimo 8 carácteres" />
                    <FormControlLabel sx={{ 
                      '.MuiButtonBase-root': {
                        paddingTop: .25,
                        paddingBottom: .25,
                        color: 'rgba(88, 41, 166, 1)',
                      },
                      '.MuiFormControlLabel-label.Mui-disabled': {
                        color: 'rgba(88, 41, 166, 1)',
                      }
                    }} control={
                      <Checkbox size="small" disabled sx={{
                          color: 'rgba(88, 41, 166, 1)',
                          '&.Mui-checked': {
                            color: 'primary.main',
                          },
                        }} 
                      />
                    } label="Debe incluir a lo menos 1 número" />
                  </FormGroup>

                  <CustomButton 
                    type="submit" 
                    variant="contained" 
                    fullWidth size="large" 
                    sx={{ borderRadius: 2 }}
                    onClick={ handleRegisterSubmit }
                    >
                      Registrarse
                  </CustomButton>

                  <Box
                    sx={{
                      position: 'relative',
                      textAlign: 'center',
                      mt: 2,
                    }}
                  >
                    <hr style={{ position: 'absolute', width: '100%', zIndex: -1, top: 0, bottom: 0, height: 1, margin: 'auto', backgroundColor: '#EAEAEA', border: 'none' }} />
                    <Typography 
                      fontSize={14} 
                      color={'#ABB4C5'}
                      px={2}
                      sx={{
                        display: 'inline-flex',
                        backgroundColor: '#ffffff'
                      }}
                      >¿ Ta tienes cuenta ?</Typography>
                  </Box>
                  
                  <CustomButton type="submit" 
                    variant="outlined" 
                    fullWidth size="large" 
                    color="primary"
                    sx={{ borderRadius: 2, mt: 2, textTransform: 'none' }}
                    onClick={ () => navigate('/auth/login') }
                    >Ingresar</CustomButton>
                
              </form>
            </Grid>
            
          </Grid>

        </Box>
      </Grid>
    </>
  )
}
