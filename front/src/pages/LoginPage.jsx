import React from 'react'
import { Box, Button, Card, CardActions, CardContent, CardHeader, TextField, createTheme, Grid, InputAdornment, ThemeProvider } from  '@mui/material/';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginService } from '../services/authService'
import { Email, Lock, VisibilityOff, Visibility } from '@mui/icons-material';
import { Link } from 'react-router-dom'


{/* OJOOOOOOO, pte. mejorar la posición del botón */}

const theme = createTheme({ 
    palette: {
      light: '#C9E4EB', // azul claro
      main: '#F1FAFC', // blanco roto
      dark: '#004A94', //azul oscuro
      constrastText: '#F7F9A7' // amarillo
    }
}) 

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
    backgroundColor: '#F1FAFC', 
}

const BUTTON1 = {                 // OJOOO, no consigo que quede alineado con el final del último cajón
    backgroundColor: '#004A94',
    color: '#F7F9A7',
    borderRadius: 50
}


function LoginPage() {

    const [ showPassword, setShowPassword ] = useState(false); {/*valor inicial falso*/}
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()

    const login = async () => {
        const user = {
            email,
            password
        }

        try {
            const {data} = await loginService(user)
            console.log('data de loginservice:', data)
            localStorage.setItem('email', user.email)
            localStorage.setItem('token', data.token)
        } catch (e) {
            console.log(e)
        }
    }
    
  return (

    //OJOOO, PTE. HACER LO DE OLVIDÓ SU CONTRASEÑA (VIDEO MUI 1), también que quede la card centrada

    <ThemeProvider theme={theme}>
        <Box style={BACKGROUND}>
        <Grid container>
            <Card sx={CARD}>
            <Grid item xs={12}> 
                <CardContent>
                    <CardHeader title="Login" sx={{backgroundColor: 'dark', color: 'constrastText', borderRadius: 1, marginBottom: '20px' }} />
                    <TextField 
                        label="Email"
                        type="email"
                        variant="outlined" 
                        fullWidth 
                        sx={{marginBottom: '20px'}} 
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <Lock/>
                                </InputAdornment>
                        ) }}
                        value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField 
                        label="Contraseña"
                        type={ showPassword ? 'text' : 'password' }
                        variant="outlined"
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <Email/>
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position='end' onClick={() => { setShowPassword((current) => !current)}}> {/*asignamos lo contrario de lo q tenga showPassword*/}
                                    { showPassword ? <Visibility/> : <VisibilityOff/> } {/* si showPassword es verdadero, cargo on, sino off*/}
                                </InputAdornment>
                            )
                        }}
                        value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                    {/* <Box component="span" sx={{ p: 0, ml: '8px' }}>He olvidado mi contraseña</Box>  */}
                
                    <CardActions  color='succes'  sx={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Button component={Link} to="/userMenu" variant="contained" sx={BUTTON1} onClick={() => login()}>Accede</Button>
                    </CardActions>
                </CardContent>
            </Grid>
            </Card> 
        </Grid>
        </Box>
    </ThemeProvider>
  )
}

export default LoginPage