import { Google } from "@mui/icons-material"
import { Button, Grid2, TextField, Typography, Link, Alert } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { useDispatch, useSelector } from "react-redux"
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth/thunks"
import { AppDispatch } from "../../store/store"
import { useForm } from "react-hook-form"
import { useMemo } from "react"

type FormValues = {
  email: string;
  password: string;
};

export const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  
  const handleGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  }

  const { register, handleSubmit, formState: { isValid, errors } } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    if(isValid) {
      dispatch(startLoginWithEmailPassword(data.email, data.password));
    }
  };

  const { status, errorMessage } = useSelector((state: any) => state.auth);
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  return (
    <AuthLayout title="Iniciar sesión">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid2 container>
            <Grid2 size={12} sx={{mt:2}}>
            <TextField label="Correo" 
              type="email"
              fullWidth
              {...register("email", 
                { required: "El email es requerido",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Formato de email incorrecto"
                }}
              )} 
              error={!!errors.email} 
              helperText={errors.email?.message}/>
            </Grid2>
            <Grid2 size={12} sx={{mt:2}}>
              <TextField label="Contraseña"
                type="password"
                fullWidth
                {...register("password", 
                  { required: "La contraseña es requerido",
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/i,
                    message: "Formato de contraseña incorrecto"
                  }}
                )}
                error={!!errors.password} helperText={!!errors.password ? errors.password?.message : 'La contraseña debe tener al menos un número, una mayúscula, una minúscula y mínimo 8 caracteres'}/>
            </Grid2>
            <Grid2 size={{xs:12}} sx={{mt:2}} display={ !!errorMessage && !isCheckingAuthentication ? '' : 'none'}>
                <Alert severity="error">{errorMessage}</Alert>
              </Grid2>
            <Grid2 container size={12} spacing={2} sx={{mb:2, mt:2}}>
              <Grid2 size={{xs:12, sm:6}}>
                <Button disabled={isCheckingAuthentication} type="submit" variant="contained" fullWidth>
                  <Typography>Ingresar</Typography>
                </Button>
              </Grid2>
              <Grid2 size={{xs:12, sm:6}}>
                <Button variant="contained" fullWidth onClick={handleGoogleSignIn}>
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
