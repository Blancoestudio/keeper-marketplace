import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { initMercadoPago, Payment } from '@mercadopago/sdk-react';
import { useEffect } from "react";

interface Props {
  handlePrev: () => void
}

export const FormDataCheckout = ({ handlePrev } : Props) => {
  // TODO: pasar client id a variable de entorno
  useEffect(() => {
    initMercadoPago('APP_USR-043d0fc0-1daf-4ba3-8e63-dac669eeff33', {
      locale: 'es-CL'
    });
  }, []);


  return (
    <Grid container justifyContent={'center'}>
      <Grid item xs={6} pr={3}>

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
            <Typography fontSize={22} fontWeight={600} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              CLP 36.544,42
            </Typography>
          </Stack>
        </Box>
      </Grid>
      <Grid item xs={6} pl={3}>

        <Payment
        initialization={{
          amount: 1000,
          // TODO: recibir id de preferencia desde backend
          preferenceId: '12345678-1234-1234-1234-123456789012',
          items: {
            totalItemsAmount: 1000,
            itemsList: [
              {
                units: 1,
                value: 1000,
                name: 'Plan A',
              },
            ],
          },

        }}
        customization={{
          enableReviewStep: true,
          visual: {
            style: {
              theme: "default",
            },
          },
          paymentMethods: {
            creditCard: "all",
            debitCard: "all",
            mercadoPago: "all",
            maxInstallments: 1,
          },
        }}
        onSubmit={async (param) => {
          console.log(param);
          // TODO: enviar token card al backend
        }}
      />

        
        </Grid>
    </Grid>
  )
}
