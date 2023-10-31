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
        overflow: 'auto',
        padding: '2em 0'
      }}>
      { children }
    </Box>
  )
}
