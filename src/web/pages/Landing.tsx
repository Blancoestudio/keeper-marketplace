import { MainBanner } from "../components/MainBanner"
import { Benefits } from "../components/Benefits"
import { CallToAction } from "../components/CallToAction"
import { HowItWorks } from "../components/HowItWorks"
import { Pricing } from "../components/Pricing"
import { Box } from "@mui/material"
import { Simulator } from "../components/Simulator"
import { ResponseModal } from "src/components/ResponseModal"
import { useState } from "react"

export const Landing = () => {
  const [isOpenResponseModal, setIsOpenResponseModal] = useState(true);
  return (
    <Box sx={{ overflowX: 'hidden' }} className="animate__animated animate__fadeIn">
      <ResponseModal 
        isOpen={isOpenResponseModal} 
        isError
        title="Mi modal" 
        onClose={() => setIsOpenResponseModal(false)} 
      />
      <MainBanner />
      <Benefits />
      <CallToAction />
      <HowItWorks />
      <Pricing />
      <Simulator />
    </Box>
  )
}
