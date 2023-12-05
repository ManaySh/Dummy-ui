import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearIndeterminate() {
  return (
    <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
      <Typography variant="h6" gutterBottom sx={{ textAlign: 'left', marginBottom: 2, marginTop: 2 }}>
        Indeterminate
      </Typography>
      <Typography variant="body1" paragraph sx={{ textAlign: 'left', marginBottom: 5 }}>
      The LinearProgress uses a transition on the CSS transform property to provide a smooth update between different values. 
      </Typography>
      <Box sx={{ width: '100%', height: '30px' }}>
        <LinearProgress />
      </Box>
    </Paper>
  );
}
