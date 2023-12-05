import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function CircularColor() {
  return (
    <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
    <Typography variant="h6" gutterBottom sx={{ textAlign: 'left', marginBottom: 2, marginTop:2}}>
        Circular Color
    </Typography>
    <Typography variant="body1" paragraph sx={{ textAlign: 'left' }}>
    Progress indicators inform users about the status of processes.
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70px' }}>
    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
      <CircularProgress color='info' />
      <CircularProgress color='error' />
    </Stack>
    </Box>
  </Paper>

  );
}