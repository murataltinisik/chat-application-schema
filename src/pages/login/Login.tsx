import * as React from 'react';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import './style.css';

const Login = () => {
  return (
    <div className="login-container">
      <Input placeholder="Username" name="username" />

      <Button text="Connect to Chat App" />
    </div>
  );
};

export default Login;
