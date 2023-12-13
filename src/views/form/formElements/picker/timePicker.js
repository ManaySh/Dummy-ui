import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TimePicker = () => {
    const [startDate, setStartDate] = useState(new Date());
      // CustomInput component to apply styles to the input
      const CustomInput = ({ value, onClick }) => (
        <input
            value={value}
            onClick={onClick}
            style={{ width: '100%', padding: '10px' }} 
        />
    );
    return (
        <div style={{ display: "flex", gap: "100px" }}>
            <div >
                <label>Time Only</label>
                <br />
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    customInput={<CustomInput />}
                />
            </div>
            <div>
                <label>Date & Time</label>
                <br />
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    timeCaption="time"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    customInput={<CustomInput />}
                />
            </div>
        </div>
    );

}

export default TimePicker