import { Box, Button, Container, Divider, Grid, Link, Stack, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { CustomTextField } from "src/components"

export const CheckoutPage = () => {
  const navigate = useNavigate();
  return (
    <Container sx={{ mb: 10 }}>
      <Typography variant={'h4'} fontWeight={'medium'} my={5}>Completa los datos de compra</Typography>

      <Grid container maxWidth={'lg'} spacing={8}>

        <Grid item xs={7}>

          <Grid container columnSpacing={3}>
            <Grid item xs={6}>
              <CustomTextField 
                label="Nombre"
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField 
                label="Apellido"
              />
            </Grid>

            <Grid item xs={6}>
              <CustomTextField 
                label="Región"
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField 
                label="Comuna"
              />
            </Grid>

            <Grid item xs={12}>
              <CustomTextField 
                label="Dirección"
              />
            </Grid>

            <Grid item xs={12}>
              <CustomTextField 
                label="Número de tarjeta"
              />
            </Grid>
            <Grid item xs={8}>
              <CustomTextField 
                label="Vencimiento"
              />
            </Grid>
            <Grid item xs={4}>
              <CustomTextField 
                label="Código de seguridad"
              />
            </Grid>

            <Grid item xs={8} mt={5}>
              <Typography variant={'body2'}>
                Tu privacidad es muy importante para nosotros. Solo usaremos tu información según lo descrito en nuestros 
                <Link> términos de uso</Link>
              </Typography>
            </Grid>
          </Grid>

        </Grid>

        <Grid item xs={5}>

          <Stack direction={'row'} justifyContent={'space-between'} mb={3} mt={3}>
            <Box>
              <Typography variant={'body1'} fontWeight={'bold'}>Plan Básico</Typography>
              <Typography variant={'body2'}>% descuento</Typography>
            </Box>

            <Box textAlign={'end'}>
              <Typography variant={'body1'}>($50 x 12 meses) $600</Typography>
              <Typography variant={'body2'}>$70</Typography>
            </Box>
          </Stack>

          <Stack direction={'row'} justifyContent={'space-between'}>
            <Box>Total</Box>
            <Box>$100</Box>
          </Stack>

          <Divider sx={{ my: 3 }} />

          <Stack direction={'row'} justifyContent={'flex-end'}>
            <Button 
              variant="contained"
              onClick={ () => navigate('/auth/register-success') }
              >Realizar compra</Button>
          </Stack>

        </Grid>
      </Grid>
    </Container>
  )
}
