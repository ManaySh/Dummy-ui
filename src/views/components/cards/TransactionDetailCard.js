import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import HistoryIcon from '@mui/icons-material/History';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ShareIcon from '@mui/icons-material/Share';
import image from '../../../assets/andrea.jpeg';

const transactionDetails = {
  senderName: 'John Doe',
  senderPhoneNumber: '123-456-7890',
  amountSent: '$500',
  bankingName: 'Bank of Hyderabad',
  transactionId: '123456789',
  accountNumber: '9876543210',
  utrNumber: 'ABC123XYZ456',
};

export default function MoneyTransactionCard() {
  const [expanded, setExpanded] = React.useState(false);
  const [selectedTransactionDetail, setSelectedTransactionDetail] = React.useState('');

  const handleTransactionDetailChange = (event) => {
    setSelectedTransactionDetail(event.target.value);
  };

  return (
    <Card sx={{ maxWidth: 400, margin: 'auto', boxShadow: 3, borderRadius: 8 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Money Received From
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar alt="Sender Photo" src={image} sx={{ width: 64, height: 64, marginRight: 2 }} />
          <Box>
            <Typography variant="subtitle1">{transactionDetails.senderName}</Typography>
            <Typography variant="body2" color="text.secondary">
              {transactionDetails.senderPhoneNumber}
            </Typography>
          </Box>
          <Box sx={{ marginLeft: 'auto' }}>
            <Typography variant="h6" color="primary">
              {transactionDetails.amountSent}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="subtitle1">Banking Name:</Typography>
          <Typography variant="body2" color="text.secondary">
            {transactionDetails.bankingName}
          </Typography>
          <CheckCircleIcon color="primary" sx={{ marginLeft: 1 }} />
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
            Transfer Details
          </Typography>
          <Select
            value={selectedTransactionDetail}
            onChange={handleTransactionDetailChange}
            displayEmpty
            variant="outlined"
            size="small"
          >
            <MenuItem value="" disabled>
              Select Detail
            </MenuItem>
            <MenuItem value="transactionId">Transaction ID</MenuItem>
            <MenuItem value="accountNumber">Credited to Account Number</MenuItem>
            <MenuItem value="utrNumber">UTR Number</MenuItem>
          </Select>
        </Box>

        <Collapse in={!expanded} timeout="auto" unmountOnExit>
          {selectedTransactionDetail === 'transactionId' && (
            <Typography variant="body2" color="text.secondary">
              Transaction ID: {transactionDetails.transactionId}
            </Typography>
          )}
          {selectedTransactionDetail === 'accountNumber' && (
            <Typography variant="body2" color="text.secondary">
              Credited to Account Number: {transactionDetails.accountNumber}
            </Typography>
          )}
          {selectedTransactionDetail === 'utrNumber' && (
            <Typography variant="body2" color="text.secondary">
              UTR Number: {transactionDetails.utrNumber}
            </Typography>
          )}
        </Collapse>

        <Divider sx={{ my: 2 }} />
        
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <IconButton color="primary" aria-label="add to shopping cart">
        <SendIcon color="primary" sx={{ marginBottom: 1 }} />
        </IconButton> 
         <Typography variant="caption">Send Money</Typography>
        </Box>

        <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <IconButton color="primary" aria-label="add to shopping cart">
        <HistoryIcon color="primary" sx={{ marginBottom: 1 }} />
        </IconButton> 
         <Typography variant="caption">View History</Typography>
        </Box>
        <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <IconButton color="primary" aria-label="add to shopping cart">
        <AccountBalanceIcon color="primary" sx={{ marginBottom: 1 }} />
        </IconButton> 
         <Typography variant="caption">Check Balance</Typography>
        </Box>
        <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <IconButton color="primary" aria-label="add to shopping cart">
        <ShareIcon color="primary" sx={{ marginBottom: 1 }} />
        </IconButton> 
         <Typography variant="caption">Share Reciept</Typography>
        </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
