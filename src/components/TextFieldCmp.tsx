import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormControl, IconButton, InputAdornment, InputBase, InputLabel, styled } from "@mui/material";
import { useState } from "react";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    borderRadius: 5,
    marginTop: theme.spacing(3),
    color: '#ABB4C5',
    paddingRight: 10,
    backgroundColor: "#F8F8FD",
    border: '1px solid #EAEAEA'
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

    // Use the system font instead of the default Roboto font.
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
    '&:focus': {
      // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      // borderColor: theme.palette.primary.main,
    },
  },
}));


interface PropTypes {
  label?: string,
  placeholder?: string,
  type?: string
}


export const TextFieldCmp = ({ 
  label = 'Add label',
  placeholder = 'Add placeholder',
  type = 'text'
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
        htmlFor="bootstrap-input" 
        style={{ 
          fontSize: "1.25em", 
          color: "#727D91" 
          }}>
            { label }
      </InputLabel>
      
        <BootstrapInput 
          id="bootstrap-input" 
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
        />
    </FormControl>
  )
}
