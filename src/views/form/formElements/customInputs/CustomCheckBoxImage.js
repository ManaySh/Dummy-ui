import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import newyorkImage from '../../../../assets/pexels-photo-773297.jpeg';
import londonImage from '../../../../assets/pexels-photo-220887.jpeg';
import australiaImage from '../../../../assets/sydneybuild.jpeg';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function CustomCheckBoxImage() {
  const [selectedDestinations, setSelectedDestinations] = React.useState([]);
  const [hoveredCard, setHoveredCard] = React.useState(null);

  const handleCheckboxChange = (index) => {
    if (selectedDestinations.includes(index)) {
      setSelectedDestinations(selectedDestinations.filter((item) => item !== index));
    } else {
      setSelectedDestinations([...selectedDestinations, index]);
    }
  };

  const cardStyle = (index) => ({
    background: `url(${getImageForDestination(index)})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    flex: 1,
    border: '1px solid grey',
    height: '180px', // Increase the height
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden', // Hide overflow to prevent checkbox flickering
    transition: 'box-shadow 0.3s ease', // Add transition for smooth effect
    ...(hoveredCard === index && cardHoverStyle), // Add this line
  });

  const checkboxStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    opacity: 0, // Initially hidden
    backgroundColor: 'white', // White background for the checkbox
    transition: 'opacity 0.3s ease', // Add transition for smooth effect
  };

  const cardHoverStyle = {
    boxShadow: '0 16px 32px rgba(0, 0, 0, 0.4)', // Adjusted shadow on hover
  };

  const getImageForDestination = (index) => {
    switch (index) {
      case 0:
        return newyorkImage;
      case 1:
        return londonImage;
      case 2:
        return australiaImage;
      default:
        return '';
    }
  };

  return (
    <Card style={{ backgroundColor: 'white', padding: 10 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
        Custom Checkboxes with Images
        </Typography>

        <div style={{ marginTop: '30px', display: 'flex', gap: '16px' }}>
          {[0, 1, 2].map((index) => (
            <Card
              key={index}
              style={cardStyle(index)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Checkbox
                {...label}
                checked={selectedDestinations.includes(index)}
                onChange={() => handleCheckboxChange(index)}
                style={{
                  ...checkboxStyle,
                  opacity: hoveredCard === index ? 1 : 0, // Show checkbox on hover
                }}
              />
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
