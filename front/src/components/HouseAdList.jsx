import React, {useContext} from 'react'
import { Context } from '../App';
import HouseCard from './HouseCard'


function HouseAdList() {
const context = useContext(Context)

function listHouses() {
  return context.search && context.search.map((house, idx) => <HouseCard key={idx} 
  house={house} 
  direcction={house.direcction} 
  location={house.location}
  description={house.description}
  rentalPrice={house.rentalPrice}
  />)
}

  return (
    <div>
    {listHouses()}
    </div>
    );
      }

export default HouseAdList