import * as React from 'react';
import Button from '../components/button/Button';
import Input from '../components/input/Input';
import Message from '../components/message/Message';
import './style.css';

const Chat = () => {
  return (
    <div className="chat-container">
      {/* HEAD */}
      <div className="head">
        <h1>Chat Application</h1>
      </div>

      {/* BODY */}
      <div className="body">
        <div>
          <Message
            username="User 1"
            date="15.07.2023"
            text="lorem ipsum dolor."
          />
        </div>

        <div className="right">
          <Message
            username="User 1"
            date="15.07.2023"
            text="lorem ipsum dolor."
          />
        </div>

        <div>
          <Message
            username="User 1"
            date="15.07.2023"
            text="lorem ipsum dolor."
          />
        </div>

        <div className="right">
          <Message
            username="User 1"
            date="15.07.2023"
            text="lorem ipsum dolor."
          />
        </div>
      </div>

      {/* FOOT */}
      <div className="foot">
        <Input placeholder="Enter message" name="message" />
        <Button role="button" text="Send" />
      </div>
    </div>
  );
};

export default Chat;
