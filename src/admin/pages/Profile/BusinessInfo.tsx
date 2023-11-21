import { useState } from "react";
import { Box, Checkbox, Chip, FormControl, FormControlLabel, Grid, InputAdornment, InputBase, InputLabel, Stack, Typography, styled } from "@mui/material";

import { MuiTelInput } from "mui-tel-input";
import LanguageIcon from '@mui/icons-material/Language';
import { FacebookRounded, Instagram, LinkedIn } from "@mui/icons-material";

import { CustomTextField, CustomButton } from "src/components";

const InputCmp = styled(InputBase)(({ theme }) => ({
  'MuiFormLabel-root': {
    border: '1px solid red',
  },
  'label + &': {
    fontSize: 10,
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

export const BusinessInfo = () => {
  
  const [phone1, setPhone1] = useState('');
  const [phone2, setPhone2] = useState('');

  const handleChange1 = (newPhone: string) => {
    setPhone1(newPhone);
  }

  const handleChange2 = (newPhone: string) => {
    setPhone2(newPhone);
  }

  return (
    <Box py={5}>
      <Grid container justifyContent={'center'}>
        <Grid item xs={10}>

          <Typography variant={'h6'} color={'primary'} mb={3}>Información general:</Typography>

          <Grid container rowSpacing={2} columnSpacing={3} mb={5}>
            <Grid item xs={6}>
              
              <Grid container direction={'column'}>

                <Grid item>
                  <CustomTextField
                    id="business-name"
                    label="Nombre de tu Negocio"
                    placeholder="Ingresa el nombre de tu negocio"
                    />
                    
                  <CustomTextField 
                    id="address"
                    label="Dirección"
                    placeholder="Ingresa tu dirección"
                    type="email"
                    />
                </Grid>

              </Grid>

            </Grid>

            <Grid item xs={6}>
              <CustomTextField 
                id="business-description"
                label="Descripción"
                placeholder="Haz una descripción breve de tu negocio, a que se dedica, que productos vendes, etc..."
                multiline
                rows={4.5}
                />
            </Grid>            

            <Grid item xs={12}>
              <Typography variant="body2" color={'#727D91'} mb={1}>Rubros Utilizados:</Typography>
              <Stack direction="row" spacing={1}>
                <Chip label="Deporte" sx={{ borderRadius: 1, fontWeight: 'medium' }} color={'success'} size={'small'} />
                <Chip label="Calzado" sx={{ borderRadius: 1, fontWeight: 'medium' }} color={'success'} size={'small'} />
                <Chip label="Vestuario" sx={{ borderRadius: 1, fontWeight: 'medium' }} color={'success'} size={'small'} />
              </Stack>
            </Grid>
          </Grid>
          
          
          <Typography variant={'h6'} color={'primary'} mb={3}>Contácto:</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              
              <FormControl fullWidth variant="standard">
                <MuiTelInput 
                  label={'Teléfono'}
                  forceCallingCode
                  className="phone-field"
                  defaultCountry="CL"
                  onlyCountries={['CL', 'AR', 'PE']}
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
                  label={'WhatsApp'}
                  forceCallingCode
                  className="phone-field"
                  defaultCountry="CL"
                  onlyCountries={['CL', 'AR', 'PE']}
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
                <InputLabel shrink htmlFor="bootstrap-input">Facebook</InputLabel>
                <InputCmp 
                  placeholder="Ingresa tu Facebook"
                  id="bootstrap-input" 
                  startAdornment={
                    <InputAdornment position="start">
                      <FacebookRounded />
                    </InputAdornment>
                  }/>
              </FormControl>
              
              <FormControlLabel 
                sx={{ paddingLeft: '.75em' }}
                label={ <Typography color={'#727D91'}>Publicar Facebook</Typography> }
                control={ <CustomCheckbox  color="primary" size="small"  /> } 
                />

            </Grid>

            <Grid item xs={12} md={6}>
              
              <FormControl fullWidth variant="standard">
                <InputLabel shrink htmlFor="bootstrap-input">Instagram</InputLabel>
                <InputCmp
                  placeholder="Ingresa tu Instagram"
                  defaultValue="" 
                  id="bootstrap-input" 
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
                <InputLabel shrink htmlFor="bootstrap-input">LinkedIn</InputLabel>
                <InputCmp 
                  placeholder="Ingresa tu Facebook"
                  defaultValue="" 
                  id="bootstrap-input" 
                  startAdornment={
                    <InputAdornment position="start">
                      <LinkedIn />
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
                <InputLabel shrink htmlFor="bootstrap-input">LinkedIn</InputLabel>
                <InputCmp 
                  placeholder="Ingresa tu Instagram"
                  id="bootstrap-input" 
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

          <Grid container columnSpacing={3} justifyContent={'end'} mt={10}>
            <Grid item xs={6}>
              <CustomButton
                type="submit" 
                variant="contained" 
                fullWidth size="large" 
                sx={{ 
                  borderRadius: 2,
                  textTransform: 'none'
                  }}>
                  Guardar
              </CustomButton>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </Box>  
  )
}
