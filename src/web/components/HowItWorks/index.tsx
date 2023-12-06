import { Box, Container, Grid, Typography } from "@mui/material"

import s from './styles.module.scss'

import graph1 from '../../../assets/images/landing-graph-1.png'
import graph2 from '../../../assets/images/landing-graph-2.png'

import HiwImage1 from "/src/assets/images/hiw-image-1.png";
import HiwImage2 from "/src/assets/images/hiw-image-2.png";
import HiwImage3 from "/src/assets/images/hiw-image-3.png";

export const HowItWorks = () => {
  return (
    <Box id="sectionHow" sx={{
      position: 'relative',
      py: 8,
    }}>
      <img src={graph1} className={ `${s['graph-1']}` } alt="graph" />
      <img src={graph2} className={ `${s['graph-2']}` } alt="graph" />
      
      <Container maxWidth={'lg'}>
        <Typography variant="h4" sx={{ 
          fontFamily: 'Raleway', 
          fontWeight: 'bold', 
          textAlign: 'center',
          mb: 12,
          color: 'primary.main'
        }}>¿Cómo funciona el Markeplace?</Typography>

        <Grid container justifyContent={'center'} spacing={5} mb={15}>
          <Grid item xs={12} sm={6} md={5} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <img src={HiwImage1} alt="how-it-works-graph-1" />
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <Typography variant="h4" sx={{ fontFamily: 'Raleway', fontWeight: 'bold', mb: 2 }}>Elije tu plan.</Typography>
            <Typography>¡Unete a nuestro Marketplace!</Typography>
            <Typography>Elige el plan que más se acomode a tus necesidades y nuestra aplicación te conectará con compradores cercanos a ti. Unete a nuestra comunidad hoy mismo y descubre nuevas oportunidades de negocio.</Typography>
          </Grid>
        </Grid>
        
        <Grid container justifyContent={'center'} spacing={5} mb={15} sx={{ flexDirection: { xs: 'column-reverse', sm: 'row' } }}>
          <Grid item xs={12} sm={6} md={5}>
            <Typography variant="h4" sx={{ fontFamily: 'Raleway', fontWeight: 'bold', mb: 2 }}>Completa tu Registro</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={5} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <img src={HiwImage2} alt="how-it-works-graph-2" />
          </Grid>
        </Grid>

        <Grid container justifyContent={'center'} spacing={5}>
          <Grid item xs={12} sm={6} md={5} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <img src={HiwImage3} alt="how-it-works-graph-3" />
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <Typography variant="h4" sx={{ fontFamily: 'Raleway', fontWeight: 'bold', mb: 2 }}>Listo</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
