import Grid from '@mui/material/Grid';
import { Card, CardContent, CardHeader, Box, Typography } from '@mui/material';

import SwitchesBasic from '../../../../views/form/formElements/switch/switchBasic';
import SwitchesControlledUncontrolled from '../../../../views/form/formElements/switch/switchControledandUncontrolled';
import SwitchedLabelPlacement from '../../../../views/form/formElements/switch/switchLabelPlacement';
import SwitchesColors from '../../../../views/form/formElements/switch/switchColor';
import SwitchesCustomized from '../../../../views/form/formElements/switch/switchCustomized';
import SwitchesSizes from '../../../../views/form/formElements/switch/switchSize';
import SwitchesStandalone from '../../../../views/form/formElements/switch/switchStandalone';


const Switches = () => {
    return (
        <div>
            <h1 style={{ color: "#1976d2" }}>Switch</h1>
            <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                <Grid container spacing={3} className='match-height'>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title='Basic Switches' />
                            <CardContent>
                                <Box textAlign="center">
                                    <SwitchesBasic />
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
                            <CardHeader title='Controlled and Uncontrolled' />
                            <CardContent>
                                <Typography sx={{ mb: 2 }}>
                                    Manage checked prop with the help of a state for controlled Switch and use
                                    default Checked prop for uncontrolled Switch.
                                </Typography>
                                <Box textAlign="center">
                                    <SwitchesControlledUncontrolled />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardHeader title='Label Placement' />
                            <CardContent>
                                <Typography sx={{ mb: 2 }}>
                                    UselabelPlacement prop withFormControlLabel component to change the placement of
                                    the label.
                                </Typography>
                                <Box textAlign="center">
                                    <SwitchedLabelPlacement />
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
                                <Typography sx={{ mb: 2 }}>
                                    Use color prop with Switch  component for different colored switch.
                                </Typography>
                                <Box textAlign="center">
                                    <SwitchesColors />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardHeader title='Customized Switches' />
                            <CardContent>
                                <Typography sx={{ mb: 4 }}>
                                    Use styled hook to customize your switch.
                                </Typography>
                                <Box>
                                    <SwitchesCustomized/>
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
                                <Typography sx={{ mb: 2 }}>
                                Use size='small prop with Switch component for small switch.
                                </Typography>
                                <Box textAlign="center">
                                    <SwitchesSizes />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardHeader title='Standalone Switches' />
                            <CardContent>
                                <Box textAlign="center">
                                    <SwitchesStandalone />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                   
                </Grid>
                
            </div>
        </div>
    )
}

export default Switches