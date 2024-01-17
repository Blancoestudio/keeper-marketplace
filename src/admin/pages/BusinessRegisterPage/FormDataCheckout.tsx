import { Box, Divider, Grid, List, ListItem, Stack, Typography } from "@mui/material";
import { initMercadoPago, Payment } from '@mercadopago/sdk-react';
import { useEffect } from "react";

export const FormDataCheckout = () => {
  // TODO: pasar client id a variable de entorno
  useEffect(() => {
    initMercadoPago('APP_USR-043d0fc0-1daf-4ba3-8e63-dac669eeff33', {
      locale: 'es-CL'
    });
  }, []);


  return (
    <Grid container justifyContent={'center'}>
      <Grid item xs={6}>

        <Box sx={{ height: '100%', border: '1px solid #E7E7E7', borderRadius: 2, padding: 3, display: 'flex', flexDirection: 'column' }}>
          <Box>
            <Typography variant={'h5'} fontWeight={'900'} mb={1}>Resumen</Typography>
            <Typography variant={'body2'} color={'#929292'}>Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod temp.</Typography>
          </Box>

          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', li: { paddingLeft: 0, paddingY: 2, flexDirection: 'column', alignItems: 'flex-start' } }}>
            <ListItem>
              <Stack direction={'row'} sx={{ width: '100%', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography variant={'body2'} fontFamily={'Raleway'} fontWeight={'900'}>PLAN</Typography>
                  <Typography variant={'caption'} color={'#707070'} fontWeight={400}>Periodo de pago</Typography>
                </Box>
                <Box sx={{  }}>
                  <Typography variant={'h5'} fontFamily={'Roboto'} fontWeight={300}>...</Typography>
                </Box>
              </Stack>
            </ListItem>

            <Divider />

            <ListItem>
              <Stack direction={'row'} sx={{ width: '100%', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography variant={'body2'} fontFamily={'Raleway'} fontWeight={'900'}>COMUNAS</Typography>
                  <Typography variant={'caption'} color={'#707070'} fontWeight={400}>Total seleccionadas</Typography>
                </Box>
                <Box sx={{  }}>
                  <Typography variant={'h5'} fontFamily={'Roboto'} fontWeight={300}>...</Typography>
                </Box>
              </Stack>
            </ListItem>

            <Divider />

            <ListItem>
              <Stack direction={'row'} sx={{ width: '100%', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography variant={'body2'} fontFamily={'Raleway'} fontWeight={'900'}>TOTAL</Typography>
                  <Typography variant={'caption'} color={'#707070'} fontWeight={400}>Precio a pagar</Typography>
                </Box>
                <Box sx={{  }}>
                  <Typography variant={'h5'} fontFamily={'Roboto'} fontWeight={300}>...</Typography>
                </Box>
              </Stack>
            </ListItem>

          </List>

        </Box>

      </Grid>
      <Grid item xs={6}>

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
