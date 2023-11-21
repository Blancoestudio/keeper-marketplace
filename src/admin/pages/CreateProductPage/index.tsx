import { Card, CardMedia, Container, FormControlLabel, FormGroup, Grid, Switch, Typography } from "@mui/material"
import { CustomTextField, CustomButton, CustomSelect } from "src/components"

export const CreateProductPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5, minHeight: 'calc( 100vh - 65px )' }}>
      <Typography variant="h4" component="h1" textAlign={'center'}>Crear un nuevo producto</Typography>
      <Typography variant="subtitle1" fontWeight="light" textAlign={'center'} color={'secondary'}>Ingresa los datos básicos de tu producto</Typography>

      <form style={{ marginTop: 40 }}>
        <Grid container justifyContent={'center'} spacing={3}>
            
            <Grid item xs={5}>

              <CustomTextField 
                label="Nombre del producto o servicio" 
                placeholder="Ingresa el nombre de tu producto o servicio"
                />

              <CustomSelect 
                label="Selecciona un Rubro  al que pertenece tu producto"
                options={[
                  { value: '1', label: 'Opción 1' },
                  { value: '2', label: 'Opción 2' },
                ]}
              />

              <CustomTextField 
                label="Descripción corta" 
                placeholder="Ingresa una descripción corta del producto / servicio"
                multiline
                rows={3}
                />
              
              <CustomTextField 
                label="Descripción larga" 
                placeholder="Ingresa una descripción más detallada del producto / servicio"
                multiline
                rows={6}
                />

              <FormGroup>
                <FormControlLabel control={<Switch defaultChecked />} label="Habilitar promoción para este producto / servicio" />
              </FormGroup>
            </Grid>  

            <Grid item xs={4}>
              <Card sx={{ width: '100%', height: 350, padding: 1, mb: 3, mt: 3, borderRadius: 2 }}>
                <CardMedia 
                  height={'100%'}
                  sx={{ backgroundColor: '#F8F8FD' }}
                  component={'img'}
                  image="" 
                  alt={'product image'}
                  />
              </Card>
            </Grid>       

            <Grid item xs={4} mt={5}>
              <CustomButton variant="contained" fullWidth>
                Crear producto
              </CustomButton>
            </Grid>      

        </Grid>
      </form>
    </Container>
  )
}
