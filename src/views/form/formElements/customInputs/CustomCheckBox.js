import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function CustomCheckBox() {
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
          Custom CheckBoxes
        </Typography>
        <div style={{ display: 'flex', gap: '16px', marginTop: '30px' }}>
          <Card style={cardStyle}>
            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Checkbox {...label} defaultChecked />
                  <Typography variant="body1" color="text.secondary" style={{ fontWeight: 'bold' }}>
                    Amazon Prime
                  </Typography>
                  <Typography variant="body1" color="text.secondary" style={{ marginLeft: '20px' }}>
                    $150.00
                  </Typography>
                </div>
              </div>
              <Typography variant="body2" color="text.secondary" style={{ marginLeft: '20px', marginBottom: '20px' }} >
                Stream your favorites with Prime.
              </Typography>
            </CardContent>
          </Card>

          <Card style={cardStyle}>
            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Checkbox {...label} defaultChecked/>
                  <Typography variant="body1" color="text.secondary" style={{ fontWeight: 'bold' }}>
                    Netflix
                  </Typography>
                  <Typography variant="body1" color="text.secondary" style={{ marginLeft: '55px' }}>
                    $99
                  </Typography>
                </div>
              </div>
              <Typography variant="body2" color="text.secondary" style={{ marginLeft: '20px', marginBottom: '20px' }}>
                Netflix nights, budget-friendly delights! 
              </Typography>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}
