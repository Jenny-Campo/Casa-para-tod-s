import React from 'react'
import { AppBar, Box, Toolbar, Typography, Button, ThemeProvider, createTheme, Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'

const theme = createTheme({ //paleta de colores (light=azul claro / main=blanco / dark=azul osc. /contrastText= amarillo)
  palette: {
    light: '#C9E4EB',
    main: '#F1FAFC',
    dark: '#004A94',
    constrastText: '#F7F9A7'
  }
 })

// pte. hacer el GRID en los nuttons y poner el el botón de inicia sesión, el link a la página:

function Header() {
  return (
    <ThemeProvider theme={theme}> 
      <Box id="box" sx={{ flexGrow: 1 , '@media print': {width: 300}}}>
        <Grid container spacing={12}>
        <Grid item xs={12} direction='row'>

          <AppBar sx={{ backgroundColor: 'main' }} position="static">
          <Grid item xs={12} direction='row'>

            <Toolbar>

              <IconButton size="large" edge="start" aria-label="menu" sx={{ mr: 2, color: 'dark' }}>
                <MenuIcon />
              </IconButton>
              
              <Typography color="dark" variant="h4" component="div" sx={{ flexGrow: 1}}>
                Casa para tod@s
              </Typography>
              
              <ThemeProvider theme={theme}> 
                {/* <Grid item xs={2} spacing={4} direction='row'> */}
                <Button size='large' variant="contained" sx={{
                  borderRadius: 10, 
                  color: 'constrastText', 
                  backgroundColor: 'dark' }}>
                    Inicia sesión
                </Button>
                {/* </Grid> */}
                {/* <Grid item xs={2} spacing={4} direction='row'> */}
                <Button component={Link} to="/register" size='large' variant="contained" sx={{
                  borderRadius: 10,
                  color: 'constrastText',
                  backgroundColor: 'dark' }}>
                    Crea tu perfil
                </Button>
                {/* </Grid> */}   
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