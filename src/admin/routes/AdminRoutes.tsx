import { Navigate, Route, Routes } from "react-router-dom"

import { AdminLayout } from "../layout/AdminLayout"

import { BusinessRegisterPage } from "../pages/BusinessRegisterPage"
import { Dashboard } from "../pages/DashboardPage"
import { Profile } from "../pages/Profile"
import { CreateProductPage } from "../pages/CreateProductPage"



export const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="business-register" element={ <BusinessRegisterPage /> } />
        <Route path="dashboard" element={ <Dashboard /> } />
        <Route path="profile" element={ <Profile /> } />
        <Route path="create-product" element={ <CreateProductPage /> } />

        <Route path="/*" element={ <Navigate to="/dashboard" /> } />
      </Routes>
    </AdminLayout>
  )
}
