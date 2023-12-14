import { useState} from 'react'
// ** Third Party Imports
import subDays from 'date-fns/subDays'
import addDays from 'date-fns/addDays'
import DatePicker from 'react-datepicker'


import CustomInput from './customInput'

const PickersMinMax = ({ popperPlacement }) => {
  // ** States
  const [minDate, setMinDate] = useState(new Date())
  const [maxDate, setMaxDate] = useState(new Date())


  return (
    <div style={{ display: 'flex', gap:"100px" }} className='demo-space-x'>
      <div>
        <label>Min Date</label>
        <br/>
        <DatePicker
          id='min-date'
          selected={minDate}
          minDate={subDays(new Date(), 5)}
          popperPlacement={popperPlacement}
          onChange={date => setMinDate(date)}
          customInput={<CustomInput/>}
        />
      </div>
      <div>
        <label>Max Date</label>
        <br/>
        <DatePicker
          id='max-date'
          selected={maxDate}
          maxDate={addDays(new Date(), 5)}
          popperPlacement={popperPlacement}
          onChange={date => setMaxDate(date)}
          customInput={<CustomInput/>}
        />
      </div>
    </div>
  )
}

export default PickersMinMax
