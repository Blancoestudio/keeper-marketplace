import { 
  Box, 
  Grid, 
  Typography, 
  // Button, 
  // Stack, 
} from "@mui/material";

export const BillingInfo = () => {
  return (
    <Box py={5}>
      <Grid container justifyContent={'center'}>
        <Grid item xs={10}>

          <Typography variant={'h6'} color={'primary'} mb={3}>Plan:</Typography>
          <Grid container rowSpacing={2} columnSpacing={3} mb={5}>
            <Grid item xs={6}>
              <Typography variant="caption" display="block" gutterBottom>Nombre del Plan</Typography>
              <Typography variant="body1" display="block" gutterBottom>Plan Básico</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="caption" display="block" gutterBottom>Valor del plan</Typography>
              <Typography variant="body1" display="block" gutterBottom>1,0 UF</Typography>
            </Grid>
          </Grid>
          
          <Typography variant={'h6'} color={'primary'} mb={3}>Facturación:</Typography>
          <Grid container rowSpacing={2} columnSpacing={3}>
            <Grid item xs={6}>
              <Typography variant="caption" display="block" gutterBottom>Fecha inicio de cobro:</Typography>
              <Typography variant="body1" display="block" gutterBottom>01 Noviembre 2023</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="caption" display="block" gutterBottom>Fecha termino:</Typography>
              <Typography variant="body1" display="block" gutterBottom>30 Noviembre 2023</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="caption" display="block" gutterBottom>Correo de contacto:</Typography>
              <Typography variant="body1" display="block" gutterBottom>contacto@correo.com</Typography>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </Box> 
  )
}
