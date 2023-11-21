import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Container, Grid, LinearProgress, Typography, linearProgressClasses, styled } from "@mui/material"

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { Form2 } from "./Form2";
import { Form1 } from "./Form1";
import { CustomButton } from "src/components";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  borderRadius: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 10,
  },
}));

export const BusinessRegisterPage = () => {

  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(50);

  const handlePrev = () => {
    if (currentStep === 0) return
    setCurrentStep(currentStep - 1);
    setProgress(50);
  }
  
  const handleNext = () => {
    if (currentStep === 1) {
      setCurrentStep(0);
      navigate('/admin/dashboard');
      return
    }
    setProgress(100);
    setCurrentStep(currentStep + 1);
  }

  return (
    <Container>

      

      <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', }}>

        <Grid item xs={12} sm={10}>
          <Box p={5} sx={{ borderRadius: '20px', boxShadow: '0 4px 10px 5px rgba(0, 0, 0, .1)', my: 5 }}>

            <Typography variant="h5" component={'h2'} textAlign={'center'} fontWeight={'500'}>
              {
                (currentStep === 0)
                  ? 'Completemos los datos básicos de tu negocio'
                  : (currentStep === 1)
                    ? 'Y por ultimo, los datos de contacto de tu negocio'
                    : ''
              }
            </Typography>

            <Typography textAlign={'center'} mb={3}>
              {
                (currentStep === 0)
                ? 'Continuemos el Registro con los datos de tu negocio'
                : (currentStep === 1)
                  ? 'Completa tus datos personales y  los de tu negocio para llegar a más clientes'
                  : ''
              }
            </Typography>

            <Box my={5}>
              <BorderLinearProgress 
                variant="determinate" 
                value={progress} 
                />
            </Box>
            
            {
              (currentStep === 0)
                ? <Form1 />
                : (currentStep === 1)
                  ? <Form2 />
                  : null
            }

            <Grid container justifyContent={'space-between'}>
              <Grid item>
                {
                  (currentStep === 1)
                    ? (
                        <CustomButton variant="text" size="large" startIcon={<ChevronLeftIcon />}
                          sx={{ textTransform: 'none', fontSize: '1.25em' }}
                          onClick={ () => handlePrev() }>
                          Volver
                        </CustomButton>
                      ) : null
                }
              </Grid>

              <Grid item >
                <CustomButton variant="text" size="large" endIcon={<ChevronRightIcon />}
                  sx={{ textTransform: 'none', fontSize: '1.25em' }}
                  onClick={ () => handleNext() }>
                  Continuar
                </CustomButton>
              </Grid>
            </Grid>

          </Box>
        </Grid>
      </Grid>

    </Container>
  )
}
