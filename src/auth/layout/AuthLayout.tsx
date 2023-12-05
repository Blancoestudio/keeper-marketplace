import { Container, Grid } from "@mui/material"
import { Scrolltop } from "src/components/Scrolltop"
interface PropTypes {
  children: JSX.Element
}

export const AuthLayout = ({ children }: PropTypes) => {
  return (
    <Container maxWidth={'xl'}>
      <Scrolltop />
      <Grid container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          minHeight: 'calc( 100vh - 65px )'
        }}
      >
        { children }
      </Grid>
    </Container>
  )
}
