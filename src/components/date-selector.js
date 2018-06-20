import React from 'react';
import DatePicker from 'react-datepicker';
import DateInput from './date-input';

export default ({ dateLabel, selected, onChange }) => (
    <DatePicker
        selected={selected}
        onChange={onChange}
        customInput={<DateInput dateLabel={dateLabel} />}
    />
);