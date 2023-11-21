import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage } from "../pages"
import { AuthLayout } from "../layout/AuthLayout"
import { RegisterSuccess } from "../pages/RegisterSuccess"
import { CheckoutPage } from "../pages/CheckoutPage"

export const AuthRoutes = () => {
  return (
    <AuthLayout>
      <Routes>
        <Route path="login" element={ <LoginPage /> } />
        <Route path="register" element={ <RegisterPage /> } />
        <Route path="register-success" element={ <RegisterSuccess /> } />
        <Route path="checkout" element={ <CheckoutPage /> } />
        
        <Route path="/*" element={ <Navigate to={"/auth/login"} /> } />
      </Routes>
    </AuthLayout>
  )
}
