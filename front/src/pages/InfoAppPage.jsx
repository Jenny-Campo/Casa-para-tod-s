import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardContent,  CardActionArea, CardActions, CardMedia, Typography, Button, ThemeProvider, createTheme, Grid } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const theme = createTheme({ 
    palette: {
      light: '#C9E4EB',
      main: '#F1FAFC',
      dark: '#004A94',
      constrastText: '#F7F9A7'
    }
   })

const BACKGROUND = {
    height: 3500,
    backgroundColor: '#C9E4EB',
}
   
const CARD = {  
    width: 1200,
    backgroundColor: '#C9E4EB',
    margin: '20px auto',
    display: 'flex',
    borderRadius: 10,
    marginTop: '20px'

}

function InfoAppPage() {
  return (
    <ThemeProvider theme={theme}>
    <Header/>
    <Box style={BACKGROUND}>
    <Grid container>
    <Grid item xs={12}> 
        <Card sx={CARD}>

            <CardContent>
            
            <CardActionArea>  
                <CardMedia
                component="img"
                height="500"
                image="/edificios.jpg"
                alt="People sharing a cake"
                />
            </CardActionArea>
               
            <Typography gutterBottom variant="h5" component="div" color="dark" align="center" sx={{marginTop: '50px'}} >
                Cada día es más difícil el acceso a la vivienda, una necesidad y derecho básico para tener una vida digna.
            </Typography>
            <Typography gutterBottom variant="h5" component="div" color="dark" align="center">
                Por eso, desde Casa para tod@s, hemos decidido estudiar la situación para poder
            </Typography>
            <Typography gutterBottom variant="h5" component="div" color="dark" align="center" sx={{fontWeight: 'bold'}} >
                buscar soluciones
            </Typography>
            <Typography gutterBottom variant="h5" component="div" color="dark" align="center" sx={{marginTop: '50px'}} >
                Los resultados del estudio arrojan diferentes problemáticas que no solo dificultan la posibilidad de tener una casa en la que vivir, sino que también afectan a la calidad de vida de las personas y a su salud mental. Lamentablemente, estos problemas, de una forma u otra, atraviesan a todas las generaciones:
            </Typography>
            <Typography gutterBottom variant="h5" component="div" color="dark" sx={{fontWeight: 'bold', marginTop: '50px' }}>
                Jóvenes (y no tan jóvenes):
            </Typography>
            <Typography gutterBottom variant="h5" component="div" color="dark" >
                Trabajos precarios y/o temporales, imposibilidad de independizarse, sueldos bajos, dificultades de acceso a la vivienda, problemas de salud mental, dificultad para ahorrar, etc.
            </Typography>
            <Typography gutterBottom variant="h5" component="div" color="dark" sx={{fontWeight: 'bold', marginTop: '50px'}}>
                Personas mayores:
            </Typography>
            <Typography gutterBottom variant="h5" component="div" color="dark" >
                Pensiones bajas, dificultades económicas, sentimientos de soledad, problemas de salud mental, dificultad para costear el mantenimiento del hogar en propiedad, dificultad de acceso al alquiler, etc.
            </Typography>
            <Typography gutterBottom variant="h5" component="div" color="dark" align="center" sx={{marginTop: '50px', marginBottom:'20px' }} >
                Como puedes ver, aunque hay algunos problemas diferentes, otros son comunes en ambos grupos de población. A esto además hay que añadir que las administraciones públicas no están llegando a solucionar o a mejorar estas situaciones, por lo que además de la ansiedad que estas dificultades generan en las personas, hay que añadir el desamparo institucional y la problemática y descontento social que supone para los ciudadanos vivir en esta desesperanza, todo ello en un contexto de incertidumbre por el cambio climático y por una guerra acechando a Europa, la inflación disparada, o que las generaciones más jóvenes están viviendo su tercera crisis económica.
            </Typography>

            <CardActionArea>    
                <CardMedia
                component="img"
                height="500"
                image="/ahogado.jpg"
                alt="People sharing a cake"
                />
            </CardActionArea>

            <Typography gutterBottom variant="h5" component="div" color="dark" align="center" sx={{marginTop: '50px'}} >
                Por todo ello, disgustados con la situación y en una búsqueda de ideas que mejoren la vida de la gente, desde Casa para tod@s hemos tenido la idea que plasmamos en esta app.
            </Typography>

            <Typography gutterBottom variant="h5" component="div" color="dark" align="center" sx={{marginTop: '50px'}} >
                Al haber personas con casa pasando necesidades económicas y mayores con casa, pero sin la suficiente solvencia económica para hacerles el mantenimiento o las reformas necesarias con el paso de los años, que además en muchos casos de sienten solas, y jóvenes (y no tan jóvenes) con dificultades para el acceso a la vivienda, se nos ocurrió que la unión de estos grupos de personas, sería beneficiosa para ambos.
            </Typography>

            <Typography gutterBottom variant="h5" component="div" color="dark" align="center" sx={{marginTop: '50px', marginBottom: '20px'}} >
                Compartir casa entre generaciones, aunque no es habitual, y nos gustaría que no fuera una opción porque todos deberíamos tener derecho a una vivienda y vida dignas, es una solución en la que todos ganamos ayudándonos mutuamente. 
            </Typography>

            <CardActionArea>    
                <CardMedia
                component="img"
                height="700"
                image="/salvavidas3.webp"
                alt="People sharing a cake"
                />
            </CardActionArea>

            <Typography gutterBottom variant="h5" component="div" color="dark" align="center" sx={{marginTop: '50px'}} >
                En resumen, Casa para tod@s no es más que un lugar en el que las personas pueden ayudarse entre sí.
            </Typography>

            <Typography gutterBottom variant="h5" component="div" color="dark" align="center" sx={{marginTop: '50px', fontWeight: 'bold', marginBottom: '20px'}} >
                Busca la ayuda que necesitas. Una vida más digna es posible si nos ayudamos los unos a los otros.
            </Typography>
               
            <CardActions  sx={{display: 'flex', justifyContent: 'center'}}>
                <Button component={Link} to="/register" size='large' variant="contained" align='center'
                    sx={{
                    borderRadius: 10,
                    color: 'constrastText',
                    backgroundColor: 'dark',
                    marginTop: '10px' }}>
                        Crea tu perfil
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

export default InfoAppPage