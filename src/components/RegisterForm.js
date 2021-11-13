import { useRef } from 'react';
import FieldItem from './FieldItem';
import './Form.css';

const RegisterForm = () => {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.emailRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        };
        console.log(data);
    };

    return (
      <form className="form-form" onSubmit={handleSubmit} >
        <FieldItem ref={firstNameRef} label="First Name:" type="text" />
        <FieldItem ref={lastNameRef} label="Last Name:" type="text" />
        <FieldItem ref={emailRef} label="Email:" type="text" />
        <FieldItem ref={passwordRef} label="Password:" type="password" />
        <div>
          <button className="submit-btn-form" type="submit">Register</button>
        </div>
      </form>
    );
};

export default RegisterForm;
