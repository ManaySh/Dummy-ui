// ** React Imports
import { useState } from 'react'


// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Custom Component Imports
import CustomInput from './customInput'

const MonthandYearDropdownPicker = ({ popperPlacement }) => {
    // ** States
    const [year, setYear] = useState(new Date())
    const [month, setMonth] = useState(new Date())
    const [monthYear, setMonthYear] = useState(new Date())

    return (
        <div style={{ display: 'flex', gap: "100px" }} className='demo-space-x'>
            <div>
                <label>Month Dropdown</label>
                <br />
                <DatePicker
                    selected={month}
                    showMonthDropdown
                    id='month-dropdown'
                    placeholderText='MM-DD-YYYY'
                    popperPlacement={popperPlacement}
                    onChange={date => setMonth(date)}
                    customInput={<CustomInput />}
                />
            </div>
            <div>
                <label>Year Dropdown</label>
                <br />
                <DatePicker
                    selected={year}
                    showYearDropdown
                    id='year-dropdown'
                    placeholderText='MM-DD-YYYY'
                    popperPlacement={popperPlacement}
                    onChange={date => setYear(date)}
                    customInput={<CustomInput />}
                />
            </div>
            <div>
                <label>Month & Year Dropdown</label>
                <br />
                <DatePicker
                    showYearDropdown
                    showMonthDropdown
                    selected={monthYear}
                    id='month-year-dropdown'
                    placeholderText='MM-DD-YYYY'
                    popperPlacement={popperPlacement}
                    onChange={date => setMonthYear(date)}
                    customInput={<CustomInput />}
                />
            </div>
        </div>
    )
}

export default MonthandYearDropdownPicker
