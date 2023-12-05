import { Box } from "@mui/material"
import { SideMenu } from "../components/SideMenu"
import { Scrolltop } from "src/components/Scrolltop"

interface PropTypes {
  children: JSX.Element
}

export const AdminLayout = ({ children }: PropTypes) => {

  return (
    <Box sx={{ position: 'relative'  }}>
      <Scrolltop/>
      <Box sx={{ position: 'absolute', height: '100%' }}>
        <SideMenu />
      </Box>
      <Box>
        <Box 
          component={'main'}
          sx={{
            minHeight: 'calc( 100vh - 65px )',
            height: 'auto',
            overflow: 'hidden',
            top: 0,
          }}>
            { children }
        </Box>
      </Box>
    </Box>
  )
}
