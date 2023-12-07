import * as React from 'react';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import FiveGIcon from '@mui/icons-material/FiveG';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import TapAndPlayIcon from '@mui/icons-material/TapAndPlay';

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
  backgroundColor: theme.palette.primary.main, // Change to your desired background color
  color: theme.palette.primary.contrastText, // Change to your desired text color
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(270deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.default, // Change to your desired background color
}));

const iconStyles = {
  marginRight: '8px',
};

export default function CustomizedAccordionsTwo() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" expanded={expanded === 'panel1'}>
          <FiveGIcon sx={iconStyles} />
          <Typography>1 GB/day Plans (3)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1. Recharge ₹ 209 (details VALIDITY: 28 days, DATA: 1 GB/day)
            2. Recharge ₹ 179 (details VALIDITY: 24 days, DATA: 1 GB/day)
            3. Recharge ₹ 149 (details VALIDITY: 20 days, DATA: 1 GB/day)
          </Typography>
        </AccordionDetails>
      </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" expanded={expanded === 'panel2'}>
            <SmartphoneIcon sx={iconStyles} />
            <Typography>1.5 GB/day Plans (5)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            1.Recharge ₹ 2545 (details VALIDITY :336 days, DATA :1.5 GB/day)
            2.Recharge ₹ 758(details VALIDITY: 84 days, DATA: 1.5 GB/day.)
            3.Recharge ₹ 199 (details VALIDITY :23 days DATA: 1.5 GB/day)
            4.Recharge ₹ 529(details VALIDITY: 56 days, DATA: 1.5 GB/day.)
            5.Recharge ₹ 328 (details VALIDITY :28 days DATA: 1.5 GB/day)
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" expanded={expanded === 'panel3'}>
            <TapAndPlayIcon sx={iconStyles} />
            <Typography>3 GB/day Plans (5)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            1.Recharge ₹ 999 (details VALIDITY :84 days, DATA :3 GB/day)
            2.Recharge₹ 399(details VALIDITY: 28 days, DATA: 3 GB/day + 6GB extra.)
            3.Recharge₹ 219 (details VALIDITY :14 days DATA: 3 GB/day + 2 GB extra .)
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }
  