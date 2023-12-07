
import * as React from 'react';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import Inventory2Icon from '@mui/icons-material/Inventory2';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

// ... (previous imports)

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={props.expanded ? <RemoveIcon style={{ transform: 'rotate(90deg)' }} /> : <AddIcon />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor: 'white', // Change to the desired background color
    flexDirection: 'row', // Change 'row-reverse' to 'row'
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(270deg)', // Set to 0deg for horizontal Remove icon
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
      display: 'flex',
      alignItems: 'center',
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));
  
  const iconStyles = {
    marginRight: '8px', // Adjust the margin as needed
  };
  
  export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
  
    return (
      <div>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" expanded={expanded === 'panel1'}>
            <Inventory2Icon sx={iconStyles} />
            <Typography>What products can I sell on Amazon.in?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can sell items in the following categories: Apparel, Automotive, Baby Products, Batteries, Beauty, Books, etc...
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" expanded={expanded === 'panel2'}>
            <HowToRegIcon sx={iconStyles} />
            <Typography>What do I need to register as a seller on Amazon.in?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Your business details, Your contact details - email and phone number, Basic information about your business
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" expanded={expanded === 'panel3'}>
            <LocalShippingIcon sx={iconStyles} />
            <Typography>Who takes care of shipping?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              This depends on which fulfillment option you use to deliver your products. With FBA & Easy Ship, Amazon will handle the delivery of products to customers (and returns).
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }
  