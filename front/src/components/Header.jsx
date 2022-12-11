import React from 'react'
import { AppBar, Box, Container, Toolbar, Typography, Button, ThemeProvider, createTheme, Grid } from '@mui/material';
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

// pte. poner el el botón de inicia sesión, el link a la página:

function Header() {
  return (
    <ThemeProvider theme={theme}> 
      <Box id="box-header" sx={{ flexGrow: 1  }}>
        <Grid container>
          <Grid item xs={12}>         {/* OJOOO, preguntar a Álvaro, por qué falla al meterle el md */}
            <AppBar sx={{ backgroundColor: 'main', flexGrow: 1  }} position="static">
          <Grid item xs={12}>
            <Toolbar> {/* menú de hamburguesa */}
              <IconButton size="large" edge="start" aria-label="menu" sx={{ mr: 2, color: 'dark'}}>
                <MenuIcon />
              </IconButton>

              <Typography color="dark" variant="h4" component="div" sx={{ flexGrow: 1}}> {/* flexgrow es para que crezca a medida que aumenta la pantalla */}
                Casa para tod@s
              </Typography>

              <ThemeProvider theme={theme}> 
                <Button component={Link} to="/login" size='large' variant="contained" sx={{
                  borderRadius: 10, 
                  color: 'constrastText', 
                  marginRight:'6px',
                  backgroundColor: 'dark' }}>
                    Inicia sesión
                </Button>
                <Button component={Link} to="/register" size='large' variant="contained" sx={{
                  borderRadius: 10,
                  color: 'constrastText',
                  backgroundColor: 'dark' }}>
                    Crea tu perfil
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