import { useState } from "react";
import { Grid, Box, Typography, FormControl, RadioGroup, FormControlLabel, Radio, List, ListItem, Stack, Divider, Chip } from "@mui/material";
import { CommuneData } from "src/interfaces/Plan";
import { CustomTable } from "./CustomTable";

interface CommunesSelectorTableProps {
  communes: CommuneData[],
  selectedCommunes: string[],
  setSelectedCommunes: React.Dispatch<React.SetStateAction<string[]>>,
  selectedPeriod: string,
  setSelectedPeriod: React.Dispatch<React.SetStateAction<string>>,

  monthlyValue: number,
  setMonthlyValue: React.Dispatch<React.SetStateAction<number>>,
  annualValue: number,
  setAnnualValue: React.Dispatch<React.SetStateAction<number>>
}

export const CommunesSelectorTable = ({ 
  communes, 
  selectedCommunes, 
  setSelectedCommunes, 
  selectedPeriod, 
  setSelectedPeriod,
  monthlyValue,
  setMonthlyValue,
  annualValue,
  setAnnualValue
}: CommunesSelectorTableProps) => {

  const [audience, setAudience] = useState(0);
  // const [monthlyValue, setMonthlyValue] = useState(0);
  // const [annualValue, setAnnualValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPeriod((event.target as HTMLInputElement).value)
  };

  return (
    <Grid container justifyContent={'center'} spacing={2} alignItems={'stretch'}>
      <Grid item xs={7} mb={3}>

        <CustomTable
          communes={ communes }
          selectedCommunes={ selectedCommunes }
          setSelectedCommunes={ setSelectedCommunes }
          
          setAudience={ setAudience }
          setMonthlyValue={ setMonthlyValue }
          setAnnualValue={ setAnnualValue }
        />

      </Grid>

      <Grid item xs={5} mb={3}>

        <Box sx={{ height: '100%', border: '1px solid #E7E7E7', borderRadius: 2, padding: 3, display: 'flex', flexDirection: 'column' }}>
          <Box mb={3}>
            <Typography variant={'h5'} fontWeight={'900'} mb={1}>Simulador</Typography>
            <Typography variant={'body2'} color={'#929292'}>Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod temp.</Typography>
          </Box>

          <Typography variant={"caption"}>Seleccionar periodo</Typography>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={selectedPeriod}
              onChange={handleChange}
            >
              <FormControlLabel value="monthly" control={<Radio />} label="Pago mensual" />
              <FormControlLabel value="annually" control={<Radio />} label="Pago anual" />
            </RadioGroup>
          </FormControl>

          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', li: { paddingLeft: 0, paddingY: 2, flexDirection: 'column', alignItems: 'flex-start' } }}>
            <ListItem>
              <Stack direction={'row'} sx={{ width: '100%', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography variant={'body2'} fontFamily={'Raleway'} fontWeight={'900'}>COMUNAS</Typography>
                  <Typography variant={'caption'} color={'#707070'} fontWeight={400}>Total seleccionadas</Typography>
                </Box>
                <Box sx={{  }}>
                  <Typography variant={'h5'} fontFamily={'Roboto'} fontWeight={300}>{ selectedCommunes.length }</Typography>
                </Box>
              </Stack>
            </ListItem>

            <Divider />

            <ListItem>
              <Stack direction={'row'} sx={{ width: '100%', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography variant={'body2'} fontFamily={'Raleway'} fontWeight={'900'}>AUDIENCIA</Typography>
                  <Typography variant={'caption'} color={'#707070'} fontWeight={400}>Total Casas/Deptos</Typography>
                </Box>
                <Box sx={{  }}>
                  <Typography variant={'h5'} fontFamily={'Roboto'} fontWeight={300}>{ audience.toLocaleString() }</Typography>
                </Box>
              </Stack>
            </ListItem>

            <Divider />

            {
              selectedPeriod === 'annually'
                ? (
                  <ListItem>
                    <Stack direction={'row'} sx={{ width: '100%', justifyContent: 'space-between' }}>
                      <Stack direction={'row'} alignItems={'center'} gap={1}>
                        <Box>                      
                          <Typography variant={'body2'} fontFamily={'Raleway'} fontWeight={'900'}>UF</Typography>
                          <Typography variant={'body1'} color={'#707070'} fontWeight={400} fontSize={12}>Total</Typography>
                        </Box>
                        <Chip label="Pago anual" color="success" variant="outlined" size={'small'} sx={{ fontSize: 9, fontWeight: 900, textTransform: 'uppercase' }} />
                      </Stack>
                      <Stack direction={'row'} alignItems={'center'} gap={1}>
                        <Chip label="20% Descuento" color="info" variant="outlined" size={'small'} sx={{ fontSize: 9, fontWeight: 900, textTransform: 'uppercase' }} />
                        <Typography variant={'h5'} fontFamily={'Roboto'} fontWeight={300}>{ annualValue.toLocaleString() }</Typography>
                      </Stack>
                    </Stack>
                  </ListItem>
                ) : (
                  <ListItem>
                    <Stack direction={'row'} sx={{ width: '100%', justifyContent: 'space-between' }}>
                      <Stack direction={'row'} alignItems={'center'} gap={1}>
                        <Box>                      
                          <Typography fontFamily={'Roboto'} variant={'body2'} fontWeight={'900'}>UF</Typography>
                          <Typography fontFamily={'Roboto'} variant={'body1'} color={'#707070'} fontWeight={400} fontSize={12}>Total</Typography>
                        </Box>
                        <Chip label="Pago Mensual" color="primary" variant="outlined" size={'small'} sx={{ fontSize: 9, fontWeight: 900, textTransform: 'uppercase' }} />
                      </Stack>
                      <Typography variant={'h5'} fontFamily={'Roboto'} fontWeight={300}>{ monthlyValue.toLocaleString() }</Typography>
                    </Stack>
                  </ListItem>
                )
            }
            
          </List>

        </Box>
      </Grid>
    </Grid>
  )
}
