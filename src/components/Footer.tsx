import { Box, Container, Grid, Typography, Divider } from '@mui/material';
import Logo from 'src/assets/svg/logo_keeper.svg';

export const Footer = () => {
  return (
    <Box
      component={'footer'}
      sx={{
        backgroundColor: 'primary.main',
        color: '#ffffff',
      }}
    >
      <Container>
        <Grid container py={5}>
          <Grid item xs={3}>
            <img src={Logo} width={200} alt="keeper" />
          </Grid>
        </Grid>
        <Divider sx={{ borderColor: '#B3B3B3' }} />
        <Grid
          container
          sx={{
            borderTop: 'px solid #fff',
            py: 3,
            display: 'flex',
          }}
        >
          <Grid item>
            <Typography variant={'caption'}>Powered by Blanco Estudio</Typography>
          </Grid>
        </Grid>
      </Container>
      
    </Box>
  )
}
