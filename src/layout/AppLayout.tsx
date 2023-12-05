import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Box } from '@mui/material';
import { Scrolltop } from "src/components/Scrolltop";
interface PropTypes {
  children: JSX.Element
}

export const AppLayout = ({ children }: PropTypes) => {
  return (
    <Box>
      <Scrolltop />
      <Navbar />
      { children }
      <Footer />
    </Box>
  )
}