// ** React Imports
import { useState } from 'react'
import TextField from '@mui/material/TextField'

const TextareaCustom = () => {
  // ** State
  const [value, setValue] = useState('Controlled')

  const handleChange = event => {
    setValue(event.target.value)
  }

  return (
    <form noValidate autoComplete='off' className='demo-space-x' style={{display:"flex", gap:"25px", marginTop:"20px"}}>
      <TextField
        multiline
        maxRows={4}
        value={value}
        label='Multiline'
        onChange={handleChange}
        id='textarea-outlined-controlled'
      />
      <TextField multiline id='textarea-outlined' placeholder='Placeholder' label='Multiline Placeholder' />
      <TextField
        rows={4}
        multiline
        label='Multiline'
        defaultValue='Default Value'
        id='textarea-outlined-static'
      />
    </form>
  )
}

export default TextareaCustom
