import { Box } from "@mui/material"

interface PropTypes {
  children: JSX.Element
}

export const AuthLayout = ({ children }: PropTypes) => {
  return (
    <Box 
      component={'main'}
      sx={{
        minHeight: 'calc( 100vh - 65px )',
        py: 5
      }}>
      { children }
    </Box>
  )
}
