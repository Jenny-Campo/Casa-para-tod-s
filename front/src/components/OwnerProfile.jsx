import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardMedia, Typography, createTheme, ThemeProvider, Grid } from '@mui/material'
import { useParams } from 'react-router'
import { getOwnerProfile } from '../services/userService'

const CARD = {  
    width: 1200,
    backgroundColor: '#C9E4EB',
    margin: '20px auto',
    display: 'flex',
    borderRadius: 10,
    marginTop: '20px',
    color:'#172B4D',
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

    const [user, setUser] = useState({})
    const {id} = useParams('id')

    useEffect(() => {
        const search = async() => {
          const data = await getOwnerProfile(id)
            setUser(data)
        }

        search()
    },[id])
    
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
                <Typography sx={{textDecoration: 'underline', color:'dark'}} variant="h3" component="div">
                    Perfil del propietari@
                </Typography> 
                <Typography variant="h6" component="div">
                   <Typography variant="h6" component="div" display="inline" sx={{color: 'dark', fontStyle: 'italic'}}>- Nombre y Apellidos:</Typography> { user.name } { user.surname }
                </Typography>
                <Typography variant="h6" component="div">
                    <Typography variant="h6" component="div" display="inline" sx={{color: 'dark', fontStyle: 'italic'}}>- Sobre mí:</Typography> { user.aboutYou }
                </Typography>
                <Typography variant="h6" component="div">
                    <Typography variant="h6" component="div" display="inline" sx={{color: 'dark', fontStyle: 'italic'}}>- Busco:</Typography> { user.lookingFor }
                </Typography>
                <Typography variant="h6" component="div">
                    <Typography variant="h6" component="div" display="inline" sx={{color: 'dark', fontStyle: 'italic'}}>- Aficiones:</Typography> { user.hobbies }
                </Typography>
                <Typography variant="h6" component="div">
                    <Typography variant="h6" component="div" display="inline" sx={{color: 'dark', fontStyle: 'italic'}}>- Fumador:</Typography> { user.smoker }
                </Typography>
                <Typography variant="h6" component="div">
                    <Typography variant="h6" component="div" display="inline" sx={{color: 'dark', fontStyle: 'italic'}}>- Mascotas:</Typography> { user.pets }
                </Typography>
                <Typography variant="h6" component="div">
                    <Typography variant="h6" component="div" display="inline" sx={{color: 'dark', fontStyle: 'italic'}}>- Estado laboral:</Typography> { user.employment }
                </Typography>
                <Typography variant="h6" component="div">
                    <Typography variant="h6" component="div" display="inline" sx={{color: 'dark', fontStyle: 'italic'}}>- Normas:</Typography> { user.rules }
                </Typography>
                <Typography variant="h6" component="div">
                    <Typography variant="h6" component="div" display="inline" sx={{color: 'dark', fontStyle: 'italic'}}>- Me gustaría compartir con:</Typography> { user.roommate }
                </Typography>
                <Typography variant="h6" component="div">
                    <Typography variant="h6" component="div" display="inline" sx={{color: 'dark', fontStyle: 'italic'}}>- Teléfono:</Typography> { user.phoneNumber }
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