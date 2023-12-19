import React from 'react';
import Grid from '@mui/material/Grid';
import { Card, CardContent, CardHeader, Box, Typography } from '@mui/material';

import InputMaskExamples from '../../../../views/form/formElements/input-mask/inpustmaskExamples';



const InputMask = () => {
    return (
        <div>
            <h1 style={{ color: "#1976d2" }}>Clave.js</h1>
            <Typography >Format input text content when you are typing</Typography>
            <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                <Grid container spacing={3} className='match-height'>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title='Input Masks' />
                            <CardContent>
                                <Box textAlign="center">
                                    <InputMaskExamples />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
           
        </div>
    )
}

export default InputMask