import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from '../../../assets/elephant.jpeg'


export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title="elephant"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Elephant
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Elephants are the largest land animals. 
 An adult male Asian elephant can weigh 4,000 kg and live for 47.6 years. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
