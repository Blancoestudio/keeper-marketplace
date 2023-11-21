import { Checkbox, FormControl, FormControlLabel, Grid, InputAdornment, InputBase, InputLabel, Typography, styled } from '@mui/material';
import { FacebookRounded, Instagram, LinkedIn } from "@mui/icons-material"

import LanguageIcon from '@mui/icons-material/Language';
import { MuiTelInput } from 'mui-tel-input'
import { useState } from 'react';

const InputCmp = styled(InputBase)(({ theme }) => ({
  'MuiFormLabel-root': {
    border: '1px solid red',
  },
  'label + &': {
    marginTop: theme.spacing(3),
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

export const Form2 = () => {

  const [phone1, setPhone1] = useState('');
  const [phone2, setPhone2] = useState('');

  const handleChange1 = (newPhone: string) => {
    setPhone1(newPhone);
  }

  const handleChange2 = (newPhone: string) => {
    setPhone2(newPhone);
  }

  return (
    <>
      <Grid container spacing={4} mb={5}>
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
          
          <FormControlLabel 
            sx={{ paddingLeft: '.75em' }}
            label={ <Typography color={'#727D91'}>Publicar teléfono</Typography> }
            control={ <CustomCheckbox color="primary" size="small"  /> } />
        
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
            control={ <CustomCheckbox  color="primary" size="small"  /> } />

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
            control={ <CustomCheckbox  color="primary" size="small"  /> } />
          

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
            control={ <CustomCheckbox  color="primary" size="small"  /> } />

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
            control={ <CustomCheckbox  color="primary" size="small"  /> } />
          

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
            control={ <CustomCheckbox  color="primary" size="small"  /> } />

        </Grid>
        
      </Grid>
    </>
  )
}
