import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Card, CardContent, CardHeader, Box } from '@mui/material';

// ** Demo Components Imports
import BasicCheckbox from '../../../../views/form/formElements/checkbox/basicCheckboxes';
import CheckboxLabels from '../../../../views/form/formElements/checkbox/labelCheckbox';
import SizeCheckboxes from '../../../../views/form/formElements/checkbox/sizeCheckbox';
import ColorCheckboxes from '../../../../views/form/formElements/checkbox/colorBox';
import IconCheckboxes from '../../../../views/form/formElements/checkbox/iconCheckboxes';
import ControlledCheckbox from '../../../../views/form/formElements/checkbox/controlledCheckbox';
import IndeterminateCheckbox from '../../../../views/form/formElements/checkbox/indeterminateCheckbox';
import CheckboxesGroup from '../../../../views/form/formElements/checkbox/checkboxesGroup';
import FormControlLabelPosition from '../../../../views/form/formElements/checkbox/labelPosition';
import CustomizedCheckbox from '../../../../views/form/formElements/checkbox/customizedCheckbox';
const CheckBox = () => {
    return (
        <div>
            <h1 style={{ color: "#1976d2" }}>Checkbox</h1>
            <ul>
                <li>Checkboxes allow the user to select one or more items from a set.</li>
                <li>Checkboxes can be used to turn an option on or off.</li>
            </ul>
            <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                <Grid container spacing={3} className='match-height'>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title='Basic checkboxes' />
                            <CardContent>
                                <Box textAlign="center">
                                    <BasicCheckbox />
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
                            <CardHeader title='Label' />
                            <CardContent>
                                <Box textAlign="center">
                                    <CheckboxLabels />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardHeader title='Size' />
                            <CardContent>
                                <Box textAlign="center">
                                    <SizeCheckboxes />
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
                            <CardHeader title='Color' />
                            <CardContent>
                                <Box textAlign="center">
                                    <ColorCheckboxes />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardHeader title='Icon' />
                            <CardContent>
                                <Box textAlign="center">
                                    <IconCheckboxes/>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                <Grid container spacing={3} className='match-height'>
                    <Grid item xs={4}>
                        <Card>
                            <CardHeader title='Controlled' />
                            <CardContent>
                                <Box textAlign="center">
                                    <ControlledCheckbox />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={8}>
                        <Card>
                            <CardHeader title='Indeterminate' />
                            <CardContent>
                                <Typography>A checkbox input can only have two states in a form: checked or unchecked. It either submits its value or doesn't. Visually, there are three states a checkbox can be in: checked, unchecked, or indeterminate.</Typography>
                                <Box textAlign="center">
                                    <IndeterminateCheckbox/>
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
                            <CardHeader title='FormGroup' />
                            <CardContent>
                                <Typography>FormGroup is a helpful wrapper used to group selection control components.</Typography>
                                <Box textAlign="center">
                                    <CheckboxesGroup/>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardHeader title='Label placement' />
                            <CardContent>
                               <Typography>You can change the placement of the label:</Typography>
                                <Box textAlign="center" mt={5}>
                                    <FormControlLabelPosition/>
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
                            <CardHeader title='Customized' />
                            <CardContent>
                                <Typography>Use styled hook to customize your checkbox.</Typography>
                                <Box textAlign="center">
                                    <CustomizedCheckbox/>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    
                </Grid>
            </div>
          
          
        </div>
    )
}

export default CheckBox;