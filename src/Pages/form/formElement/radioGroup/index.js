import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Card, CardContent, CardHeader, Box } from '@mui/material';



import RadioButtonsGroup from '../../../../views/form/formElements/radioGroup/radioGroup';
import ControlledRadioButtonsGroup from '../../../../views/form/formElements/radioGroup/controlledRadiobutton';
import StandaloneRadioButtons from '../../../../views/form/formElements/radioGroup/standaloneRadiobutton';
import SizeRadioButtons from '../../../../views/form/formElements/radioGroup/sizeRadiobutton';
import ColorRadioButtons from '../../../../views/form/formElements/radioGroup/colorRadiobutton';
import FormControlLabelPlacement from '../../../../views/form/formElements/radioGroup/labelPlacementRadiobutton';
import ErrorRadios from '../../../../views/form/formElements/radioGroup/errorRadios';
import CustomizedRadios from '../../../../views/form/formElements/radioGroup/customizedRadio';

const RadioGroup = () => {
    return (
        <div>
            <h1 style={{ color: "#1976d2" }}>Radio group</h1>
            <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                <Grid container spacing={3} className='match-height'>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title='Basic Radio group' />
                            <CardContent>
                            <Typography>RadioGroup is a helpful wrapper used to group Radio components that provides an easier API, and proper keyboard accessibility to the group.</Typography>
                                <Box textAlign="center">
                                    <RadioButtonsGroup />
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
                            <CardHeader title='Controlled' />
                            <CardContent>
                            <Typography>You can control the radio with the value and onChange props:</Typography>
                                <Box textAlign="center" mt={2}>
                                    <ControlledRadioButtonsGroup/>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardHeader title='Color' />
                            <CardContent>
                                <Box textAlign="center" mt={2}>
                                    <ColorRadioButtons/>
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
                            <CardHeader title='Size' />
                            <CardContent>
                            <Typography>Use the size prop or customize the font size of the svg icons to change the size of the radios.</Typography>
                                <Box textAlign="center" mt={2}>
                                    <SizeRadioButtons/>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardHeader title='Standalone radio buttons' />
                            <CardContent>
                            <Typography>Radio can also be used standalone, without the RadioGroup wrapper.</Typography>
                                <Box textAlign="center" mt={2}>
                                    <StandaloneRadioButtons/>
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
                            <CardHeader title='Label placement' />
                            <CardContent>
                            <Typography>You can change the placement of the label with the FormControlLabel component's labelPlacement prop:</Typography>
                                <Box textAlign="center" mt={2}>
                                    <FormControlLabelPlacement/>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardHeader title='Customization' />
                            <CardContent>
                            <Typography>Use styled hook to customize your radio button.</Typography>
                                <Box textAlign="center" mt={2}>
                                    <CustomizedRadios/>
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
                            <CardHeader title='Show error'/>
                            <CardContent>
                            <Typography>In general, radio buttons should have a value selected by default. If this is not the case, you can display an error if no value is selected when the form is submitted:</Typography>
                                <Box textAlign="center" mt={2}>
                                    <ErrorRadios/>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                  
                  
                </Grid>
            </div>
        </div>
    )
}

export default RadioGroup