
import { useNavigate } from "react-router-dom";

import { Grid, Typography } from "@mui/material"

import { CustomButton } from "src/components";

import Logo from 'src/assets/svg/logo_keeper_b.svg';

export const WelcomePage = ( ) => {

  const navigate = useNavigate();

  return (
    <Grid container justifyContent={'center'} gap={1} alignItems={'center'} height={'calc( 100vh - 65px )'} sx={{ border: '1px solid blue' }}>

      <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
        <Typography variant="h1" fontWeight={'400'}>¡ Bienvenidos !</Typography>
        <Typography variant="h3" sx={{ 
            display: 'flex', 
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            justifyContent: 'center', 
            alignItems: 'center' 
          }}>
          a <img src={ Logo } alt={'kepper'} /> Marketplace
        </Typography>
        <CustomButton variant="contained" 
          size="large" 
          sx={{ 
            width: '80%',
            my: 4, 
            borderRadius: 2,
            fontFamily: 'Raleway',
            textTransform: 'none',
            fontWeight: 500,
          }}
          onClick={ () => navigate('/admin/dashboard') }
          >Empecemos</CustomButton>
        <Typography>Un sitio donde podrás potenciar tu negocio, llegando  a mas personas </Typography>
      </Grid>
    </Grid>

  )
}
