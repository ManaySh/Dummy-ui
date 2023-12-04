// ** MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import image from '../../../assets/barcelona.jpeg'
const CardImgTop = () => {
  return (
    <Card>
      <CardMedia sx={{ height: '14.5625rem' }} image= {image}/>
      <CardContent>
        <Typography variant='h5' sx={{ mb: 2 }}>
        A City of Marvels
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>
       Barcelona is renowned for the unique architectural works of Antoni Gaudí, 
       including the iconic Sagrada Família, Casa Batlló, and Park Güell. 

        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardImgTop