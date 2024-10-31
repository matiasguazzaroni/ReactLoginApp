import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { HomeRoutes } from "../home/routes/HomeRoutes"
import { useCheckAuth } from "../hooks/useCheckAuth";

export const AppRouter = () => {

  const {status} = useCheckAuth();

  return (
    <Routes>

      {
        (status === 'logged')
        ? <Route path="/*" element={<HomeRoutes/>}></Route>
        : <Route path="/auth/*" element={<AuthRoutes/>}></Route>
      }
      <Route path="/*" element={<Navigate to='/auth/login'/>}></Route>
    </Routes>
  )
}
