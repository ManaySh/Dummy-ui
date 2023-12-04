import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function IconButtons() {
  return (
    <Stack direction="row" spacing={3}>
      <IconButton aria-label="delete">
      <AlarmIcon />
      </IconButton>
      <IconButton aria-label="delete" disabled color="primary">
      <AlarmIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
      <AlarmIcon />
      </IconButton>
    </Stack>
  );
}