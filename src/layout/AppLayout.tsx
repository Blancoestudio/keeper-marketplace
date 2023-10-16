import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { AppTheme } from "../theme"
import { Box } from "@mui/material"

interface PropTypes {
  children: JSX.Element
}

export const AppLayout = ({ children }: PropTypes) => {
  return (
    <AppTheme>
      <Box>
        <Navbar />
        { children }
        <Footer />
      </Box>
    </AppTheme>
  )
}