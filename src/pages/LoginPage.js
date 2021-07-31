import React, {useState} from 'react';
import { useDispatch} from 'react-redux';
import {login} from '../redux/auth/auth-operations';
import "../styles/form.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()

    const onEmailChange = e => setEmail(e.target.value);
    const onPassChange = e => setPassword(e.target.value);

    const onFormSubmit = e => {
        e.preventDefault();
        dispatch(login({email, password}));
        setEmail("");
        setPassword("");
    }

    return (
        <form onSubmit={onFormSubmit} className="form login">
            <label className="form-field">
                <p className="form-label-title">Email:</p>
                <input type="email" required name="email" onChange={onEmailChange}></input>
            </label>
            <label className="form-field">
                <p className="form-label-title">Password:</p>
                <input type="password" minLength="3" required name="password" onChange={onPassChange}></input>
            </label>

            <button type="submit">Log in</button>
        </form>
    )
} 


export default Login;