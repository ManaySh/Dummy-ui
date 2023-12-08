// ** MUI Imports
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Card, CardContent, CardHeader, Box } from '@mui/material';
// ** Demo Components Imports
import BasicTextFields from '../../../../views/form/formElements/textFields/BasicTextField';
import FormPropsTextFields from '../../../../views/form/formElements/textFields/formProps';
import ValidationTextFields from '../../../../views/form/formElements/textFields/validation';
import MultilineTextFields from '../../../../views/form/formElements/textFields/multiLine';
import SelectTextFields from '../../../../views/form/formElements/textFields/select';
import InputWithIcon from '../../../../views/form/formElements/textFields/icons';
import InputAdornments from '../../../../views/form/formElements/textFields/inputAdornments';
import TextFieldSizes from '../../../../views/form/formElements/textFields/sizes';
import LayoutTextFields from '../../../../views/form/formElements/textFields/margin';
import FullWidthTextField from '../../../../views/form/formElements/textFields/fullwidth';
import StateTextFields from '../../../../views/form/formElements/textFields/stateTextFields';
import Inputs from '../../../../views/form/formElements/textFields/input';
import ColorTextFields from '../../../../views/form/formElements/textFields/color';

const FormElements = () => {
    return (
        <div>
            <h1 style={{ color: "#1976d2" }}>Text Field</h1>
            <p>Text fields allow users to enter text into a UI. They typically appear in forms and dialogs.</p>
            <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                <Grid container spacing={3} className='match-height'>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title='Basic TextField' />
                            <CardContent>
                                <Typography>The TextField wrapper component is a complete form control including a label, input, and help text. It comes with three variants: outlined (default), filled, and standard.</Typography>
                                <Box textAlign="center">
                                    <BasicTextFields />
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
                            <CardHeader title='Form props' />
                            <CardContent>
                                <Typography>Standard form attributes are supported e.g. required, disabled, type, etc. as well as a helperText which is used to give context about a field's input, such as how the input will be used.</Typography>
                                <Box textAlign="center" style={{ marginTop: "50px" }}>
                                    <FormPropsTextFields />
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
                            <CardHeader title='Validation' />
                            <CardContent>
                                <Typography>The error prop toggles the error state. The helperText prop can then be used to provide feedback to the user about the error.</Typography>
                                <Box textAlign="center" style={{ marginTop: "50px" }}>
                                    <ValidationTextFields />
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
                            <CardHeader title='Multiline' />
                            <CardContent>
                                <Typography>The multiline prop transforms the text field into a TextareaAutosize element. Unless the rows prop is set, the height of the text field dynamically matches its content (using TextareaAutosize). You can use the minRows and maxRows props to bound it.</Typography>
                                <Box textAlign="center" style={{ marginTop: "50px" }}>
                                    <MultilineTextFields />
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
                            <CardHeader title='Select' />
                            <CardContent>
                                <Typography>The select prop makes the text field use the Select component internally.</Typography>
                                <Box textAlign="center" style={{ marginTop: "50px" }}>
                                    <SelectTextFields />
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
                            <CardHeader title='Icons' />
                            <CardContent>
                                <Typography>There are multiple ways to display an icon with a text field.</Typography>
                                <Box textAlign="center" style={{ marginTop: "50px" }}>
                                    <InputWithIcon />
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
                            <CardHeader title='Input Adornments' />
                            <CardContent>
                                <Typography>The main way is with an InputAdornment. This can be used to add a prefix, a suffix, or an action to an input. For instance, you can use an icon button to hide or reveal the password.</Typography>
                                <Box textAlign="center" style={{ marginTop: "50px" }}>
                                    <InputAdornments />
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
                            <CardHeader title='Sizes' />
                            <CardContent>
                                <Typography>Fancy smaller inputs? Use the size prop.</Typography>
                                <Box textAlign="center" style={{ marginTop: "50px" }}>
                                    <TextFieldSizes />
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
                            <CardHeader title='Margin' />
                            <CardContent>
                                <Typography>The margin prop can be used to alter the vertical spacing of the text field. Using none (default) doesn't apply margins to the FormControl whereas dense and normal do.</Typography>
                                <Box textAlign="center" style={{ marginTop: "50px" }}>
                                    <LayoutTextFields />
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
                            <CardHeader title='Full width' />
                            <CardContent>
                                <Typography>fullWidth can be used to make the input take up the full width of its container.</Typography>
                                <Box textAlign="center" style={{ marginTop: "50px" }}>
                                    <FullWidthTextField />
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
                            <CardHeader title='Uncontrolled vs. Controlled' />
                            <CardContent>
                                <Typography>The component can be controlled or uncontrolled.</Typography>
                                <ul>
                                    <li>A component is controlled when it's managed by its parent using props.</li>
                                    <li>A component is uncontrolled when it's managed by its own local state.</li>
                                </ul>
                                <Box textAlign="center" style={{ marginTop: "50px" }}>
                                    <StateTextFields />
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
                            <CardHeader title='Inputs' />
                            <CardContent>
                                <Box textAlign="center" style={{ marginTop: "50px" }}>
                                    <Inputs/>
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
                            <CardHeader title='Color' />
                            <CardContent>
                                <Typography>The color prop changes the highlight color of the text field when focused.</Typography>
                                <Box textAlign="center" style={{ marginTop: "50px" }}>
                                    <ColorTextFields/>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default FormElements
