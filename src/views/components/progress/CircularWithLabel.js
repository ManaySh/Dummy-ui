import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function CircularWithValueLabel() {
  const [progress, setProgress] = React.useState(10);

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
       Circular Determinate
      </Typography>
      <Typography variant="body1" paragraph>
      Determinate indicators display how long an operation will take.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70px' }}>
      <CircularProgressWithLabel value={progress} />
      </Box>
    </Paper>
  );
}
