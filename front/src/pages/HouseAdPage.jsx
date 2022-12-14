import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import HouseAdList from '../components/HouseAdList';
import { useNavigate } from 'react-router-dom'
import { Box, Grid } from '@mui/material';

function HouseAdPage() {

const navigate = useNavigate()
  return (
    <div>
        <Box id="box-house" sx={{ flexGrow: 1  }}>
        <Grid container>
        <Grid item xs={12}>
        <Header/>
        <HouseAdList/>
        </Grid>
        </Grid>
        </Box>
        <Footer/>
    </div>
  )
}

export default HouseAdPage