import { Box, Button, Modal, Typography, useMediaQuery, useTheme } from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

interface ResponseModalProps {
  isOpen: boolean,
  isError: boolean,
  title?: string,
  message?: string,
  onClose: () => void
}

export const ResponseModal = ({ 
  isOpen, 
  isError,
  title = 'Título modal', 
  message,
  onClose
}: ResponseModalProps) => {

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: fullScreen ? '90%' : '35%', 
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 5,
    px: 10,
    pb: 5,
    borderRadius: 6,
    textAlign: 'center'
  };

  return (
    <Modal
      open={isOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {
          isError
            ? <ErrorOutlineIcon sx={{ fontSize: 60, color: 'error.main', mb: 2 }} />
            : <CheckCircleOutlineIcon sx={{ fontSize: 60, color: 'success.main', mb: 2 }} />
        }
        <Typography id="modal-modal-title" variant="h6" component="h2">{ title }</Typography>
        <Typography id="modal-modal-description" sx={{ mt: 1, mb: 3 }}>{ message }</Typography>
        <Button variant="contained" onClick={ onClose }>Cerrar</Button>
      </Box>
    </Modal>
  )
}
