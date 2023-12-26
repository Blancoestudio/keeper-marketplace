import { Button, ButtonProps, styled } from "@mui/material"

const StyledButton = styled(Button)(() => ({
  paddingTop: 8,
  paddingBottom: 8,
  borderRadius: 4,
  fontFamily: 'Raleway',
  textTransform: 'none',
  fontWeight: 'bold',
}))

interface PropsTypes extends ButtonProps {
  children: React.ReactNode;
}

export const CustomButton = ({ children, ...props } :PropsTypes) => {
  return (
    <StyledButton
      disableElevation
      disableRipple
      {...props}
    >{ children }</StyledButton>
  )
}
