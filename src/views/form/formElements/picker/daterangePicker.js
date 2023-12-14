import { useState } from 'react'
// ** Third Party Imports
import addDays from 'date-fns/addDays'
import DatePicker from 'react-datepicker'


import CustomInput from './customInput'

const DaterangePicker = ({ popperPlacement }) => {
    // ** States
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(addDays(new Date(), 15))
  const [startDateRange, setStartDateRange] = useState(new Date())
  const [endDateRange, setEndDateRange] = useState(addDays(new Date(), 45))

  const handleOnChange = dates => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }
  const handleOnChangeRange = dates => {
    const [start, end] = dates
    setStartDateRange(start)
    setEndDateRange(end)
  }


  return (
    <div style={{display:"flex", gap:"100px"}}>
      <div >
        <label>Date Range</label>
        <br/>
        <DatePicker
          selectsRange
          endDate={endDate}
          selected={startDate}
          startDate={startDate}
          id='date-range-picker'
          onChange={handleOnChange}
          shouldCloseOnSelect={false}
          popperPlacement={popperPlacement}
          customInput={<CustomInput start={startDate} end={endDate} />}
        />
      </div>
      <div>
        <label>Multiple Months</label>
        <br/>
        <DatePicker
          selectsRange
          monthsShown={2}
          endDate={endDateRange}
          selected={startDateRange}
          startDate={startDateRange}
          shouldCloseOnSelect={false}
          id='date-range-picker-months'
          onChange={handleOnChangeRange}
          popperPlacement={popperPlacement}
          customInput={<CustomInput end={endDateRange} start={startDateRange} />}
        />
      </div>
    </div>
  )
}

export default DaterangePicker