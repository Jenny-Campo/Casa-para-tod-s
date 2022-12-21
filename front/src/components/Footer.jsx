import React from 'react';
import { Box, Container, Grid, Typography, ThemeProvider, createTheme, CardMedia, Card } from '@mui/material';
import { useState } from 'react';

const theme = createTheme({ 
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

    return ( 
        <footer> 
            <ThemeProvider theme={theme}> 
            <Box sx={{ flexGrow: 1  }} position={'static'} bgcolor='main' color='dark' padding={1} paddingBottom={0}>
                <Container fluid="true">
                <Grid container>
                <Grid item xs={12} justify="center" align="center">
                    <Card sx={{width:'150px'}} elevation={0}>
                    <CardMedia
                        component="img"
                        image="/CasaParaTodosLogo.png"
                        alt="People sharing a cake"
                        />
                    </Card>
                <Grid/> 
                <Box paddingBottom={4}>
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
                </Grid>  
                </Grid>  
                </Container>
                </Box>
                <Box textAlign={'center'} py={2} m={0} bgcolor='dark' color={'main'}>
                    <Typography>© Casa para tod@s 2022 - All Rights Reserved</Typography>
                </Box>     
            </ThemeProvider>    
        </footer>
    )
}


export default Footer