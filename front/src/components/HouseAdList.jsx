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
        address={house.address} 
        location={house.location}
        description={house.description}
        rentalPrice={house.rentalPrice}
        houseId={house.id}
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