import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


export default function LinearDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
    <Typography variant="h6" gutterBottom sx={{ textAlign: 'left', marginBottom: 2, marginTop: 2 }}>
      Determinate
    </Typography>
    <Typography variant="body1" paragraph sx={{ textAlign: 'left', marginBottom: 5 }}>
    The LinearProgress uses a transition on the CSS transform property to provide a smooth update between different values. 
    </Typography>
    <Box sx={{ width: '100%', height: '30px' }}>
    <LinearProgress variant="determinate" value={progress} />
    </Box>
  </Paper>

  );
}