import { Paper, Typography, Box, Stack, Divider } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import { Plan } from "src/interfaces/Plan";

interface PricingCardProps {
  plan: Plan,
  payMode: string,
  idx: number
}

export const PricingCard = ({ plan, payMode, idx }: PricingCardProps) => {

  const { name, price, descount, includes } = plan;
  // const navigate = useNavigate();

  return (
    <>
      <Paper elevation={2} sx={{ 
          height: '100%', 
          padding: 2, 
          borderRadius: 1,
          borderTop: 8, borderColor: idx === 0 ? '#9C94CD' : idx === 1 ? '#3984F7' : idx === 2 ? '#5BC57A' : null, 
        }}> 
        <Typography variant="h5" fontWeight={'bold'} textAlign={'center'} mb={2} color={'#717171'}>{ name }</Typography>

        <Box mb={2} sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Box>
            <Typography 
              variant="h2" 
              fontWeight={'bolder'} 
              sx={{ color: (idx === 0 ? '#9C94CD' : idx === 1 ? '#3984F7' : idx === 2 ? '#5BC57A' : null) }}>
              {
                payMode === 'annual' 
                  ? price.annual.toLocaleString('es', { minimumFractionDigits: 1 })
                  : price.monthly.toLocaleString('es', { minimumFractionDigits: 1 })
              }
            </Typography>
          </Box>
          <Stack direction={'column'} justifyContent={'center'} mb={0}>
            <Typography fontWeight={'700'} color={'#999'}>UF + iva</Typography>
            <Typography variant="body2" fontSize={10}>Facturado <br/>
              {
                payMode === 'annual' 
                  ? 'Anual'
                  : 'Mensual'
              }
            </Typography>
          </Stack>
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
          <Box sx={{ borderRight: '1px solid #000000', pr: 1 }}>
            <Typography variant="body1" fontWeight={'700'}>9,6 UF + Iva</Typography>
            <Typography sx={{ fontSize: 10 }}>Facturado anual</Typography>
          </Box>
          <Typography fontWeight={'700'} color={'#999'}>{ descount }% dcto.</Typography>
        </Box>

        <Divider sx={{ my: 3 }}/>
        {/* <Divider sx={{ mt: 2 }}/> */}

        {/* <Stack justifyContent={'center'} my={2}>
          <Button 
            variant={'text'} 
            size={'small'} 
            color={'secondary'}
            disableRipple
            onClick={ () => navigate('/auth/register') }>Obtener plan</Button>
        </Stack> */}

        {/* <Divider sx={{ mb: 2 }}/> */}

        <Box px={2}>
          <Typography variant="body1" fontWeight={'bold'}>El Plan incluye:</Typography>
          <ul style={{ padding: 0, listStylePosition: 'inside', fontSize: 14 }}>
            {
              includes.map( (feature, i) => (
                <li key={i}>{ feature }</li>
              ))
            }
          </ul>
        </Box>
      </Paper>
    </>
  )
}
