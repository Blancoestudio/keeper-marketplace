import { useEffect, useState } from "react";
import { PlanService } from "src/services/PlanService";
import { CommuneData } from "src/interfaces/Plan";

import { Typography, Grid, Container } from "@mui/material";
import { CommunesSelectorTable } from "src/components/CommunesSelectorTable";

export const Simulator = () => {

  const [communes, setCommunes] = useState<CommuneData[]>([]);
  // const [selectedCommunes, setSelectedCommunes] = useState<string[]>([]);
  // const [selectedPeriod, setSelectedPeriod] = useState<string>('monthly');

  const getPlans = async () => {
    const result = await PlanService.getPlans();
    if (!result.status) return

    setCommunes(result.data!)
  }

  useEffect(() => {
    getPlans();
  }, [])

  return (
    <Container sx={{ py: 10 }} id={'simulatorSection'}>
      <Grid container justifyContent={'center'} mb={3}>
        <Grid item xs={9} mb={3}>
          <Typography variant={'h4'} fontWeight={'900'} textAlign={'center'} mb={2}>Busquemos un plan que se acomode a tu negocio</Typography>
          <Typography variant={'body1'} textAlign={'center'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis no</Typography>
        </Grid>
      </Grid>

      {/* <Box mb={3}>
        <Typography><strong>ID Comunas:</strong></Typography>
        <ul style={{ margin: 0 }}>{ communes.map( (item, i) => <li key={i}>{item._id}</li>) }</ul>
        
        <Typography><strong>ID Comunas seleccionadas:</strong> { JSON.stringify(selectedCommunes) }</Typography>
        <Typography><strong>Periodo seleccionado:</strong> { selectedPeriod }</Typography>
      </Box> */}

      <Grid container justifyContent={'center'} mb={3}>
        <Grid item xs={10} mb={3}>
          
          <CommunesSelectorTable 
            communes={communes} 
            // selectedCommunes={selectedCommunes}
            // setSelectedCommunes={setSelectedCommunes}
            // selectedPeriod={selectedPeriod}
            // setSelectedPeriod={setSelectedPeriod}
          />

        </Grid>
      </Grid>
    </Container>
  )
}
