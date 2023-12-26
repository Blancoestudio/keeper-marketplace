import { useEffect } from "react";

import { Box, Container, Grid, Typography, Paper, List, ListItem, ListItemIcon, ListItemText, Stack } from "@mui/material"

import { CustomButton } from "src/components";
import { PlanService } from "src/services/PlanService";

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import GppGoodIcon from '@mui/icons-material/GppGood';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';


export const Pricing = () => {

  const getPlans = async () => {

    const result = await PlanService.getPlans();
    if (!result.status) return

  }

  useEffect(() => {
    getPlans();
  }, [])
  
  
  return (
    <Box id="sectionPricing" my={10}>
      <Container maxWidth={'lg'}>

        <Grid container justifyContent={'center'} spacing={2}>
          <Grid item xs={8} mb={3}>
            <Typography variant={'h4'} fontWeight={'900'} textAlign={'center'} mb={2}>Precios que se adaptan a tu negocio</Typography>
            <Typography variant={'body1'} textAlign={'center'}>Aprovecha los distintos beneficios que tenemos para ti y tu negocio. Nuestros planes varían según la cantidad de comunas que eliges.</Typography>
          </Grid>
          <Grid item xs={10} mb={3}>
            <Paper sx={{ borderRadius: 4 }}>

              <Grid container>
                <Grid item xs={4} sx={{ backgroundColor: '#EEE5FF', padding: 5, textAlign: 'center', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
                  <Typography variant={'h5'}>DESCUENTO</Typography>
                  <Typography color={'primary'} sx={{ fontSize: 80, fontWeight: '900', lineHeight: 1 }}>20%</Typography>
                  <Typography mb={3}>PLAN ANUAL</Typography>
                  <CustomButton variant={'contained'} fullWidth sx={{ mb: 2 }}>SIMULADOR</CustomButton>
                  <CustomButton variant={'outlined'} fullWidth>CREAR TIENDA</CustomButton>
                </Grid>

                <Grid item xs={8} sx={{ padding: 5 }} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                  <Typography variant={'body1'} mb={3}>Access these features when you get this pricing package for your business.</Typography>

                  <Grid container>
                    <Grid item xs={6}>
                      <List dense>
                        <ListItem>
                          <ListItemIcon sx={{ minWidth: 35 }}>
                            <CheckCircleIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText
                            primary="Publicación hasta 20 productos"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon sx={{ minWidth: 35 }}>
                            <CheckCircleIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText
                            primary="Comunicación a RRSS"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon sx={{ minWidth: 35 }}>
                            <CheckCircleIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText
                            primary="Comunicación a Whatsapp"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon sx={{ minWidth: 35 }}>
                            <CheckCircleIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText
                            primary="Métricas de visitas"
                          />
                        </ListItem>
                      </List>
                    </Grid>
                    <Grid item xs={6}>
                      <List dense>
                        <ListItem>
                          <ListItemIcon sx={{ minWidth: 35 }}>
                            <CheckCircleIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText
                            primary="Figurar en los destacados."
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon sx={{ minWidth: 35 }}>
                            <CheckCircleIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText
                            primary="1 notificación push semanal"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon sx={{ minWidth: 35 }}>
                            <CheckCircleIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText
                            primary="1 notificación in-App mensual"
                          />
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

            </Paper>
          </Grid>

          <Grid item xs={12} mb={3}>
            <Grid container justifyContent={'center'} spacing={5}>
              <Grid item xs={3}>
                <Stack direction={'row'} alignItems={'center'} gap={2} justifyContent={'center'}>
                  <GppGoodIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                  <Typography variant={'inherit'} fontWeight={500}>30 days money back Guarantee</Typography>
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Stack direction={'row'} alignItems={'center'} gap={2} justifyContent={'center'}>
                  <LocalOfferIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                  <Typography variant={'inherit'} fontWeight={500}>No setup fees 100% hassle-free</Typography>
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Stack direction={'row'} alignItems={'center'} gap={2} justifyContent={'center'}>
                  <RotateLeftIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                  <Typography variant={'inherit'} fontWeight={500}>No monthly subscription Pay once and for all</Typography>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </Container>
    </Box>
  )
}
