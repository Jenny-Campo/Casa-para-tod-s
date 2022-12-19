import {React, useEffect, useState } from 'react'
import { Card, CardContent, CardMedia, CardActions, Button, Box, Typography, createTheme, ThemeProvider, Grid } from '@mui/material';
import HeaderLogged from '../components/HeaderLogged';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import getOwnProfile from '../services/userService';


const theme = createTheme({ //paleta de colores (light=azul claro / main=blanco / dark=azul osc. /contrastText= amarillo)
    palette: {
      light: '#C9E4EB',
      main: '#F1FAFC',
      dark: '#004A94',
      constrastText: '#F7F9A7'
    }
})

const BACKGROUND = {
    height: 3000,
    backgroundColor: '#C9E4EB',
    margin: '0 auto',
}

const CARD = {         
    width: '750px',
    height: '1500',
    margin: '20px auto', // 2 valores aplica ariba-abajo, y der.-izq.
    display: 'flex',
    justify: 'center',
    align:'center',
    backgroundColor: '#F1FAFC',
    borderRadius: '20px',
}

const BUTTON1 = {                 
    backgroundColor: '#004A94',
    color: '#F7F9A7',
    borderRadius: 50
}


function GetOwnProfilePage() {

    const [name, setName] = useState('')

    // let userProfile = ''
    // useEffect(() => {
    //     userProfile = getOwnProfile()
    //     // setName(userProfile.name)
    //     // console.log('name', name)
    //     // console.log('resultado 2', userProfile)
    // }, [])

    // console.log('resultado', userProfile)

    return (
    <ThemeProvider theme={theme}>
        <HeaderLogged/>
            <Box style={BACKGROUND}>
                <Grid container>
                <Grid item xs={12}> 

                    <Card sx={CARD}>
                        <CardContent>
                            <CardMedia
                                component="img"
                                width="900"
                                height="500"
                                image="/señora.jpg"
                                alt="Caser@"
                            />

                            <Typography gutterBottom variant="h6" component="div" color="dark" sx={{fontWeight: 'bold', marginTop: '20px'}}>
                                Nombre y apellidos:
                            </Typography>
                            <Typography variant="body2" color="dark">
                                {name}
                            </Typography>

                            <Typography gutterBottom variant="h6" component="div" color="dark" sx={{fontWeight: 'bold', marginTop: '20px'}}>
                                Edad:
                            </Typography>
                            <Typography variant="body2" color="dark">
                                x
                            </Typography>

                            <Typography gutterBottom variant="h6" component="div" color="dark" sx={{fontWeight: 'bold', marginTop: '20px'}}>
                                Dirección:
                            </Typography>
                            <Typography variant="body2" color="dark">
                                x
                            </Typography>

                            <Typography gutterBottom variant="h6" component="div" color="dark" sx={{fontWeight: 'bold', marginTop: '20px'}}>
                                Localidad:
                            </Typography>
                            <Typography variant="body2" color="dark">
                                x
                            </Typography>

                            <Typography gutterBottom variant="h6" component="div" color="dark" sx={{fontWeight: 'bold', marginTop: '20px'}}>
                                Teléfono:
                            </Typography>
                            <Typography variant="body2" color="darkgray">
                                x
                            </Typography>

                            <Typography gutterBottom variant="h6" component="div" color="dark" sx={{fontWeight: 'bold', marginTop: '20px'}}>
                                Información:
                            </Typography>
                            <Typography variant="body2" color="dark">
                                x aqui el sobre ti
                            </Typography>

                            <Typography gutterBottom variant="h6" component="div" color="dark" sx={{fontWeight: 'bold', marginTop: '20px'}}>
                                Qué busco en la app:
                            </Typography>
                            <Typography variant="body2" color="dark">
                                x looking for
                            </Typography>

                            <Typography gutterBottom variant="h6" component="div" color="dark" sx={{fontWeight: 'bold', marginTop: '20px'}}>
                                Hobbies:
                            </Typography>
                            <Typography variant="body2" color="darky">
                                x
                            </Typography>

                            <Typography gutterBottom variant="h6" component="div" color="dark" sx={{fontWeight: 'bold', marginTop: '20px'}}>
                                Información sobre consumo de tabaco:
                            </Typography>
                            <Typography variant="body2" color="dark">
                                x
                            </Typography>

                            <Typography gutterBottom variant="h6" component="div" color="dark" sx={{fontWeight: 'bold', marginTop: '20px'}}>
                                Mascotas:
                            </Typography>
                            <Typography variant="body2" color="dark">
                                x
                            </Typography>

                            <Typography gutterBottom variant="h6" component="div" color="dark" sx={{fontWeight: 'bold', marginTop: '20px'}}>
                                Información laboral:
                            </Typography>
                            <Typography variant="body2" color="dark">
                                x
                            </Typography>

                            <Typography gutterBottom variant="h6" component="div" color="dark" sx={{fontWeight: 'bold', marginTop: '20px'}}>
                                Normas de la casa:
                            </Typography>
                            <Typography variant="body2" color="dark">
                                x
                            </Typography>

                            <Typography gutterBottom variant="h6" component="div" color="dark" sx={{fontWeight: 'bold', marginTop: '20px'}}>
                                Compañer@s ideales:
                            </Typography>
                            <Typography variant="body2" color="dark">
                                x
                            </Typography>

                            <CardActions sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                <Button component={Link} to="/userMenu" style={BUTTON1} size="large">Volver al menú</Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
                </Grid>
            </Box>
        <Footer/>
    </ThemeProvider>
  )
}

export default GetOwnProfilePage