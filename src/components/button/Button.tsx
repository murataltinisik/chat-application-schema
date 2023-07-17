import * as React from 'react';
import './style.css';

const Button = ({ role = 'button', text = 'Button' }) => {
  return (
    <button role={role} className="form-button">
      {text}
    </button>
  );
};

export default Button;
