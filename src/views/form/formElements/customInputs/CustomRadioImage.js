import * as React from 'react';
import Radio from '@mui/material/Radio';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import springImage from '../../../../assets/spring.jpeg';
import summerImage from '../../../../assets/summer.webp';
import autumnImage from '../../../../assets/autumn.jpg';

export default function CustomRadioWithImage() {
  const [selectedSeason, setSelectedSeason] = React.useState(null);
  const [hoveredCard, setHoveredCard] = React.useState(null);

  const handleRadioChange = (index) => {
    setSelectedSeason(index);
  };

  const cardStyle = (index) => ({
    background: `url(${getImageForSeason(index)})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    flex: 1,
    border: '1px solid grey',
    height: '180px', 
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden', 
    transition: 'box-shadow 0.3s ease', 
    ...(hoveredCard === index && cardHoverStyle),
  });

  const radioStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    opacity: 0, 
    backgroundColor: 'white', 
    transition: 'opacity 0.3s ease', 
  };

  const cardHoverStyle = {
    boxShadow: '0 16px 32px rgba(0, 0, 0, 0.4)', 
  };

  const getImageForSeason = (index) => {
    switch (index) {
      case 0:
        return springImage;
      case 1:
        return summerImage;
      case 2:
        return autumnImage;
      default:
        return '';
    }
  };

  return (
    <Card style={{ backgroundColor: 'white', padding: 10 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
        Custom Radios with Images
        </Typography>

        <div style={{ marginTop: '30px', display: 'flex', gap: '16px' }}>
          {[0, 1, 2].map((index) => (
            <Card
              key={index}
              style={cardStyle(index)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Radio
                checked={selectedSeason === index}
                onChange={() => handleRadioChange(index)}
                style={{
                  ...radioStyle,
                  opacity: hoveredCard === index ? 1 : 0, 
                }}
              />
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
