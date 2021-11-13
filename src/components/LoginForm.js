import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import FieldItem from './FieldItem';
import './Form.css';
import axios from 'axios';

const LoginForm = () => {
    let history = useHistory();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };
        console.log(data);
        
        await axios({
          method: 'post',
          url: 'http://localhost:3000/api/login',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
          data: data
        }).then((response) => {
          localStorage.setItem('__TOKEN__', response.data);
          history.push('/home');
        }).catch((error) => {
            console.error('There was an error!', error);
        });
    };

    return (
      <form className="form-form" onSubmit={handleSubmit} >
        <FieldItem ref={emailRef} label="Email:" type="email" />
        <FieldItem ref={passwordRef} label="Password:" type="password" />
        <div>
          <button className="submit-btn-form" type="submit">Login</button>
          <button className="submit-btn-form" onClick={() => {history.push('/register')}}>Sign in</button>
        </div>
      </form>
    );
};

export default LoginForm;
