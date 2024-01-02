import { useState } from "react";
import { Box, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Modal, Radio, RadioGroup, Select, Stack, Typography,useMediaQuery,useTheme } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { CustomButton, CustomTextField } from "src/components";
// import { PricingPlan } from "src/web/components/Pricing";

// const pricingItems: PricingPlan[] = [
//   {
//     color: '#9C94CD',
//     name: 'Básico',
//     ufValue: 1.0,
//     features: [
//       'Publicación hasta 10 productos',
//       'Comunicación a RRSS',
//       'Comunicación a Whatsapp',
//       'Métricas de visitas',
//     ]
//   },
//   {
//     color: '#3984F7',
//     name: 'Silver',
//     ufValue: 1.5,
//     features: [
//       'Publicación hasta 20 productos',
//       'Comunicación a RRSS',
//       'Comunicación a Whatsapp',
//       'Métricas de visitas',
//       'Aparecer en destacados',
//     ]
//   },
//   {
//     color: '#5BC57A',
//     name: 'Gold',
//     ufValue: 2.0,
//     features: [
//       'Publicación hasta 20 productos',
//       'Comunicación a RRSS',
//       'Comunicación a Whatsapp',
//       'Métricas de visitas',
//       'Aparecer en destacados',
//       '1 notificación push semanal',
//       '1 notificación in-App mensual',
//     ]
//   },
// ];

interface BillingInfoMailEditModalProps {
  isEditing: boolean,
  dismissEditing: () => void,
  handleSave: () => void
}

export const BillingInfoPlanEditModal = ({ isEditing, handleSave, dismissEditing }: BillingInfoMailEditModalProps ) => {

  const [value, setValue] = useState(0);
  const [payMode, setPayMode] = useState('yearly');

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const style = {
    width: fullScreen ? '90%' : '70%', // Ancho adaptativo
    top: '50%',
    left: '50%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    paddingX: 6,
    paddingY: 3,
    borderRadius: 8,
    maxWidth: 960
  };

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue((event.target as HTMLInputElement).value);
  // };

  // const handleCheck = (value: string) => {
  //   setValue(value);
  // }

  return (
    <Modal
      open={isEditing}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        
        <Stack direction={'row'} justifyContent={'space-between'} mb={1}>
          <Box>
              <Typography variant={'h4'} fontWeight={'medium'}>Editar información</Typography>
              <Typography variant={'body2'}>Modifica tu plan</Typography>
          </Box>
          <Box>
            <IconButton aria-label="close" onClick={ dismissEditing }>
              <CloseIcon />
            </IconButton>
          </Box>
        </Stack>

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

        <FormControl sx={{ width: '100%' }}>
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
              {/* {
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
              } */}
            </Box>
          </RadioGroup>
        </FormControl>
        
        <Grid container justifyContent={'center'} mt={1} spacing={2}>
          <Grid item xs={4} >
            <CustomButton 
              fullWidth
              variant={'outlined'}
              onClick={ dismissEditing }>
              Cancelar
            </CustomButton>
          </Grid>
          
          <Grid item xs={4} >
            <CustomButton 
              fullWidth
              onClick={ handleSave }
              variant={'contained'}>
              Cambiar plan
            </CustomButton>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  )
}
