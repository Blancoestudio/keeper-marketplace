
import { Box, Checkbox, FormControl, FormControlLabel, Grid, IconButton, InputAdornment, InputBase, InputLabel, Modal, Stack, Typography, styled, useMediaQuery, useTheme } from "@mui/material";

import LanguageIcon from '@mui/icons-material/Language';

import CloseIcon from '@mui/icons-material/Close';
import { FacebookRounded, Instagram, LinkedIn } from "@mui/icons-material";
import { MuiTelInput } from "mui-tel-input";
import { useState } from "react";
import { CustomButton } from "src/components";

const InputCmp = styled(InputBase)(({ theme }) => ({
  'MuiFormLabel-root': {
    border: '1px solid red',
  },
  'label + &': {
    borderRadius: 6,
    border: '1px solid',
    backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
    borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
  },
  '& .MuiInputAdornment-root': {
    paddingLeft: '.5em',
  },
  '& .MuiInputBase-input': {
    position: 'relative',
    border: 'none',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    fontFamily: [
      'Roboto',
      '-apple-system'
    ].join(','),
    '&:focus': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  '&.MuiCheckbox-colorSecondary.Mui-checked': {
    color: theme.palette.secondary.main, 
  },
}));

const StyledInputLabel = styled(InputLabel)(() => ({
  fontSize: '1.25em',
}));

interface BusinessContactEditModalProps {
  isEditing: boolean,
  dismissEditing: () => void,
  handleSave: () => void
}

export const BusinessContactEditModal = ({ isEditing, handleSave, dismissEditing }: BusinessContactEditModalProps) => {

  const [phone1, setPhone1] = useState('');
  const [phone2, setPhone2] = useState('');

  const handleChange1 = (newPhone: string) => {
    setPhone1(newPhone);
  }

  const handleChange2 = (newPhone: string) => {
    setPhone2(newPhone);
  }

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const style = {
    width: fullScreen ? '90%' : '70%', // Ancho adaptativo
    top: '50%',
    left: '50%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 5,
    px: 10,
    pb: 8,
    borderRadius: 8
  };

  return (
    <Modal
      open={isEditing}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
        
        <Stack direction={'row'} justifyContent={'space-between'} mb={4}>
          <Box>
              <Typography variant={'h4'} fontWeight={'medium'}>Editar información</Typography>
              <Typography variant={'body2'}>Modifica los datos de contacto de tu negocio</Typography>
          </Box>
          <Box>
            <IconButton aria-label="close" onClick={ dismissEditing }>
              <CloseIcon />
            </IconButton>
          </Box>
        </Stack>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            
            <FormControl fullWidth variant="standard">
              <MuiTelInput 
                label={'Teléfono'}
                forceCallingCode
                className="phone-field"
                defaultCountry="CL"
                value={phone1} 
                onChange={handleChange1} 
                />
            </FormControl>
            
            <FormControlLabel sx={{ paddingLeft: '.75em' }}
              label={ <Typography color={'#727D91'}>Publicar teléfono</Typography> }
              control={ <CustomCheckbox color="primary" size="small" disableRipple  /> } />
          </Grid>
          
          <Grid item xs={12} md={6}>
            
            <FormControl fullWidth variant="standard">
              <MuiTelInput 
                label={'Teléfono'}
                forceCallingCode
                className="phone-field"
                defaultCountry="CL"
                value={phone2} 
                onChange={handleChange2} 
                />
            </FormControl>
            <FormControlLabel 
              sx={{ paddingLeft: '.75em' }}
              label={ <Typography color={'#727D91'}>Publicar WhatsApp</Typography> }
              control={ <CustomCheckbox color="primary" size="small" disableRipple  /> } />

          </Grid>

          <Grid item xs={12} md={6}>
            
            <FormControl fullWidth variant="standard">
              <StyledInputLabel shrink htmlFor="sn-facebook">Facebook</StyledInputLabel>
              <InputCmp 
                placeholder="Ingresa tu Facebook"
                id="sn-facebook" 
                startAdornment={
                  <InputAdornment position="start">
                    <FacebookRounded />
                  </InputAdornment>
                }/>
            </FormControl>
            
            <FormControlLabel 
              sx={{ paddingLeft: '.75em' }}
              label={ <Typography color={'#727D91'}>Publicar Facebook</Typography> }
              control={ <CustomCheckbox color="primary" size="small" disableRipple  /> } />
            

          </Grid>

          <Grid item xs={12} md={6}>
            
            <FormControl fullWidth variant="standard">
              <StyledInputLabel shrink htmlFor="sn-instagram">Instagram</StyledInputLabel>
              <InputCmp 
                placeholder="Ingresa tu Instagram"
                defaultValue="" 
                id="sn-instagram" 
                startAdornment={
                  <InputAdornment position="start">
                    <Instagram />
                  </InputAdornment>
                }/>
            </FormControl>
            <FormControlLabel 
              sx={{ paddingLeft: '.75em' }}
              label={ <Typography color={'#727D91'}>Publicar Instagram</Typography> }
              control={ <CustomCheckbox color="primary" size="small" disableRipple  /> } />

          </Grid>

          <Grid item xs={12} md={6}>
            
            <FormControl fullWidth variant="standard">
              <StyledInputLabel shrink htmlFor="sn-linkedin">LinkedIn</StyledInputLabel>
              <InputCmp 
                placeholder="Ingresa tu LinkedIn"
                defaultValue="" 
                id="sn-linkedin" 
                startAdornment={
                  <InputAdornment position="start">
                    <LinkedIn />
                  </InputAdornment>
                }/>
            </FormControl>
            
            <FormControlLabel 
              sx={{ paddingLeft: '.75em' }}
              label={ <Typography color={'#727D91'}>Publicar LinkedIn</Typography> }
              control={ <CustomCheckbox color="primary" size="small" disableRipple  /> } />
            

          </Grid>

          <Grid item xs={12} md={6}>
            
            <FormControl fullWidth variant="standard">
              <StyledInputLabel shrink htmlFor="website">Página web</StyledInputLabel>
              <InputCmp 
                placeholder="Ingresa tu Instagram"
                id="website" 
                startAdornment={
                  <InputAdornment position="start">
                    <LanguageIcon />
                  </InputAdornment>
                }/>
            </FormControl>
            
            <FormControlLabel 
              sx={{ paddingLeft: '.75em' }}
              label={ <Typography color={'#727D91'}>Publicar página</Typography> }
              control={ <CustomCheckbox color="primary" size="small" disableRipple  /> } />

          </Grid>

          
        </Grid>
        
        <Grid container justifyContent={'center'} mt={3}>
          <Grid item xs={4} >
            <CustomButton 
              fullWidth
              onClick={ handleSave }
              variant={'contained'}>
              Guardar
            </CustomButton>
          </Grid>
        </Grid>
        
      </Box>
    </Modal>
  );
};
