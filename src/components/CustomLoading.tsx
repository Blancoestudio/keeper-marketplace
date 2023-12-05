// import { useState } from "react"
import { Backdrop, CircularProgress } from "@mui/material"

interface Props {
  isOpen: boolean
}

export const CustomLoading = ({ isOpen }: Props) => {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isOpen}
      // onClick={handleClose}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}
