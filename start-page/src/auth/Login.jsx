import React, { useState } from "react";
import { userService } from '../_services/user.service';
import { useNavigate } from "react-router-dom";


export const Login = (props) => {
    const nav = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

        // stop here if form is invalid
        if (!(email && password)) {
            return;
        }

        userService.login(email, password)
            .then(
                user => {
                    console.log(user);
                    console.log("It`ssocoolsonofabitch!");
                    nav('/home');
                }
            );



    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}