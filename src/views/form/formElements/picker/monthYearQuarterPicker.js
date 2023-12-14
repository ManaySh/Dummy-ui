// ** React Imports
import { useState } from 'react'


// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Custom Component Imports
import CustomInput from './customInput'

const MonthYearQuarterPicker = ({ popperPlacement }) => {
    // ** States
    const [year, setYear] = useState(new Date())
    const [month, setMonth] = useState(new Date())
    const [quarter, setQuarter] = useState(new Date())

    return (
        <div style={{ display: 'flex', gap: "100px" }} >
            <div>
                <label>Month Picker</label>
                <br />
                <DatePicker
                    selected={month}
                    id='month-picker'
                    showMonthYearPicker
                    dateFormat='MM/yyyy'
                    popperPlacement={popperPlacement}
                    onChange={date => setMonth(date)}
                    customInput={<CustomInput />}
                />
            </div>
            <div>
                <label>Year Picker</label>
                <br />
                <DatePicker
                    showYearPicker
                    selected={year}
                    id='year-picker'
                    dateFormat='MM/yyyy'
                    popperPlacement={popperPlacement}
                    onChange={date => setYear(date)}
                    customInput={<CustomInput />}
                />
            </div>
            <div>
                <label>Quarter Picker</label>
                <br />
                <DatePicker
                    selected={quarter}
                    id='quarter-picker'
                    showQuarterYearPicker
                    dateFormat='yyyy, QQQ'
                    popperPlacement={popperPlacement}
                    onChange={date => setQuarter(date)}
                    customInput={<CustomInput />}
                />
            </div>
        </div>
    )
}

export default MonthYearQuarterPicker
