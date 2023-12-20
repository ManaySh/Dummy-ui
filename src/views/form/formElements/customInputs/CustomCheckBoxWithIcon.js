import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import LiveTvIcon from '@mui/icons-material/LiveTv';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function CustomCheckBoxWithIcon() {
  const [checkedCards, setCheckedCards] = React.useState([]);

  const handleCheckboxChange = (index) => {
    if (checkedCards.includes(index)) {
      setCheckedCards(checkedCards.filter((item) => item !== index));
    } else {
      setCheckedCards([...checkedCards, index]);
    }
  };

  const cardStyle = (index) => ({
    backgroundColor: checkedCards.includes(index) ? 'lightblue' : 'white',
    flex: 1,
    border: '1px solid grey',
    height: '180px', // Increase the height
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  });

  return (
    <Card style={{ backgroundColor: 'white', padding: 10 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Custom CheckBoxes with Icons
        </Typography>
        
        {/* Add space between heading and child cards */}
        <div style={{ marginTop: '30px', display: 'flex', gap: '16px' }}>
          {/* Card 1 */}
          <Card style={cardStyle(0)}>
            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <PlayCircleOutlineIcon style={{ fontSize: 30, marginBottom: '5px' }} />
              <Typography variant="subtitle1" color="text.primary" style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                Play Video
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ marginBottom: '5px', textAlign: 'center' }}>
                Click to play and enjoy music.
              </Typography>
              <Checkbox
                {...label}
                checked={checkedCards.includes(0)}
                onChange={() => handleCheckboxChange(0)}
              />
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card style={cardStyle(1)}>
            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <VideoLibraryIcon style={{ fontSize: 30, marginBottom: '5px' }} />
              <Typography variant="subtitle1" color="text.primary" style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                Video Library
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ marginBottom: '5px', textAlign: 'center' }}>
                Explore your video library.
              </Typography>
              <Checkbox
                {...label}
                checked={checkedCards.includes(1)}
                onChange={() => handleCheckboxChange(1)}
              />
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card style={cardStyle(2)}>
            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <LiveTvIcon style={{ fontSize: 30, marginBottom: '5px' }} />
              <Typography variant="subtitle1" color="text.primary" style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                Live TV
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ marginBottom: '5px', textAlign: 'center' }}>
                Watch live streaming.
              </Typography>
              <Checkbox
                {...label}
                checked={checkedCards.includes(2)}
                onChange={() => handleCheckboxChange(2)}
              />
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}
