import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import WelcomeCard from '../components/WelcomeCard';
import { Box, ThemeProvider, createTheme, Container, Grid } from '@mui/material';


const theme = createTheme({ 
  palette: {
    light: '#C9E4EB',
    main: '#F1FAFC',
    dark: '#004A94',
    constrastText: '#F7F9A7'
  }
})

const BACKGROUND = {
  height: 1250,
  backgroundColor: '#C9E4EB',
  margin: '0 auto',
}

function Home() {


  return (

    <ThemeProvider theme={theme}>
      <Box id="Home" style={BACKGROUND}>
      <Grid container>
      <Grid item xs={12}>
        <Header/>
        <Container fluid="true">
          <SearchBar/> 
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
