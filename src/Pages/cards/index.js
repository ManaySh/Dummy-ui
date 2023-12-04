// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import CardBasic from '../../views/components/cards/BasicCards'
import OutlinedCard from '../../views/components/cards/OutlinedCard'
import ComplexCard from '../../views/components/cards/ComplexInteractionCard'
import MediaCard from '../../views/components/cards/MediaCard'
import UserCard from '../../views/components/cards/Usercard'
import MoneyTransactionCard from '../../views/components/cards/TransactionDetailCard'


const BasicCard = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ pb: 4 }}>
        <Typography variant='h4'>Basic Cards</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardBasic />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <OutlinedCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ComplexCard/>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <MediaCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <UserCard/>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <MoneyTransactionCard />
      </Grid>
    </Grid>
  )
}

export default BasicCard


      {/* 
      
      
     
      <Grid item xs={12} sm={6} md={4}>
        <CardAppleWatch />
      </Grid>
      <Grid item xs={12} md={8}>
        <CardMembership />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardInfluencer />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardVerticalRatings />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardSupport />
      </Grid>
      <Grid item xs={12} sx={{ pb: 4, pt: theme => `${theme.spacing(17.5)} !important` }}>
        <Typography variant='h4'>Navigation Cards</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardNavigation />
      </Grid>
      <Grid item xs={12} md={6}>
        <CardNavigationCenter />
      </Grid>
      <Grid item xs={12} sx={{ pb: 4, pt: theme => `${theme.spacing(17.5)} !important` }}>
        <Typography variant='h4'>Solid Cards</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardTwitter />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardFacebook />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardLinkedIn />
      </Grid> */}