import React from 'react'
import { Box, Button, Card, CardActions, CardContent, CardHeader, TextField, Icons, createTheme, Grid  } from  '@mui/material/';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../services/user'

const theme = createTheme({ //paleta de colores (light=azul claro / main=blanco / dark=azul osc. /contrastText= amarillo)
    palette: {
      light: '#C9E4EB',
      main: '#F1FAFC',
      dark: '#004A94',
      constrastText: '#F7F9A7'
    }
}) //ojo, no consigo que funcione con los nombres

const BACKGROUND = {
    height: 2000,
    backgroundColor: '#C9E4EB',
    margin: '0 auto',
    // paddingRight: '30%',
    // paddingLeft: '30%',
}

const CARD = {         //ojo, aquí no coge los nombres de los colores, solo los números
    width: '500px',
    margin: '20px auto', // 2 valores aplica ariba-abajo, y der.-izq.
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#F1FAFC',  // en sx sería bgColor
}

const BUTTON1 = {                 // OJOOO, no consigo que quede alineado con el final del último cajón
    backgroundColor: '#004A94',
    color: '#F7F9A7',
    borderRadius: 50
}


function LoginPage() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()

    const login = () => {
        const user = {
            email,
            password
        }

        login(user)
        navigate('/')
    }

  return (

    //OJOOO, PTE. HACER LO DE LA CONTRASEÑA VISIBLE O NO, Y LO DE OLVIDÓ SU CONTRASEÑA (VIDEO MUI 1)

    <Box style={BACKGROUND}>
    <Grid container>
    <Grid item xs={12} md={6}></Grid> {/* preguntar como podemos hacer para que cambien los tamaños de las cosas cuando se hace más pequeña la pantalla */}
        <Card sx={CARD}>
            <CardContent>
                <CardHeader title="Login" sx={{backgroundColor: '#004A94', color: '#F7F9A7', borderRadius: 1, marginBottom: '20px' }} />
                <TextField label="Email" type="string" variant="outlined" fullWidth sx={{marginBottom: '20px'}} value={email} onChange={(e) => setEmail(e.target.value)}/>
                <TextField label="Contraseña" type="password" variant="outlined" fullWidth sx={{marginBottom: '20px'}} value={password} onChange={(e) => setPassword(e.target.value)}/>
            
                <CardActions  color='succes'  sx={{display: 'flex', justifyContent: 'end'}}>
                    <Button variant="contained" sx={BUTTON1} onClick={() => login()}>Accede</Button>
                </CardActions>
            </CardContent>

        </Card>
    </Grid>
    </Box>
  )
}

export default LoginPage