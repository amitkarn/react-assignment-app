/**
 * Created by mymac on 01/05/19.
 */
import React from 'react'
import './style.scss'

/*First Name
 Last Name
 Email Address
 Password
 Mobile Number
 */
const Registration = (props) => {
    console.log(props)
    return (
        <div className="auth-form">
            <legend className="form-name">Registration Form</legend>
            <form onSubmit={(event)=> {
                event.preventDefault();
                props.onSubmit({
                    firstName: event.target.elements.firstName.value,
                    lastName: event.target.elements.lastName.value,
                    email: event.target.elements.email.value,
                    password: event.target.elements.password.value,
                    mobile: event.target.elements.mobile.value,
                })
            }}>
                <div className="form-wrapper">
                    <label htmlFor="first-name">First Name</label>
                    <input id="first-name" type="text" name="firstName" required className="form-field"/>
                </div>
                <div className="form-wrapper">
                    <label htmlFor="last-name">Last Name</label>
                    <input id="last-name" type="text" name="lastName" required className="form-field"/>
                </div>
                <div className="form-wrapper">
                    <label htmlFor="email-address">Email Address</label>
                    <input id="email-address" type="email" name="email" required className="form-field"/>
                </div>
                <div className="form-wrapper">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" name="password" required className="form-field"/>
                </div>
                <div className="form-wrapper">
                    <label htmlFor="mobile-number">Mobile Number</label>
                    <input id="mobile-number" type="number" name="mobile" required className="form-field"/>
                </div>
                <div className="form-wrapper">
                    <button className="form-button">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Registration;