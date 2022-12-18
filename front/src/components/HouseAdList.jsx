import { Grid } from '@mui/material';
import React, {useContext} from 'react'
import { Context } from '../App';
import HouseCard from './HouseCard'


function HouseAdList() {
const context = useContext(Context)

function listHouses() {
  return context.search && context.search.map((house, idx) => (
    <Grid item xs={2}>
      <HouseCard key={idx} 
        house={house} 
        direcction={house.direcction} 
        location={house.location}
        description={house.description}
        rentalPrice={house.rentalPrice}
      />
    </Grid>
  ) )
}

  return (
    <Grid container sx={{width:'100%'}} direction="row">
      
        { listHouses() }
      
    </Grid>
    );
      }

export default HouseAdList