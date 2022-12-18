import React from 'react'
//import useState from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import WelcomeCard from '../components/WelcomeCard';
import { Box, ThemeProvider, createTheme, Container, Grid } from '@mui/material';


const theme = createTheme({ //paleta de colores (light=azul claro / main=blanco / dark=azul osc. /contrastText= amarillo)
  palette: {
    light: '#C9E4EB',
    main: '#F1FAFC',
    dark: '#004A94',
    constrastText: '#F7F9A7'
  }
})

const BACKGROUND = {
  height: 900,
  backgroundColor: '#C9E4EB',
  margin: '0 auto',
}

function Home() {


  return (

    //OJOOOOOO, EN LAS PANTALLAS PEQUEÑAS HAY UN MARGEN A LA DRCHA. QUE NO PUEDO QUITAR!!! (en pantalla completa no sale)

    <ThemeProvider theme={theme}>
    <Box id="Home" style={BACKGROUND}>
    <Grid container>
    <Grid item xs={12}>
      <Header/>
      <Container fluid="true">
        <SearchBar/> 
          {/* <SearchBar onSearch={getSearch}/>  hay que poner onSearch en el elemento padre del componente, que creo que es este */}
          {/* <SearchList list= {searchResult} /> */}
        <WelcomeCard/>
      </Container>
    </Grid>
    </Grid>
    </Box>
    <Footer/>
    </ThemeProvider>
  )
}

export default Home 
