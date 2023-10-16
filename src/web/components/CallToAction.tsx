import { Button, Container, Grid, Typography } from "@mui/material"

export const CallToAction = () => {
  return (
    <Container id="sectionCallToAction" maxWidth={'xl'} sx={{ my: 10 }}>
      <Grid container justifyContent={'center'} gap={10}>
        <Grid item lg={4}>
          <Typography variant="h4" sx={{ fontFamily: 'Raleway', fontWeight: 'bold', mb: 2 }}>Una mayor visibilidad</Typography>
          <Typography mb={3}>En Keeper  queremos proporcionar a los vendedores una plataforma eficiente y efectiva para aumentar sus ventas y rentabilidad.</Typography>
          <Typography>Al ofrecer a los usuarios registrados una opción para mejorar la visibilidad de sus productos, estamos seguros de que podemos ayudarles a lograr estos objetivos.</Typography>
          <Button variant="contained" fullWidth size="large" sx={{ 
              mt: 4, 
              borderRadius: 2,
              fontFamily: 'Raleway',
              textTransform: 'none',
              fontWeight: 500
            }}>Contrata tu plan</Button>
        </Grid>
        <Grid item lg={4}>Item</Grid>
      </Grid>
    </Container>
  )
}
