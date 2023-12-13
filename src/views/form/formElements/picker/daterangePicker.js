// import React from 'react'

// const DaterangePicker = () => {
//   return (
//     <div>daterangePicker</div>
//   )
// }

// export default DaterangePicker


import { useState, forwardRef } from 'react'
// ** Third Party Imports
import format from 'date-fns/format'
import addDays from 'date-fns/addDays'
import DatePicker from 'react-datepicker'
import TextField from '@mui/material/TextField'

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
  const CustomInput = forwardRef((props, ref) => {
    const startDate = format(props.start, 'MM/dd/yyyy')
    const endDate = props.end !== null ? format(props.end, 'MM/dd/yyyy') : null;
    const value = `${startDate}${endDate !== null ? ` - ${endDate}` : ''}`;
    return <CustomTextField inputRef={ref} label={props.label || ''} {...props} value={value} />
  })

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