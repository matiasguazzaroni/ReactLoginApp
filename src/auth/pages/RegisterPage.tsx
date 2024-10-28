import { Button, Grid2, TextField, Link } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"


export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear cuenta">
        <form>
          <Grid2 container>
            <Grid2 size={12} sx={{mt:2}}>
              <TextField label="Nombre completo" type="text" fullWidth required />
            </Grid2>
            <Grid2 size={12} sx={{mt:2}}>
              <TextField label="Correo" type="email" fullWidth required />
            </Grid2>
            <Grid2 size={12} sx={{mt:2}}>
              <TextField label="Contraseña" type="password" fullWidth required />
            </Grid2>
            <Grid2 container size={12} spacing={2} sx={{mb:2, mt:2}}>
              <Grid2 size={{xs:12}}>
                <Button type="submit" variant="contained" fullWidth>Registrar</Button>
              </Grid2>
            </Grid2>

            <Grid2 container size={12} direction="row" justifyContent="end">
              ¿Ya tienes una cuenta?
              <Link component={RouterLink} color="inherit" to="/auth/login" sx={{ml:1}}>Ingresar</Link>
            </Grid2>
          </Grid2>
        </form>
    </AuthLayout>
  )
}
