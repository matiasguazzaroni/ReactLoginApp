import { LogoutOutlined } from "@mui/icons-material"
import { AppBar, Grid2, Icon, IconButton, Typography } from "@mui/material"

export const NavBar = () => {
  return (
    <AppBar position="fixed">
        <Grid2 container direction='row' justifyContent='space-between'>
            <Typography sx={{alignContent:'center', ml:2}}> Home </Typography>
            <IconButton color='error'>
                <LogoutOutlined/>
            </IconButton>
        </Grid2>
    </AppBar>
  )
}
