import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const typography = {
  h1: {
    fontFamily: '"Raleway", sans-serif',
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
  h2: {
    fontFamily: '"Raleway", sans-serif',
  },
  h3: {
    fontFamily: '"Raleway", sans-serif',
  },
  h4: {
    fontFamily: '"Raleway", sans-serif',
  },
  h5: {
    fontFamily: '"Raleway", sans-serif',
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
    },
  },
  typography
});


const themeResponsive = responsiveFontSizes(themeGeneric);
export default themeResponsive;