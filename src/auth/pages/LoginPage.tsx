import { Google } from "@mui/icons-material"
import { Button, Grid2, TextField, Typography, Link } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"


export const LoginPage = () => {
  return (
    <AuthLayout title="Iniciar sesión">
        <form>
          <Grid2 container>
            <Grid2 size={12} sx={{mt:2}}>
              <TextField label="Correo" type="email" fullWidth required />
            </Grid2>
            <Grid2 size={12} sx={{mt:2}}>
              <TextField label="Contraseña" type="password" fullWidth required />
            </Grid2>
            <Grid2 container size={12} spacing={2} sx={{mb:2, mt:2}}>
              <Grid2 size={{xs:12, sm:6}}>
                <Button type="submit" variant="contained" fullWidth>Ingresar</Button>
              </Grid2>
              <Grid2 size={{xs:12, sm:6}}>
                <Button type="submit" variant="contained" fullWidth>
                  <Google/>
                  <Typography sx={{ml:1}}>Google</Typography>
                </Button>
              </Grid2>
            </Grid2>

            <Grid2 container size={12} direction="row" justifyContent="end">
              <Link component={RouterLink} color="inherit" to="/auth/register">Crear una cuenta</Link>
            </Grid2>
          </Grid2>
        </form>
    </AuthLayout>
  )
}
