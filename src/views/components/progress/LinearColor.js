import * as React from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



export default function LinearColor() {
  return (
    <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
    <Typography variant="h6" gutterBottom sx={{ textAlign: 'left', marginBottom: 2, marginTop: 2 }}>
     Linear Color
    </Typography>
    <Typography variant="body1" paragraph sx={{ textAlign: 'left', marginBottom: 2 }}>
    The LinearProgress uses a transition on the CSS transform property to provide a smooth update between different values. 
    </Typography>
    <Box sx={{ width: '100%', height: '52px' }}>
    <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
      {/* <LinearProgress color="secondary" /> */}
      <LinearProgress color="success" />
      {/* <LinearProgress color="inherit" /> */}
      <LinearProgress color='warning' />
      <LinearProgress color='info' />
    </Stack>
    </Box>
  </Paper>


  );
}