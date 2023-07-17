import * as React from 'react';
import './style.css';

const Message = ({ username, date, text }) => {
  return (
    <div className="message">
      {/* HEAD */}
      <div className="head">
        <p className="name">{username}</p>
        <span className="date">{date}</span>
      </div>

      {/* CONTENT */}
      <div className="content">{text}</div>
    </div>
  );
};

export default Message;
