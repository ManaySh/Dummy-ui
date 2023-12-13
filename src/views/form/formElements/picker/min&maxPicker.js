import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import subDays from 'date-fns/subDays';
import addDays from 'date-fns/addDays';
import 'react-datepicker/dist/react-datepicker.css';

const MinMaxDates = () => {
  const [minDate, setMinDate] = useState(null);
  const [maxDate, setMaxDate] = useState(null);

  // CustomInput component to apply styles to the input
  const CustomInput = ({ value, onClick, placeholder }) => (
    <input
      value={value}
      onClick={onClick}
      placeholder={placeholder}  // Use the placeholder directly
      style={{ width: '100%', padding: '10px' }}
    />
  );

  return (
    <div style={{ display: 'flex', gap: '100px' }}>
      <div>
        <label>Min Date</label>
        <br />
        <DatePicker
          selected={minDate}
          onChange={(date) => setMinDate(date)}
          minDate={subDays(new Date(), 5)}
          placeholderText="Select a date after 5 days ago"
          customInput={<CustomInput placeholder="Select a date after 5 days ago" />}
        />
      </div>
      <div>
        <label>Max Date</label>
        <br />
        <DatePicker
          selected={maxDate}
          onChange={(date) => setMaxDate(date)}
          maxDate={addDays(new Date(), 5)}
          placeholderText="Select a date before 5 days in the future"
          customInput={<CustomInput placeholder="Select a date before 5 days in the future" />}
        />
      </div>
    </div>
  );
};

export default MinMaxDates;
