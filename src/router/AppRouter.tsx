import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { AdminRoutes } from "../admin/routes/AdminRoutes"
import { WebRouter } from "../web/router/WebRouter"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={ <AuthRoutes /> } />
      <Route path="/admin/*" element={ <AdminRoutes /> } />
      <Route path="/*" element={ <WebRouter /> } />
    </Routes>
  )
}
