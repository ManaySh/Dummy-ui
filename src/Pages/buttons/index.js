import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import BasicButtons from '../../views/components/buttons/BasicButtons';
import { Card, CardContent, CardHeader, Box } from '@mui/material';
import TextButtons from '../../views/components/buttons/TextButtons';
import ContainedButtons from '../../views/components/buttons/ContainedButtons';
import OutlinedButtons from '../../views/components/buttons/OutlinedButton';
import ColorButtons from '../../views/components/buttons/ColoredButtons';
import IconButtons from '../../views/components/buttons/IconButtons';
import IconLabelButtons from '../../views/components/buttons/IconLabelButtons';

const Buttons = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
      <Grid container spacing={3} className='match-height'>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='Basic Button' />
            <CardContent>
              <Typography variant="body1" style={{ marginBottom: '10px' }}>
                The Button comes with three variants: text (default), contained, and outlined.
              </Typography>
              <Box textAlign="center">
                <BasicButtons />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='Text Button' />
            <CardContent>
              <Typography variant="body1" style={{ marginBottom: '10px' }}>
              Text buttons are typically used for less-pronounced actions, including those located: in dialogs, in cards. In cards, text buttons help maintain an emphasis on card content.
              </Typography>
              <Box textAlign="center">
                <TextButtons />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='Contained Button' />
            <CardContent>
              <Typography variant="body1" style={{ marginBottom: '10px' }}>
              Contained buttons are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app.
              </Typography>
              <Box textAlign="center">
                <ContainedButtons />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='Outlined Button' />
            <CardContent>
              <Typography variant="body1" style={{ marginBottom: '10px' }}>
              Outlined buttons are medium-emphasis buttons. They contain actions that are important but aren't the primary action in an app.
              </Typography>
              <Box textAlign="center">
                <OutlinedButtons />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='Color Button' />
            <CardContent>
              <Typography variant="body1" style={{ marginBottom: '10px' }}>
              In addition to using the default button colors, you can add custom ones, or disable any you don't need. 
              </Typography>
              <Box textAlign="center">
                <ColorButtons />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title='Icon Button' />
          <CardContent>
            <Typography variant="body1" style={{ marginBottom: '10px' }}>
            Icon buttons are found in app bars and toolbars and also appropriate for toggle buttons that allow a single choice.
            </Typography>
            <Box textAlign="center">
              <IconButtons />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title='Button with Label and Icon' />
          <CardContent>
            <Typography variant="body1" style={{ marginBottom: '10px' }}>
            Sometimes you want to have icons for certain buttons to enhance the UX of the application as we recognize logos easily than plain text such as delete.
            </Typography>
            <Box textAlign="center">
              <IconLabelButtons />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      </Grid>
    </div>
  );
}

export default Buttons;



// // ** MUI Imports
// import Grid from '@mui/material/Grid'
// import Typography from '@mui/material/Typography'
// import BasicButtons from '../../views/components/buttons/BasicButtons'
// import { Card, CardContent, CardHeader, Box } from '@mui/material'

// const Buttons = () => {
//   return (
//     <Grid container spacing={3} className='match-height'>
//       <Grid item xs={12}>
//         <Card>
//           <CardHeader title='Basic Button' />
//           <CardContent>
//             <Typography variant="body1" style={{ marginBottom: '10px' }}>
//               The Button comes with three variants: text (default), contained, and outlined.
//             </Typography>
//             <Box textAlign="center">
//               <BasicButtons />
//             </Box>
//           </CardContent>
//         </Card>
//       </Grid>
//       <Grid item xs={12}>
//         <Card>
//           <CardHeader title='Basic Button' />
//           <CardContent>
//             <Typography variant="body1" style={{ marginBottom: '10px' }}>
//               The Button comes with three variants: text (default), contained, and outlined.
//             </Typography>
//             <Box textAlign="center">
//               <BasicButtons />
//             </Box>
//           </CardContent>
//         </Card>
//       </Grid>
//     </Grid>
//   )
// }

// export default Buttons;




