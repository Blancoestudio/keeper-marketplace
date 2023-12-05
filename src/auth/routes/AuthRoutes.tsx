import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage } from "../pages"
import { AuthLayout } from "../layout/AuthLayout"
import { PasswordRecovery } from "../pages/PasswordRecovery"
import { PasswordReset } from "../pages/PasswordReset"

export const AuthRoutes = () => {
  return (
    <AuthLayout>
      <Routes>
        <Route path="login" element={ <LoginPage /> } />
        <Route path="register" element={ <RegisterPage /> } />
        <Route path="password-recovery" element={ <PasswordRecovery /> } />
        <Route path="password-reset" element={ <PasswordReset /> } />
        
        <Route path="/*" element={ <Navigate to={"/auth/login"} /> } />
      </Routes>
    </AuthLayout>
  )
}
