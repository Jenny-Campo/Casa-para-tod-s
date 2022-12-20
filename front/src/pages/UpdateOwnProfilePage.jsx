import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardHeader, TextField, Icons, createTheme, Grid, ThemeProvider  } from  '@mui/material/';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HeaderLogged from '../components/HeaderLogged';
//import { userService } from '../services/User'


const theme = createTheme({ //paleta de colores (light=azul claro / main=blanco / dark=azul osc. /contrastText= amarillo)
    palette: {
      light: '#C9E4EB',
      main: '#F1FAFC',
      dark: '#004A94',
      constrastText: '#F7F9A7'
    }
})

const BACKGROUND = {
    height: 2000,
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

function UpdateOwnProfilePage() {

    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [age, setAge] = useState()
    const [address, setAddress] = useState()
    const [location, setLocation] = useState()
    // const [province, setProvince] = useState()          // ojooooo, FALTA VER COMO VAMOS A HACER ESTO...  ¡¡ PROVINCIAS !!
    const [phoneNumber, setPhoneNumber] = useState()
    const [aboutYou, setAboutYou] = useState()
    const [lookingFor, setLookingFor] = useState()
    const [hobbies, setHobbies] = useState()
    const [smoker, setSmoker] = useState()
    const [pets, setPets] = useState()
    const [employment, setEmployment] = useState()
    //const [photo, setPhoto] = useState()            --- ALVARO dice que lo dejemos sin hacer por ahora
    const [rules, setRules] = useState()
    const [roommate, setRoommate] = useState()
    

    const navigate = useNavigate()

    const profile = async () => {
        const user = {
            name,
            surname,
            age,
            address,
            location,
            // province,
            phoneNumber,
            aboutYou,
            lookingFor,
            hobbies,
            smoker,
            pets,
            employment, 
            rules,
            roommate
        }
    }

    return (

        <ThemeProvider theme={theme}>
        <HeaderLogged/>
            <Box style={BACKGROUND}>
            <Grid container>
            <Grid item xs={12} md={12}> {/* preguntar como podemos hacer para que cambien los tamaños de las cosas cuando se hace más pequeña la pantalla */}
                <Card sx={CARD}>
                    <CardContent>
                        <CardHeader title="Modifica tu perfil" sx={{backgroundColor: 'dark', color: 'constrastText', borderRadius: 1, marginBottom: '20px' }} />

                        <TextField
                            label="Nombre"
                            type="string"
                            variant="outlined"
                            fullWidth
                            sx={{marginBottom: '20px'}}
                            value={name} onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            label="Apellido"
                            type="string"
                            variant="outlined"
                            fullWidth
                            sx={{marginBottom: '20px'}}
                            value={surname} onChange={(e) => setSurname(e.target.value)}
                        />
                        <TextField
                            label="Edad"
                            type="string"
                            variant="outlined"
                            fullWidth
                            sx={{marginBottom: '20px'}}
                            value={age} onChange={(e) => setAge(e.target.value)}
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
                            label="Localización"
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
                            label="Teléfono"
                            type="integer"
                            variant="outlined"
                            fullWidth
                            sx={{marginBottom: '20px'}}
                            value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <TextField
                            label="Cuéntanos sobre tí, para que l@s posibles compañer@s puedan conocerte un poco más"
                            type="string"
                            variant="outlined"
                            fullWidth
                            sx={{marginBottom: '20px'}}
                            value={aboutYou} onChange={(e) => setAboutYou(e.target.value)}
                        />
                        <TextField
                            label="¿Qué estás buscando en la app?"
                            type="string"
                            variant="outlined"
                            fullWidth
                            sx={{marginBottom: '20px'}}
                            value={lookingFor} onChange={(e) => setLookingFor(e.target.value)}
                        />
                        <TextField
                            label="¿Qué te gusta hacer en tu tiempo libre?"
                            type="string"
                            variant="outlined"
                            fullWidth
                            sx={{marginBottom: '20px'}}
                            value={hobbies} onChange={(e) => setHobbies(e.target.value)}
                        />
                        <TextField
                            label="¿Eres fumador/a?"
                            type="string"
                            variant="outlined"
                            fullWidth
                            sx={{marginBottom: '20px'}}
                            value={smoker} onChange={(e) => setSmoker(e.target.value)}
                        />
                        <TextField
                            label="¿Tienes alguna mascota?"
                            type="string"
                            variant="outlined"
                            fullWidth
                            sx={{marginBottom: '20px'}}
                            value={pets} onChange={(e) => setPets(e.target.value)}
                        />
                        <TextField
                            label="¿Trabajas?, ¿Estás jubilado/a? ... ¡Cuéntanos más!"
                            type="string"
                            variant="outlined"
                            fullWidth
                            sx={{marginBottom: '20px'}}
                            value={employment} onChange={(e) => setEmployment(e.target.value)}
                        />
                        <TextField
                            label="Indica las normas que te gustaría tener en casa"
                            type="string"
                            variant="outlined"
                            fullWidth
                            sx={{marginBottom: '20px'}}
                            value={rules} onChange={(e) => setRules(e.target.value)}
                        />
                        <TextField
                            label="¿Con cuál de estas opciones te gustaría compartir? (Puedes seleccionar varias opciones)"
                            type="string"
                            variant="outlined"
                            fullWidth
                            sx={{marginBottom: '20px'}}
                            value={roommate} onChange={(e) => setRoommate(e.target.value)}
                        />

                        <CardActions  color='succes'  sx={{display: 'flex', justify: 'end'}}>
                            <Button variant="contained" sx={BUTTON1} onClick={() => profile()}>  {/*component={Link} to="/userMenu"*/}
                                Continuar
                            </Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </Grid>
            </Grid>
            </Box>
        </ThemeProvider>
    )
}

export default UpdateOwnProfilePage
