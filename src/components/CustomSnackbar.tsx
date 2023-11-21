import { 
  Alert,
  AlertColor,
  IconButton, 
  Snackbar 
} from '@mui/material'
import { SyntheticEvent, useEffect, useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { CustomButton } from './CustomButton';

interface PropTypes {
  openStatus: boolean,
  children: JSX.Element,
  severity?: AlertColor,
  setOpenStatus: (status: boolean) => void
}

export const CustomSnackbar = ({ openStatus, setOpenStatus, children, severity = 'success' }: PropTypes) => {

  const [open, setOpen] = useState(openStatus);

  useEffect(() => {
    console.log({openStatus});
    
    setOpen(openStatus)
  }, [openStatus])
  
  const handleClose = (e: SyntheticEvent<Element, Event>, reason?: string) => {

    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    setOpenStatus(false)
  };

  const action = (
    <>
      <CustomButton color="secondary" size="small" onClick={handleClose}>
        UNDO
      </CustomButton>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      autoHideDuration={2000}
      onClose={ handleClose}
      message="Note archived"
      action={action}
    >
      <Alert onClose={ e => handleClose} severity={ severity } sx={{ width: '100%' }}>
        { children } 
      </Alert>
    </Snackbar>
  )
}
