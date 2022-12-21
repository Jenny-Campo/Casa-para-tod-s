import React from 'react'
import { AppBar, Box, Toolbar, Typography, Button, ThemeProvider, createTheme, Grid, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const theme = createTheme({
  palette: {
    light: '#C9E4EB',
    main: '#F1FAFC',
    dark: '#004A94',
    constrastText: '#F7F9A7'
  }
 })



function Header() {
  return (
    <ThemeProvider theme={theme}> 
        <Box id="box-header" sx={{ flexGrow: 1  }}>
        <Grid container>
        <Grid item xs={12}>         
            <AppBar sx={{ backgroundColor: 'main', flexGrow: 1  }} position="static">
            <Grid item xs={12}>
                <Toolbar> 
                    <IconButton size="large" edge="start" aria-label="menu" sx={{ mr: 2, color: 'dark'}}>
                        <MenuIcon/>
                    </IconButton>

                    <Typography component={Link} to="/" color="dark" variant="h4" sx={{ flexGrow: 1}}> 
                        Casa para tod@s
                    </Typography>

                    <ThemeProvider theme={theme}> 
                        <Button component={Link} to="/userMenu" size='large' variant="contained"
                            sx={{
                            borderRadius: 10, 
                            color: 'constrastText', 
                            marginRight:'6px',
                            backgroundColor: 'dark' }}>
                                <IconButton aria-label="profile" sx={{color: 'constrastText'}}>
                                    <AccountCircleOutlinedIcon/>
                                </IconButton>
                                    Mi perfil
                        </Button>
                    </ThemeProvider>
                </Toolbar>
            </Grid>
            </AppBar>
        </Grid>
        </Grid>
        </Box> 
    </ThemeProvider>
  );
}


export default Header