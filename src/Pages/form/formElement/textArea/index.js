import React from 'react';
import Grid from '@mui/material/Grid';
import { Card, CardContent, CardHeader, Box, Typography } from '@mui/material';

import TextareaCustom from '../../../../views/form/formElements/textArea/textAreaCustom';
import TextareaVariant from '../../../../views/form/formElements/textArea/textAreaVariants';


const TextArea = () => {
    return (
        <div>
            <h1 style={{ color: "#1976d2" }}>Text Area</h1>
            <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                <Grid container spacing={3} className='match-height'>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title='Custom' />
                            <CardContent>
                                <Typography>
                                    Use multiline prop with CustomTextField component to transform the custom text
                                    field into custom textarea.
                                </Typography>
                                <Box textAlign="center">
                                    <TextareaCustom />
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
                            <CardHeader title='Variants' />
                            <CardContent>
                                <Typography>
                                    Use multiline prop with TextField component to transform the text field into{' '}
                                   textarea. Use variant prop with TextField component for different
                                    variants of textarea.
                                </Typography>
                                <Box textAlign="center">
                                    <TextareaVariant />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>

        </div>
    )
}

export default TextArea