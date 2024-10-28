import { Grid2, Typography } from "@mui/material"
import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
  title?: string;
}

export const AuthLayout = ({ children, title = '' }: AuthLayoutProps) => {
  return (
    <Grid2
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
        <Grid2 className='box-shadow' sx={{ width:{sm:450}, backgroundColor: 'white', padding:3, borderRadius:2}}>
            <Typography variant="h5">{title}</Typography>
            {children}
        </Grid2>
    </Grid2>
  )
}
