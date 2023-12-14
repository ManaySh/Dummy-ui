// ** React Imports
import { useState} from 'react'

// ** Third Party Imports
import addDays from 'date-fns/addDays'
import setHours from 'date-fns/setHours'
import setMinutes from 'date-fns/setMinutes'
import DatePicker from 'react-datepicker'

import CustomInput from './customInput'

const SpecificRangePicker = ({ popperPlacement }) => {
  // ** States
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState(new Date())
 
  return (
    <div style={{display:"flex", gap:"100px"}} className='demo-space-x'>
      <div>
        <lael>Specific Date Range</lael>
        <br/>
        <DatePicker
          selected={date}
          id='specific-date'
          minDate={new Date()}
          maxDate={addDays(new Date(), 5)}
          popperPlacement={popperPlacement}
          onChange={date => setDate(date)}
          customInput={<CustomInput/>}
        />
      </div>
      <div>
        <label>Specific Time</label>
        <br/>
        <DatePicker
          showTimeSelect
          selected={time}
          id='specific-time'
          dateFormat='MM/dd/yyyy h:mm aa'
          popperPlacement={popperPlacement}
          onChange={date => setTime(date)}
          minTime={setHours(setMinutes(new Date(), 0), 17)}
          maxTime={setHours(setMinutes(new Date(), 30), 20)}
          customInput={<CustomInput />}
        />
      </div>
    </div>
  )
}

export default SpecificRangePicker
