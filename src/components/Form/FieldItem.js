import React, { forwardRef } from 'react';
import './Form.css';

const FieldItem = forwardRef(({label, type ,min , step}, ref) => {
    return (
      <div>
        <label className="label-form">{label}</label>
        <input className="input-form"ref={ref} type={type} min={min}  step={step} />
      </div>
    );
});

export default FieldItem;