import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row" justifyContent="center">
      <Button variant="text" style={{ marginTop: '10px', marginBottom: '10px' }}>
        Text
      </Button>
      <Button variant="contained" style={{ marginTop: '10px', marginBottom: '10px' }}>
        Primary
      </Button>
      <Button variant="contained" style={{ marginTop: '10px', marginBottom: '10px' }}>
        Secondary
      </Button>
      <Button variant="outlined" style={{ marginTop: '10px', marginBottom: '10px' }}>
        Outlined
      </Button>
    </Stack>
  );
}
