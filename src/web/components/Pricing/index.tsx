import { Box, Container, FormControl, FormControlLabel, Grid, MenuItem, Radio, RadioGroup, Select, Stack, Typography } from "@mui/material"
import { PricingCard } from "./PricingCard";
import { CustomTextField } from "src/components";
import { useState } from "react";

export interface PricingPlan {
  color: string,
  name: string,
  ufValue: number,
  features: string[]
}

const pricingItems: PricingPlan[] = [
  {
    color: '#9C94CD',
    name: 'Básico',
    ufValue: 1.0,
    features: [
      'Publicación hasta 10 productos',
      'Comunicación a RRSS',
      'Comunicación a Whatsapp',
      'Métricas de visitas',
    ]
  },
  {
    color: '#3984F7',
    name: 'Silver',
    ufValue: 1.5,
    features: [
      'Publicación hasta 20 productos',
      'Comunicación a RRSS',
      'Comunicación a Whatsapp',
      'Métricas de visitas',
      'Aparecer en destacados',
    ]
  },
  {
    color: '#5BC57A',
    name: 'Gold',
    ufValue: 2.0,
    features: [
      'Publicación hasta 20 productos',
      'Comunicación a RRSS',
      'Comunicación a Whatsapp',
      'Métricas de visitas',
      'Aparecer en destacados',
      '1 notificación push semanal',
      '1 notificación in-App mensual',
    ]
  },
];

export const Pricing = () => {

  const [payMode, setPayMode] = useState('yearly');
  
  return (
    <Box id="sectionPricing" my={10}>
      <Container maxWidth={'lg'}>

        <Typography variant="h4" sx={{ 
          fontFamily: 'Raleway', 
          fontWeight: 'bold', 
          textAlign: 'center',
          mb: 3,
          color: 'primary.main'
        }}>Planes</Typography>
        
        <Typography mb={5} textAlign={'center'}>Aprovecha los distintos beneficios que tenemos para ti y tu negocio. Nuestros planes varían según la cantidad de comunas que eliges.</Typography>

        <Grid container justifyContent={'space-between'} alignItems={'center'} mb={5}>
          <Grid item xs={12} md={6} justifyContent={'center'}>

            <Stack direction={'row'} alignItems={'center'} gap={2}>
              <Typography>Ajusta el número de comunas del equipo:</Typography>
              <FormControl sx={{ width: 150, marginBottom: 0 }} variant="standard">
                <Select
                  input={<CustomTextField />}
                  label="Age"
                  defaultValue={2}
                  className="commune-selector"
                >
                  <MenuItem value={1}>1 Comuna</MenuItem>
                  <MenuItem value={2}>2 Comunas</MenuItem>
                </Select>
              </FormControl>
            </Stack>

          </Grid>

          <Grid item xs={12} md={6} display={'flex'} justifyContent={'flex-end'}>

            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={payMode}
                onChange={ e => setPayMode( e.target.value ) }
              >
                <FormControlLabel value="monthly" control={<Radio />} label="Mensual" />
                <FormControlLabel value="yearly" control={<Radio />} label="Anual" />
              </RadioGroup>
            </FormControl>

          </Grid>
        </Grid>

        <Grid container gap={3} justifyContent={'center'}>
          {
            pricingItems.map( (plan, idx) => (
              <Grid item key={idx} xs={9} sm={6} md={3}>
                <PricingCard plan={plan} />
              </Grid>
            ))
          }
        </Grid>

      </Container>
    </Box>
  )
}
