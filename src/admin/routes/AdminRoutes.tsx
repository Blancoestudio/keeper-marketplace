import { Navigate, Route, Routes } from "react-router-dom"
import { Dashboard } from "../pages/DashboardPage"
import { AdminLayout } from "../layout/AdminLayout"
import { Profile } from "../pages/Profile"


export const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="dashboard" element={ <Dashboard /> } />
        <Route path="profile" element={ <Profile /> } />

        <Route path="/*" element={ <Navigate to="/dashboard" /> } />
      </Routes>
    </AdminLayout>
  )
}
