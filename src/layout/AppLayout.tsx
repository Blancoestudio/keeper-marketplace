import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Box } from '@mui/material';
interface PropTypes {
  children: JSX.Element
}

export const AppLayout = ({ children }: PropTypes) => {
  return (
    <Box>
      <Navbar />
      { children }
      <Footer />
    </Box>
  )
}