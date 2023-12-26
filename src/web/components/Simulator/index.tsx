import { useEffect, useState } from "react";
import { Box, Typography, Grid, Container, List, ListItem, Divider, FormControl, FormControlLabel, Radio, RadioGroup, Chip, Stack } from "@mui/material"
import { CustomButton } from "src/components";
import { PlanService } from "src/services/PlanService";



import CustomTable from "./CustomTable";
import { CommuneData } from "src/interfaces/Plan";

export const Simulator = () => {

  const [payFrecuency, setPayFrecuency] = useState('monthly');
  const [communes, setCommunes] = useState<CommuneData[]>([]);
  const [communesSelected, setcommunesSelected] = useState(0);
  const [audience, setAudience] = useState(0);
  const [monthlyValue, setMonthlyValue] = useState(0);
  const [annualValue, setAnnualValue] = useState(0);

  const getPlans = async () => {

    const result = await PlanService.getPlans();
    if (!result.status) return

    setCommunes(result.data!)
    // console.log('data: ', result.data);
    
    
    // setPlans(result.data!)

    // const { data, error } = await PlanService.getPlans();
    // if (!error) {
    //   setPlans(data)
    // }

  }

  useEffect(() => {
    getPlans();
  }, [])

  // useEffect(() => {
    // console.log(communes);
  // }, [communes]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPayFrecuency((event.target as HTMLInputElement).value);
  };

  return (
    <Container sx={{ py: 10 }}>
      <Grid container justifyContent={'center'} mb={3}>
        <Grid item xs={8} mb={3}>
          <Typography variant={'h4'} fontWeight={'900'} textAlign={'center'} mb={2}>Busquemos un plan que se acomode a ti </Typography>
          <Typography variant={'body1'} textAlign={'center'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis no</Typography>
        </Grid>
      </Grid>
      
      <Grid container justifyContent={'center'} spacing={2} alignItems={'stretch'}>
        <Grid item xs={8} mb={3}>

          <CustomTable 
            communes={ communes } 
            setcommunesSelected={ setcommunesSelected }
            setAudience={ setAudience }
            setMonthlyValue={ setMonthlyValue }
            setAnnualValue={ setAnnualValue }
            />

        </Grid>
        <Grid item xs={4} mb={3}>
          <Box sx={{ height: '100%', border: '1px solid #E7E7E7', borderRadius: 2, padding: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant={'h5'} fontWeight={'900'} mb={1}>Simulador</Typography>
              <Typography variant={'body2'} color={'#929292'}>Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod temp.</Typography>
            </Box>

            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={payFrecuency}
                onChange={handleChange}
              >
                <FormControlLabel value="monthly" control={<Radio />} label="Pago mensual" />
                <FormControlLabel value="yearly" control={<Radio />} label="Pago anual" />
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
                    <Typography variant={'h5'} fontFamily={'Roboto'} fontWeight={300}>{ communesSelected.toLocaleString() }</Typography>
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
                payFrecuency === 'yearly'
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

            <CustomButton variant={'contained'} fullWidth children={'Crear tienda'} />
          </Box>
        </Grid>
      </Grid>

    </Container>
  )
}
