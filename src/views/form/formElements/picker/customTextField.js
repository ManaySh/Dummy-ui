import TextField from '@mui/material/TextField'
import { forwardRef } from 'react'

const CustomTextField = forwardRef((props, ref) => {
    // ** Props
    const { size = 'small', InputLabelProps, ...rest } = props

    return (
        <TextField
            size={size}
            inputRef={ref}
            {...rest}
            variant='filled'
            InputLabelProps={{ ...InputLabelProps, shrink: true }}
        />
    )
})

export default CustomTextField