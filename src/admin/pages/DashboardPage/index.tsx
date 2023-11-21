import { Box, Card, Container, Grid, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

import { CustomButton } from "src/components";

import s from './style.module.scss';
import { useNavigate } from "react-router-dom";

const indicators = [
  {
    title: 'Haz obtenido',
    data: 8,
    dataName: 'visitas a tu perfil',
  },
  {
    title: 'Haz aparecido en',
    data: 15,
    dataName: 'búsquedas',
  },
  {
    title: 'Se han contactado',
    data: 20,
    dataName: 'personas contigo',
  },
  {
    title: 'Haz aparecido en',
    data: 15,
    dataName: 'búsquedas',
  },
];

export const Dashboard = () => {

  const navigate = useNavigate();

  const handleCreateProduct = () => {
    navigate('/admin/create-product')
  }

  return (
    <Container maxWidth={'lg'}>

        {/* banner */}
        <Box sx={{
          height: 350,
          borderBottomLeftRadius: '50px',
          borderBottomRightRadius: '50px',
          py: 10,
          px: 5,
          backgroundColor: 'primary.main',
          backgroundImage: "url('src/assets/images/bg-banner.png')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          color: "#ffffff",
        }}></Box>

        {/* shop avatar */}
        <Grid container justifyContent={'center'} sx={{ marginTop: '-150px', marginBottom: '3em' }}>
          <Grid item xs={10}>
            <div className={`${ s['business-profile'] }`}>
              <div className={`${ s.picture }`}></div>
              <Typography variant={'h5'} fontWeight={'medium'} color={'#727D91'} sx={{ mt: '.5em' }}>Nombre negocio</Typography>
            </div>
          </Grid>
        </Grid>

        {/* indicadores */}
        <Box sx={{ mb: 4 }}>
            <Typography variant="h4" component={'h2'} fontWeight={'bold'}>Indicadores:</Typography>
        </Box>

        <div className={`${ s['indicators-wrapper'] }`}>
          {
            indicators.map( (item, i) => (
              <Card className={`${ s.item }`} key={i}>
                <Typography variant="h6">{ item.title }</Typography>
                <Typography variant="h2" fontWeight={'bold'}>{ item.data }</Typography>
                <Typography variant="h6">{ item.dataName }</Typography>
              </Card>
            ))
          }
        </div>

        {/* tus productos */}
        <Box sx={{ mb: 4 }}>
          <Grid container justifyContent={'space-between'} alignItems={'center'} mt={'3em'} mb={'2em'}>
            <Grid item>
              <Typography variant="h4" component={'h2'} fontWeight={'bold'}>Tus productos:</Typography>
            </Grid>
            <Grid item>
              <CustomButton variant="contained"
                onClick={ handleCreateProduct }
                sx={{
                  borderRadius: '2em',
                  textTransform: 'none',
                  letterSpacing: 'normal'
                }}>Cargar nuevo producto</CustomButton>
            </Grid>
          </Grid>

          <Grid container>
              {
                Array.from(new Array(5)).map( (product, i) => (
                  <Grid item key={i} xs={3} sx={{ padding: '1em' }}>
                    <div className={`${ s['product-item'] }`}>
                      <div className={`${ s['main-thumb'] }`}>
                        <div className={`${ s['discount'] }`}>- 30%</div>
                        <button className={`${ s['actions-btn'] }`}>
                          <DeleteIcon fontSize="small" />
                        </button>
                        ...main
                      </div>
                      <div className={`${ s['secondary-wrapper'] }`}>
                        <div className={`${ s['secondary-thumb'] }`}>
                          <div className={`${ s['thumb-wrapper'] }`}></div>
                        </div>
                        <div className={`${ s['secondary-thumb'] }`}>
                          <div className={`${ s['thumb-wrapper'] }`}></div>
                        </div>
                        <div className={`${ s['secondary-thumb'] }`}>
                          <div className={`${ s['thumb-wrapper'] }`}></div>
                        </div>
                      </div>
                      <h3 style={{ margin: '10px 0', color: '#142748' }}>Nombre producto</h3>
                      <p style={{ lineHeight: '1.2em', marginTop: 0, color: '#6D778A' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                      <hr style={{ borderColor: '#5829A6' }} />
                      <Typography color={'primary'} fontWeight={'medium'} variant="h6">
                        $38.500 
                        <span style={{ 
                          fontSize: '.75em', 
                          color: '#717171', 
                          textDecoration: 'line-through' 
                          }}>/ $55.000</span>
                      </Typography>
                    </div>
                  </Grid>
                ))
              }
          </Grid>
        </Box>

    </Container>
  )
}
