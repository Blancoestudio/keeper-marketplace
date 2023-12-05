import { useState } from "react";

import { AlertColor, Box, Grid, Typography } from "@mui/material";

import { CustomButton, CustomSnack } from "src/components";
import { BillingInfoPlanEditModal } from "./BillingInfoPlanEditModal";

export const BillingInfoPlan = () => {

  const [isEditing, setIsEditing] = useState(false);
  const [isOpenSnack, setIsOpenSnack] = useState(false);
  const [snackState, setSnackState] = useState<{ severity: AlertColor, msg: string }>({
    severity: 'info',
    msg: ''
  })

  const handleDismiss = () => {
    setIsEditing(false);
  }

  const handleEdit= () => {
    setIsOpenSnack(false);
    setIsEditing(true);
  }
  
  const handleSave = () => {
    setIsEditing(false);

    setSnackState({
      severity: 'success',
      msg: 'Esto es un mensaje de éxito!'
    })
    setIsOpenSnack(true);
    setTimeout(() => {
      setIsOpenSnack(false);
    }, 2000);
  }

  return (
    <Box>

      <CustomSnack 
        isOpen={isOpenSnack}
        severity={snackState.severity}
        message={snackState.msg}
      />

      <BillingInfoPlanEditModal
        isEditing={isEditing}
        dismissEditing={ handleDismiss }
        handleSave={ handleSave }
      />

      <Grid container rowSpacing={2} columnSpacing={3} mb={3}>
        <Grid item xs={7}>
          <Typography variant="caption" display="block" gutterBottom>Nombre del Plan</Typography>
          <Typography variant="body1" display="block" gutterBottom fontWeight={'bolder'}>Plan Básico</Typography>
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
            onClick={ handleEdit }
          >
            Cambiar plan 
          </CustomButton>
        </Grid>
      </Grid>

    </Box>
  )
}
