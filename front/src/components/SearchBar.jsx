import React, {useState} from 'react';
import { AppBar, Box, Button, ButtonGroup, Card, CardActions, CardContent, CardHeader, TextField, Toolbar, Typography, ThemeProvider, createTheme, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
//import { search } from '../services/searchService';

const theme = createTheme({ //paleta de colores (light=azul claro / main=blanco / dark=azul osc. /contrastText= amarillo)
    palette: {
      light: '#C9E4EB',
      main: '#F1FAFC',
      dark: '#004A94',
      constrastText: '#F7F9A7',
    //   success: '#6CACCF' = azul medio, pero ya no se pueden meter más opciones en la paleta custom
    }
})


const CARD = {  // ESTILADO DE LA CARD
    height: 200,
    width: '90%',
    backgroundColor: '#004A94',
    margin: '0 auto',
    borderRadius: 20
}

const SEARCHBUTTON = { // botón dentro del que va la searchBar. Es una mierda, pedir ayuda a Álvaro para ponerlo de otra forma.
    marginBottom: '10px',
    marginLeft: '20px',
    backgroundColor: '#C9E4EB',
    borderRadius: 1,
    width: '600px'
}

const BUTTON1 = {                
    backgroundColor: '#6CACCF',
    color: '#004A94',
    borderRadius: 1,

    marginLeft:'10px',
    height: '56px',
    width: '170px'
}

function SearchBar({ onSearch }) {

    // const [ searchTerm, setSearchTerm ] = useState('')
    // const [ searchResult, setSearchResult ] = useState([])

    // const search = async () => {
    //     setSearchResult(await search(searchTerm))
    //     onSearch(searchResult)
    // }

    return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1, margin: '20px'}}>
    <Grid container>
    <Grid item xs={12}> {/* preguntar como podemos hacer para que cambien los tamaños de las cosas cuando se hace más pequeña la pantalla */}
        <Card style={CARD} position="static">
            <CardContent >
                <CardHeader title="Encuentra casa compartida" sx={{backgroundColor: '#004A94', color: 'constrastText'}} />
                <Card>
                    <CardContent sx={{display:'flex', alignItems:'center', padding:'16px !important'}}>
                        <TextField label="Indique la localidad" 
                        variant="outlined" 
                        sx={{ backgroundColor: '#C9E4EB', flexGrow: 1 }}
                        // onKeyDown={(e) => {
                        //     if(e.key === 'Enter') search()
                        // }} onChange={(e) => setSearchTerm(e.target.value) } 
                        />
                        <Button variant="contained" size='large' endIcon={<SearchIcon />} sx={BUTTON1}>Buscar</Button>  {/* PTE. DE METER ESTO: onClick={() => login()}*/}
                    </CardContent>
                </Card>
            </CardContent>
        </Card>
    </Grid>
    </Grid>
    </Box>
    </ThemeProvider>
  )
}

export default SearchBar