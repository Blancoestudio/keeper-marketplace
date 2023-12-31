import { MainBanner } from "../components/MainBanner"
import { Benefits } from "../components/Benefits"
import { CallToAction } from "../components/CallToAction"
import { HowItWorks } from "../components/HowItWorks"
import { Pricing } from "../components/Pricing"
import { Box } from "@mui/material"

export const Landing = () => {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <MainBanner />
      <Benefits />
      <CallToAction />
      <HowItWorks />
      <Pricing />
    </Box>
  )
}
