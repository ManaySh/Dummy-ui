// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import AvatarGroup from '@mui/material/AvatarGroup'
import image from '../../../assets/profile.webp'
import profile from '../../../assets/menbackground.webp'
import bandla from '../../../assets/bandla.jpeg'
import raja from '../../../assets/raja.webp'
import hari from '../../../assets/hari.jpeg'
import vennela from '../../../assets/vennela.jpeg'
import trivik from '../../../assets/trivik.jpeg'





const UserCard = () => {
  return (
    <Card sx={{ position: 'relative' }}>
      <CardMedia sx={{ height: '12.625rem' }} image={profile} />
      <Avatar
        alt='John Doe'
        src= {image}
        sx={{
          width: 75,
          height: 75,
          left: '1.313rem',
          top: '10.28125rem',
          position: 'absolute',
          border: theme => `0.25rem solid ${theme.palette.common.white}`
        }}
      />
      <CardContent>
        <Box
          sx={{
            mt: 5.75,
            mb: 8.75,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box sx={{ mr: 2, mb: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h5'>John Doe</Typography>
            <Typography variant='body2'>Hyderabad, IN</Typography>
          </Box>
          <Button variant='contained'>Make A Call</Button>
        </Box>
        <Box sx={{ gap: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant='subtitle2' sx={{ whiteSpace: 'nowrap', color: 'text.primary' }}>
            5 mutual friends
          </Typography>
          <AvatarGroup max={4}>
        <Avatar alt="Bandla Ganesh" src={bandla} />
      <Avatar alt="Rajamouli" src= {raja} />
      <Avatar alt="Harish Shankar" src={hari} />
      <Avatar alt="Vennela Kishore" src={vennela} />
      <Avatar alt="Trivikram Srinivas" src={trivik} />

          </AvatarGroup>
        </Box>
      </CardContent>
    </Card>
  )
}

export default UserCard
