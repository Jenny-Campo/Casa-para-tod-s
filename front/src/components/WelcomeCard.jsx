import React from 'react'
import { AppBar, Box, Button, ButtonGroup, Card, CardHeader, CardActions, CardActionArea, CardContent, CardMedia, TextField, Toolbar, Typography, ThemeProvider, createTheme, Grid } from '@mui/material';

const theme = createTheme({ //paleta de colores (light=azul claro / main=blanco / dark=azul osc. /contrastText= amarillo)
    palette: {
      light: '#C9E4EB',
      main: '#F1FAFC',
      dark: '#004A94',
      constrastText: '#F7F9A7'
    }
   })
   
const CARD = {  // ESTILADO DE LA CARD
    height: 500,
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
        {/* <Card sx={{ MaxWidth: 300, marginTop: '20px'}}> */}
        <Grid container>
        <Grid item xs={12} md={6}>
            <CardActionArea>
{/* ojoooo no consigo que la imagen sea responsive */}
            <CardMedia
                component="img"
                image="/WelcomeCard.jpg"
                alt="People sharing a cake"
                justify="center"
                align="center"
                borderRadius="20px"
                sx={{borderRadius:'20'}}
            />
            </CardActionArea>
        </Grid>
        </Grid>
        {/* </Card> */}
    </Box>
  )
}

export default WelcomeCard