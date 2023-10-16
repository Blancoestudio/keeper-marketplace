import { Box, Button, Checkbox, Container, FormControlLabel, FormGroup, Grid, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { TextFieldCmp } from "../../components/TextFieldCmp"
import theme from "../../theme/theme"


export const RegisterPage = () => {
  return (
    <AuthLayout>
      <Container maxWidth={'xl'} sx={{ height: '100%' }}>
        <Grid container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >

          <Grid item xs={12} sm={10} lg={8}>
            <Box
              p={5}
              sx={{
                borderRadius: '20px',
                boxShadow: '0 4px 10px 5px rgba(0, 0, 0, .1)',
              }}
            >
              
              <Grid container gap={1}>
                <Grid item xs sm sx={{ 
                    borderRight: '2px solid', 
                    borderColor: 'primary.main',
                    [theme.breakpoints.down('md')]: {
                      border: 'none'
                    },
                  }}>...</Grid>
                <Grid item xs={12} md={7} px={2}>
                  
                  <Typography variant="h5" fontWeight={'500'} mb={1}>Registro</Typography>
                  <Typography fontWeight={'500'} >Ingresa tus datos para  continuar con la compra y poder ingresar a Keeper Marketplace.</Typography>

                  <form style={{ marginTop: '2em' }}>
                    
                    <TextFieldCmp 
                      label="Nombre y Apellido"
                      placeholder="Ingresa tu nombre y apellido"
                      />
                    
                    <TextFieldCmp 
                      label="Email"
                      placeholder="Ingresa tu correo electrónico"
                      type="email"
                      />
                    
                    <TextFieldCmp 
                      label="Contraseña"
                      placeholder="Ingresa tu contraseña"
                      type="password"
                      />
                    
                    <TextFieldCmp 
                      label="Repite tu Contraseña"
                      placeholder="Ingresa nuevamente tu contraseña"
                      type="password"
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

                      <Button type="submit" variant="contained" fullWidth size="large" sx={{ borderRadius: 2 }}>Continuar</Button>
                    
                  </form>

                </Grid>
              </Grid>

            </Box>
          </Grid>

        </Grid>
      </Container>
    </AuthLayout>
  )
}
