import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface Props {
  handlePrev: () => void
}

export const FormDataCheckout = ({ handlePrev } : Props) => {


  return (
    <Grid container justifyContent={'center'}>
      <Grid item xs={6}>

        <Box py={5}>
          <Stack direction={'row'} justifyContent={'space-between'} mb={3}>
            <Typography variant={'h5'} color={'#575757'}  fontWeight={'bold'}>Resumen</Typography>
          </Stack>
          <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} mb={2}>
            <Typography variant={'subtitle1'} color={'#575757'} >Datos básicos</Typography>
            <Typography variant={'subtitle1'} color={'#575757'}  sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircleIcon color={'success'} /> Listo
            </Typography>
          </Stack>
          <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} mb={2}>
            <Typography variant={'subtitle1'} color={'#575757'} >Datos de contacto</Typography>
            <Typography variant={'subtitle1'} color={'#575757'}  sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircleIcon color={'success'} /> Listo
            </Typography>
          </Stack>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Box>
              <Typography variant={'h6'}>Plan Básico</Typography>
              <Typography variant={'subtitle1'} color={'#575757'}  lineHeight={1}>1,0 UF Mensuales</Typography>
            </Box>
            <Typography>
              <Button 
                variant={'text'} 
                size={'small'} 
                sx={{ textDecoration: 'underline' }}
                onClick={ handlePrev }
                >Cambiar plan</Button>
            </Typography>
          </Stack>
        </Box>

        <Divider />

        <Box pt={5}>
          <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} mb={2}>
            <Typography>Total a pagar:</Typography>
            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              CLP 36.544,42
            </Typography>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  )
}
