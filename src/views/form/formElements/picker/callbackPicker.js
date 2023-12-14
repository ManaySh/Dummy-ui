// ** React Imports
import { useState } from 'react';

// ** Third Party Imports
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';

import CustomInput from './customInput';

const CallbackPicker = ({ popperPlacement }) => {
  // ** States
  const [date, setDate] = useState(new Date());

  const handlePickerCallback = (msg) => {
    toast(msg, { autoClose: 2000 });
  };

  return (
    <div style={{ display: 'flex', gap: '100px' }} className='demo-space-x'>
      <div>
        <label>Open & Closed</label>
        <br />
        <DatePicker
          selected={date}
          id='callback-open'
          dateFormat='MM/dd/yyyy'
          popperPlacement={popperPlacement}
          onChange={(newDate) => {
            setDate(newDate);
            handlePickerCallback(`Selected Date: ${new Date(newDate || '').toLocaleDateString()}`);
          }}
          customInput={<CustomInput />}
          onCalendarOpen={() => handlePickerCallback('Picker Opened')}
          onCalendarClose={() => handlePickerCallback('Picker Closed')}
        />
      </div>
      <div>
        <label>Blur</label>
        <br />
        <DatePicker
          selected={date}
          id='callback-blur'
          popperPlacement={popperPlacement}
          onChange={(newDate) => {
            setDate(newDate);
            handlePickerCallback('Picker Closed');
          }}
          customInput={<CustomInput />}
          onBlur={() => handlePickerCallback('Picker Closed')}
        />
      </div>
      <div>
        <label>onChange</label>
        <br />
        <DatePicker
          selected={date}
          id='callback-change'
          popperPlacement={popperPlacement}
          customInput={<CustomInput />}
          onChange={(newDate) => {
            setDate(newDate);
            handlePickerCallback(`Selected Date: ${new Date(newDate || '').toLocaleDateString()}`);
          }}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default CallbackPicker;
