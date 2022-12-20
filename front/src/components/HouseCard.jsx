import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, ThemeProvider, createTheme, CardActions } from '@mui/material';
import { Link } from 'react-router-dom'


const theme = createTheme({ //paleta de colores (light=azul claro / main=blanco / dark=azul osc. /contrastText= amarillo)
  palette: {
    light: '#C9E4EB',
    main: '#F1FAFC',
    dark: '#004A94',
    constrastText: '#F7F9A7'
  }
 })


function HouseCard({houseId, location, address, description, rentalPrice}) {
  return (
    <ThemeProvider theme={theme}>
    <Card sx={{m:2,  width: '380px', height: '380px', position:'relative'}}>
      <CardMedia
        component="img"
        height="200"
        image="/WelcomeCard.jpg"
        alt="House/Apartment"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" color="dark">
          { location } , { address }
        </Typography>
        <Typography variant="body3" color="text.secondary">
          { description } 
        </Typography>
      </CardContent>
      <CardActions sx={{position: 'absolute', display: 'flex', justifyContent: 'space-between', bottom:'0', right:'0'}}>
      <Typography variant="h6" sx={{color:'dark'}}>
          { rentalPrice }€/mes
          </Typography>
        <Button component={Link} to={`/houseInfo/${houseId}`} size="sm" sx={{color:'dark'}}>
          Info
        </Button>
      </CardActions>
    </Card>
    </ThemeProvider>
  );
}

export default HouseCard