import { Box } from "@mui/material"
import { SideMenu } from "../components/SideMenu"
// import { useEffect, useState } from "react"

interface PropTypes {
  children: JSX.Element
}

export const AdminLayout = ({ children }: PropTypes) => {

  // const [windowScroll, setWindowScroll] = useState(0);

  // useEffect(() => {

  //   console.log(windowScroll);
    
    
  // }, [])
  

  return (
    <Box sx={{ position: 'relative'  }}>
      <Box sx={{ position: 'absolute', height: '100%' }}>
        <SideMenu />
      </Box>
      <Box>
        <Box 
          component={'main'}
          sx={{
            height: 'auto',
            overflow: 'auto',
            top: 0
          }}>
            { children }
        </Box>
      </Box>
    </Box>
  )
}
