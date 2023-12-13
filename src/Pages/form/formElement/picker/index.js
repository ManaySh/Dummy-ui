import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Card, CardContent, CardHeader, Box } from '@mui/material';


import BasicDatePicker from '../../../../views/form/formElements/picker/basicPicker';
import TimePicker from '../../../../views/form/formElements/picker/timePicker';
import MinMaxDates from '../../../../views/form/formElements/picker/min&maxPicker';
import DaterangePicker from '../../../../views/form/formElements/picker/daterangePicker';

const Pickers = () => {
    return (
        <div>
            <h1 style={{ color: "#1976d2" }}>Date picker</h1>
            <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                <Grid container spacing={3} className='match-height'>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title='Date Pickers' />
                            <CardContent>
                                <Box textAlign="center">
                                    <BasicDatePicker />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                <Grid container spacing={3} className='match-height'>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title='Time Pickers' />
                            <CardContent>
                                <Box textAlign="center">
                                    <TimePicker />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                <Grid container spacing={3} className='match-height'>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title='Min & Max Pickers' />
                            <CardContent>
                                <Box textAlign="center">
                                    <MinMaxDates />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                <Grid container spacing={3} className='match-height'>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title='Min & Max Pickers' />
                            <CardContent>
                                <Box textAlign="center">
                                    <DaterangePicker />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Pickers