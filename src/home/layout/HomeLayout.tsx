import { Box } from "@mui/material"
import { ReactNode } from "react";
import { NavBar } from "../components/NavBar";

interface HomeLayoutProps {
  children: ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <Box sx={{display:'flex'}}>
        <NavBar/>
        <Box component='main' sx={{ flexGrow:1, p:3, mt: 3}}>
            {children}
        </Box>
    </Box>
  )
}
