import { Google } from "@mui/icons-material"
import { Button, Grid2, TextField, Typography, Link } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"


export const LoginPage = () => {
  return (
    <Grid2
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
      <Grid2 className='box-shadow' sx={{ backgroundColor: 'white', padding:3, borderRadius:2}}>
        <h1>Login</h1>
        <form>
          <Grid2 container>
            <Grid2 size={12} sx={{mt:2}}>
              <TextField label="Correo" type="email" fullWidth required />
            </Grid2>
            <Grid2 size={12} sx={{mt:2}}>
              <TextField label="Contraseña" type="password" fullWidth required />
            </Grid2>
            <Grid2 container size={12} spacing={2} sx={{mb:2, mt:2}}>
              <Grid2 size={6}>
                <Button type="submit" variant="contained" fullWidth>Ingresar</Button>
              </Grid2>
              <Grid2 size={6}>
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
      </Grid2>

    </Grid2>
  )
}
