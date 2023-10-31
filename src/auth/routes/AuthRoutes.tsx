import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage, BusinessRegister, RegisterSuccess } from "../pages"
import { AuthLayout } from "../layout/AuthLayout"

export const AuthRoutes = () => {
  return (
    <AuthLayout>
      <Routes>
        <Route path="login" element={ <LoginPage /> } />
        <Route path="register" element={ <RegisterPage /> } />
        <Route path="register-success" element={ <RegisterSuccess /> } />
        
        <Route path="businnes-register" element={ <BusinessRegister /> } />
        
        <Route path="/*" element={ <Navigate to={"/auth/login"} /> } />
      </Routes>
    </AuthLayout>
  )
}
