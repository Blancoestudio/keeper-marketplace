import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const themeGeneric = createTheme({
  palette: {
    primary: {
      main: '#5829A6',
    },
    secondary: {
      main: '#000000',
      // main: '#211DFF',
    },
    error: {
      main: red.A400,
    },
  },
});

export default themeGeneric;