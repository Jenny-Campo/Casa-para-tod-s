import React, {useEffect, useState, useContext} from 'react';
import { Autocomplete, Box, Button, Card, CardContent, CardHeader, TextField, ThemeProvider, createTheme, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Context } from '../App';


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
    backgroundColor: '#004A94',
    color: '#F7F9A7',
    borderRadius: 1,
    marginLeft:'10px',
    height: '56px',
    width: '170px'
}

function SearchBar() {

    const [ searchTerm, setSearchTerm ] = useState('')
    const [ searchResult, setSearchResult ] = useState([])

    const context = useContext(Context)


    const search = async() => {
        await axios.get(`http://localhost:2222/api/province/${searchTerm}`)
        .then(response => {
            context.setSearch(response.data);
        }).catch(error => {
            console.log(error)
        })
    }

    const handleChange=e=>{
        setSearchTerm(e.target.value);
    }


    return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1, margin: '20px'}}>
    <Grid container>
    <Grid item xs={12}> {/* preguntar como podemos hacer para que cambien los tamaños de las cosas cuando se hace más pequeña la pantalla */}
        <Card style={CARD} position="static">
            <CardContent >
                <CardHeader title="Encuentra casa compartida" sx={{backgroundColor: '#004A94', color: 'constrastText'}} />
                <Card>
                    <CardContent sx={{display:'flex', backgroundColor: 'light', align:'center', padding:'16px !important'}}>
                        <TextField label="Indique la localidad" 
                        variant="outlined" 
                        sx={{ backgroundColor: 'light', flexGrow: 1 }}
                        onChange={handleChange} 
                        />
                        <Button component={Link} to="/houseAd" variant="contained" size='large' endIcon={<SearchIcon />} sx={BUTTON1} onClick={() => search()}>Buscar </Button>
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