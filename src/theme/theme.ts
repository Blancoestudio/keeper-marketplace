import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const typography = {
  h1: {
    [createTheme().breakpoints.down('md')]: {
      fontSize: '3.5em'
    },
    [createTheme().breakpoints.down('sm')]: {
      fontSize: '2.5em'
    },
    [createTheme().breakpoints.down('xs')]: {
      fontSize: '1.5em'
    },
  },
};

const themeGeneric = createTheme({
  palette: {
    primary: {
      main: '#5829A6',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#A0A0A0',
      contrastText: '#ffffff'
    },
    error: {
      main: red.A400,
    },
  },
  components:{
    MuiSelect: {
      // styleOverrides: {
      //   root: {
      //       marginTop: '1.75em',
      //     '&.Mui-focused': {
      //       backgroundColor: "#F8F8FD",
      //     },
      //     '> ul': {
      //       backgroundColor: "red",
      //     },
      //     'label': {
      //       marginTop: '1.75em',
      //     },
      //   },
      //   select:{
      //     backgroundColor: "#F8F8FD",
      //   },
      // },
      defaultProps: {
        disableUnderline: true,
      }
    },
  },
  typography
});


const themeResponsive = responsiveFontSizes(themeGeneric);
export default themeResponsive;