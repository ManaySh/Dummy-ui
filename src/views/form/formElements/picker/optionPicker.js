// ** React Imports
import { useState } from 'react'


// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Custom Component Imports
import CustomInput from './customInput'

const OptionPicker = ({ popperPlacement }) => {
    // ** States
    const [dateOpen, setDateOpen] = useState(null)
    const [dateClear, setDateClear] = useState(new Date())
    const [dateFilter, setDateFilter] = useState(new Date())
    const [dateWeekNum, setDateWeekNum] = useState(new Date())
    const [dateTodayBtn, setDateTodayBtn] = useState(new Date())

    const isWeekday = date => {
        const day = new Date(date).getDay()

        return day !== 0 && day !== 6
    }

    return (
        <div style={{ display: 'flex', gap: "100px" }} className='demo-space-x'>
            <div>
                <label>Clear</label>
                <br />
                <DatePicker
                    isClearable
                    id='picker-clear'
                    selected={dateClear}
                    popperPlacement={popperPlacement}
                    customInput={<CustomInput />}
                    onChange={date => setDateClear(date)}
                />
            </div>
            <div>
                <label>Week Numbers</label>
                <br />
                <DatePicker
                    weekLabel='Wk'
                    showWeekNumbers
                    id='picker-week-num'
                    selected={dateWeekNum}
                    popperPlacement={popperPlacement}
                    onChange={date => setDateWeekNum(date)}
                    customInput={<CustomInput />}
                />
            </div>
            <div>
                <label>Filter Dates</label>
                <br />
                <DatePicker
                    id='picker-filter'
                    selected={dateFilter}
                    filterDate={isWeekday}
                    popperPlacement={popperPlacement}
                    onChange={date => setDateFilter(date)}
                    customInput={<CustomInput />}
                />
            </div>
            <div>
                <label>Open To Date</label>
                <DatePicker
                    showYearDropdown
                    showMonthDropdown
                    selected={dateOpen}
                    id='picker-open-date'
                    popperPlacement={popperPlacement}
                    openToDate={new Date('1993/09/28')}
                    onChange={date => setDateOpen(date)}
                    customInput={<CustomInput label='Open To Date' />}
                />
            </div>
            <div>
                <label>Date Today Button</label>
                <br />
                <DatePicker
                    todayButton='Today'
                    selected={dateTodayBtn}
                    id='picker-date-today-btn'
                    popperPlacement={popperPlacement}
                    onChange={date => setDateTodayBtn(date)}
                    customInput={<CustomInput />}
                />
            </div>
        </div>
    )
}

export default OptionPicker
