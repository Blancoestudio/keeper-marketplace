import { 
  Box, 
  Grid, 
  Typography, 
} from "@mui/material";
import { CustomButton } from "src/components";
import { BillingInfoMail } from './BillingInfoMail';
import { BillingInfoPlan } from "./BillingInfoPlan";

export const BillingInfo = () => {

  return (
    <Box py={5} className="animate__animated animate__fadeIn">
      <Grid container justifyContent={'center'}>
        <Grid item xs={8}>

          <Typography variant={'h6'} color={'primary'} mb={3}>Información de facturación</Typography>

          <BillingInfoMail/>

          <BillingInfoPlan />
          
          
          <Grid container rowSpacing={2} columnSpacing={3} mb={3}>
            <Grid item xs={7}>
              <Typography variant="body1" display="block" gutterBottom>•••• •••• •••• 1234</Typography>
              <Typography variant="body2" display="block" gutterBottom>Tu próxima fecha de facturación es el 1 de diciembre de 2023.</Typography>
            </Grid>
            <Grid item xs={5} textAlign={'end'}>
              <CustomButton 
                component="label"
                variant="text" 
                size="large" 
                sx={{ 
                  borderRadius: 2,
                  textTransform: 'none'
                }}
              >
                Administrar información de pago 
              </CustomButton>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </Box>
  )
}
