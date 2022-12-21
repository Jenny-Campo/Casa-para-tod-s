import React from 'react'
import { Box, Button, Card, CardActions, CardContent, CardHeader, TextField, createTheme, Grid, InputAdornment, ThemeProvider } from  '@mui/material/';
import { useState } from 'react'
import { loginService } from '../services/authService'
import { Email, Lock, VisibilityOff, Visibility } from '@mui/icons-material';
import { Link } from 'react-router-dom'


const theme = createTheme({ 
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
    width: '500px',
    margin: '20px auto', 
    backgroundColor: '#F1FAFC', 
}

const BUTTON1 = {                 
    backgroundColor: '#004A94',
    color: '#F7F9A7',
    borderRadius: 50
}


function LoginPage() {

    const [ showPassword, setShowPassword ] = useState(false); 
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const login = async () => {
        const user = {
            email,
            password
        }

        try {
            const {data} = await loginService(user)
            
            localStorage.setItem('email', user.email)
            localStorage.setItem('token', data.token)
        } catch (e) {
            console.log(e)
        }
    }
    
  return (

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
                                <InputAdornment position='end' onClick={() => { setShowPassword((current) => !current)}}> 
                                    { showPassword ? <Visibility/> : <VisibilityOff/> } 
                                </InputAdornment>
                            )
                        }}
                        value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                
                    <CardActions   sx={{display: 'flex', justifyContent: 'flex-end'}}>
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