import { useState } from "react";

import { AlertColor, Grid, Stack, Typography } from "@mui/material";

import { CustomButton, CustomSnack } from "src/components";

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import { BusinessContactEditModal } from "./BusinessContactEditModal";

export const BusinessContact = () => {

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
    <>
      <CustomSnack 
        isOpen={isOpenSnack}
        severity={snackState.severity}
        message={snackState.msg}
      />
          
      <BusinessContactEditModal
        isEditing={isEditing}
        dismissEditing={ handleDismiss }
        handleSave={ handleSave }
      />

      <Typography variant={"h6"} color={"primary"} mb={6}>
        Información de contacto
      </Typography>

      <Grid container rowSpacing={2} columnSpacing={3}>
        <Grid item xs={7}>
          <Stack direction={'row'} gap={2} mb={5}>
            <LocalPhoneIcon color={'secondary'} />
            <Typography variant="body1" display="block" gutterBottom>+569 12345 6789</Typography>
          </Stack>
          
          <Stack direction={'row'} gap={2} mb={5}>
            <WhatsAppIcon color={'secondary'} />
            <Typography variant="body1" display="block" gutterBottom>+569 12345 6789</Typography>
          </Stack>

          <Stack direction={'row'} gap={2} mb={5}>
            <FacebookIcon color={'secondary'} />
            <Typography variant="body1" display="block" gutterBottom>https://facebook.com/KeeperApp</Typography>
          </Stack>
          
          <Stack direction={'row'} gap={2} mb={5}>
            <InstagramIcon color={'secondary'} />
            <Typography variant="body1" display="block" gutterBottom>https://instagram.com/KeeperApp</Typography>
          </Stack>
          
          <Stack direction={'row'} gap={2} mb={5}>
            <LinkedInIcon color={'secondary'} />
            <Typography variant="body1" display="block" gutterBottom>https://linkedin.com/KeeperApp</Typography>
          </Stack>
          
          <Stack direction={'row'} gap={2} mb={5}>
            <LanguageIcon color={'secondary'} />
            <Typography variant="body1" display="block" gutterBottom>Keeperapp.com</Typography>
          </Stack>


        </Grid>

        <Grid item xs={5} textAlign={"end"}>
          <CustomButton
            component="label"
            variant="text"
            size="large"
            sx={{
              borderRadius: 2,
              textTransform: "none",
            }}
            onClick={ handleEdit }
          >
            Editar información de contacto
          </CustomButton>
        </Grid>
      </Grid>
    </>    
  );
};
