import { Box, Modal, useMediaQuery, useTheme } from "@mui/material";

interface CustomModalProps {
  children: JSX.Element | JSX.Element[],
  isOpen: boolean,
}

export const CustomModal = ({ children, isOpen }: CustomModalProps) => {

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: fullScreen ? '90%' : '50%', // Ancho adaptativo
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 5,
    px: 10,
    pb: 8,
    borderRadius: 8
  };

  return (
    <Modal
      open={isOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        { children }
      </Box>
    </Modal>
  )
}
