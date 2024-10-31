import { LogoutOutlined } from "@mui/icons-material"
import { AppBar, Grid2, Icon, IconButton, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { startLogout } from "../../store/auth/thunks";
import { AppDispatch } from "../../store/store";

export const NavBar = () => {

  const dispatch = useDispatch<AppDispatch>();
  const {displayName} = useSelector((state: any) => state.auth);

  const onLogout = () => {
    dispatch(startLogout())
  }

  return (
    <AppBar position="fixed">
        <Grid2 container direction='row' justifyContent='space-between'>
            <Typography sx={{alignContent:'center', ml:2}}> User logged: {displayName} </Typography>
            <IconButton color='error' onClick={ onLogout}>
                <LogoutOutlined/>
            </IconButton>
        </Grid2>
    </AppBar>
  )
}
