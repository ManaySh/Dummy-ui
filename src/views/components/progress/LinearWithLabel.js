import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
    <Typography variant="h6" gutterBottom sx={{ textAlign: 'left', marginBottom: 2, marginTop: 2 }}>
  Linear With Label
    </Typography>
    <Typography variant="body1" paragraph sx={{ textAlign: 'left', marginBottom: 5 }}>
    The LinearProgress uses a transition on the CSS transform property to provide a smooth update between different values. 
    </Typography>
    <Box sx={{ width: '100%', height: '30px' }}>
    <LinearProgressWithLabel value={progress} />
    </Box>
  </Paper>

  );
}