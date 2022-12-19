import React from 'react'
import HeaderLogged from '../components/HeaderLogged';
import { Box, ThemeProvider, createTheme, Container, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText,
  Divider, Card, CardActionArea, CardMedia, CardContent, CardHeader} from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import OutboxOutlinedIcon from '@mui/icons-material/OutboxOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Footer from '../components/Footer';
import GetOwnProfilePage from './GetOwnProfilePage';
import { Link } from 'react-router-dom'


const theme = createTheme({ //paleta de colores (light=azul claro / main=blanco / dark=azul osc. /contrastText= amarillo)
  palette: {
    light: '#C9E4EB',
    main: '#F1FAFC',
    dark: '#004A94',
    constrastText: '#F7F9A7'
  }
})

const BACKGROUND = {
  height: 750,
  backgroundColor: '#C9E4EB',
  
}

const CARD = {         //ojo, aquí no coge los nombres de los colores, solo los números
  width: '900px',
  margin: '20px auto', // 2 valores aplica ariba-abajo, y der.-izq.
  display: 'flex',
  justify: 'center',
  backgroundColor: '#F1FAFC',  // en sx sería bgColor
  '@media print': {width: 300}
}

function UsersMenu() {

  return (
    
    <ThemeProvider theme={theme}>
      <HeaderLogged/>

      <Box id="Home" style={BACKGROUND} sx={{ flexGrow: 1 }}>
      <Grid container>
      <Grid item xs={12}>
      <Container fluid="true">

        <Card sx={{ width: '500px', height: '300px', margin: '20px auto' }}> {/* OJOOO, NO CONSIGO QUE LA FOTO SEA RESPONSIVE !! */}
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image="/saludo.png"
              alt="Welcome"
            />
          </CardActionArea>
        </Card>

        <Box sx={{ width: '100%', maxWidth: 450, bgcolor: 'main', margin: '20px auto', color: 'dark', fontWeight: 'bold', fontSize: 'h6' }}>
          <CardContent>
            <CardHeader title="Bienvenid@, ¿qué quieres hacer?" sx={{backgroundColor: 'dark', color: 'constrastText', borderRadius: 1, alignItems: 'center' }} />
          </CardContent>
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding component={Link} to="/getOwnProfile" sx={{color: 'dark'}}>
                <ListItemButton>
                  <ListItemIcon>
                    <VisibilityOutlinedIcon sx={{color: 'dark'}} />
                  </ListItemIcon>
                  <ListItemText primary="Ver mi perfil" />
                </ListItemButton>
              </ListItem>
              <Divider/>

              <ListItem disablePadding component={Link} to="/updateProfile" sx={{color: 'dark'}}>
                <ListItemButton>
                  <ListItemIcon>
                    <EditOutlinedIcon sx={{color: 'dark'}} />
                  </ListItemIcon>
                  <ListItemText primary="Modificar mi perfil" />
                </ListItemButton>
              </ListItem>
              <Divider/>

              <ListItem disablePadding component={Link} to="/createHouseAd" sx={{color: 'dark'}}>
                <ListItemButton>
                  <ListItemIcon>
                    <OutboxOutlinedIcon sx={{color: 'dark'}} />
                  </ListItemIcon>
                  <ListItemText primary="Publicar un anuncio" />
                </ListItemButton>
              </ListItem>
              <Divider />

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <InboxOutlinedIcon sx={{color: 'dark'}} />
                  </ListItemIcon>
                  <ListItemText primary="Ver mis anuncios" />
                </ListItemButton>
              </ListItem>
              <Divider />

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <LogoutOutlinedIcon sx={{color: 'dark'}} />
                  </ListItemIcon>
                  <ListItemText primary="Cerrar sesión" />
                </ListItemButton>
              </ListItem>

            </List>
          </nav>
          <Divider />

      </Box>
      </Container>
      </Grid>
      </Grid>
    </Box>

    <Footer/>
  </ThemeProvider>
  )
}

export default UsersMenu