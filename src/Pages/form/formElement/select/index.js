import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Card, CardContent, CardHeader, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
// ** Demo Components Imports
import BasicSelect from '../../../../views/form/formElements/select/basicSelect';
import SelectVariants from '../../../../views/form/formElements/select/selectVariants';
import SelectLabels from '../../../../views/form/formElements/select/selectLabel';
import SelectAutoWidth from '../../../../views/form/formElements/select/selectAutoWidth';
import SelectSmall from '../../../../views/form/formElements/select/selectSmall';
import SelectOtherProps from '../../../../views/form/formElements/select/oterProps';
import NativeSelectDemo from '../../../../views/form/formElements/select/nativeSelect';
import GroupedSelect from '../../../../views/form/formElements/select/groupedSelect';
import MultipleSelect from '../../../../views/form/formElements/select/defaultMultipleSelect';
import SelectCheckmarks from '../../../../views/form/formElements/select/checkMarks';
import MultipleSelectChip from '../../../../views/form/formElements/select/multipleSelectChip';
import MultipleSelectPlaceholder from '../../../../views/form/formElements/select/multipleSelectPlaceholder';
import CustomizedSelects from '../../../../views/form/formElements/select/customizedSelect';

const Select = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <div>
            <h1 style={{ color: "#1976d2" }}>Select</h1>
            <p>Select components are used for collecting user provided information from a list of options.</p>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={4}>
                    <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                        <Grid container spacing={4} className='match-height'>
                            <Grid item xs={12}>
                                <Card>
                                    <CardHeader title='Basic select' />
                                    <CardContent>
                                        <Typography>Menus are positioned under their emitting elements, unless they are close to the bottom of the viewport.</Typography>
                                        <Box textAlign="center" style={{ marginTop: "20px" }}>
                                            <BasicSelect />
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                        <Grid container spacing={4} className='match-height'>
                            <Grid item xs={12}>
                                <Card>
                                    <CardHeader title='Filled and standard variants' />
                                    <CardContent>
                                        <Box textAlign="center" style={{ marginTop: "20px" }}>
                                            <SelectVariants />
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                        <Grid container spacing={4} className='match-height'>
                            <Grid item xs={12}>
                                <Card>
                                    <CardHeader title='Labels and helper text' />
                                    <CardContent>
                                        <Box textAlign="center" style={{ marginTop: "20px" }}>
                                            <SelectLabels />
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{marginTop:"20px"}}>
                <Grid item xs={4}>
                    <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                        <Grid container spacing={4} className='match-height'>
                            <Grid item xs={12}>
                                <Card>
                                    <CardHeader title='Auto width' />
                                    <CardContent>
                                        <Box textAlign="center" style={{ marginTop: "20px" }}>
                                            <SelectAutoWidth />
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                        <Grid container spacing={4} className='match-height'>
                            <Grid item xs={12}>
                                <Card>
                                    <CardHeader title='Small Size' />
                                    <CardContent>
                                        <Box textAlign="center" style={{ marginTop: "20px" }}>
                                            <SelectSmall/>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                        <Grid container spacing={4} className='match-height'>
                            <Grid item xs={12}>
                                <Card>
                                    <CardHeader title='Native select' />
                                    <CardContent>
                                        <Typography>As the user experience can be improved on mobile using the native select of the platform, we allow such pattern</Typography>
                                        <Box textAlign="center" style={{ marginTop: "20px" }}>
                                            <NativeSelectDemo/>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{marginTop:"20px"}}>
                <Grid item xs={6}>
                    <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                        <Grid container spacing={4} className='match-height'>
                            <Grid item xs={12}>
                                <Card>
                                    <CardHeader title='Other props' />
                                    <CardContent>
                                        <Box textAlign="center" style={{ marginTop: "20px" }}>
                                            <SelectOtherProps/>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                        <Grid container spacing={4} className='match-height'>
                            <Grid item xs={12}>
                                <Card>
                                    <CardHeader title='Grouping' />
                                    <CardContent>
                                        <Typography>Display categories with the ListSubheader component or the native "optgroup" element.</Typography>
                                        <Box textAlign="center" style={{ marginTop: "20px" }}>
                                            <GroupedSelect/>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>  
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{marginTop:"20px"}}>
                <Grid item xs={12}>
                    <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                        <Grid container spacing={4} className='match-height'>
                            <Grid item xs={12}>
                                <Card>
                                    <CardHeader title='Customization' />
                                    <CardContent>
                                        <Typography>The first step is to style the InputBase component. Once it's styled, you can either use it directly as a text field or provide it to the select input prop to have a select field. Notice that the "standard" variant is easier to customize, since it does not wrap the contents in a fieldset/legend markup.</Typography>
                                        <Box textAlign="center" style={{ marginTop: "20px" }}>
                                            <CustomizedSelects/>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </Grid> 
              
            </Grid>
            <h3>Multiple select</h3>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{marginTop:"20px"}}>
                <Grid item xs={3}>
                    <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                        <Grid container spacing={4} className='match-height'>
                            <Grid item xs={12}>
                                <Card>
                                    <CardHeader title='Default' />
                                    <CardContent>
                                        <Box textAlign="center" style={{ marginTop: "20px" }}>
                                            <MultipleSelect/>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                        <Grid container spacing={4} className='match-height'>
                            <Grid item xs={12}>
                                <Card>
                                    <CardHeader title='Checkmarks' />
                                    <CardContent>
                                        <Box textAlign="center" style={{ marginTop: "20px" }}>
                                            <SelectCheckmarks/>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                        <Grid container spacing={4} className='match-height'>
                            <Grid item xs={12}>
                                <Card>
                                    <CardHeader title='Chip' />
                                    <CardContent>
                                        <Box textAlign="center" style={{ marginTop: "20px" }}>
                                            <MultipleSelectChip/>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                        <Grid container spacing={4} className='match-height'>
                            <Grid item xs={12}>
                                <Card>
                                    <CardHeader title='Placeholder' />
                                    <CardContent>
                                        <Box textAlign="center" >
                                            <MultipleSelectPlaceholder/>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
              
            </Grid>
           
         

        </div>
    )
}

export default Select

