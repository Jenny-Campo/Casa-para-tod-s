import React from 'react';
import {Box, Container, Grid, Typography, ThemeProvider, createTheme} from '@mui/material';
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

    return ( //PTE. conseguir poner las letras a la derecha y poner logo a la izquierda
        <footer> 
            <ThemeProvider theme={theme}> 
                <Box  position={'static'} bottom={0} width='100%'>
                    <Box bgcolor='main' color='dark' padding={2}>
                        <Container fluid>
                        <img src='public/Logo BG-MAIN - CASA PARA TODOS.png' alt='logo Casa para tod@s'></img>
                            <Grid container spacing={5} margin={5}>
                                { links && links.map((section, idx) => {
                                return (<Grid xs={12} key={idx}>
                                {
                                    section.map((title, idx) =>
                                    idx === 0 ?
                                    <Box textAlign={'left'}>
                                        {title}
                                    </Box> :
                                    <Box textAlign={'left'}>
                                        <a>{title}</a>
                                    </Box>)
                                }
                                </Grid> //cierra el grid de la línea 27
                                )
                            })}
                            </Grid>
                        </Container>
                    </Box>
                    <Box textAlign={'center'} py={2} m={0} bgcolor='main' color={'dark'}>
                        <Typography>© Casa para tod@s 2022 - All Rights Reserved</Typography>
                    </Box>
                </Box>
            </ThemeProvider>    
        </footer>
    )
}


export default Footer