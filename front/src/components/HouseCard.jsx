import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function HouseCard({house}) {
  console.log(house)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/WelcomeCard.jpg"
          alt="House/Apartment"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Tenerife , Calle Guía de Isora
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Este apartamento es el primero dentro de esta preciosa casa, al estilo casa canaria, rústico, elegante y a su vez acogedor. 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            300€
            </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default HouseCard