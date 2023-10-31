import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormControl, IconButton, InputAdornment, InputBase, InputLabel, styled } from "@mui/material";
import { useState } from "react";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    borderRadius: 5,
    marginTop: theme.spacing(3),
    color: '#ABB4C5',
    paddingRight: 10,
    backgroundColor: "#F3F6F9",
    border: '1px solid #E0E3E7'
  },
  '& .MuiInputBase-input': {
    border: 0,
    position: 'relative',
    fontSize: 16,
    width: '100%',
    padding: '10px 0 10px 12px',

    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),

    fontFamily: [
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&::placeholder': {
      color: '#727D91',
      opacity: 1
    }
  },
}));

interface PropTypes {
  id: string,
  label?: string,
  placeholder?: string,
  type?: string,
  [key: string]: unknown,
}

export const TextFieldCmp = ({ 
  id = 'id',
  label = 'Add label',
  placeholder = 'Add placeholder',
  type = 'text',
  ...props
}: PropTypes) => {

  const [showPassword, setShowPassword] = useState(false)
  
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const handleMouseDownPassword = () => {}

  return (
    <FormControl 
      variant="standard" 
      sx={{ 
        width: '100%',
        marginBottom: '1em',
        }}>
      <InputLabel 
        shrink 
        htmlFor={ `${id}` } 
        style={{ 
          fontSize: "1.25em", 
          color: "#727D91" 
          }}>
            { label }
      </InputLabel>
      
        <BootstrapInput 
          id={ `${id}` } 
          type={ 
            (type === 'password')
              ? (showPassword ? 'text' : 'password')
              : type
          }
          placeholder={ placeholder } 
          endAdornment={
            (type === 'password')
              ? (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
              : null
          }
          {...props}
        />
    </FormControl>
  )
}
