// ** React Imports
import { useState } from 'react'

// ** Third Party Imports
import addDays from 'date-fns/addDays'
import subDays from 'date-fns/subDays'
import setHours from 'date-fns/setHours'
import DatePicker from 'react-datepicker'
import setMinutes from 'date-fns/setMinutes'

// ** Custom Component Imports
import CustomInput from './customInput'

const IncludeExcludePicker = ({ popperPlacement }) => {
  // ** States
  const [date, setDate] = useState(new Date())
  const [dateExclude, setDateExclude] = useState(new Date())
  const [time, setTime] = useState(setHours(setMinutes(new Date(), 0), 18))
  const [timeExclude, setTimeExclude] = useState(setHours(setMinutes(new Date(), 0), 18))

  return (
    <div style={{ display: 'flex', gap: "100px" }} className='demo-space-x'>
      <div>
        <label>Include Dates</label>
        <br />
        <DatePicker
          selected={date}
          id='include-dates'
          popperPlacement={popperPlacement}
          onChange={date => setDate(date)}
          customInput={<CustomInput />}
          includeDates={[new Date(), addDays(new Date(), 1)]}
        />
      </div>
      <div>
        <label>Exclude Dates</label>
        <br />
        <DatePicker
          id='exclude-dates'
          selected={dateExclude}
          popperPlacement={popperPlacement}
          onChange={date => setDateExclude(date)}
          customInput={<CustomInput />}
          excludeDates={[subDays(new Date(), 1), subDays(new Date(), 2)]}
        />
      </div>
      <div>
        <label>Include Time</label>
        <br />
        <DatePicker
          showTimeSelect
          selected={time}
          id='include-time'
          dateFormat='MM/dd/yyyy h:mm aa'
          popperPlacement={popperPlacement}
          onChange={date => setTime(date)}
          customInput={<CustomInput />}
          includeTimes={[
            setHours(setMinutes(new Date(), 0), 17),
            setHours(setMinutes(new Date(), 30), 18),
            setHours(setMinutes(new Date(), 30), 19),
            setHours(setMinutes(new Date(), 30), 17)
          ]}
        />
      </div>
      <div>
        <label>Exclude Time</label>
        <br />
        <DatePicker
          showTimeSelect
          id='exclude-time'
          selected={timeExclude}
          dateFormat='MM/dd/yyyy h:mm aa'
          popperPlacement={popperPlacement}
          onChange={date => setTimeExclude(date)}
          customInput={<CustomInput />}
          excludeTimes={[
            setHours(setMinutes(new Date(), 0), 17),
            setHours(setMinutes(new Date(), 30), 18),
            setHours(setMinutes(new Date(), 30), 19),
            setHours(setMinutes(new Date(), 30), 17)
          ]}
        />
      </div>
    </div>
  )
}

export default IncludeExcludePicker
