import Grid from '@mui/material/Grid';
import { Card, CardContent, CardHeader, Box } from '@mui/material';


import BasicDatePicker from '../../../../views/form/formElements/picker/basicPicker';
import TimePicker from '../../../../views/form/formElements/picker/timePicker';
import MinMaxDates from '../../../../views/form/formElements/picker/min&maxPicker';
import DaterangePicker from '../../../../views/form/formElements/picker/daterangePicker';
import SpecificRangePicker from '../../../../views/form/formElements/picker/specificRangePicker';
import CallbackPicker from '../../../../views/form/formElements/picker/callbackPicker';
import CustomizedPicker from '../../../../views/form/formElements/picker/customizedPicker';
import IncludeExcludePicker from '../../../../views/form/formElements/picker/includeExcludePicker';
import LocalePicker from '../../../../views/form/formElements/picker/localePicker';
import MonthandYearDropdownPicker from '../../../../views/form/formElements/picker/monthYeardropdownPicker';
import MonthYearQuarterPicker from '../../../../views/form/formElements/picker/monthYearQuarterPicker';
import OptionPicker from '../../../../views/form/formElements/picker/optionPicker';

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
                            <CardHeader title='Date Range Pickers' />
                            <CardContent>
                                <Box textAlign="center">
                                    <DaterangePicker />
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
                            <CardHeader title='Specific Range' />
                            <CardContent>
                                <Box textAlign="center">
                                    <SpecificRangePicker />
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
                            <CardHeader title='Callbacks' />
                            <CardContent>
                                <Box textAlign="center">
                                    <CallbackPicker />
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
                            <CardHeader title='Customization' />
                            <CardContent>
                                <Box textAlign="center">
                                    <CustomizedPicker />
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
                            <CardHeader title='Include Exclude' />
                            <CardContent>
                                <Box textAlign="center">
                                    <IncludeExcludePicker />
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
                            <CardHeader title='Locale' />
                            <CardContent>
                                <Box textAlign="center">
                                    <LocalePicker />
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
                            <CardHeader title='Month and Year Dropdowns' />
                            <CardContent>
                                <Box textAlign="center">
                                    <MonthandYearDropdownPicker />
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
                            <CardHeader title='Month, Year and Quarter' />
                            <CardContent>
                                <Box textAlign="center">
                                    <MonthYearQuarterPicker />
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
                            <CardHeader title='Options' />
                            <CardContent>
                                <Box textAlign="center">
                                    <OptionPicker/>
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