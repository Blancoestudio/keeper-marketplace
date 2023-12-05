import { Navigate, Route, Routes } from "react-router-dom"

import { AdminLayout } from "../layout/AdminLayout"

import { BusinessRegisterPage } from "../pages/BusinessRegisterPage"
import { Dashboard } from "../pages/DashboardPage"
import { MyAcountPage } from "../pages/MyAcountPage"
import { CreateProductPage } from "../pages/CreateProductPage"
import { WelcomePage } from "src/admin/pages/WelcomePage"
import { EditProductPage } from "../pages/EditProductPage"



export const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="business-register" element={ <BusinessRegisterPage /> } />
        <Route path="welcome" element={ <WelcomePage /> } />
        <Route path="dashboard" element={ <Dashboard /> } />
        <Route path="my-acount" element={ <MyAcountPage /> } />
        <Route path="product/create" element={ <CreateProductPage /> } />
        <Route path="product/edit/:productID" element={ <EditProductPage /> } />

        <Route path="/*" element={ <Navigate to="/dashboard" /> } />
      </Routes>
    </AdminLayout>
  )
}
