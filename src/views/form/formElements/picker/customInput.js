import { forwardRef } from 'react'
import CustomTextField from './customTextField'
const CustomInput = forwardRef(({ ...props }, ref) => {
    // ** Props
    const { label, readOnly } = props
  
    return (
      <CustomTextField
        {...props}
        inputRef={ref}
        label={label || ''}
        {...(readOnly && { inputProps: { readOnly: true } })}
      />
    )
  })

export default CustomInput