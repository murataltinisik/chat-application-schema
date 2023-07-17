import * as React from 'react';
import './style.css';

const Input = ({ name, placeholder, type = 'text' }) => {
  return (
    <div className="form-box">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="form-control"
      />
    </div>
  );
};

export default Input;
