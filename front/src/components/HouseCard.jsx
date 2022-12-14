import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { height } from '@mui/system';


function HouseCard({house, location, direcction, description, rentalPrice}) {
  console.log(house)
  return (
    <Card sx={{ display: 'inline-flex', flexWrap: 'wrap', m:2,  width: '250px', height: '250px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/WelcomeCard.jpg"
          alt="House/Apartment"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           { location } , { direcction }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            { description } 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            { rentalPrice }€
            </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default HouseCard