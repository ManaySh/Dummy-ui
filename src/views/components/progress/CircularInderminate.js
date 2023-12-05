import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function CircularIndeterminateWithHeading() {
  return (
    <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
      <Typography variant="h6" gutterBottom sx={{ textAlign: 'left', marginBottom: 2, marginTop:2}}>
        Circular Indeterminate
      </Typography>
      <Typography variant="body1" paragraph sx={{ textAlign: 'left' }}>
        Indeterminate indicators visualize an unspecified wait time.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70px' }}>
        <CircularProgress />
      </Box>
    </Paper>
  );
}
