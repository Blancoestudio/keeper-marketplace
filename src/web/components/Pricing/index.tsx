import { Box, Container, Grid, Typography } from "@mui/material"

export const Pricing = () => {
  return (
    <Box id="sectionPricing" my={10}>
      <Container maxWidth={'xl'}>
        <Grid container justifyContent={'center'}>
          <Grid item lg={8}>

            <Typography variant="h4" sx={{ 
              fontFamily: 'Raleway', 
              fontWeight: 'bold', 
              textAlign: 'center',
              mb: 3,
              color: 'primary.main'
            }}>Planes</Typography>
            
            <Typography>Aprovecha los distintos beneficios que tenemos para ti y tu negocio. Nuestros planes varían según la cantidad de comunas que eliges.</Typography>

          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
