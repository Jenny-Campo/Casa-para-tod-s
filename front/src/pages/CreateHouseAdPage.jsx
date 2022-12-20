import {React, useEffect} from 'react'
import { Box, Button, Card, CardActions, CardContent, CardHeader, TextField, Icons, createTheme, Grid, ThemeProvider, FormControl, InputLabel, Select, MenuItem } from  '@mui/material/';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HeaderLogged from '../components/HeaderLogged';
import Footer from '../components/Footer';
import provinceService from '../services/provinceService';
import createHouseAdService from '../services/houseService';


const theme = createTheme({ //paleta de colores (light=azul claro / main=blanco / dark=azul osc. /contrastText= amarillo)
    palette: {
      light: '#C9E4EB',
      main: '#F1FAFC',
      dark: '#004A94',
      constrastText: '#F7F9A7'
    }
})

const BACKGROUND = {
    height: 900,
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

const BUTTON1 = {                 
    backgroundColor: '#004A94',
    color: '#F7F9A7',
    borderRadius: 50
}


function CreateHouseAdPage() {

    const [houseType, setHouseType] = useState('')
    const [totalRooms, setTotalRooms] = useState('')
    const [totalWc, setTotalWc] = useState('')
    const [houseState, setHouseState] = useState('')
    const [address, setAddress] = useState('')
    const [location, setLocation] = useState('')
    const [province, setProvince] = useState('')
    const [rentalPrice, setRentalPrice] = useState('')
    const [description, setDescription] = useState('')

    const navigate = useNavigate()

    const createAd = async () => {
        const ad = {
            houseType,
            totalRooms,
            totalWc,
            houseState,
            address,
            location,
            province,
            rentalPrice,
            description
        }

        const response = await createHouseAdService(ad)
        navigate('/userMenu')

    }


        function handleChangeProvince(e){
            setProvince(e.target.value)
        }
    
        const [provinces, setProvinces] = useState([]) //el conjunto de todas las provincias
    
        async function getAllProvinces() {
            setProvinces(await provinceService())
        }
    
        useEffect(() => {
            getAllProvinces()
        }, []);
    
    

    return (
    
    <ThemeProvider theme={theme}>
    <HeaderLogged/>
        <Box style={BACKGROUND}>
        <Grid container>
        <Grid item xs={12} md={12}> 
            <Card sx={CARD}>
                <CardContent>
                    <CardHeader title="Publica tu anuncio" fullWidth sx={{backgroundColor: 'dark', color: 'constrastText', borderRadius: 1, marginBottom: '20px' }} />

                    <FormControl fullWidth sx={{marginBottom: '20px'}}>
                        <InputLabel id="houseType-select-label">Tipo de vivienda</InputLabel>
                        <Select
                            labelId="HouseType-select-label"
                            id="HouseType-select"
                            label="Tipo de vivienda"
                            value={houseType} onChange={(e) => setHouseType(e.target.value)}
                        >
                            <MenuItem value={1}>Piso</MenuItem>
                            <MenuItem value={2}>Casa</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth sx={{marginBottom: '20px'}}>
                        <InputLabel id="totalRooms-select-label">Número de habitaciones</InputLabel>
                        <Select
                            labelId="totalRooms-select-label"
                            id="totalRooms-select"
                            label="número de habitaciones"
                            value={totalRooms} onChange={(e) => setTotalRooms(e.target.value)}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6 o más</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth sx={{marginBottom: '20px'}}>
                        <InputLabel id="totalWC-select-label">Número de baños</InputLabel>
                        <Select
                            labelId="totalWc-select-label"
                            id="totalWc-select"
                            label="Número de baños"
                            value={totalWc} onChange={(e) => setTotalWc(e.target.value)}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4 o más</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth sx={{marginBottom: '20px'}}>
                        <InputLabel id="houseState-select-label">Estado de la vivienda</InputLabel>
                        <Select
                            labelId="houseState-select-label"
                            id="houseState-select"
                            label="Estado de la vivienda"
                            value={houseState} onChange={(e) => setHouseState(e.target.value)}
                        >
                            <MenuItem value={1}>Casi nueva</MenuItem>
                            <MenuItem value={2}>Muy bien</MenuItem>
                            <MenuItem value={3}>Bien</MenuItem>
                            <MenuItem value={4}>A reformar</MenuItem>
                            <MenuItem value={5}>Reformada</MenuItem>
                        </Select>
                    </FormControl>

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

                    <FormControl fullWidth sx={{marginBottom: '20px'}}>
                        <InputLabel id="province-select-label">Provincia</InputLabel>
                        <Select
                            labelId="province-select-label"
                            id="provinces-select"
                            value={province}
                            label="Provincia"
                            onChange={handleChangeProvince}
                        >
                            {provinces && provinces.map((province) => {
                                return (
                                <MenuItem
                                    key={province.id}
                                    value={province.name}
                                >
                                    {province.name}
                                </MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>

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

                    <CardActions sx={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Button variant="contained" sx={BUTTON1} onClick={() => createAd()}> 
                            Continuar
                        </Button>
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


export default CreateHouseAdPage