// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import CircularIndeterminate from '../../views/components/progress/CircularInderminate'
import ColoredProgress from '../../views/components/progress/ColoredProgress'
import CircularDeterminate from '../../views/components/progress/CircularDeterminate'
import CircularIntegration from '../../views/components/progress/Interactiveintegration'
import CustomizedProgressBars from '../../views/components/progress/CustomizedProgress'
import CircularWithValueLabel from '../../views/components/progress/CircularWithLabel'
import LinearIndeterminate from '../../views/components/progress/LinearProgress'
import LinearDeterminate from '../../views/components/progress/LinearDeterminate'
import LinearColor from '../../views/components/progress/LinearColor'
import LinearWithValueLabel from '../../views/components/progress/LinearWithLabel'


const Progress = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} >
        <Typography variant='h6'>Circular Progress</Typography>
      </Grid>
      <Grid item xs={12} sm={6} >
        <CircularIndeterminate />
      </Grid>
      <Grid item xs={12} sm={6}>
        <ColoredProgress />
      </Grid>
      <Grid item xs={12} sm={6} >
        <CircularDeterminate />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CircularIntegration />
      </Grid>
      <Grid item xs={12} sm={6} >
        <CustomizedProgressBars />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CircularWithValueLabel />
      </Grid>
      <Grid item xs={12} >
        <Typography variant='h6'>Linear Progress</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <LinearIndeterminate />
      </Grid>
      <Grid item xs={12} sm={6}>
        <LinearDeterminate />
      </Grid>
      <Grid item xs={12} sm={6}>
        <LinearWithValueLabel />
      </Grid>
      <Grid item xs={12} sm={6}>
        <LinearColor />
      </Grid>
       {/*
      <Grid item xs={12} sm={6} >
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
      </Grid> */}
    </Grid>
  )
}

export default Progress


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