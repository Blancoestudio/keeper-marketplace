import { useState } from "react";
import { Box, Button, Checkbox, Chip, Container, FormControl, FormControlLabel, Grid, InputAdornment, InputBase, InputLabel, Stack, Typography, styled } from "@mui/material"
import { FacebookRounded, Instagram, LinkedIn } from "@mui/icons-material"
import { MuiTelInput } from "mui-tel-input"
import { TextFieldCmp } from "src/components/TextFieldCmp"
import LanguageIcon from '@mui/icons-material/Language';


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

export const Profile = () => {

  const [phone1, setPhone1] = useState('');
  const [phone2, setPhone2] = useState('');

  const handleChange1 = (newPhone: string) => {
    setPhone1(newPhone);
  }

  const handleChange2 = (newPhone: string) => {
    setPhone2(newPhone);
  }

  return (
    <Container maxWidth={'lg'}>

      {/* user data */}
      <Box py={5}>
        <Typography variant="h5" mb={5} color={'#142748'} fontWeight={'medium'}>Sobre ti:</Typography>
        <Grid container justifyContent={'center'}>
          <Grid item xs={10}>


            <Typography variant={'h6'} color={'primary'} mb={3}>Información personal:</Typography>
            <Grid container rowSpacing={2} columnSpacing={3}>
              <Grid item xs={6}>
                <TextFieldCmp 
                  id="full-name"
                  label="Nombre y Apellido"
                  placeholder="Ingresa tu nombre y apellido"
                  />
              </Grid>
              <Grid item xs={6}>
                <TextFieldCmp 
                  id="email"
                  label="Email"
                  placeholder="Ingresa tu correo electrónico"
                  type="email"
                  />
              </Grid>
            
              <Grid item xs={6}>
                <TextFieldCmp 
                  id="password"
                  label="Contraseña"
                  placeholder="Ingresa tu contraseña"
                  type="password"
                  />
              </Grid>
              <Grid item xs={6}>
                <TextFieldCmp 
                  id="repeat-password"
                  label="Repite tu Contraseña"
                  placeholder="Ingresa nuevamente tu contraseña"
                  type="password"
                  />
              </Grid>
            
              <Grid item xs={6}></Grid>
              <Grid item xs={6}>
                <Button 
                  type="submit" 
                  variant="contained" 
                  fullWidth size="large" 
                  sx={{ 
                    borderRadius: 2,
                    textTransform: 'none'
                    }}>
                    Cambiar Contraseña
                </Button>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </Box>      
      

      {/* business data */}
      <Box py={5}>
        <Typography variant="h5" mb={5} color={'#142748'} fontWeight={'medium'}>Datos de tu negocio:</Typography>
        <Grid container justifyContent={'center'}>
          <Grid item xs={10}>


            <Typography variant={'h6'} color={'primary'} mb={3}>Información general:</Typography>
            <Grid container rowSpacing={2} columnSpacing={3} mb={5}>
              <Grid item xs={6}>
                <TextFieldCmp 
                  id="full-name"
                  label="Nombre y Apellido"
                  placeholder="Ingresa tu nombre y apellido"
                  />
                  
                <TextFieldCmp 
                  id="email"
                  label="Email"
                  placeholder="Ingresa tu correo electrónico"
                  type="email"
                  />
              </Grid>

              <Grid item xs={6}>
                <TextFieldCmp 
                  id="password"
                  label="Contraseña"
                  placeholder="Ingresa tu contraseña"
                  type="password"
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
                  <InputLabel shrink htmlFor="bootstrap-input">Facebook</InputLabel>
                  <InputCmp 
                    placeholder="Ingresa tu Facebook"
                    defaultValue="" 
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
                  control={ <CustomCheckbox  color="primary" size="small"  /> } />
                

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



          </Grid>
        </Grid>
      </Box>      



      {/* plan */}
      <Box py={5}>
        <Typography variant="h5" mb={5} color={'#142748'} fontWeight={'medium'}>Plan y Facturación:</Typography>
        <Grid container justifyContent={'center'}>
          <Grid item xs={10}>


            <Typography variant={'h6'} color={'primary'} mb={3}>Plan:</Typography>
            <Grid container rowSpacing={2} columnSpacing={3} mb={5}>
              <Grid item xs={6}>
                <TextFieldCmp 
                  id="full-name"
                  label="Nombre del Plan"
                  placeholder="Nombre del Plan"
                  />
              </Grid>
              <Grid item xs={6}>
                <TextFieldCmp 
                  id="email"
                  label="Valor"
                  placeholder="Ingresa tu correo electrónico"
                  type="email"
                  />
              </Grid>
            
              <Grid item xs={6}>
                <Button 
                  type="submit" 
                  variant="contained" 
                  fullWidth size="large" 
                  sx={{ 
                    borderRadius: 2,
                    textTransform: 'none'
                    }}>
                    Cambiar Plan
                </Button>
              </Grid>
              <Grid item xs={6}>
              </Grid>
            </Grid>
            
            <Typography variant={'h6'} color={'primary'} mb={3}>Facturación:</Typography>
            <Grid container rowSpacing={2} columnSpacing={3}>
              <Grid item xs={4}>
                <TextFieldCmp 
                  id="full-name"
                  label="Fecha inicio de cobro:"
                  placeholder="Ingresa tu nombre y apellido"
                  />

                <TextFieldCmp 
                  id="email"
                  label="Fecha termino:"
                  placeholder="Ingresa tu correo electrónico"
                  type="email"
                  />
              </Grid>
              <Grid item xs={6}>
              </Grid>
              
              <Grid item xs={6}>
                <TextFieldCmp 
                  id="email"
                  label="Correo de contacto y/o envio de factura"
                  placeholder="correo@factura.cl"
                  />
              </Grid>
              <Grid item xs={6}>
              </Grid>
            
            </Grid>

          </Grid>
        </Grid>
      </Box> 

    </Container>
  )
}
