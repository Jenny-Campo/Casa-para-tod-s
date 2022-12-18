import React from 'react'
import { Box, Button, Card, CardActions, CardActionArea, CardContent, CardMedia, Typography, createTheme, Grid } from '@mui/material';
import { Link } from 'react-router-dom'

const theme = createTheme({ //paleta de colores (light=azul claro / main=blanco / dark=azul osc. /contrastText= amarillo)
    palette: {
      light: '#C9E4EB',
      main: '#F1FAFC',
      dark: '#004A94',
      constrastText: '#F7F9A7'
    }
   })
   
const CARD = {  // ESTILADO DE LA CARD
    width: 1000,
    backgroundColor: '#004A94',
    margin: '0 auto',
    display: 'flex',
    borderRadius: 20,
    align: 'center',
    justify: 'center'
     
}

function WelcomeCard() {
  return (

    <Box style={CARD} sx={{ flexGrow: 1, margin: '80px' }}>
    <Grid container>
    <Grid item xs={12} md={6}>
      <Card sx={{ width: '1000px', height: '900px', borderRadius: '20px', backgroundColor:'dark'}}>
        <CardContent>
          <Typography gutterBottom variant="h3" component="div" color="white" align="center">
            Porque todas las generaciones tienen dificultades para el acceso a la vivienda
          </Typography>
          <Typography gutterBottom variant="h2" component="div" color="constrastText" align="center" sx={{fontWeight: 'bold'}}>
            compartir
          </Typography>
          <Typography gutterBottom variant="h3" component="div" color="white" align="center">
            nos beneficia a tod@s
          </Typography>
        </CardContent>
        
        <CardActionArea>    {/* ojoooo no consigo que la imagen sea responsive */}
          <CardMedia
            component="img"
            height="500"
            image="/WelcomeCard3.jpg"
            alt="People sharing a cake"
          />
        </CardActionArea>

        <CardActions  color='succes'  sx={{display: 'flex', justifyContent: 'center'}}>
          <Button component={Link} to="/infoApp" size='large' variant="contained" align='center'
            sx={{ borderRadius: 10, color: 'dark', backgroundColor: 'constrastText', marginTop: '10px' }}>
              Ampliar información
          </Button>
        </CardActions>

      </ Card>
    </Grid>
    </Grid>
    </Box>
  )
}

export default WelcomeCard