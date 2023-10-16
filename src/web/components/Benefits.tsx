import { Box, Container, Grid, Typography } from "@mui/material"

export const Benefits = () => {
  return (
    <Box id="sectionBenefits" sx={{
      backgroundColor: 'primary.main',
      py: 8,
      color: '#ffffff'
    }}>
      <Container maxWidth={'lg'}>

        <Typography variant="h4" sx={{ 
          fontFamily: 'Raleway', 
          fontWeight: 'bold', 
          textAlign: 'center',
          mb: 5
        }}>Beneficios Keeper</Typography>
        
        <Grid container justifyContent={'center'} gap={2}>
          <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <Box
              sx={{
                width: 150,
                height: 150,
                backgroundColor: "#ffffff",
                borderRadius: 4,
              }}
            >

            </Box>
            <Typography sx={{ textAlign: 'center', my: 1, fontWeight: 'bold' }} variant="h5">Title</Typography>
            <Typography sx={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime consectetur explicabo.</Typography>
          </Grid>
          {/* <Grid item xs={2} sx={{ border: '1px solid #ffffff' }}>Item</Grid>
          <Grid item xs={2} sx={{ border: '1px solid #ffffff' }}>Item</Grid>
          <Grid item xs={2} sx={{ border: '1px solid #ffffff' }}>Item</Grid>
          <Grid item xs={2} sx={{ border: '1px solid #ffffff' }}>Item</Grid> */}
        </Grid>

      </Container>
    </Box>
  )
}
