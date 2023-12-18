import React from 'react';
import Grid from '@mui/material/Grid';
import { Card, CardContent, CardHeader, Box, Typography } from '@mui/material';

import SliderBasic from '../../../../views/form/formElements/slider/sliderBasic';
import SliderControlledUncontrolled from '../../../../views/form/formElements/slider/sliderControlledAndUncontrolled';
import SliderDiscrete from '../../../../views/form/formElements/slider/sliderDiscrete';
import SliderSmallSteps from '../../../../views/form/formElements/slider/sliderSmallSteps';
import SliderCustomMarks from '../../../../views/form/formElements/slider/sliderCustomMark';
import SliderRestrictedValues from '../../../../views/form/formElements/slider/sliderRestrictedValues';
import SliderLabelAlwaysVisible from '../../../../views/form/formElements/slider/sliderLabelAlwaysVisible';
import SliderRange from '../../../../views/form/formElements/slider/sliderRange';
import SliderColors from '../../../../views/form/formElements/slider/sliderColor';
import SliderCustomized from '../../../../views/form/formElements/slider/sliderCustomized';
import SliderCustomColors from '../../../../views/form/formElements/slider/sliderCustomColor';
import SliderVertical from '../../../../views/form/formElements/slider/sliderVertical';
import SliderRemovedTrack from '../../../../views/form/formElements/slider/sliderRemovedTrack';
import SliderInvertedTrack from '../../../../views/form/formElements/slider/sliderInvertedTrack';
import SliderSizes from '../../../../views/form/formElements/slider/sliderSizes';
import SliderMinimumDistance from '../../../../views/form/formElements/slider/sliderMinimumDistance';


const Slider = () => {
    return (
        <div>
            <h1 style={{ color: "#1976d2" }}>Slider</h1>
            <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                <Grid container spacing={3} className='match-height'>
                    <Grid item xs={6}>
                        <Card>
                            <CardHeader title='Basic Slider' />
                            <CardContent>
                                <Typography sx={{ mb: 4 }}>
                                    Use default Value prop for default slider value and disabled prop for disabled
                                    slider.
                                </Typography>
                                <Box textAlign="center">
                                    <SliderBasic />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardHeader title='Controlled and Uncontrolled' />
                            <CardContent>
                                <Typography sx={{ mb: 4 }}>
                                    Manage value prop with the help of a state for controlled slider and use{' '}
                                    defaultValue prop for uncontrolled slider.
                                </Typography>
                                <Box textAlign="center">
                                    <SliderControlledUncontrolled />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                <Grid container spacing={3} className='match-height'>
                    <Grid item xs={6}>
                        <Card>
                            <CardHeader title='Discrete Slider' />
                            <CardContent>
                                <Typography sx={{ mb: 4 }}>
                                    You can generate a mark for each step with marks prop.
                                </Typography>
                                <Box textAlign="center">
                                    <SliderDiscrete />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardHeader title='Small Steps' />
                            <CardContent>
                                <Typography sx={{ mb: 4 }}>
                                    You can change the default step increment with step prop.
                                </Typography>
                                <Box textAlign="center">
                                    <SliderSmallSteps />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </div>
            <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                <Grid container spacing={3} className='match-height'>
                    <Grid item xs={6}>
                        <Card>
                            <CardHeader title='Custom Marks' />
                            <CardContent>
                                <Typography sx={{ mb: 4 }}>
                                    You can have custom marks by providing a rich array to the marks prop.
                                </Typography>
                                <Box textAlign="center">
                                    <SliderCustomMarks />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardHeader title='Restricted Values' />
                            <CardContent>
                                <Typography sx={{ mb: 4 }}>
                                    You can restrict the selectable values to those provided with the marks prop with{' '}
                                    step={null}.
                                </Typography>
                                <Box textAlign="center">
                                    <SliderRestrictedValues />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </div>
            <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                <Grid container spacing={3} className='match-height'>
                    <Grid item xs={6}>
                        <Card>
                            <CardHeader title='Label Always Visible' />
                            <CardContent>
                                <Typography sx={{ mb: 4 }}>
                                    You can force the thumb label to be always visible with valueLabelDisplay='on'.
                                </Typography>
                                <Box textAlign="center">
                                    <SliderLabelAlwaysVisible />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardHeader title='Range Slider' />
                            <CardContent>
                                <Typography sx={{ mb: 4 }}>
                                    The slider can be used to set the start and end of a range by supplying an array of values to the{' '}
                                    value or defaultValue prop.
                                </Typography>
                                <Box textAlign="center">
                                    <SliderRange />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </div>
            <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                <Grid container spacing={3} className='match-height'>
                    <Grid item xs={6}>
                        <Card>
                            <CardHeader title='Colors' />
                            <CardContent>
                                <Typography sx={{ mb: 4 }}>
                                    Use color prop for different colored slider.
                                </Typography>
                                <Box textAlign="center">
                                    <SliderColors />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardHeader title='Customized Slider' />
                            <CardContent>
                                <Typography sx={{ mb: 8 }}>
                                    Use styled hook to customize your slider.
                                </Typography>
                                <Box textAlign="center">
                                    <SliderCustomized />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </div>
            <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                <Grid container spacing={3} className='match-height'>
                    <Grid item xs={6}>
                        <Card>
                            <CardHeader title='Custom Colors' />
                            <CardContent>
                                <Typography sx={{ mb: 4 }}>
                                    Use styled hook to customize your slider.
                                </Typography>
                                <Box textAlign="center">
                                    <SliderCustomColors />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardHeader title='Vertical Sliders' />
                            <CardContent>
                                <Typography sx={{ mb: 4 }}>
                                    Use orientation='vertical' prop for vertical slider.
                                </Typography>
                                <Box textAlign="center">
                                    <SliderVertical />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </div>
            <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                <Grid container spacing={3} className='match-height'>
                    <Grid item xs={6}>
                        <Card>
                            <CardHeader title='Removed Track' />
                            <CardContent>
                                <Typography sx={{ mb: 4 }}>
                                    The track can be turned off with track={`{false}`} prop.
                                </Typography>
                                <Box textAlign="center">
                                    <SliderRemovedTrack />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardHeader title='Inverted Track' />
                            <CardContent>
                                <Typography sx={{ mb: 4 }}>
                                    The track can be inverted with track='inverted' prop.
                                </Typography>
                                <Box textAlign="center">
                                    <SliderInvertedTrack />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </div>
            <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                <Grid container spacing={3} className='match-height'>
                    <Grid item xs={6}>
                        <Card>
                            <CardHeader title='Sizes' />
                            <CardContent>
                                <Typography sx={{ mb: 4 }}>
                                    Use size prop for different sizes of slider.
                                </Typography>
                                <Box textAlign="center">
                                    <SliderSizes />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardHeader title='Minimum Distance' />
                            <CardContent>
                                <Typography sx={{ mb: 4 }}>
                                    You can enforce a minimum distance between values in the onChange event handler.
                                </Typography>
                                <Box textAlign="center">
                                    <SliderMinimumDistance />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </div>
        </div>
    )
}

export default Slider