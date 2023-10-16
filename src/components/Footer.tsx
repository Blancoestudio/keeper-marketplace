import { Box, Container, Grid, Typography } from "@mui/material"
import Logo from '../assets/svg/logo_keeper.svg';

export const Footer = () => {
  return (
    <Box
      component={'footer'}
      sx={{
        backgroundColor: 'primary.main',
        color: '#ffffff',
        pt: 4,
        pb: 1
      }}
    >
      <Container>
        <Grid container py={3}>
          <Grid item xs={3}>
            <img src={Logo} width={250} alt="keeper" />
          </Grid>
        </Grid>

        <Grid
          sx={{
            borderTop: '1px solid #fff',
            pt: 1,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Typography sx={{ m: 0, p: 0 }}>Powered by Blanco Estudio</Typography>
        </Grid>
      </Container>
    </Box>
  )
}
