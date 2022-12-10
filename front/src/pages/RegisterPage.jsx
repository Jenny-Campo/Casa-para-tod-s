import React from 'react';
import { Box, Card, CardActions, CardContent, TextField, Button, Icons, createTheme, Grid  } from  '@mui/material/';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signup } from '../services/user'


const theme = createTheme({ //paleta de colores (light=azul claro / main=blanco / dark=azul osc. /contrastText= amarillo)
    palette: {
      light: '#C9E4EB',
      main: '#F1FAFC',
      dark: '#004A94',
      constrastText: '#F7F9A7'
    }
})

const background = {
    height: 1000,
    backgroundColor: '#C9E4EB',
    margin: '0 auto',
}

function RegisterPage() {
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [date, setDate] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [address, setAddress] = useState()
    const [location, setLocation] = useState()
    const [province, setProvince] = useState()          // ojooooo, FALTA VER COMO VAMOS A HACER ESTO...  ¡¡ PROVINCIAS !!
    const [phoneNumber, setPhoneNumber] = useState()
    const [aboutYou, setAboutYou] = useState()
    const [lookingFor, setLookingFor] = useState()
    //const [hobbies, setHobbies] = useState()
    //const [smoker, setSmoker] = useState()
    //const [pets, setPets] = useState()
    //const [employment, setEmployment] = useState()
    //const [photo, setPhoto] = useState()                 --- ALVARO dice que lo dejemos sin hacer por ahora
    //const [rules, setRules] = useState()
    //const [roommate, setRommmate] = useState()
    

    const navigate = useNavigate()

    const register = () => {
        const user = {
            name,
            surname,
            email,
            password,
            date,
            address,
            location,
            province,
            phoneNumber,
            aboutYou,
            lookingFor
        }
        signup(user)
        navigate('/')
    }

    // OJOOOOO, falta hacer a la card responsive

    return (
    <Box style={background}>
    <Grid container spacing={12}>
    <Grid item xs={12} direction='row'></Grid>

        <Card sx={{ width: '900px', '@media print': {width: 300}, margin: '80px auto', display: 'flex', justifyContent: 'center', backgroundColor: 'main'}}>
        
            <CardContent>
            <Grid item xs={12} direction='row'> {/* columnas dentro de la card */}

{/* // OJOOOOO, PTE. METER ESPACIO ENTRE CAJONES */}

                <TextField label="Nombre" type="string" variant="outlined" fullWidth="true" value={name} onChange={(e) => setName(e.target.value)}/>
                <TextField label="Apellido" type="string" variant="outlined" fullWidth="true" value={surname} onChange={(e) => setSurname(e.target.value)}/>
                <TextField label="Email" type="string" variant="outlined" fullWidth="true" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <TextField label="Contraseña" type="password" variant="outlined" fullWidth="true" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <TextField label="Fecha de nacimiento" type="string" variant="outlined" fullWidth="true" value={date} onChange={(e) => setDate(e.target.value)}/>
                <TextField label="Dirección" type="string" variant="outlined" fullWidth="true" value={address} onChange={(e) => setAddress(e.target.value)}/>
                <TextField label="Localización" type="string" variant="outlined" fullWidth="true" value={location} onChange={(e) => setLocation(e.target.value)}/>
                <TextField label="Provincia" type="string" variant="outlined" fullWidth="true" value={province} onChange={(e) => setProvince(e.target.value)}/>
                <TextField label="Teléfono" type="string" variant="outlined" fullWidth="true" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                <TextField label="Cuenta lo que quieras sobre tí, para que los usuarios puedan conocerte un poco más" type="string" variant="outlined" fullWidth="true" value={aboutYou} onChange={(e) => setAboutYou(e.target.value)}/>
                <TextField label="¿Qué estás buscando en la app?" type="string" variant="outlined" fullWidth="true" value={lookingFor} onChange={(e) => setLookingFor(e.target.value)}/>
        
        
            </Grid>
            </CardContent>

            {/* <CardActions  color='succes'>
                <Button sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}} onClick={() => register()}>Crea tu perfil</Button>
            </CardActions> */}
        
        </Card>

    </Grid>
    </Box>
    )
}

export default RegisterPage
