import { Box, Container, Grid, Typography } from "@mui/material";

// import iconEye from ''

const benefits = [
  {
    icon: 'icon-eye.svg',
    title: 'Visualización',
    description: ''
  },
  {
    icon: 'icon-location.svg',
    title: 'Presencia',
    description: 'Estamos en más de 70 comunas de todo el país.'
  },
  {
    icon: 'icon-home-user.svg',
    title: 'Clientes',
    description: 'Más de 15.000 propietarios actualmente.'
  },
  {
    icon: 'icon-segmentation.svg',
    title: 'Segmentación',
    description: 'Posibilidad de personalizar tus lugares de ventas.'
  },
  {
    icon: 'icon-eye.svg',
    title: 'title',
    description: 'description'
  },
]


export const Benefits = () => {
  return (
    <Box id="sectionBenefits" sx={{
      backgroundColor: 'primary.main',
      py: 8,
      color: '#ffffff'
    }}>
      <Container maxWidth={'lg'}>

        <Typography variant="h4" sx={{ 
          fontFamily: 'Raleway', 
          fontWeight: 'bold', 
          textAlign: 'center',
          mb: 6
        }}>Beneficios Keeper</Typography>
        
        <Grid container justifyContent={'space-between'} spacing={5}>
          {
            benefits.map( (item, i) => (
              <Grid key={i} item xs={6} md={3} lg={2} sx={{ display: 'flex', justifyContent: 'start', flexDirection: 'column', alignItems: 'center', marginBottom: 5 }}>
                <Box
                  sx={{
                    width: 150,
                    height: 150,
                    backgroundColor: "#ffffff",
                    borderRadius: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#333',
                    mb: 2
                  }}>
                  <img src={`/src/assets/svg/${item.icon}`} height={'auto'} alt={item.title} />
                </Box>
                <Typography sx={{ textAlign: 'center', mb: 1, fontWeight: 'bold' }} variant="h5">{ item.title }</Typography>
                <Typography sx={{ textAlign: 'center' }}>{ item.description }</Typography>
              </Grid>
            ))
          }
        </Grid>

      </Container>
    </Box>
  )
}
