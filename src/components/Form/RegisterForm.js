import React from 'react';
import { useRef } from 'react';
import FieldItem from './FieldItem';
import './Form.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const RegisterForm = () => {
    let history = useHistory();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        };

        await axios({
          method: 'post',
          url: `${process.env.REACT_APP_BASE_API_URL}/users/register`,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
          data: data
        }).then((response) => {
          localStorage.setItem('__TOKEN__', response.data.token);
          history.push('/home');
        }).catch((error) => {
            console.error('There was an error!', error);
        });
    };

    return (
      <form className="form-form" onSubmit={handleSubmit} >
        <FieldItem ref={firstNameRef} label="First Name:" type="text" />
        <FieldItem ref={lastNameRef} label="Last Name:" type="text" />
        <FieldItem ref={emailRef} label="Email:" type="email" />
        <FieldItem ref={passwordRef} label="Password:" type="password" />
        <div>
          <button className="submit-btn-form" type="submit">Register</button>
        </div>
      </form>
    );
};

export default RegisterForm;
