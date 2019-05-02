/**
 * Created by mymac on 01/05/19.
 */
import React from 'react'
import './style.scss'
const Login = (props) => {
    return (
        <div className="auth-form">
            <legend className="form-name">Login Form</legend>
            <form onSubmit={(event)=> {
                event.preventDefault();
                props.onSubmit({
                    email: event.target.elements.email.value,
                    password: event.target.elements.password.value
                })
            }}>
                <div className="form-wrapper">
                    <label htmlFor="login-email">Email Address</label>
                    <input id="login-email" type="email" name="email" className="form-field"/>
                </div>
                <div className="form-wrapper">
                    <label htmlFor="login-password">Password</label>
                    <input id="login-password" type="password" name="password" className="form-field"/>
                </div>
                <div className="form-wrapper">
                    <button className="form-button">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;