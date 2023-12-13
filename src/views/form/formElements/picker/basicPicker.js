import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function CustomSizeDatePicker() {
    const [date, setDate] = useState(new Date());
    const isDisabled = true;

    const customStyles = {
        width: '200px',      // Set the desired width
        fontSize: '14px',    // Set the desired font size
        // Add any other custom styles as needed
    };
    // CustomInput component to apply styles to the input
    const CustomInput = ({ value, onClick }) => (
        <input
            value={value}
            onClick={onClick}
            style={{ width: '100%', padding: '10px' }} // Adjust input styles as needed
        />
    );

    const CustomInputdisabled = ({ value, onClick }) => (
        <input
            value={value}
            onClick={isDisabled ? null : onClick} // Allow click only if not disabled
            style={{
                width: '100%',
                padding: '10px',
                cursor: isDisabled ? 'not-allowed' : 'pointer', // Change cursor for visual indication
                backgroundColor: isDisabled ? '#f0f0f0' : '#fff', // Change background color for visual indication
            }}
        />
    );

    return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
                <label>Basic</label>
                <br />
                {/* Enabled Date Picker */}
                <DatePicker
                    selected={date}
                    onChange={(newDate) => setDate(newDate)}
                    placeholderText='Click to select a date'
                    customInput={<CustomInput />}
                    dateFormat="MMMM d, yyyy"
                    popperPlacement="bottom"
                    popperModifiers={{
                        offset: {
                            enabled: true,
                            offset: '5px, 10px',
                        },
                        preventOverflow: {
                            enabled: true,
                            escapeWithReference: false,
                        },
                    }}
                    wrapperClassName="custom-datepicker-wrapper"
                    style={customStyles}
                />
            </div>

            {/* Disabled Date Picker */}
            <div>
                <label>Disabled</label>
                <br />
                <DatePicker
                    selected={date}
                    onChange={(newDate) => setDate(newDate)}
                    placeholderText='Click to select a date'
                    customInput={<CustomInputdisabled />}
                    dateFormat="MMMM d, yyyy"
                    popperPlacement="bottom"
                    popperModifiers={{
                        offset: {
                            enabled: true,
                            offset: '5px, 10px',
                        },
                        preventOverflow: {
                            enabled: true,
                            escapeWithReference: false,
                        },
                    }}
                    wrapperClassName={`custom-datepicker-wrapper ${isDisabled ? 'disabled' : ''}`}
                    style={{ ...customStyles, opacity: isDisabled ? 0.5 : 1 }}
                />
            </div>

            {/* Readonly Date Picker */}
            <div>
                <label>Readonly</label>
                <br />
                <DatePicker
                    selected={date}
                    onChange={(newDate) => setDate(newDate)}
                    placeholderText='Readonly'
                    customInput={<CustomInput />}
                    dateFormat="MMMM d, yyyy"
                    popperPlacement="bottom"
                    popperModifiers={{
                        offset: {
                            enabled: true,
                            offset: '5px, 10px',
                        },
                        preventOverflow: {
                            enabled: true,
                            escapeWithReference: false,
                        },
                    }}
                    wrapperClassName="custom-datepicker-wrapper"
                    style={customStyles}
                    readOnly
                />
            </div>
        </div>
    );
}


