// ** React Imports
import { useState} from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'

// ** Third Party Imports
import subDays from 'date-fns/subDays'
import addDays from 'date-fns/addDays'
import DatePicker from 'react-datepicker'

import CustomInput from './customInput'


const CustomizedPicker = ({ popperPlacement }) => {
  // ** States
  const [dateFormat, setDateFormat] = useState(new Date())
  const [dateHighlight, setDateHighlight] = useState(new Date())

  return (
    <Box style={{ display: 'flex', gap:"100px" }} className='demo-space-x'>
      <div>
        <label>Custom Date Format</label>
        <br/>
        <DatePicker
          id='custom-format'
          selected={dateFormat}
          dateFormat='MMMM d, yyyy'
          popperPlacement={popperPlacement}
          onChange={date => setDateFormat(date)}
          customInput={<CustomInput/>}
        />
      </div>
      <div>
        <label>Highlight Dates</label>
        <br/>
        <DatePicker
          id='highlight-dates'
          selected={dateHighlight}
          popperPlacement={popperPlacement}
          onChange={date => setDateHighlight(date)}
          customInput={<CustomInput/>}
          highlightDates={[subDays(new Date(), 7), addDays(new Date(), 7)]}
        />
      </div>
    </Box>
  )
}

export default CustomizedPicker
