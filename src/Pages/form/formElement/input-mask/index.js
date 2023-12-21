import React from 'react';
import Grid from '@mui/material/Grid';
import { Card, CardContent, CardHeader, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles'

import InputMaskExamples from '../../../../views/form/formElements/input-mask/inpustmaskExamples';



const InputMask = () => {
    const CleaveWrapper = styled(Box)(({ theme }) => ({
        '& input': {
          width: '100%',
          background: 'none',
          lineHeight: 1.4375,
          padding: '7.5px 13px',
          color: theme.palette.text.primary,
          borderRadius: theme.shape.borderRadius,
          fontSize: theme.typography.body1.fontSize,
          fontFamily: theme.typography.body1.fontFamily,
          border: `1px solid gray, 0.2)`,
        border:'1px solid gray',
          transition: theme.transitions.create(['border-color', 'box-shadow']),
          '&:hover': {
            borderColor: '1px solid blue'
          },
          '&:focus, &:focus-visible': {
            outline: 0,
            boxShadow: theme.shadows[2],
            borderColor:'blue',
            '&::placeholder': {
              transform: 'translateX(4px)'
            }
          },
          '&::placeholder': {
            opacity: 0.42,
            transition: theme.transitions.create(['transform'], { duration: theme.transitions.duration.shorter })
          }
        }
      }))
      

    return (
        <div>
            <h1 style={{ color: "#1976d2" }}>Clave.js</h1>
            <Typography >Format input text content when you are typing</Typography>
            <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                <CleaveWrapper>
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
                </CleaveWrapper>
            </div>
           
        </div>
    )
}

export default InputMask