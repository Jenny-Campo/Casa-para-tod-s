import React from 'react'
import { Card, CardContent, CardMedia, Typography, createTheme, ThemeProvider, Grid } from '@mui/material'

const CARD = {  
    width: 1200,
    backgroundColor: '#C9E4EB',
    margin: '20px auto',
    display: 'flex',
    borderRadius: 10,
    marginTop: '20px',
    color:'dark',
    justifyContent:'space-between'
  }

  const theme = createTheme({ 
    palette: {
      light: '#C9E4EB',
      main: '#F1FAFC',
      dark: '#004A94',
      constrastText: '#F7F9A7'
    }
   })

function OwnerProfile() {
  return (
    <ThemeProvider theme={theme}>
    <Grid container>
    <Grid item xs={12} backgroundColor="light">
        <Card sx={ CARD }>
        <Grid xs={6}>   
            <CardMedia
        component="img"
        height="500"
        image="/Fotoperfil.jpg"
        alt="House/Apartment"
                />
        </Grid>
                <Grid xs={6}>
                <CardContent>
                <Typography variant="h6" component="div">
                    Descripción
                </Typography>
                <Typography variant="h6" component="div">
                    Que busca en la APP
                </Typography>
                <Typography variant="h6" component="div">
                    Tiempo libre
                </Typography>
                <Typography variant="h6" component="div">
                    Fumador
                </Typography>
                <Typography variant="h6" component="div">
                    Mascotas
                </Typography>
                <Typography variant="h6" component="div">
                    Trabajas/Jubilado
                </Typography>
                <Typography variant="h6" component="div">
                    Normas en casa
                </Typography>
                <Typography variant="h6" component="div">
                    Opciones para compartir
                </Typography>
                <Typography variant="h6" component="div">
                    Número de teléfono
                </Typography>
                </CardContent>
                </Grid>
        </Card>
        </Grid>
        </Grid>
    </ThemeProvider>
  )
}

export default OwnerProfile