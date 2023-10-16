import { Box, Button, Container, Grid, Typography } from "@mui/material"
import Logo from '../../assets/svg/logo_keeper.svg'

export const MainBanner = () => {
  return (
    <Box id="sectionMainBanner" sx={{
      py: 8
    }}>
      <Container maxWidth={'xl'}>
        
        <Box sx={{
          borderRadius: 10,
          py: 10,
          px: 5,
          backgroundColor: 'primary.main',
          color: "#ffffff"
        }}>
          <Grid container justifyContent={'center'}>
            <Grid item lg={9}>

              <Grid container>
                <Grid item lg={4}>

                  <img src={Logo} alt="Keeper" />
                  <Typography variant="h5" sx={{ fontFamily: 'Raleway', fontWeight: 'bold', marginBottom: 1 }}>Acertando tu negocio</Typography>
                  <Typography mb={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis no</Typography>
                  <Button 
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{
                      backgroundColor: "#ffffff",
                      color: 'primary.main',
                      borderRadius: 2,
                      textTransform: 'capitalize',
                      '&:hover': {
                        backgroundColor: '#ffffff',
                      },
                    }}
                    >Contrata tu plan</Button>

                </Grid>
              </Grid>

            </Grid>
          </Grid>
        </Box>

      </Container>
    </Box>
  )
}
