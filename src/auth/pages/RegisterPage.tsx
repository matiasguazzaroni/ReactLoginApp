import { Button, Grid2, TextField, Link, Alert } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";
import { useMemo } from "react";

type FormValues = {
  fullName: string;
  email:string;
  password: string;
};


export const RegisterPage = () => {

  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit, formState: { isValid, errors }} = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    
    if(isValid) {
      dispatch( startCreatingUserWithEmailPassword(data.email, data.password, data.fullName) ); 
    }
  }

  const { status, errorMessage } = useSelector((state: any) => state.auth);
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  return (
    <AuthLayout title="Crear cuenta">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid2 container>
            <Grid2 size={12} sx={{mt:2}}>
              <TextField label="Nombre completo"
               type="text" 
               fullWidth 
               {...register("fullName", { required: "El nombre es requerido" })}  
                error={!!errors.fullName} 
                helperText={errors.fullName?.message}/>
            </Grid2>
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
              )}  error={!!errors.password} helperText={errors.password?.message}/>
            </Grid2>
            <Grid2 container size={12} spacing={2} sx={{mb:2, mt:2}}>
              <Grid2 size={{xs:12}} display={ !!errorMessage && !isCheckingAuthentication ? '' : 'none'}>
                <Alert severity="error">{errorMessage}</Alert>
              </Grid2>
              <Grid2 size={{xs:12}}>
                <Button disabled={isCheckingAuthentication} type="submit" variant="contained" fullWidth>Registrar</Button>
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
