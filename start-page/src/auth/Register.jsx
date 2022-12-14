import React, { useState } from "react";
import ResultPage from "../pages/ResultPage";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = {username, email, password};
        console.log(form);
        fetch("http://localhost:8080/fastest/signup", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
        }).then();
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Full name</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} name="username" id="username" placeholder="full Name" />
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button onClick={()=>handleSubmit()} type="submit">Sign Up</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}