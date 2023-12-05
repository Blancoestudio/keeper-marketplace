import { Paper, Typography, Box, Stack, Divider, Button } from "@mui/material";
import { PricingPlan } from ".";
import { useNavigate } from "react-router-dom";

interface PricingCardProps {
  plan: PricingPlan
}

export const PricingCard = ({ plan }: PricingCardProps) => {

  const navigate = useNavigate();
  
  return (
    <Paper elevation={3} sx={{ height: '100%', padding: 2, borderTop: 10, borderColor: plan.color, borderRadius: 2 }}>
      <Typography variant="h5" fontWeight={'bold'} textAlign={'center'} mb={2} color={'#717171'}>
        { plan.name }
      </Typography>

      <Box mb={2} sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Box>
          <Typography variant="h2" fontWeight={'bolder'} color={plan.color}>
            { plan.ufValue.toLocaleString('es', { minimumFractionDigits: 1 }) }
          </Typography>
        </Box>
        <Stack direction={'column'} justifyContent={'center'} mb={0}>
          <Typography fontWeight={'700'} color={plan.color}>UF + iva</Typography>
          <Typography variant="body2" fontSize={10}>Facturado <br/>mensual</Typography>
        </Stack>
      </Box>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
        <Box sx={{ borderRight: '1px solid #000000', pr: 1 }}>
          <Typography variant="body1" fontWeight={'700'}>9,6 UF + Iva</Typography>
          <Typography sx={{ fontSize: 10 }}>Facturado anual</Typography>
        </Box>
        <Typography fontWeight={'700'} color={plan.color}>20%dcto.</Typography>
      </Box>

      <Divider sx={{ mt: 2 }}/>

      <Stack justifyContent={'center'} my={2}>
        <Button 
          variant={'text'} 
          size={'small'} 
          color={'secondary'}
          disableRipple
          onClick={ () => navigate('/auth/register') }>Obtener plan</Button>
      </Stack>

      <Divider sx={{ mb: 2 }}/>

      <Box px={2}>
        <Typography variant="body1" fontWeight={'bold'}>El Plan incluye:</Typography>
        <ul style={{ padding: 0, listStylePosition: 'inside', fontSize: 14 }}>
          {
            plan.features.map( (item, idx) => (
              <li key={idx}>{ item }</li>
            ))
          }
        </ul>
      </Box>
    </Paper>
  )
}
