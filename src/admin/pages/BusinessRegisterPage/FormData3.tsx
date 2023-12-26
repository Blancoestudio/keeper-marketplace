import { useState } from "react";
import { FormControl, RadioGroup, FormControlLabel, Radio, Box, Typography, Stack, Grid, MenuItem, Select } from "@mui/material"
import { CustomTextField } from "src/components";

const pricingItems = [
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

export const FormData3 = () => {

  const [value, setValue] = useState(0);
  const [payMode, setPayMode] = useState('yearly');

  return (
    <>
      <Grid container justifyContent={'space-between'} alignItems={'center'}>
        <Grid item xs={12} md={8} justifyContent={'center'}>

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

        <Grid item xs={12} md={4} display={'flex'} justifyContent={'flex-end'}>

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
      
      <FormControl sx={{ width: '100%', paddingY: 1 }}>
        <RadioGroup row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={value}
          onChange={(event) => setValue(parseInt(event.target.value))}
        >
          <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            gap: 2,
          }}>
            {
              pricingItems.map( ({ color, name, ufValue, features }, id) => (
                <Box key={id} sx={{ width: '33.3%', border: '1px solid #C3C3C3', borderRadius: 4, flexGrow: 1, paddingY: 2, paddingX: 3, cursor: 'pointer' }}
                  onClick={ () => setValue(() => id) }>
                  <FormControlLabel value={id} control={<Radio />} label="" />

                  <Typography fontWeight={'bold'} fontSize={20} color={ value === id ? color : '#717171' }>Plan { name }</Typography>
                  
                  <Box mb={2} sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                    <Typography variant="h2" fontWeight={'bolder'} color={ value === id ? color : '#333333' }>
                      { ufValue.toLocaleString('es', { minimumFractionDigits: 1 }) }
                    </Typography>
                    <Stack direction={'column'} justifyContent={'center'} mb={0}>
                      <Typography fontWeight={'700'} color={'#333333'}>UF + iva</Typography>
                      <Typography variant="body2" fontSize={10}>Facturado <br/>mensual</Typography>
                    </Stack>
                  </Box>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ borderRight: '1px solid #000000', pr: 1 }}>
                      <Typography variant="body1" fontWeight={'700'}>9,6 UF + Iva</Typography>
                      <Typography sx={{ fontSize: 10 }}>Facturado anual</Typography>
                    </Box>
                    <Typography fontWeight={'700'} color={ value === id ? color : '#717171' }>20%dcto.</Typography>
                  </Box>

                  <ul style={{ padding: 0, listStylePosition: 'inside', fontSize: 14 }}>
                    {
                      features.map( (item, idx) => (
                        <li key={idx}>{ item }</li>
                      ))
                    }
                  </ul>
                </Box>
              ))
            }
          </Box>
        </RadioGroup>
      </FormControl>
    </>
  )
}
