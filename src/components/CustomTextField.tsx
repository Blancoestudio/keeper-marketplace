import { useState } from "react";

import { FormControl, InputLabel, InputBase, IconButton, InputAdornment, InputBaseProps, FormHelperText } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {  styled } from '@mui/material/styles';
import { red } from "@mui/material/colors";

const CustoInputLabel = styled(InputLabel)( () => ({
  fontSize: '1.25em',
  color: '#727D91',
  transform: 'translate(0, 0) scale(0.75)',
  '&.Mui-focused': {
    color: '#727D91',
  }
}));

const CustomInputBase = styled( InputBase )( () => ({
  position: 'relative',
  fontSize: 16,
  fontFamily: 'Roboto',
  backgroundColor: "#F8F8FD",
  borderRadius: 5,
  marginTop: '1.75em',
  padding: '10px 10px 10px 12px',
  border: '1px solid #EAEAEA',
  '&.Mui-error': {
    borderColor: red[600]
  }
}));

const CustomInputAdorment = styled(InputAdornment)(() => ({
  marginRight: 0
}))

interface CustomTextFieldProps extends InputBaseProps {
  id?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  error?: boolean;
  helperText?: string;
  [key: string]: unknown; 
}

export const CustomTextField = ({ 
  id,
  label = '',
  type = 'text',
  helperText,
  error = false,
  ...props
}: CustomTextFieldProps) => {

  const [showPassword, setShowPassword] = useState(false)
  
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const handleMouseDownPassword = () => {}

  return (
    <FormControl fullWidth sx={{ mb: 2 }} error={error}>
      
      <CustoInputLabel shrink htmlFor={ id }>{ label }</CustoInputLabel>
      
      <CustomInputBase id={ id } 

        type={ 
          (type === 'password')
            ? (showPassword ? 'text' : 'password')
            : type
        }

        endAdornment={
          (type === 'password')
            ? (
              <CustomInputAdorment position="start" variant="outlined">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </CustomInputAdorment>
            )
            : null
        }
        
        {...props}
      />

      {helperText && (
        <FormHelperText>{helperText}</FormHelperText>
      )}
    </FormControl>
  )
}
