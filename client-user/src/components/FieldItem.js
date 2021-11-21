import React, { forwardRef } from 'react';
import './Form.css';

const FieldItem = forwardRef(({label, type}, ref) => {
    return (
      <div>
        <label className="label-form">{label}</label>
        <input className="input-form"ref={ref} type={type} />
      </div>
    );
});

export default FieldItem;