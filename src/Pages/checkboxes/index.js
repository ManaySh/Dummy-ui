import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Card, CardContent, CardHeader, Box } from '@mui/material';
import { pink } from '@mui/material/colors'; 

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const label = { control: <Checkbox />, label: 'Label' };

const Checkboxes = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
      <Grid container spacing={3} className='match-height'>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='Basic Checkboxes' />
            <CardContent>
              <Typography variant="body1" style={{ marginBottom: '10px' }}>
                Basic checkboxes with different configurations.
              </Typography>
              <Box textAlign="center">
                <FormGroup>
                  <FormControlLabel {...label} defaultChecked />
                  <FormControlLabel {...label} />
                  <FormControlLabel {...label} disabled />
                  <FormControlLabel {...label} disabled checked />
                </FormGroup>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='Label' />
            <CardContent>
              <Typography variant="body1" style={{ marginBottom: '10px' }}>
                You can provide a label to the Checkbox thanks to the FormControlLabel component.
              </Typography>
              <Box textAlign="center">
                <FormGroup>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                  <FormControlLabel required control={<Checkbox />} label="Required" />
                  <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
                </FormGroup>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='Size' />
            <CardContent>
              <Typography variant="body1" style={{ marginBottom: '10px' }}>
                Use the size prop or customize the font size of the SVG icons to change the size of the checkboxes.
              </Typography>
              <Box textAlign="center">
                <Checkbox {...label} defaultChecked size="small" />
                <Checkbox {...label} defaultChecked />
                <Checkbox
                  {...label}
                  defaultChecked
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='Color' />
            <CardContent>
              <Typography variant="body1" style={{ marginBottom: '10px' }}>
                Customize the color of the checkboxes.
              </Typography>
              <Box textAlign="center">
                <Checkbox {...label} defaultChecked />
                <Checkbox {...label} defaultChecked color="secondary" />
                <Checkbox {...label} defaultChecked color="success" />
                <Checkbox {...label} defaultChecked color="default" />
                <Checkbox
                  {...label}
                  defaultChecked
                  sx={{
                    color: pink[800],
                    '&.Mui-checked': {
                      color: pink[600],
                    },
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='Icon' />
            <CardContent>
              <Typography variant="body1" style={{ marginBottom: '10px' }}>
                Display checkboxes with custom icons.
              </Typography>
              <Box textAlign="center">
                <Checkbox {...label} icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon />} />
                <Checkbox
                  {...label}
                  icon={<BookmarkBorderIcon />}
                  checkedIcon={<BookmarkIcon />}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Checkboxes;
