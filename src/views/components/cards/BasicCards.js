import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const synonyms = ['Kind-hearted', 'Generous', 'Philanthropic', 'Humanitarian'];

export default function CardWithSynonyms() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div" sx={{ mb: 1 }}>
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          well-meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Typography sx={{ mr: 1 }}>Difficulty:</Typography>
          <Rating name="difficulty" value={3} max={5} readOnly />
        </Box>
        <Typography sx={{ mb: 1 }}>Synonyms:</Typography>
        {synonyms.map((synonym, index) => (
          <Button key={index} variant="contained" size="small" sx={{ mb: 1, mr: 1 }}>
            {synonym}
          </Button>
        ))}
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
