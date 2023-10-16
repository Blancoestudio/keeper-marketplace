import { Box, Container, Grid, Typography } from "@mui/material"

export const HowItWorks = () => {
  return (
    <Box id="sectionHow" sx={{
      py: 8,
    }}>
      <Container maxWidth={'xl'}>

        <Typography variant="h4" sx={{ 
          fontFamily: 'Raleway', 
          fontWeight: 'bold', 
          textAlign: 'center',
          mb: 12,
          color: 'primary.main'
        }}>¿Cómo funciona el Markeplace?</Typography>

        <Grid container justifyContent={'center'} gap={10} mb={20}>
          <Grid item lg={3}>
            ...
          </Grid>
          <Grid item lg={4}>
            <Typography variant="h4" sx={{ fontFamily: 'Raleway', fontWeight: 'bold', mb: 2 }}>Elije tu plan.</Typography>
            <Typography>¡Unete a nuestro Marketplace!</Typography>
            <Typography>Elige el plan que más se acomode a tus necesidades y nuestra aplicación te conectará con compradores cercanos a ti. Unete a nuestra comunidad hoy mismo y descubre nuevas oportunidades de negocio.</Typography>
          </Grid>
        </Grid>
        
        <Grid container justifyContent={'center'} gap={10} mb={20}>
          <Grid item lg={4}>
            <Typography variant="h4" sx={{ fontFamily: 'Raleway', fontWeight: 'bold', mb: 2 }}>Completa tu Registro</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
          </Grid>
          <Grid item lg={3}>
            ...
          </Grid>
        </Grid>

        <Grid container justifyContent={'center'} gap={10}>
          <Grid item lg={3}>
            ...
          </Grid>
          <Grid item lg={4}>
            <Typography variant="h4" sx={{ fontFamily: 'Raleway', fontWeight: 'bold', mb: 2 }}>Listo</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
