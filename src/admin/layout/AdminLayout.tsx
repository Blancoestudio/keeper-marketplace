import { Box } from "@mui/material"
import { SideMenu } from "../components/SideMenu"

interface PropTypes {
  children: JSX.Element
}

export const AdminLayout = ({ children }: PropTypes) => {
  return (
    <>
      <SideMenu />
      <Box 
        component={'main'}
        sx={{
          minHeight: 'calc( 100vh - 65px )',
        }}>
        { children }
      </Box>
    </>
  )
}
