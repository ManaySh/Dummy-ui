import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function CustomRadio() {
  const [selectedRadio, setSelectedRadio] = useState(null);

  const handleRadioChange = (value) => {
    setSelectedRadio(value);
  };

  const cardStyle = {
    backgroundColor: 'white',
    flex: 1,
    border: '1px solid grey',
    height: '110px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  };

  return (
    <Card style={{ backgroundColor: 'white', padding: 10 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Custom Radio Buttons
        </Typography>
        <div style={{ display: 'flex', gap: '16px', marginTop: '30px' }}>
          <Card style={cardStyle}>
            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Radio
                    {...label}
                    checked={selectedRadio === 'ola'}
                    onChange={() => handleRadioChange('ola')}
                  />
                  <Typography variant="body1" color="text.secondary" style={{ fontWeight: 'bold' }}>
                    Ola
                  </Typography>
                  <Typography variant="body1" color="text.secondary" style={{ marginLeft: '40px' }}>
                    $9.99
                  </Typography>
                </div>
              </div>
              <Typography variant="body2" color="text.secondary" style={{ marginLeft: '20px', marginBottom: '20px' }}>
              Ola - it's a journey of comfort and reliability.
              </Typography>
            </CardContent>
          </Card>

          <Card style={cardStyle}>
            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Radio
                    {...label}
                    checked={selectedRadio === 'uber'}
                    onChange={() => handleRadioChange('uber')}
                  />
                  <Typography variant="body1" color="text.secondary" style={{ fontWeight: 'bold' }}>
                    Uber
                  </Typography>
                  <Typography variant="body1" color="text.secondary" style={{ marginLeft: '55px' }}>
                    $14.99
                  </Typography>
                </div>
              </div>
              <Typography variant="body2" color="text.secondary" style={{ marginLeft: '20px', marginBottom: '20px' }}>
              With Uber, a destination is never far away.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}
