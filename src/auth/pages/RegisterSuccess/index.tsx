
import { Button, Grid, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import Logo from 'src/assets/svg/logo_keeper_b.svg';

// interface PropTypes {
//   handleNextStep: () => void
// }

export const RegisterSuccess = ( ) => {

  const navigate = useNavigate();

  return (
    <Grid container justifyContent={'center'} alignItems={'center'} height={'100%'}
    sx={{
      minHeight: 'calc( 100vh - 65px )',
    }}>
      <Grid item xs={12} sm={10} md={8} lg={7} sx={{ textAlign: 'center' }}>
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
        <Button variant="contained" 
          size="large" 
          sx={{ 
            width: '80%',
            my: 4, 
            borderRadius: 2,
            fontFamily: 'Raleway',
            textTransform: 'none',
            fontWeight: 500,
          }}
          onClick={ () => navigate('/auth/businnes-register') }
          >Empecemos</Button>
        <Typography>Un sitio donde podrás potenciar tu negocio, llegando  a mas personas </Typography>
      </Grid>
    </Grid>
  )
}
