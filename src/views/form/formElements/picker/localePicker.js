// ** React Imports
import { useState } from 'react';

// ** MUI Imports
import fr from 'date-fns/locale/fr';
import ar from 'date-fns/locale/ar-SA';
import en from 'date-fns/locale/en-US';
import DatePicker, { registerLocale } from 'react-datepicker';

// ** Custom Component Imports
import CustomInput from './customInput';

const langObj = { fr, ar, en };

const LocalePicker = ({ popperPlacement, locale }) => {
  // ** States
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  // Register the locale directly using registerLocale
  registerLocale(locale, langObj[locale]);

  return (
    <div style={{ display: 'flex', gap: '100px' }} className='demo-space-x'>
      <div>
        <label>Locale Dates</label>
        <br />
        <DatePicker
          selected={date}
          id='locale-picker'
          locale={locale}
          popperPlacement={popperPlacement}
          onChange={(newDate) => setDate(newDate)}
          customInput={<CustomInput />}
        />
      </div>
      <div>
        <label>Locale Time</label>
        <br />
        <DatePicker
          showTimeSelect
          selected={time}
          id='locale-time'
          locale={locale}
          dateFormat='MM/dd/yyyy h:mm aa'
          popperPlacement={popperPlacement}
          onChange={(newDate) => setTime(newDate)}
          customInput={<CustomInput />}
        />
      </div>
    </div>
  );
};

export default LocalePicker;
