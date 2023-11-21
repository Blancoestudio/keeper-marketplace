import { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { CustomTextField, CustomSnackbar, CustomButton } from "src/components";

export const UserInfo = () => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
     <Grid container justifyContent={'center'} py={5}>

       <Grid container maxWidth={'md'} rowSpacing={2} columnSpacing={3}>
         <Grid item>
           <Typography variant={'h6'} color={'primary'} mb={3}>Información personal:</Typography>
         </Grid>
       </Grid>

       <Grid container maxWidth={'md'} columnSpacing={3} mb={3}>
         <Grid item xs={6}>
           <CustomTextField 
             id="full-name"
             label="Nombre y Apellido"
             placeholder="Ingresa tu nombre y apellido"
             />
         </Grid>
         <Grid item xs={6}>
           <CustomTextField 
             id="user-email"
             label="Email"
             placeholder="Ingresa tu correo electrónico"
             type="email"
             />
         </Grid>
       </Grid>
        
       <Grid container maxWidth={'md'} columnSpacing={3} mb={5}>
      
         <Grid item xs={6}>
           <CustomTextField 
             id="password"
             label="Contraseña"
             placeholder="Ingresa tu contraseña"
             type="password"
             />
         </Grid>
         <Grid item xs={6}>
           <CustomTextField 
             id="repeat-password"
             label="Repite tu Contraseña"
             placeholder="Ingresa nuevamente tu contraseña"
             type="password"
             />
         </Grid>
      
       </Grid>

       <Grid container maxWidth={'md'} columnSpacing={3} justifyContent={'end'} mb={5}>
         <Grid item xs={6}>
           <CustomButton
             type="submit" 
             variant="contained" 
             fullWidth size="large" 
             onClick={handleClick}
             sx={{ 
               borderRadius: 2,
               textTransform: 'none'
               }}>
               Cambiar Contraseña
           </CustomButton>
           
           <CustomSnackbar 
            openStatus={open} 
            setOpenStatus={ setOpen } 
            severity={'error'}
            >
              <Typography>This is a success message!</Typography>
            </CustomSnackbar>
         </Grid>
       </Grid>
      
     </Grid>
    </>
  )
}
