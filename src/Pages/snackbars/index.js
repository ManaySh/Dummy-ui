// ** MUI Imports
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Card, CardContent, CardHeader, Box } from '@mui/material';
// ** Demo Components Imports
import ConsecutiveSnackbars from "../../views/components/snackbars/ConsecutiveSnackbars";
import CustomizedSnackbar from "../../views/components/snackbars/CustomizedSnackbar";
import DirectionSnakbar from "../../views/components/snackbars/DirectionSnackbar";
import FabIntegrationSnackbar from "../../views/components/snackbars/FabIntegrationSnackbar";
import MessageLengthSnackbar from "../../views/components/snackbars/MessageLengthSnackbar";
import PositionedSnackbar from "../../views/components/snackbars/PositionedSnackbar";
import SimpleSnackbar from "../../views/components/snackbars/SimpleSnackbar";
import TransitionsSnackbar from "../../views/components/snackbars/TransitionsSnackbar";


const Snackbars = () => {
  return (
    <div>
      <h1 style={{ color: "#1976d2" }}>Snackbar</h1>
      <p>Snackbars provide brief notifications. The component is also known as a toast.</p>
      <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
        <Grid container spacing={3} className='match-height'>
          <Grid item xs={12}>
            <Card>
              <CardHeader title='Simple snackbars' />
              <CardContent>
                <Box textAlign="center">
                  <SimpleSnackbar/>
                </Box>
              </CardContent>
            </Card>
          </Grid>



        </Grid>
      </div>
      <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
        <Grid container spacing={3} className='match-height'>
          <Grid item xs={12}>
            <Card>
              <CardHeader title='Customization' />
              <CardContent>
                <Box textAlign="center">
                  <CustomizedSnackbar/>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
      <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
        <Grid container spacing={3} className='match-height'>
          <Grid item xs={12}>
            <Card>
              <CardHeader title='Positioned snackbars' />
              <CardContent>
                <Typography>In wide layouts, snackbars can be left-aligned or center-aligned if they are consistently placed on the same spot at the bottom of the screen, however there may be circumstances where the placement of the snackbar needs to be more flexible. You can control the position of the snackbar by specifying the anchorOrigin prop.</Typography>
                <Box textAlign="center">
                  <PositionedSnackbar/>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
      <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
        <Grid container spacing={3} className='match-height'>
          <Grid item xs={12}>
            <Card>
              <CardHeader title='Message Length' />
              <CardContent>
               <Typography>Some snackbars with varying message length.</Typography>
                <Box textAlign="center">
                  <MessageLengthSnackbar/>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
      <h3>Transitions</h3>
      <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
        <Grid container spacing={3} className='match-height'>
          <Grid item xs={12}>
            <Card>
              <CardHeader title='Consecutive Snackbars' />
              <CardContent>
               <Typography>When multiple snackbar updates are necessary, they should appear one at a time.</Typography>
                <Box textAlign="center">
                  <ConsecutiveSnackbars/>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
      {/* <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
        <Grid container spacing={3} className='match-height'>
          <Grid item xs={12}>
            <Card>
              <CardHeader title='Snackbars and floating action buttons (FABs)' />
              <CardContent>
               <Typography>Snackbars should appear above FABs (on mobile).</Typography>
                <Box textAlign="center">
                  <FabIntegrationSnackbar/>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div> */}
      <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
        <Grid container spacing={3} className='match-height'>
          <Grid item xs={12}>
            <Card>
              <CardHeader title='Change transition' />
              <CardContent>
               <Typography>Grow is the default transition but you can use a different one.</Typography>
                <Box textAlign="center">
                  <TransitionsSnackbar/>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
      <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
        <Grid container spacing={3} className='match-height'>
          <Grid item xs={12}>
            <Card>
              <CardHeader title='Control Slide direction' />
              <CardContent>
               <Typography>You can change the direction of the Slide transition.</Typography>
                <Box textAlign="center">
                  <DirectionSnakbar/>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>


    </div>
  )
}

export default Snackbars