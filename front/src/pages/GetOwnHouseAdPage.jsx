import { React, useEffect, useState } from 'react'
import { Card, CardContent, CardMedia, CardActions, Button, Box, Typography, createTheme, ThemeProvider, Grid } from '@mui/material';
import HeaderLogged from '../components/HeaderLogged';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import {getOwnHouseAdService} from '../services/houseService';


const theme = createTheme({ 
    palette: {
      light: '#C9E4EB',
      main: '#F1FAFC',
      dark: '#004A94',
      constrastText: '#F7F9A7'
    }
})

const BACKGROUND = {
    height: 1700,
    backgroundColor: '#C9E4EB',
    margin: '0 auto',
}

const CARD = {         
    width: '750px',
    height: '1500',
    margin: '20px auto', 
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


function GetOwnHouseAdPage() {

    const [ad, setAd] = useState('')

    async function getAd() {
        setAd(await getOwnHouseAdService())
    }

    useEffect(() => {
        getAd()
    }, []);

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
                                    image="/habitacion.jpg"
                                    alt="Habitación"
                                />
                                
                                <Typography gutterBottom variant="h6" component="div" color="dark" sx={{fontWeight: 'bold', marginTop: '20px'}}>
                                    Tipo de vivienda:
                                </Typography>
                                    <Typography variant="body2" color="dark"> 
                                    {ad.houseType}
                                    </Typography>


                                <Typography gutterBottom variant="h6" component="div" color="dark" sx={{fontWeight: 'bold', marginTop: '20px'}}>
                                    Número de habitaciones:
                                </Typography>
                                    <Typography variant="body2" color="dark">
                                        {ad.totalRooms}         
                                    </Typography>  

                                <Typography gutterBottom variant="h6" component="div" color="dark" sx={{fontWeight: 'bold', marginTop: '20px'}}>
                                    Número de baños:
                                </Typography>
                                <Typography variant="body2" color="dark">
                                    {ad.totalWc}         
                                </Typography>  

                                <Typography gutterBottom variant="h6" component="div" color="dark" sx={{fontWeight: 'bold', marginTop: '20px'}}>
                                    Estado de la vivienda:
                                </Typography>
                                <Typography variant="body2" color="dark">
                                    {ad.houseState}         
                                </Typography>  

                                <Typography gutterBottom variant="h6" component="div" color="dark" sx={{fontWeight: 'bold', marginTop: '20px'}}>
                                    Dirección:
                                </Typography>
                                <Typography variant="body2" color="dark">
                                    {ad.address}         
                                </Typography>  

                                <Typography gutterBottom variant="h6" component="div" color="dark" sx={{fontWeight: 'bold', marginTop: '20px'}}>
                                    Localidad:
                                </Typography>
                                <Typography variant="body2" color="dark">
                                    {ad.location}         
                                </Typography>  

                                {/* <Typography gutterBottom variant="h6" component="div" color="dark" sx={{fontWeight: 'bold', marginTop: '20px'}}>
                                    Provincia:
                                </Typography>
                                <Typography variant="body2" color="dark">
                                    {ad.province}         
                                </Typography>   */}

                                <Typography gutterBottom variant="h6" component="div" color="dark" sx={{fontWeight: 'bold', marginTop: '20px'}}>
                                    Precio del alquiler:
                                </Typography>
                                <Typography variant="body2" color="dark">
                                    {ad.rentalPrice}         
                                </Typography>  

                                <Typography gutterBottom variant="h6" component="div" color="dark" sx={{fontWeight: 'bold', marginTop: '20px'}}>
                                    Descripción:
                                </Typography>
                                <Typography variant="body2" color="dark">
                                    {ad.description}         
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

export default GetOwnHouseAdPage