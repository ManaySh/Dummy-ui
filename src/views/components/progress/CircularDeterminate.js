import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


export default function CircularDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
    <Typography variant="h6" gutterBottom sx={{ textAlign: 'left', marginBottom: 2, marginTop:2}}>
      Circular Indeterminate
    </Typography>
    <Typography variant="body1" paragraph sx={{ textAlign: 'left' }}>
      Indeterminate indicators visualize an unspecified wait time.
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70px' }}>
    <Stack spacing={2} direction="row">
    <CircularProgress variant="determinate" value={25} />
      <CircularProgress variant="determinate" value={50} />
      <CircularProgress variant="determinate" value={75} />
      <CircularProgress variant="determinate" value={100} />
      <CircularProgress variant="determinate" value={progress} />
      </Stack>
    </Box>
  </Paper>

  );
}