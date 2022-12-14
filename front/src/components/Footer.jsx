import React from 'react';
import { Box, Container, Grid, Typography, ThemeProvider, createTheme, CardActions, CardMedia, CardActionArea } from '@mui/material';
import { useState } from 'react';

const theme = createTheme({ //paleta de colores (light=azul claro / main=blanco / dark=azul osc. /contrastText= amarillo)
    palette: {
      light: '#C9E4EB',
      main: '#F1FAFC',
      dark: '#004A94',
      constrastText: '#F7F9A7'
    }
   })

function Footer() {
    const [links, setLinks] = useState([
        ['Contacto', 'Aviso Legal', 'Protección de datos', 'Política de cookies']
    ])

    return ( //PTE. conseguir poner las letras a la derecha y poner logo a la izquierda, Y QUE SE VEA EL LOGO!!!!!
        <footer> 
            <ThemeProvider theme={theme}> 
            <Box bgcolor='main' color='dark' padding={2}>
                <Container fluid="true">
                <Grid container spacing={5} margin={5}>
                <Grid item xs={12}><Grid/>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image="/Logo BG-MAIN - CASA PARA TODOS.jpg"
                        alt="People sharing a cake"
                        justify="center"
                        align="center"
                        sx={{borderRadius:'20'}}
                        width="5"
                        height="20"
                        />  {/* ojoooo no consigo que la imagen sea responsive */}
                </CardActionArea>
                <Box  position={'static'} bottom={0} width='100%'>
                    { links && links.map((section, idx) => {
                        return (<Grid item xs={12} key={idx}> {
                            section.map((title, idx) =>
                            idx === 0 ?
                            <Box key={idx} textAlign={'left'}>
                                {title}
                            </Box> :
                            <Box key={idx} textAlign={'left'}>
                                <a>{title}</a>
                            </Box>)          
                        }
                        </Grid> 
                        )
                    })}  
                </Box> 
                <Box textAlign={'center'} py={2} m={0} bgcolor='main' color={'dark'}>
                    <Typography>© Casa para tod@s 2022 - All Rights Reserved</Typography>
                </Box>    
                </Grid>  
                </Grid>  
                </Container>
            </Box>   
            </ThemeProvider>    
        </footer>
    )
}


export default Footer