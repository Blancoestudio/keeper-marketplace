import { Navigate, Route, Routes } from "react-router-dom"
import { Landing } from "../pages/Landing"

export const WebRouter = () => {
  return (
    <Routes>
      <Route path="/" element={ <Landing /> } />
      <Route path="/*" element={ <Navigate to={'/'} /> } />
    </Routes>
  )
}
