import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {register} from '../redux/auth/auth-operations';
import "../styles/form.css";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const onNameChange = e => setName(e.target.value);
    const onEmailChange = e => setEmail(e.target.value);
    const onPasswordChange = e => setPassword(e.target.value);

    const onFormSubmit = e => {
        e.preventDefault();

        dispatch(register({name, email, password}));
        setName("");
        setEmail("");
        setPassword("");
    }

    return (
        <form onSubmit={onFormSubmit} className="form register">
            <label className="form-field">
            <p className="form-label-title">Name:</p>
                <input 
                    type="text" 
                    name="name" 
                    onChange={onNameChange}
                    required
                    autoComplete="off">
                </input>
            </label>
            <label className="form-field">
            <p className="form-label-title">Email:</p>
                <input 
                    type="email" 
                    name="email" 
                    onChange={onEmailChange}
                    required
                    autoComplete="off">
                </input>
            </label>
            <label className="form-field">
            <p className="form-label-title">Password:</p>
                <input 
                type="password" 
                name="password" 
                onChange={onPasswordChange}
                required>

                </input>
            </label>

            <button type="submit">Register</button>
        </form>
    )
} 

export default Register;