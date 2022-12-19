import React from 'react'
import { Box, Button, Card, CardActions, CardContent, CardHeader, TextField, Icons, createTheme, Grid, ThemeProvider  } from  '@mui/material/';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HeaderLogged from '../components/HeaderLogged';
import Footer from '../components/Footer';


const theme = createTheme({ //paleta de colores (light=azul claro / main=blanco / dark=azul osc. /contrastText= amarillo)
    palette: {
      light: '#C9E4EB',
      main: '#F1FAFC',
      dark: '#004A94',
      constrastText: '#F7F9A7'
    }
})

const BACKGROUND = {
    height: 800,
    backgroundColor: '#C9E4EB',
    margin: '0 auto',
}

const CARD = {         
    width: '900px',
    margin: '20px auto', // 2 valores aplica ariba-abajo, y der.-izq.
    display: 'flex',
    justify: 'center',
    align:'center',
    backgroundColor: '#F1FAFC'
}

const BUTTON1 = {                 // OJOOO, no consigo que quede alineado con el final del último cajón
    backgroundColor: '#004A94',
    color: '#F7F9A7',
    borderRadius: 50
}


function CreateHouseAdPage() {

    const [houseType, setHouseType] = useState()
    const [totalRooms, setTotalRooms] = useState()
    const [totalWc, setTotalWc] = useState()
    const [houseState, setHouseState] = useState()
    const [address, setAddress] = useState()
    const [location, setLocation] = useState()
    // const [province, setProvince] = useState()
    const [rentalPrice, setRentalPrice] = useState()
    const [description, setDescription] = useState()

    const navigate = useNavigate()

    const register = async () => {
        const user = {
            houseType,
            totalRooms,
            totalWc,
            houseState,
            address,
            location,
            // province
            rentalPrice,
            description
        }
        //     if (password === password2){
        //         const response = await signupService(user)
                
        //         if(response.error) {
        //             alert('usuario o contraseña erróneo')  //OJO, HAY QUE HACER UN COMPONENTE PARA ESTO
        //         } else {
        //             localStorage.setItem('email', response.email)
        //             localStorage.setItem('token', response.token)  // con esto tendríamos el token guardado
        //             navigate('/userMenu')
        //         }
    
    
        //     } else {
        //         alert('usuario o contraseña erróneo')
        //     }
    
    }

    return (
    
    <ThemeProvider theme={theme}>
    <HeaderLogged/>
        <Box style={BACKGROUND}>
        <Grid container>
        <Grid item xs={12} md={12}> 
            <Card sx={CARD}>
                <CardContent>
                    <CardHeader title="Publica tu anuncio" fullWidth sx={{backgroundColor: 'dark', color: 'constrastText', borderRadius: 1, marginBottom: '20px' }} />

                    <TextField
                        label="Tipo de vivienda"
                        type="string"
                        variant="outlined"
                        fullWidth
                        sx={{marginBottom: '20px'}}
                        value={houseType} onChange={(e) => setHouseType(e.target.value)}
                    />

                    <TextField
                        label="Número de habitaciones"
                        type="string"
                        variant="outlined"
                        fullWidth
                        sx={{marginBottom: '20px'}}
                        value={totalRooms} onChange={(e) => setTotalRooms(e.target.value)}
                    />

                    <TextField
                        label="Número de baños"
                        type="string"
                        variant="outlined"
                        fullWidth
                        sx={{marginBottom: '20px'}}
                        value={totalWc} onChange={(e) => setTotalWc(e.target.value)}
                    />

                    <TextField
                        label="Estado de la vivienda"
                        type="string"
                        variant="outlined"
                        fullWidth
                        sx={{marginBottom: '20px'}}
                        value={houseState} onChange={(e) => setHouseState(e.target.value)}
                    />

                    <TextField
                        label="Dirección"
                        type="string"
                        variant="outlined"
                        fullWidth
                        sx={{marginBottom: '20px'}}
                        value={address} onChange={(e) => setAddress(e.target.value)}
                    />

                    <TextField
                        label="Localidad"
                        type="string"
                        variant="outlined"
                        fullWidth
                        sx={{marginBottom: '20px'}}
                        value={location} onChange={(e) => setLocation(e.target.value)}
                    />

                    {/* <TextField
                        label="Provincia"
                        type="string"
                        variant="outlined"
                        fullWidth
                        sx={{marginBottom: '20px'}}
                        value={province} onChange={(e) => setProvince(e.target.value)}
                    /> */}

                    <TextField
                        label="Precio del alquiler"
                        type="string"
                        variant="outlined"
                        fullWidth
                        sx={{marginBottom: '20px'}}
                        value={rentalPrice} onChange={(e) => setRentalPrice(e.target.value)}
                    />

                    <TextField
                        label="Descripción"
                        type="string"
                        variant="outlined"
                        fullWidth
                        sx={{marginBottom: '20px'}}
                        value={description} onChange={(e) => setDescription(e.target.value)}
                    />

                </CardContent>
            </Card>
        </Grid>
        </Grid>
        </Box>
    <Footer/>
    </ThemeProvider>
    )
}


export default CreateHouseAdPage