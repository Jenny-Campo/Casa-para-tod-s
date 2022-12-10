import React from 'react'
import { Box, ThemeProvider, createTheme } from '@mui/material';


const theme = createTheme({ //paleta de colores (light=azul claro / main=blanco / dark=azul osc. /contrastText= amarillo)
  palette: {
    light: '#C9E4EB',
    main: '#F1FAFC',
    dark: '#004A94',
    constrastText: '#F7F9A7'
  }
 })

const background = {
  height: 900,
  backgroundColor: '#C9E4EB',
  margin: '0 auto',
}


function HomeBox() {
  return (
    <ThemeProvider theme={theme}>
    <Box style={background}>
      <div> prueba</div>
    </Box>
    </ThemeProvider>
  )
}

export default HomeBox