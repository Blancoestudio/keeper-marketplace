import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import themeGeneric from './theme'

interface PropTypes {
  children: JSX.Element
}

export const AppTheme = ({ children }: PropTypes) => {
  return (
    <ThemeProvider theme={themeGeneric}>
      <CssBaseline />
      { children }
    </ThemeProvider>
  )
}
