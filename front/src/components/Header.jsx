import React from 'react'
import { AppBar, Box, Toolbar, Typography, Button, createTheme, ThemeProvider } from '@mui/material';
//import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'

const theme = createTheme({
  palette: {
    darkBlue: {
      main: '#004A94'
    },
    yellow: {
      main: '#F7F9A7'
    },
    white: {
      main: '#F1FAFC'
    },
    blue: {
      main: '#C9E4EB'
    }
  },
  text: {
    yellow: {
      main: '#F7F9A7'
    },
    white: {
      main:'#F1FAFC'
    }
  },
});

function Header() {
  //export default function Header() {
    return (
      <Box sx={{ flexGrow: 1 , '@media print': {width: 300}}}>
         <ThemeProvider theme={theme}>
          <AppBar color="blue" position="static" >
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            > */}
              {/* <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
              Casa para tod@s
            </Typography>
            <ThemeProvider theme={theme}>
              <Button variant="contained" color="darkBlue" sx={{borderRadius: 10, }}>Inicio de sesión</Button>
              <Button component={Link} to="/register" variant="contained" color="darkBlue"  sx={{borderRadius: 10, color: 'text.yellow' }}> Crea tu perfil </Button>
            </ThemeProvider>
          </Toolbar>
        </AppBar>
        </ThemeProvider>
      </Box> 
    );
  }


export default Header