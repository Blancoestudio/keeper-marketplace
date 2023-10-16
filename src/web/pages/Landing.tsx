import { MainBanner } from "../components/MainBanner"
import { Benefits } from "../components/Benefits"
import { CallToAction } from "../components/CallToAction"
import { HowItWorks } from "../components/HowItWorks"
import { Pricing } from "../components/Pricing"

export const Landing = () => {
  return (
    <>
      <MainBanner />
      <Benefits />
      <CallToAction />
      <HowItWorks />
      <Pricing />
    </>
  )
}
