import { Link as LinkRouter } from 'react-router-dom';
import { AppBar, Box, Button, ButtonProps, Hidden, IconButton, Toolbar, Typography, styled } from "@mui/material"
import Logo from 'src/assets/svg/logo_keeper.svg';
import { purple } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';


const ButtonCmp = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[100]),
  textTransform: 'capitalize',
  backgroundColor: "#fff",
  fontFamily: 'Raleway', 
  fontWeight: 'bold',
  letterSpacing: 'normal',
  '&:hover': {
    backgroundColor: theme.palette.getContrastText(purple[900]),
  },
}));

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }} component={'header'}>
      <AppBar position="static" sx={{ 
            background: "url('/src/assets/images/bg-navbar.png')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
           }}>
        <Toolbar>
          <Box sx={{ 
              flexGrow: 1, 
              display: 'flex', 
              alignItems: 'center' 
            }}>
              <LinkRouter to={'/'}>
                <img src={Logo} alt="keeper" />
              </LinkRouter>
          </Box>
          <Hidden smUp>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>

          <Hidden smDown>
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: 2,
              }}>
              <LinkRouter to={'/'} style={{ textDecoration: 'none' }}>
                <Typography 
                  sx={{ color: "#ffffff", fontFamily: 'Raleway', fontWeight: 'bold' }}
                >Contáctanos</Typography>
              </LinkRouter>
              <LinkRouter to={'/'} style={{ textDecoration: 'none' }}>
                <Typography 
                  sx={{ color: "#ffffff", fontFamily: 'Raleway', fontWeight: 'bold' }}
                >Planes</Typography>
              </LinkRouter>
              
              <LinkRouter to={'/auth/register'}>
                <ButtonCmp component={'button'} sx={{ textDecoration: 'none' }}>Iniciar sesión</ButtonCmp>
              </LinkRouter>
            </Box>
          </Hidden>

        </Toolbar>
      </AppBar>
    </Box>
  )
}
