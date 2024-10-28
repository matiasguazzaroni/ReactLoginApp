import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { HomeRoutes } from "../home/routes/HomeRoutes"

export const AppRouter = () => {
  return (
    <Routes>
        /* Login */
        <Route path="/auth/*" element={<AuthRoutes/>}></Route>
        
        /* Dashboard */
        <Route path="/*" element={<HomeRoutes/>}></Route>

    </Routes>
  )
}
