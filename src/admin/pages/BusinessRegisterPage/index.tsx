import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { 
  Container, 
  Grid, 
  Stack, 
  Box, 
  Step, 
  StepLabel, 
  Stepper, 
  Typography, 
} from "@mui/material"

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { CustomButton } from "src/components";
import { FormData1 } from "./FormData1";
import { FormData2 } from "./FormData2";
import { FormData3 } from "./FormData3";
import { FormDataCheckout } from "./FormDataCheckout";
import { CustomLoading } from "src/components/CustomLoading";

const steps = [
  'Datos básicos',
  'Datos de contacto',
  'Elegir plan',
]

export const BusinessRegisterPage = () => {

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(0);

  const handlePrev = () => {
    if (currentStep === 0) return
    setCurrentStep(currentStep - 1);
  }
  
  const handleNext = () => {
    if (currentStep === 3) {
      setIsLoading(true);
      
      setTimeout(() => {
        navigate('/admin/welcome');
        setCurrentStep(0);
      }, 1500);

      return
    }
    setCurrentStep(currentStep + 1);
  }

  return (
    <>
      <CustomLoading isOpen={isLoading} />
      <Container sx={{ minHeight: 'calc( 100vh - 65px )' }}>
        <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', }}>

          <Grid item xs={12} sm={10}>
            <Box p={5} sx={{ borderRadius: '20px', boxShadow: '0 4px 10px 5px rgba(0, 0, 0, .1)', my: 5 }}>

              <Typography variant="h5" component={'h2'} textAlign={'center'} fontWeight={'500'}>
                Completemos los siguiente datos de tu negocio
              </Typography>

              <Box my={5} sx={{ borderWidth: 1, borderColor: 'red' }} px={8}>
                <Stepper activeStep={currentStep}>
                  {steps.map((label, idx) => (
                    <Step key={idx}>
                      <StepLabel>{ label }</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>

              { (currentStep === 0) && <FormData1 /> }
              { (currentStep === 1) && <FormData2 /> }
              { (currentStep === 2) && <FormData3 /> }
              { (currentStep === 3) && <FormDataCheckout handlePrev={ handlePrev } /> }

              <Stack direction={'row'} justifyContent={'space-between'} mt={3}>
                <Box>
                  { 
                    (currentStep > 0 && currentStep < 3) && (
                      <CustomButton variant="text" size="large" startIcon={<ChevronLeftIcon />}
                        sx={{ textTransform: 'none' }}
                        onClick={ () => handlePrev() }>
                        Volver
                      </CustomButton>
                    )
                  }
                </Box>
                <Box>
                  <CustomButton variant="text" size="large" endIcon={<ChevronRightIcon />}
                    sx={{ textTransform: 'none' }}
                    onClick={ () => handleNext() }>
                    Continuar
                  </CustomButton>
                </Box>
              </Stack>

            </Box>
          </Grid>
        </Grid>

      </Container>
    </>
  )
}
