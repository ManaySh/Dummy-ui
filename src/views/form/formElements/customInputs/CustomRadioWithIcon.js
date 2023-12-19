import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';

export default function CustomRadioWithIcon() {
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleRadioChange = (index) => {
    setSelectedCard(index);
  };

  const cardStyle = (index) => ({
    backgroundColor: selectedCard === index ? 'lightblue' : 'white',
    flex: 1,
    border: '1px solid grey',
    height: '180px', // Increase the height
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  });

  return (
    <Card style={{ backgroundColor: 'white', padding: 10 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Custom Radios With Icons 
        </Typography>

        {/* Add space between heading and child cards */}
        <div style={{ marginTop: '30px', display: 'flex', gap: '16px' }}>
          {/* Card 1 */}
          <Card style={cardStyle(0)}>
            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <ShoppingCartIcon style={{ fontSize: 30, marginBottom: '5px' }} />
              <Typography variant="subtitle1" color="text.primary" style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                Add to Cart
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ marginBottom: '5px', textAlign: 'center' }}>
                Add items to your cart.
              </Typography>
              <Radio
                checked={selectedCard === 0}
                onChange={() => handleRadioChange(0)}
                color="primary"
              />
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card style={cardStyle(1)}>
            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <StoreIcon style={{ fontSize: 30, marginBottom: '5px' }} />
              <Typography variant="subtitle1" color="text.primary" style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                Online Store
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ marginBottom: '5px', textAlign: 'center' }}>
                Explore products in the store.
              </Typography>
              <Radio
                checked={selectedCard === 1}
                onChange={() => handleRadioChange(1)}
                color="primary"
              />
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card style={cardStyle(2)}>
            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <CreditCardIcon style={{ fontSize: 30, marginBottom: '5px' }} />
              <Typography variant="subtitle1" color="text.primary" style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                Checkout
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ marginBottom: '5px', textAlign: 'center' }}>
                Complete your purchase.
              </Typography>
              <Radio
                checked={selectedCard === 2}
                onChange={() => handleRadioChange(2)}
                color="primary"
              />
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}
