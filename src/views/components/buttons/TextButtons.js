import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function TextButtons() {
  return (
    <Stack spacing={2} direction="row" justifyContent="center">
      <Button style={{ marginTop: '10px', marginBottom: '10px' }}>Primary</Button>
      <Button style={{ marginTop: '10px', marginBottom: '10px' }}>Cancel</Button>
      <Button style={{ marginTop: '10px', marginBottom: '10px' }} disabled>Disabled</Button>
      <Button style={{ marginTop: '10px', marginBottom: '10px' }} href="#text-buttons">Link</Button>
    </Stack>
  );
}