import React, {useContext} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Context } from '../App';
import HouseCard from './HouseCard'


function HouseAdList() {
const context = useContext(Context)

function listHouses() {
  return context.search && context.search.map((house, idx) => <HouseCard key={idx} house={house}/>)
}

  return (
    <div>
    {listHouses()}
    </div>
    );
      }

export default HouseAdList