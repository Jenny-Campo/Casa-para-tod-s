import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import HouseAdInfo from '../components/HouseAdInfo';
import { Box, Grid, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({ 
  palette: {
    light: '#C9E4EB',
    main: '#F1FAFC',
    dark: '#004A94',
    constrastText: '#F7F9A7'
  }
 })


function HouseAdInfoPage() {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, backgroundColor:'light'  }}>
      <Grid container>
      <Grid item xs={12}>
      <Header/>
      <HouseAdInfo/>
      </Grid>
      </Grid>
      </Box>
      <Footer/>
      </ThemeProvider>
    </div>
  )
}

export default HouseAdInfoPage