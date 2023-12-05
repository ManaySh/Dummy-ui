import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


function FacebookCircularProgress(props) {
  return (
    <Box sx={{ position: 'relative' }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        }}
        size={40}
        thickness={6} // Adjust the thickness as needed
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: (theme) => (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'),
          animationDuration: '550ms',
          position: 'absolute',
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
        }}
        size={40}
        thickness={6} // Adjust the thickness as needed
        {...props}
      />
    </Box>
  );
}

export default function CustomizedProgressBars() {
  return (
    <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
      <Typography variant="h6" gutterBottom sx={{ textAlign: 'left', marginBottom: 2, marginTop: 2 }}>
        Circular Indeterminate
      </Typography>
      <Typography variant="body1" paragraph sx={{ textAlign: 'left' }}>
        Indeterminate indicators visualize an unspecified wait time.
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 1 }}>
        <FacebookCircularProgress />
        <br />
      </Box>
    </Paper>
  );
}
