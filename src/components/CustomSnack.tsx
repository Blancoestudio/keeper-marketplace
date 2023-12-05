import { Alert, AlertColor, Snackbar } from "@mui/material"
import Slide from '@mui/material/Slide';

interface CustomSnackProps {
  isOpen: boolean,
  severity?: AlertColor,
  message?: string
}

export const CustomSnack = ({isOpen, severity = 'info', message = 'Mi mensaje'}: CustomSnackProps) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      TransitionComponent={ (props) => <Slide {...props} direction="left" /> }
      autoHideDuration={2000}
      open={isOpen}
    >
      <Alert severity={severity} elevation={4}>{ message }</Alert>
    </Snackbar>
  )
}
